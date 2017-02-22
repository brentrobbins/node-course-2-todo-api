/*
const MongoClient = require('mongodb').MongoClient;
is the same as this:
const {MongoClient} = require('mongodb');
*/
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

// object destructuring
// var user = {name: 'brent', age: 38 };
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     complete: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });
    // db.collection('Users').insertOne({
    //     name: 'Averie Robbins',
    //     age: 1,
    //     location: 'Windsor, Colorado'
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo', err);
    //     }
        //console.log(JSON.stringify(result.ops, undefined, 2));
        //console.log(result.ops[0]._id.getTimestamp());
    //});


    db.close();
});
