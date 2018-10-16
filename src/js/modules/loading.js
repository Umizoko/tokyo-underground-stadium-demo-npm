import anime from 'animejs';
import $ from 'jquery';

/**
 * Loding画面のAnimationを制御
 * 
 * @export
 */
export function loading() {
    // 
    // cookieを利用して、クライアントが初めて訪れたかどうかを判断
    // 
    var doOnce = (() => {
        if (document.cookie.replace(/(?:(?:^|.*;\s*)doSomethingOnlyOnce\s*\=\s*([^;]*).*$)|^.*$/, "$1") !== "true") {
            document.cookie = "doSomethingOnlyOnce=true; expires=Fri, 31 Dec 9999 23:59:59 GMT";
            return Boolean(true)
        } else {
            return Boolean(false);
        }
    });

    let loadingTrigger = doOnce();

    document.addEventListener("DOMContentLoaded", () => {

        // 
        // 二回目以降はLoading画面は飛ばす
        // 
        if (!loadingTrigger) {
            if (document.querySelector('.noScroll') != null) {
                document.querySelector('.noScroll').classList.remove("noScroll");
                const loading = $(".loading");
                loading.css("display", "none");
            }
        }
    });

    window.addEventListener('load', () => {
        // 
        // indexでLoading画面の設定（初めて訪れた場合のみ）
        // 
        const progressLogEl = document.querySelector('#update .progress-log');
        if (progressLogEl != null) {
            if (loadingTrigger) {
                // 
                // プログレスバー
                // 
                const easingName = 'easeInOutQuad'
                var progress_bar = anime({
                    targets: '.progress-bar',
                    delay: 1000,
                    easing: easingName,
                    width: '200px',
                    complete: function (anim) {
                        // 
                        // フェード
                        // 
                        var fade = anime({
                            targets: '.loading',
                            opacity: 0,
                            delay: 1000,
                            easing: easingName,
                            complete: function (anim) {
                                document.querySelector('.noScroll').classList.remove("noScroll");
                                const loading = $(".loading");
                                loading.css("display", "none");
                            }
                        });
                    }
                });
            }
        }
    })
}