// エントリーポイント
// Moduleをimport
import '@webcomponents/webcomponentsjs/webcomponents-bundle';

import {
    main
} from './modules/main';

import {
    logo
} from './modules/logo';

import './modules/custom-footer';
import './modules/custom-drawer';

// style.sassの読み込み
import '../scss/contact.scss'

main();

logo();