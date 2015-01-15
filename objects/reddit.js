var redditor = function(username){
    //fields
    var username = username;
    var hasGold = false;
    this.ownsFedora = true;

    //Accessor
    this.getUsername = function(){
        return username;
    };

    this.setHasGold = function(value){
        hasGold = value;
    };

    this.getHasGold = function (){
      return hasGold;
    };

};





var redditor1 = new redditor('neckbeard');
var redditor2 = new redditor('unidan');
console.log(redditor1.getUsername());
console.log(redditor1.getHasGold());
redditor1.setHasGold(true);
console.log(redditor1.getHasGold());
//can access members in different ways:
console.log(redditor1.ownsFedora); //normal public member access
console.log(redditor1['ownsFedora']); //Accessing as an associative array - like a dictionary.
//The associative array even works with methods:
redditor1['setHasGold'](false);
console.log(redditor1.getHasGold());

//This breaks object encapsulation as can add stuff to the object from outside
redditor1['chortle']= function() {console.log('kek kek kek');};
redditor1.chortle();
//redditor2.chortle(); //The second instance of a redditor is unaffected, uncommenting this will fail.

//This has a big downside- can remove method from outside of the class: uncomment the following to see:
/*delete redditor1['getHasGold'];
console.log(redditor1.getHasGold());*/

