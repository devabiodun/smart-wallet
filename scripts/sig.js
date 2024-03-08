// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const [signer0] = await hre.ethers.getSigners();
  const signature = signer0.signMessage(hre.ethers.getBytes(hre.ethers.id('wee')))
  const Test = await hre.ethers.getContractFactory("Test");
  const test = await Test.deploy(signature)
  
  console.log({test});
  console.log(
    `address0: ${await signer0.getAddress()}`
  );

  
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// contract Test {
//     constructor(bytes memory sig) {
//         address recovered = ECDSA.recover(ECDSA.toEthSignedMessageHash(keccak256('wee')), sig);
//         console.log(recovered);
//     }
// }
