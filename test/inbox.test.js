const assert = require('assert')
const ganache = require('ganache-cli')

// Define a contructor for web3 (note the capital W)
const Web3 = require('web3')

// Instantiate an instance of Web3 and pass it the gnache provider
const web3 = new Web3(ganache.provider());

class Car {
    park (){
        return 'parked';
    }

    drive (){
        return 'moving';
    }
}

describe ('Car', () => {
    it('can park', () => {
        const car = new Car();
        assert.equal(car.park(), 'parked');
    })
})

