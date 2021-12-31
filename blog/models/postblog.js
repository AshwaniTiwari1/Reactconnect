const mongoose = require('mongoose')

var Postblog = mongoose.model('Postblog',
{
    title : {type:String},
    author : {type:String},
    content : {type:String},
},'blog')

module.exports = { Postblog}