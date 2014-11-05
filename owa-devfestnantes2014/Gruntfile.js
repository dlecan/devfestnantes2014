module.exports = function ( grunt ) {
  
  grunt.loadNpmTasks('grunt-contrib-connect');      

  var taskConfig = {
    pkg: grunt.file.readJSON("package.json"),

    connect: {
      server: {
        options: {
          keepalive: true,
          base: ['src'],
          hostname: '*',
          port:9999
        }
      }
    }
  };

  grunt.initConfig( grunt.util._.extend( taskConfig) );

  grunt.registerTask( 'default', [ 'connect:server'] );
};
