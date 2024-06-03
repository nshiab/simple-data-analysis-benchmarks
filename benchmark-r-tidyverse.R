source("./functions/r_tidyverse.R")

print("banchmark-r-tidyverse")

print("ahccd-sample.csv")
benchmark("ahccd-sample.csv", 10, "tidyverse (2024-06-03)", "R@4.4.0")

print("ahccd.csv")
benchmark("ahccd.csv", 10, "tidyverse (2024-06-03)",  "R@4.4.0")