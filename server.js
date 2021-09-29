const express = require("express");
const path = require('path');
const connectDB = require('./config/db');
const app = express();
const fileupload = require('express-fileupload');

// Connect Database
connectDB();

//File uploading
app.use(fileupload());

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Init Middleware
app.use(express.json({extended: false}));

app.get('/', (req, res) => res.send("API reaning"));

// Define routes
app.use('/api/users', require('./routers/api/users'));
app.use('/api/auth', require('./routers/api/auth'));
app.use('/api/profile', require('./routers/api/profile'));
app.use('/api/destination', require('./routers/api/destination'));
app.use('/api/tour-booking', require('./routers/api/tourBooking'));
app.use('/api/blog', require('./routers/api/blog'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));