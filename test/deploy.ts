import { ethers } from "hardhat"
import { expect } from "chai"
import { SimpleStorage, SimpleStorage__factory } from "../typechain-types"

// npx hardhat test --grep keyword, only runs tests which contain keyword in its description
// it.only also isolates test suite to that function
describe("SimpleStorage", function () {
    let SimpleStorageFactory: SimpleStorage__factory
    let simpleStorage: SimpleStorage
    beforeEach(async function () {
        SimpleStorageFactory = (await ethers.getContractFactory(
            "SimpleStorage"
        )) as SimpleStorage__factory
        simpleStorage = await SimpleStorageFactory.deploy()
    })

    it("Should start with a favorite number of 0", async function () {
        const currentValue = await simpleStorage.retrieve()
        const expectedValue = "0"
        // assert.equal(currentValue.toString(), expectedValue)
        expect(currentValue.toString()).to.equal(expectedValue)
    })
    it("Should update when we call store", async function () {
        const expectedValue = "3"
        const transactionResponse = await simpleStorage.store(expectedValue)
        await transactionResponse.wait(1)

        const currentValue = await simpleStorage.retrieve()

        // assert.equal(currentValue.toString(), expectedValue)
        expect(currentValue).to.equal(expectedValue)
    })
    it("Should respond with users favorite number", async function () {
        const testUser = "Lulu"
        const expectedValue = 99
        await simpleStorage.addUser(testUser, expectedValue)

        const updatedValue = await simpleStorage.nameToFavoriteNumber(testUser)
        expect(updatedValue).to.equal(expectedValue)
    })
})
