const jitGrunt = require('jit-grunt');

module.exports = (grunt) => {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      css: {
        src: ['src/**/*.css', '!src/css/index.css'],
        dest: './dist/all.css',
      },
      js: {
        src: ['src/**/*.js'],
        dest: './dist/all.js',
      },
    },
    cssmin: {
      target: {
        files: {
          './dist/all.min.css': ['./dist/all.css'],
        },
      },
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n',
      },
      dist: {
        files: {
          'dist/all.min.js': ['dist/all.js'],
        },
      },
    },
    eslint: {
      target: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
    },
    watch: {
      css: {
        files: ['src/**/*.css'],
        tasks: ['concat:css', 'cssmin'],
      },
      js: {
        files: ['<%= eslint.target %>'],
        tasks: ['eslint', 'concat:js', 'uglify'],
      },
      refresh: {
        options: {
          livereload: '<%= connect.options.livereload %>',
        },
        files: ['<%= eslint.target %>', 'index.html', '<%= watch.css.files %>'],
      },
    },
    connect: {
      options: {
        port: 9000,
        hostname: 'localhost',
        livereload: 35729,
      },
      livereload: {
        options: {
          open: true,
        },
      },
    },
  });

  jitGrunt(grunt);

  grunt.registerTask('build', () => {
    grunt.task.run(['eslint']);
    grunt.task.run(['concat:css', 'cssmin']);
    grunt.task.run(['concat:js', 'uglify']);
  });

  grunt.registerTask('serve', ['eslint', 'connect:livereload', 'watch']);

  grunt.registerTask('lint', ['eslint']);

  grunt.registerTask('default', ['build']);
};
