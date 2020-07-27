const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GiraffeSchema = new Schema({
    name: {
        type: String,
        default: "NoName"
    },
    weight: {
        type: Number,
        default: 1,
        minlength:0
    },
    height: {
        type: Number,
        default: 1,
        minlength:0
    },
    sex: {
        type: String,
        default: 'M',
        enum: ['W', 'M', 'м', 'ж', 'М', 'Ж', 'm', 'w']
    },
    color: {
        type: String,
        default: 'NoColor'
    },
    diet: {
        type: String,
        default: 'NoDiet'
    },
    temper: {
        type: String,
        default: 'NoTemper'
    },
    image: {
        type: String,
        default: 'NoImage'
    },
    aviary: {
        type: Number,
        default: '1'
    }
}, { versionKey: false });

const Giraffe = mongoose.model('giraffe', GiraffeSchema);

module.exports = Giraffe;