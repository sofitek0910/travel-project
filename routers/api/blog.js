const express = require("express");
const router = express.Router();
const auth  = require('../../middleware/auth');
const {check, validationResult} = require('express-validator');

const Blog = require('../../models/blog');

// @route   GET api/blog
// @dosc    Get blogs
// @access  public

router.get('/', async (req, res) => {
    try {
        const blogs = await Blog.find().populate(
            'createdBy',
            ['name', 'avatar']
        ).populate(
            'destinationId',
            ['title']
        );

        res.status(200).json({
            success: true,
            data: blogs
        });

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// @route   GET api/blog/:id
// @dosc    Get blogs
// @access  public

router.get('/:id', async (req, res) => {
    try {
        const blogs = await Blog.findById(req.params.id).populate(
            'createdBy',
            ['name', 'avatar']
        ).populate(
            'destinationId',
            ['title']
        );

        if (!blogs) {
            return res.status(404).send('Blog not found');
        };

        res.status(200).json({
            success: true,
            data: blogs
        });
        
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// @route   POST api/blog
// @dosc    current blog
// @access  private
router.post('/', [auth, [
    check('title', 'Status is required').not().isEmpty()
]], async (req, res) => {
   const errors = validationResult(req);

   if (!errors.isEmpty()) {
       return res.status(400).json({errors: errors.array()});
   };

   const {
        title, destinationId, details
   } = req.body;

   // build profile object
   const blogBody = {};
   blogBody.createdBy = req.user.id;
   blogBody.title = title;
   if (destinationId) blogBody.destinationId = destinationId;
   if (details) blogBody.details = details;

   try {
        // Create Save Blog
        let blog = new Blog(blogBody);

        await blog.save();
        res.status(200).json({
            success: true,
            data: blog
        });
   } catch (err) {
       console.error(err.message);
       res.status(500).send('Server Error'); 
   }
});

// @route   GET api/blog/:id
// @dosc    Get blogs
// @access  public
router.get('/:id', async (req, res) => {
    try {
        const blogs = await Blog.findById(req.params.id).populate(
            'createdBy',
            ['name', 'avatar']
        ).populate(
            'destinationId',
            ['title']
        );

        if (!blogs) {
            return res.status(404).send('Blog not found');
        };

        res.status(200).json({
            success: true,
            data: blogs
        });
        
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});


// @route   PUT api/blog/:id
// @dosc    Update blog
// @access  private
router.put('/:id', [auth, [
        check('title', 'Title is required').not().isEmpty()
    ]], async (req, res) => {
    const {
        title, status, details
       } = req.body;
    
       // build blog object
       const blogFields = {};

       if (title) blogFields.title = title;
       if (status) blogFields.status = status;
    try {
        let blog = await Blog.updateOne({_id: req.params.id}, {$set: blogFields, $push: {details: details}});

        res.status(200).json({
            success: true,
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;