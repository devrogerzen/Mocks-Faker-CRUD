# MocksFakerCRUD

MocksFakerCRUD es una aplicación de ejemplo que utiliza Node.js, Express, MongoDB y Faker.js para generar y gestionar datos ficticios de usuarios y mascotas. Esta aplicación permite crear, leer y gestionar datos de manera sencilla a través de una API RESTful.

## Requisitos

- Node.js
- MongoDB Atlas

## Instalación

1. Clona el repositorio:

    ```sh
    git clone <URL_DEL_REPOSITORIO>
    cd MocksFakerCRUD
    ```

2. Instala las dependencias:

    ```sh
    npm install
    ```

3. Configura la conexión a MongoDB Atlas en el archivo `app.js`.

## Uso

1. Inicia la aplicación:

    ```sh
    npm start
    ```

2. La aplicación estará disponible en `http://localhost:3001`.

## Endpoints

- `GET /api/mocks/mockingusers`: Genera y devuelve 50 usuarios ficticios.

- `POST /api/mocks/generateData`: Genera usuarios y mascotas ficticios según los datos proporcionados en el cuerpo de la solicitud.

- `GET /api/mocks/mockingpets`: Endpoint de ejemplo para mascotas ficticias.

- `GET /api/mocks/users`: Devuelve todos los usuarios almacenados en la base de datos.

- `GET /api/mocks/pets`: Devuelve todas las mascotas almacenadas en la base de datos.

## Dependencias

- `express`: ^4.21.1
- `mongoose`: ^8.8.3
- `bcrypt`: ^5.1.1
- `@faker-js/faker`: ^9.2.0
- `mongodb`: ^6.11.0
