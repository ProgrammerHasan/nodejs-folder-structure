const router = require('express').Router();
const {
    getHome,
    getContact,
} = require('../app/Http/Controllers/PageController');

router.get('/', getHome);
router.get('/about', getContact);

// pass parameters
router.get('/profile/:name', (req, res) => {
    const name = req.params.name;
    res.send(`Hi ${name}`);
});


// 404 not found
router.get('*', (req, res) => {
    res.render('errors/404');
});

module.exports = router;