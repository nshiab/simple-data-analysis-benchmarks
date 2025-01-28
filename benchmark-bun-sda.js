import benchmark from "./functions/sda.js";

console.log("benchmark-bun-sda");

await benchmark(
  "ahccd-sample.csv",
  10,
  "bun@1.2.1",
  "simple-data-analysis@4.0.1",
);

console.log("\nahccd.csv");
await benchmark("ahccd.csv", 10, "bun@1.2.1", "simple-data-analysis@4.0.1");
