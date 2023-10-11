module.exports = function (grunt) {
    grunt.initConfig({
        less: {
            development: {
                options: {
                    paths: ['styles'], // Diretório dos arquivos LESS
                },
                files: {
                    'styles/main.css': 'styles/main.less', // Arquivo de saída: Arquivo LESS de entrada
                },
            },
        },
        uglify: {
            my_target: {
                files: {
                    'scripts/main.min.js': ['scripts/main.js'], // Arquivo de saída: Arquivo JavaScript de entrada
                },
            },
        },
    });
    grunt.registerTask('default', ['less', 'uglify']);

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['less', 'uglify']);
};
