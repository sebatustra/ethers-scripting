import { ethers } from "ethers";
import { getProvider, getSigner } from "./utils.js";
import { ABI as sebatustraNFTAbi } from "./abi/SebatustraNFTAbi.js";
import { sign } from "crypto";

const sebatustraNFTAddress = "0x1DacC7F456DC58D7Fb9EC204c65Be5B8Add15Eaf";
const signer = getSigner();


const mintPrice = ethers.utils.parseEther("0.01");

const mintCallData = "0x1249c58b";

console.log("MINTING NFT");

const mintTx = await signer.sendTransaction({
    to: sebatustraNFTAddress,
    value: mintPrice,
    data: mintCallData
})


const txReceipt = await mintTx.wait(1);

console.log("transactionReceipt: ", txReceipt)
