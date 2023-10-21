import { Database } from "@tableland/sdk";
import { Wallet, getDefaultProvider } from "ethers";
import * as dotenv from "dotenv";
dotenv.config();

const privateKey = process.env.PRIVATE_KEY;
const alchemyKey = process.env.ALCHEMY_KEY;

const wallet = new Wallet(privateKey);
const provider = getDefaultProvider(
  `https://polygon-mumbai.g.alchemy.com/v2/${alchemyKey}`
);
const signer = wallet.connect(provider);

const tableName = "my_test_sdk_table_80001_7885";

const db = new Database({ signer });


// Insert a row into the table
const { meta: insert } = await db
  .prepare(`INSERT INTO ${tableName} (id, name) VALUES (?, ?);`)
  .bind(0, "Cardene")
  .run();

// Wait for transaction finality
await insert.txn.wait();

// Perform a read query, requesting all rows from the table
const { results } = await db.prepare(`SELECT * FROM ${tableName};`).all();

console.log(`results: ${results}`);
