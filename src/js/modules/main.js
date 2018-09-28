export function entry() {

	//
	// Libraryをimport
	//	
	const anime = require('animejs');
	const Flickity = require('flickity');
	const $ = require('jquery');

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

	// 
	// 初めて訪れた場合はtrue,二回目以降はfalse
	// 
	let loadingTrigger = doOnce();

	document.addEventListener("DOMContentLoaded", () => {
		
		// 
		// 二回目以降はLoading画面は飛ばす
		// 
		if (!loadingTrigger) {
			if(document.querySelector('.noScroll') != null){
				document.querySelector('.noScroll').classList.remove("noScroll");
				const loading = $(".loading");
				loading.css("display", "none");
			}
		}

		// 
		// indexのButtonボーダーのアニメーション
		// 
		const about = document.querySelector('.about');
		if (about != null) {
			const button = document.querySelectorAll(".button");
			const path = document.querySelectorAll(".polymorph");
			for (let i = 0; i < button.length; i++) {
				button[i].addEventListener('mouseover', () => {
					anime.remove(path[i]);
					var hover = anime({
						targets: path[i],
						d: 'M10,10 C10,10 50,7 90,7 C130,7 170,10 170,10 C170,10 172,20 172,30 C172,40 170,50 170,50 C170,50 130,53 90,53 C50,53 10,50 10,50 C10,50 8,40 8,30 C8,20 10,10 10,10 Z',
						duration: 700,
						elasticity: 500,
						offset: 0
					});
				});
				button[i].addEventListener('mouseout', () => {
					anime.remove(path[i]);
					var down = anime({
						targets: path[i],
						d: 'M10,10 C10,10 50,9.98999977 90,9.98999977 C130,9.98999977 170,10 170,10 C170,10 170.009995,20 170.009995,30 C170.009995,40 170,50 170,50 C170,50 130,50.0099983 90,50.0099983 C50,50.0099983 10,50 10,50 C10,50 9.98999977,40 9.98999977,30 C9.98999977,20 10,10 10,10 Z',
						duration: 800,
						elasticity: 700,
						offset: 0
					});
				});
				button[i].addEventListener('mousedown', () => {
					anime.remove(path[i]);
					var down = anime({
						targets: path[i],
						d: 'M10,10 C10,10 50,9.98999977 90,9.98999977 C130,9.98999977 170,10 170,10 C170,10 170.009995,20 170.009995,30 C170.009995,40 170,50 170,50 C170,50 130,50.0099983 90,50.0099983 C50,50.0099983 10,50 10,50 C10,50 9.98999977,40 9.98999977,30 C9.98999977,20 10,10 10,10 Z',
						duration: 800,
						elasticity: 700,
						offset: 0
					});
				});
			}
		}

		// 
		// contactのLogoのアニメーション
		// 
		var lineDrawing = anime({
			targets: '#lineDrawing .lines path',
			strokeDashoffset: [anime.setDashoffset, 0],
			easing: 'easeInOutSine',
			duration: 3000,
			delay: function (el, i) {
				return i * 250
			},
			direction: 'alternate',
			loop: false
		});

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

		// 
		// ファイルを読み込み終了時、または画面サイズ変更時にindex.html aboutの画像を書き換える
		//　スライドショーDOMのDisplay：ON or OFF
		// 
		$(window).on('load resize', () => {
			var windowWidth = window.innerWidth;
			const aboutImage = $(".about__right").find("img");
			if (windowWidth > 1000) {
				// PCの処理
				aboutImage.attr("src", "./assets/image/Desktop/home-about.jpg");

				// slideshowの削除
				const slideshow = document.querySelector(".event");
				if (slideshow != null) {
					document.querySelector("#mobile").classList.add("displayNone");
					document.querySelector("#desktop").classList.remove("displayNone");
				}

			} else {
				// Mobileの処理
				aboutImage.attr("src", "./assets/image/Mobile/home-about.jpg");

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

		// 
		// index スライドショーの設定
		// 
		var elem = document.querySelector('.main-carousel');
		if (elem != null) {
			var flicky = new Flickity(elem, {
				cellAlign: 'center',
				contain: true,
				autoPlay: 3000
			});
		}

		// 
		// スクロール時の設定
		// 
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