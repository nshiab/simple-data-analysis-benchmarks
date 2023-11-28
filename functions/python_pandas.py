import pandas as pd
import numpy as np
import time

def benchmark(file, iterations, version, runtime):

    results = []

    for i in range(iterations):

        print("Iteration", i)

        times = {
            "version": version,
            "runtime": runtime,
            "file": file,
            "iteration":i
        }
        start = time.time()

        # Loading
        start_loading = time.time()
        df = pd.read_csv("./data/" + file, dtype=str)
        end_loading = time.time()
        times["importing"] = round(end_loading - start_loading, 4)

        # Cleaning
        start_cleaning = time.time()
        df = df[["time", "station", "station_name", "tas"]].dropna(subset=['tas'])
        df['tas'] = pd.to_numeric(df['tas'])
        df['time'] = pd.to_datetime(df['time'])
        end_cleaning = time.time()
        times["cleaning"] = round(end_cleaning - start_cleaning, 4)

        # Modifying
        start_modifying = time.time()
        df['decade'] = np.floor(df["time"].dt.year / 10)*10
        end_modifying = time.time()
        times["modifying"] = round(end_modifying - start_modifying, 4)

        # Writing clean data
        start_writing = time.time()
        df.to_csv("./output/" + runtime + "-" + version + ("-sample" if "sample" in file else "") + ".csv", index=False)
        end_writing = time.time()
        times["writing"] = round(end_writing - start_writing, 4)

        # Summarizing
        start_summarizing = time.time()
        df = pd.pivot_table(df, values='tas', index=["station", "station_name", "decade"], aggfunc="mean")
        end_summarizing = time.time()
        times["summarizing"] = round(end_summarizing - start_summarizing, 4)

        end = time.time()
        times["totalDuration"] = round(end - start, 4)

        print("Total duration", times["totalDuration"])

        results.append(times)

        # Writing the final data to ensure it works as expected
        df.to_csv("./output/" + runtime + "-" + version + ("-sample" if "sample" in file else "") + "-summarized.csv", index=False)

    pd.DataFrame(results).to_csv("./results/" + runtime + "-" + version + ("-sample" if "sample" in file else "") + ".csv", index=False)