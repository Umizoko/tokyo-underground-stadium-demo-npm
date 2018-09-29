// エントリーポイント
// Moduleをimport
import {
    main
} from './modules/main';

import {
    drawer
} from './modules/drawer';

import {
    logo
} from './modules/logo';

// style.sassの読み込み
import '../scss/contact.scss'

main();

drawer();
logo();