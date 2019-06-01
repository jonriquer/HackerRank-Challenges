Sock Merchant Challenge 

In this challenge you were given two inputs. n = total number of socks in array, and s = the individual sock's value. 
The socks individual values can range from 1-100. 
The task is to identify all the existing PAIRS of numbers within the array. 

Here are the official instructions: 

John works at a clothing store. He has a large pile of socks that he must pair by color for sale. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.
For example, there are  socks with colors . There is one pair of color  and one of color . There are three odd socks left, one of each color. The number of pairs is .

Function Description
        Complete the sockMerchant function in the editor below. It must return an integer representing the number of matching pairs of socks that are available.

sockMerchant has the following parameter(s):
        n: the number of socks in the pile
        ar: the colors of each sock

Input Format
        The first line contains an integer , the number of socks represented in . 
        The second line contains  space-separated integers describing the colors  of the socks in the pile.

Constraints
        1 <= n <= 100
        1 <= ar[i] <= 100 where 0 <= i <= n 

Output Format
        Return the total number of matching pairs of socks that John can sell.

Sample Input
    n = 9
    s = 10 20 20 10 10 30 50 10 20
    
Sample Output
    3
    
// John can match three pairs of socks.
