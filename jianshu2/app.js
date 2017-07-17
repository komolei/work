var _GoTop = require('./src/js/GoTop.js')
var Carousel = require('./src/js/Carousel.js')
var carousel = new Carousel($('.carousel'));
carousel.bind();
// console.dir(carousel.constructor.prototype.bind());
$(window).resize(function() {
        // var carousel = new _Carousel.init($('.carousel'));
        // var carousel = new carousel($('.carousel'));
        // carousel.prototype.bind();
        // new _Carousel.init($('.carousel'), windowWidth);
        // var windowWidth = $(window).width();
        // console.log("window:", windowWidth);
        carousel.bind();
    })
    // new _Carousel.init($('.carousel'));
var index = require('./src/js/index.js')
    // var $ = require('./src/js/jquery.min.js')
require('./src/sass/index.scss');
require('./src/sass/author.scss');

// require('./src/sass/komo.scss');