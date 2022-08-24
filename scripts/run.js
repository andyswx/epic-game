const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
    const gameContract = await gameContractFactory.deploy(
      ["Moana", "Heihei", "Maui"],       // Names
      ["QmZRMnYx6WNuaPdQ1KYYMkeV4DSVsFd71Lf5Jd2mQpCAG6", // Images
      "QmZmJRaBWRhGbKBSLSVhHeTTyB9XGtKvZx8tfn652YT1DE", 
      "QmSyCh1rtd8V2bSi1jWegpuhy7xLZpsJ24WrQZaiMmygtK"],
      [200, 100, 300],                    // HP values
      [100, 10, 100],                       // Attack damage values
      "Duckling", // Boss name
      "QmSWwuoc4AcxVJya1wSnpVssWcE7vj8NQbU3CLPrSSdTqk", // Boss image
      1000, // Boss hp
      50 // Boss attack damage
    );
    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);

    let txn;
    // We only have three characters.
    // an NFT w/ the character at index 2 of our array.
    txn = await gameContract.mintCharacterNFT(2);
    await txn.wait();

    txn = await gameContract.attackBoss();
    await txn.wait();

    txn = await gameContract.attackBoss();
    await txn.wait();

    // Get the value of the NFT's URI.
    let returnedTokenUri = await gameContract.tokenURI(1);
    console.log("Token URI:", returnedTokenUri);


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