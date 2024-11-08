import { Router } from "express";
import {
  getAllsneakers,
  getsneakersById,
  createsneakers,
  updatesneakers,
  deletesneakers,
} from "../controllers/sneakersControllers";

const sneakersRoutes = Router();

/**
 * @swagger
 * tags:
 *   brand: sneakers
 *   description: CRUD relacionado con sneakers
 */

/**
 * @swagger
 * /api/sneakers:
 *   get:
 *     summary: Obtener todos los sneakers
 *     tags: [sneakers]
 *     responses:
 *       200:
 *         description: Lista de sneakers
 */
sneakersRoutes.get("/", getAllsneakers);

/**
 * @swagger
 * /api/sneakers/{id}:
 *   get:
 *     summary: Obtener un sneakers por ID
 *     tags: [sneakers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del sneakers
 *     responses:
 *       200:
 *         description: Detalles del sneakers
 *       404:
 *         description: sneakers no encontrado
 */
sneakersRoutes.get("/:id", getsneakersById);

/**
 * @swagger
 * /api/sneakers:
 *   post:
 *     summary: Crear un nuevo sneakers
 *     tags: [sneakers]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - brand
 *               - description
 *               - price
 *               - color
 *               - size
 *             properties:
 *               brand:
 *                 type: string
 *               description:
 *                 type: string
 *               price:
 *                 type: number
 *               color: 
 *                 type: text
 *               size: 
 *                 type: decimal
 *     responses:
 *       201:
 *         description: sneakers creado
 *       500:
 *         description: Error en el servidor
 */
sneakersRoutes.post("/", createsneakers);

/**
 * @swagger
 * /api/sneakers/{id}:
 *   put:
 *     summary: Actualizar un sneakers existente
 *     tags: [sneakers]
 *     parameters:
 *       - in: path
 *         brand: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del sneakers
 *     requestBody:
 *       required: false
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               brand:
 *                 type: string
 *               description:
 *                 type: string
 *               price:
 *                 type: number
 *               color: 
 *                 type: text
 *               size: 
 *                 type: decimal
 *     responses:
 *       200:
 *         description: sneakers actualizado
 *       404:
 *         description: sneakers no encontrado
 *       500:
 *         description: Error en el servidor
 */
sneakersRoutes.put("/:id", updatesneakers);

/**
 * @swagger
 * /api/sneakers/{id}:
 *   delete:
 *     summary: Eliminar un sneakers
 *     tags: [sneakers]
 *     parameters:
 *       - in: path
 *         brand: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del sneakers
 *     responses:
 *       200:
 *         description: sneakers eliminado
 *       404:
 *         description: sneakers no encontrado
 *       500:
 *         description: Error en el servidor
 */
sneakersRoutes.delete("/:id", deletesneakers);

export default sneakersRoutes;