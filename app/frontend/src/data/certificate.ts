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
const risein = make("Rise In", "risein", "BNB Chain Development");
const starknet = make("Starknet", "starknet", "Smart Contract Testing");

export const certificates: Cert[] = [
  avalanche(
    1,
    "Solidity Programming with Foundry",
    "Learned smart contract development with Solidity and Foundry, including the fundamentals of building and testing smart contracts.",
    "https://drive.google.com/file/d/1E92SfSrVN8KbKKojEuzOsGLqJXkP-nXs/view?usp=drivesdk"
  ),
  avalanche(2, "Judul sertifikat Avalanche ke-2", "Apa yang kamu pelajari.", "https://link-sertifikat"),
  // ... lanjut sampai avalanche(13, ...)

  risein(
    1,
    "Smart Contract and dApp Development on BNB Chain",
    "Studied smart contract development and decentralized application (dApp) development on BNB Chain.",
    "https://www.risein.com/certificates/rVeojADP"
  ),
  risein(2, "Judul sertifikat Rise In ke-2", "Apa yang kamu pelajari.", "https://link-sertifikat"),
  // ... lanjut sampai risein(5, ...)

  starknet(
    1,
    "Testing with Starknet Foundry",
    "Learned smart contract testing workflows using Starknet Foundry.",
    "https://mycourse.app/GpUYpae4pDTKBNfij"
  ),
  starknet(2, "Judul sertifikat Starknet ke-2", "Apa yang kamu pelajari.", "https://link-sertifikat"),
  starknet(3, "Judul sertifikat Starknet ke-3", "Apa yang kamu pelajari.", "https://link-sertifikat"),
];
