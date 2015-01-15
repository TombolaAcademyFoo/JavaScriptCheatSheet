var globallyScoped = 'global';

var foo = function(){
    var fooScoped= 'foo';
    console.log('Foo scope says ' + globallyScoped);
    console.log('Foo scope says ' + fooScoped);
};

console.log("Global Scope" + globallyScoped);
// console.log("Global Scope" + fooScoped); This won't run as there is no variable "fooScoped" in this scope.
foo();




var myValues = ['hello', 'sailor'];
for (var i = 0; i < myValues.length ; i++){
    var textToDisplay = myValues[i] + ' *****';//not used outside of this scope - declare here.
    console.log(textToDisplay);
}