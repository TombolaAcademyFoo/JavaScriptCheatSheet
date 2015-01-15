

//********* ! = not
console.log(!true);


//&& - and
console.log("&& truth table")
console.log(false && false);
console.log(false && true);
console.log(true && false);
console.log(true && true);

console.log("|| truth table")
console.log(false || false);
console.log(false || true);
console.log(true || false);
console.log(true || true);



cpnsole.log('Anything that results in an boolean as operand');
//Can use anthing that results in a bool as an operand:
var returnsTrue = function (){
    return true;
};

console.log( true && 1 < 2);
console.log( returnsTrue() && 1 < 2);



var i = 1;
var j = 2;
var foo = i > j || i === j; //Can be simplified below
var bar = i >= j;
var baz = !(i < j && i !== j); //Tied up in knots = foo, bar baz should always be the same.