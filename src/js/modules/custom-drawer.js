// 
// Custom drawer
// 
class CustomDrawer extends HTMLElement {

    static get style() {
        return `
        <style>
        .menu {
            background: #0B0B0B;
        }

        .menu__list {
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            list-style: none;
        }

        .menu__list__item a {
            margin: 0;
            padding: 10px;
            padding-right: 15px;
            padding-left: 15px;
            height: calc(47.2px - 20px);
            display: block;
            text-decoration: none;
            font-size: 18px;
            color: white;
            transition: background-color 0.2s;
        }
        
        .menu__list__item a:hover {
            background-color: rgba(255, 255, 255, 0.5);
        }

        .fixed {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            background-color: #0B0B0B;
            z-index: 1;
        }

        .fixed .header-mobile {
            display: none;
        }

        .header {
            position: relative;
            z-index: 1;
        }

        .top-image img {
                width: 100%;
                vertical-align: bottom;
        }

        .hidden {
            visibility: hidden;
        }

        @media screen and (max-width: 1000px) {
            .open {
                left: 0 !important;
                transition: left 300ms linear;
            }

            .menu {
                position: fixed;
                top: 0;
                left: -300px;
                background: #0B0B0B;
                width: 300px;
                height: 100vh;
                transition: left 300ms linear;
            }

            .menu__list {
                margin: 0;
                padding: 0;
                display: flex;
                flex-direction: column;
                justify-content: center;
                list-style: none;
            }

            .menu__list__item a {
                margin: 0;
                padding: 10px;
                padding-right: 15px;
                padding-left: 15px;
                height: 112px - 20px;
                display: block;
                text-decoration: none;
                font-size: 18px;
                color: white;
                transition: background-color 0.2s;
            }

            .menu__list__item a:hover {
                background-color: rgba(255, 255, 255, 0.5);
            }

            .fixed {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 112px;
                background-color: #0B0B0B;
                z-index: 2;
            }

            .fixed .header-mobile {
                display: block;
                color: white;
            }

            .fading {
                width: 100vw !important;
                opacity: 0.8 !important;
                left: 0 !important;
            }

            .header-mobile__mat {
                position: fixed;
                top: 0;
                left: -100vw;
                width: 100vw;
                height: 100vh;
                background-color: black;
                opacity: 0;
                transition: opacity 300ms linear, left 300ms linear;
            }

            .header-mobile__title {
                margin: 0;
                padding: 10px;
                text-align: right;
            }

            .header-mobile__menu-icon {
                display: inline-block;
                margin: 0;
                padding: 10px;
                width: 18px;
                height: 18px;
            }

            .fixed::after {
                content: "";
                display: block;
                position: relative;
            }

            .header {
                position: block;
                z-index: 0;
            }

            .top-image {
                margin-top: 112px;
                overflow: hidden;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .top-image img {
                min-height: 300px;
                max-height: 373px;
                width: auto;
            }

            .top-image .menu {
                display: none;
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

        this.shadow.innerHTML = CustomDrawer.style;

        const root = document.createElement('header');
        root.className = 'fixed';
        this.shadow.appendChild(root);

        root.innerHTML = `
            <div class="header-mobile">
                <p class="header-mobile__title">Tokyo Underground<br>
                    Stadium</p>
                <div class="header-mobile__menu-icon">
                    <svg aria-hidden="true" data-prefix="fas" data-icon="bars" class="svg-inline--fa fa-bars fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="white" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path></svg></div>
                <div class="header-mobile__mat"></div>
            </div>
        `;

        // index.html
        if(window.location.href.split('/').pop() === '' || window.location.href.split('/').pop() === 'index.html'){
            root.innerHTML += `
            <nav class="menu">
                <ul class="menu__list">
                    <li class="menu__list__item header-mobile"><img src="./assets/image/logo-x516.png" alt="" srcset="" width=100%></li>
                    <li class="menu__list__item"><a href="./index.html">Home</a></li>
                    <li class="menu__list__item"><a href="./html/information.html">Information</a></li>
                    <li class="menu__list__item"><a href="./html/guide.html">Guide</a></li>
                    <li class="menu__list__item"><a href="./html/access.html">Access</a></li>
                    <li class="menu__list__item"><a href="./html/contact.html">Contact</a></li>
                </ul>
            </nav>
        `;
        // index.html以外
        } else {
            root.innerHTML += `
            <nav class="menu">
                <ul class="menu__list">
                    <li class="menu__list__item header-mobile"><img src="../assets/image/logo-x516.png" alt="" srcset="" width=100%></li>
                    <li class="menu__list__item"><a href="../index.html">Home</a></li>
                    <li class="menu__list__item"><a href="../html/information.html">Information</a></li>
                    <li class="menu__list__item"><a href="../html/guide.html">Guide</a></li>
                    <li class="menu__list__item"><a href="../html/access.html">Access</a></li>
                    <li class="menu__list__item"><a href="../html/contact.html">Contact</a></li>
                </ul>
            </nav>
        `;
        }

        // 
        // index.htmlのときのみimageを組み込んだdrawerにする
        // 
        const rootbrotherindex = document.createElement('div');
        rootbrotherindex.className = 'header';
        this.shadow.appendChild(rootbrotherindex);
        if(window.location.href.split('/').pop() === '' || window.location.href.split('/').pop() === 'index.html'){
            rootbrotherindex.innerHTML = `
                <div class="top-image"><img src="./assets/image/Desktop/home-top-image-test.jpg" alt=""></div>
                <nav class="menu">
                    <ul class="menu__list">
                        <li class="menu__list__item"><a href="#">Home</a></li>
                        <li class="menu__list__item"><a href="./html/information.html">Information</a></li>
                        <li class="menu__list__item"><a href="./html/guide.html">Guide</a></li>
                        <li class="menu__list__item"><a href="./html/access.html">Access</a></li>
                        <li class="menu__list__item"><a href="./html/contact.html">Contact</a></li>
                    </ul>
                </nav>
            `;
        }


        document.addEventListener("DOMContentLoaded", () => {
            // 
            //　Drawerを開く
            // 
            const bar = root.querySelector(".header-mobile__menu-icon");
            bar.addEventListener("click", () => {
                this.shadow.querySelector('header .menu').classList.toggle('open');
                this.shadow.querySelector('.header-mobile__mat').classList.toggle('fading');
            });
            
            // 
            // Drawerを閉じる
            // 
            const mat = root.querySelector(".header-mobile__mat");
            mat.addEventListener("click", () => {
                this.shadow.querySelector('header .menu').classList.toggle('open');
                this.shadow.querySelector('.header-mobile__mat').classList.toggle('fading');
            });
        });


        window.addEventListener('load', () => {
            // 
            // index.htmlのときのみの処理
            // 
            if(!(window.location.href.split('/').pop() == '' 
            || window.location.href.split('/').pop() == 'index.html'))
                return;

            let curr_scroll_top;
            window.addEventListener('scroll', () => {

                // 
                // index.html headerのmenuがかぶるのを修正
                // 
                curr_scroll_top = window.scrollY;
                if (curr_scroll_top <= rootbrotherindex.querySelector('.menu').offsetTop) {
                    rootbrotherindex.querySelector('.menu').classList.remove('hidden');
                    rootbrotherindex.style.zIndex = '1';
                } else if (curr_scroll_top > rootbrotherindex.querySelector('.menu').offsetTop) {
                    rootbrotherindex.querySelector('.menu').classList.add('hidden');
                    rootbrotherindex.style.zIndex = '0';
                }
            });
        });
    }
}

customElements.define('custom-drawer', CustomDrawer);