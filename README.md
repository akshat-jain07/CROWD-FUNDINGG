# Crowdfunding DApp on Edu Chain

## Overview
This project is a decentralized crowdfunding platform built on the **Edu Chain**. It allows users to create campaigns, contribute funds, and track funding progress transparently through blockchain technology.

## Features
- **Decentralized & Transparent**: All transactions are recorded on the blockchain, ensuring transparency and immutability.
- **Smart Contract-Based**: Ensures fair fund distribution and prevents fraud.
- **User-Friendly Interface**: Easily create and contribute to crowdfunding campaigns.
- **Secure & Trustless**: No intermediaries—funds are transferred directly between users and campaign creators.
- **Campaign Tracking**: Monitor funding progress in real-time on the blockchain.

## Deployed Contract Address
The smart contract for this project is deployed on the **Edu Chain** at the following address:
```
0x0C200F0d8c4bc4C397e5beA1Ff30279893A203A6
```

## Getting Started
### Prerequisites
- Node.js
- Hardhat or Remix IDE
- MetaMask Wallet (connected to Edu Chain)

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/crowdfunding-dapp.git
   ```
2. Install dependencies:
   ```sh
   cd crowdfunding-dapp
   npm install
   ```
3. Deploy smart contracts:
   ```sh
   npx hardhat run scripts/deploy.js --network educhain
   ```

## Usage
1. Connect your MetaMask wallet to the Edu Chain.
2. Create a crowdfunding campaign.
3. Users can contribute to campaigns using the platform.
4. Campaign owners can withdraw funds once the goal is met.

## Smart Contract Functions
- `createCampaign(title, description, goalAmount, duration)` - Creates a new campaign.
- `contribute(campaignId)` - Allows users to contribute funds.
- `withdrawFunds(campaignId)` - Enables campaign creators to withdraw once the goal is achieved.
- `getCampaigns()` - Retrieves all active campaigns.

## License
This project is licensed under the MIT License.

## Contact
For any issues or contributions, feel free to open an issue on GitHub or reach out to the developer.

