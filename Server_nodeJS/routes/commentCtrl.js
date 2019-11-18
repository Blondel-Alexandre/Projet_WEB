//Imports
var bcrypt  = require('bcrypt');
var jwt     = require('jsonwebtoken');
var models = require('../models');

//Routes
module.exports = {
    addComment: function(req, res){

        //parameters
        var date = req.body.date ;
        var author = req.body.author;
        var appreciation = req.body.appreciation;
        var like = req.body.like;
        var public = req.body.public;
        var ref = req.body.ref;
        var email = req.body.email;


        if (email == null || date == null || appreciation == null || like == null || public == null || ref == null ){
            return res.status(400).json({ 'error': 'missing parameters'})
        }

        models.users.findOne({
            attributes: ['email'],
            where: { email: email}
        })
            .then(function(userFound){
                if (userFound){

                    var newComment = models.tpcomments.create({
                        date:date,
                        author:author,
                        appreciation: appreciation,
                        like:like,
                        public:public,
                        ref:ref,
                        email:email
                    })
                        .then(function(newComment){

                            return res.status(201).json({
                                'commentId': newComment.id
                            })
                        })
                        .catch(function(err){
                            return res.status(500).json({ 'error': 'cannot add comment'});
                        })


                }else{
                    return res.status(409).json({'error': 'comment already exist'});
                }
            })
            .catch(function(err){
                return res.status(500).json({'error': 'unable to verify comment'});
            });



    },
    listComment: function (req, res) {
        var fields = req.query.fields;
        var limit = parseInt(req.query.limit);
        var offset = parseInt(req.query.offset);


        models.tpcomments.findAll({
            attributes: (fields !== '*' && fields != null) ? fields.split(',') : null,
            limit: (!isNaN(limit)) ? limit : null,
            offset : (!isNaN(offset)) ? offset : null,
        }).then(function(tpcomments){
            if(tpcomments){
                res.status(200).json(tpcomments);
            }
            else {
                res.status(404).json({"error": "no comment found"})
            }
        }).catch(function (err) {
            res.status(500).json({"error": "invalid fields"})
        })
    }

}
