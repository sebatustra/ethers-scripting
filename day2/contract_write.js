import {ethers} from "ethers";
import { getProvider, getSigner } from "./utils.js";
import { ABI as sebatustraNFTAbi } from "./abi/SebatustraNFTAbi.js";

const sebatustraNFTAddress = "0x1DacC7F456DC58D7Fb9EC204c65Be5B8Add15Eaf";

const provider = getProvider();
const signer = getSigner();

const sebatustraNFTContract = new ethers.Contract(
    sebatustraNFTAddress,
    sebatustraNFTAbi,
    signer
);

const mintPrice = await sebatustraNFTContract.MINT_PRICE();

const tx = await sebatustraNFTContract.mint({
    value: mintPrice
});


console.log("tx sent", tx);

const txReceipt = await tx.wait(1);

console.log("transactionReceipt: ", txReceipt.events[0].args)

// const contractBalance = await provider.getBalance(sebatustraNFTAddress)
// console.log("contractBalance", contractBalance)

// const withdrawTx = await sebatustraNFTContract.withdraw(signer.address ,contractBalance);
// console.log("transaction sent", withdrawTx)

// const txReceipt = await withdrawTx.wait(1);
// console.log("transaction mined", txReceipt);
