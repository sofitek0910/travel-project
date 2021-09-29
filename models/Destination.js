const mongoose = require('mongoose');

const DestinationSchema = new mongoose.Schema({ 
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    updatedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
    },
    title: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    keywords: {
        type: [String]
    },
    photos: {
        type: [String]
    },
    status: {
        type: String,
        default: 'active',
        enum: ["active", "hold", "closed"]
    },
    description: {
        type: String,
    },
    phone: {
        type: String,
    },
    website: {
        type: String,
    },
    email: {
        type: String
    },
    startOn: {
        type: Date,
        required: true
    },
    endOn: {
        type: Date,
        required: true
    },
    bookinkLastDate: {
        type: Date,
        required: true
    },
    address: {
        type: String,
        required: true,
    },
    location: {
        country: {
            type: String,
            default: "Bangladesh"
        },
        city: {
            type: String,
            required: true
        },
        state: {
            type: String,
        },
        zipCode: {
            type: String,
            required: true
        }
    },
    social: {
        youtube: {
            type: String
        },
        twitter: {
            type: String
        },
        facebook: {
            type: String
        },
        instagram: {
            type: String
        }
    },
    details: {
        amount : {
            type: Number,
            default: 0,
        },
        maximumTravellers: {
            type: Number,
            default: 1,
        },
        Departure: {
            type: String,
            required: true
        },
        departureTime: {
            type: String,
            required: true
        },
        languages: {
            type: [String]
        },
        popularPlaces: {
            type: [String]
        }
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    lastUpdate: {
        type: Date,
        default: Date.now
    },
    tourPlan: [
        {
            title: String
        },
        {
            description: String
        }
    ]
});

module.exports = destination = mongoose.model('Destination', DestinationSchema);

