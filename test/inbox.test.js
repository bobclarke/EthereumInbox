const assert = require('assert')

// ganache is a perosnal blockchain for development testing purposes
const ganache = require('ganache-cli')

// web3 is our NodeJS framework for interfacing with the blockchain
// Define a contructor for web3 (note the capital W)
const Web3 = require('web3')

// Instantiate an instance of Web3 and pass it the gnache provider
const web3 = new Web3(ganache.provider());

// A dummy class to demonstrate Mocha
class Car {
    park (){
        return 'parked';
    }

    drive (){
        return 'moving';
    }
}

// Some mocha tests
let car;
beforeEach( function(){
        car = new Car();
    }
)
describe('Car', () =>{
    it('can park', function () {
        assert.equal(car.park(),'parked');
    })

    it('can drive', function () {
        assert.equal(car.drive(), 'moving');
    })
});


