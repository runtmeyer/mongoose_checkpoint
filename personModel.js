const mongoose = require('mongoose');


const personSchema = mongoose.Schema({
    name: String,
    age: Number,
    favoriteFoods: Array
});

const personModel = mongoose.model("Person", personSchema);

module.exports = personModel;