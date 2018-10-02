// エントリーポイント
// Moduleをimport
import {
    main
} from './modules/main';

import {
    scroll
} from './modules/scroll';

import './modules/custom-footer';
import './modules/custom-drawer';


import '@fortawesome/fontawesome-free/js/all';
import '../scss/information.scss';

main();

scroll();