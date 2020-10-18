/* Assignment2, Franz Cadiente 301098663, 10/18/2020
 */

// require modules for User model
let mongoose = require('mongoose');
let passportLocalMongoose = require('passport-local-mongoose');


let User = mongoose.Schema
(
    {
        
        username:
        {
            type: String,
            default:  '',
            trim: true,
            required: 'username is required'
        },

        email:
        {
            type: String,
            default:  '',
            trim: true,
            required: 'email is required'
        },

        displayName:
        {
            type: String,
            default:  '',
            trim: true,
            required: 'Display Name is required'
        }
    },
    {
        collection: "users"
    }
    
);

//configure options for User Model
let options = ({missingPasswordError: 'Wrong / Missing Password'});
User.plugin(passportLocalMongoose, options);

module.exports.User = mongoose.model('User', User);

