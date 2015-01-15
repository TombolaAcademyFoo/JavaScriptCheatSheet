//json format is light - originally intended for sending information across the network
//good for single instance lightweight objects.


//single instance
var myredditor = {
    username: 'moot',
    isNeckbeard: true,
    tipFedora : function (){ console.log('m-lady'); }
};

console.log(myredditor);
myredditor.tipFedora();

//using a factory
var redditorFactory = function(username){
    return  {
        username: username,
        isNeckbeard: true,
        tipFedora : function (){ console.log('m-lady'); }
    };
};


var redditor1 = redditorFactory('foo');
var redditor2 = redditorFactory('scunthorpe');