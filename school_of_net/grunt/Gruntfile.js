module.exports = function (grunt) {

  var mozjpeg = require('imagemin-mozjpeg');
  var pngquant = require('imagemin-pngquant');

  grunt.initConfig({
    uglify: {
      options: {
        mangle: false
      },
      file_min_js: {
        files: {
          'assets/js/main.min.js': ['assets/_js/main.js']
        }
      }
    }, //uglify
    sass: {
      dist: {
        options: {
          style: 'compress'
        },
        files: {
          'assets/css/style.min.css': 'assets/_sass/style.scss'
        }
      }
    }, //sass
    watch: {
      dist: {
        files: ['assets/_js/**/*', 'assets/_sass/**/*', '_index.html', 'assets/_img/**/*'],
        tasks: ['concat', 'uglify', 'sass', 'htmlmin', 'imagemin'],
      },
    }, //watch
    shell: {
      options: {
        stderr: false
      },
      mkdir: {
        command: function (dir) {
          return 'mkdir ' + dir;
        }
      }
    }, //shell
    concat: {
      js: {
        src: 'assets/_js/_src/*.js',
        dest: 'assets/_js/main.js',
      },
    }, //concat
    imagemin: {
      dynamic: {
        options: {
          optimizationLevel: 3,
          svgoPlugins: [{removeViewBox: false}],
          use: [mozjpeg(), pngquant()]
        },
        files: [{
            expand: true,
            cwd: 'assets/_img',
            src: ['**/*.{png,jpg,gif}'],
            dest: 'assets/img/'
          }]
      }
    }, //imagemin
    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: {
          'index.html': '_index.html', 
        }
      },
    }, //htmlmin
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');

  grunt.registerTask('default', ['concat', 'uglify', 'sass', 'htmlmin', 'imagemin']);
  grunt.registerTask('w', ['watch']);
  grunt.registerTask('mk', function (dir) {
    grunt.task.run('shell:mkdir:' + dir);
  });
  grunt.registerTask('c', ['concat']);
  grunt.registerTask('img', ['imagemin']);
  grunt.registerTask('html', ['htmlmin']);

};