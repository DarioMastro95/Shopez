var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/shopezdb');

var userSchema = new mongoose.Schema({
  username:{type:String},
  password:{type:String},
});

var User = mongoose.model('user',userSchema);
module.exports= User;
