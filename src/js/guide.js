// エントリーポイント
// Moduleをimport
import {
    main
} from './modules/main';

import {
    drawer
} from './modules/drawer';

// style.sassの読み込み
import '../scss/guide.scss'

main();

drawer();