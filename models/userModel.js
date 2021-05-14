const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
 

const Schema = mongoose.Schema;

const userSchema = new Schema({
  userEmail:{type: String, index: true, unique: true, required: true},
  userPassword: String,
  userConfirmPassword: String
  });
 
  userSchema.plugin(uniqueValidator);
  // userSchema.path('userEmail').validate(async (userEmail) => {
  //   const emailCount = await mongoose.models.userModel.countDocuments({ userEmail })
  //   return !emailCount
  // }, console.log("email already exist"))

const userModel = mongoose.model('test_users', userSchema);



module.exports = userModel
