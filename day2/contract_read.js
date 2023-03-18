import "dotenv/config";
import {ethers} from "ethers";
import {getProvider, generateNewWallet, getSigner} from "./utils.js";
import { ABI as sebatustraNFTAbi } from "./abi/SebatustraNFTAbi.js";

const sebatustraNTFAddress = "0x1DacC7F456DC58D7Fb9EC204c65Be5B8Add15Eaf";

const provider = getProvider();

const sebatustraNFTContract = new ethers.Contract(
    sebatustraNTFAddress,
    sebatustraNFTAbi,
    provider
);

const mintPrice = await sebatustraNFTContract.MINT_PRICE();

console.log("mintPrice: ", ethers.utils.formatEther(mintPrice))
