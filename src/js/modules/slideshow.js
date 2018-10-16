import Flickity from 'flickity';
import $ from 'jquery';

/**
 * Slideshowの設定
 *
 * @export
 */
export function slideshow(){

	document.addEventListener("DOMContentLoaded", () => {
        // 
		//　スライドショーDOMのDisplay：ON or OFF
		// 
		$(window).on('load resize', () => {
			var windowWidth = window.innerWidth;
			if (windowWidth > 1000) {
				// slideshowの削除
				const slideshow = document.querySelector(".event");
				if (slideshow != null) {
					document.querySelector("#mobile").classList.add("displayNone");
					document.querySelector("#desktop").classList.remove("displayNone");
				}

			} else {
				// slideshowの追加
				const slideshow = document.querySelector(".event");
				if (slideshow != null) {
					document.querySelector("#mobile").classList.remove("displayNone");
					document.querySelector("#desktop").classList.add("displayNone");
				}
			}
		});
    });

    window.addEventListener('load', () => {

		var elem = document.querySelector('.main-carousel');
		if (elem != null) {
			var flicky = new Flickity(elem, {
				cellAlign: 'center',
				contain: true,
				autoPlay: 3000
			});
		}
	});
}