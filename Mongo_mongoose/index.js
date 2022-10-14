const mongoose = require('mongoose');

mongoose.Promise = global.Promise

mongoose.connect('mongodb://localhost/mongo')
  .then(() => console.log('MongoDB has started ...'))
  .catch(e => console.log(e))