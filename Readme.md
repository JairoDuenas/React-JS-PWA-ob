# Aplicación con PWA

## Creación de proyecto

#### 1. $ npx create-react-app my-app --template cra-template-pwa

#### 2. En el archivo index.js en la línea (serviceWorkerRegistration.unregister();) se cambia por (serviceWorkerRegistration.register();)

#### 3. El service worker no funciona en entorno de desarrollo. Se debe crear la versión de producción para esto se ejecuta $ npm run build

#### 4. Para poder hacerlo desde nuestro navegador se ejecuta $ sudo npm install -g serve

#### 5. Ejecutar $ serve -s build -l 5000 (para abrirlo en el puerto 5000)

#### - On Your Network:  http://192.***.*.**:5000 para hacer pruebas desde cualquier dispositivo movil

#### 6. Al abrir la aplicación, en la barra de navagación del navagador debe aparecer el icono de instalar aplicación  
