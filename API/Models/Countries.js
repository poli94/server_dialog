var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Countries = new Schema({
name:{
 type:Object,
 required:false
},
short:{
 type:Object,
 required:false
},
country:{
 type:Object,
 required:false
},
address:{
 type:Object,
 required:false
},
});
module.exports = mongoose.model('Countries', Countries);