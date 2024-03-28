source("./functions/r_tidyverse.R")

print("banchmark-r-tidyverse")

print("ahccd-sample.csv")
benchmark("ahccd-sample.csv", 10, "tidyverse (2024-03-28)", "R@4.3.3")

print("ahccd.csv")
benchmark("ahccd.csv", 10, "tidyverse (2024-03-28)",  "R@4.3.3")