import { style } from './style';
import { clean } from './clean';
import { useref } from './useref';
import { copyJs } from './copyJs';

export function buildTask(gulp, plugin, config) {
    let cleanFile = () => {
        return clean(config);
    };
    let styleCompile = () => {
        return style(gulp, plugin, config);
    };
    let userefTask = () => {
        return useref(gulp, plugin, config);
    }
    let copyJsTask = () => {
        return copyJs(gulp, plugin, config);
    }

    return gulp.series(cleanFile, styleCompile, gulp.parallel(userefTask, copyJsTask));
}
