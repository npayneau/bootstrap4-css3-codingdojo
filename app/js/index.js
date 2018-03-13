import "./imports";

(function () {
    'use strict';
    $(window).scroll(function () {
        // Fade background color in .navbar
        /*if ($(this).scrollTop() > 60) {
            $('.navbar').addClass('navbar-custom-fixed');
            $('#profile-item .dropdown-menu').addClass('dropdown-menu-scroll');
        } else {
            $('.navbar').removeClass('navbar-custom-fixed');
            $('#profile-item .dropdown-menu').removeClass('dropdown-menu-scroll');
        }*/

        //Parallax
       /* var $scroll = $('#header');
        if ($scroll) {
            // get scroll position and divide by speed ratio
            var yPos = -($(window).scrollTop() / 2);
            // background position
            var coords = '50% calc(50% + ' + yPos + 'px)';
            // move the background
            $scroll.css({ backgroundPosition: coords });
        }*/
    });

    // Animation on scroll navbar link
    /*$('a.page-scroll').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top - 40
                }, 900);
                return false;
            }
        }
    });*/

    //Custom Bootstrap validation and manage propagaton event
    /*window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);*/

    //Manage tooltip
    //$('[data-toggle="tooltip"]').tooltip();
})();