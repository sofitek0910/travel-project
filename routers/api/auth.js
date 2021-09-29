const express = require("express");
const { check, validationResult } = require("express-validator");

const router = express.Router();
const auth = require('../../middleware/auth');
const User = require('../../models/Users');
const bcrypt = require('bcryptjs');

// @route   GET api/auth
// @dosc    test route
// @access  public
router.get('/', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');

        res.json(user);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});

// @route   POST api/auth
// @dosc    Authentication user & get token 
// @access  public
router.post('/', [
    check('email', 'Please enter a valid email').isEmail(),
    check('password', 'Password is required').exists()
], async (req, res) => {
    const errors = validationResult(req);    
    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
    };

    const {email, password} = req.body;

    try {
        let user = await User.findOne({email: email});

        if (!user) {
          return res.status(400).json({errors: [{msg: "Invalid Credentials"}] });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({errors: [{msg: "Invalid Credentials"}] });
        }

        // Create token
        const token = user.getSignedJwtToken(); 

        console.log("token", token);
        res.json({token});
    } catch(err) {
        console.error("err", err.message);
        res.status(500).send("Server error");
    }
});

module.exports = router;