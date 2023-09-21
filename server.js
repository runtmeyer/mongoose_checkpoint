const express = require('express');
const mongoose = require('mongoose');
const Person = require('./personModel.js');
const Con = require('./DB.js')
require('dotenv').config();

Con()

const newPerson = new Person({
  name: 'John',
  age: 30,
  favoriteFoods: ['Pizza', 'Burger'],
});

newPerson.save(); 

const app = express();
const PORT = 5000

app.get('/', (req, res) => {
res.send('Welcome to Person');
})

 

  app.listen(PORT)