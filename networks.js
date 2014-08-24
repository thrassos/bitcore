var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function(hex) {
  return new Buffer(hex, 'hex');
};

exports.livenet = {
  name: 'livenet',
  magic: hex('04f104fd'),
  addressVersion: 12,
  privKeyVersion: 9e,
  P2SHVersion: 5,
  hkeyPublicVersion: 0x0488b21e,
  hkeyPrivateVersion: 0x0488ade4,
  genesisBlock: {
    hash: hex('ee92f5a82a9acc1a9687e02412ec55e9051bd975a1d346f5e77f32fddb32cfed'),
    merkle_root: hex('33ecdb1985425f576c65e2c85d7983edc6207038a2910fefaf86cfb4e53185a3'),
    height: 0,
    nonce: 1397766,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1384473600,
    bits: 0x1e0ffff0,
  },
  dnsSeeds: [
    '127.0.0.1',
	'173.246.19.219',
	'173.77.211.102',
	'192.83.142.151',
	'122.249.91.18',
	'178.23.132.73',
	'213.91.205.134',
	'71.92.43.217',
	'108.0.230.225'
  ],
  defaultClientPort: 12024
};

exports.mainnet = exports.livenet;
// TODO add testnet
exports.testnet = {
  name: 'testnet',
  magic: hex('fbc05af2'),
  addressVersion: 92,
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
