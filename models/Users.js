const mongoose = require('mongoose');
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now
    },
    type: {
        type: String,
        default: 'user'
    },
    status: {
        type: String,
        default: "active"
        // allowedValues: ["invited", "active", "inactive"]
    }
});

//create and add avatar to user

UserSchema.pre('save',function(next) {
    this.avatar = gravatar.url(this.email, {
        s: '200', r: 'pg',d: 'mm' 
    });

    next();
});

// hash password
UserSchema.pre('save', function(next) {
    if (!this.isModified('password')) {
        return next()
    }

    const salt = bcrypt.genSaltSync(10);
    this.password = bcrypt.hashSync(this.password, salt);
    
    next();
});

// Sign JWT and return
UserSchema.methods.getSignedJwtToken = function () {
    let payload = {
        user:  {
            id: this._id
        }
    };

    return jwt.sign(payload, config.get('jwtSecret'), 
    {expiresIn: 360000});
};

module.exports = User = mongoose.model('user', UserSchema);