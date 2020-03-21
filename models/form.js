var mongoose = require('mongoose');

var Form = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    date:{
        type: Date,
        required: true,
        default: Date.now

    },
    prognostic:{
        type: String,
        required: true
    },
    medicament:{
        type: String,
        required: true,
        default: 'none'
    },
    sickness:{
        type: String,
        enum: ['YES', 'NO'],
        required: true,
        default: 'YES'
    }

});

module.exports = mongoose.model('Form', Form);