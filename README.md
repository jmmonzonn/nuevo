Aplicación realizada por Jose Manuel Monzón, como prueba técnica para la empresa Aiudo.

Autenticación realizada con firestore.

Falso backend en src/backend.json.

Para interactuar con el falso backend he utilizado la librería de JS json-server.

Funciona como cualquier API, con un servidor que va modificando el archivo JSON.

Interactuamos con la API con normalidad, utilizando fetch.

He utilizado injectContext y useContext para tener un entorno global con la información del backend

y la información del usuario.

Cuando hay un cambio en el backend, cambia el estado global y se notifica al usuario.

Para el diseño he utilizado tailwindCSS

No hay paginación ni navegación entre rutas, todas las vistas son componentes

que se muestran respondiendo a estados globales.

Cuando se inicia la aplicación por primera vez o se actualiza la página se muestra un pequeño logo

con un texto animado en CSS, esto sirve para cargar la información por detrás.

Cuando desaparece la animación, si estamos logueados en firestore mostrará el dashboard,

si no lo estamos mostrará el login.

Pasos para ejecutar el proyecto:

Terminal back:

$ npm install -g json-server

$ json-server --watch src/backend.json --port 3001

Terminal front:

$ npm install

$ npm run start

Hay creados 10 usuarios, todos con la contraseña "123456"

Los emails son ejemplos del 1 al 10 ("ej1@ej.es" ... "ej10@ej.es")

Los usuarios pueden hacerse transferencias entre sí, cada uno tiene un IBAN consecutivo.

("ES340255674390" ... "ES340255674399")

Los usuarios pueden adelantar los próximos pagos de sus préstamos,

realizar depósitos y retiradas.


*** En caso de no ejecutar en local,  ***
*** probablemente tengas que cambiar la ruta del backend ***
*** (localhost/3001) ***
*** TODO utilizar process.env para la ruta de backend ***
*** TODO añadir autenticación Google Github y Facebook ***
*** TODO No permitir que los usuarios puedan estar en negativo ***
*** TODO Modificar alert por un tipo de aviso más bonito y llamativo ***


*** los TODOS podría añadirlos fácilmente pero no puedo por falta de tiempo ***



