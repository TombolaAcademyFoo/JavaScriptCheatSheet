var i  = 1 + 2; //All the other arithmetic operator
var j = i * 4;


//Modulus % - calculates the remainder on a division
var remainder = 22 % 7;
console.log('22 % 7' + remainder);
var foo = 3 % 2;
var bar = 2 % 2;

//******************Increment operators
var a = 2;
var b = 2;

//postfix = add the number, but return the *original number*.
console.log('a= ' + a++);
console.log('a= ' + a);

//prefix = add the number and return the *result*
console.log('b= ' + ++b);
console.log('b= ' + b);

var c
//Also have decrement operators - the order is the same as increment, just subtract one
c--;
--c;


//****************** update operators

var d = 42;
d += 3; //equivalent to d = d + 3
d -= 2; //equivalent to d = d - 3
d /= 2; //equivalent to d = d / 2
d *= 2; //equivalent to d = d * 2
d %= 3; //equivalent to d = d % 3


var myString = '2';
console.log(myString + 2); //string + number = string
console.log(2 + myString); //string + number = string
myString += 'noinch';
console.log(myString);
myString *= 3;
console.log(myString);

//For comparison operators see comparison-operators.js