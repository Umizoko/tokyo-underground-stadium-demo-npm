!function(n){function r(r){for(var e,o,a=r[0],s=r[1],l=r[2],c=0,p=[];c<a.length;c++)o=a[c],i[o]&&p.push(i[o][0]),i[o]=0;for(e in s)Object.prototype.hasOwnProperty.call(s,e)&&(n[e]=s[e]);for(d&&d(r);p.length;)p.shift()();return A.push.apply(A,l||[]),t()}function t(){for(var n,r=0;r<A.length;r++){for(var t=A[r],e=!0,a=1;a<t.length;a++){var s=t[a];0!==i[s]&&(e=!1)}e&&(A.splice(r--,1),n=o(o.s=t[0]))}return n}var e={},i={2:0},A=[];function o(r){if(e[r])return e[r].exports;var t=e[r]={i:r,l:!1,exports:{}};return n[r].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=n,o.c=e,o.d=function(n,r,t){o.o(n,r)||Object.defineProperty(n,r,{enumerable:!0,get:t})},o.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},o.t=function(n,r){if(1&r&&(n=o(n)),8&r)return n;if(4&r&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&r&&"string"!=typeof n)for(var e in n)o.d(t,e,function(r){return n[r]}.bind(null,e));return t},o.n=function(n){var r=n&&n.__esModule?function(){return n.default}:function(){return n};return o.d(r,"a",r),r},o.o=function(n,r){return Object.prototype.hasOwnProperty.call(n,r)},o.p="";var a=window.webpackJsonp=window.webpackJsonp||[],s=a.push.bind(a);a.push=r,a=a.slice();for(var l=0;l<a.length;l++)r(a[l]);var d=s;A.push([32,0]),t()}({32:function(n,r,t){"use strict";t.r(r);var e=t(2),i=t(3),A=t(9);t(8),t(33);Object(e.a)(),Object(i.a)(),Object(A.a)()},33:function(n,r,t){var e=t(34);"string"==typeof e&&(e=[[n.i,e,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t(7)(e,i);e.locals&&(n.exports=e.locals)},34:function(n,r,t){(n.exports=t(6)(!0)).push([n.i,'body {\n  margin: 0;\n  padding: 0; }\n\n.noScroll {\n  overflow: hidden; }\n\n.displayNone {\n  display: none; }\n\n.slideAnimation {\n  -webkit-transform: translateX(100px);\n          transform: translateX(100px);\n  opacity: 1 !important;\n  transition: all 0.5s ease-out; }\n\n.background--white {\n  background-color: white; }\n\n.background--black--1st {\n  background-color: #1c1c1c; }\n\n.background--black--2nd {\n  background-color: #202020; }\n\n.content-offset {\n  -webkit-transform: translateX(-100px);\n          transform: translateX(-100px); }\n\n.content {\n  width: 90%;\n  margin: 0 auto;\n  padding-top: 150px;\n  padding-bottom: 150px; }\n\n.main__header-fixed {\n  margin-top: 47.2px; }\n\n@media screen and (max-width: 1000px) {\n  .content {\n    width: 95%;\n    padding-top: 75px;\n    padding-bottom: 75px; }\n  .main__header-fixed {\n    margin-top: 112px; } }\n\n.menu {\n  background: #0B0B0B; }\n  .menu__list {\n    margin: 0;\n    padding: 0;\n    display: flex;\n    justify-content: center;\n    list-style: none; }\n    .menu__list__item a {\n      margin: 0;\n      padding: 10px;\n      padding-right: 15px;\n      padding-left: 15px;\n      height: 27.2px;\n      display: block;\n      text-decoration: none;\n      font-size: 18px;\n      color: white;\n      transition: background-color 0.2s; }\n      .menu__list__item a:hover {\n        background-color: rgba(255, 255, 255, 0.5); }\n\n.fixed {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  background-color: #0B0B0B;\n  z-index: 1; }\n  .fixed .header-mobile {\n    display: none; }\n\n.header {\n  position: relative;\n  z-index: 1; }\n  .header .top-image img {\n    width: 100%;\n    vertical-align: bottom; }\n  .header .hidden {\n    visibility: hidden; }\n\n@media screen and (max-width: 1000px) {\n  .open {\n    left: 0 !important;\n    transition: left 300ms linear; }\n  .menu {\n    position: fixed;\n    top: 0;\n    left: -300px;\n    background: #0B0B0B;\n    width: 300px;\n    height: 100vh;\n    transition: left 300ms linear; }\n    .menu__list {\n      margin: 0;\n      padding: 0;\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      list-style: none; }\n      .menu__list__item a {\n        margin: 0;\n        padding: 10px;\n        padding-right: 15px;\n        padding-left: 15px;\n        height: 27.2px;\n        display: block;\n        text-decoration: none;\n        font-size: 18px;\n        color: white;\n        transition: background-color 0.2s; }\n        .menu__list__item a:hover {\n          background-color: rgba(255, 255, 255, 0.5); }\n  .fixed {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 112px;\n    background-color: #0B0B0B;\n    z-index: 2; }\n    .fixed .header-mobile {\n      display: block;\n      color: white; }\n      .fixed .header-mobile .fading {\n        width: 100vw;\n        opacity: 0.8;\n        left: 0; }\n      .fixed .header-mobile__mat {\n        position: fixed;\n        top: 0;\n        left: -100vw;\n        width: 100vw;\n        height: 100vh;\n        background-color: black;\n        opacity: 0;\n        transition: opacity 300ms linear, left 300ms linear; }\n      .fixed .header-mobile__title {\n        margin: 0;\n        padding: 10px;\n        text-align: right; }\n      .fixed .header-mobile__menu-icon {\n        display: inline-block;\n        margin: 0;\n        padding: 10px;\n        width: 18px;\n        height: 18px; }\n  .fixed::after {\n    content: "";\n    display: block;\n    position: relative; }\n  .header {\n    position: block;\n    z-index: 0; }\n    .header .top-image {\n      margin-top: 112px;\n      overflow: hidden;\n      display: flex;\n      align-items: center;\n      justify-content: center; }\n      .header .top-image img {\n        min-height: 300px;\n        max-height: 373px;\n        width: auto; }\n    .header .menu {\n      display: none; } }\n\n.open-title {\n  font-size: 36px;\n  margin-bottom: 50px; }\n\n.open-subtitle {\n  text-indent: 2em; }\n\n.attention {\n  opacity: 0; }\n  .attention-title {\n    font-size: 36px;\n    margin-bottom: 50px; }\n  .attention-contents__list {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n    display: flex;\n    justify-content: space-around; }\n    .attention-contents__list__item {\n      width: 200px;\n      text-align: center;\n      color: gray; }\n      .attention-contents__list__item img {\n        width: 100%; }\n      .attention-contents__list__item i {\n        font-size: 200px; }\n\n.link {\n  opacity: 0; }\n  .link-title {\n    font-size: 36px;\n    margin-bottom: 50px; }\n  .link-contents__list {\n    padding: 0;\n    list-style: none;\n    display: flex;\n    flex-wrap: wrap; }\n    .link-contents__list__item {\n      width: 50%; }\n      .link-contents__list__item a {\n        padding: 2px;\n        display: block;\n        position: relative; }\n        .link-contents__list__item a img {\n          width: 100%;\n          vertical-align: bottom;\n          transition: -webkit-filter 0.25s;\n          transition: filter 0.25s;\n          transition: filter 0.25s, -webkit-filter 0.25s; }\n        .link-contents__list__item a p {\n          position: absolute;\n          top: 50%;\n          right: 50%;\n          -webkit-transform: translateX(50%) translateY(-50%);\n                  transform: translateX(50%) translateY(-50%);\n          color: white; }\n        .link-contents__list__item a:hover img {\n          -webkit-filter: brightness(1.5);\n                  filter: brightness(1.5); }\n\n@media screen and (max-width: 1000px) {\n  .open-title {\n    text-align: center; }\n  .open-subtitle {\n    text-indent: 0;\n    text-align: center; }\n  .attention-title {\n    text-align: center; }\n  .attention-contents__list {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center; }\n    .attention-contents__list__item {\n      margin-bottom: 50px; }\n  .link-title {\n    font-size: 36px;\n    margin-bottom: 50px;\n    text-align: center; }\n  .link-contents__list {\n    padding: 0;\n    list-style: none;\n    align-items: center;\n    justify-content: center; }\n    .link-contents__list__item {\n      width: 100%;\n      max-width: 548px; } }\n',"",{version:3,sources:["C:/Users/0123m/Documents/GitHub/tokyo-underground-stadium-npm/src/scss/C:/Users/0123m/Documents/GitHub/tokyo-underground-stadium-npm/src/scss/C:/Users/0123m/Documents/GitHub/tokyo-underground-stadium-npm/src/scss/common/_common.scss","C:/Users/0123m/Documents/GitHub/tokyo-underground-stadium-npm/src/scss/C:/Users/0123m/Documents/GitHub/tokyo-underground-stadium-npm/src/scss/C:/Users/0123m/Documents/GitHub/tokyo-underground-stadium-npm/src/scss/common/_header.scss","C:/Users/0123m/Documents/GitHub/tokyo-underground-stadium-npm/src/scss/C:/Users/0123m/Documents/GitHub/tokyo-underground-stadium-npm/src/scss/C:/Users/0123m/Documents/GitHub/tokyo-underground-stadium-npm/src/scss/pages/_information.scss"],names:[],mappings:"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",file:"information.scss",sourcesContent:["// \r\n// common\r\n// \r\n$navigation-color: #0B0B0B;\r\n$header-desktop-height: 47.2px;\r\n$header-mobile-height: 112px;\r\n\r\nbody {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.noScroll {\r\n    overflow: hidden;\r\n}\r\n\r\n.displayNone {\r\n    display: none;\r\n}\r\n\r\n.slideAnimation {\r\n    transform: translateX(100px);\r\n    opacity: 1 !important;\r\n    transition: all 0.5s ease-out;\r\n}\r\n\r\n.background--white {\r\n    background-color: white;\r\n}\r\n\r\n.background--black--1st {\r\n    background-color: #1c1c1c;\r\n}\r\n\r\n.background--black--2nd {\r\n    background-color: #202020;\r\n}\r\n\r\n.content-offset {\r\n    transform: translateX(-100px);\r\n}\r\n\r\n// \r\n// Desktop\r\n// \r\n.content {\r\n    width: 90%;\r\n    margin: 0 auto;\r\n    padding-top: 150px;\r\n    padding-bottom: 150px;\r\n}\r\n\r\n.main__header-fixed {\r\n    margin-top: $header-desktop-height;\r\n}\r\n\r\n// \r\n// Mobile\r\n// \r\n@media screen and (max-width: 1000px) {\r\n    .content {\r\n        width: 95%;\r\n        padding-top: 75px;\r\n        padding-bottom: 75px;\r\n    }\r\n\r\n    .main__header-fixed {\r\n        margin-top: $header-mobile-height;\r\n    }\r\n}",'// \r\n// Desktop\r\n// \r\n.menu {\r\n    background: $navigation-color;\r\n\r\n    &__list {\r\n        margin: 0;\r\n        padding: 0;\r\n        display: flex;\r\n        justify-content: center;\r\n        list-style: none;\r\n\r\n        &__item {\r\n            a {\r\n                margin: 0;\r\n                padding: 10px;\r\n                padding-right: 15px;\r\n                padding-left: 15px;\r\n                height: $header-desktop-height - 20px;\r\n                display: block;\r\n                text-decoration: none;\r\n                font-size: 18px;\r\n                color: white;\r\n\r\n                transition: background-color 0.2s;\r\n\r\n                &:hover {\r\n                    background-color: rgba(255, 255, 255, 0.5);\r\n                }\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\n.fixed {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    background-color: $navigation-color;\r\n    z-index: 1;\r\n\r\n    .header-mobile {\r\n        display: none;\r\n    }\r\n}\r\n\r\n.header {\r\n    position: relative;\r\n    z-index: 1;\r\n\r\n    .top-image {\r\n        img {\r\n            width: 100%;\r\n            vertical-align: bottom;\r\n        }\r\n    }\r\n\r\n    .hidden {\r\n        visibility: hidden;\r\n    }\r\n}\r\n\r\n// \r\n// Mobile\r\n// \r\n@media screen and (max-width: 1000px) {\r\n    .open {\r\n        left: 0 !important;\r\n        transition: left 300ms linear;\r\n    }\r\n\r\n    .menu {\r\n        position: fixed;\r\n        top: 0;\r\n        left: -300px;\r\n        background: $navigation-color;\r\n        width: 300px;\r\n        height: 100vh;\r\n        transition: left 300ms linear;\r\n\r\n        &__list {\r\n            margin: 0;\r\n            padding: 0;\r\n            display: flex;\r\n            flex-direction: column;\r\n            justify-content: center;\r\n            list-style: none;\r\n\r\n            &__item {\r\n                a {\r\n                    margin: 0;\r\n                    padding: 10px;\r\n                    padding-right: 15px;\r\n                    padding-left: 15px;\r\n                    height: $header-desktop-height - 20px;\r\n                    display: block;\r\n                    text-decoration: none;\r\n                    font-size: 18px;\r\n                    color: white;\r\n\r\n                    transition: background-color 0.2s;\r\n\r\n                    &:hover {\r\n                        background-color: rgba(255, 255, 255, 0.5);\r\n                    }\r\n                }\r\n            }\r\n        }\r\n    }\r\n\r\n    .fixed {\r\n        position: fixed;\r\n        top: 0;\r\n        left: 0;\r\n        width: 100%;\r\n        height: $header-mobile-height;\r\n        background-color: $navigation-color;\r\n        z-index: 2;\r\n\r\n        .header-mobile {\r\n            display: block;\r\n            color: white;\r\n\r\n            .fading {\r\n                width: 100vw;\r\n                opacity: 0.8;\r\n                left: 0;\r\n            }\r\n\r\n            &__mat {\r\n                position: fixed;\r\n                top: 0;\r\n                left: -100vw;\r\n                width: 100vw;\r\n                height: 100vh;\r\n                background-color: black;\r\n                opacity: 0;\r\n                transition: opacity 300ms linear, left 300ms linear;\r\n            }\r\n\r\n            &__title {\r\n                margin: 0;\r\n                padding: 10px;\r\n                text-align: right;\r\n            }\r\n\r\n            &__menu-icon {\r\n                display: inline-block;\r\n                margin: 0;\r\n                padding: 10px;\r\n                width: 18px;\r\n                height: 18px;\r\n            }\r\n        }\r\n    }\r\n\r\n    .fixed::after {\r\n        content: "";\r\n        display: block;\r\n        position: relative;\r\n    }\r\n\r\n    .header {\r\n        position: block;\r\n        z-index: 0;\r\n\r\n        .top-image {\r\n            margin-top: $header-mobile-height;\r\n            overflow: hidden;\r\n            display: flex;\r\n            align-items: center;\r\n            justify-content: center;\r\n\r\n            img {\r\n                min-height: 300px;\r\n                max-height: 373px;\r\n                width: auto;\r\n            }\r\n        }\r\n\r\n        .menu {\r\n            display: none;\r\n        }\r\n    }\r\n}',"// \r\n// Desktop\r\n// \r\n.open {\r\n    &-title {\r\n        font-size: 36px;\r\n        margin-bottom: 50px;\r\n    }\r\n\r\n    &-subtitle {\r\n        text-indent: 2em;\r\n    }\r\n}\r\n\r\n.attention {\r\n    opacity: 0;\r\n\r\n    &-title {\r\n        font-size: 36px;\r\n        margin-bottom: 50px;\r\n    }\r\n\r\n    &-contents {\r\n        &__list {\r\n            margin: 0;\r\n            padding: 0;\r\n            list-style: none;\r\n            display: flex;\r\n            justify-content: space-around;\r\n\r\n            &__item {\r\n                width: 200px;\r\n                text-align: center;\r\n                color: gray;\r\n\r\n                img {\r\n                    width: 100%;\r\n                }\r\n\r\n                i {\r\n                    font-size: 200px;\r\n                }\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\n.link {\r\n    opacity: 0;\r\n\r\n    &-title {\r\n        font-size: 36px;\r\n        margin-bottom: 50px;\r\n    }\r\n\r\n    &-contents {\r\n        &__list {\r\n            padding: 0;\r\n            list-style: none;\r\n            display: flex;\r\n            flex-wrap: wrap;\r\n\r\n            &__item {\r\n                width: 50%;\r\n\r\n                a {\r\n                    padding: 2px;\r\n                    display: block;\r\n                    position: relative;\r\n\r\n                    img {\r\n                        width: 100%;\r\n                        vertical-align: bottom;\r\n                        transition: filter 0.25s;\r\n                    }\r\n\r\n                    p {\r\n                        position: absolute;\r\n                        top: 50%;\r\n                        right: 50%;\r\n                        transform: translateX(50%) translateY(-50%);\r\n                        color: white;\r\n                    }\r\n\r\n                    &:hover {\r\n                        img {\r\n                            filter: brightness(1.5);\r\n                        }\r\n                    }\r\n                }\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\n// \r\n// Mobile\r\n// \r\n@media screen and (max-width: 1000px) {\r\n    .open {\r\n        &-title {\r\n            text-align: center\r\n        }\r\n\r\n        &-subtitle {\r\n            text-indent: 0;\r\n            text-align: center;\r\n        }\r\n    }\r\n\r\n    .attention {\r\n        &-title {\r\n            text-align: center;\r\n        }\r\n\r\n        &-contents {\r\n            &__list {\r\n                display: flex;\r\n                flex-direction: column;\r\n                justify-content: center;\r\n                align-items: center;\r\n\r\n                &__item {\r\n                    margin-bottom: 50px;\r\n                }\r\n            }\r\n        }\r\n    }\r\n\r\n    .link {\r\n        &-title {\r\n            font-size: 36px;\r\n            margin-bottom: 50px;\r\n            text-align: center;\r\n        }\r\n\r\n        &-contents {\r\n            &__list {\r\n                padding: 0;\r\n                list-style: none;\r\n                align-items: center;\r\n                justify-content: center;\r\n\r\n                &__item {\r\n                    width: 100%;\r\n                    max-width: 548px;\r\n                }\r\n            }\r\n        }\r\n    }\r\n}"],sourceRoot:""}])}});
//# sourceMappingURL=information.bundle.js.map