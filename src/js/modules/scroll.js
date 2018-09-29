// 
// ScrollのAnimation設定
// 
import $ from 'jquery';

export function scroll() {

    window.addEventListener('load', () => {

        let curr_scroll_top;
        $(window).scroll(function () {
            curr_scroll_top = $(this).scrollTop();

            // 
            // index.html headerのmenuがかぶるのを修正
            // 
            if (document.querySelector(".header") != null) {
                if (curr_scroll_top <= $(".header").find(".menu").offset().top) {
                    $(".header").find(".menu").removeClass("hidden");
                    $('.header').css('z-index', '1');
                } else if (curr_scroll_top > $(".header").find(".menu").offset().top) {
                    $(".header").find(".menu").addClass("hidden");
                    $('.header').css('z-index', '0');
                }
            }

            // 
            // 各コンテンツのスライドアニメーションの設定
            // 
            let offsetY = 300; // スクロールの発火位置を300px上にずらす
            // 
            // index.html
            // 
            if (document.querySelector('.about') != null) {
                // about
                if (curr_scroll_top + offsetY >= $(".about").offset().top) {
                    document.querySelector('.about').classList.add('slideAnimation');
                }
                // event
                if (document.querySelector('.event') != null) {
                    if ($('#desktop').css('display') != 'none') {
                        if (curr_scroll_top + offsetY >= $('#desktop').find(".event").offset().top) {
                            document.querySelectorAll('.event')[0].classList.add('slideAnimation');
                            document.querySelectorAll('.event')[1].classList.add('slideAnimation');
                        }
                    }
                    if ($('#mobile').css('display') != 'none') {
                        if (curr_scroll_top + offsetY >= $('#mobile').find(".event").offset().top) {
                            document.querySelectorAll('.event')[0].classList.add('slideAnimation');
                            document.querySelectorAll('.event')[1].classList.add('slideAnimation');
                        }
                    }
                }
                // news
                if (curr_scroll_top + offsetY >= $(".news").offset().top) {
                    document.querySelector('.news').classList.add('slideAnimation');
                }
            }
            // 
            // information.html
            // 
            if (document.querySelector('.open') != null) {
                // attention
                if (curr_scroll_top + offsetY >= $(".attention").offset().top) {
                    document.querySelector('.attention').classList.add('slideAnimation');

                }
                // link
                if (curr_scroll_top + offsetY >= $(".link").offset().top) {
                    document.querySelector('.link').classList.add('slideAnimation');
                }
            }
        })
    });
}