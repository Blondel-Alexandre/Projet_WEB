//Imports
var bcrypt  = require('bcrypt');
var jwt     = require('jsonwebtoken');
var models = require('../models');

//Routes 
module.exports = {
    register: function(req, res){

        //parameters
        var name = req.body.name ;
        var first_name = req.body.first_name;
        var location = req.body.location;
        var email = req.body.email;
        var password = req.body.email;
        var status = req.body.status;
        var profile = req.body.profile;

        /*console.log(email, "ksbs");
        console.log(name);
        console.log(password);*/
        console.log(req.body);

        if (email == null || name == null || password == null || first_name == null || location == null || status == null || profile == null){
            return res.status(400).json({ 'error': 'missing parameters'})
        }

        models.users.findOne({
            attributes: ['email'],
            where: { email: email}
        })
        .then(function(userFound){
            if (!userFound){
                bcrypt.hash(password, 5, function(err, bcryptedPassword){
                    console.log("hey");
                    var newUser = models.users.create({
                        
                        name: name,
                        first_name: first_name,
                        location: location,
                        email: email,
                        password: bcryptedPassword,
                        status: status,
                        profile: profile
                    })
                    .then(function(newUser){
                        console.log("hey");
                        return res.status(201).json({
                            'userId': newUser.id
                        })
                    })
                    .catch(function(err){
                        return res.status(500).json({ 'error': 'cannot add user'});
                    })
                });

            }else{
                return res.status(409).json({'error': 'user already exist'});
            }
        })
        .catch(function(err){
            return res.status(500).json({'error': 'unable to verify user'});
        });



    },
    login: function(req, res){

        var email = req.body.email;
        var password = req.body.email;

        if (email == null ||  password == null){
            return res.status(400).json({ 'error': 'missing parameters'})            
        }

        models.users.findOne({
            where: { email: email}
        })
        .then(function  (userFound){
            if(userFound){

            }else{
                return res.status().json({ 'erroe': 'user doesn\'exist'});
            }
        })
        .catch(function(err){
            return res.status(500).json({ 'error': 'unable to verify user'});
        });

    }
}