import benchmark from "./functions/sda.js";

console.log("benchmark-deno-sda");

await benchmark(
  "ahccd-sample.csv",
  10,
  "deno@2.0.6",
  "simple-data-analysis@3.17.0",
);

console.log("\nahccd.csv");
await benchmark("ahccd.csv", 10, "deno@2.0.6", "simple-data-analysis@3.17.0");
