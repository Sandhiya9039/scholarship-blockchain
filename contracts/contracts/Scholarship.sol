// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Scholarship {

    address public admin;

    struct Application {
        address student;
        uint amount;
        bool approved;
    }

    mapping(uint => Application) public applications;
    uint public applicationCount;

    constructor() {
        admin = msg.sender;
    }

    function createApplication(uint _amount) public {
        applicationCount++;
        applications[applicationCount] = Application(
            msg.sender,
            _amount,
            false
        );
    }

    function approve(uint _id) public payable {
        require(msg.sender == admin, "Only admin");
        Application storage app = applications[_id];
        require(!app.approved, "Already approved");

        app.approved = true;
        payable(app.student).transfer(app.amount);
    }
}