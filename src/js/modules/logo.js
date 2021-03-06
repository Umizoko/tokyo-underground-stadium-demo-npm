import anime from 'animejs';

/**
 * LogoのAnimation制御
 *
 * @export
 */
export function logo () {
    
    document.addEventListener("DOMContentLoaded", () => {
    
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
    
    });
}