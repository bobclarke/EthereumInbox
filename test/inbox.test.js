// Pull in the assert framework
const assert = require('assert')

// ganache is a local test network / blockchain
const ganache = require('ganache-cli')

// web3 is our NodeJS framework for interfacing with the blockchain
// Define a contructor for web3 (note the capital W)
const Web3 = require('web3')

// Instantiate an instance of Web3 and pass it the gnache provider
const web3 = new Web3(ganache.provider());

// get the interface and bytecode from our compile.js file
const { interface, bytecode } = require('../compile');

// Before each test case we need to use an account to deploy a contract
let accounts, contract, contractObj;
beforeEach( async function() {
    // get the list of predefined gnache accounts
    accounts = await web3.eth.getAccounts();

    // The longhand way
    /*
    contract = new web3.eth.Contract( JSON.parse(interface) )
    contractObj = contract.deploy({data: bytecode, arguments: ['Hi there!'] })
    deployedContractObj = await contractObj.send({ from: accounts[0], gas:'1000000' })
    */

    // The shorthand way 
    deployedContractObj = await new web3.eth.Contract( JSON.parse(interface) )
        .deploy({data: bytecode, arguments: ['Hi there!'] })
        .send({ from: accounts[0], gas:'1000000' })


})

describe('Inbox', function () {
    it ('deploys a contract', function(){
        console.log(deployedContractObj);
    });   
});




