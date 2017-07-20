(function($) {
    'use strict';

    $(function() {
        var $fullText = $('.admin-fullText');
        $('#admin-fullscreen').on('click', function() {
            $.AMUI.fullscreen.toggle();
        });

        $(document).on($.AMUI.fullscreen.raw.fullscreenchange, function() {
            $fullText.text($.AMUI.fullscreen.isFullscreen ? '退出全屏' : '开启全屏');
        });
    });
})(jQuery);


$('.am-slider').flexslider();

// 文字居中
var addHeight = $('.addHeight');
console.log(addHeight);

function textMiddle() {
    // console.log($(this).width())

    if ($(this).width() > 960) {
        addHeight.each(function() {
            $(this).addClass("am-margin-top-sm")
        })

    } else {
        addHeight.each(function() {
            $(this).removeClass("am-margin-top-sm")
        })
    }
}
textMiddle();
// $(window).ready(textMiddle)
// $(window).load(textMiddle)
$(window).resize(textMiddle);

//相关css调整
! function() {
    var windowWidth = $(window).width();

    if (windowWidth < 632) {
        // $(".nav header").css("maxWidth", "100%")
        $("#erweima").css("width", "50%", "float", "left")
        $("#erweima1").css("width", "50%");
        // $("#")

    } else {
        $("#erweima").css("width", "100%")
        $("#erweima1").css("width", "100%");
    }

}()

$(window).resize(function() {
        var windowWidth = $(window).width();
        if (windowWidth < 767) {
            $("#contentContainer > div")
                .css("width", "100%")
        } else {
            $("#contentContainer > div")
                .css("width", "66.6667%")

            // $(".am-collapse").css()
        }
        if (windowWidth < 1024) {
            $(".nav header").css("maxWidth", "100%")
            $(".am-topbar-right").css({ display: "none" })
                // $("#container-right").css({ display: "none" })
        } else {
            $(".nav header").css("maxWidth", "66.6667%")
            $(".am-topbar-right").css({ display: "block" })
                // $("#container-right").css({ display: "block" })

        }
        if (windowWidth > 632 && windowWidth < 750) {
            // $(".nav header").css("maxWidth", "100%")
            $(".am-topbar-right").css({ display: "none" })

        } else {
            // $(".nav header").css("maxWidth", "66.6667%")
            $(".am-topbar-right").css({ display: "block" })

        }
        if (windowWidth < 687) {
            $("#signUp").css("margin", "0 auto")
        } else {
            $("#signUp").css("margin", "5px 5px 0 15px;")

        }
        if (windowWidth < 632) {
            // $(".nav header").css("maxWidth", "100%")
            $("#erweima").css("width", "50%", "float", "left")
            $("#erweima1").css("width", "50%");
            // $("#")

        } else {
            $("#erweima").css("width", "100%")
            $("#erweima1").css("width", "100%");
        }
    })
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

    })

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

    })
}
// carousel();

//懒加载

function isVisible($node) {
    var windowH = $(window).height();
    var st = $(window).scrollTop();
    var ot = $node.offset().top;
    var nodeH = $node.outerHeight();
    if (ot < windowH + st && st < ot + nodeH) {
        return true;
        // show($(this));
    } else {
        return false;
    }
}

function show() {
    $.ajax({
        url: "",
        dataType: 'json',
        type: 'get',
        data: '',
    }).done(function(data) {
        console.log(data);
        var div = $('<div class="container-box">' +
            '<a href=' + data.link + ' class="am-inline" id="photo-a">' + '<img src=' + data.link + ' alt="" style="width:32px;height:32px;border-radius:50%"></a>' +
            '<span class="am-text-sm am-margin-right-sm">' + data.author + '</span><span class="am-link-muted am-text-sm">' + data.time + '</span>' +
            '<a href=' + data.link + ' class="am-text-primary am-link-muted am-text-lg am-block" style="padding:.4rem 0">' + data.link + '</a>' +
            '<ul class="am-g am-padding-0">' +
            '<li class="am-u-sm-8 " id="addHeight">' +
            '<p class="line-clamp" style="padding:0">' +
            data.text +
            '</p>' +
            '</li>' +
            '<li class="am-u-sm-3 am-thumbnail">' + '<img class="am-thumbnail" src=' + data.link + ' alt="">' + '</li>' +
            '</ul>' +
            '<div class="meta">' +
            '<a class="am-btn-danger am-radius" target="_blank" href=' + data.link + '>' + data.iconText + '</a>' +
            '<a target="_blank" href=' + data.link + '>' +
            '<span class="am-icon-eye"> ' + data.watchNumber + '</span>' +
            '</a>' +
            '<a target="_blank" href=' + data.link + '>' +
            '<span class="am-icon-comment">' + data.commetNumber +
            '</span>' +
            '</a>' + '<span class="am-icon-heart">' + data.likeNumber +
            '</span>' +
            '<span class="am-icon-jpy">' + data.loveNumber +
            '</span>' +
            '</div>');
        var add = $('<div>' + data.date + '</div>')
            // console.log(data.date);
        $("#lazyLoad").append(add);
    }).fail(function(error) {
        console.log(error)
    })
}
$('#lazyLoad>li').each(function() {
        if (isVisible($(this))) {
            show($(this))
        }
    })
    // ajax
$('#ajax').on('click', function() {
    $.ajax({
        url: "",
        dataType: 'json',
        type: 'get',
        data: '',
    }).done(function(data) {
        var results = data; //数组形式
        for (var key in results) {
            key.foreach(function(element) {
                    var li = $('<li class="am-u-sm-12  am-u-md-12 am-u-lg-12">' + '<div class="container-box">' +
                        '<a href=' + JSON.stringify(element.link) + ' class="am-inline" id="photo-a">' + '<img src=' + JSON.stringify(element.link) + ' alt="" style="width:32px;height:32px;border-radius:50%"></a>' +
                        '<span class="am-text-sm am-margin-right-sm">' + JSON.stringify(element.author) + '</span><span class="am-link-muted am-text-sm">' + JSON.stringify(element.time) + '</span>' +
                        '<a href=' + JSON.stringify(element.link) + ' class="am-text-primary am-link-muted am-text-lg am-block" style="padding:.4rem 0">' + JSON.stringify(element.link) + '</a>' +
                        '<ul class="am-g am-padding-0">' +
                        '<li class="am-u-sm-8 " id="addHeight">' +
                        '<p class="line-clamp" style="padding:0">' +
                        JSON.stringify(element.text) +
                        '</p>' +
                        '</li>' +
                        '<li class="am-u-sm-3 am-thumbnail">' + '<img class="am-thumbnail" src=' + JSON.stringify(element.link) + ' alt="">' + '</li>' +
                        '</ul>' +
                        '<div class="meta">' +
                        '<a class="am-btn-danger am-radius" target="_blank" href=' + JSON.stringify(element.link) + '>' + JSON.stringify(element.iconText) + '</a>' +
                        '<a target="_blank" href=' + JSON.stringify(element.link) + '>' +
                        '<span class="am-icon-eye"> ' + JSON.stringify(element.watchNumber) + '</span>' +
                        '</a>' +
                        '<a target="_blank" href=' + JSON.stringify(element.link) + '>' +
                        '<span class="am-icon-comment">' +
                        JSON.stringify(element.commetNumber) + '</span>' +
                        '</a>' + '<span class="am-icon-heart">' +
                        JSON.stringify(element.likeNumber) + '</span>' +
                        '<span class="am-icon-jpy">' +
                        JSON.stringify(element.loveNumber) + '</span>' +
                        '</div>' +
                        '</div>' +
                        '</li>')
                    $('#ajax').prepend(li);
                },
                this);
        }

    }).fail(function(error) {
        console.log(error)
    })
})

//goTop
$('#goTop').on('mouseover', function() {

})

// 去掉index的右侧内容区域
var containerLeft = $('#container-left');
var containerRight = $('#container-right');

function cancel() {
    if ($(this).width() < 640) {
        // containerRight.css({ display: "none" });
        containerLeft.removeClass("am-u-sm-8 am-u-md-8 am-u-lg-8");
        containerLeft.addClass("am-u-sm-12 am-u-md-12 am-u-lg-12");

    } else {
        containerRight.css({ display: "block" });
        containerLeft.removeClass("am-u-sm-12 am-u-md-12 am-u-lg-12");
        containerLeft.addClass("am-u-sm-8 am-u-md-8 am-u-lg-8");

    }
}
// cancel();
$(window).resize(cancel)

//查看推荐作者,发送ajax,请求五条数据
var number = $('.number');
var i = 1;
number.text(i);

function dataUse(data) {
    var ul = $('<ul class="am-padding-0"></ul>');
    var recommendOfAuthor = $('#recommendOfAuthor');
    var containerOfAuthor = $('.containerOfAuthor');
    $(data).each(function(index) {
        var li = $(
            '<li>' +
            '<ul class="am-cf containerOfAuthor-ul am-padding-0 am-u-sm-12">' +
            '<li class="am-circle am-fl am-margin-right-sm ">' + '<img class="am-img-thumbnail am-circle " src=' + $(this).imgLink + ' alt="">' +
            '</li>' +
            '<li class="am-fr">' +
            '<a class="am-icon-plus am-text-success" href=' + $(this).linkOfFollow + ' target="_blank"> ' +
            "关注" + '</a>' +
            '</li>' +
            '<li class="am-padding-0">' +
            '<a href="#" target="_blank">' +
            '<span class="am-padding-0 am-margin-0 am-block am-text-truncate am-text-primary am-padding-bottom-sm am-text-xs">' +
            $(this).name + '</span>' +
            '</a>' +
            '<a href="#" target="_blank">' +
            '<span class="am-text-xs am-text-truncate am-block am-margin-top-xs">' +
            $(this).ArticleTitle + '</span>' +
            '</a>' +
            '</li>' +
            '</ul>' +
            '</li>'
        );
        ul.append(li);
    })
    containerOfAuthor.html(ul); //有可能有慢。。
};
$('.lt').on('click', function() {
    if (i <= 1) {
        return
    }
    number.text(--i);
    // console.log(i);
    $.ajax({
        url: "",
        dataType: "json",
        type: 'get',
        data: "",
        success: function(data) {
            dataUse(data);
        },
        error: function(error) {
            console.log(error)
        }
    })

});
$('.gt').on('click', function() {

    number.text(++i);
    // console.log("I:", i);
    $.ajax({
        url: "",
        dataType: 'json',
        type: 'get',
        data: '',
        success: function(data) {
            // console.log(data);
            dataUse(data);
        },
        error: function(error) {
            console.log(error)
        }
    })
})

//author

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

// shareMore.on('mouseleave', function() {
//         shareList.css({ display: "none" })

//     })

//share-right module 换行
// var shareRight=$('shareRight');
// use css control