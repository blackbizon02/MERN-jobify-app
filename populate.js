import { readFile } from "fs/promises";

import connectDb from "./db/connect.js";
import dotenv from "dotenv";
dotenv.config();

import Job from "./models/Job.js";

const start = async () => {
  try {
    await connectDb(process.env.MONGO_URL);
    await Job.deleteMany();

    const jsonJobs = JSON.parse(
      await readFile(new URL("./mock-data.json", import.meta.url))
    );

    await Job.create(jsonJobs);
    console.log("success!!!");
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
