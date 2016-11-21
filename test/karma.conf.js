/**
 * Created by iakoupov on 2016-11-21.
 */


module.exports = function (config) {
    config.set({
        
        basePath: '..',
        
        files: [
            
            'dist/js/**/*.js',
            'node_modules/angular-mocks/angular-mocks.js',
            'test/js/**/*.js'
        ],
        
        autoWatch: true,
        
        frameworks: ['jasmine'],
        
        browsers: ['Chrome']
        
    })
}