const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CommentSchema = new Schema({
    star: {
        type: Number,
        enum: [0, 1, 2, 3, 4, 5],
    },
    comment: {
        type: String,
        maxlength: 300
    },
    user: String,
    date: {
        type: Date,
        default: function () {
            const simdi = new Date();
            simdi.setHours(simdi.getHours() + 3);
            return simdi
        }
    },
})

module.exports = CommentSchema
