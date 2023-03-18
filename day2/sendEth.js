import "dotenv/config"
import {ethers, BigNumber} from "ethers";
import { getProvider, generateNewWallet, getSigner } from "./utils.js";


const signer = getSigner();
const myOtherAddress = "0x17970Ca7c50cA8C47cb6570d7Ca89F5a5498EF49";

const tx = await signer.sendTransaction({
    to: myOtherAddress,
    value: ethers.utils.parseEther("0.0001")
});

console.log("TX sent!", tx);

await tx.wait(1);

console.log("TX MINED!");
