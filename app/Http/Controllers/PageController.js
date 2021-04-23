exports.getHome = (req, res) => {
    res.render('pages/index', {title: ''});
};

exports.getContact = (req, res) => {
    res.render('pages/index', {title: 'Contact - '});
};