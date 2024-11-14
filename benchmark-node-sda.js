import benchmark from "./functions/sda.js";

console.log("benchmark-node-sda-next");

console.log("ahccd-sample.csv");
await benchmark(
  "ahccd-sample.csv",
  10,
  "node@23.2.0",
  "simple-data-analysis@3.17.0",
);

console.log("\nahccd.csv");
await benchmark("ahccd.csv", 10, "node@23.3.0", "simple-data-analysis@3.17.0");
