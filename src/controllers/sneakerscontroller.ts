import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { sneakers } from "../entities/sneakers";

const sneakersRepository = AppDataSource.getRepository(sneakers);

// GET - Obtener Todos los sneakersos
export const getAllsneakers = async(red: Request, res: Response) => {
  try {
    const sneakers = await sneakersRepository.find();
    res.json(sneakers);
  } catch(error) {
    res.status(500).json({ message: "Error al obtener sneakers." });
  }
};

// GET by ID - Obetener sneakerso por ID
export const getsneakersById = async(req: Request, res: Response) => {
  try {
    const sneakers = await sneakersRepository.findOneBy({
      id: parseInt(req.params.id),
    });

    if(sneakers) {
      res.json(sneakers);
    } else {
      res.status(404).json({ message: "Sneakers no encontrado" });
    }
  } catch(error) {
    res.status(500).json({ message: "Error al obtener el sneakers." });
  }
};

// POST - Crear un nuevo sneakers
export const createsneakers = async(req: Request, res: Response) => {
  try {
    const { brand, description, price, color, size  } = req.body;
    const sneakers = new sneakers();
    sneakers.brand = brand;
    sneakers.description = description;
    sneakers.price = price;
    sneakers.color = color;
    sneakers.size = size;

    await sneakersRepository.save(sneakers);
    res.status(201).json(sneakers);
  } catch(error) {
    res.status(500).json({ message: "Error al crear el sneakers." });
  }
};

// PUT - Actualizar un sneakerso existente
export const updatesneakers = async(req: Request, res: Response) => {
  try {
    const { brand, description, price, color, size } = req.body;
    const sneakers = await sneakersRepository.findOneBy({
      id: parseInt(req.params.id),
    });

    if(sneakers) {
      sneakers.brand = brand ?? sneakers.brand;
      sneakers.description = description ?? sneakers.description;
      sneakers.price = price ?? sneakers.price;
      sneakers.color = color ?? sneakers.color
      sneakers.size = size ?? sneakers.size 

      await sneakersRepository.save(sneakers);
      res.json(sneakers);
    } else {
      res.status(404).json({ message: "sneakers no encontrado" });
    }
  } catch(error) {
    res.status(500).json({ message: "Error al actualizar el sneakers." });
  }
};

// DELETE - Borrar un sneakerso
export const deletesneakers = async(req: Request, res: Response) => {
  try {
    const sneakers = await sneakersRepository.findOneBy({
      id: parseInt(req.params.id),
    });

    if (sneakers) {
      await sneakersRepository.remove(sneakers);
      res.json({ message: "sneakers eliminado." });
    } else {
      res.status(404).json({ message: "sneakers no encontrado." });
    }
  } catch(error) {
    res.status(500).json({ message: "Error al eliminar el sneakers." });
  }
};