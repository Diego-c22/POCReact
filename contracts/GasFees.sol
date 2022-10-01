// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract Test {
    function transactionFees(uint256 a) external payable returns (uint) {
        require(msg.value == 0.1 ether, "Not covered");
        return a;
    }
}
