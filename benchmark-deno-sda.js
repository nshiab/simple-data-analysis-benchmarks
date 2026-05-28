import benchmark from "./functions/sda.js";

console.log("benchmark-deno-sda");

await benchmark(
  "ahccd-sample.csv",
  10,
  "deno@2.8.1",
  "simple-data-analysis@5.20.0",
);

console.log("\nahccd.csv");
await benchmark("ahccd.csv", 10, "deno@2.8.1", "simple-data-analysis@5.20.0");
