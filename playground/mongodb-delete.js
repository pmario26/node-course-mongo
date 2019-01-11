const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log('Unable to connect');

    }
    console.log('Connected');
    db.collection('Todos').findOneAndDelete({completed:false}).then((result)=> {
        console.log(result);
    });

})


