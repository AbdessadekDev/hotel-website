import mongoose from "mongoose";
import debug from "debug";
import constructMongoUri from "../../utils/constructMongoUri";

const dblog = debug("app:mongodb");
const { MONGO_DB_NAME = "", NODE_ENV } = process.env;

(async () => {
  try {
    const mongoUri = constructMongoUri(process.env);

    if (NODE_ENV === "development") {
      dblog("Connecting to MongoDB with URI: %s", mongoUri.replace(/:\/\/.*?:.*?@/, "://****:****@")); // Sanitized log
    }
    await mongoose.connect(mongoUri);

    if (NODE_ENV === "development") {
      dblog("Database '%s' connected successfully", MONGO_DB_NAME);
    }
  } catch (err) {
    if (NODE_ENV === "development" && err instanceof Error) {
      dblog("ERROR: %s", err.message);
    }
    process.exit(1); // Exit process with failure
  }
})();
