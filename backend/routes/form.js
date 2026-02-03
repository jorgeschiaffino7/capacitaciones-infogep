import express from "express";
import { saveToSheet } from "../services/sheets.js";

const router = express.Router();

router.post("/submit", async (req, res) => {
  try {
    await saveToSheet(req.body);
    res.status(200).json({ message: "Formulario guardado" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al guardar datos" });
  }
});

export default router;
