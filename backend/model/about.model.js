const mongoose = require('mongoose');
const schema = mongoose.Schema;

let about = new schema({

    id: {
        type:Number,
    },
    title_1: {
        type:String,
        default: 'Error  - title1'
    },
    content_1: {
        type:String,
        default: 'Error  - content1'
    },
    title_2: {
        type:String,
        default: 'Error  - title2'
    },
    content_2: {
        type:String,
        default: 'Error  - content2'
    },
    title_3: {
        type:String,
        default: 'Error  - title3'
    },
    content_3: {
        type:String,
        default: 'Error  - content3'
    }

});


module.exports = mongoose.model('about', about, 'about')