var carouselControlPre = $('.carousel-control-pre');
var carouselControlNext = $('.carousel-control-next');
var carouselInner = $('.carousel-inner');
var isLockUp = false;
var len = carouselInner.width();
var item = $('item');
console.log(item);
carouselControlPre.on('click', function() {
    event.preventDefault();
    if (isLockUp) {
        return;
    }
    isLockUp = true;
    carouselInner.animate({
        left: '+=' + len,
    })

})