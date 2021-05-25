import { config } from "dotenv";
config();
export default {
  mogodbURL: process.env.MONGODB_URI,
};
