# Blockchain Lab Assignments

## Student Details
- Name: Shravani Sonigra  
- Roll Number: 123B1B063  
- Course Name: Blockchain Technology  

---

## Overview
This repository contains five assignments for the Blockchain Lab course. Each assignment folder includes code, README, and screenshots.

---

## Tech Stack
- Solidity  
- Remix IDE  
- MetaMask  
- Polygon Amoy Testnet  
- IPFS (Pinata)  
- HTML, CSS, JavaScript  

---

## Assignments

### Assignment 1: Smart Contract Development
Basic smart contract with store and retrieve functionality.

### Assignment 2: Polygon Deployment
Deployment of smart contract using MetaMask on Polygon Amoy Testnet.

### Assignment 3: Web Interface + MetaMask
Frontend interface to interact with deployed smart contract.

### Assignment 4: IPFS Integration
Uploading and retrieving files using IPFS via Pinata.

### Assignment 5: DAO Smart Contract
Implementation of DAO with proposal creation and voting system.

---

## How to Run

### Common Setup
1. Install Node.js  
2. Install MetaMask extension  
3. Connect MetaMask to Polygon Amoy Testnet  

---

## Assignment 1

### Steps
1. Open Remix IDE  
2. Upload `Storage.sol`  
3. Compile the contract  
4. Deploy using JavaScript VM or MetaMask  
5. Test functions:
   - store()
   - retrieve()

---

## Assignment 2

### Steps
1. Open Remix IDE  
2. Upload contract file  
3. Compile the contract  
4. Connect MetaMask  
5. Select Injected Provider  
6. Deploy contract on Polygon Amoy  
7. Copy contract address  
8. Verify transaction on:
   https://amoy.polygonscan.com/

---

## Assignment 3

### Run
cd assignment-3  
python3 -m http.server 8080  

### Steps
1. Open browser  
2. Go to http://localhost:8080  
3. Connect MetaMask  
4. Interact with contract  

---

## Assignment 4

### Run
cd "Assignment 4/IPFS-code"  
npm install  
node upload.js  

### Steps
1. Upload file using Pinata API  
2. Receive CID (Content Identifier)  

### Retrieve File
https://gateway.pinata.cloud/ipfs/CID  

---

## Assignment 5

### Run
cd assignment-5  
npm install  
npx hardhat compile  

---

## Polygon Amoy Testnet Details
- Network Name: Polygon Amoy  
- RPC URL: https://rpc-amoy.polygon.technology/  
- Chain ID: 80002  
- Currency Symbol: MATIC  
- Block Explorer: https://amoy.polygonscan.com/  

---

## Screenshots
Each assignment contains screenshots of:
- Deployment  
- Transactions  
- Outputs  

---

## Result
Successfully completed all blockchain lab assignments including smart contract development, deployment, frontend interaction, IPFS integration, and DAO implementation.
