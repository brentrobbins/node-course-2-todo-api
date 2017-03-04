var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

// Collection Model
var ToDo = mongoose.model('Todo', {
    text: {
        type: String
    },
    completed: {
        type: Boolean
    },
    completedAt: {
        type: Number
    }
});

// Create a Todo
var newTodo = new ToDo({
    text: 'Cook Lunch',
    completed: true,
    completedAt: Date.now()
});

newTodo.save().then((doc)=> {
    console.log(`Saved todo ${doc}`);
}, (e) => {
    console.log('Unable to save todo.');
});
