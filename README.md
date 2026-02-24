AI-Powered Blockchain Scholarship & Micro-Credit System

Education is a right, but many students depend on scholarships or micro-credit to continue their studies. Unfortunately, the current system has several limitations: slow manual verification, lack of transparency, potential misuse of funds, biased approvals, and no real-time tracking. This often leaves students frustrated, unaware of their application status, and mistrustful of the process.

Our project aims to solve these issues by combining Artificial Intelligence and Blockchain Technology to create a fully transparent, automated, and secure scholarship and micro-credit system.

Key Features

AI-Based Eligibility Scoring – Automatically evaluates applications based on academic performance, income, and other factors.

Fraud Detection – Identifies suspicious applications to prevent misuse of funds.

Risk-Based Credit Approval – Offers micro-credit depending on calculated risk levels.

Smart Contract Automation – Funds are released automatically to approved students using Ethereum smart contracts.

Blockchain Transparency – All transactions are recorded permanently, ensuring complete transparency and accountability.

How It Works

Student Applies
Students submit their information through a simple web application built with React. This includes their name, CGPA, income, requested amount, and wallet address.

AI Scoring
The backend uses AI (Python/Node.js) to evaluate applications. It calculates an eligibility score, risk level, and fraud probability, then outputs a recommendation: eligible or not eligible, with low, medium, or high risk.

Admin Review
Admins see AI recommendations and can approve or reject applications through a dashboard.

Smart Contract Execution
Approved applications trigger a Solidity smart contract that sends ETH to the student’s wallet and records the transaction.

Blockchain Recording
Every transaction is stored on the Ethereum testnet, making it permanent and tamper-proof.

Fund Disbursement
Students receive the funds directly in their wallet. A transaction hash is provided for verification.

Technology Stack

Frontend: React.js

Backend: Node.js

AI Module: Python

Smart Contract: Solidity

Blockchain: Ethereum Testnet

Wallet: MetaMask

Project Structure
scholarship-blockchain/
├── frontend/        # React web app
├── backend/         # Node.js + Python AI backend
├── contracts/       # Solidity smart contract
├── scripts/         # Deployment scripts
├── README.md
└── .gitignore
Setup Instructions

Frontend:

Navigate to the frontend folder: cd frontend

Install dependencies: npm install

Start the app: npm start

Backend:

Navigate to the backend folder: cd backend

Install dependencies: npm install

Start the server: node app.js

Deploy Smart Contract:

npx hardhat run scripts/deploy.js --network goerli

Make sure to set your Infura project ID and wallet private key in hardhat.config.js and connect MetaMask to the same testnet.

Future Improvements

Real-time student dashboard with notifications

Email/SMS alerts for fund disbursement

Multi-blockchain support

Enhanced AI for better risk and fraud detection