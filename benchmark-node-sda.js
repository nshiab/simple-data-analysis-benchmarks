import benchmark from "./functions/sda.js";

console.log("benchmark-node-sda-next");

console.log("ahccd-sample.csv");
await benchmark(
  "ahccd-sample.csv",
  10,
  "node@24.11.1",
  "simple-data-analysis@5.6.36",
);

console.log("\nahccd.csv");
await benchmark("ahccd.csv", 10, "node@24.11.1", "simple-data-analysis@5.6.36");
