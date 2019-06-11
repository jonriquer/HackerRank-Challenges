n = 20
s = 'aba';
// abaabaabaa
// Output 7 



function repeatedString(s, n) {
    var initialCount = 0;
    var afterCount = 0;

    var q = Math.floor(n / s.length); // 3

    var r = n % s.length; // 

    if (q != 0) {
        for (var i = 0; i < s.length; i++) {
            if (s[i] == 'a') {
                initialCount++;
            }
        }
    }

    for (var j = 0; j < r; j++){
        if (s[j] == 'a') {
            afterCount++;
        }
    }

    return(initialCount * q + afterCount);

}

repeatedString('aba', 15)