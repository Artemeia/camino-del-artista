# Camino del Artista

Webapp personal que acompaña las 12 semanas de *El Camino del Artista* de Julia Cameron.

- Especificación completa: [`docs/especificacion.md`](docs/especificacion.md)
- Bitácora de decisiones y avance: [`docs/bitacora.md`](docs/bitacora.md)

## Estado

**Fase 1 (MVP):** Hoy (páginas sí/no, pregunta del día, actividad pendiente, botones de ayuda), Mi semana (tema, síntesis y actividades propias) y Check-in semanal.

## Privacidad

La app no tiene backend de datos. Todo lo que se registra vive en el `localStorage` del navegador de quien la usa. El servidor solo entrega archivos estáticos.
**Nunca subas exportaciones (`camino-*.json`, `camino-*.txt`) a este repositorio.** El `.gitignore` ya las excluye.

## Correr en local

```bash
npm start   # http://localhost:3000
```

Sin dependencias. Requiere Node 18 o superior.

## Despliegue en Railway

Railway detecta Node y ejecuta `npm start`. El servidor lee el puerto desde `PORT`. Ruta de salud: `/salud`.
Con el repo conectado al servicio, cada push a `main` despliega automáticamente.
