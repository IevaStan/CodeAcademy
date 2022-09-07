// STRING SLICE
let str = "Apple, Banana, Kiwi";
console.log(str);
let part = str.slice(-12, -6);
console.log(part);

// STRING SUBSTRING
let part1 = str.substring(7, 13);
console.log(part1);

// REPLACING STRING
let text = "Please visit Microsoft!";
let newText = text.replace("Microsoft", "W3Schools");
console.log(newText);

// TOFIXED NUMBER
//  returns a string, with the number written with a specified number of decimals:

let x = 9.656;
x.toFixed(0);
x.toFixed(2);
x.toFixed(4);
x.toFixed(6);

// TOPRECISION
// returns a string, with a number written with a specified length:

let y = 9.656;
y.toPrecision();
y.toPrecision(2);
y.toPrecision(4);
y.toPrecision(6);

// VALUEOF
// returns a number as a number

let z = 123;
console.log(z);
z.valueOf();
(123).valueOf();
(100 + 23).valueOf();
console.log(z);

// SORT
const points = [40, 100, 1, 5, 25, 10];
points.sort(function (a, b) {
  return a - b;
});
