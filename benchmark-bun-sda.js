import benchmark from "./functions/sda.js";

console.log("benchmark-bun-sda");

await benchmark(
  "ahccd-sample.csv",
  10,
  "bun@1.2.17",
  "simple-data-analysis@5.6.15",
);

console.log("\nahccd.csv");
await benchmark("ahccd.csv", 10, "bun@1.2.17", "simple-data-analysis@5.6.15");
