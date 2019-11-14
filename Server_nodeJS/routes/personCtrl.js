//Imports
var bcrypt  = require('bcrypt');
var jwt     = require('jsonwebtoken');
var models = require('../models');

//Routes 
module.exports = {
    register: function(req, res){

        //parameters
        var id = id;
        var name = Name_Personne;
        var firstName = First_Name_Person;
        var location = Location_Person;
        var email = Email_address;
        var password = Password;
        var status = Status_Person;
        var profile = Profile;
        var idBasket = Id_Basket;

        if (email == null || username == null || password == null){
            return res.status(400).json({ 'error': 'missing parameters'})
        }

        /*models.Person.findOne({
            attributes: ['email'],
            where: { email: email}
        })
        .then(function(userFound){*/
            var a = 1;
            if (a == 1){

                bcrypt.hash(password, 5, function(err, bcryptedPassword){
                    var newPerson = models.Person.create({
                        id: 1,
                        email: " test@test.com" ,
                        firstName:"asfn",
                        password: "test",
                        name: "iusqu",
                        status
                        
                    })
                    .then(function(newUser){
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
        /*})
        .catch(function(err){
            return res.status(500).json({'error': 'unable to verify user'});
        });*/



    },
    login: function(req, res){

    }
}