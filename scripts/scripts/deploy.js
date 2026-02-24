const hre = require("hardhat");

async function main() {
  // Compile the contract (Hardhat does this automatically if needed)
  const Scholarship = await hre.ethers.getContractFactory("Scholarship");

  // Deploy contract with initial ETH funding (optional)
  const contract = await Scholarship.deploy({
    value: hre.ethers.parseEther("1.0") // Send 1 ETH to fund contract
  });

  await contract.deployed();

  console.log("Scholarship contract deployed to:", contract.address);
}

// Error handling
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});