// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {

  const Lock = (await hre.ethers.getContractFactory("TX")).attach('0x5FbDB2315678afecb367f032d93F642f64180aa3');
  await Lock.forward(
    '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512',
    '0x23b872dd0000000000000000000000008626f6940e2eb28930efb4cef49b2d1f2c9c1199000000000000000000000000dd2fd4581271e230360230f9337d5c0430bf44c000000000000000000000000000000000000000000000000000000000000186a0',
    '0x0b0ad59daad7bf3a2a45310d2040c344384e1835165e4a033c2d2cfa9938ce673ba0a28f1e0dac843d137b13b28078500bd1fdb2d458f02f0e7bf2e31c35f3c11c'
  )

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
