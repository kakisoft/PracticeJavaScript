var gulp = require('gulp');

gulp.task('hello', function() { // 'hello' という名前のタスク。『gulp hello』で実行。
    console.log('hello world!');
});

gulp.task('default', ['hello']); // デフォルトで動作させるタスクを記述。ここでは、'hello' 