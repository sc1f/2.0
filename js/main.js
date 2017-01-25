'use strict';

var helpers = {
    debounce: function debounce(func, wait, immediate) {
        var timeout;
        return function () {
            var context = this,
                args = arguments;
            var later = function () {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    },
    visibility: (function ($) {

        /**
         * Copyright 2012, Digital Fusion
         * Licensed under the MIT license.
         * http://teamdf.com/jquery-plugins/license/
         *
         * @author Sam Sehnert
         * @desc A small plugin that checks whether elements are within
         *       the user visible viewport of a web browser.
         *       only accounts for vertical position, not horizontal.
         */
        var $w = $(window);
        $.fn.visible = function (partial, hidden, direction) {

            if (this.length < 1)
                return;

            var $t = this.length > 1 ? this.eq(0) : this,
                t = $t.get(0),
                vpWidth = $w.width(),
                vpHeight = $w.height(),
                direction = (direction) ? direction : 'both',
                clientSize = hidden === true ? t.offsetWidth * t.offsetHeight : true;

            if (typeof t.getBoundingClientRect === 'function') {

                // Use this native browser method, if available.
                var rec = t.getBoundingClientRect(),
                    tViz = rec.top >= 0 && rec.top < vpHeight,
                    bViz = rec.bottom > 0 && rec.bottom <= vpHeight,
                    lViz = rec.left >= 0 && rec.left < vpWidth,
                    rViz = rec.right > 0 && rec.right <= vpWidth,
                    vVisible = partial ? tViz || bViz : tViz && bViz,
                    hVisible = partial ? lViz || rViz : lViz && rViz;

                if (direction === 'both')
                    return clientSize && vVisible && hVisible;
                else if (direction === 'vertical')
                    return clientSize && vVisible;
                else if (direction === 'horizontal')
                    return clientSize && hVisible;
            } else {

                var viewTop = $w.scrollTop(),
                    viewBottom = viewTop + vpHeight,
                    viewLeft = $w.scrollLeft(),
                    viewRight = viewLeft + vpWidth,
                    offset = $t.offset(),
                    _top = offset.top,
                    _bottom = _top + $t.height(),
                    _left = offset.left,
                    _right = _left + $t.width(),
                    compareTop = partial === true ? _bottom : _top,
                    compareBottom = partial === true ? _top : _bottom,
                    compareLeft = partial === true ? _right : _left,
                    compareRight = partial === true ? _left : _right;

                if (direction === 'both')
                    return !!clientSize && ((compareBottom <= viewBottom) && (compareTop >= viewTop)) && ((compareRight <= viewRight) && (compareLeft >= viewLeft));
                else if (direction === 'vertical')
                    return !!clientSize && ((compareBottom <= viewBottom) && (compareTop >= viewTop));
                else if (direction === 'horizontal')
                    return !!clientSize && ((compareRight <= viewRight) && (compareLeft >= viewLeft));
            }
        };

    })(jQuery)
};

var homepageControl = {
    init: function(control, element, child) {
        //hide all on load
        $(element).hide();
        $(control).click(function() {
            // change text based on visibility
            var txt = $(element).is(':visible') ? 'See More' : 'See Less';
            $(control).text(txt); // apply
            $(element + ' > ' + child).find('img').each(function() {
                $(this).attr("src", $(this).data("src")); // load images by placing 'data-src' into 'src'
            });
            $(element).slideToggle();
        });
    },
    toTop: function(jumbotron, trigger){
        if(jumbotron){
            if($(jumbotron).visible(true)) {
                $(trigger).css('display', 'none');
            }
            helpers.debounce($(document).scroll(function(){
                if ($(jumbotron).visible(true)) {
                    $(trigger).css('display', 'none');
                } else {
                    $(trigger).css('display', 'initial');
                }
            }), 200, true);
        } else {
            helpers.debounce($(document).scroll(function(){
                if ($(window).scrollTop() == 0) {
                    $(trigger).css('display', 'none')
                } else {
                    $(trigger).css('display', 'initial');
                }
            }), 200, true);
        }

        $(trigger).click(function() {
            $("html, body").animate({ scrollTop: 0 }, 400);
            return false;
        });
    }
}


$(document).ready(function() {
    $('.jumbotron__element--wrapper').css('display', 'flex');
    var jumbo = "#jumbotron__item--biography--dynamic";
    // init flexibility
    flexibility(document.body);
    // init wow
    new WOW().init({
        mobile: false
    });
    // dev info
    console.log('Welcome to my portfolio site!\n\nIf you\'re reading this, you\'re probably interested in the technical details:\n \n* This site was built with Jekyll.\n* The server is configured to use SSL and HTTP2, with a certificate from Let\'s Encrypt.\n* Enjoy!');
    // homepage jumbotron typed
    if (jumbo) {
        $(jumbo).typed({
            strings: ["design.", "code.", "communicate.", "photograph.", "build.", "create."],
            typeSpeed: 1,
            loop: true
        });
    }
    // init controls
    homepageControl.init('.homepage__item--action.design', '.homepage__item--list.design', '.homepage__item--detail');
    homepageControl.init('.homepage__item--action.code', '.homepage__item--list.code', '.homepage__item--detail');
    homepageControl.init('.homepage__item--action.photo', '.homepage__item--list.photo', '.homepage__item--detail');
    homepageControl.toTop('.jumbotron__element--name', '#to-top');

});