import benchmark from "./functions/sda.js";

console.log("benchmark-node-sda-next");

console.log("ahccd-sample.csv");
await benchmark(
  "ahccd-sample.csv",
  10,
  "node@23.13.1",
  "simple-data-analysis@4.0.1",
);

console.log("\nahccd.csv");
await benchmark("ahccd.csv", 10, "node@23.13.1", "simple-data-analysis@4.0.1");
