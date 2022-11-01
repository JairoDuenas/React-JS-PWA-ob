# Aplicación con PWA

## Creación de proyecto

#### 1. $ npx create-react-app my-app --template cra-template-pwa

#### 2. En el archivo index.js en la línea (serviceWorkerRegistration.unregister();) se cambia por (serviceWorkerRegistration.register();)

#### 3. El service worker no funciona en entorno de desarrollo. Se debe crear la versión de producción para esto se ejecuta $ npm run build

#### 4. Para poder hacerlo desde nuestro navegador se ejecuta $ sudo npm install -g serve

#### 5. Ejecutar $ serve -s build -l 5000 (para abrirlo en el puerto 5000)

#### - On Your Network:  http://192.***.*.**:5000 para hacer pruebas desde cualquier dispositivo movil

#### 6. Al abrir la aplicación, en la barra de navagación del navagador debe aparecer el icono de instalar aplicación  

#### Instalar service-worker-update $ npm install --save @3m1/service-worker-updater --legacy-peer-deps

## Notificciones Push
1. Cargar la app PWA de la lista de compras
$ npm run build , para crear la versión de producción.
2. Ejecutar $ serve -s build -l 5000
3. Instalar web push global y generar las vapid keys. -> 
    npm i -g web-push
    Luego se ejecuta 
    $ web-push generate-vapid-keys

    Las claves generadas las guradamos en: serviceWorkerRegistration.js
4. Modificar la fución register() en serviceWorkerRegistration.js
5. Se prueba para se habiliten los permisos -> habilitamos
6. Se crea una notificación push automática, cada vez que haya una nueva versión disponible con ->  
self.registation.showNotification(title, {body})
ejecutar el comando npm run server-prod

-----------------------------------------------

### Creando servidor sencillo
1. Instalar express dentro la carpeta server.
  - $ cd server
  - $ npm i express cors
  - Crear index.js y configurar
  - Abrir servidor y verificar el status: localhost:8000
2. Simular la subcripción de un cliente pueda ser almacenada en una base de datos
3. Instalar axios
4. Intalar web-push en el servidor
  -   npm i web-push