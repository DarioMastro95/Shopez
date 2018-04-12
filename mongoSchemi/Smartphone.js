var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://Mastronz:delphi1824@clustershopez-shard-00-00-xht2w.mongodb.net:27017,clustershopez-shard-00-01-xht2w.mongodb.net:27017,clustershopez-shard-00-02-xht2w.mongodb.net:27017/shopez?ssl=true&replicaSet=ClusterShopez-shard-0&authSource=admin');

var smartphoneSchema = new mongoose.Schema({
  titolo:{type:String},
  recensione:{type:String},
  immagine:{type:String},
  link:{type:String},
  batteria:{type:String},
  fotocamera:{type:String},
  display:{type:String},
  memoria:{type:String},
  processore:{type:String},
  ram:{type:String},
  rete:{type:String},
  so:{type:String},
  pro:[String],
  contro:[String],
  position:{type:Number},
  fascia:{type:String}
});

var Smartphone = mongoose.model('smartphone',smartphoneSchema);
module.exports= Smartphone;
