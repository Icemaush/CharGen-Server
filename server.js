// Import routes
const app = require('./routes/routes');

// Set default port
const port = process.env.PORT || 5000;

// Start express app
app.listen(port, function () {
    console.log(`Server started on port ${port}.`);
}); 