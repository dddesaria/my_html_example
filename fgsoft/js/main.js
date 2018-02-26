

$(function() {

    $("#page-up").click(function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

    ///////////////////// FIXED HEADER
    function fix_top() {
        var scroll_btn = $('#page-up');
        var head = $('header');
        var main = $('main');

        var h_head = head.outerHeight();
        var h_main = main.outerHeight();
        var h_all = h_main - h_head;

        var top = jQuery(window).scrollTop();
        var mobile = (jQuery(window).innerWidth() < 1140);
        //console.log(top);
        if (mobile) {
            scroll_btn.removeClass('active').addClass('fixed');
            head.removeClass('fixed');
        } else {
            if (top > 150) {
                head.addClass('fixed');
                head.css('top',0);
                scroll_btn.fadeIn('slow');
            } else {
                head.removeClass('fixed');
                head.css('top',-top);
                scroll_btn.fadeOut('slow');
            }
        }
    }
    fix_top();
    $(window).resize(fix_top);
    $(window).scroll(fix_top);

    ///////////////////// SMOOTH SCROLL ANCHOR
    $('a.scr-smo').bind('click.smoothscroll',function (e) {
        e.preventDefault();
        var target = this.hash,
            $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 120
        }, 600, 'swing', function () {
            window.location.hash = target;
        });
    });




    if(document.getElementById('map')!==null) {
        function initMap() {

            // Create an array of styles.
            var styles = [
                // {
                //     "elementType": "geometry",
                //     "stylers": [
                //         {
                //             "color": "#212121"
                //         }
                //     ]
                // },
                // {
                //     "elementType": "labels.icon",
                //     "stylers": [
                //         {
                //             "visibility": "off"
                //         }
                //     ]
                // },
                // {
                //     "elementType": "labels.text.fill",
                //     "stylers": [
                //         {
                //             "color": "#757575"
                //         }
                //     ]
                // },
                // {
                //     "elementType": "labels.text.stroke",
                //     "stylers": [
                //         {
                //             "color": "#212121"
                //         }
                //     ]
                // },
                // {
                //     "featureType": "administrative",
                //     "elementType": "geometry",
                //     "stylers": [
                //         {
                //             "color": "#757575"
                //         }
                //     ]
                // },
                // {
                //     "featureType": "administrative.country",
                //     "elementType": "labels.text.fill",
                //     "stylers": [
                //         {
                //             "color": "#9e9e9e"
                //         }
                //     ]
                // },
                // {
                //     "featureType": "administrative.land_parcel",
                //     "stylers": [
                //         {
                //             "visibility": "off"
                //         }
                //     ]
                // },
                // {
                //     "featureType": "administrative.locality",
                //     "elementType": "labels.text.fill",
                //     "stylers": [
                //         {
                //             "color": "#b9b900"
                //         }
                //     ]
                // },
                // {
                //     "featureType": "landscape.man_made",
                //     "elementType": "geometry.fill",
                //     "stylers": [
                //         {
                //             "color": "#2c2f36"
                //         }
                //     ]
                // },
                // {
                //     "featureType": "landscape.natural",
                //     "elementType": "geometry.fill",
                //     "stylers": [
                //         {
                //             "color": "#232832"
                //         }
                //     ]
                // },
                // {
                //     "featureType": "poi",
                //     "elementType": "geometry.fill",
                //     "stylers": [
                //         {
                //             "color": "#494949"
                //         }
                //     ]
                // },
                // {
                //     "featureType": "poi",
                //     "elementType": "labels.text.fill",
                //     "stylers": [
                //         {
                //             "color": "#757575"
                //         }
                //     ]
                // },
                // {
                //     "featureType": "poi.park",
                //     "elementType": "geometry",
                //     "stylers": [
                //         {
                //             "color": "#181818"
                //         }
                //     ]
                // },
                // {
                //     "featureType": "poi.park",
                //     "elementType": "geometry.fill",
                //     "stylers": [
                //         {
                //             "color": "#29452e"
                //         }
                //     ]
                // },
                // {
                //     "featureType": "poi.park",
                //     "elementType": "labels.text.fill",
                //     "stylers": [
                //         {
                //             "color": "#8ab77b"
                //         }
                //     ]
                // },
                // {
                //     "featureType": "poi.park",
                //     "elementType": "labels.text.stroke",
                //     "stylers": [
                //         {
                //             "color": "#1b1b1b"
                //         }
                //     ]
                // },
                // {
                //     "featureType": "road",
                //     "elementType": "geometry.fill",
                //     "stylers": [
                //         {
                //             "color": "#2c2c2c"
                //         }
                //     ]
                // },
                // {
                //     "featureType": "road",
                //     "elementType": "labels.text.fill",
                //     "stylers": [
                //         {
                //             "color": "#8a8a8a"
                //         }
                //     ]
                // },
                // {
                //     "featureType": "road.arterial",
                //     "elementType": "geometry",
                //     "stylers": [
                //         {
                //             "color": "#373737"
                //         }
                //     ]
                // },
                // {
                //     "featureType": "road.arterial",
                //     "elementType": "labels.text.fill",
                //     "stylers": [
                //         {
                //             "color": "#808000"
                //         }
                //     ]
                // },
                // {
                //     "featureType": "road.highway",
                //     "elementType": "geometry",
                //     "stylers": [
                //         {
                //             "color": "#3c3c3c"
                //         }
                //     ]
                // },
                // {
                //     "featureType": "road.highway",
                //     "elementType": "labels.text.fill",
                //     "stylers": [
                //         {
                //             "color": "#f0f000"
                //         }
                //     ]
                // },
                // {
                //     "featureType": "road.highway.controlled_access",
                //     "elementType": "geometry",
                //     "stylers": [
                //         {
                //             "color": "#4e4e4e"
                //         }
                //     ]
                // },
                // {
                //     "featureType": "road.local",
                //     "elementType": "labels.text.fill",
                //     "stylers": [
                //         {
                //             "color": "#616161"
                //         }
                //     ]
                // },
                // {
                //     "featureType": "transit",
                //     "elementType": "labels.text.fill",
                //     "stylers": [
                //         {
                //             "color": "#757575"
                //         }
                //     ]
                // },
                // {
                //     "featureType": "transit.station.airport",
                //     "elementType": "geometry.fill",
                //     "stylers": [
                //         {
                //             "color": "#494949"
                //         }
                //     ]
                // },
                // {
                //     "featureType": "water",
                //     "elementType": "geometry",
                //     "stylers": [
                //         {
                //             "color": "#000000"
                //         }
                //     ]
                // },
                // {
                //     "featureType": "water",
                //     "elementType": "geometry.fill",
                //     "stylers": [
                //         {
                //             "color": "#131724"
                //         }
                //     ]
                // },
                // {
                //     "featureType": "water",
                //     "elementType": "labels.text.fill",
                //     "stylers": [
                //         {
                //             "color": "#3d3d3d"
                //         }
                //     ]
                // }





                {
                    "featureType": "water",
                    "elementType": "labels.text",
                    "stylers": [
                        { "color": "#a9b5c3" }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "geometry.fill",
                    "stylers": [
                        { "color": "#363941" }
                    ]
                },
                {
                    "featureType": "landscape.natural",
                    "elementType": "geometry.fill",
                    "stylers": [
                        { "color": "#797e85" }
                    ]
                },
                {
                    "featureType": "landscape.natural.landcover",
                    "elementType": "geometry.fill",
                    "stylers": [
                        { "color": "#63666e" }
                    ]
                },
                {
                    "featureType": "administrative.country",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        { "color": "#7782a2" }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        { "color": "#000" }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        { "color": "#ffffff" }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.fill",
                    "stylers": [
                        { "color": "#f8ff33" }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        { "color": "#828f77" }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "geometry.fill",
                    "stylers": [
                        { "color": "#64717f" }
                    ]
                },
                {
                    "featureType": "landscape.man_made",
                    "elementType": "geometry.fill",
                    "stylers": [
                        { "color": "#464c52" }
                    ]
                },
                {
                    "featureType": "landscape.man_made",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        { "color": "#585858" }
                    ]
                },
                {
                    "featureType": "poi.school",
                    "elementType": "geometry.fill",
                    "stylers": [
                        { "color": "#566f88" }
                    ]
                },
                {
                    "featureType": "transit.station",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        { "color": "#cee0ff" }
                    ]
                },
                {
                    "featureType": "transit.station",
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        { "lightness": -100 }
                    ]
                },
                {
                    "featureType": "transit.station",
                    "elementType": "labels.icon",
                    "stylers": [
                        { "hue": "#e6ff00" },
                        { "lightness": 55 },
                        { "saturation": 63 }
                    ]
                },
                {
                    "featureType": "transit.station.rail",
                    "elementType": "labels.icon",
                    "stylers": [
                        { "saturation": 100 },
                        { "hue": "#003bff" }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        { "color": "#fff700" }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        { "lightness": -5 }
                    ]
                },
                {
                    "featureType": "road.local",
                    "elementType": "geometry.fill",
                    "stylers": [
                        { "color": "#64717f" }
                    ]
                },{
                    "featureType": "road.local",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        { "color": "#64717f" }
                    ]
                },{
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        { "lightness": -100 }
                    ]
                },{
                    "featureType": "poi",
                    "elementType": "geometry.fill",
                    "stylers": [
                        { "color": "#363941"}
                    ]
                },{
                    "featureType": "poi",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        { "color": "#282c33"}
                    ]
                },{
                    "featureType": "poi",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        { "hue": "#003bff" },
                        { "lightness": 100 }
                    ]
                },{
                    "featureType": "poi.park",
                    "elementType": "geometry.fill",
                    "stylers": [
                        { "color": "#6e9487" }
                    ]
                }

            ];
            // Create a new StyledMapType object, passing it the array of styles,
            // as well as the name to be displayed on the map type control.
            var styledMap = new google.maps.StyledMapType(styles,
                {name: "FGSoft Map"});
            // Create a map object, and include the MapTypeId to add
            // to the map type control.
            var mapOptions = {
                zoom: 15,
                center: new google.maps.LatLng(60.012202, 30.398154),
                mapTypeControl: false,
                draggable: true,
                scaleControl: false,
                scrollwheel: false
            };

            var map = new google.maps.Map(document.getElementById('map'),
                mapOptions);

            var image = '/local/templates/main/img/map-marker.png';
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(60.012202, 30.398154),
                map: map,
                icon: image
            });
            //Associate the styled map with the MapTypeId and set it to display.
            map.mapTypes.set('map_style', styledMap);
            map.setMapTypeId('map_style');
        }
    }
    initMap();




    if(document.getElementsByClassName('dev-main-carousel')!==null) {

        var main_slick = $(".dev-main-carousel");
        var main_slick_dots = $(".dev-main-carousel .slick-dots li");
        main_slick.on('init reInit beforeChange', function (event, slick, currentSlide, nextSlide) {
            var dots_width = 100 / slick.slideCount + "%";
            $(".dev-main-carousel .slick-dots li").css({"width": dots_width});
            // console.log(slick.slideCount);
        });
        main_slick.slick({
            arrows: true,
            dots: true,
            infinite: true,
            speed: 600,
            slidesToShow: 1,
            slidesToScroll: 1
        }).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        });
    }

    // if(document.getElementsByClassName('dev-carousel-portfolio')!==null) {
    //
    //     $(".dev-carousel-portfolio").slick({
    //         arrows: true,
    //         dots: false,
    //         infinite: true,
    //         speed: 600,
    //         slidesToShow: 1,
    //         slidesToScroll: 1
    //     });
    // }


    $(".dev-main-tools .carousel").slick({
        arrows: true,
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 8,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    });

    // if(document.getElementsByClassName('dev-mod-tran')!==null) {
    //     $(".dev-mod-tran").fancybox({
    //         titleShow: false,
    //         autoScale: false,
    //         width: '100%',
    //         height: '100%',
    //         autoDimensions: false,
    //         padding: 0,
    //         closeBtn: true,
    //         arrows: false,
    //         openEffect: 'fade',
    //         closeEffect: 'fade',
    //         transitionIn: 'elastic',
    //         transitionOut: 'elastic',
    //         minWidth: 900,
    //         minHeight: 400,
    //         speedIn: 300,
    //         speedOut: 600,
    //         tpl: {
    //             wrap: '<div class="dev-modal-transparent fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>'
    //         },
    //         helpers: {
    //             overlay: {
    //                 locked: false,
    //                 opacity: 0.8, // or the opacity you want
    //                 css: {
    //                     'background': 'url("/local/templates/main/img/modal-wall.jpg") no-repeat center top rgba(0,0,0,0.8)',
    //                     'background-size': 'cover'
    //
    //                 } // or your preferred hex color value
    //             } // overlay
    //         }
    //     });
    // }
    //
    // if(document.getElementsByClassName('dev-mod')!==null) {
    //
    //     $(".dev-mod").fancybox({
    //         titleShow: false,
    //         autoScale: false,
    //         width: 1200,
    //         // height                  : '100%',
    //         autoDimensions: false,
    //         padding: 0,
    //         closeBtn: true,
    //         arrows: false,
    //         openEffect: 'elastic',
    //         closeEffect: 'elastic',
    //         transitionIn: 'elastic',
    //         transitionOut: 'elastic',
    //         minWidth: 1200,
    //         minHeight: 400,
    //         speedIn: 300,
    //         speedOut: 600,
    //         helpers: {
    //             overlay: {
    //                 locked: false
    //                 // opacity: 0.8
    //             } // overlay
    //         }
    //         // openMethod : 'zoomIn',
    //         // openSpeed : 600,
    //         //
    //         // closeMethod : 'zoomOut',
    //         // closeSpeed : 300
    //     });
    // }



    // $(".dev-modal-base").slimScroll({
    //     width : 'auto',
    //
    //     // height in pixels of the visible scroll area
    //     height : '90vh',
    //
    //     // width in pixels of the scrollbar and rail
    //     size : '7px',
    //
    //     // scrollbar color, accepts any hex/color value
    //     color: '#000',
    //
    //     // scrollbar position - left/right
    //     position : 'right',
    //
    //     // distance in pixels between the side edge and the scrollbar
    //     distance : '1px',
    //
    //     // default scroll position on load - top / bottom / $('selector')
    //     start : 'top',
    //
    //     // sets scrollbar opacity
    //     opacity : .4,
    //
    //     // enables always-on mode for the scrollbar
    //     alwaysVisible : false,
    //
    //     // check if we should hide the scrollbar when user is hovering over
    //     disableFadeOut : false,
    //
    //     // sets visibility of the rail
    //     railVisible : false,
    //
    //     // sets rail color
    //     railColor : '#333',
    //
    //     // sets rail opacity
    //     railOpacity : .2,
    //
    //     // whether  we should use jQuery UI Draggable to enable bar dragging
    //     railDraggable : true,
    //
    //     // defautlt CSS class of the slimscroll rail
    //     railClass : 'slimScrollRail',
    //
    //     // defautlt CSS class of the slimscroll bar
    //     barClass : 'slimScrollBar',
    //
    //     // defautlt CSS class of the slimscroll wrapper
    //     wrapperClass : 'slimScrollDiv',
    //
    //     // check if mousewheel should scroll the window if we reach top/bottom
    //     allowPageScroll : false,
    //
    //     // scroll amount applied to each mouse wheel step
    //     wheelStep : 20,
    //
    //     // scroll amount applied when user is using gestures
    //     touchScrollStep : 200,
    //
    //     // sets border radius
    //     borderRadius: '7px',
    //
    //     // sets border radius of the rail
    //     railBorderRadius : '7px'
    // });




});