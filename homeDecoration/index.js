// var $=require("jquery");
// doucument.body.innerHtml = $("<div>Hello World!</div>")
require('babel-polyfill');

console.log("gg");
let div = `<div>sss</div>`;
// $(window).html(div)
let fix = $('.fix-nav')
// fix.append(div);
// document.body.innerHTML = div;
//css
// import './assets/css/amazeui.min.css';
// import decoration from "./assets/css/decoration.css";
require('./assets/sass/text.scss');
require('./assets/sass/decoration.scss');
// require('./assets/less/text.less');

import Icon from './assets/img/icon.png'
import Logo from './assets/img/logo.jpg'