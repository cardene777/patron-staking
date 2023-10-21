import { Database } from "@tableland/sdk";
import { Wallet, getDefaultProvider } from "ethers";
import * as dotenv from "dotenv";
dotenv.config();

// You can also pull getDefaultProvider from the SDK's 'helpers' module

const privateKey = process.env.PRIVATE_KEY;

const wallet = new Wallet(privateKey);
const provider = getDefaultProvider(`https://polygon-mumbai.g.alchemy.com/v2/${process.env.ALCHEMY_KEY}`);
const signer = wallet.connect(provider);
// Connect to the database
const db = new Database({ signer });
