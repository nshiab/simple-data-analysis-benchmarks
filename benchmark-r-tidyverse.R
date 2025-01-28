source("./functions/r_tidyverse.R")

print("banchmark-r-tidyverse")

print("ahccd-sample.csv")
benchmark("ahccd-sample.csv", 10, "tidyverse (2025-01-28)", "R@4.4.2")

print("ahccd.csv")
benchmark("ahccd.csv", 10, "tidyverse (2025-01-28)",  "R@4.4.2")