const {ethers} = require("hardhat");

async function main() {
    const localProviderUrl = "http://127.0.0.1:8545/";
    const provider = new ethers.providers.JsonRpcProvider(localProviderUrl);

    const wallet0 = new ethers.Wallet(
        "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80",
        provider
    )

    console.log(
        "the account 0 balance is: ",
        ethers.utils.formatEther(await provider.getBalance(wallet0.address))
    );
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
