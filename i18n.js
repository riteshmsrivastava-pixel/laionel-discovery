/* LAIONEL Discovery: English / Spanish interface toggle.
   Translates interface text after it is drawn. Shared data (companies, people,
   questions, interview notes) and outreach drafts stay in English, since they go
   to US participants. Choice is remembered per browser. */
(function(){
  const ES = {
    /* nav and chrome */
    "Plan":"Plan","Companies":"Empresas","People":"Personas","Messages":"Mensajes","Script":"Guion","Interviews":"Entrevistas",
    "Synthesis":"Síntesis","Outreach":"Contacto","Settings":"Ajustes",
    "Discovery · MIT Sloan research":"Discovery · Investigación MIT Sloan",
    "Saving in this browser only":"Guardando solo en este navegador","Shared store, live":"Datos compartidos, en vivo","Connecting":"Conectando",
    "Fieldwork Sep 27 to Oct 23, 2026":"Trabajo de campo: 27 sep a 23 oct de 2026",
    "Sign out":"Cerrar sesión",

    /* sign-in */
    "Discovery workspace for our MIT Sloan research study. Ritesh and Monica only.":"Espacio de trabajo de nuestro estudio de investigación en MIT Sloan. Solo Ritesh y Monica.",
    "Email":"Correo electrónico","Password":"Contraseña","Sign in":"Iniciar sesión",
    "Email or password is wrong.":"El correo o la contraseña no son correctos.",
    "This account does not have access to LAIONEL Discovery.":"Esta cuenta no tiene acceso a LAIONEL Discovery.",
    "Shared sign-in is not connected yet.":"El inicio de sesión compartido aún no está conectado.",
    "Continue in this browser":"Continuar en este navegador",

    /* plan */
    "MIT Sloan research study":"Estudio de investigación MIT Sloan","The plan, from Saturday":"El plan, desde el sábado",
    "Log an interview":"Registrar una entrevista","Load starter plan":"Cargar plan inicial",
    "This copy saves only in this browser. Open it from the shared link, or import a JSON export in Settings, to work on the same data as your research partner.":"Esta copia se guarda solo en este navegador. Ábrela desde el enlace compartido, o importa un JSON en Ajustes, para trabajar con los mismos datos que tu compañero de investigación.",
    "Interviews done":"Entrevistas hechas","On the calendar":"En el calendario","People contacted":"Personas contactadas","Days to findings":"Días para los resultados",
    "How we pick who to talk to":"Cómo elegimos con quién hablar",
    "Companies are scored 0 to 8 on four signals, then people are chosen by role inside the top-scoring companies. No more than two people per company, and when there are two, different functions.":"Las empresas se puntúan de 0 a 8 según cuatro señales y luego elegimos personas por rol dentro de las mejor puntuadas. Como máximo dos personas por empresa y, si son dos, de funciones distintas.",
    "AI maturity":"Madurez en IA",
    "Named CAIO or Head of Responsible AI, or disclosed agent deployments. No agents, no authority problem yet.":"CAIO o responsable de IA responsable con nombre, o despliegues de agentes públicos. Sin agentes, todavía no hay problema de autoridad.",
    "Regulatory":"Regulación",
    "Banking, insurance, EU operations. These firms already have a vocabulary for model risk.":"Banca, seguros, operaciones en la UE. Estas empresas ya tienen un vocabulario de riesgo de modelos.",
    "Size fit":"Tamaño adecuado",
    "2,500 to 25,000 employees scores highest: big enough to have the problem, small enough that one conversation covers the whole picture.":"De 2.500 a 25.000 empleados puntúa más alto: lo bastante grandes para tener el problema y lo bastante pequeñas para que una conversación cubra todo el panorama.",
    "Reach":"Alcance",
    "Cohort, alumni, our networks. A 6 we can reach beats an 8 we cannot.":"Cohorte, exalumnos, nuestras redes. Un 6 al que podemos llegar vale más que un 8 al que no.",
    "Platform leads are the only people who can answer H8. Board and business heads add context.":"Solo los responsables de plataforma pueden responder H8. Consejo y directivos de negocio aportan contexto.",
    "When replies actually arrive":"Cuándo llegan de verdad las respuestas",
    "First 30 messages out. Warm intros through the cohort first; they answer in 2 to 5 days.":"Salen los primeros 30 mensajes. Primero presentaciones a través de la cohorte; responden en 2 a 5 días.",
    "80 messages cumulative. Cold LinkedIn and email answer in 3 to 10 days. Expect 6 calls booked by Friday, zero done. That is normal.":"80 mensajes acumulados. LinkedIn y correo en frío responden en 3 a 10 días. Espera 6 llamadas agendadas el viernes y ninguna hecha. Es normal.",
    "First real interviews. Target 8. Friday synthesis: fix any core question that is not landing.":"Primeras entrevistas reales. Objetivo 8. Síntesis del viernes: ajusta cualquier pregunta clave que no funcione.",
    "12 more (20 cumulative). Checkpoint on the 16th: read the evidence, no decision yet.":"12 más (20 acumuladas). Revisión el día 16: leer la evidencia, sin decidir todavía.",
    "Final 15 (35 cumulative). Priority analysis and draft findings on the 23rd.":"Últimas 15 (35 acumuladas). Análisis de prioridades y borrador de resultados el día 23.",
    "Rule of thumb from cold outreach to senior people: 40 messages for every 5 conversations. If Week 1 books fewer than 4, move the findings date a week rather than lowering the count.":"Regla general en contacto en frío con directivos: 40 mensajes por cada 5 conversaciones. Si la semana 1 agenda menos de 4, mueve una semana la fecha de resultados en vez de bajar el objetivo.",
    "Sep 27-28":"27-28 sep","Sep 28-Oct 2":"28 sep-2 oct","Oct 5-9":"5-9 oct","Oct 12-16":"12-16 oct","Oct 19-23":"19-23 oct",
    "Week by week":"Semana a semana","Add a task":"Añadir tarea",

    /* companies */
    "Target list":"Lista objetivo","Add company":"Añadir empresa","All sectors":"Todos los sectores","Beachhead and second ring":"Núcleo y segundo anillo",
    "Beachhead":"Núcleo","Second ring":"Segundo anillo","2nd ring":"2.º anillo",
    "Score":"Puntuación","Company":"Empresa","Sector":"Sector","Size band":"Tamaño","HQ":"Sede","Notes":"Notas",

    /* people */
    "Pipeline":"Embudo","Add person":"Añadir persona","All roles":"Todos los roles","All statuses":"Todos los estados","Both owners":"Ambos responsables",
    "Name":"Nombre","Title":"Cargo","Role":"Rol","Owner":"Responsable","Status":"Estado","Sent":"Enviado","Verified":"Verificado","Slot to fill":"Hueco por cubrir","Verify":"Verificar",
    "Identified":"Identificado","Contacted":"Contactado","Replied":"Respondió","Scheduled":"Agendado","Done":"Hecho","Declined":"Rechazó","No reply":"Sin respuesta","Cancelled":"Cancelado",
    "CAIO / Head of AI":"CAIO / Director de IA","CIO / CTO":"CIO / CTO","Risk / Legal / Compliance":"Riesgos / Legal / Cumplimiento","CFO / Finance":"CFO / Finanzas",
    "AI platform / engineering":"Plataforma de IA / ingeniería","Board / business head":"Consejo / directivo de negocio","Adjacent (alumni, analyst, Big Four)":"Adyacente (exalumnos, analistas, Big Four)",

    /* messages */
    "Outreach, person by person":"Contacto, persona a persona",
    "Two drafts for every profile. The short note goes in LinkedIn's \"Add a note\" box when you connect; it is kept under 200 characters, the limit on free LinkedIn accounts. The longer message is for people already in your network, by LinkedIn message or email. Edit either one, then save it so your partner sees the same version.":"Dos borradores por perfil. La nota corta va en el cuadro \"Añadir una nota\" de LinkedIn al conectar; se mantiene por debajo de 200 caracteres, el límite de las cuentas gratuitas. El mensaje largo es para personas que ya están en tu red, por mensaje de LinkedIn o correo. Los borradores están en inglés porque van a participantes en EE. UU. Edita cualquiera y guárdalo para que tu compañero vea la misma versión.",
    "Everyone's list":"Lista de todos","Any status":"Cualquier estado","Not contacted yet":"Aún sin contactar","Edited":"Editado",
    "LinkedIn invite note":"Nota de invitación de LinkedIn","Copy note":"Copiar nota","Message for your network":"Mensaje para tu red","Copy message":"Copiar mensaje",
    "Save edits":"Guardar cambios","Reset to draft":"Volver al borrador","Mark as contacted":"Marcar como contactado",
    "Role slot: find the person":"Hueco de rol: busca a la persona",
    "No profiles match. Add people on the People tab.":"Ningún perfil coincide. Añade personas en la pestaña Personas.",

    /* script */
    "Interview script":"Guion de entrevista","Twenty minutes, seven questions":"Veinte minutos, siete preguntas",
    "Three minutes of hello, thirteen on the core seven, four on the two closes. Every interview asks the same core so the H1 to H8 tags line up. Pull one or two extras from the bank if there is time. Click any question to edit it.":"Tres minutos de saludo, trece para las siete preguntas clave y cuatro para los dos cierres. Todas las entrevistas hacen las mismas preguntas clave para que las etiquetas H1 a H8 sean comparables. Si hay tiempo, añade una o dos del banco. Haz clic en cualquier pregunta para editarla. Las preguntas están en inglés porque las entrevistas son en inglés.",
    "Add question":"Añadir pregunta","Run an interview":"Hacer una entrevista",
    "0:00 to 3:00":"0:00 a 3:00","3:00 to 16:00":"3:00 a 16:00","16:00 to 20:00":"16:00 a 20:00",
    "Hello and consent":"Saludo y consentimiento",
    "Who we are, that this is MIT research, answers stay anonymous, may we record. Three minutes is plenty; senior people prefer it.":"Quiénes somos, que es una investigación del MIT, que las respuestas son anónimas y si podemos grabar. Tres minutos bastan; los directivos lo prefieren.",
    "Core seven":"Las siete clave",
    "Q1 to Q6 for executives; Q7 replaces Q6 for platform and engineering leads. Do not propose solutions. Chase dates, dollars, system names.":"P1 a P6 para directivos; P7 sustituye a P6 con responsables de plataforma e ingeniería. No propongas soluciones. Busca fechas, cifras y nombres de sistemas.",
    "Two closes":"Dos cierres",
    "Who else should we talk to. May we send the findings and follow up. A referral or a follow-up yes is the real signal; politeness is not.":"Con quién más deberíamos hablar. Si podemos enviarle los resultados y hacer seguimiento. Una recomendación o un sí al seguimiento es la señal real; la cortesía no.",
    "Show for role":"Mostrar para el rol","Everyone":"Todos","Core, asked every time":"Clave, se preguntan siempre","If there is time":"Si hay tiempo","Question bank":"Banco de preguntas",
    "Rules.":"Reglas.",
    "No leading questions and no yes or no framing. Ask about the last time, never whether it generally happens. Never ask would you buy this. Notes into the Interviews tab within 24 hours; a conversation that is not written up did not happen.":"Nada de preguntas que sugieran la respuesta ni de sí o no. Pregunta por la última vez, nunca si suele pasar. Nunca preguntes si lo comprarían. Notas en la pestaña Entrevistas en menos de 24 horas; una conversación que no se escribe no ha ocurrido.",
    "Move up":"Subir","Move down":"Bajar",

    /* interviews */
    "Evidence":"Evidencia",
    "One record per conversation. Paste or upload the transcript, pull the quotes, tag H1 to H8, capture the forced ranking. The Synthesis tab counts from here.":"Un registro por conversación. Pega o sube la transcripción, extrae las citas, etiqueta H1 a H8 y registra la clasificación forzada. La pestaña Síntesis cuenta a partir de aquí.",
    "Date":"Fecha","Person":"Persona","By":"Por","Incident":"Incidente","Funding":"Financiación","Top pain":"Mayor problema","Follow-up":"Seguimiento","Tags":"Etiquetas",
    "No interviews yet. When the first call happens, log it here within 24 hours.":"Aún no hay entrevistas. Cuando tengas la primera llamada, regístrala aquí en menos de 24 horas.",

    /* synthesis */
    "Live counts":"Recuentos en vivo",
    "Described a specific incident, unprompted":"Describió un incidente concreto sin que se lo pidieran",
    "Threshold: 50%. Milestone 15 of 25":"Umbral: 50 %. Hito: 15 de 25",
    "Named how it is funded":"Dijo cómo se financia","Target: 10 name the owner, 5 the funding":"Objetivo: 10 nombran al responsable, 5 la financiación",
    "Follow-up: yes":"Seguimiento: sí","Current tool is sufficient":"La herramienta actual es suficiente",
    "Hypotheses, for and against":"Hipótesis, a favor y en contra",
    "Problem":"Problema","Ownership":"Responsabilidad","Priority":"Prioridad","Investment and measurement":"Inversión y medición",
    "Data availability":"Disponibilidad de datos","Current tools":"Herramientas actuales","Regulation":"Regulación","Standardization":"Estandarización",
    "Forced ranking of five pains":"Clasificación forzada de cinco problemas",
    "Points: rank 1 = 5 points, rank 5 = 1. The priority question. A narrow gap between first and second means run more conversations, not pick anyway.":"Puntos: puesto 1 = 5 puntos, puesto 5 = 1. Es la pregunta de prioridad. Si la diferencia entre el primero y el segundo es pequeña, hay que hacer más conversaciones, no elegir igualmente.",
    "Knowing what AI exists":"Saber qué IA existe","Allowed to do it, and who authorized":"Si puede hacerlo y quién lo autorizó","Proving compliance":"Demostrar cumplimiento",
    "Cost and value":"Coste y valor","Scale, consolidate or stop":"Escalar, consolidar o parar",
    "Is the authority model derivable? (H8)":"¿Se puede derivar el modelo de autoridad? (H8)",
    "From platform and engineering conversations. Mostly derivable means the structure is systematic. Mostly hand configured means it lives in people and documents.":"De las conversaciones con plataforma e ingeniería. Si es mayormente derivable, la estructura es sistemática. Si es mayormente manual, vive en personas y documentos.",
    "Derivable":"Derivable","Partly derivable":"Parcialmente derivable","Hand configured":"Configurado a mano",
    "12+ conversations support one priority (H3)":"12+ conversaciones respaldan una prioridad (H3)","5+ name how it is funded (H2)":"5+ dicen cómo se financia (H2)",
    "2+ agree to a follow-up":"2+ aceptan un seguimiento","4+ platform leads interviewed (H8 answers)":"4+ responsables de plataforma entrevistados (respuestas H8)",
    "Strong findings need all four. If the problem is real but ownership or priority differs from our hypotheses, that is a finding too. Report plainly if there is no acute pain or current tools already cover it.":"Unos resultados sólidos necesitan los cuatro. Si el problema es real pero la responsabilidad o la prioridad difieren de nuestras hipótesis, eso también es un resultado. Dilo con claridad si no hay un problema agudo o si las herramientas actuales ya lo cubren.",
    "Quotes worth keeping":"Citas que merece la pena guardar","Verbatim quotes from interview records appear here.":"Aquí aparecen las citas literales de las entrevistas.",

    /* hypotheses (text and thresholds) */
    "In regulated firms: (a) leaders cannot quickly answer who authorized an AI agent to act and who is accountable, and rely on manual workarounds; (b) action-taking agents strain risk processes designed for static models; (c) executives outside the AI function make AI-related decisions without enough information.":"En empresas reguladas: (a) los directivos no pueden responder rápido quién autorizó a un agente de IA a actuar ni quién responde por ello, y dependen de soluciones manuales; (b) los agentes que ejecutan acciones tensionan procesos de riesgo pensados para modelos estáticos; (c) los directivos fuera del área de IA toman decisiones sobre IA sin información suficiente.",
    "The problem is felt most by AI governance and model risk leaders, while funding sits with the CIO or CRO. Whoever owns 'is AI creating value' may differ from whoever owns AI control.":"El problema lo sienten sobre todo los responsables de gobierno de IA y de riesgo de modelos, mientras que la financiación depende del CIO o del CRO. Quien responde de si la IA crea valor puede no ser quien responde del control de la IA.",
    "Two candidate priorities compared head to head: (A) authority and decision rights for AI agents; (B) decision information for specific executive roles. The finding is whichever ranks higher unprompted.":"Dos prioridades candidatas comparadas cara a cara: (A) autoridad y derechos de decisión de los agentes de IA; (B) información para decidir en roles directivos concretos. El resultado es la que quede más arriba sin sugerirla.",
    "Firms already invest meaningfully in AI oversight, and they count their AI estate in a consistent unit: systems, agents, use cases or business units. Measured by what they have done, never by hypothetical questions.":"Las empresas ya invierten de forma significativa en supervisar la IA y miden su parque de IA con una unidad coherente: sistemas, agentes, casos de uso o unidades de negocio. Se mide por lo que han hecho, nunca con preguntas hipotéticas.",
    "The information needed to answer 'who authorized this' (agent inventory, identities and permissions, policies, approvals, runtime logs) already lives in systems rather than documents.":"La información necesaria para responder quién autorizó esto (inventario de agentes, identidades y permisos, políticas, aprobaciones, registros de ejecución) ya está en sistemas y no en documentos.",
    "Firms using ServiceNow AI Control Tower, OneTrust, Entra Agent ID or Okta still see gaps in who can approve, override or own residual risk for agent actions.":"Las empresas que usan ServiceNow AI Control Tower, OneTrust, Entra Agent ID u Okta siguen viendo huecos en quién puede aprobar, anular o asumir el riesgo residual de las acciones de los agentes.",
    "Specific regulatory obligations or exams, not internal policy, drove AI governance action in the last 12 months. FS&I: model risk supervision, state AI rules, EU AI Act exposure. Healthcare: HIPAA, FDA for clinical AI.":"Obligaciones o inspecciones regulatorias concretas, no la política interna, impulsaron acciones de gobierno de IA en los últimos 12 meses. Servicios financieros y seguros: supervisión de riesgo de modelos, normas estatales de IA, exposición a la Ley de IA de la UE. Salud: HIPAA, FDA para IA clínica.",
    "(a) Most of an enterprise authority model can be inferred from existing systems rather than written by hand; and (b) decision rights and approval structures are documented similarly enough across firms in a sector to compare them.":"(a) La mayor parte del modelo de autoridad de una empresa se puede inferir de sistemas existentes en vez de escribirse a mano; y (b) los derechos de decisión y las estructuras de aprobación están documentados de forma lo bastante parecida entre empresas de un sector como para compararlos.",
    "Fewer than 50% describe a specific incident or affected decision unprompted. Milestone: 15 of 25.":"Menos del 50 % describe sin sugerencia un incidente concreto o una decisión afectada. Hito: 15 de 25.",
    "At least 10 of 25 name who owns it; at least 5 of 25 name how it is funded.":"Al menos 10 de 25 nombran al responsable; al menos 5 de 25 dicen cómo se financia.",
    "Neither appears unprompted in the top two problems.":"Ninguna aparece sin sugerencia entre los dos principales problemas.",
    "No current investment, or no consistent counting unit across firms.":"No hay inversión actual o no hay una unidad de medida coherente entre empresas.",
    "Data lives in documents or people's heads.":"Los datos están en documentos o en la cabeza de las personas.",
    "Users are satisfied with those tools on this point.":"Los usuarios están satisfechos con esas herramientas en este punto.",
    "No concrete regulatory event cited.":"No se cita ningún hecho regulatorio concreto.",
    "Each firm's structure is bespoke and not comparable.":"La estructura de cada empresa es única y no comparable.",

    /* outreach */
    "Channels and templates":"Canales y plantillas",
    "Warm channels first, cold second. Every message says this is MIT research: anonymous, nothing to sell, findings shared with participants. Under 125 words, one ask.":"Primero canales cercanos, después en frío. Cada mensaje dice que es una investigación del MIT: anónima, sin nada que vender y con resultados compartidos con los participantes. Menos de 125 palabras y una sola petición. Las plantillas están en inglés porque van a participantes en EE. UU.",
    "Channels, in order of yield":"Canales, por rendimiento","Channel":"Canal","Type":"Tipo","How to use it":"Cómo usarlo","Warm":"Cercano","Cold":"En frío",
    "LinkedIn search strings":"Búsquedas de LinkedIn",
    "Filters: Industry = Banking, Insurance, Financial Services. Company headcount 501+. Geography = United States.":"Filtros: Sector = Banca, Seguros, Servicios financieros. Plantilla de 501+. Geografía = Estados Unidos.",
    "Copy":"Copiar","Edit":"Editar","Reset to original":"Volver al original","Back to the original":"Vuelto al original","Templates":"Plantillas","What counts as strong evidence.":"Qué cuenta como evidencia sólida.",
    "A specific, dated incident. An unprompted introduction. A policy or inventory extract shared after the call. A named owner and funding source. General agreement, including \"that sounds really important\", is weak evidence.":"Un incidente concreto y con fecha. Una presentación sin que la pidamos. Un extracto de política o inventario compartido después de la llamada. Un responsable y una fuente de financiación con nombre. El acuerdo genérico, incluido \"eso suena muy importante\", es evidencia débil.",

    /* settings */
    "Workspace":"Espacio de trabajo",
    "Targets, dates, and moving the data. Export gives you the whole workspace as JSON so it can live in a Git repository or be loaded into another store later.":"Objetivos, fechas y movimiento de datos. Exportar descarga todo el espacio en JSON para guardarlo en un repositorio Git o cargarlo en otro sitio más adelante.",
    "Targets and dates":"Objetivos y fechas","Target interviews":"Entrevistas objetivo","Target people on list":"Personas objetivo en la lista","Target messages sent":"Mensajes objetivo enviados",
    "Outreach start":"Inicio del contacto","Checkpoint":"Revisión","Findings due":"Entrega de resultados","Owners (comma separated)":"Responsables (separados por comas)","Save settings":"Guardar ajustes",
    "Storage":"Almacenamiento",
    "Connected to the shared store. Both of you see the same data live.":"Conectado al almacenamiento compartido. Los dos veis los mismos datos en vivo.",
    "Saving in this browser only. Nothing here reaches anyone else until you export it.":"Guardando solo en este navegador. Nadie más lo ve hasta que lo exportes.",
    "Export everything as JSON":"Exportar todo en JSON","Import JSON file":"Importar archivo JSON","Reload starter records":"Recargar datos iniciales","Delete all interviews":"Borrar todas las entrevistas",
    "Click again to delete all interviews":"Haz clic otra vez para borrar todas las entrevistas",
    "Export / paste to import":"Exportar / pegar para importar","Import from text":"Importar desde texto","Hypotheses under test":"Hipótesis en estudio",
    "Data lives in Supabase and only Ritesh and Monica can sign in to read it. Export keeps a full JSON backup. Real names and candid quotes live in this data; do not paste them anywhere public.":"Los datos están en Supabase y solo Ritesh y Monica pueden iniciar sesión para leerlos. Exportar guarda una copia completa en JSON. Aquí hay nombres reales y citas sinceras; no los pegues en ningún sitio público.",
    "Export writes here. Paste a previous export here and click Import from text.":"La exportación aparece aquí. Pega aquí una exportación anterior y pulsa Importar desde texto.",

    /* editor panels */
    "Edit panel":"Panel de edición","Close":"Cerrar","Delete":"Borrar","Cancel":"Cancelar","Save":"Guardar","Other":"Otro","Ring":"Anillo",
    "Edit company":"Editar empresa","New company":"Nueva empresa","Edit person":"Editar persona","New person":"Nueva persona","Edit question":"Editar pregunta","New question":"Nueva pregunta",
    "Edit task":"Editar tarea","New task":"Nueva tarea","Edit interview":"Editar entrevista","New interview":"Nueva entrevista","Log interview":"Registrar entrevista",
    "AI maturity (0-2)":"Madurez en IA (0-2)","0: no visible AI program":"0: sin programa de IA visible","1: AI program, no named AI leader":"1: programa de IA, sin responsable con nombre","2: named CAIO or disclosed agents":"2: CAIO con nombre o agentes públicos",
    "Regulatory exposure (0-2)":"Exposición regulatoria (0-2)","0: unregulated":"0: no regulada","1: some obligations":"1: algunas obligaciones","2: banking, insurance, EU":"2: banca, seguros, UE",
    "Size fit (0-2)":"Tamaño adecuado (0-2)","0: under 500 or slow G-SIB":"0: menos de 500 o G-SIB lento","1: 25,000+":"1: 25.000+","2: 2,500 to 25,000":"2: 2.500 a 25.000",
    "Reachability (0-2)":"Accesibilidad (0-2)","0: no path":"0: sin vía de acceso","1: cold only":"1: solo en frío","2: cohort, alumni or our network":"2: cohorte, exalumnos o nuestra red",
    "Name (leave blank for a role slot)":"Nombre (déjalo vacío para un hueco de rol)","Other / type below":"Otra / escribe abajo","Company name if not listed":"Nombre de la empresa si no está en la lista",
    "Role bucket":"Grupo de rol","Date sent":"Fecha de envío","Last touch":"Último contacto",
    "Cohort intro":"Presentación de la cohorte","Alumni":"Exalumnos","Ritesh network":"Red de Ritesh","Monica network":"Red de Monica","Mentor intro":"Presentación de mentor",
    "LinkedIn cold":"LinkedIn en frío","Email cold":"Correo en frío","Association":"Asociación","Template used":"Plantilla usada",
    "LinkedIn note":"Nota de LinkedIn","Cold email":"Correo en frío","Warm referral":"Recomendación cercana","Forum post":"Publicación en foro",
    "Source URL (where the name and title came from)":"URL de origen (de dónde salen el nombre y el cargo)","Title verified in Sales Navigator or company site":"Cargo verificado en Sales Navigator o en la web de la empresa",
    "Order":"Orden","Section":"Sección","Question":"Pregunta","Interviewer guidance":"Indicaciones para quien entrevista","Core question, asked in every interview":"Pregunta clave, en todas las entrevistas",
    "Ask these roles":"Preguntar a estos roles","Tests hypotheses":"Pone a prueba hipótesis","All":"Todos",
    "Week":"Semana","Dates":"Fechas","Task":"Tarea","Hypothesis or theme":"Hipótesis o tema","Not yet":"Aún no",
    "Interviewer":"Entrevistador/a","Person from the list":"Persona de la lista","Type below":"Escribe abajo","Person (if not listed, use initials)":"Persona (si no está en la lista, usa iniciales)",
    "Duration (min)":"Duración (min)","Transcript":"Transcripción","Upload a .txt or .vtt transcript, or paste below":"Sube una transcripción .txt o .vtt, o pégala abajo",
    "What we learned":"Qué aprendimos","Verbatim quotes, one per line":"Citas literales, una por línea",
    "Hypothesis tags: click once for evidence for, twice for against":"Etiquetas de hipótesis: un clic para evidencia a favor, dos para en contra",
    "For":"A favor","Against":"En contra","Forced ranking (1 = most painful)":"Clasificación forzada (1 = el más doloroso)",
    "Yes":"Sí","No":"No","Maybe":"Quizá",
    "Which budget or function funds it":"Qué presupuesto o área lo financia","Comparable investment and rough size":"Inversión comparable y tamaño aproximado",
    "Incumbent tool named (ServiceNow, IBM, OneTrust...)":"Herramienta actual mencionada (ServiceNow, IBM, OneTrust...)","Is it sufficient for them?":"¿Les resulta suficiente?",
    "Authority model derivable from systems? (technical roles)":"¿Modelo de autoridad derivable de los sistemas? (roles técnicos)",
    "Open to a follow-up":"Abierto a un seguimiento","Referrals given":"Recomendaciones dadas","Agreed next step":"Siguiente paso acordado",
    "Who are you talking to?":"¿Con quién hablas?","Pick from the list":"Elige de la lista","Start the clock":"Iniciar el reloj",
    "0 to 3 min: hello, why this, consent to record":"0 a 3 min: saludo, por qué este estudio, consentimiento para grabar",
    "Core":"Clave","If there is time, for this role":"Si hay tiempo, para este rol","Live notes (saved into the interview record)":"Notas en directo (se guardan en el registro de la entrevista)",
    "Twenty minutes. The clock turns amber at 16 and red at 20.":"Veinte minutos. El reloj se pone ámbar en el 16 y rojo en el 20.",
    "Finish and save record":"Terminar y guardar",

    /* toasts */
    "Saved":"Guardado","Copied":"Copiado","Deleted":"Borrado","Saved for both of you":"Guardado para los dos","Back to the default draft":"Vuelto al borrador inicial",
    "Marked as contacted":"Marcado como contactado","Starter records loaded":"Datos iniciales cargados",
    "Now tag the hypotheses and pull the quotes":"Ahora etiqueta las hipótesis y extrae las citas",
    "Exported. Copy the text or save it to a file.":"Exportado. Copia el texto o guárdalo en un archivo."
  };
  const HYP_NAMES = ["Problem","Ownership","Priority","Investment and measurement","Data availability","Current tools","Regulation","Standardization"];
  const RULES = [
    [/^(\d+) replied, not yet booked$/, m => m[1]+" respondieron, sin agendar"],
    [/^Checkpoint in (-?\d+) days?$/, m => "Revisión en "+m[1]+" días"],
    [/^(\d+) shown$/, m => m[1]+" mostradas"],
    [/^(\d+) profiles?$/, m => m[1]+(m[1]==="1"?" perfil":" perfiles")],
    [/^(\d+) characters$/, m => m[1]+" caracteres"],
    [/^(\d+) maybe$/, m => m[1]+" quizá"],
    [/^(\d+) named a current tool$/, m => m[1]+" nombraron una herramienta actual"],
    [/^(\d+) for$/, m => m[1]+" a favor"],
    [/^(\d+) against$/, m => m[1]+" en contra"],
    [/^(\d+) pts · (\d+) first$/, m => m[1]+" pts · "+m[2]+" primero"],
    [/^Role split, (\d+) conversations$/, m => "Reparto por rol, "+m[1]+" conversaciones"],
    [/^Evidence targets, (.+)$/, m => "Objetivos de evidencia, "+m[1]],
    [/^(.+)'s list$/, m => "Lista de "+m[1]],
    [/^(\d+) real conversations in four weeks\. Outreach starts (.+?)\. Replies land in 3 to 10 days, so the first calls fall in the week of (.+?)\. Checkpoint (.+?), findings due (.+?)\.$/,
      m => m[1]+" conversaciones reales en cuatro semanas. El contacto empieza el "+m[2]+". Las respuestas llegan en 3 a 10 días, así que las primeras llamadas caen en la semana del "+m[3]+". Revisión el "+m[4]+", resultados el "+m[5]+"."],
    [/^(\d+) companies, scored 0 to 8\. Click a row to edit the score or notes\. Work the top of the list first\.$/,
      m => m[1]+" empresas, puntuadas de 0 a 8. Haz clic en una fila para editar la puntuación o las notas. Empieza por la parte alta de la lista."],
    [/^(\d+) people\. Named rows came from public sources and need their title verified before outreach\. Blank rows are role slots to fill from LinkedIn search\.$/,
      m => m[1]+" personas. Las filas con nombre vienen de fuentes públicas y hay que verificar el cargo antes de contactar. Las filas vacías son huecos de rol que hay que cubrir buscando en LinkedIn."],
    [/^Computed from (\d+) completed interviews?\. Nothing here is a finding until the count is in double digits\. Real numbers replace the earlier synthetic study here\.$/,
      m => "Calculado a partir de "+m[1]+" entrevistas completadas. Nada de esto es un resultado hasta tener dos cifras. Los datos reales sustituyen aquí al estudio sintético anterior."],
    [/^Kill: (.+)$/, m => "Umbral: "+(ES[m[1]]||m[1])],
    [/^(.+)\.$/, m => HYP_NAMES.includes(m[1]) ? ES[m[1]]+"." : null],
    [/^([A-Za-z ]+): (.+)$/, m => HYP_NAMES.includes(m[1]) ? ES[m[1]]+": "+(ES[m[2]]||m[2]) : null],
    [/^Q(\d+)$/, m => "P"+m[1]]
  ];
  function tr(t){
    if(ES[t] != null) return ES[t];
    for(const [re, fn] of RULES){ const m = t.match(re); if(m){ const r = fn(m); if(r != null) return r; } }
    return null;
  }

  let lang = "en";
  try{ lang = localStorage.getItem("lai.lang") || "en"; }catch(e){}
  window.LAI_LANG = lang;
  const ATTRS = ["placeholder","title","aria-label"];

  function translate(root){
    if(lang !== "es" || !root) return;
    const w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const nodes = []; let n; while((n = w.nextNode())) nodes.push(n);
    nodes.forEach(node => {
      const el = node.parentElement; if(!el || el.closest("textarea,script,style,.no-i18n")) return;
      const raw = node.nodeValue, t = raw.trim(); if(!t) return;
      const src = node.__en != null ? node.__en : null;
      if(src != null && raw === node.__es) return;
      const out = tr(t); if(out == null) return;
      if(el.tagName === "OPTION" && !el.hasAttribute("value")) el.setAttribute("value", t);
      node.__en = raw; node.__es = raw.replace(t, out); node.nodeValue = node.__es;
    });
    const els = root.querySelectorAll ? root.querySelectorAll("[placeholder],[title],[aria-label]") : [];
    els.forEach(el => ATTRS.forEach(a => {
      const v = el.getAttribute(a); if(!v) return;
      el.__enA = el.__enA || {}; if(el.__enA[a] != null && el.__esA && el.__esA[a] === v) return;
      const out = tr(v.trim()); if(out == null) return;
      el.__enA[a] = v; el.__esA = el.__esA || {}; el.__esA[a] = out; el.setAttribute(a, out);
    }));
  }
  function restore(root){
    const w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT); let n;
    while((n = w.nextNode())) if(n.__en != null && n.nodeValue === n.__es){ n.nodeValue = n.__en; n.__en = null; }
    root.querySelectorAll("*").forEach(el => { if(el.__enA) Object.entries(el.__enA).forEach(([a,v]) => { if(v != null && el.getAttribute(a) === el.__esA[a]) el.setAttribute(a, v); }); el.__enA = null; el.__esA = null; });
  }

  let busy = false;
  const obs = new MutationObserver(muts => {
    if(busy || lang !== "es") return;
    busy = true;
    try{ muts.forEach(m => { if(m.type === "characterData") translate(m.target.parentElement); else m.addedNodes.forEach(x => translate(x.nodeType === 1 ? x : x.parentElement)); }); }
    finally{ busy = false; }
  });

  function toggleHtml(){
    return '<div class="langtog" role="group" aria-label="Language / Idioma">'
      + '<button type="button" data-lang="en" class="'+(lang==="en"?"on":"")+'" aria-pressed="'+(lang==="en")+'">EN</button>'
      + '<button type="button" data-lang="es" class="'+(lang==="es"?"on":"")+'" aria-pressed="'+(lang==="es")+'">ES</button></div>';
  }
  function drawToggles(){
    document.querySelectorAll("[data-langslot]").forEach(s => { s.innerHTML = toggleHtml(); });
    document.querySelectorAll(".langtog button").forEach(b => b.onclick = () => setLang(b.dataset.lang));
  }
  function setLang(l){
    if(l === lang) return;
    lang = l; window.LAI_LANG = l; document.documentElement.lang = l;
    try{ localStorage.setItem("lai.lang", l); }catch(e){}
    busy = true;
    if(l === "en") restore(document.body);
    busy = false;
    if(typeof render === "function") render();
    translate(document.body);
    drawToggles();
  }

  const css = document.createElement("style");
  css.textContent = `
  .langbar{display:flex;justify-content:flex-end;padding:12px 0 0;max-width:var(--wrap-max,1180px);margin:0 auto}
  .langtog{display:inline-flex;border:1px solid var(--line-2,#C2CDC9);border-radius:999px;overflow:hidden;background:var(--card,#fff)}
  .langtog button,#laiGate .langtog button{all:unset;box-sizing:border-box;width:auto;margin:0;border-radius:0;cursor:pointer;padding:5px 12px;font:700 12px/1 Arial,Helvetica,sans-serif;letter-spacing:.06em;color:var(--text-2,#3E5451)}
  .langtog button.on,#laiGate .langtog button.on{background:#052E2B;color:#fff}
  .langtog button:focus-visible{outline:2px solid #2DD4BF;outline-offset:-2px}
  #laiGate .langslot{position:absolute;top:14px;right:14px}
  #laiGate .laibox{position:relative}
  @media (max-width:760px){ .langbar{padding-top:10px} }`;
  document.head.appendChild(css);

  function init(){
    document.documentElement.lang = lang;
    const bar = document.getElementById("langbar"); if(bar) bar.setAttribute("data-langslot", "");
    const addGateSlot = () => { const box = document.querySelector("#laiGate .laibox"); if(box && !box.querySelector(".langslot")){ const s = document.createElement("div"); s.className = "langslot"; s.setAttribute("data-langslot",""); box.appendChild(s); drawToggles(); } };
    addGateSlot();
    new MutationObserver(addGateSlot).observe(document.body, { childList: true });
    drawToggles();
    translate(document.body);
    obs.observe(document.body, { childList: true, subtree: true, characterData: true });
  }
  document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", init) : init();
})();
