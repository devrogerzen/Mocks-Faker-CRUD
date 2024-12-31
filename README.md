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

## Docker

La imagen de Docker para este proyecto está disponible en Docker Hub:
[https://hub.docker.com/r/devrogerzen/mocksfakercrudhub](https://hub.docker.com/r/devrogerzen/mocksfakercrudhub)

### Comandos Docker

```sh
# Descargar la imagen desde Docker Hub
docker pull devrogerzen/mocksfakercrudhub

# Construir la imagen localmente
docker build -t devrogerzen/mocksfakercrudhub .

# Ejecutar el contenedor
docker run -p 3001:8080 mocksfakercrudhub

## Docker
La imagen de Docker para este proyecto está disponible en Docker Hub:
[https://hub.docker.com/repository/docker/devrogerzen/mocksfakercrud/general]

```

## Testing

Explicación de las pruebas
Conexión a la base de datos:

beforeAll: Conecta a la base de datos antes de ejecutar las pruebas.
afterAll: Cierra la conexión a la base de datos después de ejecutar las pruebas.
Pruebas de endpoints:

GET /api/mocks/mockingusers: Verifica que se generen 50 usuarios.
POST /api/mocks/generateData: Verifica que se generen el número especificado de usuarios y mascotas.
GET /api/mocks/mockingpets: Verifica que se generen 50 mascotas.
GET /api/mocks/users: Verifica que se obtengan todos los usuarios de la base de datos.
GET /api/mocks/pets: Verifica que se obtengan todas las mascotas de la base de datos.
Beneficios de usar Jest y Supertest
Jest: Proporciona un entorno de pruebas robusto con capacidades de mocking y manejo de pruebas asincrónicas.
Supertest: Facilita la realización de solicitudes HTTP y la verificación de respuestas, lo que es ideal para probar endpoints de API.