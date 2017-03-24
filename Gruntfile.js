module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch:{
            scripts: {
                files: 'src/**/*',
                tasks: ['uglify','cssmin','copy'],
            },
        },
        uglify: {
            dynamic_mappings: {
                files: [
                    {
                        expand: true,     // Enable dynamic expansion.
                        cwd: 'src/',      // Src matches are relative to this path.
                        src: ['**/*.js'], // Actual pattern(s) to match.
                        dest: 'build/',   // Destination path prefix.
                        ext: '.min.js',   // Dest filepaths will have this extension.
                        extDot: 'first'   // Extensions in filenames begin after the first dot
                    },
                ],
            },
        },
        copy: {
            main: {
                expand: true,
                cwd: 'src',
                src: ['**/*.html','asset/**/*'],
                dest: 'build/',
            },
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'src/',
                    src: ['**/*.css'],
                    dest: 'build/',
                    ext: '.min.css'
                }]
            }
        }
    });

    // 加载包含 "uglify" 任务的插件。
    grunt.loadNpmTasks('grunt-contrib-uglify');
    //压缩css
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    //copy files
    grunt.loadNpmTasks('grunt-contrib-copy');


    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['uglify','cssmin','copy','watch']);

}