// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract SebaToken {

    uint256 public constant totalSupply = 1000;
    uint256 public totalCreated = 0;
    address public immutable owner;

    uint256 public constant CREATION_PRICE = 0.01 ether;

    constructor() {
        owner = msg.sender;
    }

    mapping(address => uint256) public balances;

    modifier onlyOwner() {
        require(msg.sender == owner, "Sorry, not the owner");
        _;
    }

    function create (uint256 quantity) public onlyOwner{
        require(quantity + totalCreated <= totalSupply, "totalSupply reached!");

        balances[msg.sender] += quantity;
        totalCreated += quantity;
    }

    function send(address to, uint256 quantity) public {
        require(balances[msg.sender] >= quantity, "You dont have enough");

        balances[msg.sender] -= quantity;
        balances[to] += quantity;
    }

    function buy() public payable {
        require(msg.value >= CREATION_PRICE, "send more money");
        require(totalCreated < totalSupply,"totalSupply reached");
        balances[msg.sender] += 1;
        totalCreated += 1;
    }

    function withdraw() public payable onlyOwner {
        (bool sent, ) = owner.call{value: address(this).balance}("");
        require(sent, "Failed to send Ether");
    }
}
