'use strict';

module.exports = function(grunt) {
  grunt.loadTasks('tasks');

  grunt.registerTask('build-env', function() {
    process.env.NODE_ENV = 'production';
  });

  grunt.registerTask('default', ['webpack-dev-server']);
  grunt.registerTask('lint', ['eslint']);
  grunt.registerTask('test', ['lint', 'karma:ci']);
  grunt.registerTask('build', ['test', 'build-env', 'webpack']);
  grunt.registerTask('docs', ['jekyll']);
};
