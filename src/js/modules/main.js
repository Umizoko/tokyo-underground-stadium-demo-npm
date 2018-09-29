//
// Libraryをimport
//	
export function main() {

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