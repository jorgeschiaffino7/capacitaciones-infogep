# 📚 Guía Completa para Subir el Proyecto a Git

## ⚠️ IMPORTANTE - ANTES DE EMPEZAR

**¡CRÍTICO!** Tu archivo `.env` contiene credenciales sensibles de Google Cloud. Ya he creado un `.gitignore` que lo protege, pero es fundamental que sigas estos pasos correctamente.

## 📋 Pasos para Subir a Git

### 1. Inicializar el Repositorio Git

Abre una terminal en la carpeta del proyecto y ejecuta:

```bash
cd c:\capac-form-infogep
git init
```

### 2. Verificar que .gitignore está funcionando

Antes de hacer commit, verifica que los archivos sensibles están siendo ignorados:

```bash
git status
```

**Asegúrate de que NO aparezcan:**
- `backend/.env` (¡MUY IMPORTANTE!)
- `node_modules/` (en ninguna carpeta)
- Archivos `.log`

**Deberían aparecer:**
- `.gitignore`
- `README.md`
- Código fuente del backend y frontend
- `package.json` y `package-lock.json`

### 3. Agregar los archivos al staging

```bash
git add .
```

### 4. Verificar nuevamente (¡IMPORTANTE!)

```bash
git status
```

Lee cuidadosamente la lista de archivos que se agregarán. Si ves `backend/.env`, **DETENTE** y ejecuta:

```bash
git reset
```

Luego verifica que el `.gitignore` esté correcto.

### 5. Crear el primer commit

```bash
git commit -m "Initial commit: Sistema de formularios de capacitación con integración a Google Sheets"
```

## 🌐 Subir a GitHub (Opción Recomendada)

### Opción A: Crear repositorio desde GitHub

1. Ve a [GitHub](https://github.com) e inicia sesión
2. Haz clic en el botón "+" arriba a la derecha → "New repository"
3. Completa los datos:
   - **Repository name:** `capac-form-infogep`
   - **Description:** "Sistema de formularios de capacitación con integración a Google Sheets"
   - **Visibilidad:** Private (recomendado por las credenciales)
   - **NO marques** "Initialize this repository with a README" (ya tienes uno)

4. Haz clic en "Create repository"

5. Copia los comandos que GitHub te muestra (algo como):

```bash
git remote add origin https://github.com/TU-USUARIO/capac-form-infogep.git
git branch -M main
git push -u origin main
```

### Opción B: Usar GitHub CLI (gh)

Si tienes GitHub CLI instalado:

```bash
gh repo create capac-form-infogep --private --source=. --remote=origin
git push -u origin main
```

## 🦊 Subir a GitLab (Alternativa)

### 1. Crear repositorio en GitLab

1. Ve a [GitLab](https://gitlab.com) e inicia sesión
2. Haz clic en "New project" → "Create blank project"
3. Completa:
   - **Project name:** `capac-form-infogep`
   - **Visibility:** Private
   - Desmarca "Initialize repository with a README"

4. Copia los comandos de GitLab:

```bash
git remote add origin https://gitlab.com/TU-USUARIO/capac-form-infogep.git
git branch -M main
git push -u origin main
```

## 🔧 Comandos Git Útiles para el Futuro

### Ver el estado de tus archivos
```bash
git status
```

### Ver qué cambios has hecho
```bash
git diff
```

### Agregar cambios específicos
```bash
git add archivo.js
git add carpeta/
```

### Agregar todos los cambios
```bash
git add .
```

### Hacer commit con mensaje
```bash
git commit -m "Descripción de los cambios"
```

### Ver historial de commits
```bash
git log
git log --oneline  # Versión resumida
```

### Subir cambios al repositorio remoto
```bash
git push
```

### Descargar cambios del repositorio remoto
```bash
git pull
```

### Crear una nueva rama
```bash
git checkout -b nombre-rama
```

### Cambiar de rama
```bash
git checkout nombre-rama
```

### Ver todas las ramas
```bash
git branch -a
```

## 🔐 Configuración Adicional de Seguridad

### 1. GitHub Secrets (para CI/CD)

Si usas GitHub Actions, guarda las variables de entorno como secrets:

1. Ve a tu repositorio en GitHub
2. Settings → Secrets and variables → Actions
3. New repository secret
4. Agrega: `GOOGLE_CLIENT_EMAIL`, `GOOGLE_PRIVATE_KEY`, `SPREADSHEET_ID`

## 🚨 Qué Hacer si Subiste .env por Error

Si accidentalmente subiste el archivo `.env` con credenciales:

### 1. Eliminar el archivo del historial
```bash
git rm --cached backend/.env
git commit -m "Remove .env file from repository"
git push
```

### 2. Rotar las credenciales (¡IMPORTANTE!)
1. Ve a Google Cloud Console
2. Desactiva o elimina la cuenta de servicio comprometida
3. Crea nuevas credenciales
4. Actualiza tu `.env` local con las nuevas credenciales

### 3. Limpiar el historial (opcional, si ya subiste)
```bash
# Advertencia: Esto reescribe el historial
git filter-branch --force --index-filter \
  "git rm --cached --ignore-unmatch backend/.env" \
  --prune-empty --tag-name-filter cat -- --all

git push origin --force --all
```

## 📊 Estructura Recomendada de Commits

Usa mensajes claros y descriptivos:

- ✨ `feat: Agregar validación de formulario`
- 🐛 `fix: Corregir conexión con Google Sheets`
- 📝 `docs: Actualizar README con instrucciones`
- 🎨 `style: Mejorar diseño del formulario`
- ♻️ `refactor: Reorganizar servicios del backend`
- ⚡ `perf: Optimizar consultas a la API`
- 🔧 `chore: Actualizar dependencias`

## 📞 Ayuda Adicional

- **Documentación Git:** https://git-scm.com/doc
- **GitHub Docs:** https://docs.github.com
- **GitLab Docs:** https://docs.gitlab.com

## ✅ Checklist Final

Antes de hacer push, verifica:

- [ ] El archivo `.gitignore` existe en la raíz
- [ ] `backend/.env` NO aparece en `git status`
- [ ] `node_modules/` NO aparece en `git status`
- [ ] El README está actualizado
- [ ] Los commits tienen mensajes descriptivos
- [ ] El repositorio es privado (si contiene lógica de negocio sensible)

---

**¡Listo! Ahora tu proyecto está protegido y listo para ser versionado con Git.** 🎉
