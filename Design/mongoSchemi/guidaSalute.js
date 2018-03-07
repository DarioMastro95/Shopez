var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://Mastronz:delphi1824@clustershopez-shard-00-00-xht2w.mongodb.net:27017,clustershopez-shard-00-01-xht2w.mongodb.net:27017,clustershopez-shard-00-02-xht2w.mongodb.net:27017/shopez?ssl=true&replicaSet=ClusterShopez-shard-0&authSource=admin');

var guidaSaluteSchema = new mongoose.Schema({
  // preview
  anteprima:[String],
  //guida
  titolo:{type:String},
  prodotto1:[String],
  prodotto2:[String],
  prodotto3:[String],
  prodotto4:[String],
  prodotto5:[String],
  prodotto6:[String],
  prodotto7:[String],
  prodotto8:[String],
  prodotto9:[String],
  prodotto10:[String]
});

var GuidaSalute = mongoose.model('guidaSalute',guidaSaluteSchema);
module.exports= GuidaSalute;
