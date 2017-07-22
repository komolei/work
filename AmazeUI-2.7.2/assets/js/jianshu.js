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

    carouselInner.css({
            height: itemHight,
        })
        // console.log("width", carouselInner.css("width"), ",height", windowWidth);
    var len = carouselInner.width();
    // console.log("len::", len);
    carouselInner.width(carouselInner.children().length * len);
    // banner.height(itemHight)


    // $(this).one(carousel);
    // carousel();  
}

carouselHeight();
$(window).resize(function() {
    carouselHeight();
    // carousel();
});
carousel();


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
    console.log(imgHeight + "IMGH");
    // carouselInnerWidth = windowWidth;
    // console.log(item);

    // var indexPre = 5;
    var index = 0;
    var itemIndex = 0;
    carouselControlNext.on('click', function(e) {
        // var event = event;
        console.log(1);
        e.preventDefault();
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

    carouselControlPre.on('click', function(e) {
        // var event = event;
        e.preventDefault();
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