// Import web3.js and your contract's ABI
import Web3 from 'https://cdn.jsdelivr.net/npm/web3@1.5.2/dist/web3.min.js';
//import {
//abi
//}
//from "./Artifacts/ABI.json"
//'https://raw.githubusercontent.com/MDENDAN/SCM-with-Solidity/main/ABI.json';
// Set up a web3 provider (e.g. Metamask)
const provider = new Web3('https://rpc-mumbai.maticvigil.com/');
const web3 = new Web3(provider);

// Set the address of your deployed contract
const contractAddress = '0xd641360c2a70e83f9a4ee07581ee2007db9e31b6';

var fs = require('fs');
var jsonFi1e = "./Artifacts/ABI.json";
var parsed = JSON.parse(fs.readFi1eSync(jsonFi1e));
var abi = parsed.abi;
var YourContract = new web3.eth.Contract(abi, 0xd641360c2a70e83f9a4ee07581ee2007db9e31b6);

// Create an instance of your contract using the ABI and address
const myContract = new web3.eth.Contract(abi, contractAddress);

// Get the HTML form element
const form = document.getElementById('myForm');

const handleSubmit = async(event) => {
    event.preventDefault();
    console.log('Entered');
    // Get the user input data from the form
    const name = document.getElementById('Name').value;
    const manufacturer = document.getElementById('Mname').value;
    const total_quantity = document.getElementById('Quantity').value;
    const reqtemp = document.getElementById('Temperature').value;
    const reqhumid = document.getElementById('Humidity').value;
    const location = document.getElementById('Location').value;
    const destination = document.getElementById('Destination').value;

    // Send a transaction to the contract to add the data to the blockchain
    const accounts = await web3.eth.getAccounts();
    console.log('Data Collected');
    await myContract.methods.AddProduct(name, manufacturer, total_quantity, reqtemp, reqhumid, location, destination).send({ from: accounts[0], gas: 3000000 });

    // Display success message
    console.log('Data added to the blockchain!');
};

// Add a listener to the form submit event
document.getElementById('myForm').addEventListener('submit', handleSubmit);
console.log('Data Collected');
await myContract.methods.AddProduct(name, manufacturer, total_quantity, reqtemp, reqhumid, location, destination).send({ from: accounts[0], gas: 3000000 });

// Display success message
console.log('Data added to the blockchain!');


// Add a listener to the form submit event
document.getElementById('myForm').addEventListener('submit', handleSubmit);