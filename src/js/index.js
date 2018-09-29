// エントリーポイント
// Moduleをimport
import {
    main
} from './modules/main';

import {
    loading
} from './modules/loading';

import {
    drawer
} from './modules/drawer';

import {
    scroll
} from './modules/scroll';

import {
    button
} from './modules/button';

import {
    slideshow
} from './modules/slideshow';

import {
    logo
} from './modules/logo';

// style.sassの読み込み
import '../scss/style.scss';


main();

loading();
drawer();
scroll();
button();
slideshow();
logo();