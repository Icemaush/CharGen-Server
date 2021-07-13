// Import routes
const wowApp = require('./routes/wow-routes');

// Set default port
const port = process.env.PORT || 5000;

// Start express app
wowApp.listen(port, function () {
    console.log(`Server started on port ${port}.`);
}); 