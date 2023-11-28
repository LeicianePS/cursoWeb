const gulp = require('gulp')
const webservice = require('gulp-webservice')
const watch = require('gulp-watch')

function servidor(cb) {
    return gulp.src('build')
        .pipe(webserver({
            port: 8080,
            open: true,
            livereload: true,
        }))
}

function monitorarArquivos(cb) {
    watch('src/**/*.html', () => gulp.series('appHTML')())
    
    return cb()
}


module.exports = {
    monitorarArquivos,
    servidor
}