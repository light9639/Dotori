/**
 * 스와이퍼 메인 배너 메뉴
 */
function numFormat(num) {
    if (num < 10) {
        return '0' + num;
    } else {
        return num
    }
}

let swiperBar = document.querySelector(".sc-visual .swiper-bar");
let scvSwiper = document.querySelector('.sc-visual .swiper');
let textSwiper = document.querySelectorAll('.sc-visual .title-area h2');

visualSwiper = new Swiper(".sc-visual .swiper", {
    autoplay: {
        delay: 5000,
        disableOnInteraction: false
    },
    speed: 500,
    loop: true,
    pagination: {
        el: ".pagination",
        type: "custom",
        renderCustom: function (swiper, current, total) {
            return `<span class="">${numFormat(current)}</span>
                <span class="">${numFormat(total)}</span>`;
        }
    },
    navigation: {
        nextEl: ".sc-visual .btn-next",
        prevEl: ".sc-visual .btn-prev"
    },
    effect: "fade",
    on: {
        init: function () {
            swiperBar.classList.remove('animate', 'active');
            swiperBar.classList.add('animate', 'active');
            textSwiper[0].classList.add('on')
        },
        slideChangeTransitionStart: function () {
            swiperBar.classList.remove('animate', 'active');
            swiperBar.classList.add('active');
        },
        slideChangeTransitionEnd: function () {
            swiperBar.classList.add('animate');
        },
        slideChange: function (item) {
            for (let i = 0; i < textSwiper.length; i++) {
                textSwiper[i].classList.remove('on')
            }
            textSwiper[item.realIndex].classList.add('on')
        }
    }
});
scvSwiper.addEventListener('mouseover', function () {
    visualSwiper.autoplay.stop();
    swiperBar.classList.remove('animate')
})
scvSwiper.addEventListener('mouseout', function () {
    visualSwiper.autoplay.start();
    swiperBar.classList.add('animate')
})

/**
 * 스와이퍼 룸 메뉴
 */
roomSwiper = new Swiper(".sc-room .swiper", {
    speed: 500,
    loop: true,
    slidesPerView: 1.5,
    spaceBetween: 30,
    breakpoints: {
        767: {
            slidesPerView: 2.5,
            spaceBetween: 40,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 80,
        }
    }
})

/**
 * swiper 탭 메뉴
 */

let tab1 = document.querySelector('.tab-menu #tab1');
let tab2 = document.querySelector('.tab-menu #tab2');
let tab3 = document.querySelector('.tab-menu #tab3');

/**
 * swiper 탭메뉴
 */
tabSwiper = new Swiper(".sc-tab .swiper", {
    effect: "fade",
    speed: 1000,
    slidesPerView: 1,
    on: {
        init: function () { },
        slideChange: function () {
            var slider = this;
            if (slider.activeIndex == 0) {
                tab1.classList.add('active')
                tab2.classList.remove('active')
                tab3.classList.remove('active')
            } else if (slider.activeIndex == 1) {
                tab1.classList.remove('active')
                tab2.classList.add('active')
                tab3.classList.remove('active')
            } else if (slider.activeIndex == 2) {
                tab1.classList.remove('active')
                tab2.classList.remove('active')
                tab3.classList.add('active')
            }

        }
    },
})
let tabList = [tab1, tab2, tab3];
tabList.forEach(function (a, i) {
    a.addEventListener('click', function () {
        tabSwiper.slideTo(i, 1000, false);
    })
})

function tabJS() {
    if (window.innerWidth >= 1200) {
        /**
         * swiper 탭메뉴
         */
        tabSwiper.destroy();
        tabSwiper = new Swiper(".sc-tab .swiper", {
            effect: "fade",
            speed: 1000,
            slidesPerView: 1,
            on: {
                init: function () { },
                slideChange: function () {
                    var slider = this;
                    if (slider.activeIndex == 0) {
                        tab1.classList.add('active')
                        tab2.classList.remove('active')
                        tab3.classList.remove('active')
                    } else if (slider.activeIndex == 1) {
                        tab1.classList.remove('active')
                        tab2.classList.add('active')
                        tab3.classList.remove('active')
                    } else if (slider.activeIndex == 2) {
                        tab1.classList.remove('active')
                        tab2.classList.remove('active')
                        tab3.classList.add('active')
                    }

                }
            },
        })
    } else if (window.innerWidth < 1200) {
        tabSwiper.destroy();

        tabSwiper = new Swiper(".sc-tab .swiper", {
            slidesPerView: 1.5,
            spaceBetween: 15,
            on: {
                init: function () { },
                slideChange: function () { }
            }
        })
    }
}

/**
 * 스와이퍼 아이템 메뉴
 */
sellerSwiper = new Swiper(".sc-item .swiper", {
    speed: 500,
    slidesPerView: 2.25,
    spaceBetween: 15,
    breakpoints: {
        767: {
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 60,
        },
    }
})

/**
 * seller 부분 모바일 메뉴
 */
sellerSwiper = new Swiper(".sc-seller .mo-right .swiper", {
    speed: 500,
    slidesPerView: 2.25,
    spaceBetween: 15,
    breakpoints: {
        767: {
            slidesPerView: 3.5,
            spaceBetween: 20,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
    }
})

/**
 * 맨 처음 나오는 광고 부분
 */
let btnClose = document.querySelector('.sc-advertise .btn-close');
let AdverTise = document.querySelector('.sc-advertise');
let Body = document.querySelector('body');

btnClose.addEventListener('click', function () {
    AdverTise.classList.remove('on');
    Body.classList.remove('noscroll');
})
document.querySelector('.sc-advertise .close-wrap label').addEventListener('click', function () {
    this.classList.toggle('on')
})
btnClose.addEventListener('click', function () {
    if (document.querySelector('.sc-advertise .close-wrap label.on')) {
        sessionStorage.setItem('advertise', 'none');
    }
})
document.addEventListener("DOMContentLoaded", function () {
    if (sessionStorage.getItem('advertise') != 'none') {
        AdverTise.classList.add('on')
        Body.classList.add('noscroll');
    } else {
        AdverTise.classList.remove('on');
        Body.classList.remove('noscroll');
    }
})

/**
 * 헤더부분 언어 선택 접었다 펴기
 */
document.querySelector('.header .select-box').addEventListener('click', function () {
    this.classList.toggle('on')
})

/**
 * 헤더 메뉴 호버시 서브메뉴
 */
function headerMenu() {
    let mMenu = document.querySelectorAll('.gnb-list > li');

    if (window.innerWidth < 1200) {
        mMenu.forEach(function (el) {
            el.addEventListener('click', function () {
                for (let i = 0; i < mMenu.length; i++) {
                    if (mMenu[i] != this) {
                        mMenu[i].classList.remove('on')
                    }
                }
                if (this.classList.contains('on')) {
                    this.classList.remove('on')
                } else {
                    this.classList.add('on')
                }
            })
        })
    } else if (window.innerWidth >= 1200) {
        mMenu.forEach(function (el) {
            el.addEventListener('mouseover', function () {
                this.classList.add('on')
            })
            el.addEventListener('mouseleave', function () {
                this.classList.remove('on')
            })
        })
    } else {
        return
    }
}

/**
 * 검색버튼 클릭시 검색창 열고 닫기
 */
document.querySelector('.header .search-btn').addEventListener('click', function () {
    document.querySelector('.search-modal').classList.add('on')
})
document.querySelector('.search-modal .btn-close').addEventListener('click', function () {
    document.querySelector('.search-modal').classList.remove('on')
})

/**
 * 공유버튼 클릭시 공유창 열고 닫기
 */
document.querySelector('.header .share-btn .share-icon').addEventListener('click', function () {
    document.querySelector('.header .share-btn').classList.toggle('active')
})

/**
 * header 모바일 햄버거 클릭시 모바일 메뉴 나오게
 */
document.querySelector('.ham-btn').addEventListener('click', () => {
    document.querySelector('.gnb').classList.add('on');
    document.querySelector('body').classList.add('noscroll')
})

document.querySelector('.gnb .close').addEventListener('click', () => {
    document.querySelector('.gnb').classList.remove('on');
    document.querySelector('body').classList.remove('noscroll')
})

/**
 * 공유버튼 다른 곳 클릭시 닫기
 */
document.addEventListener('click', function (e) {
    var targetElement = e.target;
    var btnElements = document.querySelectorAll('.header .header-bottom .right-btn .btn');
    var shareBtns = document.querySelectorAll('.share-btn');

    var isOutsideClick = true;

    btnElements.forEach(function (btnElement) {
        if (btnElement.contains(targetElement)) {
            isOutsideClick = false;
        }
    });

    if (isOutsideClick) {
        shareBtns.forEach(function (shareBtn) {
            shareBtn.classList.remove('active');
        });
    }
});

document.querySelector('.header-top .login').addEventListener('click', function () {
    document.querySelector('.sc-login').classList.remove('none');
})
document.querySelector('.sc-login .tit-area button').addEventListener('click', function () {
    document.querySelector('.sc-login').classList.add('none');
})

document.querySelector('.header-top .join').addEventListener('click', function () {
    document.querySelector('.sc-signup').classList.remove('none');
})
document.querySelector('.sc-signup .tit-area button').addEventListener('click', function () {
    document.querySelector('.sc-signup').classList.add('none');
})

/**
* 오른쪽 위로가기 버튼
*/
const topEl = document.querySelector('.sc-top .top-btn');

topEl.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: "smooth" })
    return false;
})

/**
 * 이미지 클릭시 움직이게
 */
function ImgMoveJS() {
    if (window.innerWidth >= 1200) {
        document.querySelector('.sc-behind .title-wrap').addEventListener('mousemove', (e) => {
            let num = (e.clientY - 400) / 5;
            document.querySelector('.sc-behind .img-wrap').style.transform = `rotate(${-num}deg)`
        })
    } else {
        document.querySelector('.sc-behind .img-wrap').style.transform = "rotate(0deg)"
    }
}

/**
 * 커서 움직이면 이미지 나오게
 */
function mouseMoveFun() {
    if (window.innerWidth >= 767) {
        document.addEventListener('mousemove', function (e) {
            var XOffset = e.clientX;
            var YOffset = e.clientY;

            gsap.to('.container .pointer', {
                x: XOffset,
                y: YOffset,
            });
        });

        var swiperEl = document.querySelectorAll('.swiper');
        var pointerEl = document.querySelector('.pointer');

        swiperEl.forEach(function (element) {
            console.log(element.dataset['slide']);
            if (element.dataset['slide']) {
                element.addEventListener('mouseenter', function () {
                    pointerEl.classList.add('on');
                });
                element.addEventListener('mouseleave', function () {
                    pointerEl.classList.remove('on');
                });
            } else {
                return
            }
        })
    } else {
        return
    }
}

/**
 * sc-seller 보이면 body에 dark 클래스 추가
 */
function sellerJS() {
    if (window.innerWidth >= 767) {
        ScrollTrigger.create({
            trigger: '.sc-seller',
            start: "0% 80%",
            end: "100% 0%",
            toggleClass: { targets: 'html', className: 'dark' }
        })
    } else {
        return
    }
}

/**
 * 윈도우 로드 시 함수 실행
 */
window.onload = function () {
    sellerJS();
    ImgMoveJS();
    headerMenu();
    tabJS();
}

/**
 * 화면 크기 리사이즈시 함수 작동
 */
window.addEventListener('resize', function () {
    sellerJS();
    ImgMoveJS();
    headerMenu();
    tabJS();
});

/**
 * 오른쪽 위로가기 버튼 나오게하기
 */
ScrollTrigger.create({
    trigger: '.container',
    start: "0% 0%",
    end: "100% 0%",
    toggleClass: { targets: '.sc-top', className: 'block' }
})

/**
 * 오른쪽 위로가기 버튼 고정시키기
 */
ScrollTrigger.create({
    trigger: '.footer',
    start: "0% 100%",
    end: "100% 0%",
    toggleClass: { targets: '.sc-top', className: 'no-fix' }
})