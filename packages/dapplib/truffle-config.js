require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give clog tackle food elder razor soap unable hard light army gentle'; 
let testAccounts = [
"0x33607e7052d11e8a7ff04e46d2be3fb650b2852e97267c44c37f2e7b36086408",
"0xe390c0d77c453dd3cff422eae39edd0f5f5f34daa50bdd0dcce6c93f3c96ba3e",
"0xf611298abf40e2e8f410b50926411844aa3acaa418a3a2ba197d8507f4cdf190",
"0x772a190f586c88df18f7aee57c515e72a68ef1933be3d72ba39a2fcb6801bae0",
"0x537d0276f85846d829bcc672ef31d8f8986091ad0ecd1162879c1daa2f6e8f2e",
"0x824ec6b9c07b08f031d9c2f322c7fec8c51da9a14d610a215f498c307a286eb7",
"0x6d92ad17507a5019d17ff3c4d5c5a524e90d937c2a3ce777e1d18267589a5eb3",
"0x3e3eefa0b80fa329ae1c7f418ca0a5b51e8e38bec04f2ea026818b021ec24ace",
"0x7ad52d0f57119b061651e691f38e07f9a3c06c08b7c8897ac1762dbfb4594f45",
"0xa6c6e0cc7d031694117c3e811e395363f9b4364f73419d7193967032398d9a6f"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

