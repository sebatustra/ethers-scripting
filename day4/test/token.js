const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Token", function() {
    let token;
    beforeEach(async () => {
        const Token = ethers.getContractFactory("SebaToken");
        token = await (await Token).deploy();
        await token.deployed();
    })

    it("creates tokens", async () => {
        const [signer0] = await ethers.getSigners();
        const createTx = await token.create(10);
        await createTx.wait(1);

        expect(await token.totalCreated()).to.equal(10);
    })

    it("shows the balance", async () => {
        const [signer0] = await ethers.getSigners();
        const createTx = await token.create(10);
        await createTx.wait(1);

        const creatorBalance = await token.balances(signer0.address);


        expect(creatorBalance).to.equal(10);
    })

    it("reverts if creating more than total supply", async () => {
        const [signer0] = await ethers.getSigners();
        const createTx = token.create(1001);



        await expect(createTx).to.be.revertedWith("totalSupply reached!");
    })

    it("send tokens", async () => {
        const [signer0, signer1] = await ethers.getSigners();
        const createTx = await token.create(10);
        await createTx.wait(1);

        const sendTx = await token.send(signer1.address, 2);

        await sendTx.wait(1);


        expect(await token.balances(signer1.address)).to.equal(2);
    })

    it("reverts if not sending enough money", async () => {
        const [signer0, signer1] = await ethers.getSigners();
        const createTx = await token.create(10);
        await createTx.wait(1);

        const buyTx = token.connect(signer1).buy({value: ethers.utils.parseEther("0.001")});

        await expect(buyTx).to.be.revertedWith("send more money");
    })

    it("owner withdraws all money", async () => {
        const [signer0, signer1] = await ethers.getSigners();
        const createTx = await token.create(10);
        await createTx.wait(1);

        const buyTx = token.connect(signer1).buy({ value: ethers.utils.parseEther("0.01") });

        await expect(buyTx).to.be.revertedWith("send more money");
    })
})
