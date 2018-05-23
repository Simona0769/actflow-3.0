'use strict';

import del from 'del';

export function clean(config) {
    // let cleanPath = config.path + (config.isDev ? 'css' : '') + '/';
    return del([`${config.act}/css`,  `${config.act}/dist`], {force: true});
}
