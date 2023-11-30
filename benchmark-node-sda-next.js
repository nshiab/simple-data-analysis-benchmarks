import benchmark from "./functions/sdaNext.js";

console.log("benchmark-node-sda-next");

console.log("ahccd-sample.csv");
await benchmark(
  "ahccd-sample.csv",
  10,
  "node@20.9.0",
  "simple-data-analysis@2.0.1"
);

console.log("ahccd.csv");
await benchmark("ahccd.csv", 10, "node@20.9.0", "simple-data-analysis@2.0.1");
