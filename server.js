const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8080;

// Extensiones permitidas para servir
const allowedExtensions = new Set(['.html', '.htm', '.css', '.js', '.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp', '.ico']);

// Middleware: cabeceras de seguridad y bloqueo de rutas sensibles
app.use((req, res, next) => {
    const forbidden = ['node_modules', 'package.json', 'package-lock.json', 'server.js', '.env'];
    if (forbidden.some(s => req.path.includes(s))) {
        return res.status(403).send('Forbidden');
    }

    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'DENY');
    res.setHeader('Referrer-Policy', 'no-referrer');
    res.setHeader('Cross-Origin-Resource-Policy', 'same-origin');
    res.setHeader('Content-Security-Policy', "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:;");
    next();
});

// Servir archivos estáticos, sin index automático y sin dotfiles
app.use(express.static(__dirname, { dotfiles: 'ignore', index: false }));

// Restringir recursos servidos por extensión y evitar traversal
app.use((req, res, next) => {
    const requestedPath = path.normalize(path.join(__dirname, '.' + req.path));
    if (!requestedPath.startsWith(path.normalize(__dirname))) {
        return res.status(400).send('Bad request');
    }

    const ext = path.extname(requestedPath) || '.html';
    if (!allowedExtensions.has(ext)) {
        return res.status(403).send('Forbidden');
    }

    next();
});

// Ruta principal: enviar el archivo de la aplicación
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Fallback para rutas no encontradas
app.use((req, res) => {
    res.status(404).send('Not found');
});

app.listen(PORT, () => {
    console.log(`✅ Servidor ejecutándose en http://localhost:${PORT}`);
});
