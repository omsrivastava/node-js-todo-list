var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect('mongodb+srv://node-todo-list_1:node-todo-list_1@cluster0-zexys.mongodb.net/nodejs_todo_list_sample?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var todoSchema = new mongoose.Schema({
  item: String,
});

var Todo = mongoose.model('Todo', todoSchema);

var urlEncodedParser = bodyParser.urlencoded({ extended: false });


module.exports = function(app) {

  app.get('/', function(req, res) {
    res.redirect('/todo');
  });

  app.get('/todo', async function(req, res) {
    await Todo.find({}, function(err, data) {
      if (err) throw err;
      res.render('todo', { todos: data });
    });
  });

  app.post('/todo', urlEncodedParser, function(req, res) {
    var newTodo = Todo(req.body).save(function(err, data) {
      if (err) throw err;
      res.json(data);
    });
  });

  app.delete('/todo/:item', function(req, res) {
    var item = req.params.item.replace(/\-/g, ' ');

    Todo.deleteOne({ item }, function(err, data) {
      if (err) throw err;
      res.json(data);
    });
  });
};