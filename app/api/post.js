'use strict'

var postMeta = require('../model/post');
var config = require('../../config/configuration');

module.exports = function(app){
  //  get all post
  app.get('/post',function(req,res){
    postMeta.find(function(err,data){
      if(err){
        res.status(500).send({error: 'get error'});
      } else {
        res.json({data: data});
      }
    });
  });

  //  insert post
  /*
  title,
  category,
  content,
  author,
  image_path
  */
  app.post('/post',function(req,res){
    var title = req.body.title;
    var category = req.body.category;
    var content = req.body.content;
    var author = req.body.author;
    var image_path = req.body.image_path;
    if(title === undefined){
      res.status(500).send({error: 'Missing title'});
    } else if(category === undefined){
      res.status(500).send({error: 'Missing category'});
    } else if(content === undefined){
      res.status(500).send({error: 'Missing content'});
    } else if(author === undefined){
      res.status(500).send({error: 'Missing author'});
    } else if(image_path === undefined){
      res.status(500).send({error: 'Missing image path'});
    } else {
      var post={
        title: title,
        category: category,
        content: content,
        author: author,
        image_path: image_path,
        created_at: new Date(),
        updated_at: new Date(),
        status: 0
      }

      postMeta.create(post, function(err, data){
        if(err){
          res.status(500).send({error: 'Insert error'});
        } else {
          res.json({message: 'Insert success', data: data});
        }
      });
    }
  });

  //  delete post
  app.delete('/post/:id', function(req, res){
    var id = req.params.id;
    postMeta.findByIdAndRemove(id, function(err,data){
      if(err){
        res.status(500).send({error: 'Delete error'});
      } else if(data === null){
        res.status(500).send({error: 'Post not exists'});
      } else {
        res.json({message: 'Delete success'});
      }
    });
  });

  //  update post
  app.put('/post/:id',function(req,res){
    var id = req.params.id;
    var title = req.body.title;
    var category = req.body.category;
    var content = req.body.content;
    var author = req.body.author;
    var image_path = req.body.image_path;
    if(title === undefined){
      res.status(500).send({error: 'Missing title'});
    } else if(category === undefined){
      res.status(500).send({error: 'Missing category'});
    } else if(content === undefined){
      res.status(500).send({error: 'Missing content'});
    } else if(author === undefined){
      res.status(500).send({error: 'Missing author'});
    } else if(image_path === undefined){
      res.status(500).send({error: 'Missing image path'});
    } else {
      var post={
        title: title,
        category: category,
        content: content,
        author: author,
        image_path: image_path,
        created_at: new Date(),
        updated_at: new Date(),
        status: 0
      }

      postMeta.findByIdAndUpdate(id,post, function(err, data){
        if(err){
          console.log(err);
          res.status(500).send({error: 'Update error'});
        } else if(data === null){
          res.status(500).send({error: 'Post not exists'});
        }else {
          res.json({message: 'Update success'});
        }
      });
    }
  });

  //  paging
  //  post/0
  app.get('/post/:page',function(req,res){
    var page=parseInt(req.params.page);
    var count=config.PAGE_LIMIT;
    if(count === undefined){
      res.status(500).send({error: 'Error'});
    } else {
      postMeta.find({}).sort({created_at:-1}).skip(count*page).limit(count).exec(function(err,data){
        if(err){
          res.status(500).send({error:'error'});
        } else if(data === null){
          res.status(500).send({error:'No post'});
        } else {
          res.json({data:data});
        }
      });
    }
  });

  //  get by category
  app.get('/post/category/:id',function(req,res){
    var id = req.params.id;
    postMeta.find({category: id}).sort({created_at: -1}).exec(function(err,data){
      if(err){
        console.log(err);
        res.status(500).send({error: 'Error'});
      } else if(data === null){
        res.status(500).send({error: 'No post'});
      } else{
        res.json({data: data});
      }
    });
  });
}
