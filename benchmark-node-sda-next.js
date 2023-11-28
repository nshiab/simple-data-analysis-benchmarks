import benchmark from "./functions/sdaNext.js";

console.log("benchmark-node-sda-next");
await benchmark(
  "ahccd-sample.csv",
  10,
  "node@20.9.0",
  "simple-data-analysis@2.0.1"
);

await benchmark("ahccd.csv", 1, "node@20.9.0", "simple-data-analysis@2.0.1");
