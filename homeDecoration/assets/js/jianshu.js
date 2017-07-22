textHight = $('.container-box');
imgHight = $('.img-height>img');
erweimaText = $("#erweimaText");
erweima = $("#erweima")
erweimaHeight = erweima.height();
// window.onload(

//     function() {
//         imgHight.height(textHight.height())
//     }
// )
function imgH() {
    imgHight.each(function() {
        $(this).height(textHight.height());
        // $(this).width(textHight.height() * 2.5)
    })
}
imgH();
$(window).resize(imgH)

//carousel

//得到高度
function carouselHeight() {
    var windowWidth = $(window).width();
    var carouselInner = $('.carousel-inner2');
    var itemHight = $('.item').height();
    var banner = $('.item >.banner')
    console.log("carouselH", itemHight, "windowWidth", windowWidth);
    carouselInner.css({
            height: itemHight,
        })
        // console.log("width", carouselInner.css("width"), ",height", windowWidth);
    var len = carouselInner.width();
    var len1 = banner.width();
    var carouselLeftWidth = $(".carouselLeftWidth").width();
    var carouselRightWidth = $(".carouselRightWidth").width();
    var len = carouselLeftWidth + carouselRightWidth;
    console.log("var len = carouselLeftWidth + carouselRightWidth", len1);
    // console.log("len::", len);
    carouselInner.width(carouselInner.children().length * len);
    // carouselInner.width(len);
    // carouselInner.height(itemHight);


}
// var carouselRight = $('.carouselRight');
// console.log(carouselRight);
// window.onload = function() {
//         carouselHeight();
//     }
//     // carouselHeight();
// $(window).resize(function() {
//     if ($(window).width() < 641) {
//         console.log("ggg")
//         carouselRight.css({
//             // border: "1px solid red"
//             display: "none"
//         });
//     } else {
//         carouselRight.show();
//         carouselHeight();

//     }
//     // carousel();
// });
// carousel();


//重写 兼容safari的写法

// carouselHeight();
window.onload = function() {
    var carouselLeft = $(".carouselLeft");
    var carouselRight = $('.carouselRight');
    var carouselInner = $('.carousel-inner2');

    if ($(window).width() < 641) {
        // $('.carouselRight').eq(0).css({
        //     display: "none"
        // });
        carouselRight.hide();
        // carouselInner.width(carouselLeftWidth);
        // carouselLeftWidth.css({
        //     width: "100%",
        // })
        carouselLeft.removeClass("am-u-sm-8")
        carouselLeft.addClass("am-u-sm-12")

    } else {
        carouselRight.show();
        carouselLeft.removeClass("am-u-sm-12")
        carouselLeft.addClass("am-u-sm-8")
            // carouselHeight();
    }
    carouselHeight();
    carousel();

}
$(window).resize(function() {
    carouselHeight();
    var carouselRight = $('.carouselRight');
    var carouselLeft = $(".carouselLeft");

    if ($(window).width() < 641) {
        // $('.carouselRight').eq(0).css({
        //     display: "none"
        // });
        carouselRight.hide();
        carouselHeight();
        carouselLeft.removeClass("am-u-sm-8")
        carouselLeft.addClass("am-u-sm-12")
    } else {
        carouselRight.show();
        carouselLeft.removeClass("am-u-sm-12")
        carouselLeft.addClass("am-u-sm-8")
            // carouselHeight();
    }
    // carousel();
});
// carousel();

function carousel() {
    var carouselInner = $('.carousel-inner2');
    var carouselInnerWidth = $(".carousel-innner2").width();
    var carouselControlPre = $('.carousel-control.pre');
    var carouselControlNext = $('.carousel-control.next');
    var isLockUp = false;
    var item = $('.item');
    var windowWidth = $(window).width();
    var itemHight = $('.item').height();
    var banner = $('.item >.banner')
        // var imgHeight = $(".item .banner").height();
    var len = carouselInner.width();
    carouselInner.width(carouselInner.children().length * len);
    var imgHeight = carouselInner.height();
    // console.log("img", $(".item .banner img").height())
    // carouselInnerWidth = windowWidth;
    // console.log(item);

    // var indexPre = 5;
    var index = 0;
    var itemIndex = 0;
    carouselControlNext.on('click', function(event) {
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

    })

    carouselControlPre.on('click', function(event) {
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

    })
}
// carousel();

// share more
var shareMore = $('#shareMore');
var shareList = $('.share-list');
shareMore.on('click', function() {
    shareList.css({ display: "block" })
        // var time=setTimeout(function() {
        //     shareList.css({ display: "none" })
        // }, 2000);
});
shareList.on("mouseleave", function() {
    $(this).hide();
})
shareList.on("touchend", function() {
    $(this).hide();
})