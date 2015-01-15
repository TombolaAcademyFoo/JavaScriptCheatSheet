//while loop:
//Don't necessarily know how many times you are going to go round in the first place.
//The rules for conditional are the same as if statements - just evaluates to bool
//while(/*conditional*/){
//    /*Expression to exeute while true*/
//    /*The while condition must end!!!*/
//}


//e.g. don't do this - does not end
/*
while(true){
    console.log('dank memes');
}*/


var conditional = true;
while (conditional){
    console.log('Shrek');
    conditional = false; // this will stop while loop at the next turn
    console.log('is love');
}

//can use a break statement to exit loop immediately
while (true){
    console.log('Shrek');
    break; // this will immediately
    console.log('is life'); //never executed.
}


// Do loops are the same as whiles, but the conditional is evaluated at the end.
// everything else is the same - breaks, conditionals, the need to exit.
do {
    console.log('this evaluates at least once')
}while(false);


//for loops -  better for when you know how many times you want to loop.
for(var i = 0; i < 10; i++){
    console.log(i);
}

////in general:
//for(/*statement that gets run before loop starts*/ ; /*conditional*/ ; /*statment that is run after condition*/){
//
//}

//THIS IS HACK CODE TO SHOW THE for(.....) STUFF ISN'T AS RIGID AS IT LOOKS - DON'T DO IN REAL CODE!!!
var j = 0;
for(console.log('pre-loop initialisation'); j < 9; console.log('interation ends:' + j)){
    j++;
    console.log(j);
}


var myArray = ['Shrek', 'is', 'love', 'Shrek', 'is', 'life'];
for(var k = 0; k < myArray.length; k++){
    console.log(myArray[k]);
}

//could write a while loop BUT less neat and increases scope of indexer variable
var l = 0;
while(l < myArray.length ){
    console.log(myArray[l]);
    l++;
}

//or worse:
var m =0;
while(true){

    console.log(myArray[m]);
    m++;
    if(m >= myArray.length){
        break;
    }

}

console.log('**********************************');
//For loops - watch out for:
//Off by one errors - missing first/last elements.
//Not ending the loop.
//the collection when using it as the indexer = see bellow:
for(var k = 0; k < myArray.length; k++){
    console.log(myArray);
    myArray.pop();
}

