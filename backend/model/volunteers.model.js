const mongoose = require('mongoose');
const schema = mongoose.Schema;

let volunteers = new schema({

    id: {
        type:Number,
    },
    title: {
        type:String,
        default: 'Error  - title1'
    },
    image: {
        type:String,
        default: 'Error  - content1'
    },
    content: {
        type:String,
        default: 'Error  - title2'
    },
    extra: {
        type:String,
        default: 'Error  - content2'
    }

});


module.exports = mongoose.model('volunteers', volunteers, 'volunteers')