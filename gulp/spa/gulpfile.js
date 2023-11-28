const { series, parallel } = require('gulp')
const gulp = require('gulp')

const { appHTML, appCSS, appJS,  appIMG } = require('./gulpsTasks/app')
const { depsCSS, depsFonts} = require('./gulpsTasks/deps')
const { monitorarArquivos, servidor } = require('./gulpsTasks/servidor')

module.exports.default = series(
    parallel(
        series(appHTML, appCSS, appJS, appIMG),
        series(depsCSS, depsFonts)
    ),
    servidor,
    monitorarArquivos
)