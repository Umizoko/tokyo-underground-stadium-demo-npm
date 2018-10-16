import $ from 'jquery';

/**
 * ScrollのAnimationの設定
 *
 * @export
 */
export function scroll() {

    window.addEventListener('load', () => {

        let curr_scroll_top;
        $(window).scroll(function () {
            curr_scroll_top = $(this).scrollTop();

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