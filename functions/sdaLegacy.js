import { SimpleDataNode } from "simple-data-analysis-legacy";

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
    const sda = new SimpleDataNode();

    // Loading
    const startImporting = Date.now();
    if (file.includes("sample")) {
      sda.loadDataFromLocalFile({ path: `./data/${file}` });
    } else {
      await sda.loadDataWithStream({
        path: `./data/${file}`,
        showItemIndexEveryX: 10000,
      });
    }

    const endImporting = Date.now();
    times.importing = (endImporting - startImporting) / 1000;

    // Cleaning
    const startCleaning = Date.now();
    sda.selectKeys({ keys: ["time", "station", "station_name", "tas"] });
    sda.excludeMissingValues({ key: "tas" });
    sda.valuesToFloat({ key: "tas" });
    sda.valuesToDate({ key: "time", format: "%Y-%m-%d" });
    const endCleaning = Date.now();
    times.cleaning = (endCleaning - startCleaning) / 1000;

    // Modifying
    const startModifying = Date.now();
    sda.addKey({
      key: "decade",
      valueGenerator: (item) =>
        Math.floor(item.time.getUTCFullYear() / 10) * 10,
    });
    const endModifying = Date.now();
    times.modifying = (endModifying - startModifying) / 1000;

    // Writing clean data
    const startWriting = Date.now();
    sda.saveData({
      path: `./output/${runtime}-${version}-${file.split(".")[0]}.csv`,
    });
    const endWriting = Date.now();
    times.writing = (endWriting - startWriting) / 1000;

    // Summarizing
    const startSummarizing = Date.now();
    sda.summarize({
      keyValue: "tas",
      keyCategory: ["station", "station_name", "decade"],
      summary: "mean",
    });
    const endSummarizing = Date.now();
    times.summarizing = (endSummarizing - startSummarizing) / 1000;

    const endTotal = Date.now();
    times.totalDuration = (endTotal - startTotal) / 1000;

    console.log("Total duration", times.totalDuration, "sec");
    results.push(times);

    // Writing the final data to ensure it works as expected
    sda.saveData({
      path: `./output/${runtime}-${version}-${
        file.split(".")[0]
      }-summarized.csv`,
    });
  }

  new SimpleDataNode({ data: results }).saveData({
    path: `./results/${runtime}-${version}-${file.split(".")[0]}.csv`,
  });
}
