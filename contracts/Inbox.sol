pragma solidity ^0.4.22;

contract Inbox {
    string public message;
    
    constructor ( bytes32[] proposalNames) public {
    }


    /*
    constructor (string initialMessage) public {
        message = initialMessage;
    }
    */

    
    function setMessage (string newMessage) public {
        message = newMessage;
    }
    
    function getMessage () public view returns (string) {
        return message;
    }
}
