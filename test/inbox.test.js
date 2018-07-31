const assert = require('assert')

// ganache is a local test network / blockchain
const ganache = require('ganache-cli')

// web3 is our NodeJS framework for interfacing with the blockchain
// Define a contructor for web3 (note the capital W)
const Web3 = require('web3')

// Instantiate an instance of Web3 and pass it the gnache provider
const web3 = new Web3(ganache.provider());
