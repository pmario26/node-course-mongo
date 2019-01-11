// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log('Unable to connect');

    }
    console.log('Connected');
    db.collection('Todos').insertOne({
        text:'something to do',
        completed: false
    },(err,result)=> {
        if(err){
            return console.log('Unable to insert');
        }
        console.log(JSON.stringify(result.ops,undefined,2));
    })
    db.close();
});