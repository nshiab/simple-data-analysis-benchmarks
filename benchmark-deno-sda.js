import benchmark from "./functions/sda.js";

console.log("benchmark-deno-sda");

await benchmark(
  "ahccd-sample.csv",
  10,
  "deno@2.4.0",
  "simple-data-analysis@5.6.13",
);

console.log("\nahccd.csv");
await benchmark("ahccd.csv", 10, "deno@2.4.0", "simple-data-analysis@5.6.13");
