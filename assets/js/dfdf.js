var autoRoll;
var curVisual = 0;
var isMove = false;

var mainScript = (function () {
    return {
        mainVisual: function () {
            if ($(".mv_roll").length > 0) {
                gsap.to(".mv_roll .unit:nth-child(1) .txt1", { duration: 0.8, transform: 'translate(0, 0)', opacity: 1, delay: 0.4, ease: Cubic.easeOut });
                gsap.to(".mv_roll .unit:nth-child(1) .txt2", { duration: 0.8, transform: 'translate(0, 0)', opacity: 1, delay: 0.5, ease: Cubic.easeOut });
                gsap.to(".mv_roll .unit:nth-child(1) .bt", { duration: 0.8, transform: 'translate(0, 0)', opacity: 1, delay: 0.6, ease: Cubic.easeOut });
                gsap.to(".mv_roll .copy", { duration: 0.8, opacity: 1, delay: 0.6, ease: Cubic.easeOut });
                gsap.to(".mv_roll .line", { duration: 0.8, bottom: -80, opacity: 1, delay: 0.6, ease: Cubic.easeOut });
                gsap.to(".mv_roll .controller", { duration: 0.8, bottom: 140, opacity: 1, delay: 0.6, ease: Cubic.easeOut });
                gsap.to(".main_v_mobile .swiper-slide:nth-child(1) .txt1", { duration: 0.8, transform: 'translate(0, 0)', opacity: 1, delay: 0.4, ease: Cubic.easeOut });
                gsap.to(".main_v_mobile .swiper-slide:nth-child(1) .txt2", { duration: 0.8, transform: 'translate(0, 0)', opacity: 1, delay: 0.5, ease: Cubic.easeOut });
                gsap.to(".main_v_mobile .swiper-slide:nth-child(1) .bt", { duration: 0.8, transform: 'translate(0, 0)', opacity: 1, delay: 0.6, ease: Cubic.easeOut });
            };

            autoRoll = setInterval(autoRollEvt, 18000);

            $(".mv_roll .controller a.next").each(function (index) {
                $(this).on('click', function () {
                    if (isMove == false) {
                        isMove = true;
                        $(".mv_roll .controller a.next").eq(curVisual).removeClass("on");
                        gsap.to($(".mv_roll").find(".unit").eq(curVisual), { duration: 1, left: '-100%', ease: Cubic.easeOut });
                        gsap.to($(".mv_roll").find(".unit").eq(curVisual).find(".txt1"), { duration: 0.5, transform: 'translate(0, 200px)', opacity: 0, delay: 0.5, ease: Cubic.easeOut });
                        gsap.to($(".mv_roll").find(".unit").eq(curVisual).find(".txt2"), { duration: 0.5, transform: 'translate(0, 200px)', opacity: 0, delay: 0.5, ease: Cubic.easeOut });
                        gsap.to($(".mv_roll").find(".unit").eq(curVisual).find(".bt"), { duration: 0.5, transform: 'translate(0, 200px)', opacity: 0, delay: 0.5, ease: Cubic.easeOut });
                        curVisual = index;
                        $(".mv_roll .controller a.next").eq(curVisual).addClass("on");
                        gsap.to($(".mv_roll").find(".unit").eq(curVisual), { duration: 0, left: '100%', ease: Cubic.easeOut });
                        gsap.to($(".mv_roll").find(".unit").eq(curVisual), { duration: 1, left: '0%', ease: Cubic.easeOut });
                        gsap.to($(".mv_roll").find(".unit").eq(curVisual).find(".txt1"), { duration: 1, transform: 'translate(0, 0)', opacity: 1, delay: 1, ease: Cubic.easeOut });
                        gsap.to($(".mv_roll").find(".unit").eq(curVisual).find(".txt2"), { duration: 1, transform: 'translate(0, 0)', opacity: 1, delay: 1.1, ease: Cubic.easeOut });
                        gsap.to($(".mv_roll").find(".unit").eq(curVisual).find(".bt"), {
                            duration: 1, transform: 'translate(0, 0)', opacity: 1, delay: 1.2, ease: Cubic.easeOut, onComplete: function () {
                                isMove = false;
                            }
                        });
                    }
                });

                $(this).hover(function () {
                    if (isPlayStop == false) {
                        clearInterval(autoRoll);
                    }
                    clearInterval(autoRoll)
                }, function () {
                    if (isPlayStop == false) {
                        clearInterval(autoRoll);
                        autoRoll = setInterval(autoRollEvt, 18000);
                    }
                })
            });

            if ($(".mv_roll .unit").length < 2) {
                $(".mv_roll .controller").css('z-index', -1)
            }

            var isPlayStop = false;
            $(".mv_roll .controller a.playstop").on("click", function () {
                if (isPlayStop == false) {
                    gsap.to($(this).find(".off"), { duration: 0.5, opacity: 0, ease: Cubic.easeOut });
                    gsap.to($(this).find(".on"), { duration: 0.5, opacity: 1, ease: Cubic.easeOut });
                    $(this).attr("title", "�ъ깮");
                    clearInterval(autoRoll)

                    isPlayStop = true;
                } else if (isPlayStop == true) {
                    gsap.to($(this).find(".off"), { duration: 0.5, opacity: 1, ease: Cubic.easeOut });
                    gsap.to($(this).find(".on"), { duration: 0.5, opacity: 0, ease: Cubic.easeOut });
                    $(this).attr("title", "硫덉땄");
                    clearInterval(autoRoll);
                    autoRoll = setInterval(autoRollEvt, 18000);

                    isPlayStop = false;
                }
            });

            //硫붿씤 鍮꾩＜�� (紐⑤컮��)
            var _mainVisualOp = {};
            if ($(".main_pop .pop_body .swiper-slide").length > 1) {
                _mainVisualOp = {
                    loop: true,
                    autoplay: {
                        speed: 10000,
                        delay: 3500,
                        disableOnInteraction: false,
                    },
                    pagination: {
                        el: ".main_v_mobile .swiper-pagination",
                        clickable: true,
                    },

                    on: {
                        init: function () {
                            if ($(".main_v_mobile .swiper-slide").length < 2) {
                                $(".main_v_mobile .swiper-pagination").css('opacity', 0)
                            }
                        },
                        slideChangeTransitionStart: function () {
                        },
                        slideChangeTransitionEnd: function () {
                            gsap.to($(".main_v_mobile .swiper-slide").find(".txt1"), { duration: 0, transform: 'translate(0, 100px)', opacity: 0, delay: 0, ease: Cubic.easeOut });
                            gsap.to($(".main_v_mobile .swiper-slide").find(".txt2"), { duration: 0, transform: 'translate(0, 100px)', opacity: 0, delay: 0, ease: Cubic.easeOut });
                            gsap.to($(".main_v_mobile .swiper-slide").find(".bt"), { duration: 0, transform: 'translate(0, 100px)', opacity: 0, delay: 0, ease: Cubic.easeOut });
                            gsap.to($(".main_v_mobile .swiper-slide").eq(this.activeIndex).find(".txt1"), { duration: 0.5, transform: 'translate(0, 0)', opacity: 1, delay: 0, ease: Cubic.easeOut });
                            gsap.to($(".main_v_mobile .swiper-slide").eq(this.activeIndex).find(".txt2"), { duration: 0.5, transform: 'translate(0, 0)', opacity: 1, delay: 0.1, ease: Cubic.easeOut });
                            gsap.to($(".main_v_mobile .swiper-slide").eq(this.activeIndex).find(".bt"), { duration: 0.5, transform: 'translate(0, 0)', opacity: 1, delay: 0.2, ease: Cubic.easeOut });
                        },
                        resize: function () {
                        }
                    },

                    breakpoints: {
                        500: {
                        },
                        768: {
                        },
                        1024: {
                        },
                        1600: {
                        },
                    },
                }
            } else {
                _mainVisualM = {
                    loop: false,
                }
            };

            var mainVisualM = new Swiper(".main_v_mobile.swiper-container", _mainVisualOp);

            $(".main_v_mobile .swiper-pagination").append('<a href="javascript:"></a>');
            $(".main_v_mobile .swiper-pagination > a").on('click', function () {
                if ($(this).hasClass("on") == false) {
                    $(this).addClass("on");
                    mainVisualM.autoplay.stop();
                    return false;
                } else {
                    $(this).removeClass("on");

                    mainVisualM.autoplay.start();
                    return false;
                }
            })
        },
        commonMotion: function () {
            //硫붿씤�앹뾽
            if ($(".main_pop .pop_body .swiper-slide").length < 2) {
                $(".main_pop .pop_body .swiper-pagination").css('opacity', 0)
            };

            var mainPopVisualOp = {};
            if ($(".main_pop .pop_body .swiper-slide").length > 1) {
                mainPopVisualOp = {
                    loop: true,
                    autoplay: {
                        speed: 10000,
                        delay: 3500,
                        disableOnInteraction: false,
                    },
                    pagination: {
                        el: ".main_pop .swiper-pagination",
                        clickable: true,
                    },
                }
            } else {
                mainPopVisualOp = {
                    loop: false,
                }
            };

            var mainPopVisual = new Swiper(".main_pop .swiper-container", mainPopVisualOp);

            $(".main_pop .pop_body .swiper-pagination").append('<a href="javascript:"></a>');
            $(".main_pop .pop_body .swiper-pagination > a").on('click', function () {
                if ($(this).hasClass("on") == false) {
                    $(this).addClass("on");
                    mainPopVisual.autoplay.stop();
                    return false;
                } else {
                    $(this).removeClass("on");

                    mainPopVisual.autoplay.start();
                    return false;
                }
            })

            $(".main_pop .pop_body .xbt").on('click', function () {
                $(".main_pop").fadeOut(500);
            })


            // 諛뺥쁽二� 誘몃옒�먯뀑 �띿뒪�� �먮Ⅴ�� 紐⑥뀡
            var $moveDistant;
            $(window).on('resize', function () {
                $moveDistant = $(".infinite_txt p").eq(0).innerWidth()
            }); $(window).resize();

            var $moveTxt1 = $(".infinite_txt p").eq(0);
            var $moveTxt2 = $(".infinite_txt p").eq(1);
            function infiMoveTxt() {
                $moveTxt1.animate({ left: -($moveDistant) }, 12000, "linear");
                $moveTxt2.animate({ left: 0 }, 12000, "linear", function () {
                    $moveTxt1.css('left', 0);
                    $moveTxt2.css('left', $moveDistant);
                    infiMoveTxt()
                });
            };

            infiMoveTxt();

            // �댁쇅援먰솚�ν븰�� �좎꽑�뺣뵒�먯씤 �먮Ⅴ�� 紐⑥뀡
            var $moveWave1 = $(".main_con1 .mc1_con .deco .wave p").eq(0);
            var $moveWave2 = $(".main_con1 .mc1_con .deco .wave p").eq(1);
            function infiMoveWave() {
                $moveWave1.animate({ left: -2838 }, 40000, "linear");
                $moveWave2.animate({ left: 0 }, 40000, "linear", function () {
                    $moveWave1.css('left', 0);
                    $moveWave2.css('left', 2838);
                    infiMoveWave()
                });
            };
            infiMoveWave();

            // �댁쇅援먰솚�ν븰 移댁슫�몄뾽
            $(".main_con1 .counter").counterUp({
                time: 1000
            });


            // 湲�濡쒕쾶由ы룷�� �대�吏�
            $(".main_con2 .swiper-slide").each(function (index) {
                if ($(this).find("img").width() > $(this).find("img").height()) {
                    $(this).find("img").css('width', 'auto').css('height', '100%');
                } else {
                    $(this).find("img").css('width', '100%').css('height', 'auto');
                }
            })


            //誘몃옒�먯뀑 �몄옱�≪꽦 移댁슫�몄뾽
            $(".main_con4 .counter").counterUp({
                time: 1000
            });
        },
        scrollFn: function () {
            // not IE
            $(window).on("scroll", function () {
                var _isScrollTop = $(window).scrollTop();

                if (_isScrollTop > $(".main_v_mobile").height()) {
                    $(".main_v_mobile").addClass("scroll")
                } else {
                    $(".main_v_mobile").removeClass("scroll")
                }

            }); $(window).scroll()

            // for IE
            $("body").on("scroll", function () {

            });

            // �댁쇅援먰솚�ν븰 紐⑥뀡
            gsap.to(".main_con1 .mc1_con", {
                scrollTrigger: {
                    trigger: ".main_con1",
                    start: "-300px top",
                    end: "50% top",
                    //pin : true,
                    //scrub: 1,
                    //markers:true,
                    onEnter: function () {
                        gsap.to(".main_con1 .mc1_con .deco", { duration: 1, opacity: 1, ease: Cubic.easeOut });
                        gsap.to(".main_con1 .mc1_con", { duration: 1, width: '100%', 'border-radius': 0, ease: Cubic.easeOut });
                        gsap.to(".main_con1 .mc1_con .cover", { duration: 1, opacity: 0, ease: Cubic.easeOut });
                    },
                    onEnterBack: function () {
                        gsap.to(".main_con1 .mc1_con .deco", { duration: 1, opacity: 1, ease: Cubic.easeOut });
                        gsap.to(".main_con1 .mc1_con", { duration: 1, width: "60%", 'border-radius': 300, ease: Cubic.easeOut });
                        gsap.to(".main_con1 .mc1_con .cover", { duration: 1, opacity: 1, ease: Cubic.easeOut });
                    },
                },
            });

            ScrollTrigger.matchMedia({
                // large
                "(min-width: 1281px)": function () {
                    gsap.to(".main_con3 .mc3_con ul", {
                        scrollTrigger: {
                            trigger: ".main_con3",
                            start: "top top",
                            end: "+=400%",
                            pin: true,
                            scrub: 1,
                            //markers:true,
                            onEnter: function () {
                                $(".main_con3 .mc3_con ul").css('left', 0);
                            },
                        },
                        top: -$(".main_con3 .mc3_con ul").height(),
                    });

                    gsap.to(".main_con3 .mc3_con ul li:nth-child(1) .mc3_in .img", {
                        scrollTrigger: {
                            trigger: ".main_con3 .mc3_con ul li:nth-child(1)",
                            start: "-100% top",
                            end: "bottom bottom",
                            //pin : true,
                            scrub: 1,
                            //markers:true,
                            onEnter: function () {
                            },
                        },
                        width: 500,
                        height: 500,
                        'border-radius': 250,
                    });

                    gsap.to(".main_con3 .mc3_con ul li:nth-child(2) .mc3_in .img", {
                        scrollTrigger: {
                            trigger: ".main_con3 .mc3_con ul li:nth-child(2)",
                            start: "-100% top",
                            end: "bottom bottom",
                            //pin : true,
                            scrub: 1,
                            //markers:true,
                            onEnter: function () {
                            },
                        },
                        width: 460,
                        height: 640,
                        'border-radius': 230,
                    });

                    gsap.to(".main_con3 .mc3_con ul li:nth-child(3) .mc3_in .img", {
                        scrollTrigger: {
                            trigger: ".main_con3 .mc3_con ul li:nth-child(3)",
                            start: "-100% top",
                            end: "bottom bottom",
                            //pin : true,
                            scrub: 1,
                            // markers:true,
                            onEnter: function () {
                            },
                        },
                        width: 460,
                        height: 640,
                        'border-radius': 20,
                    });

                    gsap.to(".main_con3 .mc3_con ul li:nth-child(4) .mc3_in .img", {
                        scrollTrigger: {
                            trigger: ".main_con3 .mc3_con ul li:nth-child(4)",
                            start: "-100% top",
                            end: "bottom bottom",
                            //pin : true,
                            scrub: 1,
                            //markers:true,
                            onEnter: function () {
                            },
                        },
                        width: 500,
                        height: 500,
                        'border-radius': 250,
                    });

                    gsap.to(".main_con3 .mc3_con ul li:nth-child(5) .mc3_in .img", {
                        scrollTrigger: {
                            trigger: ".main_con3 .mc3_con ul li:nth-child(5)",
                            start: "-100% top",
                            end: "bottom bottom",
                            //pin : true,
                            scrub: 1,
                            // markers:true,
                            onEnter: function () {
                            },
                        },
                        width: 500,
                        height: 500,
                        'border-radius': 250,
                    });
                },

                // medium
                "(min-width: 769px) and (max-width: 1280px)": function () {
                    gsap.to(".main_con3 .mc3_con ul", {
                        scrollTrigger: {
                            trigger: ".main_con3",
                            start: "top top",
                            end: "+=200%",
                            pin: true,
                            scrub: 1,
                            //markers:true,
                            onEnter: function () {
                                $(".main_con3 .mc3_con ul").css('top', 0);
                            },
                        },
                        left: $(window).innerWidth() - $(".main_con3 .mc3_con ul").innerWidth(),
                    });

                    gsap.to(".main_con3 .mc3_con ul li:nth-child(3) .mc3_in .img", {
                        scrollTrigger: {
                            trigger: ".main_con3 .mc3_con ul",
                            start: "-100% top",
                            end: "bottom bottom",
                            //pin : true,
                            scrub: 1,
                            //markers:true,
                            onEnter: function () {
                            },
                        },
                        width: 270,
                        height: 350,
                        'border-radius': 200,
                        opacity: 1,
                    });

                    gsap.to(".main_con3 .mc3_con ul li:nth-child(1) .mc3_in .img", {
                        scrollTrigger: {
                            trigger: ".main_con3 .mc3_con ul",
                            start: "-100% top",
                            end: "bottom bottom",
                            //pin : true,
                            scrub: 1,
                            //markers:true,
                            onEnter: function () {
                            },
                        },
                        width: 270,
                        height: 270,
                        transform: "translate(0, 50px)",
                        'border-radius': "50%",
                        opacity: 1,
                    });

                    gsap.to(".main_con3 .mc3_con ul li:nth-child(2) .mc3_in .img", {
                        scrollTrigger: {
                            trigger: ".main_con3 .mc3_con ul",
                            start: "-100% top",
                            end: "bottom bottom",
                            //pin : true,
                            scrub: 1,
                            //markers:true,
                            onEnter: function () {
                            },
                        },
                        width: 270,
                        height: 350,
                        'border-radius': 20,
                        opacity: 1,
                    });

                    gsap.to(".main_con3 .mc3_con ul li:nth-child(4) .mc3_in .img", {
                        scrollTrigger: {
                            trigger: ".main_con3 .mc3_con ul",
                            start: "-100% top",
                            end: "bottom bottom",
                            //pin : true,
                            scrub: 1,
                            //markers:true,
                            onEnter: function () {
                            },
                        },
                        width: 270,
                        height: 270,
                        transform: "translate(0, 50px)",
                        'border-radius': "50%",
                        opacity: 1,
                    });

                    gsap.to(".main_con3 .mc3_con ul li:nth-child(5) .mc3_in .img", {
                        scrollTrigger: {
                            trigger: ".main_con3 .mc3_con ul",
                            start: "-100% top",
                            end: "bottom bottom",
                            //pin : true,
                            scrub: 1,
                            //markers:true,
                            onEnter: function () {
                            },
                        },
                        width: 270,
                        height: 270,
                        transform: "translate(0, 50px)",
                        'border-radius': "50%",
                        opacity: 1,
                    });
                },

                // small
                "(min-width: 280px) and (max-width: 768px)": function () {
                    gsap.to(".main_con3 .mc3_con ul", {
                        scrollTrigger: {
                            trigger: ".main_con3",
                            start: "top top",
                            end: "+=200%",
                            pin: true,
                            scrub: 1,
                            //markers:true,
                            onEnter: function () {
                                $(".main_con3 .mc3_con ul").css('top', 0);
                            },
                        },
                        left: $(window).innerWidth() - $(".main_con3 .mc3_con ul").innerWidth(),
                    });

                    gsap.to(".main_con3 .mc3_con ul li:nth-child(3) .mc3_in .img", {
                        scrollTrigger: {
                            trigger: ".main_con3 .mc3_con ul",
                            start: "-100% top",
                            end: "bottom bottom",
                            //pin : true,
                            scrub: 1,
                            //markers:true,
                            onEnter: function () {
                            },
                        },
                        width: 200,
                        height: 250,
                        'border-radius': 200,
                        opacity: 1,
                    });

                    gsap.to(".main_con3 .mc3_con ul li:nth-child(1) .mc3_in .img", {
                        scrollTrigger: {
                            trigger: ".main_con3 .mc3_con ul",
                            start: "-100% top",
                            end: "bottom bottom",
                            //pin : true,
                            scrub: 1,
                            //markers:true,
                            onEnter: function () {
                            },
                        },
                        width: 200,
                        height: 200,
                        transform: "translate(0, 50px)",
                        'border-radius': "50%",
                        opacity: 1,
                    });

                    gsap.to(".main_con3 .mc3_con ul li:nth-child(2) .mc3_in .img", {
                        scrollTrigger: {
                            trigger: ".main_con3 .mc3_con ul",
                            start: "-100% top",
                            end: "bottom bottom",
                            //pin : true,
                            scrub: 1,
                            //markers:true,
                            onEnter: function () {
                            },
                        },
                        width: "200",
                        height: "250",
                        'border-radius': 20,
                        opacity: 1,
                    });

                    gsap.to(".main_con3 .mc3_con ul li:nth-child(4) .mc3_in .img", {
                        scrollTrigger: {
                            trigger: ".main_con3 .mc3_con ul",
                            start: "-100% top",
                            end: "bottom bottom",
                            //pin : true,
                            scrub: 1,
                            //markers:true,
                            onEnter: function () {
                            },
                        },
                        width: 200,
                        height: 200,
                        transform: "translate(0, 50px)",
                        'border-radius': "50%",
                        opacity: 1,
                    });

                    gsap.to(".main_con3 .mc3_con ul li:nth-child(5) .mc3_in .img", {
                        scrollTrigger: {
                            trigger: ".main_con3 .mc3_con ul",
                            start: "-100% top",
                            end: "bottom bottom",
                            //pin : true,
                            scrub: 1,
                            //markers:true,
                            onEnter: function () {
                            },
                        },
                        width: 200,
                        height: 200,
                        transform: "translate(0, 50px)",
                        'border-radius': "50%",
                        opacity: 1,
                    });
                },

            });
        },
        resizeFn: function () {

            $(window).on('resize', function () {
                // �댁긽�� �곕Ⅸ pc, mobile 援щ텇
                if (window.innerWidth > 1500) { // wide
                } else if (window.innerWidth <= 1500 && window.innerWidth > 1024) { // pc
                    _deviceCondition = "pc";

                } else if (window.innerWidth <= 1024 && window.innerWidth > 768) { // tabl
                    _deviceCondition = "tabl";

                } else { // mobile
                    _deviceCondition = "mobile";

                }
            }); $(window).resize();
        },
        swiperFn: function () {
            var mainCon2Swiper = new Swiper(".main_con2 .swiper-container", {
                slidesPerView: "auto",
                spaceBetween: 40,
                breakpoints: {
                    500: {
                    },
                    768: {
                        spaceBetween: 20,
                    },
                    1024: {
                    },
                    1600: {
                    },
                },
            });

            $(".t_srch_div .recomm").each(function (index, element) {
                $(this).find(".swiper-container").addClass("srch_hashg_swiper" + index);

                var srchHashSwiper = new Swiper(".srch_hashg_swiper" + index, {
                    slidesPerView: "auto",
                    spaceBetween: 10,
                });
            });
        },
    }
})();

$(window).on("load", function () {
    mainScript.mainVisual();
    mainScript.commonMotion();
    mainScript.scrollFn();
    mainScript.resizeFn();
    mainScript.swiperFn();
});

function autoRollEvt() {
    if (isMove == false && $(".mv_roll .unit").length > 1) {
        isMove = true;
        $(".mv_roll .controller a.next").eq(curVisual).removeClass("on");
        gsap.to($(".mv_roll").find(".unit").eq(curVisual), { duration: 1, left: '-100%', ease: Cubic.easeOut });
        gsap.to($(".mv_roll").find(".unit").eq(curVisual).find(".txt1"), { duration: 0.5, transform: 'translate(0, 200px)', opacity: 0, delay: 0.5, ease: Cubic.easeOut });
        gsap.to($(".mv_roll").find(".unit").eq(curVisual).find(".txt2"), { duration: 0.5, transform: 'translate(0, 200px)', opacity: 0, delay: 0.5, ease: Cubic.easeOut });
        gsap.to($(".mv_roll").find(".unit").eq(curVisual).find(".bt"), { duration: 0.5, transform: 'translate(0, 200px)', opacity: 0, delay: 0.5, ease: Cubic.easeOut });
        curVisual++;
        if (curVisual > 2) {
            curVisual = 0;
        }
        $(".mv_roll .controller a.next").eq(curVisual).addClass("on");
        gsap.to($(".mv_roll").find(".unit").eq(curVisual), { duration: 0, left: '100%', ease: Cubic.easeOut });
        gsap.to($(".mv_roll").find(".unit").eq(curVisual), { duration: 1, left: '0%', ease: Cubic.easeOut });
        gsap.to($(".mv_roll").find(".unit").eq(curVisual).find(".txt1"), { duration: 1, transform: 'translate(0, 0)', opacity: 1, delay: 1, ease: Cubic.easeOut });
        gsap.to($(".mv_roll").find(".unit").eq(curVisual).find(".txt2"), { duration: 1, transform: 'translate(0, 0)', opacity: 1, delay: 1.1, ease: Cubic.easeOut });
        gsap.to($(".mv_roll").find(".unit").eq(curVisual).find(".bt"), {
            duration: 1, transform: 'translate(0, 0)', opacity: 1, delay: 1.2, ease: Cubic.easeOut, onComplete: function () {
                isMove = false;
            }
        });
    }
}