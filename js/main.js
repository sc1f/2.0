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

var homepageControl = {
    init: function(control, element) {
        $(element).hide();
        $(control).click(function() {
            if($(element).css('display') === 'none') {
                $(element).slideDown();
            } else if ($(element).css('display') !== 'none') {
                $(element).slideUp();
            }
        });
    }
}


$(document).ready(function() {
    console.log('Welcome to my portfolio site!\n\nIf you\'re reading this, you\'re probably interested in the technical details:\n \n* This site was built with Jekyll.');
    $("#jumbotron__item--biography--dynamic").typed({
        strings: ["design.", "code.", "communicate.", "photograph.", "build."],
        typeSpeed: 5,
        loop: true
    });
    homepageControl.init('.homepage__item--action.design', '.homepage__item--list.design');
});

/* TODO: cron jobs for compression of images, gzipping files for server, serverside maintenance */