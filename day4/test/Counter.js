const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Counter", function() {
    it("cheking...", async function () {
        const Counter = await ethers.getContractFactory("Counter");

        const counter = await Counter.deploy(0);

        await counter.deployed();

        const incTx = await counter.inc();
        await incTx.wait(1);
        expect(await counter.get()).to.equal(1);
    })

    it("cheking 1...", async function () {

        const [signer0, signer1] = await ethers.getSigners();
        const Counter = await ethers.getContractFactory("Counter");

        const counter = await Counter.deploy(0);

        await counter.deployed();

        const incTx = await counter.inc();
        await incTx.wait(1);
        expect(await counter.owner()).to.equal(signer0.address);
    })
    it("cheking 2...", async function () {

        const [signer0, signer1] = await ethers.getSigners();
        const Counter = await ethers.getContractFactory("Counter");

        const counter = await Counter.deploy(0);

        await counter.deployed();


        const incTx = counter.connect(signer1).dec();
        await expect( incTx).to.be.revertedWith("Not owner");

    })
})
