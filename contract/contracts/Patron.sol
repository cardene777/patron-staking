// SPDX-License-Identifier: MIT

pragma solidity 0.8.20;

import { IERC20 } from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import { ReentrancyGuard } from "./lib/ReentrancyGuard.sol";
import { VerifySignature } from "./VerifySignature.sol";
import { IPatron } from "./interfaces/IPatron.sol";

contract Patron is VerifySignature, IPatron, ReentrancyGuard {

    struct StakeInfo {
        uint256 patronAmount;
        uint256 stakedAmount;
        uint256 receiveAmount;
        mapping(address => uint256) patrons;
    }

    struct PatronInfo {
        uint256 stakeTotal;
        uint256 stakeAmount;
        mapping(address => uint256) stakes;
    }

    mapping(address => StakeInfo) internal creatorInfo;
    mapping(address => PatronInfo) internal patronInfo;

    event Stake(address indexed from, address indexed to, uint256 amount);
    event WithdrawStake(address indexed from, address indexed to, uint256 amount);
    event Withdraw(address indexed from, uint256 amount);

    function stake(
        address to,
        uint256 amount
    ) external payable override {
        updateStakeInfo(to, amount, true);
        updatePatronInfo(to, amount, true);

        emit Stake(msg.sender, to, amount);
    }


    function withdrawStake(
        address to,
        uint256 amount,
        string memory _message,
        uint _nonce,
        bytes memory signature
    ) external payable override nonReentrant {
        require(verify(msg.sender, to, amount, _message, _nonce, signature), 'Signature verification failed.');
        require(patronInfo[msg.sender].stakes[to] >= amount, 'Withdrawal amount exceeds stake amount.');

        updateStakeInfo(to, amount, false);
        updatePatronInfo(to, amount, false);

        emit WithdrawStake(msg.sender, to, amount);

        (bool sent, ) = msg.sender.call{value: amount}("");
        require(sent, "Failed to send Ether");
    }


    function withdraw(
        uint256 amount,
        string memory _message,
        uint _nonce,
        bytes memory signature
    ) external payable override nonReentrant {
        require(verify(msg.sender, msg.sender, amount, _message, _nonce, signature), 'Signature verification failed.');
        require(creatorInfo[msg.sender].receiveAmount >= amount, 'The amount available for withdrawal has been exceeded.');

        creatorInfo[msg.sender].receiveAmount -= amount;

        emit Withdraw(msg.sender, amount);

        (bool sent, ) = msg.sender.call{value: amount}("");
        require(sent, "Failed to send Ether");
    }


    function updateStakeInfo(address to, uint256 amount, bool isStaking) internal {
        StakeInfo storage stakeInfo = creatorInfo[to];
        stakeInfo.stakedAmount = isStaking ? stakeInfo.stakedAmount + amount : stakeInfo.stakedAmount - amount;
        stakeInfo.patronAmount = isStaking ? stakeInfo.patronAmount + 1 : stakeInfo.patronAmount - 1;
        stakeInfo.patrons[msg.sender] = isStaking ? stakeInfo.patrons[msg.sender] + amount : stakeInfo.patrons[msg.sender] - amount;
    }


    function updatePatronInfo(address to, uint256 amount, bool isStaking) internal {
        PatronInfo storage patronInfo_ = patronInfo[msg.sender];
        patronInfo_.stakeAmount = isStaking ? patronInfo_.stakeAmount + amount : patronInfo_.stakeAmount - amount;
        patronInfo_.stakeTotal = isStaking ? patronInfo_.stakeTotal + 1 : patronInfo_.stakeTotal - 1;
        patronInfo_.stakes[to] = isStaking ? patronInfo_.stakes[to] + amount : patronInfo_.stakes[to] - amount;
    }

    // Read

    function getCreatorInfo(address creator) external view returns (uint256, uint256, uint256) {
        StakeInfo storage info = creatorInfo[creator];
        return (info.patronAmount, info.stakedAmount, info.receiveAmount);
    }

    function getCreatorPatronStake(address creator, address patron) external view returns (uint256) {
        return creatorInfo[creator].patrons[patron];
    }

    function getPatronInfo(address patron) external view returns (uint256, uint256) {
        PatronInfo storage info = patronInfo[patron];
        return (info.stakeTotal, info.stakeAmount);
    }

    function getPatronStake(address patron, address creator) external view returns (uint256) {
        return patronInfo[patron].stakes[creator];
    }
}
