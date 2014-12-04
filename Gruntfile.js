module.exports = function (grunt) {

    "use strict";

    // Project configuration.
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

		uglify: {
			dev: {
		    	files: {
		      		'contents/js/app.min.js': ['work/js/*.js']
		      	}
		  	}
		},

        sass: {
            dev: {
                options: {
                },
                files: {
                    'contents/css/app.css': 'work/sass/style.scss'
                }
            }

        },

        autoprefixer: {
            single_file: {
                options: {
                    browsers: ['last 4 version', 'ie 7' , 'ie 8', 'ie 9'],
                    map: true
                },
                src: 'contents/css/app.css'
            }
        },

        watch: {
            css: {
                files: ['work/sass/**/*.scss'],
                tasks: ['sass:dev']
            }
        }

    });

    //require('load-grunt-tasks')(grunt);
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default task(s).
    grunt.registerTask('style', ['sass:dev', 'autoprefixer']);
    grunt.registerTask('default', ['watch']);

};