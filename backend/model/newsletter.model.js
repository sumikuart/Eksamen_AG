const mongoose = require('mongoose');
const schema = mongoose.Schema;

let newsLetter = new schema({

    id: {
        type:Number,
    },
    email: {
        type:String,
        default: 'Error  - title1'
    },
    name: {
        type:String,
        default: 'Error  - content1'
    }

});


module.exports = mongoose.model('newsLetter', newsLetter, 'newsLetter')