import { Database } from "@tableland/sdk";

const tableName = "my_test_sdk_table_80001_7885";

const db = new Database();

const { results } = await db.prepare(`SELECT * FROM ${tableName};`).all();
console.log(results);
