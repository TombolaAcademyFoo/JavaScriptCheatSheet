// ******************/basic function - first syntax
function foo(){
    console.log('foo');
}

var bar = function(){
  console.log('bar');
};

console.log(foo());
bar();




// ******************return values
function baz(){
    return 'baz return value';
};

var quux = function (){
    return 'quux return value';
};
console.log(baz());
console.log(quux());


//The return type can be used as if it were declared in the calling code
var getArray = function() {
    return ['hello', 'sailor'];
};

console.log(getArray());
console.log(getArray().length);

//getArray Creates a new array each time
getArray().push('foo');
console.log(getArray().length);


var myArray = getArray();
myArray.push('foo');
console.log(myArray);

//Don't need to deal with the return type at all;
getArray();

// ****************** Parameters.
var sayHello = function(name){
    console.log('hello ' + name);
};

sayHello('Shaggy out of Scooby Doo');

//The number of params passed in doesn't have to equal the number defined in the function signature
sayHello('Shaggy out of Scooby Doo', 'ignored', 42, true);
sayHello(); //If you don't pass in enough variables, they are filled in with "undefined"
sayHello(42); //The compiler doesn't care what is passed in.