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










# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
