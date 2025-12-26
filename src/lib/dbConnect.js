import { MongoClient, ServerApiVersion } from "mongodb";

export const dbConnect = async (collectionName) => {
  const uri = process.env.MONGODB_URI;
  
  if (!uri) {
    throw new Error("Please define the MONGODB_URI environment variable inside .env.local");
  }

  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  try {
    // Connect the client to the server
    await client.connect();
    // Return the specific collection
    return client.db(process.env.DB_NAME).collection(collectionName);
  } catch (error) {
    console.error("Database connection error:", error);
    throw error;
  }
};