const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id ='58bb780671e6564688fa75311';

// if (!ObjectID.isValid(id)) {
//     console.log('The ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('find', todos)
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//    console.log('findOne', todo);
// });

// Todo.findById(id).then((todo) => {
//     if(!todo) {
//         return console.log('id not found');
//     }
//     console.log('Todo by id', todo);
// }).catch((e) => console.log(e)); 

var id = '58bb249da5c7f85e81f705b1';

if (!ObjectID.isValid(id)) {
    console.log('The ID not valid');
} else {

    User.findById(id).then((user)=> {
         if(!user) {
             return console.log('user not found');
        }
        console.log('user found', user);
    }).catch((e) => console.log('errors', e));
        
}

// User.findById 

// works but no User

// User found


// print errors