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
        },

        watch:{
            /* Definimos que observer css/ */
            files: ["css/*.scss"],
            /* Le asociamos la tarea de css */
            task: ["css"],

        },

        browserSync:{
            dev:{
                bsFiles:{ //Browser files
                    /* Le indicamos las carpetas o archivos que queremos que mire */
                    src: [
                        "css/*.css",
                        "*.html",
                        "js/*.js"
                    ]
                }
            },
            /* Se configura y se indica cual será la ruta de nuestro servidor */
            options:{
                watchTask: true, //Se indica que estára la escucha activa.
                server:{
                    baseDir: "./" //Directorio base para nuestro servidor
                }
            }
        },

        imagemin:{
            dynamic:{
                files:[{
                    expand: true,
                    cwd: "./",
                    src: "img/*.{png,gif,jpg,jpeg}",
                    dest: "dist/"
                }]
            }
        },


    });

    /* TASKs */
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-sass");
    grunt.loadNpmTasks("grunt-contrib-sync");
    grunt.loadNpmTasks("grunt-contrib-imagemin");
    grunt.registerTask("css",["sass"]);
    grunt.registerTask("default",["browserSync","watch"])//Aquí definimos el browsersync y el watch
    grunt.registerTask("img:compress",["imagemin"]);
};