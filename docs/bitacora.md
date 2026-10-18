# Bitácora del proyecto

Registro de decisiones y avance. Sin datos personales del proceso: esos viven solo en el dispositivo.

## 2026-10-18

**Contexto**
- Inicio del Camino: lunes 12 de octubre de 2026 (semana 1).
- Se quiere la webapp fuera de Claude, abierta en la web sin iniciar sesión.

**Decisiones de diseño**
- Nueva dirección visual (reemplaza "ecléctica tipo cuaderno de recortes"): introspectiva, serena, acuarela sutil, inspiración nórdica y cielo nocturno.
- Modo día "Lavado" (papel claro, manchas de acuarela suaves) y modo noche "Nocturno" (ultramar profundo, auroras, estrellas tenues).
- Paleta: ultramar, magenta, palo rosa y verde montaña en versiones empolvadas.
- Tipografías: Cormorant Garamond (títulos y preguntas), Nunito Sans (interfaz), Caveat (detalles mínimos).
- Cada semana tiene su matiz de color (rotación de tono sobre los lavados).

**Decisiones técnicas**
- Hosting: Railway, desplegando desde este repo de GitHub.
- Arquitectura MVP: un `index.html` + servidor Node estático sin dependencias.
- Persistencia: `localStorage` en el dispositivo, con exportar e importar (JSON y texto). Sin cuentas, sin base de datos y sin enviar datos a ningún servidor.
- Consecuencia asumida: los datos no se sincronizan entre teléfono y computador. Se usa sobre todo en el teléfono.
- El chat con el coach queda para la fase 2. Requiere un backend con API de un modelo, lo que implica clave, costo y protección del endpoint.

**Construido (fase 1)**
- Hoy: marcar páginas (luz + aurora que se intensifica), palabra opcional, pregunta del día, aviso de semanas 5 a 8, actividad pendiente.
- Botones "Me siento perdida" y "Estoy dándole vueltas": flujos guiados de 2-3 minutos (validar o STOP → defusión o respiración → valores → micro acción de 5 minutos con temporizador → "¿te sirvió?" que alimenta la caja de herramientas).
- Acceso permanente a ayuda inmediata (*4141, Salud Responde 600 360 7777, 131).
- Mi semana: tema, síntesis parafraseada, lectura laica cuando corresponde, actividades propias (agregar rápido, marcar, editar, borrar).
- Check-in: luces de páginas de la semana, cita con el artista, actividades hechas y pendientes (con opción de pasarlas a la semana siguiente), sincronicidades y lo más significativo.
- Semana 4: interfaz reducida.
- Ajustes: modo día/noche/automático, fecha de inicio, pausar/retomar y reiniciar sin penalización, exportar e importar.

**Pendiente**
- Fase 2: Cita con el Artista, Banco de ideas, chat con el coach, Mi camino (sendero o constelación), pantalla de Mi caja de herramientas.
- Decidir si el repositorio queda público o privado.
