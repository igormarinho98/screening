var mongoose = require('mongoose');

mongoose.connect('mongodb://igor.mongodb:123456@localhost/screening', { useNewUrlParser: true, useUnifiedTopology: true });

var db = mongoose.connection;

db.once('open', function(){
    console.log('Mongo is UP!');
});

db.on('error', function(){
    console.log('OOPS! Something is Wrong?!');
});

return db;