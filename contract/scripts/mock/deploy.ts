import { ethers } from "hardhat";

async function main() {
  const PatronMockContract = await ethers.deployContract("PatronMock");

  const contract = await PatronMockContract.waitForDeployment();

  const deploymentTx = contract.deploymentTransaction();

  console.log(`Contract Address: ${await contract.getAddress()}`);
  console.log(`Tx Hash: ${deploymentTx?.hash}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
