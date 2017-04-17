'use strict'

var categoryMeta = require('../model/category');

module.exports = function(app){
  //  list all category
  app.get('/category', function(req, res){
    categoryMeta.find(function(err, data){
      if(err){
        res.status(500).render(err);
      } else{
        res.json(data);
      }
    });
  });

  //  Insert category
  /* param
    name: string
  */
  app.post('/category', function(req,res){

      if(req.body.name === undefined){
        res.status(500).send({error: 'Missing name'});
        return;
      }

      categoryMeta.count({name: req.body.name.trim()}, function(err, count){
        if(err){
          res.status(500).send({error: 'Insert error'});
        } else if(count >0){
          res.status(500).send({error: 'Category is exists'});
        } else {
          var category={
            name: req.body.name,
            created_at: new Date(),
            updated_at: new Date()
          }
          categoryMeta.create(category, function(err, data){
            if(err){
              res.status(500).render(err);
            } else {
              res.json({message: 'Insert success', data: data});
            }
          });
        }
      });
  });

  // delete category
  app.delete('/category/:id',function(req,res){
    var id=req.params.id;
      categoryMeta.findByIdAndRemove(id, function(err, data){
        if(err){
          res.status(500).send({error: 'Delete error'});
        } else if(data === null){
          res.json({error: 'Category not exists'});
        } else {
          res.json({message: 'Delete success'});
        }
      });
  });
}
