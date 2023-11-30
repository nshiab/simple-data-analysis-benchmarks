import sys
sys.path.append("./functions")
from python_pandas import benchmark

print("benchmark-python-pandas")

print("ahccd-sample.csv")
benchmark("ahccd-sample.csv", 10, "pandas@2.1.3", "python@3.12.0")

print("ahccd.csv")
benchmark("ahccd.csv", 10, "pandas@2.1.3", "python@3.12.0")