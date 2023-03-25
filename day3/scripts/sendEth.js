const hre = require("hardhat")

const { ethers } = require("hardhat");


async function main() {

    const accounts = await hre.ethers.getSigners();

    const account1 = accounts[0];
    const account2 = accounts[1];

    console.log("account1 address:", account1.address);
    console.log("account1 balance:", ethers.utils.formatEther(await account1.getBalance()))

    const tx = await account1.sendTransaction({
        to: account2.address,
        value: ethers.utils.parseEther("10")
    });

    const txReceipt = await tx.wait(1);
    console.log("tx Receipt", txReceipt);

    console.log("account1 balance:", ethers.utils.formatEther(await account1.getBalance()))


}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
