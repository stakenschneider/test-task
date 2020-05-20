const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GiraffeSchema = new Schema({

});

const Giraffe = mongoose.model('giraffe', GiraffeSchema);

module.exports = {
    Giraffe
};