
/* *****************************
 * set up
 * *****************************/

const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3'); // Get a reference ot the Web3 constructor
const { interface, bytecode } = require('./compile'); // run compile.js and retreive interface and bytecode from module exports
const seedWords = 'recall ozone method elbow expand blade fit mimic fashion cradle wink color'
//const infuraEndpoint = 'https://rinkeby.infura.io/v3/8751e02f9e9a4ddba29e45195a471c0c'
const infuraEndpoint = 'https://rinkeby.infura.io/v3/0502202e4f4f4ba4b0230a53ce07519f'

const provider = new HDWalletProvider( seedWords, infuraEndpoint, 1, 2 ); // set up provider with metamask seed and rinkeby endpoint addr
const web3 = new Web3( provider ); // now instantiate a web3 instance and pass it the provider


console.log('deploying');


/* *****************************
 * functions
 * *****************************/

async function deploy () {
    const accounts = await web3.eth.getAccounts();
    console.log( 'Attempting to deploy from account', accounts[0] );
    
    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode, arguments: ['Hi there!'] })
        .send({ gas: '5000000', from: accounts[0] });

    console.log('Deployed to: ', result.options.address);
}

/* *****************************
 * main
 * *****************************/

deploy();



