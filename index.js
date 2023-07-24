import connectDB from "./db.js";
import { _admin, _protected, _notFound, _errorHandler } from "./middlewares.js";
import generateToken from "./jwtToken.js";
import dotenv from "dotenv";

dotenv.config();

const config = (
  securedData = {
    NODE_ENV: "development",
    PORT: 5000,
    DatabaseName: "test",
    MONGO_URI: "mongodb://localhost:27017",
    JWT_SECRET: "Please_provide-JWT@secret$(default)",
  }
) => {
  securedData.MONGO_URI = `mongodb://localhost:27017/${securedData.DatabaseName}`;

  for (const key in securedData) {
    if (securedData.hasOwnProperty(key)) {
      process.env[key] = securedData[key];
    }
  }
};

// config();

const connectDatabase = async () => {
  const response = await connectDB();
  return response;
};

export {
  connectDatabase,
  _admin,
  _protected,
  _errorHandler,
  _notFound,
  generateToken,
};
