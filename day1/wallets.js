import { ethers } from "ethers";
import 'dotenv/config';

const infuraUrl = `https://sepolia.infura.io/v3/${process.env.INFURA_KEY}`;
const provider = new ethers.providers.JsonRpcProvider(infuraUrl);

const signer = new ethers.Wallet(process.env.PRIVATE_KEY)

await signer.connect(provider);

console.log(ethers.utils.formatEther((await provider.getBalance(signer.address))))

provider.sendTransaction("", )
