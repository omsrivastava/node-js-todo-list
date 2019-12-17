var data = [
  { item: 'Get milk' },
  { item: 'Make coffee' },
  { item: 'Do some coding' },
];


module.exports = function(app) {

  app.get('/todo', function(req, res) {
    res.render('todo', { todos: data });
  });

  app.post('/todo', function(req, res) {
    
  });

  app.delete('/todo', function(req, res) {
    
  });
};