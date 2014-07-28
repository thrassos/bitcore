var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function(hex) {
  return new Buffer(hex, 'hex');
};

exports.livenet = {
  name: 'livenet',
  magic: hex('f9beb4d9'),
  addressVersion: 85,
  privKeyVersion: 73,
  P2SHVersion: 5,
  hkeyPublicVersion: 0x0488b21e,
  hkeyPrivateVersion: 0x0488ade4,
  genesisBlock: {
    hash: hex('c1fb746e87e89ae75bdec2ef0639a1f6786744639ce3d0ece1dcf979b79137cb'),
    merkle_root: hex('d4715adf41222fae3d4bf41af30c675bc27228233d0f3cfd4ae0ae1d3e760ba8'),
    height: 0,
    nonce: 14385103,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1405274442,
    bits: 0x1d00ffff,
  },
  dnsSeeds: [
    'seed.bitmark.co'
  ],
  defaultClientPort: 9265
};

exports.mainnet = exports.livenet;
// TODO add testnet
exports.testnet = {
  name: 'testnet',
  magic: hex('0b110907'),
  addressVersion: 130,
  privKeyVersion: 185,
  P2SHVersion: 196,
  hkeyPublicVersion: 0x043587cf,
  hkeyPrivateVersion: 0x04358394,
  genesisBlock: {
    hash: hex('43497FD7F826957108F4A30FD9CEC3AEBA79972084E90EAD01EA330900000000'),
    merkle_root: hex('3BA3EDFD7A7B12B27AC72C3E67768F617FC81BC3888A51323A9FB8AA4B1E5E4A'),
    height: 0,
    nonce: 414098458,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1296688602,
    bits: 486604799,
  },
  dnsSeeds: [

  ],
  defaultClientPort: 18333
};
