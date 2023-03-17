// SPDX-License-Identifier: GPL-3.0
pragma solidity >= 0.8.0;

contract Supplychain{

    address owner;
   
   constructor() public {
      owner = msg.sender;
   }

uint256 product_id=0;

struct Product{
    uint256 id;
    string name;
    string manufacturer;
    string total_quantity;
    string reqtemp;
    string reqhumid;
    string location;
    string destination;
    uint256 timestamp;
}

//struct Status{
//    string location;
//    uint256 timestamp;
//    string temp;
//    string humidity;
//    uint256 p_id;
//    uint256 total_quantity;
//   bool flag;
//}

struct Data {
    uint256 pid;
    string location;
    uint256 timestamp;
    uint256 temp;
    uint256 humidity;
}

modifier onlyOwner {
      require(msg.sender == owner);
      _;
   }

Product[] public products_list;
Product private productInfo;
//Status[] public productStatus;
//Status private statusInfo;
Data[] public Data_list;
Data private DataInfo;


//mapping(uint256 => Status[]) public product_Status;
mapping (uint256 => Product) public products;
mapping (uint256 => Data[]) public data;

function AddProduct(
    string memory name,
    string memory manufacturer,
    string memory total_quantity,
    string memory reqtemp,
    string memory reqhumid,
    string memory location,
    string memory destination) public payable
{
    productInfo=Product(product_id,name,manufacturer,total_quantity,reqtemp,reqhumid,location,destination,block.timestamp);
    products[product_id]=(productInfo);
    products_list.push(productInfo);
    product_id++;

}

function AddData( 
    uint256 pid,
    string memory location,
    uint256 timestamp,
    uint256 temp,
    uint256 humidity) public payable {

        DataInfo = Data(pid,location,timestamp,temp,humidity);
        data[pid].push(DataInfo);
        Data_list.push(DataInfo);
        }

function getProductData(uint256 id) public view returns(Data[] memory){

    return data[id];
}

function getProducts() public view returns(Product[] memory){

    return products_list ;
}


}