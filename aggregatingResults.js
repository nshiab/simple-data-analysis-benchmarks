import { SimpleDB } from "@nshiab/simple-data-analysis";

const sdb = new SimpleDB();
const table = sdb.newTable();
await table.loadDataFromDirectory("./results/", {
  unifyColumns: true,
});
await table.longer(
  [
    "importing",
    "cleaning",
    "modifying",
    "writing",
    "summarizing",
    "totalDuration",
  ],
  "steps",
  "duration",
);
await table.summarize({
  values: "duration",
  categories: ["version", "runtime", "file", "steps"],
  summaries: ["mean", "stdDev"],
  decimals: 3,
});
await table.replace("steps", {
  importing: "1. Importing",
  cleaning: "2. Cleaning",
  modifying: "3. Modifying",
  summarizing: "4. Summarizing",
  writing: "5. Writing",
  totalDuration: "Total duration",
});

await table.writeData("aggregatedResults.csv");

await table.logTable(150);
