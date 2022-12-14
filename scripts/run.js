const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory("MyGpGame");
  const gameContract = await gameContractFactory.deploy(
    ["Lana", "Eva", "Riley"],
    [
      "https://get.wallhere.com/photo/Lana-Rhoades-digital-painting-digital-art-art-installation-Girl-High-juice-1886091.jpg",
      "https://i.pinimg.com/originals/62/c3/46/62c34667207e44a79643b171374a93b8.jpg",
      "https://i.ebayimg.com/00/s/MTYwMFgxMjgw/z/ICQAAOSwmQNfZCaa/$_57.PNG",
    ],
    [500, 1000, 1500],
    [500, 250, 100]
  );
  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
