const mongoose = require('../db/conn')
const {Schema} = mongoose

const Pet = mongoose.model(
    'Pet',
    new Schema(
        {
            name:{
                type: String,
                require: true
            },
            color:{
                type: String,
                require: true
            },
            image:{
                type: Array,
                require: true
            },
            available:{
                type: Boolean,
                require: true
            },
            user:{
                type: Object,
                adoppter: Object
            },
        },
        {
            timestamp: true
        }
    )
)

module.exports = Pet