// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {

  const TX = await hre.ethers.getContractFactory("TX");
  const tx = await TX.deploy();

  await tx.deployed();

  const GT = await hre.ethers.getContractFactory("GLDToken");
  const gt = await GT.deploy('100000000000000000000000000000000000');

  await gt.deployed();

  console.log(
    `TX Deployed to ${tx.address}`
  );

  console.log(
    `ERC20 Deployed to ${gt.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
