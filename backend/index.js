import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import formRoutes from "./routes/form.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/form", formRoutes);

app.listen(3001, () => {
  console.log("✅ Backend corriendo en http://localhost:3001");
});
