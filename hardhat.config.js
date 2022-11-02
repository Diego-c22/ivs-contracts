require("dotenv").config({
  path: `./.env${process.env.ENV ? "." + process.env.ENV : ""}`,
});
require("@nomicfoundation/hardhat-toolbox");
require("@openzeppelin/hardhat-upgrades");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",

  etherscan: {
    apiKey: {
      polygonMumbai: process.env.API_KEY_SCAN,
    },
  },
  networks: {
    testnet: {
      url: process.env.URL_RPC_TESTNET,
      accounts: [process.env.DEPLOYER_WALLET_PRIVATE_KEY],
    },
    local: {
      url: process.env.URL_RPC_LOCAL,
      accounts: [process.env.DEPLOYER_WALLET_PRIVATE_KEY],
    },
    mainnet: {
      url: process.env.URL_RPC_MAINNET,
      accounts: [process.env.DEPLOYER_WALLET_PRIVATE_KEY],
    },
  },
};
