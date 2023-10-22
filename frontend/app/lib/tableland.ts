import { Database } from "@tableland/sdk";
import { Wallet, getDefaultProvider } from "ethers";
import { PRIVATE_KEY, ALCHEMY_KEY, DB_NAME } from "@config/config";
import { User } from "@common/types";
import { v4 as uuidv4 } from "uuid";

const wallet = new Wallet(PRIVATE_KEY);
const provider = getDefaultProvider(
  `https://polygon-mumbai.g.alchemy.com/v2/${ALCHEMY_KEY}`
);
const signer = wallet.connect(provider);

const db: Database<User> = new Database({ signer });

export const writeDb = async (user: User) => {
    const uuid = uuidv4();
  const { meta: insert } = await db
    .prepare(
      `INSERT INTO ${DB_NAME} (uuid, name, icon, profile, wallet_address, description, social_link) VALUES (?, ?, ?, ?, ?, ?, ?);`
    )
      .bind(
        uuid,
      user.name,
      user.icon,
      user.profile,
      user.walletAddress.toLowerCase(),
      user.description,
      user.socialLink
    )
    .run();

  // Wait for transaction finality
  await insert.txn?.wait();

  // Perform a read query, requesting all rows from the table
  const { results } = await db.prepare(`SELECT * FROM ${DB_NAME};`).all();

    console.log(`results: ${results}`);
    return results;
};

export const readDb = async (walletAddress: string): Promise<User> => {
    const { results } = await db
      .prepare(`SELECT * FROM ${DB_NAME} where wallet_address = ${walletAddress};`)
      .all();
    console.log(results);
    return results[0];
}
