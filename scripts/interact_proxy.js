// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const Contract = await hre.ethers.getContractFactory("The4thDs");
  const lock = await Contract.attach(
    "0xd48ac5AE17F7B0D82AFfbbd4F26Cd8f036C855e9"
  );

  await lock.preSaleMint(
    1,
    [
      "0xf88a8ab800afab22194a2965836efc5875c69686de37baf4000f790654ee0ae9",
      "0x9010dd1fbae5c3fbf2c022ad5891b9590ce7ede7899c776f93a0c011ca914caa",
      "0x342859ddce9717f81128f76b056594b54800f3e51da2be8c27e25bd1a5dd3f59",
    ],
    { value: "50000000000000000" }
  );

  console.log(`Deployed to ${lock.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
