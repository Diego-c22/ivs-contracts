const { MerkleTree } = require("merkletreejs");
const keccak256 = require("keccak256");

let whitelistAddresses = [
  "0xAE8C6d624bC59F1B7CeA1F6d17255A995930a31F",
  "0x794Fed8D9bEe97a7e352e4C308Cec5632b741104",
  "0x8A7e80fDF8c8c6f236d6e230F99633869AB8C4de",
  "0xbef2576102146b7BcAb08DD39c195aeD21372998",
  "0x1F34D46f8467429a7a4fdFb37D0Cb825f3aeD48F",
  "0x1D552e7b28b8486f7Efac6F040BE02739c1f6f0d",
  "0x3a67Bb489a73F14BeC3110E227a3B29F59AB1082",
];

const leafNodes = whitelistAddresses.map((address) => keccak256(address));
const merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true });

console.log(merkleTree.toString());
console.log(
  merkleTree.getHexProof(
    keccak256("0x1F34D46f8467429a7a4fdFb37D0Cb825f3aeD48F")
  )
);

console.log(merkleTree.getRoot());
