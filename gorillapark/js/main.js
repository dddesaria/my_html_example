
$(function () {
    
    //********************** Preloader progress
    $(window).on('load', function () {
        var preloader = $('#pre-loader');
        var spinner = $('#pre-progress');
        spinner.delay(300).fadeOut(300);
        preloader.delay(600).fadeOut(600);
    });

    $("#page-up").click(function () {
        $("html, body").animate({scrollTop: 0}, "slow");
        return false;
    });

    // $("a.scr-smooth").bind("click.smoothscroll",function (e) {
    //     e.preventDefault();
    //     var target = this.hash,
    //         $target = $(target);
    //     $('html, body').stop().animate({
    //         "scrollTop": $target.offset().top
    //     }, 600, "swing", function () {
    //         window.location.hash = target;
    //     });
    // });

    // $("select").selectOrDie({});


    // var toggles = document.querySelectorAll(".dev-toggle");
    //
    // for (var i = toggles.length - 1; i >= 0; i--) {
    //     var toggle = toggles[i];
    //     toggleHandler(toggle);
    // }
    //
    // function toggleHandler(toggle) {
    //     toggle.addEventListener( "click", function(e) {
    //         e.preventDefault();
    //         (this.classList.contains("active") === true) ? this.classList.remove("active") : this.classList.add("active");
    //     });
    // }

    // $(".dev-toggle-tab").click(function() {
    //     var content = $(this).data("detail");
    //     var container = $(this).parent(".dev-toggle-tabs").find(".dev-toggle-tabs-details");
    //     container.hide();
    //     getElementById(content).show();
    //     console.log(content);
    //     return false;
    // });

    $("#dev-collapse-toggle").click(function () {
        $(this).toggleClass("active");
        if ($("#dev-collapse-bar").hasClass("active")) {
            $("#dev-collapse-bar").removeClass("active");
            $("body").css({"overflow": "auto"});
        } else {
            $("#dev-collapse-bar").addClass("active");
            $("body").css({"overflow": "hidden"});
        }
    });

    $("#dev-collapse-bar nav a").click(function () {
        $("#dev-collapse-bar").removeClass("active");
        $("#dev-collapse-toggle").removeClass("active");
        $("body").css({"overflow": "auto"});
    });


    function adaptive() {
        var button_up = $("#page-up");
        var head = $("header");
        var top = jQuery(window).scrollTop();
        var mobile = jQuery(window).innerWidth();
        console.log(top);
        if (mobile < 1024) {
            // head.removeClass('fixed');
        } else {
            $("#dev-collapse-toggle").removeClass("active");
            $("#dev-collapse-bar").removeClass("active");
        }
        if (top > 400) {
            button_up.fadeIn('slow');
            head.addClass('fixed');
            head.css('top', 0);
        } else {
            button_up.fadeOut('slow');
            head.removeClass('fixed');
            head.css('top', -top);
        }
    }

    adaptive();
    $(window).resize(adaptive);
    $(window).scroll(adaptive);


    if (document.getElementsByClassName('mod-carousel') !== null) {
        $(".mod-carousel").fancybox({
            closeBtn: false,
            arrows: true,
            helpers: {
                overlay: {
                    locked: false
                }
            },
            openEffect: 'fade',
            closeEffect: 'fade',
            titleShow: false,
            autoscale: false,
            autoDimensions: false,
            padding: 0,
            margin: 0,
            width: '100%',
            transitionIn: 'elastic',
            transitionOut: 'elastic',
            speedIn: 600,
            speedOut: 300
        }).click(function () {
            setTimeout($.proxy(function () {
                var slide_number = this.ob.attr("data");
                if (slide_number) {
                    $(this.ob.attr('href') + ' .modal-carousel').slick('slickGoTo', slide_number);
                } else {
                    slide_number = $('.j-news-id-' + this.ob.attr('data-id')).not('.slick-cloned').data('slick-index');
                    $('.modal-carousel').slick('slickGoTo', slide_number);
                }
                //$('.modal-carousel').slick('slickGoTo', slide_number);
            }, {ob: $(this)}), 150);
        });

        $(".modal-carousel-close").click(function () {
            $.fancybox.close();
        });
    }

    // if(document.getElementsByClassName('dev-slide')!==null) {
    //     $("dev-slide")
    //         .attr('rel', 'gallery')
    //         .fancybox({
    //             helpers: {
    //                 thumbs: {
    //                     width  : 150,
    //                     height : 150,
    //                     source  : function(current) {
    //                         return $(current.element).data('thumbnail');
    //                     }
    //                 }
    //             }
    //         });
    // }
    //
    // if(document.getElementsByClassName('dev-slide-detail')!==null) {
    //     $(".dev-slide-detail").fancybox({
    //         autoscale: true,
    //         autoCenter: true,
    //         closeBtn: false,
    //         arrows: true,
    //         padding: 0,
    //         openEffect	: 'elastic',
    //         closeEffect	: 'elastic',
    //         helpers : {
    //             overlay: {
    //                 locked: false
    //             },
    //             title	: {
    //                 type: 'outside'
    //             },
    //             thumbs: {
    //                 width  : 150,
    //                 height : 150,
    //                 source  : function(current) {
    //                     return $(current.element).data('thumbnail');
    //                 }
    //             }
    //         },
    //         prevEffect	: 'elastic',
    //         nextEffect	: 'elastic'
    //     });
    //         // .attr('rel', 'dev-gallery-group');
    // }


    if (document.getElementById('map') !== null) {
        ymaps.ready(init);
        function init() {
            // Создание экземпляра карты и его привязка к контейнеру с
            // заданным id ("map")
            var myMap = new ymaps.Map('map', {
                // При инициализации карты, обязательно нужно указать
                // ее центр и коэффициент масштабирования
                center: [60.017472, 30.246941],
                zoom: 16,
                width: "100%",
            });
            // Создание метки
            var myPlacemark = new ymaps.Placemark(
                // Координаты метки
                [60.016937, 30.246288], {
                    // Свойства
                    // Текст метки
                    hintContent: '«Gorilla Park»'
                }, {
                    iconImageHref: './img/map-marker.png', // картинка иконки
                    // iconImageHref: '/local/templates/main2017/img/map-marker.png', // картинка иконки
                    iconImageSize: [100, 135], // размеры картинки
                    iconImageOffset: [-50, -120] // смещение картинки
                });
            // Добавление метки на карту
            myMap.geoObjects.add(myPlacemark);

            if (jQuery(window).innerWidth() < 1024) {
                myMap.behaviors.disable('drag');
            }
        }
    }

    if (document.getElementsByClassName('dev-home-banner-carousel') !== null) {
        $('.dev-home-banner-carousel').slick({
            margin: 0,
            dots: true,
            arrows: true,
            prevArrow: '<button type="button" class="slick-prev"></button>',
            nextArrow: '<button type="button" class="slick-next"></button>',
            infinite: true,
            speed: 600,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000
        });
    }

    if (document.getElementsByClassName('dev-home-sections-carousel') !== null) {
        $('.dev-home-sections-carousel').slick({
                margin: 0,
                dots: true,
                arrows: true,
                prevArrow: '<button type="button" class="slick-prev"></button>',
                nextArrow: '<button type="button" class="slick-next"></button>',
                infinite: false,
                speed: 600,
                slidesToShow: 4,
                slidesToScroll: 1,
                rows: 2,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 3,
                            arrows: false
                        }
                    },
                    {
                        breakpoint: 720,
                        settings: {
                            slidesToShow: 2,
                            arrows: false
                        }
                    },
                    {
                        breakpoint: 520,
                        settings: {
                            slidesToShow: 1,
                            arrows: false
                        }
                    }
                ]
            }
        );
    }

    if (document.getElementsByClassName('dev-sections-carousel-nav') !== null) {
        $('.dev-sections-carousel-nav').on('init', function (slickSlider, i, el) {
            $('.dev-sections-carousel-nav .slick-slide').removeClass('item-active');
            //set active class for current slide
            $('.dev-sections-carousel-nav .slick-slide').not('.slick-cloned').eq(i.currentSlide).addClass('item-active');
        }).slick({
                margin: 0,
                dots: true,
                arrows: true,
                prevArrow: '<button type="button" class="slick-prev"></button>',
                nextArrow: '<button type="button" class="slick-next"></button>',
                infinite: false,
                focusOnSelect: true,
                speed: 600,
                slidesToShow: 4,
                slidesToScroll: 1,
                asNavFor: '.dev-sections-carousel',
                responsive: [
                    {
                        breakpoint: 1380,
                        settings: {
                            arrows: false
                        }
                    },
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 3,
                            arrows: false
                        }
                    },
                    {
                        breakpoint: 720,
                        settings: {
                            slidesToShow: 2,
                            arrows: false
                        }
                    },
                    {
                        breakpoint: 540,
                        settings: {
                            slidesToShow: 1,
                            arrows: false
                        }
                    }
                ]
            }
        ).on('afterChange', function (slickSlider, i, el) {
            $('.dev-sections-carousel-nav .slick-slide').removeClass('item-active');
            //set active class for current slide
            $('.dev-sections-carousel-nav .slick-slide').not('.slick-cloned').eq(i.currentSlide).addClass('item-active');
        });
    }

    if (document.getElementsByClassName('dev-sections-carousel') !== null) {
        $('.dev-sections-carousel').slick({
                margin: 0,
                dots: false,
                arrows: false,
                infinite: false,
                speed: 600,
                slidesToShow: 1,
                slidesToScroll: 1,
                asNavFor: '.dev-sections-carousel-nav'
            }
        );
    }

    if (document.getElementById('dev-gallery-carousel') !== null) {
        $('#dev-gallery-carousel').slick({
            margin: 0,
            dots: false,
            arrows: false,
            speed: 600,
            slidesToShow: 4,
            slidesToScroll: 1,
            rows: 2,
            responsive: [
                {
                    breakpoint: 640,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2
                    }
                }
            ]
        });
    }

    $("#dev-gallery-carousel-prev").click(function () {
        $("#dev-gallery-carousel").slick("slickPrev");
    });

    $("#dev-gallery-carousel-next").click(function () {
        $("#dev-gallery-carousel").slick("slickNext");
    });

    if (document.getElementsByClassName('modal-carousel') !== null) {
        $('.modal-carousel').slick({
            dots: false,
            arrows: false,
            centerMode: true,
            //centerPadding: "40",
            //initialSlide: 2,
            variableWidth: true,
            infinite: true,
            focusOnSelect: true,
            speed: 600,
            autoplay: false,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        centerMode: false,
                        slidesToScroll: 1
                    }
                }
            ]

        }).on('afterChange', function (slickSlider, i, el) {
            $('.modal-carousel .slick-slide').removeClass('item-active');
            //set active class for current slide
            $('.modal-carousel .slick-slide').not('.slick-cloned').eq(i.currentSlide).addClass('item-active');
        });
    }

    $(".mod-win").fancybox({
        closeBtn: true,
        arrows: false,
        helpers: {
            overlay: {
                locked: false
            }
        },
        openEffect: 'fade',
        closeEffect: 'fade',
        titleShow: false,
        autoscale: false,
        autoDimensions: false,
        padding: 0,
        margin: 0,
        transitionIn: 'elastic',
        transitionOut: 'elastic',
        speedIn: 600,
        speedOut: 300,
        minWidth: 600
    });

    $("#questions-button, #order-party-button").on("click", function () {
        $("#messageNote").html("");
    });

    $(".fancyboximg").fancybox({
        closeBtn: true,
        arrows: true,
        helpers: {
            overlay: {
                locked: false
            }
        },
        openEffect: 'fade',
        closeEffect: 'fade',
        titleShow: false,
        autoscale: false,
        autoDimensions: false,
        padding: 0,
        margin: 0,
        transitionIn: 'elastic',
        transitionOut: 'elastic',
        speedIn: 600,
        speedOut: 300,
        hideOnOverlayClick: true,
        closeClick: false
    });

});