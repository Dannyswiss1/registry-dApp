// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {

  const name = "Dannyswiss";
  const age = "30";
  

  const SimpleRegistry = await hre.ethers.deployContract("SimpleRegistry", [name, age]);

  await SimpleRegistry.waitForDeployment();

  console.log(`contract was deployed to ${SimpleRegistry.target}`);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// const hre = require("hardhat");

// async function main() {

//   const message = "hello world";
  

//   const mymessage = await hre.ethers.deployContract("MyMessage", [message]);

//   await mymessage.waitForDeployment();

//   console.log(`contract was deployed to ${mymessage.target}`);
// }

// // We recommend this pattern to be able to use async/await everywhere
// // and properly handle errors.
// main().catch((error) => {
//   console.error(error);
//   process.exitCode = 1;
// });

// 0x24a22Bd3Df7Aae9472767346c6Ba2fb34f011dD2