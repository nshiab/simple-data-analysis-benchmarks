import benchmark from "./functions/sdaLegacy.js";

console.log("benchmark-node-sda-legacy");

await benchmark(
  "ahccd-sample.csv",
  10,
  "node@20.9.0",
  "simple-data-analysis@1.8.1"
);

// Out of memory
// await benchmark("ahccd.csv", 10, "node@20.9.0",  "simple-data-analysis@1.8.1");
