'use strict';

//Задание-7

// null == o ; Будет false, так как null равен только сам себе, и ничему другому


// Задание-8 

function power(val, pow) {
    if (pow == 1) {
        return val;
    } else {
        return val * power(val, pow - 1);
    }
  }

alert( power(2, 3) );
