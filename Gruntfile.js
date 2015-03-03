/**
 * Created by paul on 3/1/15.
 */
module.exports = function(grunt) {

    grunt.initConfig({
        bower: {
            install: {
                options:{
                    targetDir:'./scripts/lib',
                    cleanTargetDirectory:true
                }
                //just run 'grunt bower:install' and you'll see files from your Bower packages in lib directory
            }
        },
        nodemon: {
            dev: {
                script: './server/app.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-bower-task');
    grunt.loadNpmTasks('grunt-nodemon');

    grunt.registerTask('default', ['bower', 'nodemon']);

};