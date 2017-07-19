var carouselControlPre = $('.carousel-control.pre');
var carouselControlNext = $('.carousel-control.next');
var carouselInner = $('.carousel-inner2');
var isLockUp = false;
var len = carouselInner.width();
var item = $('.item');
var windowWidth = $(window).width();
var itemHight = $('.item').height();
var banner = $('.item >.banner')
    // var imgHeight = $(".item .banner:nth-child(2)").height();
var imgHeight = $(".item .banner").height();

// console.log(banner);
// $(window).resize(function() {
//     if (windowWidth < 687) {
//         len = windowWidth;
//         item.find("img").width(len);
//         console.log("len", len);
//         carouselInner.width(carouselInner.children().length * len);

//     }
// })
// console.log(311);

carouselInner.width(carouselInner.children().length * len);
// console.log(item);
var index = 0;
var itemIndex = 0;
// var indexPre = 5;

carouselControlNext.on('click', function() {
    // console.log(1);
    event.preventDefault();
    if (isLockUp) {
        return;
    }
    isLockUp = true;
    index++;

    // item.eq(index).hide();
    if (index == 4) {
        index = 0;
        itemIndex = 0;
        $('.item').each(function() {
            $(this).css({
                display: 'block'
            })
        })
        $('.carouselRight').css({
            top: 0,
        })
        isLockUp = false;

    } else {
        $('.item').eq(index - 1).fadeOut(500);
        $(".item").eq(index).fadeIn();
        $('.carouselRight').animate({
            top: '-=' + imgHeight,
        })

        isLockUp = false;
    }
    console.log(index)
    return index;


    // item.eq(itemIndex + 1).slideDown(function() {
    //     $(this).css({
    //         top: "-=" + itemHight,
    //     })
    // });
    // item.eq(itemIndex + 1).css({
    //     display: 'block'
    // })
    // item.eq(itemIndex + 1).animate({
    //     display: 'block',
    //     border: '1px solid red'
    // }, function() {
    //     console.log(1);
    // })
    // banner.eq(index).fadeOut();
    // banner.eq(index + 3).fadeIn();
    // // banner.eq(index + 3).fadeIn();

    // banner.eq(index + 1).slideUp();

    // banner.eq(index + 2).slideUp();
    // // item.eq(itemIndex).slideUp();
    // item.eq(itemIndex).slideDown()

    // item.eq(itemIndex + 1).slideDown()
    // banner.eq(index + 3).animate({

    //     })
    // item.eq(itemIndex).hide();
    // index = index + 3;
    // item.eq(itemIndex + 1).fadeIn();
    // // itemIndex++;
    // item.eq(itemIndex).removeClass("active");
    // // item.eq(itemIndex).css({
    // //     top: '-=' + itemHight,
    // // })
    // // banner.eq(index + 3).animate({
    // //     top: '-=' + itemHight,
    // // })
    // // banner.eq(index + 4).animate({
    // //         top: '-=' + imgHeight,
    // //     })
    // banner.eq(index).find("img").hide();
    // banner.eq(index).find("img").css({
    //     visibility: 'hidden'
    // });
    // banner.eq(index + 1).animate({
    //     top: '-=' + imgHeight * 2,
    // })
    // banner.eq(index + 2).animate({
    //     top: '-=' + imgHeight,
    // })
    // banner.eq(index + 3).animate({
    //         top: '-=' + 0,
    //     })
    //     // banner.eq(index).css({ display: "none" })


    // item.eq(itemIndex).removeClass("active");

    // item.eq(itemIndex + 1).addClass("active");
    // item.eq(itemIndex + 1).css({
    //         top: "'-='+itemHight"
    //     })
    //     // item.eq(itemIndex + 1).animate({
    //     //     top: '-=' + itemHight,
    //     // })
    // itemIndex++;
    // if (itemIndex == 7) {
    //     itemIndex = 0;
    //     isLockUp = false;
    // } else {
    //     isLockUp = false;
    // }


    // // item.eq(itemIndex + 1).show();
    // console.log("index:", index, banner.eq(index), "itemIndex", itemIndex);
    // // carouselInner.animate({
    // //     left: '+=' + len,
    // // }, function() {
    // index++;

    // // })

    // // item.eq(index).hide();

    // // item.eq(index).fadeOut();
    // // item.eq(index + 1).fadeIn();

    // // console.log(11);
    // // console.log(item.eq(index + 1).has(".baner"))
    // // item.eq(index).has(".banner").animate({
    // //         display: "none"
    // //     }, 2000, "linear")
    // // function left() {
    // //     console.log(item.eq(index) + "sss")
    // //     item.eq(index).has(".banner:first-child").css({
    // //         display: 'none',
    // //     })
    // // }
    // // left();
    // // item.eq(index).fadeOut(1000, function() {
    // //     $(this).find(".banner").css({
    // //         top: "0"
    // //     })
    // // });
    // // item.eq(index + 1).fadeIn(500);
    // // index++;
    // if (index == 24) {
    //     index = 0;
    //     itemIndex = 0;
    //     isLockUp = false;
    // } else {
    //     isLockUp = false;
    // }
    // return index;

})

// var speed = 0;
// setInterval(function() {
//     speed += 0.2;
//     $('.box').css({
//         opacity: 1 * speed
//     });
// }, 1000);

// function fade(el, speed) {
//     $(el).css({
//         opacity: 0.002 * speed,
//     });
//     if ($(el).css("opacity") == 1) {
//         $(el).hide();
//     }
// }
// setInterval(fade, 100)

carouselControlPre.on('click', function() {
        event.preventDefault();
        if (isLockUp) {
            return;
        }
        isLockUp = true;
        $(item).eq(index).fadeOut();
        $(item).eq(index - 1).fadeIn();

        $('.carouselRight').animate({
                top: '+=' + itemHight,
            }, function() {
                index--;
                if (index < 0) {
                    $('.carouselRight').css({ top: -imgHeight * 3 })
                    index = item.length - 1;
                }
                isLockUp = false;
            })
            // $('.item').eq(index - 1).fadeIn(500);
            // $('.carouselRight').animate({
            //     top: '+=' + itemHight,
            // })
            // console.log(4 - index);

        // var speed = 0;
        // setInterval(function() {
        //     speed += 0.2;
        //     $('.carouselLeft').css({
        //         opacity: 1 * speed
        //     });
        //     if ($('.box').css("opacity") == 1) {
        //         $('.box').hide();
        //     }
        // }, 1000);

        // if (index == 0) {
        //     $('.carouselLeft').css({ top: -itemHight * 3 })
        //     $('.carouselRight').css({ top: -imgHeight * 3 })
        //     isLockUp = false;


        // }


        // return index;
        // console.log(1);
        // event.preventDefault();
        // if (isLockUp) {
        //     return;
        // }
        // isLockUp = true;
        // // carouselInner.animate({
        // //     left: '+=' + len,
        // // }, function() {
        // //     index++;
        // // })
        // // item.eq(index).hide();
        // item.eq(index - 1).fadeOut(100);
        // item.eq(index).fadeIn();
        // index--;
        // isLockUp = false;
        // // if (index == 5) {
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