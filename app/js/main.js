"use strict";

$(document).ready(function(){

    _moduleToTop.action();

});

var _moduleToTop = (function(){

    var scroll = $(".up"),
        top = 300,
        delay = 800;
    return {
        action: function(){
            scroll.fadeOut();
            $(window).on("scroll",function() {
                if($(window).scrollTop() >= top) {
                    scroll.fadeIn();
                } else {
                    scroll.fadeOut();
                }
            });
            scroll.on("click",function(e) {
                e.preventDefault();
                $('body,html').animate(
                    {scrollTop:0},
                    delay
                );
            });
        }
    }
})();
// _moduleToTop