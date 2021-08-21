# Node JS Fundamentals:

Este es un repositorio que abordará todos los conocimientos básicos para adentrarse en Node JS.

Para comprobar la versión podemos colocar los comandos:

```
npm -v
node -v
```

## Configurando el servidor:

Para configurarlo hay que ingresar el comando `npm init` en realidad le diremos que es lo que hay en este proyecto, tecnicamente lo que hace es crear un paquete, en este caso es un **JSON** el cual incluirá toda la **metadata**, la **descripción**, algunas **tags**. Es información interesante para humanos como para que la computadora sepa de que se trata. 
Por defecto pone el nombre de la carpeta, pero esto puede cambiar:

```
Yann@DESKTOP-UUHP68N MINGW64 ~/Desktop/Cursos Coursera y más/Especialización con Angular/Modulo 1/Node JS Fundamentals (main)

$ npm init

This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (node-js fundamentals)

```

Podemos dejar por defecto el nombre del proyecto, posteriormente nos despliega la versión y nos pide la descripción.

```

```

Cuando nos pide el entry point es aconsejable poner el `index.html` porque es lo primero que se lee, en este caso le ponemos un index.html porque trabajaremos sobre una web. Por el momento no se pondrá un comando de TEST por lo que se deja en blanco, se mantiene la ruta, no pondremos de momento keywords y definimos el autor, en este caso puede ser nuestro nombre. La licencia la dejamos por default y al final nos muestra un resumen de como quedó el archivo de configuración en un formato JSON.

```
$ npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (node-js fundamentals) node-js-fundamentals
version: (1.0.0)
description: Nuestro primer proyecto en Node JS
entry point: (index.js) index.html
test command:
git repository: git@github.com:YanniMartinez/Node-JS-Fundamentals.git
keywords:
author: Yanni
license: (ISC)
About to write to C:\Users\Yann\Desktop\Cursos Coursera y más\Especialización con Angular\Modulo 1\Node JS Fundamentals\package.json:

{
  "name": "node-js-fundamentals",
  "version": "1.0.0",
  "description": "Nuestro primer proyecto en Node JS",
  "main": "index.html",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+ssh://git@github.com/YanniMartinez/Node-JS-Fundamentals.git"
  },
  "author": "Yanni",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/YanniMartinez/Node-JS-Fundamentals/issues"
  },
  "homepage": "https://github.com/YanniMartinez/Node-JS-Fundamentals#readme"
}


Is this OK? (yes) yes
```

Para comprobar que el paquete se creó correctamente ejecutamos el siguiente comando `cat package.json` y desplegará todo el contenido del archivo JSON:

```
$ cat package.json
{
  "name": "node-js-fundamentals",
  "version": "1.0.0",
  "description": "Nuestro primer proyecto en Node JS",
  "main": "index.html",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+ssh://git@github.com/YanniMartinez/Node-JS-Fundamentals.git"
  },
  "author": "Yanni",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/YanniMartinez/Node-JS-Fundamentals/issues"
  },
  "homepage": "https://github.com/YanniMartinez/Node-JS-Fundamentals#readme"
}
```