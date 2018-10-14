// エントリーポイント
import '@webcomponents/webcomponentsjs/webcomponents-bundle';
// import '@webcomponents/webcomponentsjs/webcomponents-loader';

import $ from 'jquery';

// Moduleをimport
import {
    main
} from './modules/main';

import {
    loading
} from './modules/loading';

import {
    scroll
} from './modules/scroll';

import {
    slideshow
} from './modules/slideshow';

import './modules/custom-button';
import './modules/custom-footer';
import './modules/custom-drawer';

// style.sassの読み込み
import 'flickity/dist/flickity.min.css';
import '../scss/index.scss'

main();

loading();
scroll();
slideshow();

// 
// ファイルを読み込み終了時、または画面サイズ変更時にindex.html aboutの画像を書き換える
// Fixe: indexのときのみ
// 
document.addEventListener("DOMContentLoaded", () => {

    $(window).on('load resize', () => {
        var windowWidth = window.innerWidth;
        const aboutImage = $(".about__right").find("img");
        if (windowWidth > 1000) {
            // PCの処理
            aboutImage.attr("src", "./assets/image/Desktop/home-about.jpg");
        } else {
            // Mobileの処理
            aboutImage.attr("src", "./assets/image/Mobile/home-about.jpg");
        }
    });
});