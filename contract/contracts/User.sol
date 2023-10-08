// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2 <0.9.0;

contract User {

    struct UserInfo{
        string name;
        string twitter;
        address addr;
    }

    mapping(address => UserInfo) public userInfo;

    ///@notice 署名検証後にユーザー情報を格納する
    function registerUser(string memory name, string memory twitter, uint8 v, bytes32 r, bytes32 s) public {
        //
    }

    ///@notice ユーザー情報を取得する。
    ///@param userAddress ユーザーのアドレス。
    ///@return ユーザー情報
    function getUserInfo(address userAddress) public view returns (string memory, string memory, address) {
        UserInfo memory user = userInfo[userAddress];
        return (user.name, user.twitter, user.addr);
    }
}
