const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({ 
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    title: {
        type: String,
        required: true
    },
    destinationId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Destination',
    },
    status: {
        type: String,
        enum: ["active", "close", "hold"],
        default: "active"
    },
    details: [{
        image: {
            type: String
        },
        description: {
            type: String
        },
    }],
    likes: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'user',
    },
    messages: [{
        messageBody: {
            type: String,
            required: true
        },
        messageDate: {
            type: Date,
            default: Date.now
        },
        messageUser: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        }
    }],
});

module.exports = blog = mongoose.model('blog', BlogSchema);