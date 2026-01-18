# 🚀 Guía Completa: Cómo subir tu app a GitHub y Vercel

## Paso 1: Preparar tu máquina

### En PowerShell (como Administrador):

```powershell
# Verificar que Git está instalado
git --version

# Si no está instalado, descárgalo de: https://git-scm.com/download/win
```

---

## Paso 2: Crear un repositorio en GitHub

1. Ve a [github.com](https://github.com)
2. Inicia sesión (crea cuenta si no tienes)
3. Haz clic en el **+** en la esquina superior derecha
4. Selecciona **New repository**
5. **Nombre:** `salud-peluda`
6. **Descripción:** "Aplicación de cuidado animal"
7. **Visibility:** Public
8. **NO** marques "Initialize with README" (ya lo tenemos)
9. Haz clic en **Create repository**

---

## Paso 3: Configurar Git localmente

En PowerShell, en tu carpeta `C:\Users\w10\Documents\Aplicacion`:

```powershell
# Configura tu identidad en Git (una sola vez)
git config --global user.name "Tu Nombre Aquí"
git config --global user.email "tu.email@ejemplo.com"

# Verifica la configuración
git config --global user.name
git config --global user.email
```

---

## Paso 4: Inicializar Git en tu proyecto

En PowerShell, **dentro de** `C:\Users\w10\Documents\Aplicacion`:

```powershell
# Inicializar Git
git init

# Añadir todos los archivos
git add .

# Crear el primer commit
git commit -m "Initial commit: Aplicación Salud Peluda"

# Ver el estado
git status
```

---

## Paso 5: Conectar con GitHub

En la página que creaste en GitHub, verás instrucciones. Copia y ejecuta:

```powershell
git branch -M main
git remote add origin https://github.com/TU_USUARIO/salud-peluda.git
git push -u origin main
```

**Reemplaza `TU_USUARIO` con tu nombre de usuario de GitHub**

---

## Paso 6: Verificar en GitHub

1. Ve a tu repositorio: `https://github.com/TU_USUARIO/salud-peluda`
2. Deberías ver todos tus archivos
3. El README.md debería aparecer en la página principal

---

## Paso 7: Desplegar en Vercel

### Opción A: Con GitHub (Automático - Recomendado)

1. Ve a [vercel.com](https://vercel.com)
2. Haz clic en **Sign Up** (o inicia sesión)
3. Selecciona **Continue with GitHub**
4. Autoriza Vercel a acceder a tu GitHub
5. Haz clic en **New Project**
6. Busca y selecciona `salud-peluda`
7. Deja los valores por defecto
8. Haz clic en **Deploy**
9. **¡Listo!** Tu app estará en:
   ```
   https://salud-peluda.vercel.app
   ```

---

## Paso 8: Hacer cambios futuros

Cuando hagas cambios en tu código:

```powershell
# Ver cambios
git status

# Añadir cambios
git add .

# Crear un nuevo commit
git commit -m "Descripción de cambios"

# Subir a GitHub
git push
```

**Vercel se actualizará automáticamente cuando hagas push a GitHub**

---

## 🎉 ¡Listo!

Tu aplicación ahora está disponible en:
- **URL pública:** `https://salud-peluda.vercel.app`
- **Repositorio:** `https://github.com/TU_USUARIO/salud-peluda`

Puedes compartir el link con cualquiera y verán tu app funcionando en tiempo real.

---

## 📞 Si tienes problemas

**Error: "fatal: Not a valid object name"**
- Asegúrate de estar en la carpeta correcta: `C:\Users\w10\Documents\Aplicacion`

**Error: "fatal: refusing to merge unrelated histories"**
```powershell
git pull origin main --allow-unrelated-histories
git push -u origin main
```

**Vercel dice "Build failed"**
- Verifica que tu `server.js` es correcto
- Asegúrate de que el puerto está configurado (por defecto 8080)

---

¡Éxito! 🚀🐾
