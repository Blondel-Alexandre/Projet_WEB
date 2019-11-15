// Imports
var jwt = require('jsonwebtoken');

const JWT_SIGN_SECRET = '0sjhkgioqfld6afq7jdglsopiok85sdsdfb2raf';

// Exported functions
module.exports = {
    generateTokenForUser: function(userData) {
        return jwt.sign({
                userId: userData.id
            },
            JWT_SIGN_SECRET,
            {
                expiresIn: '1h'
            })
    },
    parseAuthorization: function(authorization) {
        return (authorization != null) ? authorization.replace('Bearer ', '') : null;
    },
    getUserId: function(authorization) {
        var userId = -1;
        //console.log(jwtToken.userId);
        console.log(token, "token");
        var token = module.exports.parseAuthorization(authorization);
        if(token != null) {
            console.log("coucou");
            try {
                var jwtToken = jwt.verify(token, JWT_SIGN_SECRET);
                console.log(jwtToken.userId,"jwt");
                if(jwtToken != null)
                    userId = jwtToken.userId;
            } catch(err) { }
        }
        return userId;
    }
}