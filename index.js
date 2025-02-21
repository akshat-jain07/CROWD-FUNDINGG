async function run() {
    console.log("Connecting to MetaMask...");
    if (!window.ethereum) {
        console.error("MetaMask is not installed!");
        return;
    }

    const contractAddress = "0x7D9C2384AAEa9360f6B14d1269f4F86A160fa3C5"; // Replace with your deployed contract address
    const contractABI =[

        
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "campaignId",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "internalType": "address",
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "goal",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "deadline",
                        "type": "uint256"
                    }
                ],
                "name": "CampaignCreated",
                "type": "event"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "_campaignId",
                        "type": "uint256"
                    }
                ],
                "name": "contribute",
                "outputs": [],
                "stateMutability": "payable",
                "type": "function"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "campaignId",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "internalType": "address",
                        "name": "contributor",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                    }
                ],
                "name": "ContributionReceived",
                "type": "event"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "_goal",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "_durationInDays",
                        "type": "uint256"
                    }
                ],
                "name": "createCampaign",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "campaignId",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                    }
                ],
                "name": "FundsWithdrawn",
                "type": "event"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "_campaignId",
                        "type": "uint256"
                    }
                ],
                "name": "refund",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "_campaignId",
                        "type": "uint256"
                    }
                ],
                "name": "withdrawFunds",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "campaignCount",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "name": "campaigns",
                "outputs": [
                    {
                        "internalType": "address payable",
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "goal",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "deadline",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "fundsRaised",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bool",
                        "name": "isWithdrawn",
                        "type": "bool"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "name": "contributions",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            }
        
    ] ; // Replace with your contract ABI from Remix

    // Connect to MetaMask
    await window.ethereum.request({ method: "eth_requestAccounts" });
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, contractABI, signer);

    console.log("Connected to contract:", contractAddress);

    // Example: Create a campaign
    async function createCampaign(goal, duration) {
        try {
            const tx = await contract.createCampaign(ethers.utils.parseEther(goal), duration);
            await tx.wait();
            console.log("Campaign created!");
        } catch (error) {
            console.error("Error creating campaign:", error);
        }
    }

    // Example: Contribute to a campaign
    async function contribute(campaignId, amount) {
        try {
            const tx = await contract.contribute(campaignId, { value: ethers.utils.parseEther(amount) });
            await tx.wait();
            console.log("Contribution successful!");
        } catch (error) {
            console.error("Error contributing:", error);
        }
    }

    // Example: Withdraw funds from a campaign
    async function withdrawFunds(campaignId) {
        try {
            const tx = await contract.withdrawFunds(campaignId);
            await tx.wait();
            console.log("Funds withdrawn successfully!");
        } catch (error) {
            console.error("Error withdrawing funds:", error);
        }
    }

    // Run test transactions (Replace values before running)
    await createCampaign("0.1", "5"); // Creates a campaign with 0.1 ETH goal, 5 days duration
    await contribute(0, "0.05"); // Contributes 0.05 ETH to campaign 0
    await withdrawFunds(0); // Withdraw funds from campaign 0
}

run();
