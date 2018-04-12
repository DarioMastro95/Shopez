var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://Mastronz:delphi1824@clustershopez-shard-00-00-xht2w.mongodb.net:27017,clustershopez-shard-00-01-xht2w.mongodb.net:27017,clustershopez-shard-00-02-xht2w.mongodb.net:27017/shopez?ssl=true&replicaSet=ClusterShopez-shard-0&authSource=admin');

var pcSchema = new mongoose.Schema({
  titolo:{type:String},
  recensione:{type:String},
  immagine:{type:String},
  link:{type:String},
  processore:{type:String},
  sistemaoperativo:{type:String},
  schedavideo:{type:String},
  batteria:{type:String},
  webcam:{type:String},
  monitor:{type:String},
  ram:{type:String},
  memoria:{type:String},
  pro:[String],
  contro:[String],
  position:{type:Number},
  fascia:{type:String}
});

var Pc = mongoose.model('pc',pcSchema);
module.exports= Pc;
