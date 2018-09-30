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
import '../scss/information.scss'

main();

drawer();
scroll();