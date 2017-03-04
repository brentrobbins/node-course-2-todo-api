const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');



    // db.collection('Users').deleteMany({name: 'Aubrie Robbins'}).then((result) => {
    //     console.log(result);
    // });

    //findOneAndDelete
    // db.collection('Users').findOneAndDelete({name: 'Averie Robbins'}).then((result) => {
    //     console.log(JSON.stringify(result, undefined, 2));
    // });


//https://docs.mongodb.com/v3.2/reference/method/db.collection.findOneAndUpdate/
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('58acf14f0034dff0417a3e65'),
    // }, {
    //     //https://docs.mongodb.com/manual/reference/operator/update/
    //     $set: {
    //         completed: true
    //     }
    // },  {
    //     returnOrigonal: false
    // }).then((result)=> {
    //     console.log(result);
    // });

//$inc : { "age" : 1 }
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('58bb1a06c2c9751983540dba'),
    }, {
        //https://docs.mongodb.com/manual/reference/operator/update/
        $set: { name: 'Aubrie Robbins' },
        $inc : { "age" : 1 }
        },  {
            returnOrigonal: false
        }).then((result)=> {
            console.log(result);
        });

    //db.close();
});
