const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("DB connected successfully");

        // Optional: Handle connection events
        mongoose.connection.on('error', (error) => {
            console.error("MongoDB connection error:", error);
        });

    } catch (error) {
        console.error("DB connection issues:", error);
    }
};

module.exports = connectDB;
