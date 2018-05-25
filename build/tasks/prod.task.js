import { clean } from './clean';
import { style } from './style';
import { ejs } from './ejs';
import { useref } from './useref';
import { revJs } from './revJs';
import { revHtml } from './revHtml';

export function prodTask(gulp, plugin, config) {
    let cleanFile = () => {
        return clean(gulp, plugin, config);
    };
    let styleCompile = () => {
        return style(gulp, plugin, config);
    };
    let ejstask = () => {
        return ejs(gulp, plugin, config);
    };
    let userefTask = () => {
        return useref(gulp, plugin, config);
    };
    let revJsTask = () => {
        return revJs(gulp, plugin, config);
    };
    let revHtmlTask = () => {
        return revHtml(gulp, plugin, config);
    };

    return gulp.series(cleanFile, gulp.parallel(styleCompile, ejstask), userefTask, revJsTask, revHtmlTask);
}
