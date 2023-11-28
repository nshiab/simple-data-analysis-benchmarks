import benchmark from "./functions/sdaLegacy.js";

console.log("benchmark-bun-sda-legacy");
await benchmark(
  "ahccd-sample.csv",
  10,
  "bun@1.0.14",
  "simple-data-analysis@1.8.1"
);

console.log("Test with ahccd.csv takes more than 5 minutes. Skipped.");
// await benchmark("ahccd.csv", 10, "bun@1.0.14", "simple-data-analysis@1.8.1");
