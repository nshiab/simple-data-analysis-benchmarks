import sys
sys.path.append("./functions")
from python_pandas import benchmark

print("benchmark-python-pandas")

print("ahccd-sample.csv")
benchmark("ahccd-sample.csv", 10, "pandas@2.3.2", "python@3.13.7")

print("ahccd.csv")
benchmark("ahccd.csv", 10, "pandas@2.3.2", "python@3.13.7")