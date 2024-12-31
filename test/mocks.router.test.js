import request from 'supertest';
import app from '../app.js';
import mongoose from 'mongoose';

describe('Mocks Router Tests', () => {
  beforeAll(async () => {
    // Conectar a la base de datos antes de ejecutar las pruebas
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });

  afterAll(async () => {
    // Cerrar la conexión a la base de datos después de ejecutar las pruebas
    await mongoose.connection.close();
  });

  describe('GET /api/mocks/mockingusers', () => {
    it('should generate 50 users', async () => {
      const response = await request(app).get('/api/mocks/mockingusers');
      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
      expect(response.body.length).toBe(50);
    });
  });

  describe('POST /api/mocks/generateData', () => {
    it('should generate specified number of users and pets', async () => {
      const response = await request(app)
        .post('/api/mocks/generateData')
        .send({ users: 5, pets: 3 });
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('users');
      expect(response.body).toHaveProperty('pets');
      expect(response.body.users.length).toBe(5);
      expect(response.body.pets.length).toBe(3);
    });
  });

  describe('GET /api/mocks/mockingpets', () => {
    it('should generate 50 pets', async () => {
      const response = await request(app).get('/api/mocks/mockingpets');
      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
      expect(response.body.length).toBe(50);
    });
  });

  describe('GET /api/mocks/users', () => {
    it('should get all users from database', async () => {
      const response = await request(app).get('/api/mocks/users');
      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
    });
  });

  describe('GET /api/mocks/pets', () => {
    it('should get all pets from database', async () => {
      const response = await request(app).get('/api/mocks/pets');
      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
    });
  });
});