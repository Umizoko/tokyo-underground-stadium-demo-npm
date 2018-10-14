// エントリーポイント
// Moduleをimport
import '@webcomponents/webcomponentsjs/webcomponents-bundle';

import {
    main
} from './modules/main';

import './modules/custom-footer';
import './modules/custom-drawer';

import '../scss/access.scss'

main();