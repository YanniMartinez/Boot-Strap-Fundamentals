module.exports = function(grunt){
    grunt.initConfig({
        /* Generando la herramienta de sass */
        sass:{
            /* Genera la version de distribución */
            dist: {
                /* Busca en todos los archivos */
                files: [{
                    expand: true, /* Indica que busca en todos los archivos */
                    /* Dentro de la carpeta css */
                    cwd: "css",
                    /* Los elementos que terminan con .scss */
                    src: ["*.scss"],
                    /* Carpeta destino */
                    dest: "css",
                    /* Extensión de salida */
                    ext: ".css"
                }]
            }
        }
    });

    /* TASKs */
    grunt.loadNpmTasks("grunt-contrib-sass");
    grunt.registerTask("css",["sass"]);
};