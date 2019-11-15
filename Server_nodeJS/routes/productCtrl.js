//Imports
var bcrypt  = require('bcrypt');
var jwt     = require('jsonwebtoken');
var models = require('../models');

//Routes
module.exports = {
    addProduct: function(req, res){

        //parameters
        var name = req.body.name ;
        var price = req.body.price;
        var description =req.body.description;
        var category = req.body.category;
        var email = req.body.email;


        if (email == null || name == null || price == null || description == null || category == null ){
            return res.status(400).json({ 'error': 'missing parameters'})
        }

        models.users.findOne({
            attributes: ['email'],
            where: { email: email}
        })
            .then(function(userFound){
                if (!userFound){
                    bcrypt.hash(password, 5, function(err, bcryptedPassword){
                        var newProduct = models.tpproducts.create({

                            name: name,
                            price: price,
                            description: description,
                            category: category,
                            email: email
                        })
                            .then(function(newProduct){

                                return res.status(201).json({
                                    'productId': newProduct.id
                                })
                            })
                            .catch(function(err){
                                return res.status(500).json({ 'error': 'cannot add product'});
                            })
                    });

                }else{
                    return res.status(409).json({'error': 'product already exist'});
                }
            })
            .catch(function(err){
                return res.status(500).json({'error': 'unable to verify product'});
            });



    },

}