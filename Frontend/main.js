// import { Web3 } from "web3";
// const Web3 = require("web3");

// Create Web3 instance

const cellElement = document.getElementById("cells");

const contractAddress = "0x49dA60F405103d37E61FbAd19a532214D4ED0B64";
const contractABI = [
  {
    inputs: [
      { internalType: "uint8", name: "i", type: "uint8" },
      { internalType: "uint8", name: "j", type: "uint8" },
    ],
    name: "GetColor",
    outputs: [
      { internalType: "enum ColorBoard.Colors", name: "", type: "uint8" },
      { internalType: "string", name: "", type: "string" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "", type: "uint256" },
      { internalType: "uint256", name: "", type: "uint256" },
    ],
    name: "cells",
    outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "colors",
    outputs: [
      { internalType: "enum ColorBoard.Colors", name: "", type: "uint8" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getGrid",
    outputs: [{ internalType: "uint8[7][5]", name: "", type: "uint8[7][5]" }],
    stateMutability: "view",
    type: "function",
  },
];
// const Board = [
//   [0, 1, 2, 3, 1, 2, 3],
//   [0, 1, 2, 0, 0, 1, 3],
//   [1, 1, 3, 2, 0, 2, 3],
//   [0, 1, 2, 1, 3, 1, 3],
//   [0, 1, 2, 3, 1, 2, 3],
// ];

const board = document.getElementById("board");
function getcolor(i, j) {
  contract.methods.getColor(i, j).call();
}
function revealColor(e) {
  console.log(e.target);
}
async function reveal() {
  // window.ethereum = await new Web3(window.ethereum);
  const web3 = await new Web3(window.ethereum);
  const contract = await new web3.eth.Contract(contractABI, contractAddress);

  const color = await contract.methods.getGrid().call();
  function getColor(id) {
    return id === 1 ? "black" : id === 2 ? "red" : id === 3 ? "blue" : "white";
  }
  console.log(color, "color");
  board.innerHTML = color
    .map(
      (data, i) =>
        `<ul class = "cells">${data
          .map(
            (cell, j) =>
              `<li class="cell" data-x="${i}" data-y="${j}" data-color="${getColor(
                Number(cell)
              )}"></li>`
          )
          .join("")}</ul>`
    )
    .join("");
  console.log(getAttribute("data-x"), getAttribute("data-y"));
}
board.addEventListener("click", (e) => {
  if (e.target.className == "cell") {
    e.target.style.backgroundColor = e.target.getAttribute("data-color");
    document.getElementById(
      "xandy"
    ).innerHTML = `<p id="returnX">X: ${e.target.getAttribute("data-x")}</p>
    <p id="returnY">Y:${e.target.getAttribute("data-y")}</p>`;
  }
  e.target.style.backgroundColor === e.target.id ? "white" : e.target.id;
});
async function connectToMetaMask() {
  if (window.ethereum) {
    try {
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log(accounts, "accounts");
      alert("Connected to MetaMask!");
      await reveal();
    } catch (error) {
      console.error("MetaMask connection error:", error);
    }
  } else {
    alert("MetaMask not detected. Please install MetaMask.");
  }
}
