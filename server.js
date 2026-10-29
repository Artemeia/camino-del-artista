// Servidor estático mínimo, sin dependencias.
// Solo entrega los archivos de /public. No recibe ni guarda ningún dato:
// todos los registros viven en el navegador de quien usa la app.
const http = require("http");
const crypto = require("crypto");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 3000;
const ROOT = path.join(__dirname, "public");

// Versión de este despliegue: el commit que publicó Railway o, si no existe, una huella del index.
// Se escribe dentro de la página para que la app sepa cuándo hay una más nueva.
const VERSION =
  (process.env.RAILWAY_GIT_COMMIT_SHA || "").slice(0, 12) ||
  crypto.createHash("sha256").update(fs.readFileSync(path.join(ROOT, "index.html"))).digest("hex").slice(0, 12);

const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".webmanifest": "application/manifest+json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".ico": "image/x-icon",
};

const SECURITY_HEADERS = {
  "Content-Security-Policy": [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline'",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "font-src https://fonts.gstatic.com",
    "img-src 'self' data: blob:",
    "connect-src 'self'",
    "base-uri 'none'",
    "form-action 'none'",
    "frame-ancestors 'none'",
  ].join("; "),
  "X-Content-Type-Options": "nosniff",
  "Referrer-Policy": "no-referrer",
  "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
  "X-Robots-Tag": "noindex, nofollow",
  // Siempre pedir la versión más reciente: así el acceso directo del teléfono
  // muestra los cambios apenas se despliegan.
  "Cache-Control": "no-cache",
};

function send(res, status, body, type) {
  res.writeHead(status, { "Content-Type": type, ...SECURITY_HEADERS });
  res.end(body);
}

http
  .createServer((req, res) => {
    if (req.method !== "GET" && req.method !== "HEAD") {
      return send(res, 405, "Método no permitido", "text/plain; charset=utf-8");
    }
    const url = decodeURIComponent((req.url || "/").split("?")[0]);
    if (url === "/salud") return send(res, 200, "ok", "text/plain; charset=utf-8");
    if (url === "/version") return send(res, 200, VERSION, "text/plain; charset=utf-8");

    let file = path.normalize(path.join(ROOT, url === "/" ? "index.html" : url));
    if (!file.startsWith(ROOT)) {
      return send(res, 403, "Prohibido", "text/plain; charset=utf-8");
    }
    fs.stat(file, (err, stat) => {
      if (err || !stat.isFile()) file = path.join(ROOT, "index.html");
      fs.readFile(file, (err2, data) => {
        if (err2) return send(res, 500, "Error", "text/plain; charset=utf-8");
        const type = TYPES[path.extname(file)] || "application/octet-stream";
        const body = path.extname(file) === ".html" ? data.toString("utf8").replace("__APP_VERSION__", VERSION) : data;
        send(res, 200, req.method === "HEAD" ? "" : body, type);
      });
    });
  })
  .listen(PORT, () => console.log(`Camino del Artista escuchando en el puerto ${PORT}`));
