
 import anime from 'animejs';
/**
 * ホバーしたときにボーダーがモーフィングするButton
 * 
 * @class CustomButton: 
 * @extends {HTMLElement}
 */
 class CustomButton extends HTMLElement {

    static get style() {
        return `
        <style>
        .custom-button {
            display: block;
        }

        a {
            display: inline-block;
            width: 180px;
            height: 60px;
            color: black;
            font-size: 18px;
    
            line-height: 1.5;
            text-decoration: none;
            position: relative;
        }

        svg {
            position: absolute;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
        }

        span {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 100%;
            transform: translateX(-50%) translateY(-50%);
            text-align: center;
        }

        .a {
            color: black;
        }

        @media screen and (max-width: 1000px) {
            a {
                font-size: 18px;
                line-height: 2;
            }

            a:hover {
                background-color: rgba(0, 0, 0, 0);
            }
        }

        </style>
        `;
    }

    constructor() {

        super();

        this.shadow = this.attachShadow({
            mode: 'open'
        });

        this.shadow.innerHTML = CustomButton.style;

        var root = document.createElement('div');
        root.className = 'custom-button';
        this.shadow.appendChild(root);

        root.innerHTML = `
            <a href="#" class='button'>
                <svg class="morph" viewBox="0 0 180 60">
                    <defs>
                    </defs>
                    <g fill="none" fill-rule="evenodd" stroke-width="1" stroke="currentColor">
                        <path class="a polymorph" d="M10,10 C10,10 50,9.98999977 90,9.98999977 C130,9.98999977 170,10 170,10 C170,10 170.009995,20 170.009995,30 C170.009995,40 170,50 170,50 C170,50 130,50.0099983 90,50.0099983 C50,50.0099983 10,50 10,50 C10,50 9.98999977,40 9.98999977,30 C9.98999977,20 10,10 10,10 Z"></path>
                    </g>
                </svg>
                <span>VIEW MORE</span>
            </a>
            `;

        document.addEventListener('DOMContentLoaded', () => {

            // 
            // Animation Setting
            // 
            const button = root.querySelector(".button");
            const path = root.querySelector(".polymorph");
            button.addEventListener('mouseover', () => {
                anime.remove(path);
                var hover = anime({
                    targets: path,
                    d: 'M10,10 C10,10 50,7 90,7 C130,7 170,10 170,10 C170,10 172,20 172,30 C172,40 170,50 170,50 C170,50 130,53 90,53 C50,53 10,50 10,50 C10,50 8,40 8,30 C8,20 10,10 10,10 Z',
                    duration: 700,
                    elasticity: 500,
                    offset: 0
                });
            });
            button.addEventListener('mouseout', () => {
                anime.remove(path);
                var down = anime({
                    targets: path,
                    d: 'M10,10 C10,10 50,9.98999977 90,9.98999977 C130,9.98999977 170,10 170,10 C170,10 170.009995,20 170.009995,30 C170.009995,40 170,50 170,50 C170,50 130,50.0099983 90,50.0099983 C50,50.0099983 10,50 10,50 C10,50 9.98999977,40 9.98999977,30 C9.98999977,20 10,10 10,10 Z',
                    duration: 800,
                    elasticity: 700,
                    offset: 0
                });
            });
            button.addEventListener('mousedown', () => {
                anime.remove(path);
                var down = anime({
                    targets: path,
                    d: 'M10,10 C10,10 50,9.98999977 90,9.98999977 C130,9.98999977 170,10 170,10 C170,10 170.009995,20 170.009995,30 C170.009995,40 170,50 170,50 C170,50 130,50.0099983 90,50.0099983 C50,50.0099983 10,50 10,50 C10,50 9.98999977,40 9.98999977,30 C9.98999977,20 10,10 10,10 Z',
                    duration: 800,
                    elasticity: 700,
                    offset: 0
                });
            });
        });
    }

    connectedCallback() {
        this.shadow.querySelector('a').style.color = this.getAttribute('data-color');
        this.shadow.querySelector('.a').style.color = this.getAttribute('data-color');
        this.shadow.querySelector('.custom-button').style.textAlign = this.getAttribute('data-align');
    }
}

customElements.define('custom-button', CustomButton);