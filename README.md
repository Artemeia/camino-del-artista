# Camino del Artista

Webapp personal que acompaña las 12 semanas de *El Camino del Artista* de Julia Cameron.

- Especificación completa: [`docs/especificacion.md`](docs/especificacion.md)
- Bitácora de decisiones y avance: [`docs/bitacora.md`](docs/bitacora.md)

## Estado

**Fase 1 (MVP):** Hoy (páginas sí/no con palabras, actividad pendiente, botones de ayuda) y Mi semana (tema, síntesis, actividades propias y paso manual a la semana siguiente).

## Privacidad

La app no tiene backend de datos. Todo lo que se registra vive en el `localStorage` del navegador de quien la usa. El servidor solo entrega archivos estáticos.
**Nunca subas exportaciones (`camino-*.json`, `camino-*.txt`) a este repositorio.** El `.gitignore` ya las excluye.

## Correr en local

```bash
npm start   # http://localhost:3000
```

Sin dependencias. Requiere Node 18 o superior.

## Despliegue en Cloudflare Pages

Proyecto de Pages conectado a este repo: cada push a `main` despliega automáticamente.

- Comando de build: `npm run build`
- Carpeta de salida: `dist`

El build copia `public/` a `dist/`, escribe la versión en la página y crea `/version` y `/salud`. Las cabeceras están en `public/_headers`.

`server.js` es el servidor que usa Railway. Se mantiene mientras dure la mudanza y sirve para correr la app en local.
