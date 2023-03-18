import { ethers } from "ethers";
import 'dotenv/config';

const infuraUrl = `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`;
const provider = new ethers.providers.JsonRpcProvider(infuraUrl);

// console.log("Current block number: ", await provider.getBlockNumber());
const vitalikBalance = await provider.getBalance("vitalik.eth");
// const sanfordBalance = await provider

//from bignumber to wei
// console.log("vitalik balance is: ", ethers.utils.formatEther(vitalikBalance));

//from ether string to wei
console.log(ethers.utils.parseEther("0.5").toString());
