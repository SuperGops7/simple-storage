const { task } = require("hardhat/config");

task("block-number", "Prints the block number").setAction(
    async (taskArgs, hre) => {
        const blocknumber = await hre.ethers.provider.getBlockNumber();
        console.log(`Current Block Number: ${blocknumber}`);
    }
);

module.exports = {};
