require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    rinkeby: {
      url: 'https://rinkeby.infura.io/v3/ebef78fe0edc4e038a616a255db84178',
      accounts: ['1d767966f4f5d6f34d911524ffa8e548fe39395a144be1b0754f3418493e5e32']
      
    }
  }
};
