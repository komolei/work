//dropList 

var dropListSpan = $('.dropList > span:first-of-type');
var dropListUl = $(".dropList-ul");
var dropList = $('.dropList');
var thirdBtn = $('.thirdBtn');
var thirdDropList = $('.thirdDropList')
    // dropListSpan.each(function(index, el) {
    //     $(this).on("mouseover", function(e) {
    //         if (e.target.tagName.toLowerCase() == "span") {
    //             dropListUl.eq(index).css({
    //                 display: "block"
    //             })
    //         }
    //     })
    // })
    // console.log(dropListSpan);
    // dropListSpan.on('mouseover', function(e) {
    //     console.log("e.target:", e.target);
    //     if (e.target.tagName.toLowerCase() == "span") {
    //         dropListUl.css({
    //             display: "block"
    //         })
    //     }

// })
dropList.each(function(index, el) {
        var _this = this;
        var index = index;
        // console.log(el);
        $(el).on('mouseover', function(e) {
            console.log(e.target)
            if ($(e.target).has("thirdBtn")) {
                $(e.target).children().show();
                // thirdBtn.on('mouseleave', function() {
                //     $(this).children().hide();
                // })
            }
            $(this).children().show();

        })
        $(el).on('mouseleave', function(e) {
                // console.log($(this).children(), "gg")
                // $(this).children().find("thirdDropList").hide();
                $(this).children().not("span:first-of-type").hide();
                // if ($(e.target).has("thirdBtn")) {
                //     $(e.target).children().hide();
                // }
                // $(this).children().hide();
                // console.log(index);
                // dropListUl.eq(index).css({
                //     display: 'none'
                // })
                thirdDropList.hide();

            })
            //third DropList

    })
    // thirdBtn.each(function(index, el) {
    //         $(el).on('mouseleave', function() {
    //             $(this).children().hide();
    //             // $(this).children().not("span:first-of-type").hide();
    //         })
    //     })
    // dropList.on('mouseleave', function(e) {
    //     // if (e.target.tagName.toLowerCase() == "span") {

//     // }
//     dropListUl.css({
//         display: "none"
//     })
// })