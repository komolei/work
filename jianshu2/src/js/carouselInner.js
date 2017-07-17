var carouselControlPre = $('.carousel-control.pre');
var carouselControlNext = $('.carousel-control.next');
var carouselInner = $('.carousel-inner');
var isLockUp = false;
var len = carouselInner.width();
var item = $('.item');
carouselInner.width(carouselInner.children().length * len);
console.log(item);
var index = 0;
carouselControlNext.on('click', function() {
    console.log(1);
    event.preventDefault();
    if (isLockUp) {
        return;
    }
    isLockUp = true;
    carouselInner.animate({
        left: '+=' + len,
    }, function() {
        index++;

    })

})