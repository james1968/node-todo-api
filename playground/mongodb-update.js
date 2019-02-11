/*jshint esversion: 6*/
// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
      return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // db.collection('Todos').findOneAndUpdate({
    //   _id: new ObjectID('5c619c34c1f8d06e99209e10')
    // }, {
    //   $set: {
    //     completed: false
    //   }
    // }, {
    //     returnOriginal: false
    //   }).then((result) => {
    //     console.log(result);
    //   });

    db.collection('Users').findOneAndUpdate({
      _id: new ObjectID('5c5d69cf495d270c799d1b6c')
    },
    { $set: {name: 'James'},
      $inc: {age: +1} },
    { returnOriginal: false}).then((result) => {
        console.log(result);
      });



    // client.close();
});
