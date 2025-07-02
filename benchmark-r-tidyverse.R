source("./functions/r_tidyverse.R")

print("banchmark-r-tidyverse")

print("ahccd-sample.csv")
benchmark("ahccd-sample.csv", 10, "tidyverse (2025-07-02)", "R@4.5.1")

print("ahccd.csv")
benchmark("ahccd.csv", 10, "tidyverse (2025-07-02)",  "R@4.5.1")