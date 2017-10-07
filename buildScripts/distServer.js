import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

/* eslint-disable no-console */

const port = 3000;
const app = express();

app.use(compression());

app.use(express.static('dist'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get('/users', function(req, res) {
  // Hardcoded as an example
  res.json([
    {"id": 1, "firstName": "John", "lastName": "Doe", "email": "john@email.com"},
    {"id": 2, "firstName": "Bob", "lastName": "Smith", "email": "bob@mail.com"},
    {"id": 3, "firstName": "Tina", "lastName": "Lee", "email": "lee.tina@e-mail.com"}
  ]);
});

app.listen(port, function(err){
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});
