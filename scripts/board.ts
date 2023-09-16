import { ethers } from "hardhat";

async function main() {
  const colorBoard = await ethers.deployContract("ColorBoard");

  await colorBoard.waitForDeployment();

  console.log(` ${colorBoard.target}`);
}
async function main1() {
  const interact = await ethers.getContractAt(
    "ColorBoard",
    "0x5FbDB2315678afecb367f032d93F642f64180aa3"
  );
  const reply = await interact.GetColor(1, 3);
  console.log(`${reply}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
