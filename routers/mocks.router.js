import express from "express";
import {
  generateUsers,
  generatePets,
} from "../controllers/mockingController.js";
import User from "../models/userModel.js";
import Pet from "../models/petModel.js";

const router = express.Router();

/**
 * @swagger
 * /api/mocks/mockingusers:
 *   get:
 *     summary: Genera 50 usuarios ficticios
 *     responses:
 *       200:
 *         description: Lista de usuarios generados exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 */

router.get("/mockingusers", async (req, res) => {
  try {
    const users = await generateUsers(50);
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * @swagger
 * /api/mocks/generateData:
 *   post:
 *     summary: Genera usuarios y mascotas ficticias
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               users:
 *                 type: integer
 *                 description: Número de usuarios a generar
 *               pets:
 *                 type: integer
 *                 description: Número de mascotas a generar
 *     responses:
 *       200:
 *         description: Usuarios y mascotas generados exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 users:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/User'
 *                 pets:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Pet'
 */

router.post("/generateData", async (req, res) => {
  try {
    const { users, pets } = req.body;
    const generatedUsers = await generateUsers(users);
    const generatedPets = await generatePets(pets);
    res.json({ users: generatedUsers, pets: generatedPets });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * @swagger
 * /api/mocks/mockingpets:
 *   get:
 *     summary: Genera 50 mascotas ficticias
 *     responses:
 *       200:
 *         description: Lista de mascotas generadas exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Pet'
 */

router.get("/mockingpets", async (req, res) => {
  try {
    const pets = await generatePets(50);
    res.json(pets);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * @swagger
 * /api/mocks/users:
 *   get:
 *     summary: Devuelve todos los usuarios almacenados en la base de datos
 *     responses:
 *       200:
 *         description: Lista de usuarios
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 */

router.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * @swagger
 * /api/mocks/pets:
 *   get:
 *     summary: Devuelve todas las mascotas almacenadas en la base de datos
 *     responses:
 *       200:
 *         description: Lista de mascotas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Pet'
 */
router.get("/pets", async (req, res) => {
  try {
    const pets = await Pet.find();
    res.json(pets);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
