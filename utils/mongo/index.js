const { MongoClient } = require('mongodb');
const url = process.env.MONGO_DB_HOST
const mongoClient = new MongoClient(url);

mongoClient.connect()
const db = mongoClient.db(process.env.DB_NAME)
export default db