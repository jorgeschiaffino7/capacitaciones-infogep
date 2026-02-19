import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import formRoutes from "./routes/form.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/form", formRoutes);

// En Vercel se usa la exportación por defecto; en local arrancamos el servidor
if (!process.env.VERCEL) {
  const port = process.env.PORT || 3001;
  app.listen(port, () => {
    console.log(`✅ Backend corriendo en http://localhost:${port}`);
  });
}

export default app;
