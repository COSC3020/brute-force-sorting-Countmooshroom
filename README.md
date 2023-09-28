[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=11730521&assignment_repo_type=AssignmentRepo)
# Brute-Force Sorting

We talked about the complexity of the sorting problem, and used an argument over
all permutations of a list to be sorted to determine its complexity. Implement
a function to sort a list by systematically trying all permutations of the input
list, using the template in `code.js`. Test your new function; I've provided
some basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

The return value should be the number of permutations that were tried until the
sorted list was "discovered".

## Runtime Analysis

What is the runtime complexity of the algorithm that you implemented? What does
a best case input for your implementation look like, what does a worst case
input look like? How would this complexity change if you generated permutations
randomly without memory instead of systematically trying them?

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

## Answer

With the way I implemented the program, it first creates a list of every permutation.  Since there are $n!$ permutations of a given list of length $n$, the time complexity for this part is always $n!$.  After that, it checks through each item to see if it is sorted and stops when it finds the sorted list.  On average, this part would have a time complexity of $n/2$.  Therefore, the average case time complexity of this algorithm is $\Theta(n! + n)$.

In the best case, it would find the sorted list on the first try, so the time complexity would be $\Theta(n!)$.  (However, with an empty set, the time complexity is $\Theta(1)$).  In the worst case, it would take n runs to find the sorted list, so the time complexity is $\Theta(n! + n)$

If you generated permutations randomly instead of systematically, you have a $1/n!$ chance of randomly generating the correct list.  On average, it would take n! generations to find the correct list.  Generating each list would have a time complexity of n, since it is directly related to the length of the list.  Therefore, the average time complexity is $\Theta(n*n!)$.  (Information from https://stackoverflow.com/questions/19879556/what-is-the-average-time-complexity-of-bogosort)
