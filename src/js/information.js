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

import './modules/custom-footer';

import '@fortawesome/fontawesome-free/js/all';
import '../scss/information.scss';

main();

drawer();
scroll();