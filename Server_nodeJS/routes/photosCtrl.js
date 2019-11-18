//Imports
var bcrypt  = require('bcrypt');
var jwt     = require('jsonwebtoken');
var models = require('../models');

//Routes
module.exports = {
    addPhoto: function(req, res){

        //parameters
        var date = req.body.date ;
        var author = req.body.author;
        var picture = req.body.picture;
        var public = req.body.public;
        var like = req.body.like;
        var email = req.body.email;


        //verification of all parameters
        if (email == null || date == null || author == null || picture == null || public == null || likphote == null ){
            return res.status(400).json({ 'error': 'missing parameters'})
        }

        //find the email in database in table users
        models.users.findOne({
            attributes: ['email'],
            where: { email: email}
        })
        //add new photo in the database
            .then(function(userFound){
                if (!userFound){
                    var newPhoto = models.tpphotos.create({
                        date:date,
                        author:author,
                        picture:picture,
                        public:public,
                        like:like,
                        email:email,
                    })
                        .then(function(newPhoto){
                            return res.status(201).json({
                                'photoId': newPhoto.id
                            })
                        })
                        .catch(function(err){
                            return res.status(500).json({ 'error': 'cannot add photo'});
                        })


                }else{
                    return res.status(409).json({'error': 'photo already exist'});
                }
            })
            .catch(function(err){
                return res.status(500).json({'error': 'unable to verify photo'});
            });



    },
    listPhoto : function (req, res) {
        //publish one or more attributes
        var fields = req.query.fields;

        //publish a limit of activity
        var limit = parseInt(req.query.limit);

        // do not display the firsts activities
        var offset = parseInt(req.query.offset);

        //send all photos
        models.tpphotos.findAll({
            attributes: (fields !== '*' && fields != null) ? fields.split(',') : null,
            limit: (!isNaN(limit)) ? limit : null,
            offset : (!isNaN(offset)) ? offset : null,
        }).then(function(tpphotos){
            if(tpphotos){
                res.status(200).json(tpphotos);
            }
            else {
                res.status(404).json({"error": "no comment found"})
            }
        }).catch(function (err) {
            console.log(err);
            res.status(500).json({"error": "invalid fields"})

        })
    }
}
