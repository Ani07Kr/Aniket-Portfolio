const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

let mongoMemoryServer = null;

const connectDB = async () => {
  try {
    const mongoUri = process.env.MONGODB_URI;

    if (mongoUri && mongoUri.trim() !== '') {
      console.log('🔄 Connecting to provided MongoDB URI...');
      const conn = await mongoose.connect(mongoUri, {
        serverSelectionTimeoutMS: 5000,
      });
      console.log(`✅ MongoDB Connected to Cloud/Local: ${conn.connection.host}`);
      return conn;
    }

    // Resilient In-Memory MongoDB Fallback for zero-friction 100% free local & cloud execution
    console.log('⚡ Initializing Resilient Embedded MongoDB Instance (100% Free & Zero-Setup)...');
    mongoMemoryServer = await MongoMemoryServer.create({
      binary: {
        version: '7.0.14',
      },
      instance: {
        dbName: 'aniket_portfolio_db',
      },
    });

    const uri = mongoMemoryServer.getUri();
    const conn = await mongoose.connect(uri);
    console.log(`✅ Embedded MongoDB Connected: ${conn.connection.host} / ${conn.connection.name}`);
    return conn;
  } catch (error) {
    console.error(`❌ MongoDB Connection Error: ${error.message}`);
    // If standard URI failed, try fallback
    try {
      console.log('⚠️ Attempting fallback to Embedded In-Memory MongoDB (7.0.14)...');
      mongoMemoryServer = await MongoMemoryServer.create({
        binary: {
          version: '7.0.14',
        },
        instance: { dbName: 'aniket_portfolio_db' },
      });
      const uri = mongoMemoryServer.getUri();
      const conn = await mongoose.connect(uri);
      console.log(`✅ Embedded MongoDB Connected after fallback: ${conn.connection.host}`);
      return conn;
    } catch (fallbackErr) {
      console.error(`❌ Fatal Database Error: ${fallbackErr.message}`);
      process.exit(1);
    }
  }
};

const disconnectDB = async () => {
  try {
    await mongoose.disconnect();
    if (mongoMemoryServer) {
      await mongoMemoryServer.stop();
    }
  } catch (err) {
    console.error('Error disconnecting DB:', err);
  }
};

module.exports = { connectDB, disconnectDB };
