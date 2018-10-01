// エントリーポイント
// Moduleをimport
import {
    main
} from './modules/main';

import {
    drawer
} from './modules/drawer';

import {
    scroll
} from './modules/scroll';

import {
    button
} from './modules/button';

import './modules/custom-footer';

// style.sassの読み込み
// import '@fortawesome/fontawesome-free/js/fontawesome.min.js';
// const fontawesome = require('@fortawesome/fontawesome-free')

import '../scss/information.scss';

main();

drawer();
scroll();