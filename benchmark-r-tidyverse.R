source("./functions/r_tidyverse.R")

print("benchmark-r-tidyverse")

print("ahccd-sample.csv")
benchmark("ahccd-sample.csv", 10, "tidyverse (2026-05-28)", "R@4.6.0")

print("ahccd.csv")
benchmark("ahccd.csv", 10, "tidyverse (2026-05-28)",  "R@4.6.0")