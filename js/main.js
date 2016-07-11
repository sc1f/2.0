'use strict';

var helpers = {
    debounce: function debounce(func, wait, immediate) {
        var timeout;
        return function() {
            var context = this,
                args = arguments;
            var later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    }
};

var jumbotron = {
    init : function(e, i) {
        if (e) {
            var delay = 0;
            $(i).each(function(){
                $(this).delay(delay).addClass('fadeIn');
                delay+=50;
            });
            console.log(delay);
        } else {
            console.log('ya sure fucked up.');
        }
    }
};

var mobile_nav = {
    init: function(e, i){
        $(e).click(function(){
            $(e).toggleClass('spin');
            $(i).toggleClass('flex');
        });
        //slidedown
    }
}

$(document).ready(function() {
    $('.nav').each(function(i) {
        $(this).delay((i++) * 50).fadeTo(500, 1);
    });
    jumbotron.init('.jumbotron-container', '.jumbotron-item');
    mobile_nav.init('.nav-mobile-toggle', '.navbar-section.navigation.mobile');

});

/* TODO: cron jobs for compression of images, gzipping files for server, serverside maintenance */