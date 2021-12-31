const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/blogmanagerDB',{useNewUrlParser:true,useUnifiedTopology:true},
    err => {
        if (!err)
            console.log('Mongodb connection succeeded.')
        else
            console.log('Error not connecting MongoDB : ' + JSON.stringify(err, undefined, 2))
    })