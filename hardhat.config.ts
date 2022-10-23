import "@nomicfoundation/hardhat-toolbox"
import "dotenv/config"
// import "@nomiclabs/hardhat-etherscan"
// import "hardhat-gas-reporter"
import "./tasks/accounts"
import "./tasks/block-number"
// import "@nomiclabs/hardhat-ethers" not required
import "@typechain/hardhat" // new task: typechain

const ALCHEMY_API_KEY =
    process.env.ALCHEMY_API_KEY || "https://eth-goerli/example"
const GOERLI_PRIVATE_KEY = process.env.GOERLI_PRIVATE_KEY || "0xkey"
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || "key"
const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY || "key"

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    defaultNetwork: "hardhat",
    solidity: "0.8.17",
    networks: {
        goerli: {
            url: `https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
            accounts: [GOERLI_PRIVATE_KEY],
            chainId: 5,
        },
        localhost: {
            // deploy here to interact with JSON-RPC server initialized with 'npx hardhat node'
            url: "http://127.0.0.1:8545/",
            // accounts: created by hardhat
            chainId: 31337,
        },
    },
    etherscan: {
        apiKey: ETHERSCAN_API_KEY,
    },
    gasReporter: {
        enabled: true,
        outputFile: "gas-report.txt",
        noColors: true,
        // uncomment to access coinmarketcap api on call
        currency: "USD",
        coinmarketcap: COINMARKETCAP_API_KEY,
    },
}
