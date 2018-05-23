'use strict';
import { style } from './style';

export function browser(gulp, plugin, config) {
    return plugin.browserSync({
        server: {
            // baseDir: [config.act, '../src/lib']
            baseDir: config.act,
            routes: {
                '/lib': '../src/lib'
            }
        },
        host: '0.0.0.0'
    });
}

export function watch(gulp, plugin, config) {
    // gulp.watch(config.path + '/sass/**/*.scss'), style)
    // return gulp.watch([config.path + '*.html', config.path + 'html/**/*.html']).on('change', plugin.browserSync.reload)
    let styleCompile = () => {
        return style(gulp, plugin, config);
    }
    gulp.watch(config.act + '/sass/*.scss', styleCompile);
    gulp.watch(['*.html', 'html/**/*.html', 'css/**/*.css', 'js/**/*.js'], { cwd: config.act }).on('change', plugin.browserSync.reload)
}
