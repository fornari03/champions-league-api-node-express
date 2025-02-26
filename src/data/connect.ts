import { MongoClient } from "mongodb";

const URI = process.env.CONNECTION_STRING;
if (!URI) {
  throw new Error("Please define the CONNECTION_STRING environment variable inside .env");
}

const client = new MongoClient(URI);

export const db = client.db(process.env.DB_NAME);