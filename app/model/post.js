'use strict'

var mongoose = require('mongoose');
var schema = mongoose.Schema;
var postSchema = new schema({
  title: String,
  category: schema.ObjectId,
  content: String,
  author: schema.ObjectId,
  image_path: String,
  created_at: Date,
  updated_at: Date,
  status: Number
});

var postMeta = mongoose.model('PostMeta',postSchema);

module.exports = postMeta;
