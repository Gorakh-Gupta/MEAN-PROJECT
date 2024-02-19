const mongoose = require('mongoose');

//create a Schema
const postSchema = mongoose.Schema({
 title: { type:String, required:true },
content:{type:String, required:true}
}); 

//create a model using the Schema
module.exports  = mongoose.model('Post', postSchema);