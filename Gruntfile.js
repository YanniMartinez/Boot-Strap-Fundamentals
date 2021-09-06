module.exports = function(grunt){
    require("time-grunt")(grunt);
    require("jit-grunt")(grunt,{
        useminPrepare: "grunt-usemin"
    });
    
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

        copy: { 
            html: { 
                files: [{  
                expand: true,  
                dot: true,  
                cwd: './', //current working directory 
                src: ['*.html'], 
                dest: 'dist' 
                }] 
            }, 
        }, 
       
        clean: { 
            build: { 
                src: ['dist/'] //clean the distribution folder 
            } 
        }, 
       
        cssmin: { 
            dist: {} 
        }, 
       
        uglify: { 
            dist: {} 
        },

        /* Indica código de versión pra que no sea cacheable */
        filerev: { 
            options: {
                algorithm: 'md5', 
                length: 15 
            }, 
            files: { 
                src: ['dist/css/*.css', 'dist/js/*.js'] 
            } 
        }, 
 
        concat: { 
        options: { 
            separator: ';' 
        }, 
        dist: {} 
        }, 
    
        useminPrepare: { 
        foo: { 
            dest: 'dist', 
            src: ['index.html'] 
        }, 
        options: { 
            flow: { 
            steps: { 
                css: ['cssmin'], 
                js: ['uglify'] 
            }, 
            post: { 
                css: [{ 
                name: 'cssmin', 
                createConfig: function(context, block) { 
                    var generated = context.options.generated; 
                    generated.options = { 
                    keepSpecialComments: 0, 
                    rebase: false 
                    } 
                } 
                }] 
            } 
            } 
        } 
        }, 
    
        usemin: { 
        html: ['dist/index.html'], 
        options: { 
            assetsDir: ['dist', 'dist/css', 'dist/js'] 
        } 
        }
    });

    /* TASKs */
    grunt.loadNpmTasks('grunt-contrib-watch'); 
    grunt.loadNpmTasks('grunt-contrib-sass'); 
    grunt.loadNpmTasks('grunt-browser-sync'); 
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-clean'); 
  grunt.loadNpmTasks('grunt-contrib-copy'); 
  grunt.loadNpmTasks('grunt-contrib-uglify'); 
  grunt.loadNpmTasks('grunt-contrib-cssmin'); 
  grunt.loadNpmTasks('grunt-usemin'); 
  grunt.loadNpmTasks('grunt-filerev'); 
   
  grunt.registerTask('css', ['sass']); 
   
  grunt.registerTask('default', ['browserSync', 'watch']); 
   
  grunt.registerTask('img:compress', ['imagemin']); 
   
  grunt.registerTask('build', [ 
    'clean', //Borramos el contenido de dist 
    'copy', //Copiamos los archivos html a dist 
    'imagemin', //Optimizamos imagenes y las copiamos a dist 
    'useminPrepare', //Preparamos la configuracion de usemin 
    'concat',  
    'cssmin', 
    'uglify', 
    'filerev', //Agregamos cadena aleatoria 
    'usemin' //Reemplazamos las referencias por los archivos generados por filerev 
  ]);

};