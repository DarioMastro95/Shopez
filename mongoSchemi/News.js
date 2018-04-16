var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://Mastronz:delphi1824@clustershopez-shard-00-00-xht2w.mongodb.net:27017,clustershopez-shard-00-01-xht2w.mongodb.net:27017,clustershopez-shard-00-02-xht2w.mongodb.net:27017/shopez?ssl=true&replicaSet=ClusterShopez-shard-0&authSource=admin');

var newsSchema = new mongoose.Schema({
  titolo:{type:String},
  immagine:{type:String},
  data:{type:String},
  position:{type:Number},
  link:{type:String}
});

var News = mongoose.model('news',newsSchema);
module.exports= News;
