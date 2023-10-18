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

const { meta: update } = await db
  .prepare(`UPDATE ${tableName} SET name = ?1 WHERE id = ?2`)
  .bind("Cardene V2", 0)
  .run();

// Wait for transaction finality
await update.txn.wait();

// Perform a read query, requesting all rows from the table
const { results } = await db.prepare(`SELECT * FROM ${tableName};`).all();

console.log(`results: ${JSON.stringify(results)}`);
