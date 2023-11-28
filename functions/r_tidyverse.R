library(tidyverse)
library(readr)


benchmark <- function(file, iterations, version, runtime) {

  sample <- ifelse(grepl("sample", file), "-sample", "")

  results <- list()

  for (i in 1:iterations) {
  
    print(paste("Iteration", i))
    
    times <- list()
    times[["version"]] <- version
    times[["runtime"]] <- runtime
    times[["file"]] <- file
    times[["iteration"]] <- i
    start <- Sys.time()
    
    # Loading
    start_loading <- Sys.time()
    csv_data <- paste("./data/", file, sep = "")
    df <- read_csv(csv_data, col_types = cols())
    end_loading <- Sys.time()
    times[["importing"]] <- round(end_loading - start_loading, 4)
    
    # Cleaning
    start_cleaning <- Sys.time()
    df <- df %>%
        select(time, station, station_name, tas) %>%
        filter(!is.na(tas)) %>%
        mutate(tas = as.numeric(tas),
        time = as.POSIXct(time))
    end_cleaning <- Sys.time()
    times[["cleaning"]] <- round(end_cleaning - start_cleaning, 4)
    
    # Modifying
    start_modifying <- Sys.time()
    df <- df %>%
        mutate(decade = floor(year(time) / 10) * 10)
    end_modifying <- Sys.time()
    times[["modifying"]] <- round(end_modifying - start_modifying, 4)
    
    # Writing clean data
    start_writing <- Sys.time()
    csv_data_clean <- paste("./output/", runtime, "-", version, sample, ".csv", sep = "")
    write_csv(df, csv_data_clean)
    end_writing <- Sys.time()
    times[["writing"]] <- round(end_writing - start_writing, 4)
    
    # Summarizing
    start_summarizing <- Sys.time()
    df <- df %>%
        group_by(station, station_name, decade) %>%
        summarise(mean_tas = mean(tas, na.rm = TRUE))
    end_summarizing <- Sys.time()
    times[["summarizing"]] <- round(end_summarizing - start_summarizing, 4)
    
    end <- Sys.time()
    times[["totalDuration"]] <- round(end - start, 4)
    
    print(paste("Total duration", times[["totalDuration"]]))
    
    results <- append(results, list(times))

    # Writing the final data to ensure it works as expected
    csv_data_summarized <- paste("./output/", runtime, "-", version, sample, "-summarized.csv", sep = "")
    write_csv(df, csv_data_summarized)

    }

    results_df <- bind_rows(results)

  results_csv <- paste("./results/", runtime, "-", version, sample, ".csv", sep = "")
  write_csv(results_df, results_csv)
}