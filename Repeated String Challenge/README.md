Repeated Strings Challenge 

In this challenge you recieve a string with potentially an infinite number of letters. 
You also recieve a variable that with an interger that represents the number of times that string is repeated.
The task is return how many times the letter a occurs in the string. 

Official Instructions: 

Lilah has a string, s , of lowercase English letters that she repeated infinitely many times.
Given an interger, n, find and print the number of letter a's in the first n letters of Lilah's infinite string. 
For example, if the string s = 'abcac' and n = 10, the substring we consider is abcacabcac, the first 10 characters of her infinite string. There are 4 occurrences of a in the substring. 

Function Description

Complete the repeatedString function in the editor below. It should return an integer representing the number of occurrences of a in the prefix of length n in the infinitely repeating string.
repeatedString has the following parameter(s):

s: a string to repeat

n: the number of characters to consider 

Input Format

The first line contains a single string, s. 
The second line contains an integer, n.

Constraints

    1 <= s <= 100
    1 <= n <= 10e12
    For 25% of the test cases, n <= 10e6
    
Output Format 

Print a single integer denoting the number of letter a's in the first n letters of the infinite string created by repeating s infinitely many times.

Sample Input 0 

    aba
    10
    
Sample Output 0 

    7
    
Sample Input 1 

    a 
    1000000000000
    
Sample Output 1 

    1000000000000

Explination 1 

    Because all of the first n = 1000000000000 letter of the infinite string are a, we print 1000000000000 on a new line. 
