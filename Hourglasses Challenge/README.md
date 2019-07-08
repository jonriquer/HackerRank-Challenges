Hourglasses Challenge 

In this challenge you recieve a 2d array that is 6x6. 

1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0 
0 0 0 0 0 0 
0 0 0 0 0 0 
0 0 0 0 0 0

We define an hourglass in the 2d array to be a subset of values with indices fallling in this pattern in the arrays graphical representation. 

a b c 
  d  
e f g 

There are 16 hourglasses in the array, and an hourglass sum is the sum of an hourglass' values. Calculate the hourlass sum for every hourglass in the array, then print the maximum hourglass sum. 

For example, given the 2d array: 

-9 -9 -9  1  1  1 
 0 -9  0  4  3  2
-9 -9 -9  1  2  3
 0  0  8  6  6  0
 0  0  0 -2  0  0
 0  0  1  2  4  0 

 We calculate the following 16 hourglass values: 

 -63, -34, -9, 12, 
 -10, 0, 28, 23, 
 -27, -11, -2, 10,
 9, 17, 25, 18 

 Our highest value is 28 from the hourglass: 

 0 4 3 
   1  
 8 6 6 

Function description: 

Your function should return an interger, the maximum hourglass sum in the array. 

The function has the following parameters: 

arr: an array of intergers 

Input Format: 

Each of the 6 lines of inputs arr[i] contains 6 spaced-seperated interges arr[i][j].

Constraints: 

-9 <= arr[i][j] <= 9
0 <= i, j <= 5 

Output Format: 

Print the larget maximum hourlgass sum found in arr 

Sample Input: 

1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0 
0 0 2 4 4 0 
0 0 0 2 0 0 
0 0 1 2 4 0 

Sample Output: 

19 

Explanation: 

arr contains the following hourglasses: 

1 1 1	1 1 0	1 0 0	0 0 0  
  1 	  0 	  0		  0
1 1 1	1 1 0 	1 0 0	0 0 0

0 1 0	1 0 0	0 0 0	0 0 0
  1		  1 	  0		  0 
0 0 2	0 2 4	2 4 4	4 4 0

1 1 1	1 1 0	1 0 0	0 0 0
  0 	  2		  4		  4
0 0 0   0 0 2	1 2 4	2 0 0 

0 0 2	0 2 4	2 4 4	4 4 0
  0 	  0		  2		  0
0 0 1	0 1 2 	1 2 4	2 4 0

The hourglass with the maximum sum (19) is: 

2 4 4
  2
1 2 4