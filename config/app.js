const express  = require('express');
const app = express();
const Swal = require('sweetalert2');

app.use(express.static('../static'));
app.set('views', __dirname + '../views');
app.set('view engine', 'ejs');


// middleware
const adminMiddleware = require('../app/Http/Middleware/PageMiddleware');
app.use(adminMiddleware);
// end middleware

// routes
const router = require('../routes/web');
app.use('/', router);
// end routes

// server creation
app.listen(8604, () => {
    console.log('Server is created and listening on port 8604');
});