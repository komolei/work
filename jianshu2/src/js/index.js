// var ul = require('./goTop');
// // document.body.innerHTML = ul;
// $('body').text(ul);
// ! function rem() {
//     let pageWidth = document.documentElement.clientWidth / 16;
//     let content = "html:{font-size:" + pageWidth + "px}"
//     console.log(pageWidth * 16);
//     console.log("one", pageWidth);
//     let style = document.createElement("style");
//     style.innerHTML = content;
//     document.head.appendChild(style);
// }()

//nav at max-width:467px
var smallList = $('.smallList');
var smallBox = $('.smallBox');
smallList.on('click', function() {
    smallBox.slideToggle();
})
$(window).resize(function() {
    console.log($(this).width());
    if ($(this).width() > 467) {
        smallBox.hide();
    }
    carousel.width($(window).width())
        // ctImg.width($(window).width() * 6)
        // ctImg.css('left', windowWidth + 'px')
        // ctImgli.width($(window).width())

    // img.width(windowWidth)
});
//carousel 
var carousel = $('.carousel');
var ctImg = $('.carousel').find('.ct-img');
// console.log(ctImg);
var windowWidth = $(window).width();
var ctImgli = $('.carousel').find('.ct-img li');
var img = ctImg.find('img');
console.log(img);
// carousel.width($(window).width())