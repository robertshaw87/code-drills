Trickier efficiencies
# Efficiency 2 - Coefficients and Lower Order Terms

### When we talk about Big O notation, we tend to only look at the most significant portion of the growth of code. If there's a nested iteration followed by another single iteration outside of that nexted iteration, the time complexity is O(n^2), not O(n^2 + n) because we drop the lower order terms. We only want to know the highest order of the time complexity

* Pay attention to the nested loops and how they interact with other loops!
