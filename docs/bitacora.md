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
- Tipografías: Cormorant Garamond (títulos, preguntas y navegación) y Mulish (interfaz).
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

**Ajuste de diseño (mismo día)**
- La primera versión del MVP quedó más sobria que lo acordado. Se alineó con los diseños elegidos en el canvas "direcciones visuales" (Hoy y Mi semana, día y noche con aurora): aurora en acuarela con textura, Mulish como sans, botones Sí / Hoy no, puntos de la semana, panel verde "De tu lista", navegación con texto serif y pestaña Coach.
- Desplegado en Railway: https://web-production-28909.up.railway.app (auto-deploy desde `main`).

**Agenda con Google Calendar (mismo día)**
- Botón "Agendar en mi calendario" (Hoy), "Agendar minutos para mis actividades" (Semana) y "Agendar la próxima cita" (Check-in).
- Calendario mensual dentro de la app: se toca un día y se agenda. Tipos: Cita con el Artista, Minutos diarios u otra cosa. Todo editable: título, día, hora, duración, nota y repetición (una vez, días seguidos, días que elijo, cada semana, hasta una fecha).
- Decisión: la app no se conecta a Google con login. Arma el evento y abre Google Calendar prellenado; ella revisa, ajusta el aviso y guarda. Alternativa: archivo .ics para otros calendarios, con aviso 10 minutos antes.
- La app recuerda lo agendado desde ella, pero no ve el calendario: los cambios hechos en Google no vuelven a la app.
- Recordatorios: se usan las notificaciones de Google Calendar. Notificaciones propias de la web quedan descartadas por ahora (requieren servidor de envío y, en iPhone, instalar la app en la pantalla de inicio).

- Mensaje "Hoy en tu agenda" en la pantalla Hoy: muestra lo agendado desde la app para el día, con la hora, "Ahora" cuando está en curso y un mensaje sin culpa si ya pasó. Se actualiza cada minuto. No ve eventos creados directamente en Google.

## 2026-10-19

- Actividades con indicaciones: nuevo campo "Cómo hacerla" (desplegable, un paso por línea), editable.
- Tareas de la semana 1 (3 a 10) cargadas como resumen propio: tres viejos críticos, escribir una historia, carta en mi defensa, tres defensores, carta de agradecimiento, cinco vidas imaginarias, críticas a afirmaciones, caminata. Se cargan una vez; si se borran no vuelven.
- Como la app ya está en la semana 2, aparecen ahí marcadas "cap. 1 · viene de la semana anterior".

## 2026-10-28

**Error corregido**
- La semana se calculaba solo por fecha. Las tareas de la semana 1 se cargaron en la 2 y, cuando el calendario pasó a la 3, quedaron atrapadas en la 2 sin pantalla que las mostrara. El botón de pasar pendientes solo movía las de la semana en curso.

**Decisiones**
- Semanas manuales: la semana avanza solo cuando ella lo decide, desde Semana ("Estoy lista para la semana N"). Al pasar elige qué pendientes lleva; las no elegidas quedan en su semana marcadas como dejadas.
- Pendientes de semanas anteriores no decididos se muestran en Semana ("Traerlas aquí" / "Dejarlas ahí").
- Migración: quedó en la semana 2 (donde ella estaba), con inicio de semana 2 el 19 de octubre. Ajustes permite corregir la semana o reiniciar. Se quitó "Pausar" (ya no tiene sentido).
- Aviso suave si lleva 14 días o más en una semana (ritmo o resistencia), sin contador.
- Palabras de las páginas: se guardaban, pero solo se veían en el check-in. Ahora aparecen en Hoy (últimos 7 días) y en la exportación de texto. Los puntos de Hoy muestran los últimos 7 días.
- Quitados: pestaña y vista Coach, Check-in (lo hace a mano) y la pregunta "Para hoy". Los datos de check-ins antiguos siguen en el respaldo.
- Pendiente de elegir: vista amplia del proceso ("Mi camino"), con opciones presentadas.

**Pendiente**
- Mi camino: vista amplia del proceso (elegir entre las opciones presentadas).
- Fase 2: Cita con el Artista (ya no tiene lugar de registro tras quitar el check-in), Banco de ideas, pantalla de Mi caja de herramientas.
- Decidir si el repositorio queda público o privado.
