



$(function() {
    var $preloader = $('#pre-loader'),
        $spinner   = $preloader.find('img');
    $spinner.fadeOut(600);
    $preloader.delay(50).fadeOut(600);


    $("#dev-btn-up").click(function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

    $("select").selectOrDie({});

    $(".select-sort").selectOrDie({
        linksExternal: true
    });


    //============= Filter =============//

    $(".dev-main-filter-inner").slimScroll({
        width : 'auto',
        height : 'auto',
        size : '5px',
        distance : '5px',
        borderRadius: '0',
        railBorderRadius : '0'
        // alwaysVisible : true
    });

    $("#dev-main-filter-toggle").on("click", function(){
        $("#dev-main-filter").addClass("open");
        $("#dev-overlay").fadeIn("slow");
    });

    $("#dev-main-filter-close").on("click", function(){
        $("#dev-main-filter").removeClass("open");
        $("#dev-overlay").fadeOut("slow");
    });

    $("#dev-overlay").on("click", function(){
        $("#dev-overlay").fadeOut("slow");
        if ($("#dev-main-filter").hasClass("open")) {
            $("#dev-main-filter").removeClass("open");
        }
    });

    $("#dev-filter-foot-close").on("click", function(){
        $(".dev-main-filter-foot").slideUp(300);
        $(".dev-main-filter-wrapper").removeClass("short");

        $(".dev-main-filter-inner").slimScroll({
        });
    });

    $(".dev-drop-list .dev-drop-list-head").each(function(){
        var child_item = $(this).parent().find(".dev-drop-list-body");
        if(child_item.length > 0){
            $($(this).addClass("parent").append('<i class="dev-icon-thin-arrow-down"></i>'));
        }
    });

    $(".dev-drop-list-head").on("click", function(){
        var content =  $(this).next(".dev-drop-list-body");
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            content.slideUp();
        } else {
            $(this).addClass("active");
            content.slideDown();
        }
    });

    $(".dev-sort-direction").on("click", function(){
        var sort_dir_asc = $(this).children(".dev-icon-sort-down");
        var sort_dir_decs = $(this).children(".dev-icon-sort-up");
        if (sort_dir_asc.length > 0) {
            sort_dir_asc.removeClass("dev-icon-sort-down").addClass("dev-icon-sort-up");
        }
        if (sort_dir_decs.length > 0) {
            sort_dir_decs.removeClass("dev-icon-sort-up").addClass("dev-icon-sort-down");
        }
    });

    //============= // Filter =============//


    $(".dev-item-base-fav").on("click", function(){
        $(this).toggleClass("active");
        return false;
    });


    $(".dev-short-list-more").on("click", function(){
        var text = $(this).text();
        var hidden_content = $(this).parent().find("> .dev-short-list-hidden");
        if ($(this).hasClass("list-toggle")) {
            $(this).hide();
            hidden_content.slideDown();
        } else {
            if ($(this).hasClass("open")) {
                $(this).removeClass("open").text("Ещё");
                hidden_content.slideUp();
            }
            else {
                $(this).addClass("open").text("Скрыть");
                hidden_content.slideDown();
            }
        }
    });


    //============= Breadcrumbs =============//

    $(".dev-main-breadcrumbs nav > ul > li").each(function(){
        var child_item = $(this).find("li");
        if(child_item.length > 0){
            $($(this).addClass("parent"));
        }
    });

    $(".dev-main-breadcrumbs nav > ul > li.parent").hover(
        function(){
            $(this).find("ul").stop().slideDown("300").addClass("open");
        },
        function(){
            $(this).find("ul").stop().slideUp("300").removeClass("open");
        }
    );
    //============= // Breadcrumbs =============//



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



    function adaptive () {
        // var tools = $("#dev-main-sections-panel");
        // var filter = $("#dev-main-filter");
        var button_up = $("#dev-btn-up");
        var head = $("header");
        var top = jQuery(window).scrollTop();
        var mobile = jQuery(window).innerWidth();

        if (mobile < 1024) {
            head.removeClass('fixed');
        } else {
            if (top > 400) {
                head.addClass('fixed');
                head.css('top', 0);
                button_up.fadeIn('slow');
            } else {
                head.removeClass('fixed');
                head.css('top', -top);
                button_up.fadeOut('slow');
            }
        }
        if (top > 400) {
            button_up.fadeIn('slow');
        } else {
            button_up.fadeOut('slow');
        }
    }
    adaptive();
    $(window).resize(adaptive);
    $(window).scroll(adaptive);


    //============= FancyBox =============//

    if(document.getElementsByClassName('dev-light-box')!==null) {
        $(".dev-light-box").fancybox({
            autoscale: true,
            autoCenter: true,
            closeBtn: true,
            arrows: true,
            padding: 0,
            openEffect	: 'elastic',
            closeEffect	: 'elastic',
            helpers : {
                overlay: {
                    locked: false
                }
                // title	: {
                //     type: 'outside'
                // },
                // thumbs: {
                //     width  : 150,
                //     height : 150,
                //     source  : function(current) {
                //         return $(current.element).data('thumbnail');
                //     }
                // }
            },
            prevEffect	: 'elastic',
            nextEffect	: 'elastic'
        });
        // .attr('rel', 'dev-gallery-group');
    }

    //============= // FancyBox =============//


    //============= Carousels =============//

    if(document.getElementsByClassName('dev-section-list-carousel')!==null) {
        $(".dev-section-list-carousel").slick({
            arrows: true,
            dots: false,
            infinite: true,
            focusOnSelect: true,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 720,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }

    function carousel_init() {
        if(document.getElementsByClassName('dev-aside-preview-carousel')!==null) {
            if (jQuery(window).innerWidth() < 1280) {
                $(".dev-aside-preview-carousel").slick({
                    arrows: false,
                    dots: true,
                    infinite: true,
                    speed: 300,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 2000,
                    responsive: [
                        {
                            breakpoint: 720,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 2
                            }
                        },
                        {
                            breakpoint: 480,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1
                            }
                        }
                    ]
                });
            } else {
                $(".dev-aside-preview-carousel").slick({
                    arrows: false,
                    dots: true,
                    infinite: true,
                    speed: 300,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 2000,
                    rows: 3
                });
            }
        }
    }
    carousel_init();
    // $(window).resize(carousel_init);

    if(document.getElementsByClassName('dev-main-detail-carousel')!==null) {
        $(".dev-main-detail-carousel").slick({
            arrows: false,
            dots: false,
            infinite: false,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            asNavFor: '.dev-main-detail-carousel-nav'
        });
    }

    if(document.getElementsByClassName('dev-main-detail-carousel-nav')!==null) {
        $('.dev-main-detail-carousel-nav').slick({
            arrows: true,
            dots: false,
            infinite: false,
            focusOnSelect: true,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.dev-main-detail-carousel',
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        arrows: false,
                        dots: true
                    }
                }
            ]
        });
    }

    if(document.getElementsByClassName('dev-carousel')!==null) {
        $('.dev-carousel').slick({
            arrows: true,
            dots: true,
            infinite: false,
            focusOnSelect: false,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        arrows: false,
                        dots: true,
                        slidesToShow: 3
                    }
                }
            ]
        });
    }

    if(document.getElementsByClassName('dev-item-carousel')!==null) {
        $('.dev-item-carousel').slick({
            arrows: true,
            dots: false,
            infinite: false,
            focusOnSelect: true,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1440,
                    settings: {
                        arrows: false,
                        dots: true
                    }
                },
                {
                    breakpoint: 1200,
                    settings: {
                        arrows: false,
                        dots: true,
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 720,
                    settings: {
                        arrows: false,
                        dots: true,
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: false,
                        dots: true,
                        slidesToShow: 1
                    }
                }
            ]
        });
    }

    //============= // Carousels =============//


    $("#dev-views-toggles .dev-btn").on("click", function(){
        var view = $(this).data('view');
        // $.cookie('view', view, {expires: 365, path: '/' });
        if (!$("#dev-views-grid").hasClass(view)) {
            $("#dev-views-grid").removeClass("grid").removeClass("icons").removeClass("inline").addClass(view);
            $(this).parent().find(".active").removeClass("active");
        }
        $(this).addClass("active");
        return false;
    });

    // $("#dev-views-toggles .dev-btn").on("click", function(){
    //     var view = $(this).data('view');
    //     $.cookie('view', view, {expires: 365, path: '/' });
    //     if (!$("#dev-views-grid").hasClass(view)) {
    //         $("#dev-views-grid").removeClass("grid").removeClass("icons").removeClass("inline").addClass(view);
    //     }
    //     return false;
    // });

    $("#dev-views-toggles .dev-btn").on("click", function(){
        $(this).parent().find(".active").removeClass("active");
        $(this).addClass("active");
        return false;
    });

    // if ($.cookie('view')) $("i.dev-view-toggle-" + $.cookie('view')).parent().click()
    // else $("i.dev-view-toggle-grid").parent().click()
    //
    // $("input#paramsphoto").on("click",function () {
    //     window.location = $(this).data('link');
    // });

});