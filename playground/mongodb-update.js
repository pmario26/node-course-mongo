const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log('Unable to connect');

    }
    console.log('Connected');
    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('5c38c9c5d381e4d051e55b97')
    },{
        $set:{
            completed:true
        }
    },{returnOriginal: false}).then((results)=>{
        console.log(results);
    });

})


