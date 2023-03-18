import { ethers } from "ethers";
import { getProvider, generateNewWallet, getSigner } from "./utils.js";
import {ABI as daiAbi} from "./abi/DaiAbi.js"

const signer = getSigner();
const provider = getProvider();
const daiAddress = "0x68194a729C2450ad26072b3D33ADaCbcef39D574";

const daiContract = new ethers.Contract(
    daiAddress,
    daiAbi,
    provider
)

const myDaiBalance = await daiContract.balanceOf(signer.address);

console.log("My balance is ", ethers.utils.formatEther(myDaiBalance));
