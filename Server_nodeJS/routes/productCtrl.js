//Imports
var bcrypt  = require('bcrypt');
var jwt     = require('jsonwebtoken');
var models = require('../models');

//Routes
module.exports = {
    addProduct: function (req, res) {

        //parameters
        var name = req.body.name;
        var price = req.body.price;
        var description = req.body.description;
        var category = req.body.category;
        var email = req.body.email;


        /*console.log(email, "ksbs");
        console.log(name);
        console.log(password);*/
        console.log(req.body);

        if (email == null || name == null || price == null || description==null || category == null ) {
            return res.status(400).json({'error': 'missing parameters'})
        }

        models.users.findOne({
            attributes: ['email'],
            where: {email: email}
        })
            .then(function (userFound) {
                if (userFound) {
                    console.log("hey");
                    var newProduct = models.tpproducts.create({
                        name:name,
                        price:price,
                        description:description,
                        category:category,
                        email:email
                    })
                        .then(function (newProduct) {
                            console.log("hey");
                            return res.status(201).json({
                                'productId': newProduct.id
                            })
                        })
                        .catch(function (err) {
                            return res.status(500).json({'error': 'cannot add user'});
                        })
                } else {
                    return res.status(409).json({'error': 'user already exist'});
                }
            })

    },
    listProduct: function (req, res) {
        var fields = req.query.fields;
        var limit = parseInt(req.query.limit);
        var offset = parseInt(req.query.offset);


        models.tpproducts.findAll({
            attributes: (fields !== '*' && fields != null) ? fields.split(',') : null,
            limit: (!isNaN(limit)) ? limit : null,
            offset : (!isNaN(offset)) ? offset : null,
        }).then(function(tpproducts){
            if(tpproducts){
                res.status(200).json(tpproducts);
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
