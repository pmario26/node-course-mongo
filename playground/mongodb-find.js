// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log('Unable to connect');

    }
    console.log('Connected');
    // db.collection('Todos').find({completed:false}).toArray().then((docs)=>{
    //     console.log(JSON.stringify(docs,undefined,2));
    // },(err)=>{
    //     console.log('Unable to fetch ',err);
    // });

    // db.collection('Todos').find({completed:false}).count().then((count) => {
    //     console.log(`Todos count ${count}`);},(err) =>{
    //         console.log('Unable to fetch Todos', err);})
    
    db.collection('Todos').find({text:'walk'}).toArray().then((docs) => {
        console.log(JSON.stringify(docs,undefined,2));},(err) =>{
            console.log('Unable to fetch Todos', err);})
        
        
    

    db.close();
});