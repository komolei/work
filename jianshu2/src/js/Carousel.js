//Carousle

var Carousel = function(carousel) {
    // this.len = $(window).width();
    this.carousel = carousel;
    this.init();
    this.bind();
}
Carousel.prototype.init = function() {
    var btnnext = this.btnnext = this.carousel.find('.btn-next');
    var btnpre = this.btnpre = this.carousel.find('.btn-pre');
    var ctimgli = this.ctimgli = this.carousel.find('.ct-img li');
    var ctimg = this.ctimg = this.carousel.find('.ct-img');
    var index = this.index = 0;
    var bullet = this.bullet = this.carousel.find('.bullet');
    // var len = this.len = $(window).width();
    var img = this.img = this.carousel.find('img');
    var isLockUp = this.isLockUp = false;
    ctimg.append(ctimgli.first().clone());
    ctimg.prepend(ctimgli.last().clone());

}
Carousel.prototype.WindowWidth = function() {
    var _this = this;
    this.len = $(window).width();
    this.ctimg.css('left', -_this.len);
    this.ctimg.width(_this.ctimg.children().length * _this.len);
    // $(window).resize(function() {
    //     // console.log("22")
    //     _this.len = $(window).width();
    //     console.log("_this.len:", _this.len)
    //     return _this.len;
    // })
    console.log("_this.lenss:", this.len)
};

Carousel.prototype.bind = function() {
    var _this = this;
    // var len = this.len = $(window).width();
    // this.len = this.WindowWidth();//要死的写法。mmp哟。回想起了原型链的相关。太久没有写。都要忘记了。。。
    this.WindowWidth()
        // $(window).resize(this.WindowWidth)
        // console.log("this.lendddd:", _this.len)

    this.carousel.width(_this.len)
        // this.ctimgli.width(this.len)
    $('.ct-img li').width(_this.len);
    this.img.width(_this.len);
    this.img.width(_this.len);
    // this.ctimg.width(this.len);
    // console.log(this.carousel.find('img').width(), "gg")
    this.btnnext.click(function() {
        event.preventDefault();
        if (_this.isLockUp) {
            return;
        }
        _this.isLockUp = true;
        _this.ctimg.animate({
            left: '-=' + _this.len,
        }, function() {
            _this.index++;
            if (_this.index == _this.ctimgli.length) {
                _this.index = 0;
                _this.ctimg.css('left', -_this.len + 'px');
            }
            setBullet.call(_this);
            _this.isLockUp = false;
        })
    })
    this.btnpre.click(function() {
        if (_this.isLockUp) return;
        event.preventDefault();
        _this.ctimg.animate({
            left: '+=' + _this.len,
        }, function() {
            _this.index--;
            if (_this.index < 0) {
                _this.ctimg.css('left', -(_this.ctimgli.length * _this.ctimgli.width()))
                _this.index = _this.ctimgli.length - 1;
            }
            _this.isLockUp = false;

            setBullet.bind(_this)();
        })
    })

    function setBullet() {
        this.bullet.children().removeClass('active')
            .eq(this.index)
            .addClass('active');
    }
}


module.exports = Carousel;