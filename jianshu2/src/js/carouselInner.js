var carouselControlPre = $('.carousel-control.pre');
var carouselControlNext = $('.carousel-control.next');
var carouselInner = $('.carousel-inner');
var isLockUp = false;
var len = carouselInner.width();
var item = $('.item');
var windowWidth = $(window).width();
// $(window).resize(function() {
//     if (windowWidth < 687) {
//         len = windowWidth;
//         item.find("img").width(len);
//         console.log("len", len);
//         carouselInner.width(carouselInner.children().length * len);

//     }
// })
carouselInner.width(carouselInner.children().length * len);
console.log(item);
var index = 0;
// var indexPre = 5;
carouselControlNext.on('click', function() {
    console.log(1);
    event.preventDefault();
    if (isLockUp) {
        return;
    }
    isLockUp = true;
    // carouselInner.animate({
    //     left: '+=' + len,
    // }, function() {
    //     index++;

    // })

    // item.eq(index).hide();
    // console.log(item.eq(index + 1).has(".baner"))
    // item.eq(index).has(".banner").animate({
    //         display: "none"
    //     }, 2000, "linear")
    item.eq(index).fadeOut(1000, function() {
        $(this).find(".banner").css({
            top: "0"
        })
    });
    item.eq(index + 1).fadeIn(500);
    index++;
    if (index == 7) {
        index = 0;
        isLockUp = false;
    } else {
        isLockUp = false;

    }
    return index;
})
carouselControlPre.on('click', function() {
        console.log(1);
        event.preventDefault();
        if (isLockUp) {
            return;
        }
        isLockUp = true;
        // carouselInner.animate({
        //     left: '+=' + len,
        // }, function() {
        //     index++;
        // })
        // item.eq(index).hide();
        item.eq(index - 1).fadeOut(100);
        item.eq(index).fadeIn();
        index--;
        isLockUp = false;
        // if (index == 5) {
        //     index = 0;
        //     isLockUp = false;
        // } else {
        //     isLockUp = false;

        // }
    })
    // var settime = setInterval(function() {
    //     item.eq(index).hide();
    //     item.eq(index + 1).show();
    //     index++;
    //     if (index == 5) {
    //         index = 0;
    //         isLockUp = false;

//     } else {
//         isLockUp = false;
//     }
// }, 1000)
// carouselInner.on("mouseenter", function() {
//     clearInterval(settime)
// })