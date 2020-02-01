const mongoose = require('mongoose');

const MONGODB_URL = 'mongodb://localhost:27017/costco';

module.exports = () => mongoose.connect(MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true
});


var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
  console.log('connected to Database')
})


module.exports = MONGODB_URL;
module.exports = db;