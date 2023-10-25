/*
** Add your JavaScript here
** You can activate and use VUE.js and AXIOS: https://typemill.net/theme-developers/helper-functions#activate-vuejs-and-axios
** Typemillutilities.js is included in index.twig for managing youtube-videos.
*/

$('#searchForm').appendTo('.navbar-nav');

// Wrap sections between h1, h2
$('.content').children().first()
    .nextUntil('h1,h2,footer').addBack()
    .wrapAll('<div class="section"></div>');
$('.content').children('h1,h2')
    .nextUntil('h1,h2,footer')
    .addBack()
    .wrapAll('<div class="section"></div>');

// Set images with alt=background as background-image
var i = 0;
$('.section').each(function () {
    var img = $(this).find('img[alt=background]');
    // console.log("Found " + img.length + " images in section " + i)
    if (img.length === 0) {
        $(this).addClass('section-card');
    }
    else if (i === 0) {
        // If image in first section, set as page bg
        $(this).addClass('page-bg');
        $('body').css('background-image', 'url(' + img.attr('src') + ')');
        if (img.parent().is('figure')) {
            img.parent().remove();
        } else {
            img.remove();
        }
    }
    else {
        // Else set as section bg
        $(this).addClass('section-card');
        $(this).css('background-image', 'url(' + img.attr('src') + ')');
        if (img.parent().is('figure')) {
            img.parent().remove();
        } else {
            img.remove();
        }
    }
    i++;
});

$(window).resize(function () {
    window.location.reload();
});