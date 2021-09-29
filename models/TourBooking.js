const mongoose = require('mongoose');
const {getNewBookingId} = require('../helpers/index.js');

const TourBookingSchema = new mongoose.Schema({
    bookerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    destinationId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Destination',
        required: true 
    },
    message: {
        type: String
    },
    paymentDate: {
        type: Date
    },
    bookingId: {
        type: String
    },
    payment: {
        type: String,
        enum: ["paid", "unpaid", "hold"],
        default: "unpaid"
    },
    status: {
        type: String,
        enum: ["cancelled", "Approved", "pending"],
        default: "pending"
    },
    canceledBy: {
        type: String,
        enum: ["byBooker", "byDestination", "system"],
    },
    numberOfTravellers: {
        type: Number,
        default: 1,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
 });

 //add bookingId

TourBookingSchema.pre('save', async function(next) {
    let newBooks = await tourBooking.findOne().sort({ 'createdAt' : -1 });
    let bookingId = newBooks && newBooks.bookingId ? newBooks.bookingId : "AA000";
    
    this.bookingId = await getNewBookingId(bookingId);

    next();
});

 module.exports = tourBooking = mongoose.model('TourBooking', TourBookingSchema);

