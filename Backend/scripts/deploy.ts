import { ethers } from "hardhat";

async function main() {
  const NFTMarketPlace = await ethers.getContractFactory("NFTMarketplace");
  const nftMarketPlace = await NFTMarketPlace.deploy();

  await nftMarketPlace.deployed();

  console.log('NFTMarketPlace deployed to:', nftMarketPlace.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
