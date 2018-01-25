(function() {
    'use strict';

    var T = ['A', 'B', 'A', 'C', 'D', 'B', 'A'];

    var result = T.reduce(function(a, b) { // `a` - previous state of object, `b` - value for each iteration
        a.hasOwnProperty(b) // if object `a` already has `b` property (the value of `b` - is a letter)
            ? a[b]++ // up the value of letter quantity to one more
            : a[b] = 1; // set the letter quantity value as 1

        return a; // returns the changed state of object to `result` variable
    }, {}); // `{}` - start value for future changes

    console.log(result); // { A: 3, B: 2, C: 1, D: 1} - the summary result
})();
