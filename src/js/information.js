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

// style.sassの読み込み
import '../scss/information.scss'

main();

drawer();
scroll();