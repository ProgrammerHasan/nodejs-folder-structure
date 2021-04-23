const express  = require('express');
const app = express();

module.exports = function() {
    app.get('*', (req, res) => {
        res.render('errors/404');
    });
    const router = require('routes/web');
    app.use('/', router)
};