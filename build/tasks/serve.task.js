import { style } from './style';
import { clean } from './clean';
import { browser, watch } from './browserSync';

export function serve(gulp, plugin, config) {
    let cleanFile = () => {
        return clean(config);
    };
    let styleCompile = () => {
        return style(gulp, plugin, config)
    };
    let browserSync = () => {
        return browser(gulp, plugin, config)
    };
    let watchFile = () => {
        watch(gulp, plugin, config)
    }

    return gulp.series(cleanFile, styleCompile, gulp.parallel(browserSync, watchFile));
}
