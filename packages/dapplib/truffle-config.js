require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'hockey knife off suggest name rice stereo history gloom civil army genre'; 
let testAccounts = [
"0xadc7b22187f70b39b8b76ac1b989aab7dd5ea9347ef2e4f6f16f5cb8d2e61a82",
"0x72ae96db01b049ff3629ccd15972f0dc6a7f5ba124a14cc5256e6c268317bb94",
"0x917cb7bc9a1587e8ff0ce211278202044aaf319007471f44b2fa58c05a8d3be0",
"0x92601c8f540919e383555205181c67bb01b41e77804fea916c2e4f5a8f33e04b",
"0x986ae0b4143ef82d96e57ead48bc89ecc7bc3bdc40bb21fd1c2b3eead5925dc1",
"0x9f484dbaedff9993275751f4c3da0fdfaeafd6a23befcdc4e89a403102c1c69e",
"0xb9ef5161141a5cb1a762a1868f4ba70583d2b0816311d8769ce2d45314f4f379",
"0xd823721fa01dc1ba1fba900acb246f7adbb3e5d43e70768448cfe2b789639800",
"0x1941e06b3284611421ccbc985e603e088b64aa08d0d11317987615a82d1a601a",
"0x501287bc82b25ef255c29d96dfa2700873aa9b3af3d1c4a3ce82db1e43f9cef7"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


