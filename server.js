// Import routes
const app = require('./routes/routes');

// Set default port
const port = 5000;

// Implement 500 error route
app.use(function (err, req, res, next) {
    console.error(err.stack)

    res.status(500).send('Something is broken lol.')
});
  
// Implement 404 error route
app.use(function (req, res, next) {
    res.status(404).send('Sorry we could not find that.')
});

// Start express app
app.listen(port, function () {
    console.log(`Server started on port ${port}.`);
}); 