'use strict';

const products1 = [{
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];

let result = products1.filter(function(value) {
    if (value.photos && value.photos != "" ){
        return value;
    }  
}); 


products1.sort(function (a, b) {
    if (a.price > b.price) {
      return 1;
    }
    if (a.price < b.price) {
      return -1;
    }
    // a должно быть равным b
    return 0;
  });

  console.log(products1);
  console.log(result);