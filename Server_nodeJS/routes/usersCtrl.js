//Imports
var bcrypt  = require('bcrypt');
var jwtUtils     = require('../utils/jwt.utils');
var models = require('../models');

//Routes 
module.exports = {
    register: function(req, res){

        //parameters
        var name = req.body.name ;
        var first_name = req.body.first_name;
        var location = req.body.location;
        var email = req.body.email;
        var password = req.body.password;
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
                    console.log("hey");
                    var newUser = models.users.create({
                        
                        name: name,
                        first_name: first_name,
                        location: location,
                        email: email,
                        password: password,
                        status: status,
                        profile: profile,
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
            }else{
                return res.status(409).json({'error': 'user already exist'});
            }
        })
    },
    login: function(req, res){

        var email = req.body.email;
        var password = req.body.password;

        if (email == null ||  password == null){
            return res.status(400).json({ 'error': 'missing parameters'})            
        }

        models.users.findOne({
            where: { email: email}
        })
        .then(function  (userFound){
            if(userFound){  
                console.log(userFound.password);
                    if(password == userFound.password){
                        return res.status(200).json({
                            'userId': userFound.id,
                            'token': jwtUtils.generateTokenForUser(userFound)
                        });console.log(jwtUtils.generateTokenForUser(userFound), "userfound");
                    }else{
                        return res.status(403).json({ 'error': 'invalid password'})
                    }}else{
                return res.status(403).json({ 'erroe': 'user doesn\'exist'});
            }
        })
        .catch(function(err){
            return res.status(500).json({ 'error': 'unable to verify user'});
        });

    },
    getUserProfile: function(req, res) {
        // Getting auth header
        var headerAuth = req.headers['authorization'];
        var userId = jwtUtils.getUserId(headerAuth);
        console.log(userId);

        /*if (userId < 0)
            return res.status(400).json({ 'error': 'wrong token' });*/

        models.users.findOne({
            attributes: [ 'id', 'name', 'firstname', 'email'],
            where: { id: userId }
        }).then(function(user) {
            if (user) {
                res.status(200).json(user);
            } else {
                res.status(404).json({ 'error': 'user not found' });
            }
        }).catch(function(err) {
            res.status(500).json({ 'error': 'cannot fetch user' });
        });
    },
}