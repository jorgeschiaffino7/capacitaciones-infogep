# Sistema de Formulario de Capacitaciones

Sistema web para gestionar formularios de capacitaciones que se integra con Google Sheets.

## 📋 Estructura del Proyecto

```
capac-form-infogep/
├── backend/          # API Node.js + Express
│   ├── index.js      # Servidor principal
│   ├── routes/       # Rutas de la API
│   ├── services/     # Servicios (Google Sheets)
│   └── .env          # Variables de entorno (NO incluido en Git)
│
└── frontend/         # Aplicación React + Vite
    ├── src/
    │   ├── components/    # Componentes React
    │   └── services/      # Servicios API
    └── public/
```

## 🚀 Instalación y Configuración

### Prerrequisitos

- Node.js (v14 o superior)
- npm o yarn
- Cuenta de Google Cloud con Google Sheets API habilitada

### 1. Clonar el repositorio

```bash
git clone <url-del-repositorio>
cd capac-form-infogep
```

### 2. Configurar Backend

```bash
cd backend
npm install
```

Crear archivo `.env` en la carpeta backend con la siguiente estructura:

```env
GOOGLE_CLIENT_EMAIL=tu-email@proyecto.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY=-----BEGIN PRIVATE KEY-----\nTU_CLAVE_PRIVADA\n-----END PRIVATE KEY-----\n
SPREADSHEET_ID=tu-id-de-spreadsheet
```

**Nota:** Reemplaza los valores con tus credenciales reales de Google Cloud.

### 3. Configurar Frontend

```bash
cd frontend
npm install
```

## 🏃 Ejecutar el Proyecto

### Iniciar Backend

```bash
cd backend
npm start
```

El servidor estará disponible en `http://localhost:3000` (o el puerto configurado).

### Iniciar Frontend

```bash
cd frontend
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`.

## 🔑 Configuración de Google Sheets API

1. Ve a [Google Cloud Console](https://console.cloud.google.com/)
2. Crea un nuevo proyecto o selecciona uno existente
3. Habilita la API de Google Sheets
4. Crea una cuenta de servicio (Service Account)
5. Genera una clave JSON para la cuenta de servicio
6. Copia las credenciales al archivo `.env` del backend
7. Comparte tu Google Sheet con el email de la cuenta de servicio

## 📝 Uso

1. Accede a la aplicación frontend
2. Completa el formulario de capacitación
3. Los datos se enviarán automáticamente a Google Sheets

## 🛠️ Tecnologías Utilizadas

### Backend
- Node.js
- Express.js
- Google APIs (google-spreadsheet)
- CORS

### Frontend
- React
- Vite
- Tailwind CSS
- Axios

## 🌐 Despliegue en Vercel

Backend y frontend se despliegan como **dos proyectos separados** en Vercel.

### Configuración

- **Backend** (`backend/`): tiene `vercel.json` y exporta la app Express para Vercel.
- **Frontend** (`frontend/`): tiene `vercel.json` para build con Vite; usa la variable de entorno `VITE_API_URL` para la URL del backend.

La carpeta **`.vercel`** no se crea a mano: Vercel la genera al ejecutar `vercel link` en cada carpeta (o al conectar el repo y elegir la raíz del proyecto). Está en `.gitignore`.

### Pasos para desplegar

1. **Backend**
   - En Vercel: New Project → Importar repo → **Root Directory** = `backend`.
   - Añadir en Variables de entorno las mismas que en tu `.env` (Google, etc.).
   - Deploy. Anota la URL (ej. `https://tu-backend.vercel.app`).

2. **Frontend**
   - En Vercel: New Project → Importar el mismo repo → **Root Directory** = `frontend`.
   - Añadir variable de entorno: `VITE_API_URL` = URL del backend (ej. `https://tu-backend.vercel.app`).
   - Deploy.

3. **CORS**: El backend ya usa `cors()`; si restringes orígenes, incluye la URL de producción del frontend.

### Despliegue desde CLI

```bash
# Backend
cd backend
npx vercel
# (opcional) vercel link para vincular a un proyecto existente

# Frontend (en otra terminal o después)
cd frontend
npx vercel
# Añade VITE_API_URL en el dashboard de Vercel para el proyecto frontend
```

## ⚠️ Notas de Seguridad

- **NUNCA** subas el archivo `.env` a Git
- Mantén tus credenciales de Google Cloud seguras
- No compartas tu `GOOGLE_PRIVATE_KEY` públicamente
- Usa variables de entorno en producción

## 📄 Licencia

[Especificar licencia]

## 👥 Contribuir

[Instrucciones para contribuir al proyecto]
