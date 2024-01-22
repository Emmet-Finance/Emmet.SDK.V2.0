"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addressToBytes32 = exports.addressToAccount = void 0;
function addressToAccount(address) {
    // console.log("addressToAccount:address", address)
    if (!address)
        return '0x';
    return `0x${address.replace('0x', '')}`;
}
exports.addressToAccount = addressToAccount;
/**
 * Returns zerro-padded bytes32 address representaiton
 * @param address the original 20 byte address
 * @returns a bytes32 zero-padded representaiton of address
 */
function addressToBytes32(address) {
    // console.log("addressToBytes32:address", address)
    // "0x" + 24 zeros + Rest of the address string with leading "0x" trimmed
    return (addressToAccount('000000000000000000000000' +
        address.replace('0x', '')));
}
exports.addressToBytes32 = addressToBytes32;
