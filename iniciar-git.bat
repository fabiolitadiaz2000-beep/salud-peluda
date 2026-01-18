@echo off
REM Agregar Git al PATH
set PATH=%PATH%;C:\Program Files\Git\cmd

REM Configurar Git
"C:\Program Files\Git\cmd\git.exe" config --global user.name "Usuario"
"C:\Program Files\Git\cmd\git.exe" config --global user.email "usuario@email.com"

REM Ir a la carpeta del proyecto
cd /d c:\Users\w10\Documents\Aplicacion

REM Limpiar repositorio anterior si existe
if exist .git (
    echo Eliminando repositorio anterior...
    rmdir /s /q .git
)

REM Inicializar nuevo repositorio
echo Inicializando repositorio Git...
"C:\Program Files\Git\cmd\git.exe" init

REM Agregar todos los archivos
echo Agregando archivos...
"C:\Program Files\Git\cmd\git.exe" add .

REM Crear commit inicial
echo Creando commit...
"C:\Program Files\Git\cmd\git.exe" commit -m "Salud Peluda - Aplicación de cuidado animal"

REM Cambiar rama a main
"C:\Program Files\Git\cmd\git.exe" branch -M main

echo.
echo ========================================
echo Repositorio Git inicializado correctamente
echo ========================================
echo.
echo Próximo paso: Conectar a GitHub
echo Ejecuta: git remote add origin https://github.com/TU_USUARIO/salud-peluda.git
echo Luego: git push -u origin main
echo.
pause
