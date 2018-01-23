var mongoose=require('mongoose');

module.exports=mongoose.model('users',{
    username: String,
    latitude: Number,
    longitude: Number,
    address: String,
});
