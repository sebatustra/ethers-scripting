import "dotenv/config"
import { ethers } from "ethers";

const getProvider = (mainnet = false) => {
    const providerUrl = mainnet
        ? `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`
        : `https://sepolia.infura.io/v3/${process.env.INFURA_KEY}`;

    const provider = new ethers.providers.JsonRpcProvider(providerUrl);
    console.log("connected to provider");
    return provider;
}

const generateNewWallet = () => {
    const wallet = ethers.Wallet.createRandom();
    console.log("address: ", wallet.address);
    return wallet;
}

const getSigner = (mainnet = false) => {
    const provider = getProvider(mainnet);
    const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
    return signer;
}


export {getProvider, generateNewWallet, getSigner};
