$(document).ready(function() {
    $('.sidebar__item').on('click', function() {
        let currentEl;
        $('.sidebar__item').each((_, el) => {
            if($(el).hasClass('active')) {
                currentEl = el;
            }
            $(el).removeClass('active');
        });
        if ($(this).attr('data-id') === $(currentEl).attr('data-id')) {
            $('.aside__nav').toggleClass('active');
        } else {
            $('.aside__nav').addClass('active');
        }
        $(this).addClass('active');
    });

    $('.zoom__control').on('click', function() {
        $('.zoom__control').each((i, el) => {
            $(el).removeClass('active');
        });
        $(this).addClass('active');

        if($(this).attr('data-zoom-id') == 1) {
            $('.img-zoom').css('cursor', 'zoom-in');
        } else {
            $('.img-zoom').css('cursor', 'zoom-out');
        }
    });

    // zoom 
    $('.img-zoom').on('click', function() {
        const currentZoom = +$(this).attr('data-zoom');
        if ($(this).css('cursor') == 'zoom-in' && currentZoom < 3.9) {
            $(this).attr('data-zoom', currentZoom + 0.2);
            $(this).css('transform', `scale(${ currentZoom + 0.2 })`);
        }

        if ($(this).css('cursor') == 'zoom-out' && currentZoom > 0.8) {
            $(this).attr('data-zoom', currentZoom - 0.2);
            $(this).css('transform', `scale(${ currentZoom - 0.2 })`);
        }
        // if (currentZoom < 3.9 && ) {
        //     $(this).attr('data-zoom', currentZoom + 0.5);
        //     $(this).css('transform', `scale(${ currentZoom + 0.5 })`);
        // } else {
        //     $(this).attr('data-zoom', currentZoom - 0.5);
        //     $(this).css('transform', `scale(${ currentZoom - 0.5 })`);
        //     if (currentZoom === 4) {
        //         $(this).css('cursor', 'zoom-in');
        //     }
        // }
    })
});