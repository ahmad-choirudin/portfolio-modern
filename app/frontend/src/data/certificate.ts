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
    "How Avalanche works: its consensus mechanism, the Primary Network, Virtual Machines, and how Avalanche L1s enable scalable, customizable blockchains.",
    "https://drive.google.com/file/d/1xC1pNldmn3j1M3NLVc5VFn35M-vBbxo2/view?usp=drivesdk"
  ),
  avalanche(
    2,
    "Blockchain Fundamentals",
    "Core blockchain concepts: payments, cryptography, digital signatures, consensus, Sybil defense, smart contracts, tokenomics, and virtual machines.",
    "https://drive.google.com/file/d/1UNt0gZSkaBKDpIJ1wlyeJGNInS-830JQ/view?usp=drivesdk"
  ),
  avalanche(
    3,
    "Permissioned L1s",
    "Creating and managing permissioned L1s on Avalanche with Proof of Authority, validator manager contracts, and multi-signature governance.",
    "https://drive.google.com/file/d/1QDv_X9NjGT9h4DNHG9kOoURizx2OGEJ5/view?usp=drivesdk"
  ),
  avalanche(
    4,
    "L1 Native Tokenomics",
    "Creating native tokens on an Avalanche L1, plus distribution, vesting, bonding curves, airdrops, and governance models like DAOs and quadratic voting.",
    "https://drive.google.com/file/d/1--1O6AcodCFJsP0HY0wMvlG_z3pg0zq-/view?usp=drivesdk"
  ),
  avalanche(
    5,
    "Permissionless L1s",
    "Building permissionless L1s with Proof of Stake: staking, validator management, delegation, staking manager setup, and node licenses.",
    "https://drive.google.com/file/d/1m_lISDO92NUj2Z8UMmxAqx68aydpx8aq/view?usp=drivesdk"
  ),
  avalanche(
    6,
    "Interchain Messaging",
    "Cross-chain communication on Avalanche with ICM, Warp Messaging, Teleporter, and relayers to send messages between L1s.",
    "https://drive.google.com/file/d/1I5kz7GVLs82LmCcYqOP9Lm04AxHSMu2X/view?usp=drivesdk"
  ),
  avalanche(
    7,
    "ERC-20 Bridge",
    "Bridging ERC-20 tokens between L1s with Interchain Token Transfer, covering bridge architecture, security risks, and TokenHome/TokenRemote contracts.",
    "https://drive.google.com/file/d/1PpttVw_FVSnrgjrH_iP4PSFgOfCA5wZF/view?usp=drivesdk"
  ),
  avalanche(
    8,
    "Native Token Bridge",
    "Bridging native tokens with ICTT, using ERC-20 tokens or AVAX as an L1 gas token, and understanding collateralization and TokenHome/TokenRemote contracts.",
    "https://drive.google.com/file/d/16pGxHQBwZrlCGFm6SvTscIUBsMkltHa7/view?usp=drivesdk"
  ),
  avalanche(
    9,
    "Customizing the EVM",
    "Customizing the EVM with precompiles to build specialized chains, including custom hash functions, calculators, and stateful counters.",
    "https://drive.google.com/file/d/1YXi87zdR5AN_wIVbYPWHBpUei2nHnGle/view?usp=drivesdk"
  ),
  avalanche(
    10,
    "Access Restriction Fundamentals",
    "Controlling access on Avalanche L1s with precompiles and allowlists: restricting transactions and deployments, managing admins, and recovering from config errors through network upgrades.",
    "https://drive.google.com/file/d/1tXIRTRZrrRWlJvY29YxdPaUIMRBslVg7/view?usp=drivesdk"
  ),
  avalanche(
    11,
    "Solidity Programming with Foundry",
    "Solidity basics for building dApps on Avalanche, from contract structure, inheritance, and events to token standards, deployed and tested with Foundry.",
    "https://drive.google.com/file/d/1E92SfSrVN8KbKKojEuzOsGLqJXkP-nXs/view?usp=drivesdk"
  ),
  avalanche(
    12,
    "x402 Payment Infrastructure",
    "The x402 protocol for instant, permissionless HTTP payments on Avalanche: payment flows, facilitators, API monetization, and middleware for micropayments and AI agent payments.",
    "https://drive.google.com/file/d/1poWmVSZu_VkjILn4TKH2TWZtWeyceahZ/view?usp=drivesdk"
  ),
  avalanche(
    13,
    "Encrypted ERC",
    "The eERC standard for private transactions on EVM chains: zero-knowledge proofs, homomorphic encryption, and confidential transfers, balanced with regulatory compliance.",
    "https://drive.google.com/file/d/1rM8w-dKbojE_9VaL13byDuMa6Zl_H7Ms/view?usp=drivesdk"
  ),

  risein(
    1,
    "Learn everything about Solana",
    "Solana fundamentals: transactions, instructions, accounts, and PDAs, plus building and deploying Rust programs including a counter, a token transfer, and a restaurant review dApp with a frontend.",
    "https://www.risein.com/certificates/FsTDwzqy"
  ),
  risein(
    2,
    "Learn everything about Solidity",
    "Solidity and Ethereum smart contract basics in Remix: counter and proposal contracts, constructors, OnlyOwner access control, and a voting final project.",
    "https://www.risein.com/certificates/SBAjAkFN"
  ),
  risein(
    3,
    "Build on BNB Chain | BNB Chain Fundamentals",
    "BNB Chain fundamentals: the EVM model, how the chain works, the role of wallets, zkBNB, and using Trust Wallet and MetaMask with BNB Smart Chain.",
    "https://www.risein.com/certificates/xthH946h"
  ),
  risein(
    4,
    "Build on BNB Chain | Solidity for BNB Chain Development",
    "Solidity for BNB Chain in Remix: data types, functions, mappings, structs, modifiers, events, error handling, libraries, and inheritance, applied in a final project.",
    "https://www.risein.com/certificates/4AIiCv3d"
  ),
  risein(
    5,
    "Build on BNB Chain | Smart Contract and dApp Development On BNB Chain",
    "Building dApps on BNB Chain end to end: environment setup, writing and testing contracts, and a full-stack car rental app connecting contracts to a frontend.",
    "https://www.risein.com/certificates/rVeojADP"
  ),

  starknet(
    1,
    "Starknet Smart Contracts",
    "Writing Starknet smart contracts in Cairo: storage, constructors, events, OpenZeppelin access control, and cross-contract calls such as balance checks, allowances, and payments.",
    "https://mycourse.app/UU6YrgDbDtJu9lpst"
  ),
  starknet(
    2,
    "Testing with Starknet Foundry",
    "Automating contract tests with Starknet Foundry: state changes, events, errors, access control, and ERC-20 payments using cheatcodes and event spies.",
    "https://mycourse.app/GpUYpae4pDTKBNfij"
  ),
  starknet(
    3,
    "Creating a Web3 Startup",
    "Validating a Web3 startup idea: finding target customers, testing demand cheaply, planning go-to-market, and building a pitch for investors.",
    "https://mycourse.app/rF3DQeLewedYvDt4o"
  ),
];
