import benchmark from "./functions/sda.js";

console.log("benchmark-bun-sda");

await benchmark(
  "ahccd-sample.csv",
  10,
  "bun@1.3.14",
  "simple-data-analysis@5.20.0",
);

console.log("\nahccd.csv");
await benchmark("ahccd.csv", 10, "bun@1.3.14", "simple-data-analysis@5.20.0");
