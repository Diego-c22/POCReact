// SPDX-License-Identifier: MIT
/*
pragma solidity ^0.8.4;

contract SignTransaction {
    address currentContextAddress;
    struct Transaction {
        uint256 salt;
        uint256 expirationTimeSeconds;
        uint256 gasPrice;
        address signerAddress;
        bytes data;
    }

    bytes32 EIP712_TRANSACTION_SCHEMA_HASH =
        keccak256(
            abi.encodePacked(
                "Transaction(uint256 salt,uint256 expirationTimeSeconds,uint256 gasPrice,address signerAddress,bytes data)"
            )
        );

    function _getTransactionTypedHash(Transaction memory transaction)
        private
        view
        returns (bytes32)
    {
        return
            keccak256(
                abi.encodePacked(
                    EIP712_TRANSACTION_SCHEMA_HASH,
                    transaction.salt,
                    transaction.expirationTimeSeconds,
                    transaction.gasPrice,
                    uint256(uint160(transaction.signerAddress)),
                    keccak256(transaction.data)
                )
            );
    }

    function _setCurrentContextAddressIfRequired(address contextAddress)
        private
    {
        require(
            currentContextAddress == address(0),
            "META_TX: Transaction has context set already"
        );
        currentContextAddress = contextAddress;
    }

    function _getCurrentContextAddress() private view returns (address) {
        return
            currentContextAddress == address(0)
                ? msg.sender
                : currentContextAddress;
    }

    function _getFullTransactionTypedHash(Transaction memory transaction)
        private
        view
        returns (bytes32)
    {
        bytes32 transactionStructHash = _getTransactionTypedHash(transaction);

        bytes32 EIP191_HEADER = 0x1901000000000000000000000000000000000000000000000000000000000000;
        bytes32 schemaHash = keccak256(
            abi.encodePacked(
                "EIP712Domain(string name,string version,uint256 chainId,address verifyingContract)"
            )
        );
        uint256 chainId = 1; // mainnet
        address verifyingContract = address(this);
        bytes32 domainHash = keccak256(
            abi.encodePacked(
                schemaHash,
                keccak256(bytes("My Protocol Name")),
                keccak256(bytes("1.0.0")),
                chainId,
                verifyingContract
            )
        );

        return
            keccak256(abi.encodePacked(EIP191_HEADER, domainHash, hashStruct));
    }

    function _isValidTransactionWithHashSignature(
        Transaction memory transaction,
        bytes32 txHash,
        bytes memory signature
    ) private pure returns (bool) {
        require(signature.length == 66, "META_TX: Invalid signature length");

        uint8 v = uint8(signature[0]);
        bytes32 r = _readBytes32(signature, 1);
        bytes32 s = _readBytes32(signature, 33);
        address recovered = ecrecover(txHash, v, r, s);

        return transaction.signerAddress == recovered;
    }

    function _readBytes32(bytes memory b, uint256 index)
        private
        pure
        returns (bytes32 result)
    {
        require(
            b.length >= index + 32,
            "META_TX: Invalid index for given bytes"
        );

        // Arrays are prefixed by
        // a 256 bit length parameter
        index += 32;

        // Read the bytes32 from array memory
        assembly {
            result := mload(add(b, index))
        }
        return result;
    }
}
*/
