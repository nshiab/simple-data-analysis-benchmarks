import { SimpleDB } from "simple-data-analysis";

export default async function benchmark(file, iterations, runtime, version) {
  const results = [];

  for (let i = 0; i < iterations; i++) {
    console.log("Iteration", i);
    const times = {
      version,
      runtime,
      file,
      iteration: i,
    };
    const startTotal = Date.now();
    const sdb = new SimpleDB();
    const table = sdb.newTable();
    // Loading
    const startImporting = Date.now();
    await table.loadData(`./data/${file}`, { allText: true });
    const endImporting = Date.now();
    times.importing = (endImporting - startImporting) / 1000;

    // Cleaning
    const startCleaning = Date.now();
    await table.selectColumns(["time", "station", "station_name", "tas"]);
    await table.removeMissing({ columns: "tas" });
    await table.convert({ tas: "double", time: "date" });
    const endCleaning = Date.now();
    times.cleaning = (endCleaning - startCleaning) / 1000;

    // Modifying
    const startModifying = Date.now();
    await table.addColumn("decade", "integer", `FLOOR(YEAR(time) / 10)*10`);
    const endModifying = Date.now();
    times.modifying = (endModifying - startModifying) / 1000;

    // Writing clean data
    const startWriting = Date.now();
    await table.writeData(
      `./output/${runtime}-${version}-${file.split(".")[0]}.csv`
    );
    const endWriting = Date.now();
    times.writing = (endWriting - startWriting) / 1000;

    // Summarizing
    const startSummarizing = Date.now();
    await table.summarize({
      values: "tas",
      categories: ["station", "station_name", "decade"],
      summaries: "mean",
    });
    const endSummarizing = Date.now();
    times.summarizing = (endSummarizing - startSummarizing) / 1000;

    const endTotal = Date.now();
    times.totalDuration = (endTotal - startTotal) / 1000;

    console.log("Total duration", times.totalDuration, "sec");

    results.push(times);

    // Writing the final data to ensure it works as expected
    await table.writeData(
      `./output/${runtime}-${version}-${file.split(".")[0]}-summarized.csv`
    );

    await sdb.done();
  }

  const sdb = new SimpleDB();
  const table = sdb.newTable();
  await table.loadArray(results);
  await table.writeData(
    `./results/${runtime}-${version}-${file.split(".")[0]}.csv`
  );
}
