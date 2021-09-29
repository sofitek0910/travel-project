const express =  require('express');
const router = express.Router();
const { check, validationResult } = require("express-validator");
const auth  = require('../../middleware/auth');
const tourBooking = require('../../models/TourBooking');
const User = require('../../models/Users');


// @route   POST api/tour-booking
// @dosc    create new tour booking
// @access  private

router.post('/', [auth, [
    check('destinationId', 'Please full the requtement').not().isEmpty(),
]], async (req, res) => {
   const errors = validationResult(req);

   if (!errors.isEmpty()) {
       return res.status(400).json({errors: errors.array()});
   };

   const {
    destinationId, message, paymentDate, payment, status
   } = req.body;

   // build booking object
   const bookingFields = {};

   bookingFields.bookerId = req.user.id;
   bookingFields.destinationId = destinationId;
   bookingFields.message = message || "";
   bookingFields.paymentDate = paymentDate || "";
   if (payment) bookingFields.payment = payment;
   if (status) bookingFields.status = status;   

   try {
       booking = new tourBooking(bookingFields);
       await booking.save();
       res.json(booking);

   } catch (err) {
       console.error(err.message);
       res.status(500).send('Server Error'); 
   }
});

// @route   GET api/tour-booking
// @dosc    Get all tour booking
// @access  private

router.get('/', auth, async (req, res) => {
    try {
        let query = {};
        const reqQuery = {
            ...req.query
        };

        // Fields to exclude
        const removeFields = ["select", "sort", "page", "limit"];

        // Loop over removeFields and delete them from reqQuesry
        removeFields.forEach((param) => delete reqQuery[param]);

        // Create query string
        let queryStr = JSON.stringify(reqQuery);

        // Create operators ($get, $get, etc)
        queryStr = queryStr.replace(
            /\b(gt|gte|lt|lte|in)\b/g,
            (match) => `$${match}`
        );

        console.log("queryStr", queryStr);

        query = tourBooking.find(JSON.parse(queryStr)).populate(
            'bookerId',['name']
        ).populate('destinationId', ['title']);

        //Select Fields
        if (req.query.select) {
            const fields = req.query.select.split(",").join(" ");
            query = query.select(fields);
        }

        // Sort
        if (req.query.sort) {
            const sortBy = req.query.sort.split(",").join(" ");
            query = query.sort(sortBy);
        } else {
            query = query.sort("-createdAt");
        };

        //Pagination
        const page = parseInt(req.query.page, 10) || 1;
        const limit = parseInt(req.query.limit, 10) || 25;
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
        const total = await tourBooking.countDocuments();

        query = query.skip(startIndex).limit(limit);

        // Executing result
        const bookings = await query;

        // Pagination result
        const pagination = {};

        if (endIndex < total) {
            pagination.next = {
                page: page + 1,
                limit,
            };
        }

        if (startIndex > 0) {
            pagination.prev = {
                page: page - 1,
                limit,
            };
        }

        res.status(200).json({
            success: true,
            count: bookings.length,
            pagination: pagination,
            data: bookings,
        });

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});


// @route   GET api/tour-booking/:id
// @dosc    Get tour booking
// @access  public
router.get('/:id', auth, async (req, res) => {
    try {
        const booking = await tourBooking.findById(req.params.id).populate(
            'bookerId',['name']
        ).populate('destinationId', ['title']);

        if (!booking) {
            res.status(404).send('Booking not found');
        };

        res.status(200).json({
            success: true,
            data: booking,
        });

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// @route   PUT api/tour-booking/:id
// @dosc    Get tour booking
// @access  public
router.put('/:id', auth, async (req, res) => {
    const {
        paymentDate, payment, status
       } = req.body;
    
       // build booking object
       const bookingFields = {};
    
       bookingFields.bookerId = req.user.id;
       if (paymentDate) bookingFields.paymentDate = paymentDate || "";
       if (payment) bookingFields.payment = payment;
       if (status) bookingFields.status = status;
    try {
        await tourBooking.updateOne({_id: req.params.id}, {$set: bookingFields});

        res.status(200).json({
            success: true,
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});



module.exports = router;