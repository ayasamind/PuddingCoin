const PuddingCoin = artifacts.require('./PuddingCoin.sol')

module.exports = (deployer) => {
  let initialSupply = 50000e18
  deployer.deploy(PuddingCoin, initialSupply, {
      gas: 2000000
  })
}
