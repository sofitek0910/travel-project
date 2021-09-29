const path = require('path');
const express = require("express");
const { check, validationResult } = require("express-validator");
const User = require('../../models/Users');
const auth  = require('../../middleware/auth');
const router = express.Router();

const config  = require("config");
const filePath = config.get('userProfileImage');
const maxFieleSize = config.get('maxFileSize');

// @route   POST api/users
// @dosc    Register route
// @access  public
router.post('/', [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please enter a valid email').isEmail(),
    check('password', 'Please enter a password with 6 or more characters').isLength({min: 6})
], async (req, res) => {
    const errors = validationResult(req);    
    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
    };

    const {name, email, password} = req.body;

    try {
        let user = await User.findOne({email: email});

        if (user) {
          return res.status(409).json({errors: [{msg: "User already exists"}]});
        }

        user = new User({
            name, email, password
        })

        await user.save();

        // Create token
        const token = user.getSignedJwtToken(); 

        res.json({token});
    } catch(err) {
        console.error("err", err.message);
        res.status(500).send("Server error");
    }
});


// @route   PUT api/users/:id/photo
// @dosc    put user photo
// @access  private
router.put('/:id/photo', auth, async (req, res) => {
    console.log("hello");
    
    try {
        const user = await User.findById(req.params.id);

        if (!user) {
            return res.status(404).send('User not found');
        };

        if (!req.files) {
            return res.status(400).send('Please upload a file');
        };

        const file = req.files.file;

        if (!file.mimetype.startsWith('image')) {
            return res.status(400).send('Please upload an image file');
        };

        if (file.size > maxFieleSize) {
            return res.status(400).send(`Please upload an image less than 1000000`);
        };

        // Create custom filename
        file.name = `photo_${user._id}-${path.parse(file.name).ext}`;

        file.mv(`${filePath}/${file.name}`, async err => {
            
            if (err) {
                return res.status(500).send(`Problem with file upload`);
            }
            let data = await User.findByIdAndUpdate(req.params.id, {$set: {avatar: `users/${file.name}`}}, {new: true});

            res.status(200).json({
                success: true,
                data: data
            });
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});


module.exports = router;