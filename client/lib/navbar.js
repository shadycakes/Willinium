/**
 * Created by Trevor on 3/23/2015.
 */

/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

switchContent = function(content) {
    if (typeof content != 'undefined') {
        switch (content) {
            case 'search':
                Session.set('contentMode', enumContent.SEARCH);
                break;
            case 'create':
                Session.set('contentMode', enumContent.CREATE);
                break;
            default:
                Session.set('contentMode', enumContent.SEARCH);
                break;
        }
    }

    console.log(Session.get('contentMode'));
};

// Meteor Startup - replaced $(document).ready
Meteor.startup(function () {
    // jQuery to collapse the navbar on scroll
    $(window).scroll(function() {
        if ($(".navbar").offset().top > 50) {
            $(".navbar-fixed-top").addClass("top-nav-collapse");
        } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
        }
    });

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $(function() {
        $('a.page-scroll').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });
});