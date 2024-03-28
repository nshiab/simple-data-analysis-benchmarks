import { SimpleNodeDB } from "simple-data-analysis";

const sdb = new SimpleNodeDB();
await sdb.loadDataFromDirectory("results", "./results/", {
  unifyColumns: true,
});
await sdb.longer(
  "results",
  [
    "importing",
    "cleaning",
    "modifying",
    "writing",
    "summarizing",
    "totalDuration",
  ],
  "steps",
  "duration"
);
await sdb.summarize("results", {
  values: "duration",
  categories: ["version", "runtime", "file", "steps"],
  summaries: ["mean", "stdDev"],
  decimals: 3,
});
await sdb.replace("results", "steps", {
  importing: "1. Importing",
  cleaning: "2. Cleaning",
  modifying: "3. Modifying",
  summarizing: "4. Summarizing",
  writing: "5. Writing",
  totalDuration: "Total duration",
});

await sdb.writeData("results", "aggregatedResults.csv");

await sdb.logTable("results", { nbRowsToLog: 60 });
