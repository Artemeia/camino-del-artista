// Prepara /dist para Cloudflare Pages. Sin dependencias.
// Copia /public, escribe la versión dentro de la página y crea las rutas /version y /salud.
const crypto = require("crypto");
const fs = require("fs");
const path = require("path");

const RAIZ = path.join(__dirname, "..");
const ORIGEN = path.join(RAIZ, "public");
const DESTINO = path.join(RAIZ, "dist");

const html = fs.readFileSync(path.join(ORIGEN, "index.html"), "utf8");
// Versión: el commit que publica Cloudflare o, si no existe, una huella del index.
const version =
  (process.env.CF_PAGES_COMMIT_SHA || "").slice(0, 12) ||
  crypto.createHash("sha256").update(html).digest("hex").slice(0, 12);

fs.rmSync(DESTINO, { recursive: true, force: true });
fs.cpSync(ORIGEN, DESTINO, { recursive: true });
fs.writeFileSync(path.join(DESTINO, "index.html"), html.replace("__APP_VERSION__", version));
fs.writeFileSync(path.join(DESTINO, "version"), version);
fs.writeFileSync(path.join(DESTINO, "salud"), "ok");

console.log(`dist listo, versión ${version}`);
