type Cert = {
  issuer: string;
  title: string;
  sub: string;
  image: string;
  learned: string;
  href: string;
};

const make =
  (issuer: string, prefix: string, sub: string) =>
  (n: number, title: string, learned: string, href: string): Cert => ({
    issuer,
    title,
    sub,
    image: `/certificates/${prefix}-${String(n).padStart(2, "0")}.webp`,
    learned,
    href,
  });

const avalanche = make("Avalanche Academy", "avalanche", "Blockchain Development");
const risein = make("Rise In", "risein", "Smart Contract Development");
const starknet = make("Starknet", "starknet", "Starknet Development");

export const certificates: Cert[] = [
  avalanche(
    1,
    "Avalanche Fundamentals",
    "In this course, I learned about Avalanche blockchain technology, how its consensus mechanism works, and how Avalanche L1s support scalability and customization. I also learned about the Primary Network and Virtual Machines, which help developers build blockchain applications.",
    "https://drive.google.com/file/d/1xC1pNldmn3j1M3NLVc5VFn35M-vBbxo2/view?usp=drivesdk"
  ),
  avalanche(
    2,
    "Blockchain Fundamentals",
    "In this course, I learned the basics of blockchain technology, including how blockchain payments work, cryptography, digital signatures, and consensus mechanisms. I also learned about Sybil defense, smart contracts, tokenomics, and virtual machines. The course helped me understand how blockchain works and how it can be used to build applications.",
    "https://drive.google.com/file/d/1YXi87zdR5AN_wIVbYPWHBpUei2nHnGle/view?usp=drivesdk"
  ),
  avalanche(
    3,
    "Permissioned L1s",
    "In this course, I learned how to create, configure, and manage permissioned Layer 1 blockchains on Avalanche. I also learned about Proof of Authority (PoA), deploying Validator Manager Contracts, managing validators, and setting up multi-signature governance to improve blockchain security.",
    "https://drive.google.com/file/d/1QDv_X9NjGT9h4DNHG9kOoURizx2OGEJ5/view?usp=drivesdk"
  ),
  avalanche(
    4,
    "L1 Native Tokenomics",
    "In this course, I learned how to create and manage native tokens on an Avalanche L1 blockchain. I also learned about tokenomics, token distribution, vesting schedules, bonding curves, airdrops, and governance models such as DAOs and quadratic voting.",
    "https://drive.google.com/file/d/1--1O6AcodCFJsP0HY0wMvlG_z3pg0zq-/view?usp=drivesdk"
  ),
  avalanche(
    5,
    "Permissionless L1s",
    "In this course, I learned how to create and manage permissionless Layer 1 blockchains on Avalanche using Proof of Stake (PoS) consensus. I also learned about staking, validator management, delegation, staking manager configuration, and node licenses for building a decentralized blockchain network.",
    "https://drive.google.com/file/d/1m_lISDO92NUj2Z8UMmxAqx68aydpx8aq/view?usp=drivesdk"
  ),
  avalanche(
    6,
    "Interchain Messaging",
    "In this course, I learned about Avalanche Interchain Messaging (ICM) and how different blockchains communicate with each other. I also learned about Avalanche Warp Messaging (AWM), Teleporter, and relayers, as well as how to set up cross-chain infrastructure and send messages between Avalanche L1 blockchains.",
    "https://drive.google.com/file/d/1I5kz7GVLs82LmCcYqOP9Lm04AxHSMu2X/view?usp=drivesdk"
  ),
  avalanche(
    7,
    "ERC-20 Bridge",
    "In this course, I learned how to bridge ERC-20 tokens between Avalanche L1 blockchains using Interchain Token Transfer (ICTT). I also learned about bridge architecture, security risks, TokenHome and TokenRemote contracts, and how to deploy token bridges and transfer tokens across multiple chains.",
    "https://drive.google.com/file/d/1PpttVw_FVSnrgjrH_iP4PSFgOfCA5wZF/view?usp=drivesdk"
  ),
  avalanche(
    8,
    "Native Token Bridge",
    "In this course, I learned how to bridge native tokens between Avalanche L1 blockchains using Interchain Token Transfer (ICTT). I also learned how to use ERC-20 tokens as native gas tokens, export native tokens to C-Chain, and use AVAX as an L1 gas token, while understanding collateralization and TokenHome and TokenRemote contracts.",
    "https://drive.google.com/file/d/16pGxHQBwZrlCGFm6SvTscIUBsMkltHa7/view?usp=drivesdk"
  ),
  avalanche(
    9,
    "Customizing the EVM",
    "In this course, I learned how to customize the Ethereum Virtual Machine (EVM) to build specialized blockchain systems. I also learned about precompiles, development environment setup, and how to create custom EVM blockchains, hash functions, calculators, and stateful counters using programming.",
    "https://drive.google.com/file/d/1YXi87zdR5AN_wIVbYPWHBpUei2nHnGle/view?usp=drivesdk"
  ),
  avalanche(
    10,
    "Access Restriction Fundamentals",
    "In this course, I learned how to implement access control on Avalanche L1 blockchains using precompiles and allowlists. I also learned how to restrict transactions and smart contract deployments, manage administrator permissions, activate precompiles at genesis, and recover from configuration errors through network upgrades.",
    "https://drive.google.com/file/d/1tXIRTRZrrRWlJvY29YxdPaUIMRBslVg7/view?usp=drivesdk"
  ),
  avalanche(
    11,
    "Solidity Programming with Foundry",
    "In this course, I learned the basics of Solidity programming and how to build decentralized applications (dApps) on Avalanche. I also learned about smart contract structures, data types, functions, control flows, inheritance, modifiers, events, and token standards, as well as how to deploy and interact with smart contracts using Foundry.",
    "https://drive.google.com/file/d/1E92SfSrVN8KbKKojEuzOsGLqJXkP-nXs/view?usp=drivesdk"
  ),
  avalanche(
    12,
    "x402 Payment Infrastructure",
    "In this course, I learned about the x402 protocol and how it enables instant, permissionless payments through HTTP on Avalanche. I also learned about payment flows, facilitators, API monetization, and how to implement x402 middleware to support micropayments and AI agent payments in applications.",
    "https://drive.google.com/file/d/1poWmVSZu_VkjILn4TKH2TWZtWeyceahZ/view?usp=drivesdk"
  ),
  avalanche(
    13,
    "Encrypted ERC",
    "In this course, I learned about the eERC token standard and how it enables private transactions on EVM-compatible blockchains. I also learned about ERC token standards, zero-knowledge proofs, homomorphic encryption, confidential transfers, and how to create and deploy private tokens while balancing privacy and regulatory compliance.",
    "https://drive.google.com/file/d/1rM8w-dKbojE_9VaL13byDuMa6Zl_H7Ms/view?usp=drivesdk"
  ),

  risein(
    1,
    "Learn everything about Solana",
    "In this course, I learned the fundamentals of Solana blockchain development, including transactions, instructions, accounts, and Program Derived Addresses (PDAs). I also learned to use Rust to build, test, and deploy smart contracts through practical projects such as a counter, token transfer, and restaurant review dApp with a frontend.",
    "https://www.risein.com/certificates/FsTDwzqy"
  ),
  risein(
    2,
    "Learn everything about Solidity",
    "In this course, I learned the fundamentals of Solidity programming and Ethereum smart contract development. I also learned how to use Remix IDE, create counter and proposal contracts, implement constructors and access control with the OnlyOwner modifier, and build voting functionality through practical exercises and a final project.",
    "https://www.risein.com/certificates/SBAjAkFN"
  ),
  risein(
    3,
    "Build on BNB Chain | BNB Chain Fundamentals",
    "In this course, I learned the fundamentals of BNB Chain, including the EVM model, how BNB Chain works, and the role of wallets in blockchain transactions. I also learned about zkBNB and how to use Trust Wallet and MetaMask with BNB Smart Chain.",
    "https://www.risein.com/certificates/xthH946h"
  ),
  risein(
    4,
    "Build on BNB Chain | Solidity for BNB Chain Development",
    "In this course, I learned Solidity programming for BNB Chain, including how to use Remix IDE to create and deploy smart contracts. I also learned about data types, variables, functions, mappings, structs, modifiers, events, error handling, libraries, inheritance, and contract interactions, applying these skills in a final project.",
    "https://www.risein.com/certificates/4AIiCv3d"
  ),
  risein(
    5,
    "Build on BNB Chain | Smart Contract and dApp Development On BNB Chain",
    "In this course, I learned how to develop decentralized applications (dApps) on BNB Chain, from setting up the development environment to creating, compiling, and testing smart contracts. I also learned how to build a full-stack decentralized car rental application and integrate smart contracts with a frontend to create a functional blockchain-based platform.",
    "https://www.risein.com/certificates/rVeojADP"
  ),

  starknet(
    1,
    "Starknet Smart Contracts",
    "In this course, I learned how to build smart contracts on Starknet using Cairo. I also learned project setup, storage management, constructors, functions, events, access control with OpenZeppelin, and cross-contract interactions, including token balance checks, allowances, and payments.",
    "https://mycourse.app/UU6YrgDbDtJu9lpst"
  ),
  starknet(
    2,
    "Testing with Starknet Foundry",
    "In this course, I learned how to automate smart contract testing on Starknet using Starknet Foundry. I also learned to test state changes, events, errors, access control, and ERC-20 token payments using cheatcodes, event spies, and reusable testing utilities to ensure contracts work correctly before deployment.",
    "https://mycourse.app/GpUYpae4pDTKBNfij"
  ),
  starknet(
    3,
    "Creating a Web3 Startup",
    "In this course, I learned how to develop and validate a Web3 startup idea, identify target customers, and test market demand with minimal investment. I also learned how to create a go-to-market strategy, attract and retain customers, and build a compelling pitch and story to present my startup to investors.",
    "https://mycourse.app/rF3DQeLewedYvDt4o"
  ),
];
