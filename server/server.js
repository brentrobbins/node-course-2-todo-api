//Library Imports
var express = require('express');
var bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

//Local Imports
var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
const port = process.env.PORT || 3000;

// Configure routes
app.use(bodyParser.json());

//create new todos
app.post('/todos', (req, res) => {
    //console.log(reqest.body);
    var todo = new Todo({
        text: req.body.text
    });
    todo.save().then((doc)=> {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos});
    }, (e) => {
        res.status(400).send(e);
    });
});

// GET /todos/12345
app.get('/todos/:id', (req, res) => {
    var id = req.params.id;

    if (!ObjectID.isValid(id)) {
        // Valid id using isn't Valid
        return res.status(400).send();
    }
    User.findById(id).then((todo)=> {
        if(!todo) {
            res.status(404).send();
        }
        res.send({todo});
        //console.log('todo found', todo);
    }).catch((e) => {
        res.status(400).send();
    });            
});

app.listen(port, () => {
    console.log(`Started on ${port}`);
});

module.exports = {app};
