var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://Mastronz:delphi1824@clustershopez-shard-00-00-xht2w.mongodb.net:27017,clustershopez-shard-00-01-xht2w.mongodb.net:27017,clustershopez-shard-00-02-xht2w.mongodb.net:27017/shopez?ssl=true&replicaSet=ClusterShopez-shard-0&authSource=admin');
var guidaTechSchema = new mongoose.Schema({
  //anteprimaGuida
  anteprima:{
    titolo:{type:String},
    immagine:{type:String},
    anteprima:{type:String},
    data:{type:String},
    categoria:{type:String},
    link:{type:String}
  },
  //guida
  guida:{
    titolo:{type:String},
    introduzione:{type:String},
    prodotti:[{
      posizione:{type:Number},
      nome:{type:String},
      immagine:{type:String},
      descrizione:{type:String},
      link:{type:String},
      pro:[String],
      contro:[String]
    }]
  }
});

var GuidaTech = mongoose.model('guidaTech',guidaTechSchema);
module.exports= GuidaTech;
