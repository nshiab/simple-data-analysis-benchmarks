import benchmark from "./functions/sda.js";

console.log("benchmark-deno-sda");

await benchmark(
  "ahccd-sample.csv",
  10,
  "deno@2.1.7",
  "simple-data-analysis@4.0.1",
);

console.log("\nahccd.csv");
await benchmark("ahccd.csv", 10, "deno@2.1.7", "simple-data-analysis@4.0.1");
