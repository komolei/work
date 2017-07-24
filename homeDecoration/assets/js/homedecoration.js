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


// 工装 有问题
var first = $(".gongzhuang-content .first");
var second = $(".gongzhuang-content .second");
var third = $(".gongzhuang-content .third");
console.log(first);
first.on("mouseover", function() {
    console.log(1);
    $(".gongzhuang-content .second div").css({
        opacity: .3,
        marginTop: "15px",

    })
    $(".gongzhuang-content .second img").animate({
        height: "600px",
        width: "100%",

    })
    $(".gongzhuang-content .first img").animate({
        height: "630px",
        // width: "125%"

    })
    $(".gongzhuang-content .first a>div").css({
        opacity: 1,
        marginTop: "15px",

    })

})