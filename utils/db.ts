import { Sequelize } from "sequelize";
import { DATABASE_URL } from "./config";
import "dotenv/config";
require("dotenv").config();

const sequelize = new Sequelize(DATABASE_URL!, { logging: false }); 
// added ! to tell typescript that it's not undefined

const connectToDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log("DATABASE CONNECTED");
  } catch (err) {
    console.log("CONNECTION TO DATABASE FAILED");
    return process.exit(1);
  }
  return null;
};

export { sequelize, connectToDatabase };
