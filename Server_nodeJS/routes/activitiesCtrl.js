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

        if (email == null || name == null || date == null || description == null || price == null || location == null || status == null || regularity == null || public == null){
            return res.status(400).json({ 'error': 'missing parameters'})
        }


        models.users.findOne({
            attributes: ['email'],
            where: {email: email}
        })
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
}
