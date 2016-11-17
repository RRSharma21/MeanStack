var mongoose = require('mongoose');

mongoose.connect('mongodb://Rishabh:Shivji2016.@ds153637.mlab.com:53637/webdevli', function() {
  console.log('mongodb connected');
});

module.exports = mongoose;
