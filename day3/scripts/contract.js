const hre = require("hardhat");

async function main() {

    const Greeter = await hre.ethers.getContractFactory("Greeter");

    const greeter = await Greeter.deploy("hello world")

    await greeter.deployed();

    console.log("initial greeting", await greeter.greet());

    const tx = await greeter.setGreeting("hola mundo")
    await tx.wait(1);

    console.log("later greeting", await greeter.greet());


}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
