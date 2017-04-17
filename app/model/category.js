'use strict'

var mongoose = require('mongoose');

var schema = mongoose.Schema;
var categorySchema= new schema({
  name: String,
  created_at: Date,
  updated_at: Date
});

var categoryMeta = mongoose.model('CategoryMeta',categorySchema);

module.exports = categoryMeta;
