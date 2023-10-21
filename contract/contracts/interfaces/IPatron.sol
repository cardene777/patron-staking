// SPDX-License-Identifier: MIT

pragma solidity 0.8.20;

interface IPatron {

    function stake(
        address to,
        uint256 amount
    ) external payable;

    function withdrawStake(
        address to,
        uint256 amount,
        string memory _message,
        uint _nonce,
        bytes memory signature
    ) external payable;

    function withdraw(
        uint256 amount,
        string memory _message,
        uint _nonce,
        bytes memory signature
    ) external payable;
}
