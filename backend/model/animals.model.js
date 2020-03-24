const mongoose = require('mongoose');
const schema = mongoose.Schema;

let animals = new schema({

    id: {
        type:Number,
    },
    title: {
        type:String,
        default: 'Error  - title'
    },
    content: {
        type:String,
        default: 'Error  - content'
    },
    image: {
        type:String,
        default: 'Error  - image'
    },
    daysInCare: {
        type:Number,
        default: 0
    },
    age: {
        type:String,
        default: ""
    },
    sex: {
        type:String,
        default: ""
    },
    details: {
        type:String,
        default: ""
    }

});


module.exports = mongoose.model('animals', animals, 'animals')