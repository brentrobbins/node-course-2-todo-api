const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Remove all
// Todo.remove({}).then((result)=> {
//     console.log(result);
// });

//Todo.findOneAndRemove
Todo.findOneAndRemove('58d6b1c2cee4270d72336ea8').then((todo) => {
    console.log(todo);
});

//Todo.findByIdAndRemove
// 58d6b1c2cee4270d72336ea8

Todo.findByIdAndRemove('58d6b1c2cee4270d72336ea8').then((todo) => {
    console.log(todo);
});