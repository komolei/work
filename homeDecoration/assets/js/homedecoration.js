// 弹窗
var fixboxP = $(".fix-flexbox-p");
var up = $(".up");
var flexbox = $(".fix-flexbox");
var isLockUp = false;
up.on("click", function() {
    flexbox.slideUp(function() {
        $(".fix-flexbox-p .icon").css({
            opacity: 1
        })
    });

})
fixboxP.on("click", function() {
    flexbox.slideDown();
    $(".fix-flexbox-p .icon").css({
        opacity: 0
    })
})
console.log(up);


// 工装 有问题 等等有空去优化一下
var first = $(".gongzhuang-content .first");
var second = $(".gongzhuang-content .second");
var third = $(".gongzhuang-content .third");
var first1 = $(".absolute .first1");
var second1 = $(".absolute .second1");
var third1 = $(".absolute .third1");
console.log(first1, "gg");

// var first1 = first.clone();
// console.log("clone", first1);
first1.on("mouseover", function() {
    // first1.css({
    //         display: "hidden"
    //     })
    first1.has("img").css({
            // opacity: 0,
        })
        // first1.css;
    first1.animate({
            // height: "660px",
            // width: "100%",
            // marginTop: "-30px",
        })
        // var first1Width = first1.width();
        // first.width(first1Width);

    first.has("img").css({
            // width: "34%",
            height: "660px",
            bordre: "1px solid red"
        })
        // first1.width(first.width());

    second1.css({

    })
})
first1.on("mouseleave", function() {
        first.has("img").css({
            opacity: 1,
        })
        first.animate({
            // height: "660px",
            // width: "100%",
            marginTop: "0px",

        })
    })
    // first1.on("mouseover", function() {
    //     console.log(1);
    //     $(".gongzhuang-content .second div").eq(0).css({
    //         opacity: .3,
    //         marginTop: "15px",

//     })
//     $(".gongzhuang-content .second img").animate({
//         height: "600px",
//         width: "100%",

//     })
//     $(".gongzhuang-content .first img").animate({
//         height: "660px",
//         // width: "125%"

//     })
//     $(".gongzhuang-content .first div").eq(0).css({
//         opacity: 1,
//         marginTop: "-30px",

//     })

// })
// first.on("mouseleave", function() {
//     $(".gongzhuang-content .first div").eq(0).css({
//         opacity: .3,
//         marginTop: "15px",


//     })
//     $(".gongzhuang-content .first img").animate({
//         height: "600px",
//         width: "100%",

//     })
//     $(".gongzhuang-content .second img").animate({
//         height: "660px",
//         // width: "125%"

//     })
//     $(".gongzhuang-content .second div").eq(0).css({
//         opacity: 1,
//         marginTop: "-15px",
//         // height: "630px"

//     })
// })
// second.on("mouseover", function() {
//     $(".gongzhuang-content .second div").eq(0).css({
//         opacity: 1,
//         marginTop: "-15px",

//     })
//     $(".gongzhuang-content .second img").animate({
//         height: "660px",
//         width: "100%",

//     })
//     $(".gongzhuang-content .third img").animate({
//         height: "600px",
//         // width: "125%"

//     })
//     $(".gongzhuang-content .third div").eq(0).css({
//         opacity: .3,
//         marginTop: "0px",

//     })
// })
// third.on("mouseover", function() {
//     $(".gongzhuang-content .second div").eq(0).css({
//         opacity: .3,
//         marginTop: "15px",

//     })
//     $(".gongzhuang-content .second img").animate({
//         height: "600px",
//         width: "100%",

//     })
//     $(".gongzhuang-content .third img").animate({
//         height: "660px",
//         // width: "125%"

//     })
//     $(".gongzhuang-content .third div").eq(0).css({
//         opacity: 1,
//         marginTop: "-30px",

//     })
// })
// third.on("mouseleave", function() {
//     $(".gongzhuang-content .third div").eq(0).css({
//         opacity: .3,
//         marginTop: "0px",

//     })
//     $(".gongzhuang-content .third img").animate({
//         height: "600px",
//         width: "100%",

//     })
//     $(".gongzhuang-content .second img").animate({
//         height: "660px",
//         // width: "125%"

//     })
//     $(".gongzhuang-content .second div").eq(0).css({
//         opacity: 1,
//         marginTop: "-15px",
//         // height: "630px"

//     })
// })


// yikefnegshui 's img  其位子设定为靠左的。
var yikefengshuiImg = $(".yikefengshui-xiangqing-img");
var yikefengshuiImage = $(".yikefengshui-xiangqing-img img");

var text = $(".text");

// console.log(text);
var imgResize = function() {
    yikefengshuiImg.height(yikefengshuiImg.width());
    // yikefengshuiImg.width(yikefengshuiImg.height());
}
imgResize();

$(window).resize(function() {
    // console.log(topHeight);

    var topHeight = text.height() * 0.5;
    if ($(this).width() < 641) {
        imgResize();
        yikefengshuiImg.css({
            marginTop: topHeight,
        })
    } else if ($(this).width() < 1024) {
        yikefengshuiImg.css({
            marginTop: 0,
            top: 0,
        })
    } else {
        yikefengshuiImg.css({
            marginTop: 0,

        })
    }
})

//gongyi右边图片对称