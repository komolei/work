// 弹窗
var fixboxP = $(".fix-flexbox-p");
var up = $(".up");
var flexbox = $(".fix-flexbox");
var isLockUp = false;
up.on("click", function() {
    flexbox.slideUp();
})
fixboxP.on("click", function() {
        flexbox.slideDown();
    })
    // console.log(up);


// 工装 有问题 等等有空去优化一下
var first = $(".gongzhuang-content .first");
var second = $(".gongzhuang-content .second");
var third = $(".gongzhuang-content .third");
console.log(first);
first.on("mouseover", function() {
    console.log(1);
    $(".gongzhuang-content .second div").eq(0).css({
        opacity: .3,
        marginTop: "15px",

    })
    $(".gongzhuang-content .second img").animate({
        height: "600px",
        width: "100%",

    })
    $(".gongzhuang-content .first img").animate({
        height: "660px",
        // width: "125%"

    })
    $(".gongzhuang-content .first div").eq(0).css({
        opacity: 1,
        marginTop: "-30px",

    })

})
first.on("mouseleave", function() {
    $(".gongzhuang-content .first div").eq(0).css({
        opacity: .3,
        marginTop: "15px",

    })
    $(".gongzhuang-content .first img").animate({
        height: "600px",
        width: "100%",

    })
    $(".gongzhuang-content .second img").animate({
        height: "660px",
        // width: "125%"

    })
    $(".gongzhuang-content .second div").eq(0).css({
        opacity: 1,
        marginTop: "-15px",
        // height: "630px"

    })
})
second.on("mouseover", function() {
    $(".gongzhuang-content .second div").eq(0).css({
        opacity: 1,
        marginTop: "-15px",

    })
    $(".gongzhuang-content .second img").animate({
        height: "660px",
        width: "100%",

    })
    $(".gongzhuang-content .third img").animate({
        height: "600px",
        // width: "125%"

    })
    $(".gongzhuang-content .third div").eq(0).css({
        opacity: .3,
        marginTop: "0px",

    })
})
third.on("mouseover", function() {
    $(".gongzhuang-content .second div").eq(0).css({
        opacity: .3,
        marginTop: "15px",

    })
    $(".gongzhuang-content .second img").animate({
        height: "600px",
        width: "100%",

    })
    $(".gongzhuang-content .third img").animate({
        height: "660px",
        // width: "125%"

    })
    $(".gongzhuang-content .third div").eq(0).css({
        opacity: 1,
        marginTop: "-30px",

    })
})
third.on("mouseleave", function() {
    $(".gongzhuang-content .third div").eq(0).css({
        opacity: .3,
        marginTop: "0px",

    })
    $(".gongzhuang-content .third img").animate({
        height: "600px",
        width: "100%",

    })
    $(".gongzhuang-content .second img").animate({
        height: "660px",
        // width: "125%"

    })
    $(".gongzhuang-content .second div").eq(0).css({
        opacity: 1,
        marginTop: "-15px",
        // height: "630px"

    })
})