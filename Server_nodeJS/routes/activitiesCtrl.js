//Imports
var bcrypt  = require('bcrypt');
var jwtUtils     = require('../utils/jwt.utils');
var models = require('../models');

//Routes
module.exports = {
    addEvent: function (req, res) {

        //parameters
        var name = req.body.name ;
        var date = req.body.date;
        var description = req.body.description;
        var price = req.body.price;
        var location = req.body.location;
        var status = req.body.status;
        var regularity = req.body.regularity;
        var public = req.body.public;
        var email = req.body.email;

        /*console.log(email, "ksbs");
        console.log(name);
        console.log(password);*/
        console.log(req.body);

        //verification of all parameters
        if (email == null || name == null || date == null || description == null || price == null || location == null || status == null || regularity == null || public == null){
            return res.status(400).json({ 'error': 'missing parameters'})
        }

        //find the email in database in table users
        models.users.findOne({
            attributes: ['email'],
            where: {email: email}
        })
            //add new activity in the database
            .then(function (userFound) {
                if (userFound) {
                    console.log("hey");
                    var newActivity = models.tpactivities.create({
                        name: name,
                        date: date,
                        description: description,
                        price: price,
                        location: location,
                        status:status,
                        regularity:regularity,
                        public:public,
                        email:email

                    })
                        .then(function (newActivity) {
                            console.log("hey");
                            return res.status(201).json({
                                'ActivityId': newActivity.id
                            })
                        })
                        .catch(function (err) {
                            return res.status(500).json({'error': 'cannot add activity'});
                        })
                } else {
                    return res.status(409).json({'error': 'activity already exist'});
                }
            })
    },
    listActivity: function (req, res) {
        //publish one or more attributes
        var fields = req.query.fields;

        //publish a limit of activity
        var limit = parseInt(req.query.limit);

        // do not display the firsts activities
        var offset = parseInt(req.query.offset);

        //send all activities
        models.tpactivities.findAll({
            attributes: (fields !== '*' && fields != null) ? fields.split(',') : null,
            limit: (!isNaN(limit)) ? limit : null,
            offset : (!isNaN(offset)) ? offset : null,
        }).then(function(tpactivities){
            if(tpactivities){
                res.status(200).json(tpactivities);
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
