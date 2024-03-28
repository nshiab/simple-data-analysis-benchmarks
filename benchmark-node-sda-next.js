import benchmark from "./functions/sdaNext.js";

console.log("benchmark-node-sda-next");

console.log("ahccd-sample.csv");
await benchmark(
  "ahccd-sample.csv",
  10,
  "node@20.12.0",
  "simple-data-analysis@2.7.3"
);

console.log("\nahccd.csv");
await benchmark("ahccd.csv", 10, "node@20.12.0", "simple-data-analysis@2.7.3");
