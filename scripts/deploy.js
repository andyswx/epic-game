const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
  const gameContract = await gameContractFactory.deploy(
    ["Moana", "Heihei", "Maui"],       // Names
    ["QmSWwuoc4AcxVJya1wSnpVssWcE7vj8NQbU3CLPrSSdTqk", // moana
    "QmSyCh1rtd8V2bSi1jWegpuhy7xLZpsJ24WrQZaiMmygtK", // Heihei
    "QmZmJRaBWRhGbKBSLSVhHeTTyB9XGtKvZx8tfn652YT1DE"], // maui
    [200, 100, 300],                    // HP values
    [100, 10, 100],                       // Attack damage values
    "Duckling", // Boss name
    "QmZRMnYx6WNuaPdQ1KYYMkeV4DSVsFd71Lf5Jd2mQpCAG6", // Boss Duckling image
    1000, // Boss hp
    50 // Boss attack damage
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

// deployed to 0x44a5aE5DeA0b652308b7460050774E2010edc2D1