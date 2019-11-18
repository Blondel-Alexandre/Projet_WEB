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

        //verification of all parameters
        if (email == null || name == null || price == null || description==null || category == null ) {
            return res.status(400).json({'error': 'missing parameters'})
        }

        //find the email in database in table users
        models.users.findOne({
            attributes: ['email'],
            where: {email: email}
        })
        //add new product in the database
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
                            return res.status(500).json({'error': 'cannot add product'});
                        })
                } else {
                    return res.status(409).json({'error': 'email not exist'});
                }
            })

    },
    listProduct : function (req, res) {
        //publish one or more attributes
        var fields = req.query.fields;

        //publish a limit of activity
        var limit = parseInt(req.query.limit);

        // do not display the firsts activities
        var offset = parseInt(req.query.offset);

        //send all products
        models.tpproducts.findAll({
            attributes: (fields !== '*' && fields != null) ? fields.split(',') : null,
            limit: (!isNaN(limit)) ? limit : null,
            offset : (!isNaN(offset)) ? offset : null,
        }).then(function(tpproducts){
            if(tpproducts){
                res.status(200).json(tpproducts);
            }
            else {
                res.status(404).json({"error": "no product found"})
            }
        }).catch(function (err) {
            console.log(err);
            res.status(500).json({"error": "invalid fields"})

        })
    }

}
