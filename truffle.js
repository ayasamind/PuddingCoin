var PDNWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "tuna tag label man month labor view left loyal expire enforce enact";
var accessToken = "jskHoqnOn6oW7kZvhVMu";

module.exports = {
  networks: {
    ropsten: {
      provider: function() {
        return new PDNWalletProvider(
          mnemonic,
          "https://ropsten.infura.io/" + accessToken
        );
      },
      network_id: 3,
      gas: 500000
    }
  }
};
