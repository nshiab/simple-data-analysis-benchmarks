source("./functions/r_tidyverse.R")

benchmark("ahccd-sample.csv", 10, "tidyverse@2.0.0", "R@4.3.2")

benchmark("ahccd.csv", 10, "tidyverse@2.0.0",  "R@4.3.2")