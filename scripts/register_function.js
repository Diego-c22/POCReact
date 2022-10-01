const abi = [{"constant":false,"inputs":[{"name":"_new","type":"address"}],"name":"setOwner","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"totalSignatures","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"drain","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes4"}],"name":"entries","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_method","type":"string"}],"name":"register","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"inputs":[],"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"creator","type":"address"},{"indexed":true,"name":"signature","type":"bytes4"},{"indexed":false,"name":"method","type":"string"}],"name":"Registered","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"old","type":"address"},{"indexed":true,"name":"current","type":"address"}],"name":"NewOwner","type":"event"}]

const hre = require("hardhat");

async function main() {
  const provider = await new hre.ethers.providers.JsonRpcProvider('https://rinkeby.infura.io/v3/ebef78fe0edc4e038a616a255db84178')
  const wallet = new hre.ethers.Wallet('1d767966f4f5d6f34d911524ffa8e548fe39395a144be1b0754f3418493e5e32', provider)
  const Lock = await hre.ethers.Contract('0x0C0831Fb1EC7442485fb41a033ba188389a990B4', abi, wallet);
  const lock = await Lock.register('transactionFees()');

  await lock.deployed();

  console.log(
    `Lock with 1 ETH and unlock timest`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});