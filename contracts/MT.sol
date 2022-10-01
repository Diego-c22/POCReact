// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract TX {
    function forward(
        address _to,
        bytes calldata _data,
        bytes memory _signature
    ) external returns (bytes memory _result) {
        bool success;

        (success, _result) = _to.call(_data);
        if (!success) {
            assembly {
                returndatacopy(0, 0, returndatasize())
                revert(0, returndatasize())
            }
        }
    }
}
