const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Greeter", function () {
    it("should retunr the new greeting once it is changed", async function() {
        const Greeter = await ethers.getContractFactory("Greeter");
        const greeter = await Greeter.deploy("Hello world!");
        await greeter.deployed();

        expect(await greeter.greet()).to.equal("Hello world!");

        const setGreetingTx = await greeter.setGreeting("hola, mundo!");

        await setGreetingTx.wait();

        expect(await greeter.greet()).to.equal("hola, mundo!");

    })
})
