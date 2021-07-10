// Import routes
const app = require('./routes/routes');

const cors = require('cors');
app.use(cors({
    origin: 'http://localhost:3000/WoWGen-React'
}));

// Set default port
const port = process.env.PORT || 5000;

// Start express app
app.listen(port, function () {
    console.log(`Server started on port ${port}.`);
}); 