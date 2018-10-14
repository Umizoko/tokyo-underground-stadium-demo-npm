// エントリーポイント
// Moduleをimport
import '@webcomponents/webcomponentsjs/webcomponents-bundle';

import {
    main
} from './modules/main';

import './modules/custom-footer';
import './modules/custom-drawer';


// style.sassの読み込み
import '../scss/guide.scss'

main();
