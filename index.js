const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let users = [];
let nextId = 1;

//GET - return all users
app.get('/users', (req, res) => {
  res.json(users);
});

/* 
  POST - create a new user
  * `id` (number)
  * `name` (string)
  * `email` (string)
*/
app.post('/users', (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ message: 'Name and email are required.' });
  }

  const user = { id: nextId++, name, email };
  users.push(user);
  res.status(201).json(user);
});

/* 
  `GET /users/:id`: Retrieve a user by ID.
*/
app.get('/users/:id', (req, res) => {
  const user = users.find(user => user.id === Number(req.params.id));

  if (!user) {
    return res.status(404).json({ message: 'User not found.' });
  }

  res.json(user);
});

/*
  * `PUT /users/:id`: Update a user by ID.
*/
app.put('/users/:id', (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ message: 'Name and email are required.' });
  }
  const user = users.find(user => user.id === Number(req.params.id));

  if (!user) {
    return res.status(404).json({ message: 'User not found.' });
  }

  user.name = name;
  user.email = email;
  res.json(user);
});

/*
  * `DELETE /users/:id`: Delete a user by ID.
*/
app.delete('/users/:id', (req, res) => {
  console.log('id', req.params.id);
  const index = users.findIndex(user => user.id === Number(req.params.id - 1));
  if (!index) {
    return res.status(404).json({ message: 'User not found.' });
  }

  const userDeleted = users.splice(index, 1);
  res.json(userDeleted[0]);
});

app.listen(PORT, function(err){
  if (err) {
    console.log("Error in server setup")
  }
  console.log("Server listening on Port", PORT);
});