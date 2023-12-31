import { Database } from "@tableland/sdk";
import { Wallet, getDefaultProvider } from "ethers";
import * as dotenv from "dotenv";
dotenv.config();

const privateKey = process.env.PRIVATE_KEY;
const alchemyKey = process.env.ALCHEMY_KEY;

console.log(`privateKey: ${privateKey}`);
console.log(`alchemyKey: ${alchemyKey}`);

const wallet = new Wallet(privateKey);
const provider = getDefaultProvider(
  `https://polygon-mumbai.g.alchemy.com/v2/${alchemyKey}`
);
const signer = wallet.connect(provider);
const db = new Database({ signer });
// const db = new Database();

// This is the table's `prefix`--a custom table value prefixed as part of the table's name
const prefix = "patron_staking";

const { meta: create } = await db
  .prepare(
    `CREATE TABLE ${prefix} (uuid text primary key, name text, icon text, profile text, wallet_address text, description text, social_link text);`
  )
  .run();

// The table's `name` is in the format `{prefix}_{chainId}_{tableId}`
console.log(create.txn.name);
