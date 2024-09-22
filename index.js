const express = require('express');
const cors = require('cors');
const router = require('./routes/auth');
const connectDB = require('./config/database');
const { app, server } = require('./socket/index');
const cookieParser = require('cookie-parser');
require('dotenv').config(); // Load environment variables at the top

const PORT = process.env.PORT || 4000;

app.use(cookieParser()); // Call cookieParser as a function
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}));
app.use(express.json({ extended: false }));

// API endpoint
app.use('/api', router);
if(process.env.NODE_ENV == "production"){
    app.use(express.static("client/build"));
    app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
// Connect to the database and start the server
connectDB().then(() => {
    server.listen(PORT, () => {
        console.log("Server running at " + PORT);
    });
}).catch(error => {
    console.error("Failed to connect to the database:", error);
    process.exit(1); // Exit the process if the database connection fails
});

// Error handling middleware (optional)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        success: false,
        message: "Internal server error"
    });
});
