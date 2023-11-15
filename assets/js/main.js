function numFormat(num) {
    if (num < 10) {
        return '0' + num;
    } else {
        return num
    }
}

// 스와이퍼 메인 배너 메뉴
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
            $(".sc-visual .swiper-bar").removeClass("animate active");
            $(".sc-visual .swiper-bar").eq(0).addClass("animate active");
        },
        slideChangeTransitionStart: function () {
            $(".sc-visual .swiper-bar").removeClass("animate active");
            $(".sc-visual .swiper-bar").eq(0).addClass("active");
        },
        slideChangeTransitionEnd: function () {
            $(".sc-visual .swiper-bar").eq(0).addClass("animate");
        }
    }
});
$(".swiper-container").hover(function () {
    swiper.autoplay.stop();
    $(".sc-visual .swiper-bar").removeClass("animate");
}, function () {
    swiper.autoplay.start();
    $(".sc-visual .swiper-bar").addClass("animate");
});

// 스와이퍼 룸 메뉴
roomSwiper = new Swiper(".sc-room .swiper", {
    speed: 500,
    loop: true,
    slidesPerView: 3,
    spaceBetween: 80,
})

// swiper 탭메뉴
tabSwiper = new Swiper(".sc-tab .swiper", {
    effect: "fade",
    speed: 1000,
    slidesPerView: 1,
    on: {
        init: function () { },
        slideChange: function () {
            var slider = this;
            if (slider.activeIndex == 0) {
                $('#tab1').addClass('active');
                $('#tab2').removeClass('active');
                $('#tab3').removeClass('active');
            } else if (slider.activeIndex == 1) {
                $('#tab1').removeClass('active');
                $('#tab2').addClass('active');
                $('#tab3').removeClass('active');
            } else if (slider.activeIndex == 2) {
                $('#tab1').removeClass('active');
                $('#tab2').removeClass('active');
                $('#tab3').addClass('active');
            }

        }
    }
})
$('#tab1').click(function () {
    tabSwiper.slideTo(0, 1000, false);
});
$('#tab2').click(function () {
    tabSwiper.slideTo(1, 1000, false);
});
$('#tab3').click(function () {
    tabSwiper.slideTo(2, 1000, false);
});

// 스와이퍼 아이템 메뉴
sellerSwiper = new Swiper(".sc-item .swiper", {
    speed: 500,
    loop: true,
    slidesPerView: 3,
    spaceBetween: 60,
})

// 맨 처음 나오는 광고 부분
$('.sc-advertise .btn-close').click(function () {
    $('.sc-advertise').addClass('on')
})
$('.sc-advertise .close-wrap label').click(function () {
    $(this).toggleClass('on')
})

// 헤더부분 언어 선택 접었다 펴기
$('.header .select-box').click(function () {
    $(this).toggleClass('on')
})

// 헤더 메뉴 호버시 서브메뉴 
$('.header .gnb > ul > li').hover(function () {
    $(this).toggleClass('on')
})

// 검색버튼 클릭시 검색창 열고 닫기
$('.header .search-btn').click(function () {
    $('.search-modal').addClass('on')
})
$('.search-modal .btn-close').click(function () {
    $('.search-modal').removeClass('on')
})

// 공유버튼 클릭시 공유창 열고 닫기
$('.header .share-btn .share-icon').click(function () {
    $('.header .share-btn').toggleClass('active')
})

// 공유버튼 다른 곳 클릭시 닫기
$(document).on('click', function (e) {
    if ($('.header-bottom .right-btn .btn').has(e.target).length) {
        $('.share-btn').removeClass('active')
    }
});

// 커서 움직이면 이미지 나오게
$(document).mousemove(function (e) {
    XOffset = e.clientX;
    YOffset = e.clientY;

    gsap.to('.container .pointer', {
        x: XOffset,
        y: YOffset,
    })
})

$('.sc-room .swiper').hover(function () {
    $('.sc-room .pointer').addClass('on')
}, function () {
    $('.sc-room .pointer').removeClass('on')
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
document.querySelector('.sc-behind .title-wrap').addEventListener('mousemove', (e) => {
    let num = (e.clientY - 400) / 5;
    document.querySelector('.sc-behind .img-wrap').style.transform = `rotate(-${num}deg)`
})

// sc-seller 보이면 body에 dark 클래스 추가
ScrollTrigger.create({
    trigger: '.sc-seller',
    start: "0% 80%",
    end: "100% 0%",
    toggleClass: { targets: 'html', className: 'dark' }
})

// 도토리 베스트셀러 스크롤 내릴 시 오른쪽 고정
// ScrollTrigger.create({
//     trigger: '.sc-seller',
//     start: "0% 20%",
//     end: "80% 0%",
//     toggleClass: { targets: '.sc-seller .title-area .textbox', className: 'on' }
// })

// 도토리 베스트셀러 스크롤 다 내렸을 시 하단 고정
// ScrollTrigger.create({
//     trigger: '.sc-seller',
//     start: "80% 0%",
//     end: "100% 0%",
//     toggleClass: { targets: '.sc-seller .title-area .textbox', className: 'end' }
// })

// 오른쪽 위로가기 버튼 나오게하기
ScrollTrigger.create({
    trigger: '.container',
    start: "0% 0%",
    end: "100% 0%",
    toggleClass: { targets: '.sc-top', className: 'block' }
})

// 오른쪽 위로가기 버튼 고정시키기
ScrollTrigger.create({
    trigger: '.footer',
    start: "0% 100%",
    end: "100% 0%",
    toggleClass: { targets: '.sc-top', className: 'no-fix' }
})