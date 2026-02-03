# ⚡ Comandos Rápidos para Git

## 🚀 Primera vez (Subir a GitHub)

```bash
# 1. Inicializar Git
git init

# 2. Verificar que .env esté protegido
git status

# 3. Agregar todos los archivos
git add .

# 4. Primer commit
git commit -m "Initial commit: Sistema de formularios de capacitación"

# 5. Conectar con GitHub (reemplaza TU-USUARIO)
git remote add origin https://github.com/TU-USUARIO/capac-form-infogep.git

# 6. Subir al repositorio
git branch -M main
git push -u origin main
```

## 📝 Flujo de trabajo diario

```bash
# 1. Ver qué cambió
git status

# 2. Agregar cambios
git add .

# 3. Hacer commit
git commit -m "Descripción de tus cambios"

# 4. Subir a GitHub/GitLab
git push
```

## 🔄 Trabajar con ramas

```bash
# Crear nueva rama para una funcionalidad
git checkout -b feature/nueva-funcionalidad

# Hacer cambios y commits en la rama
git add .
git commit -m "Agregar nueva funcionalidad"

# Subir la rama
git push -u origin feature/nueva-funcionalidad

# Volver a la rama principal
git checkout main

# Fusionar la rama (después de revisar)
git merge feature/nueva-funcionalidad
```

## 🆘 Comandos de emergencia

```bash
# Deshacer cambios no guardados
git checkout -- archivo.js

# Deshacer el último commit (mantiene cambios)
git reset --soft HEAD~1

# Ver archivos ignorados
git status --ignored

# Eliminar archivo del staging (antes del commit)
git reset HEAD archivo.js

# Ver diferencias de un archivo específico
git diff archivo.js
```

## 🔍 Consulta rápida

```bash
# Ver historial
git log --oneline --graph --all

# Ver ramas locales y remotas
git branch -a

# Ver información del repositorio remoto
git remote -v

# Actualizar desde el repositorio remoto
git pull
```
