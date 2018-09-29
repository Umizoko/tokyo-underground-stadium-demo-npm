//
// Libraryをimport
//	
import $ from 'jquery';

export function main() {

	document.addEventListener("DOMContentLoaded", () => {
		// 
		// ファイルを読み込み終了時、または画面サイズ変更時にindex.html aboutの画像を書き換える
		// Fixe: indexのときのみ
		// 
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

	window.addEventListener('load', () => {

		// 
		// service workerの登録
		// 
		if ('serviceWorker' in navigator) {
			navigator.serviceWorker.register('/tokyo-underground-stadium-demo-npm/serviceWorker.js', {
					scope: '/tokyo-underground-stadium-demo-npm/'
				})
				.then((registration) => {
					console.log('ServiceWorker registration successful with scope: ', registration.scope);
				}).catch((err) => {
					console.log('ServiceWorker registration failed: ', err);
				});
		}
	});
}