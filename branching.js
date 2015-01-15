var foo = function(){
    return true;
}

//A conditional is something that results in a true or false - could be comparison, result function, even boolean.
//if(/*conditional*/){
//    //code that gets executed if the conditional is true
//}


if(true){
    //always called
}

if(false) {
    //never called
}

if(2>1){
    //always called
}

if(foo()){
    //this depends on what function foo returns
}

if(foo() || 2 >1){
    //always executes
}

if( 2 < 1 && foo()){
    //Foo doesn't get enetered as first condition fails.
}

var bar;
if(bar !== undefined && bar.hello){
    console.log(bar);
}

bar = {hello: true};
if(bar !== undefined && bar.hello){
    console.log(bar);
}

//if...else
if(true){

}
else{

}

//if else-if else  - can have as many else if as needed, else may or may not be present.
if(true){

}
else if(false){

}
else if(true){

}
else{

}


// An operator to replace if else... use sparingly...
var i;
var j;
var k;

if(i===j){
    k='value 1'
}
else{
    k='value 2';
}

//the above can be replaced with the ternary operator
k = i === j ? 'value 1' : 'value 2'; //Only use if it is easier to read.