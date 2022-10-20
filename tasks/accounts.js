const { task } = require("hardhat/config")

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
    const accounts = await ethers.getSigners()

    for (const account of accounts) {
        console.log(account.address)
    }
})

module.exports = {}
