import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import formRoutes from "./routes/form.js";

const app = express();

// CORS: permitir frontend en Vercel y local (evita redirect en preflight)
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:3000",
  /^https:\/\/capacitaciones-infogep.*\.vercel\.app$/,
];
app.use(
  cors({
    origin: (origin, cb) => {
      if (!origin) return cb(null, true);
      const ok = allowedOrigins.some((o) => (typeof o === "string" ? o === origin : o.test(origin)));
      cb(null, ok ? origin : false);
    },
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
  })
);
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
