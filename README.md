# Incorrect useEffect Return Value in React
This example demonstrates a common error in React's `useEffect` hook: returning a value that is not a cleanup function.  The `useEffect` hook's return value should be a function that performs cleanup actions (e.g., canceling subscriptions, clearing timers) when the component unmounts or when dependencies change.  Returning a non-function value is likely to cause unexpected behavior or silent errors.

## How to Reproduce
1. Run the `bug.js` code.
2. Observe the behavior; you might see unexpected results, warnings, or errors in the console.  The issue is subtle and might not always manifest visibly. 

## Solution
The `bugSolution.js` file provides the correct implementation of the `useEffect` hook. It demonstrates how to return a function from the effect that cleans up previously initiated operations.  This ensures proper resource management and prevents potential issues.