var express = require('express');
var router = express.Router();



function changeLang(req) {
    const data = require('../lang/eng.json');
    data['title'] = data.menu.find((obj) => obj.url === req.originalUrl)['title'];
    data.pageUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    return data;
}


/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {
        ...changeLang(req)
    });
});

router.get('/treatment-facilities', function (req, res, next) {
    res.render('treatment', {
        ...changeLang(req)
    });
});

router.get('/about-us', function (req, res, next) {
    res.render('about-us', {
        ...changeLang(req)
    });
});

router.get('/gallery', function (req, res, next) {
    res.render('gallery', {
        ...changeLang(req)
    });
});

router.get('/contact-us', function (req, res, next) {
    res.render('contact-us', {
        ...changeLang(req)
    });
});

router.get('/editor', function (req, res, next) {
    res.render('editor', {
        ...changeLang(req),
        data: {
            ...changeLang(req)
        }
    });
});


module.exports = router;