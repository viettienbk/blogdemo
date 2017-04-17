'use strict'

var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var schema = mongoose.Schema;
var userSchema = new schema({
  local:{
    username: String,
    password: String,
    name: String,
    create_at: Date,
    update_at: Date
  }
});

userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

var userMeta = mongoose.model('UserMeta', userSchema);

module.exports = userMeta;
