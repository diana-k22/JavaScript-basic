'use strict';



function mathOperation (arg1, arg2, operation) {
    switch (operation) {
        case "Сумма чисел":
            return arg1 + arg2 ;

        case "Вычитание чисел":
            return arg1 - arg2 ;

        case "Деление чисел":
            return arg1 / arg2 ;

        case "Умножение чисел":
            return arg1 * arg2 ;
    }
}