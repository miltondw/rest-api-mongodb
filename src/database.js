import mongoose from "mongoose";
import config from "./config";

(async () => {
  const db = await mongoose.connect(config.mogodbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Databese is connected to:", db.connection.name);
})();
