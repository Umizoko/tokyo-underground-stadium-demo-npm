//
// Draweの制御
//	
import $ from 'jquery';

export function drawer () {
    
    document.addEventListener("DOMContentLoaded", () => {
         // 
		//　Drawerを開く
		// 
		const bar = document.querySelector(".header-mobile__menu-icon");
		if (bar != null) {
			bar.addEventListener("click", () => {
				$("header").find(".menu").toggleClass("open");
				$(".header-mobile__mat").toggleClass("fading");
			});
		}

		// 
		// Drawerを閉じる
		// 
		const mat = document.querySelector(".header-mobile__mat");
		if (mat != null) {
			mat.addEventListener("click", () => {
				$("header").find(".menu").toggleClass("open");
				$(".header-mobile__mat").toggleClass("fading");
			});
		}
	});
}