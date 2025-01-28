import sys
sys.path.append("./functions")
from python_pandas import benchmark

print("benchmark-python-pandas")

print("ahccd-sample.csv")
benchmark("ahccd-sample.csv", 10, "pandas@2.2.3", "python@3.13.1")

print("ahccd.csv")
benchmark("ahccd.csv", 10, "pandas@2.2.3", "python@3.13.1")