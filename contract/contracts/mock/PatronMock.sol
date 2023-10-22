// SPDX-License-Identifier: MIT

pragma solidity 0.8.20;

import { Patron } from "../Patron.sol";

contract PatronMock is Patron {
    function updateReceiveAmount(address to, uint256 receiveAmount) external payable {
        StakeInfo storage stakeInfo = creatorInfo[to];
        stakeInfo.receiveAmount = receiveAmount;
    }

    function withdrawStakeNonSig(
        address to,
        uint256 amount
    ) external payable nonReentrant {
        require(patronInfo[msg.sender].stakes[to] >= amount, 'Withdrawal amount exceeds stake amount.');

        updateStakeInfo(to, amount, false);
        updatePatronInfo(to, amount, false);

        emit WithdrawStake(msg.sender, to, amount);

        (bool sent, ) = msg.sender.call{value: amount}("");
        require(sent, "Failed to send Ether");
    }


    function withdrawNonSig(
        uint256 amount
) external payable nonReentrant {
        require(creatorInfo[msg.sender].receiveAmount >= amount, 'The amount available for withdrawal has been exceeded.');

        creatorInfo[msg.sender].receiveAmount -= amount;

        emit Withdraw(msg.sender, amount);

        (bool sent, ) = msg.sender.call{value: amount}("");
        require(sent, "Failed to send Ether");
    }
}
