

/* *****************************
 * set up
 * *****************************/

const assert = require('assert') // pull in the assert framework
const ganache = require('ganache-cli') // ganache is a local test network / blockchain
const Web3 = require('web3') // web3 is our NodeJS framework for interfacing with the blockchain
const web3 = new Web3(ganache.provider()); // Instantiate an instance of Web3 and pass it the gnache provider
const { interface, bytecode } = require('../compile'); // get the interface and bytecode from our compile.js file
let accounts, contract, contractObj;

/* *****************************
 * pre-test initiate
 * *****************************/

beforeEach( async function() {

    accounts = await web3.eth.getAccounts();     // get the list of predefined gnache accounts

    deployedContractObj = await new web3.eth.Contract( JSON.parse(interface) )
        .deploy({data: bytecode, arguments: ['Hi there!'] })
        .send({ from: accounts[0], gas:'1000000' }); // deploy 
});

/* *****************************
 * run tests
 * *****************************/

describe('Test contract', function () {
    it ('deploys a contract', function(){
        assert.ok(deployedContractObj.options.address);
    });

    it('has the default message', async function(){
        const message = await deployedContractObj.methods.message().call();
        assert.equal(message, 'Hi there!');
    });

    it('can change the message', async function(){
        await deployedContractObj.methods.setMessage('bye!').send({ from: accounts[0] });
        const message = await deployedContractObj.methods.message().call();
        assert.equal(message, 'bye!');
    }); 
});