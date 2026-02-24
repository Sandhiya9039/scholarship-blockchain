import sys

cgpa = float(sys.argv[1])
income = float(sys.argv[2])
amount = float(sys.argv[3])

# Simple eligibility scoring logic
score = (cgpa * 50) - (income / 1000)
print(round(score, 2))