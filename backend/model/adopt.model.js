const mongoose = require('mongoose');
const schema = mongoose.Schema;

let adoptsections = new schema({

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

});


module.exports = mongoose.model('adoptsections', adoptsections, 'adoptsections')