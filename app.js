const COURSE = {
  title: 'Guía Interactiva del Plan Integral de Emergencia del Municipio de Centro 2026',
  shortTitle: 'Centro 2026',
  passScore: 80,
  modules: [
    {
      id: 1,
      title: 'Territorio, población y construcción del riesgo',
      short: 'Territorio y riesgo',
      chapters: 'Capítulos 1 al 4',
      duration: '30 min',
      objective: 'Interpretar por qué Centro requiere una respuesta diferenciada por distrito, colonia, localidad, sistema hidráulico y condición de vulnerabilidad.',
      intro: `El municipio combina una planicie baja, ríos, lagunas, drenes, antiguos cauces, alta urbanización y población rural dispersa. El riesgo no se explica por una sola amenaza: surge cuando la lluvia o la creciente coinciden con población expuesta, infraestructura crítica, vulnerabilidad social y capacidades insuficientes.`,
      body: `
        <div class="content-grid">
          <article class="content-card">
            <h2>Lectura integral del territorio</h2>
            <p>Centro concentra 683,607 habitantes registrados en 2020 y casi la mitad reside en Villahermosa. La planeación debe agregar la población flotante que diariamente acude a hospitales, mercados, escuelas, terminales, plazas y corredores de transporte.</p>
            <div class="key-list">
              <div class="key-item"><span class="key-icon">1</span><div><strong>Planicie baja y escasa pendiente.</strong><br>El agua puede permanecer horas o días si la salida por gravedad o bombeo es limitada.</div></div>
              <div class="key-item"><span class="key-icon">2</span><div><strong>Riesgo urbano y rural distinto.</strong><br>Una colonia con anegamiento pluvial requiere medidas diferentes a una comunidad ribereña expuesta a creciente.</div></div>
              <div class="key-item"><span class="key-icon">3</span><div><strong>Población vulnerable.</strong><br>Adultos mayores, niñas y niños, personas con discapacidad, familias sin vehículo y población sin acceso estable a información requieren apoyos específicos.</div></div>
              <div class="key-item"><span class="key-icon">4</span><div><strong>Capacidad operativa.</strong><br>Bombas, refugios, rutas, personal, comunicación y apoyo interinstitucional reducen el riesgo cuando están disponibles antes del impacto.</div></div>
            </div>
          </article>
          <aside class="content-card">
            <h3>Cuatro variables simultáneas</h3>
            <p>La evaluación municipal debe integrar:</p>
            <div class="pill-row">
              <span class="info-pill">Lluvia local</span><span class="info-pill">Lluvia en cuencas altas</span><span class="info-pill">Niveles y tendencias</span><span class="info-pill">Capacidad de desalojo urbano</span>
            </div>
            <div class="callout warning" style="margin-top:16px"><strong>Decisión clave.</strong> Una lluvia local puede provocar afectaciones en una a tres horas, aun sin desbordamiento fluvial.</div>
          </aside>
        </div>
        <section class="section">
          <div class="section-header"><div><h2>Prioridades territoriales</h2><p>La sectorización debe cruzar población, tipo de afectación y capacidad de respuesta.</p></div></div>
          <div class="table-wrap"><table class="data-table"><thead><tr><th>Condición</th><th>Implicación</th><th>Decisión</th></tr></thead><tbody>
            <tr><td>Zona baja dependiente de cárcamo</td><td>La falla de energía o bombeo puede acelerar el anegamiento.</td><td>Verificar respaldo eléctrico, combustible, rejillas y descarga.</td></tr>
            <tr><td>Comunidad aislable</td><td>La ruta puede cerrarse antes de que el tirante sea crítico en viviendas.</td><td>Evacuar población vulnerable de forma anticipada.</td></tr>
            <tr><td>Alta población flotante</td><td>El censo residencial subestima personas que requieren orientación.</td><td>Alertar en terminales, mercados, hospitales y centros comerciales.</td></tr>
            <tr><td>Asentamiento ribereño</td><td>Acceso limitado, erosión, socavación y riesgo sanitario.</td><td>Padrón, ruta, transporte, refugio asociado y criterio de evacuación.</td></tr>
          </tbody></table></div>
        </section>`,
      images: [
        ['image3.webp','Vista de la planicie aluvial y zonas inundables del municipio de Centro.'],
        ['image4.webp','Cómo se construye el riesgo: amenaza, exposición, vulnerabilidad, capacidades y gobernanza.']
      ],
      exercise: {
        type:'multiselect',
        title:'Ejercicio: construir el riesgo de un sector',
        prompt:'En una colonia baja hay lluvia intensa, viviendas junto a un antiguo cauce, adultos mayores sin transporte y un cárcamo con planta de emergencia disponible. Selecciona los elementos que deben incorporarse al análisis de riesgo.',
        options:[
          ['a','Lluvia intensa como peligro'],['b','Viviendas y población como exposición'],['c','Adultos mayores sin transporte como vulnerabilidad'],['d','Planta de emergencia del cárcamo como capacidad'],['e','El nombre de la colonia como única variable suficiente']
        ],
        correct:['a','b','c','d'],
        explanation:'El riesgo se analiza por la interacción entre peligro, exposición, vulnerabilidad y capacidades. El nombre del sitio ayuda a ubicarlo, pero no explica por sí solo el nivel de riesgo.'
      }
    },
    {
      id: 2,
      title: 'Fenómenos, ENSO y lectura operativa de la lluvia',
      short: 'Fenómenos y lluvia',
      chapters: 'Capítulos 5 al 7',
      duration: '35 min',
      objective: 'Convertir información meteorológica y acumulados de lluvia en decisiones preventivas, sin depender de una sola cifra o de la fase ENSO.',
      intro: `Las emergencias en Centro suelen ser eventos compuestos. Lluvia local, humedad tropical, frentes fríos, ríos altos, tormenta eléctrica y fallas de energía pueden coincidir y reducir el tiempo disponible para actuar.`,
      body: `
        <div class="content-grid">
          <article class="content-card">
            <h2>La lluvia se interpreta, no sólo se acumula</h2>
            <p>Los rangos del Servicio Meteorológico Nacional son una referencia para acumulados de 24 horas, pero deben complementarse con intensidad horaria, saturación previa, ubicación, tendencia de ríos y capacidad de drenaje.</p>
            <div class="table-wrap"><table class="data-table"><thead><tr><th>Rango 24 h</th><th>Lectura</th><th>Respuesta municipal</th></tr></thead><tbody>
              <tr><td>25.1–50 mm</td><td>Lluvias fuertes</td><td>Vigilancia reforzada, cuadrillas y revisión de cárcamos.</td></tr>
              <tr><td>50.1–75 mm</td><td>Muy fuertes</td><td>Alistamiento preventivo, prealerta de refugios y bombas.</td></tr>
              <tr><td>75.1–150 mm</td><td>Intensas</td><td>Activación operativa, Consejo Municipal y valoración de evacuación.</td></tr>
              <tr><td>150.1–250 mm</td><td>Torrenciales</td><td>Alerta roja en zonas críticas, refugios y apoyo estatal.</td></tr>
              <tr><td>&gt;250 mm</td><td>Extraordinarias</td><td>Mando unificado, apoyo estatal/federal y operación prolongada.</td></tr>
            </tbody></table></div>
          </article>
          <aside class="content-card"><h3>Cómo leer el dato</h3><p>La cifra de lluvia adquiere sentido cuando se combina con la duración, la saturación previa, la tendencia de los ríos y la capacidad de drenaje.</p><div class="callout warning"><strong>Regla práctica.</strong> Cuanto menor sea el tiempo en que cae la lluvia, mayor será la presión sobre calles, drenes y cárcamos.</div></aside>
        </div>
        <section class="section">
          <div class="traffic-row">
            <div class="traffic-card green"><strong>ENSO neutral</strong>No significa ausencia de riesgo. Se mantiene vigilancia estacional normal reforzada.</div>
            <div class="traffic-card yellow"><strong>El Niño</strong>Puede reducir lluvia promedio, pero no elimina tormentas locales, frentes ni eventos extremos.</div>
            <div class="traffic-card orange"><strong>La Niña</strong>Justifica elevar la preparación estacional por mayor disponibilidad de humedad y posible actividad ciclónica.</div>
            <div class="traffic-card red"><strong>Evento compuesto</strong>Frente + humedad tropical + suelo saturado puede producir una emergencia regional.</div>
          </div>
        </section>`,
      images: [
        ['image5.webp','Detonantes de inundación que pueden combinarse en Centro.'],
        ['image6.webp','Fenómenos meteorológicos comunes y sus efectos operativos en Tabasco.']
      ],
      exercise: {
        type:'casegrid',
        title:'Ejercicio: elegir la lectura operativa',
        prompt:'Asigna la respuesta más adecuada a cada escenario.',
        choices:[['vig','Vigilancia reforzada'],['alist','Alistamiento preventivo'],['act','Activación operativa'],['rojo','Emergencia / alerta roja focalizada']],
        cases:[
          ['c1','40 mm previstos en 24 h, drenajes limpios y ríos estables.','vig'],
          ['c2','65 mm probables en pocas horas, suelo saturado y cárcamos con mantenimiento reciente.','alist'],
          ['c3','110 mm en dos horas, pasos deprimidos anegados y varias vialidades cerradas.','act'],
          ['c4','180 mm, ríos altos, refugios requeridos y comunidades con riesgo de aislamiento.','rojo']
        ],
        explanation:'La clasificación por 24 horas debe ajustarse por intensidad, saturación, afectaciones observadas y capacidad real de desalojo.'
      }
    },
    {
      id: 3,
      title: 'Sistema hidrológico, propagación y ventanas de decisión',
      short: 'Hidrología y ventanas',
      chapters: 'Capítulos 8 y 12',
      duration: '40 min',
      objective: 'Reconocer los sistemas que influyen en Villahermosa y usar tendencias, tiempos de propagación y ventanas operativas para anticipar decisiones.',
      intro: `Centro recibe influencias del Grijalva, Carrizal, La Sierra, Pichucalco–Teapa, Viejo Mezcalapa, Medellín–Pigua, lagunas urbanas, drenes y cárcamos. La información aguas arriba vale por la anticipación que ofrece, no sólo por el nivel absoluto reportado.`,
      body: `
        <div class="content-grid">
          <article class="content-card">
            <h2>Principios de propagación</h2>
            <ul>
              <li>La tendencia sostenida y la velocidad de ascenso pueden ser más útiles que una lectura aislada.</li>
              <li>Las crecientes serranas ofrecen una ventana de horas; la lluvia local intensa puede reducir el margen a una o tres horas.</li>
              <li>Ríos altos pueden causar remanso, cerrar descargas y aumentar la dependencia de bombeo.</li>
              <li>La incertidumbre se gestiona con márgenes de seguridad, cortes frecuentes y verificación de campo.</li>
            </ul>
            <div class="callout warning"><strong>No esperar el pico.</strong> Cuando la tendencia, el pronóstico adicional y el riesgo de cierre de rutas convergen, debe preposicionarse transporte y evacuarse a población vulnerable.</div>
          </article>
          <aside class="content-card">
            <h3>Ventanas referenciales</h3>
            <div class="key-list">
              <div class="key-item"><span class="key-icon">0–3 h</span><div>Lluvia local intensa: drenaje, pasos deprimidos, vialidades y cárcamos.</div></div>
              <div class="key-item"><span class="key-icon">H+</span><div>Crecientes serranas: seguimiento aguas arriba, avisos por sector y preparación de evacuación.</div></div>
              <div class="key-item"><span class="key-icon">24+</span><div>Ríos altos y remanso: operaciones prolongadas, bombeo, refugios y continuidad de servicios.</div></div>
            </div>
          </aside>
        </div>
        <section class="section">
          <div class="section-header"><div><h2>Secuencia anticipada</h2><p>La ventana debe traducirse en productos verificables.</p></div></div>
          <div class="table-wrap"><table class="data-table"><thead><tr><th>Momento</th><th>Condición</th><th>Producto</th></tr></thead><tbody>
            <tr><td>24 a 18 horas antes del impacto probable</td><td>Pronóstico persistente, ríos en ascenso, suelo saturado.</td><td>Reporte preventivo y mapa preliminar de sectores.</td></tr>
            <tr><td>18 a 12 horas antes del impacto probable</td><td>Tendencia sostenida y posibilidad de remanso.</td><td>Acuerdo de alistamiento y responsables por comisión.</td></tr>
            <tr><td>12 a 6 horas antes del impacto probable</td><td>Mayor probabilidad de afectación o rutas vulnerables.</td><td>Recursos preposicionados y refugios verificados.</td></tr>
            <tr><td>Menos de 6 horas antes del impacto probable</td><td>Anegamientos iniciales, descarga limitada o aislamiento probable.</td><td>Operativo sectorial, evacuación vulnerable y reportes horarios.</td></tr>
          </tbody></table></div>
        </section>`,
      images: [
        ['image7.webp','Sistema hidrológico del municipio de Centro.'],
        ['image8.webp','Operación preventiva de lagunas urbanas y estructuras de desalojo.'],
        ['image15.webp','Mapa de referencia de sistemas que aportan hacia Centro.'],
        ['image16.webp','Propagación de crecientes hacia Villahermosa.'],
        ['image17.webp','Ventanas operativas de decisión ante inundaciones.'],
        ['image19.webp','Esquema hidráulico simplificado de una zona urbana baja.']
      ],
      exercise: {
        type:'sequence',
        title:'Ejercicio: ordenar una ventana de decisión',
        prompt:'Ordena las acciones desde la señal temprana hasta la afectación inminente.',
        items:[
          ['s1','Confirmar pronóstico, tendencia y reportes aguas arriba.'],
          ['s2','Definir sectores prioritarios y responsables por comisión.'],
          ['s3','Verificar cárcamos, rutas, refugios y transporte.'],
          ['s4','Preposicionar recursos y preparar evacuación preventiva.'],
          ['s5','Cerrar rutas peligrosas e iniciar traslado de población vulnerable.'],
          ['s6','Mantener Consejo en sesión, reportes horarios y solicitud de apoyo si aplica.']
        ],
        correct:['s1','s2','s3','s4','s5','s6'],
        explanation:'La secuencia evita pasar de la observación al rescate sin completar alistamiento, sectorización, transporte, refugios y comunicación.'
      }
    },
    {
      id: 4,
      title: 'Zonas protegidas, obras de protección y qué debe cuidarse',
      short: 'Zonas protegidas',
      chapters: 'Capítulos 9 y 10',
      duration: '45 min',
      objective: 'Reconocer cómo funcionan las zonas protegidas de Villahermosa y qué debe vigilarse para que bordos, muros, drenes, cauces de alivio y cárcamos realmente reduzcan el riesgo.',
      intro: `Una zona protegida no es un espacio libre de riesgo. En Centro, muchas colonias se ubican detrás de bordos, muros o malecones, y dependen de compuertas, charnelas, drenes, lagunas y cárcamos para evitar que el agua entre desde el río o se quede atrapada por lluvia local. La protección funciona sólo cuando todos esos elementos operan como un sistema continuo.`,
      body: `
        <div class="content-grid">
          <article class="content-card">
            <h2>¿Qué es una zona protegida?</h2>
            <p>Es un sector urbano o periurbano que reduce su exposición a la inundación gracias a bordos, muros, malecones, estructuras de control, drenaje inducido, lagunas o cauces de alivio. Sin embargo, la protección puede perder eficacia si hay puntos bajos, filtraciones, erosión, descargas sin control, azolve, basura, vegetación invasiva o fallas de bombeo.</p>
            <p>En las zonas intrabordo ocurre una condición muy importante: el río queda fuera, pero la lluvia puede quedar atrapada dentro. Por eso una colonia puede inundarse desde adentro aun cuando el bordo no haya sido rebasado.</p>
          </article>
          <aside class="content-card">
            <h3>Idea operativa clave</h3>
            <p>La defensa marginal y el drenaje interno deben leerse juntos. Si el nivel del río obliga a cerrar descargas por gravedad, entonces la zona protegida depende del bombeo para desalojar la lluvia local.</p>
            <div class="callout warning"><strong>Lo que debe cuidarse siempre:</strong> continuidad del bordo o muro, taludes, puntos bajos, compuertas, charnelas, rejillas, canales de llegada, cárcamos, energía, combustible, operadores, bitácora y cauces de alivio sin obstrucción.</div>
          </aside>
        </div>
        <section class="section">
          <div class="section-header"><div><h2>Frentes protegidos y elementos que se deben cuidar</h2><p>Esta síntesis se basa en el capítulo de principales obras de protección y en la lógica operativa del plan.</p></div></div>
          <div class="table-wrap"><table class="data-table"><thead><tr><th>Frente o sistema</th><th>Colonias o sectores asociados</th><th>Qué protege</th><th>Qué debe cuidarse</th></tr></thead><tbody>
            <tr><td>Frente Grijalva–La Sierra, malecones, La Manga y Gaviotas</td><td>Centro, malecones, La Manga, Gaviotas Sur, Armenia, Monal, Coquitos, Cedral y Valle Verde.</td><td>Evita ingreso directo del río y reduce presión sobre el frente urbano oriental.</td><td>Revisar ventanas, filtraciones, puntos bajos, taludes, erosión, socavación y estabilidad del bordo.</td></tr>
            <tr><td>Río Carrizal, márgenes derecha e izquierda</td><td>Buenavista, Miguel Hidalgo, Central de Abasto, Tierra Colorada, Ciudad Industrial, Casa Blanca, Indeco, Acachapán y corredor de La Pigua.</td><td>Reduce ingresos laterales, erosión y retornos hacia zonas urbanas e industriales.</td><td>Vigilar bordos, muros, tablaestacas, sobreelevaciones, compuertas, asentamientos y puntos de conexión.</td></tr>
            <tr><td>Río Viejo Mezcalapa y flanco sur</td><td>Ixtacomitán, Curahueso, Puente Pedrero y corredor sur de Villahermosa.</td><td>Defiende el flanco sur y disminuye entradas por puntos bajos o retornos.</td><td>Verificar continuidad hidráulica, puntos de entrada, estabilidad de margen y obstrucciones.</td></tr>
            <tr><td>Drenes, compuertas, charnelas y cárcamos</td><td>Méndez, Guayabal, Gaviotas Norte, El Negro, Marcos Buendía, San Joaquín y otros puntos de control.</td><td>Desalojan lluvia local cuando los niveles de río impiden descargar por gravedad.</td><td>Probar bombas, tableros, plantas, combustible, rejillas, cierres, personal de guardia y bitácora de niveles.</td></tr>
            <tr><td>Cauces de alivio y zonas lagunares</td><td>El Tintillo I y II, El Censo, Sabanilla, Acachapán, Buenavista-Boca de Escoba, Tabasquillo y sistema Los Zapotes–Don Julián.</td><td>Reparten, conducen o almacenan temporalmente excedentes para reducir presión sobre Villahermosa.</td><td>Evitar azolve, rellenos, vegetación excesiva, obstrucción en puentes, erosión en entradas y pérdida de continuidad.</td></tr>
          </tbody></table></div>
        </section>
        <section class="section">
          <div class="section-header"><div><h2>Qué revisar antes, durante y después</h2><p>El plan señala que la protección efectiva depende del mantenimiento y la operación continua.</p></div></div>
          <div class="table-wrap"><table class="data-table"><thead><tr><th>Momento</th><th>Acción mínima</th><th>Riesgo que se reduce</th></tr></thead><tbody>
            <tr><td>Antes de la temporada</td><td>Probar bombas, tableros, plantas, combustible, compuertas, charnelas, rejillas, canales de llegada y puntos de descarga.</td><td>Falla de arranque, taponamientos y pérdida de capacidad durante una lluvia crítica.</td></tr>
            <tr><td>Antes de una creciente</td><td>Revisar cierres, personal de guardia, comunicación, puntos bajos, filtraciones y rutas internas de inspección.</td><td>Retorno del agua del río, ingreso oculto por descargas o pérdida de control en una zona protegida.</td></tr>
            <tr><td>Durante lluvia con río alto</td><td>Operar bombeo según nivel, registrar encendidos, fallas, tirantes y caudales; vigilar bordos, taludes y accesos.</td><td>Inundación interna por acumulación de lluvia dentro de la zona protegida.</td></tr>
            <tr><td>Después del evento</td><td>Desalojar remanentes, retirar basura y sedimentos, revisar daño mecánico-eléctrico y documentar hallazgos.</td><td>Pérdida de disponibilidad para el siguiente evento y deterioro progresivo del sistema.</td></tr>
          </tbody></table></div>
        </section>`,
      images: [
        ['image9.webp','Riesgo residual por rebase o colapso de bordo.'],
        ['image10.webp','Inspección y operación preventiva de obras de protección.'],
        ['image11.webp','Erosión marginal y pérdida de talud.'],
        ['image12.webp','Capacidad hidráulica en drenes y canales urbanos.'],
        ['image13.webp','Matriz visual de riesgo residual ribereño.'],
        ['image20.webp','Continuidad operativa de un cárcamo durante inundación urbana.']
      ],
      exercise: {
        type:'sequence',
        title:'Ejercicio: ordenar la revisión de una zona protegida',
        prompt:'Ordena el flujo lógico desde la preparación previa hasta el cierre del evento en una zona intrabordo.',
        items:[
          ['z1','Identificar el frente protegido, los puntos bajos y la zona de influencia.'],
          ['z2','Probar compuertas, charnelas, bombas, planta, combustible y comunicación.'],
          ['z3','Limpiar rejillas, canales de llegada y puntos de descarga.'],
          ['z4','Vigilar filtraciones, socavación, asentamientos y retornos cuando el río sube.'],
          ['z5','Operar bombeo y registrar en bitácora tirantes, fallas y decisiones.'],
          ['z6','Retirar sedimentos, revisar daños y dejar el sistema listo para el siguiente evento.']
        ],
        correct:['z1','z2','z3','z4','z5','z6'],
        explanation:'La protección no depende de una sola obra. Primero se identifica el sistema y se verifica su operación; después se mantiene vigilancia durante la creciente y al final se restituye su capacidad.'
      }
    },
    {
      id: 5,
      title: 'Escenarios de emergencia y semáforo de alerta',
      short: 'Escenarios y alertas',
      chapters: 'Capítulos 11, 13 y 14',
      duration: '40 min',
      objective: 'Aplicar un semáforo flexible, territorializado y preventivo, asociado a escenarios, productos de información y decisiones críticas.',
      intro: `El semáforo no debe declararse de forma uniforme cuando los sectores tienen condiciones distintas. Una colonia puede estar en naranja por falla de bombeo mientras otra permanece en amarillo; una comunidad puede llegar a rojo por pérdida de su ruta aunque el resto de la ciudad no tenga agua en viviendas.`,
      body: `
        <div class="traffic-row">
          <div class="traffic-card green"><strong>Verde</strong>Preparación, mantenimiento, directorios, catálogo de refugios y comunicación preventiva.</div>
          <div class="traffic-card yellow"><strong>Amarillo</strong>Vigilancia reforzada, recorridos, verificación de infraestructura y preparación familiar.</div>
          <div class="traffic-card orange"><strong>Naranja</strong>Recursos activados, refugios alistados, cierres preventivos y evacuación por sectores cuando proceda.</div>
          <div class="traffic-card red"><strong>Rojo</strong>Evacuación, refugios operando, rescate, seguridad, salud, ayuda humanitaria y EDAN inicial.</div>
        </div>
        <div class="content-grid section">
          <article class="content-card">
            <h2>Escalamiento y desescalamiento</h2>
            <ul>
              <li><strong>Amarillo a naranja:</strong> lluvia muy fuerte probable, remanso, cárcamos al límite, rutas vulnerables o población expuesta.</li>
              <li><strong>Naranja a rojo:</strong> agua en viviendas, evacuación necesaria, rutas cerradas, desbordamiento, falla crítica o servicios esenciales afectados.</li>
              <li><strong>Rojo a naranja:</strong> disminución de lluvia, descenso gradual, evacuación concluida y servicios críticos estabilizados.</li>
              <li><strong>Naranja a amarillo:</strong> sin nuevos reportes, cárcamos estables, rutas abiertas y descenso sostenido.</li>
            </ul>
          </article>
          <aside class="content-card"><h3>Qué debe producir el semáforo</h3><p>Cada color debe activar acciones, responsables, mensajes y productos de información. El color no sustituye la coordinación.</p><div class="callout warning"><strong>Aplicación territorial.</strong> Dos sectores pueden tener colores distintos al mismo tiempo si sus condiciones y consecuencias son diferentes.</div></aside>
        </div>
        <div class="callout warning"><strong>Evacuación preventiva:</strong> debe considerarse desde naranja si hay población vulnerable, rutas que pueden cerrarse, vivienda precaria, erosión, lluvia adicional o dependencia de bombeo. Rojo no debe ser el primer momento para decidirla.</div>`,
      images: [
        ['image14.webp','Cadena operativa de escalamiento de una emergencia por inundación.'],
        ['image18.webp','Árbol operativo de escenarios de emergencia.'],
        ['image21.webp','Variables que integran el nivel de alerta municipal.'],
        ['image22.webp','Escalamiento y desescalamiento del semáforo.']
      ],
      exercise: {
        type:'casegrid',
        title:'Ejercicio: semáforo territorializado',
        prompt:'Asigna el nivel más adecuado para cada sector, considerando que el municipio puede tener colores distintos al mismo tiempo.',
        choices:[['v','Verde'],['a','Amarillo'],['n','Naranja'],['r','Rojo']],
        cases:[
          ['x1','Sector norte: pronóstico fuerte, drenaje operativo, sin reportes de afectación.','a'],
          ['x2','Colonia baja: cárcamo fuera de servicio, lluvia adicional y población vulnerable con ruta aún abierta.','n'],
          ['x3','Comunidad ribereña: acceso cortado y evacuación en curso.','r'],
          ['x4','Zona estabilizada: descenso sostenido, rutas abiertas, sin nuevos reportes.','a']
        ],
        explanation:'La alerta se define por la condición de mayor consecuencia en cada sector. El descenso exige estabilidad verificable antes de regresar a verde.'
      }
    },
    {
      id: 6,
      title: 'Consejo Municipal, comisiones y continuidad de mando',
      short: 'Coordinación institucional',
      chapters: 'Capítulos 15 al 17',
      duration: '40 min',
      objective: 'Instalar el Consejo Municipal con productos verificables, responsables por comisión y una coordinación que indique claramente qué hacer antes, durante y después de la emergencia.',
      intro: `El municipio es primer respondiente territorial. El Consejo Municipal no sólo se instala: debe producir decisiones útiles, priorizar sectores, activar comisiones y sostener una secuencia de seguimiento hasta el cierre del evento. Para ello cada comisión necesita tareas claras antes, durante y después.`,
      body: `
        <div class="content-grid">
          <article class="content-card">
            <h2>Modalidades de instalación del Consejo</h2>
            <div class="table-wrap"><table class="data-table"><thead><tr><th>Modalidad</th><th>Condición</th><th>Producto obligatorio</th></tr></thead><tbody>
              <tr><td>Preventiva</td><td>Pronóstico fuerte, ríos en ascenso o temporada crítica.</td><td>Declaratoria, responsables, sectores prioritarios y calendario de vigilancia.</td></tr>
              <tr><td>Extraordinaria</td><td>Anegamientos persistentes, fallas de cárcamos o refugios requeridos.</td><td>Acuerdos de evacuación, recursos, refugios y boletín oficial.</td></tr>
              <tr><td>Sesión permanente</td><td>Afectaciones simultáneas, aislamiento o capacidad comprometida.</td><td>Cortes cada 3–6 h, mapa situacional y solicitudes formales de apoyo.</td></tr>
              <tr><td>Cierre gradual</td><td>Descenso, rutas transitables y control sanitario.</td><td>Acta de cierre, EDAN consolidado y lecciones aprendidas.</td></tr>
            </tbody></table></div>
          </article>
          <aside class="content-card">
            <h3>Regla práctica para coordinar</h3>
            <p>Cada comisión debe saber: qué producto entregar, a qué hora reportar, con quién se enlaza y qué decisión puede detonar con su información.</p>
            <div class="callout"><strong>Productos verificables:</strong> listado, mapa, boletín, inventario, ruta, refugio habilitado, reporte de daños, solicitud de apoyo o minuta. “Estar pendientes” no es un producto operativo.</div>
          </aside>
        </div>
        <section class="section">
          <div class="section-header"><div><h2>Comisiones operativas: ventanas desplegables</h2><p>Haz clic en cada comisión para ver qué debe hacer antes, durante y después.</p></div></div>
          <div class="commission-grid">
            <details class="commission-card"><summary>Gobernanza y coordinación</summary><div class="commission-body"><div><strong>Antes:</strong> instala directorio, convoca al Consejo, actualiza sectores y define horarios de corte.</div><div><strong>Durante:</strong> integra información, acuerda prioridades, autoriza escalamiento y coordina solicitudes de apoyo.</div><div><strong>Después:</strong> consolida actas, cierre gradual, lecciones aprendidas y seguimiento de acuerdos.</div></div></details>
            <details class="commission-card"><summary>Comunicación social</summary><div class="commission-body"><div><strong>Antes:</strong> prepara mensajes, vocería, plantillas y canales de difusión.</div><div><strong>Durante:</strong> emite información oficial, combate rumores y actualiza instrucciones por sector.</div><div><strong>Después:</strong> comunica retorno seguro, medidas sanitarias y balance institucional.</div></div></details>
            <details class="commission-card"><summary>Seguridad y control de accesos</summary><div class="commission-body"><div><strong>Antes:</strong> identifica puntos de control, rutas vulnerables y apoyo para cierres.</div><div><strong>Durante:</strong> establece perímetros, protege bienes, controla tránsito y apoya evacuaciones.</div><div><strong>Después:</strong> mantiene vigilancia en zonas dañadas y acompaña reaperturas graduales.</div></div></details>
            <details class="commission-card"><summary>Búsqueda, rescate y evacuación</summary><div class="commission-body"><div><strong>Antes:</strong> alista personal, lanchas, equipo, rutas y puntos de reunión.</div><div><strong>Durante:</strong> ejecuta rescates, traslados y evacuación de población prioritaria.</div><div><strong>Después:</strong> verifica que no queden personas aisladas y apoya retorno asistido si se requiere.</div></div></details>
            <details class="commission-card"><summary>Refugios temporales</summary><div class="commission-body"><div><strong>Antes:</strong> revisa inmuebles, llaves, responsables, capacidad y servicios.</div><div><strong>Durante:</strong> abre, registra, organiza áreas, controla ocupación y reporta necesidades.</div><div><strong>Después:</strong> coordina cierre, limpieza, inventario y retorno o reubicación de familias.</div></div></details>
            <details class="commission-card"><summary>Salud y atención médica</summary><div class="commission-body"><div><strong>Antes:</strong> define unidades de referencia, brigadas, insumos y población prioritaria.</div><div><strong>Durante:</strong> atiende lesiones, vigilancia epidemiológica, medicamentos y salud mental.</div><div><strong>Después:</strong> mantiene seguimiento sanitario, vacunación y control de riesgos postinundación.</div></div></details>
            <details class="commission-card"><summary>Ayuda humanitaria y logística</summary><div class="commission-body"><div><strong>Antes:</strong> identifica inventarios, centros de acopio, rutas y responsables de recepción.</div><div><strong>Durante:</strong> valida necesidades, arma lotes, despacha, entrega y registra evidencia.</div><div><strong>Después:</strong> concilia inventario, cierra folios y documenta pendientes de reposición.</div></div></details>
            <details class="commission-card"><summary>Comunicaciones y transportes</summary><div class="commission-body"><div><strong>Antes:</strong> verifica radios, telefonía, internet, transporte y rutas alternas.</div><div><strong>Durante:</strong> sostiene comunicaciones de mando y facilita traslados de personal, población e insumos.</div><div><strong>Después:</strong> restituye enlaces temporales y actualiza lecciones sobre fallas de conectividad.</div></div></details>
            <details class="commission-card"><summary>Evaluación de daños y análisis de necesidades (EDAN)</summary><div class="commission-body"><div><strong>Antes:</strong> prepara formatos, sectores y personal para levantamiento inicial.</div><div><strong>Durante:</strong> registra daños, población afectada, servicios interrumpidos y necesidades urgentes.</div><div><strong>Después:</strong> consolida información para retorno, apoyos, rehabilitación y cierre documental.</div></div></details>
            <details class="commission-card"><summary>Impacto ambiental, limpieza y saneamiento</summary><div class="commission-body"><div><strong>Antes:</strong> ubica sitios críticos para residuos, aguas negras, arrastre y vectores.</div><div><strong>Durante:</strong> coordina limpieza inicial, manejo de residuos, desinfección y control sanitario.</div><div><strong>Después:</strong> sostiene limpieza, saneamiento y vigilancia de riesgos residuales.</div></div></details>
          </div>
        </section>
        <section class="section"><div class="callout warning"><strong>Solicitud de apoyo.</strong> Debe expresar necesidad específica, ubicación, cantidad, prioridad, responsable de recepción y evidencia. Pedir “apoyo general” dificulta la asignación y la trazabilidad.</div></section>`,
      images: [
        ['image23.webp','Consejo Municipal de Protección Civil y Comisiones Operativas de Centro.'],
        ['image24.webp','Rutina de reuniones operativas entre comisiones.']
      ],
      exercise: {
        type:'sequence',
        title:'Ejercicio: ordenar la primera sesión',
        prompt:'Ordena los puntos de una sesión operativa para que las comisiones reciban un escenario y prioridades claras.',
        items:[
          ['a1','Declarar la instalación y fijar horarios de corte.'],
          ['a2','Presentar pronóstico, lluvia observada, niveles, infraestructura y reportes.'],
          ['a3','Priorizar colonias, comunidades, hospitales, mercados, rutas y refugios.'],
          ['a4','Activar comisiones con responsable, suplente y producto.'],
          ['a5','Resolver evacuación, refugios, transporte y población vulnerable.'],
          ['a6','Validar recursos, solicitudes de apoyo y mensaje oficial.'],
          ['a7','Fijar próxima sesión y criterios para escalar o desescalar.']
        ],
        correct:['a1','a2','a3','a4','a5','a6','a7'],
        explanation:'La activación de comisiones debe ocurrir después de presentar el escenario y definir prioridades territoriales; de lo contrario cada comisión opera con supuestos distintos.'
      }
    },
    {
      id: 7,
      title: 'Operación por sectores, evacuación y control de accesos',
      short: 'Operación sectorial',
      chapters: 'Capítulos 18 y 19',
      duration: '40 min',
      objective: 'Organizar la respuesta territorial con responsables, rutas, puntos de control, perímetros de seguridad, refugios asociados y protección diferenciada.',
      intro: `La sectorización convierte el mapa de afectaciones en una estructura de mando territorial. Cada sector debe tener responsable, canal de comunicación, ruta, punto de reunión, refugio asociado, recursos y corte de situación.`,
      body: `
        <div class="content-grid">
          <article class="content-card">
            <h2>Perímetros y acceso</h2>
            <div class="table-wrap"><table class="data-table"><thead><tr><th>Zona</th><th>Condición</th><th>Acceso</th></tr></thead><tbody>
              <tr><td>Roja</td><td>Corriente, energía expuesta, socavación, combustible, estructura inestable o rescate.</td><td>Sólo personal especializado y autorizado.</td></tr>
              <tr><td>Amarilla</td><td>Agua estancada, lodo, limpieza, EDAN o evacuación asistida.</td><td>Brigadas con EPP, vehículos autorizados y personas acompañadas.</td></tr>
              <tr><td>Verde</td><td>Área seca o con riesgo controlado para logística y transferencia.</td><td>Población, transporte, logística, prensa autorizada y servicios.</td></tr>
              <tr><td>Punto de control</td><td>Acceso a colonia, puente, camino o refugio.</td><td>Según responsable de sector, con registro de entrada y salida.</td></tr>
            </tbody></table></div>
          </article>
          <aside class="content-card">
            <h3>Evacuación anticipada</h3>
            <p>La decisión debe considerar la tendencia, la lluvia adicional, el cierre probable de rutas, la condición de vivienda y la capacidad de autoevacuación.</p>
            <div class="key-list">
              <div class="key-item"><span class="key-icon">A</span><div>Identificar adultos mayores, discapacidad, enfermos, embarazo, niñas y niños.</div></div>
              <div class="key-item"><span class="key-icon">B</span><div>Asignar transporte, punto de reunión, horario y refugio.</div></div>
              <div class="key-item"><span class="key-icon">C</span><div>Registrar salida, llegada, reunificación y necesidades especiales.</div></div>
            </div>
          </aside>
        </div>
        <section class="section"><div class="callout danger"><strong>Seguridad del personal.</strong> Ninguna tarea de limpieza, EDAN o rescate justifica ingresar sin EPP, comunicación, perímetro y autorización del responsable de sector.</div></section>`,
      images: [
        ['image25.webp','Esquema operativo de control de accesos durante inundación urbana.'],
        ['image31.webp','Flujo de bitácora operativa municipal.'],
        ['image32.webp','Ruta de refugio seguro por sectores.'],
        ['image34.webp','Semáforo de cierre operativo por sectores.']
      ],
      exercise: {
        type:'matching',
        title:'Ejercicio: asignar perímetros',
        prompt:'Relaciona cada situación con el perímetro correcto.',
        choices:[['red','Zona roja'],['yellow','Zona amarilla'],['green','Zona verde'],['control','Punto de control']],
        pairs:[
          ['p1','Cable energizado caído sobre agua y rescate en proceso.','red'],
          ['p2','Brigada de EDAN con EPP en calles con lodo y agua estancada.','yellow'],
          ['p3','Área seca para transferencia de alimentos y transporte.','green'],
          ['p4','Entrada a colonia evacuada donde se registra cada unidad.','control']
        ],
        explanation:'El perímetro se define por el peligro y la función. El control de acceso evita exposición, duplicidad y pérdida de trazabilidad.'
      }
    },
    {
      id: 8,
      title: 'Refugios temporales y atención diferenciada',
      short: 'Refugios y población vulnerable',
      chapters: 'Capítulo 20',
      duration: '35 min',
      objective: 'Abrir, operar y cerrar refugios seguros, accesibles y organizados, con registro, salud, protección, alimentación, saneamiento y atención a mascotas.',
      intro: `Un refugio no es sólo un inmueble. Es una operación que inicia con verificación de seguridad y termina con cierre sanitario, devolución del espacio, reunificación y seguimiento a familias que aún no pueden retornar.`,
      body: `
        <div class="content-grid">
          <article class="content-card">
            <h2>Condiciones antes de abrir</h2>
            <ul>
              <li>Ubicación fuera de zonas de anegamiento y con rutas seguras.</li>
              <li>Agua, energía, sanitarios, ventilación, accesibilidad y seguridad estructural.</li>
              <li>Responsable, personal por turnos, capacidad real y plan de expansión.</li>
              <li>Áreas separadas para registro, salud, dormitorios, alimentación, protección y almacenamiento.</li>
              <li>Enlace con transporte, seguridad, salud, DIF, comunicación y ayuda humanitaria.</li>
            </ul>
          </article>
          <aside class="content-card">
            <h3>Protección diferenciada</h3>
            <div class="pill-row"><span class="info-pill">Movilidad reducida</span><span class="info-pill">Medicamentos</span><span class="info-pill">Embarazo y lactancia</span><span class="info-pill">Niñas y niños</span><span class="info-pill">Salud mental</span><span class="info-pill">Mascotas</span><span class="info-pill">Reunificación familiar</span></div>
            <div class="callout warning" style="margin-top:16px">La población vulnerable debe registrarse con necesidades concretas, no sólo como una cifra general.</div>
          </aside>
        </div>
        <section class="section">
          <div class="table-wrap"><table class="data-table"><thead><tr><th>Fase</th><th>Acción clave</th></tr></thead><tbody>
            <tr><td>Prealerta</td><td>Verificar llaves, responsable, capacidad, rutas, baños, agua, energía e insumos.</td></tr>
            <tr><td>Apertura preventiva</td><td>Instalar registro, salud, seguridad, información, dormitorios y bodega.</td></tr>
            <tr><td>Operación</td><td>Control de entradas/salidas, ocupación, alimentación, agua segura, higiene, protección y reportes.</td></tr>
            <tr><td>Cierre</td><td>Confirmar retorno seguro, limpiar, desinfectar, conciliar inventario y documentar familias con retorno diferido.</td></tr>
          </tbody></table></div>
        </section>`,
      images: [
        ['image26.webp','Refugios temporales del municipio de Centro.'],
        ['image27.webp','Croquis funcional de refugio temporal con áreas diferenciadas.'],
        ['image28.webp','Ruta de atención de población vulnerable en refugios.']
      ],
      exercise: {
        type:'multiselect',
        title:'Ejercicio: habilitar un refugio',
        prompt:'Selecciona los componentes indispensables para abrir un refugio con enfoque diferenciado.',
        options:[
          ['a','Registro y control de entradas/salidas'],['b','Valoración de salud y medicamentos'],['c','Ruta accesible y zona prioritaria'],['d','Bodega e inventario de insumos'],['e','Área de mascotas separada del dormitorio'],['f','Publicar nombres completos de alojados en redes abiertas'],['g','Seguridad, información y reunificación familiar']
        ],
        correct:['a','b','c','d','e','g'],
        explanation:'La operación debe proteger datos personales. El control y la reunificación se realizan por canales institucionales, no mediante publicación abierta de nombres.'
      }
    },
    {
      id: 9,
      title: 'Comunicación, ayuda humanitaria, EDAN y continuidad de servicios',
      short: 'Información y recuperación',
      chapters: 'Capítulo 21',
      duration: '45 min',
      objective: 'Mantener información verificable, ayuda humanitaria trazable, EDAN oportuno y continuidad de servicios esenciales hasta el retorno seguro.',
      intro: `La respuesta pierde eficacia cuando los mensajes son ambiguos, los apoyos no tienen folio, las solicitudes carecen de ubicación o los reportes de daños llegan sin evidencia. Comunicación, logística, EDAN y continuidad deben operar como un solo ciclo de información.`,
      body: `
        <div class="content-grid">
          <article class="content-card">
            <h2>Mensaje operativo mínimo</h2>
            <p>Todo mensaje debe responder: qué ocurre, dónde, quién está en riesgo, qué debe hacer la población, desde cuándo, por qué canal confirmar y cuándo habrá nueva actualización.</p>
            <div class="callout"><strong>Vocería única y canales redundantes.</strong> Redes, radio, perifoneo, delegados, altavoces móviles, medios y contacto directo deben transmitir la misma instrucción.</div>
            <h3 style="margin-top:20px">EDAN temprano</h3>
            <p>El EDAN inicial comienza en rojo cuando existe acceso seguro y continúa durante el descenso a naranja. No debe esperarse al cierre total del evento.</p>
          </article>
          <aside class="content-card">
            <h3>Cadena de trazabilidad</h3>
            <ol>
              <li>Solicitud o hallazgo con folio.</li><li>Validación y prioridad territorial.</li><li>Asignación de lote y responsable.</li><li>Despacho por ruta segura.</li><li>Recepción y evidencia.</li><li>Cierre del folio y conciliación.</li>
            </ol>
            <div class="callout warning">La distribución no debe basarse sólo en orden de llegada. Debe considerar EDAN, población expuesta, aislamiento, refugios y servicios interrumpidos.</div>
          </aside>
        </div>
        <section class="section"><div class="section-header"><div><h2>Continuidad funcional</h2><p>Los servicios dependen entre sí.</p></div></div>
          <div class="table-wrap"><table class="data-table"><thead><tr><th>Servicio</th><th>Dependencia crítica</th><th>Implicación</th></tr></thead><tbody>
            <tr><td>Energía</td><td>Cárcamos, hospitales, telecomunicaciones, agua y refugios.</td><td>Priorizar respaldo y reconexión segura.</td></tr>
            <tr><td>Movilidad</td><td>Ambulancias, ayuda humanitaria, evacuación y combustible.</td><td>Reapertura gradual con inspección y rutas alternas.</td></tr>
            <tr><td>Telecomunicaciones</td><td>Mando, reportes, alertamiento y coordinación.</td><td>Redundancia de radio, telefonía, internet y puntos de reporte.</td></tr>
            <tr><td>Agua segura</td><td>Salud, refugios, limpieza y retorno.</td><td>Control de calidad, cisternas, tinacos y distribución documentada.</td></tr>
          </tbody></table></div>
        </section>`,
      images: [
        ['image29.webp','Cadena logística de ayuda humanitaria.'],
        ['image30.webp','Trazabilidad de apoyos humanitarios.'],
        ['image33.webp','Dependencia entre servicios esenciales durante una inundación urbana.']
      ],
      exercise: {
        type:'sequence',
        title:'Ejercicio: ordenar la cadena humanitaria',
        prompt:'Ordena el flujo desde la identificación de la necesidad hasta el cierre documental.',
        items:[
          ['l1','Recibir EDAN, solicitud o reporte con ubicación y folio.'],
          ['l2','Validar necesidad, población y prioridad territorial.'],
          ['l3','Asignar insumos, lote, responsable y ruta segura.'],
          ['l4','Despachar y registrar salida del centro de acopio.'],
          ['l5','Entregar, identificar receptor y reunir evidencia.'],
          ['l6','Conciliar inventario, cerrar folio y actualizar tablero.']
        ],
        correct:['l1','l2','l3','l4','l5','l6'],
        explanation:'La trazabilidad une necesidad, validación, inventario, despacho, recepción y cierre; así evita duplicidad, pérdida de insumos y decisiones sin respaldo.'
      }
    },
    {
      id: 10,
      title: 'Simulacro de gabinete, cierre operativo y mejora continua',
      short: 'Simulacro y mejora',
      chapters: 'Capítulo 22 y cierre operativo',
      duration: '45 min',
      objective: 'Comprender qué es un simulacro de gabinete, cómo se prepara y evalúa, y cómo sus hallazgos —junto con la experiencia de eventos reales— se convierten en cierre seguro, acciones correctivas y mejora continua.',
      intro: `El módulo sigue una secuencia lógica: primero se explica cómo probar el Plan mediante un simulacro de gabinete; después se revisan los criterios para cerrar una emergencia real; finalmente se muestra cómo convertir los resultados de ambos procesos en lecciones aprendidas y acciones correctivas verificables.`,
      body: `
        <section class="content-card">
          <h2>1. ¿Qué es un simulacro de gabinete?</h2>
          <p>Es un ejercicio de análisis y toma de decisiones que se desarrolla en una sala de trabajo, sin desplegar físicamente todos los recursos de campo. Participan el Consejo Municipal, las comisiones operativas y los enlaces institucionales, quienes reciben un escenario de emergencia y deben responder como si el evento estuviera ocurriendo.</p>
          <p>Durante el ejercicio se presentan reportes sucesivos —también llamados inyectas—, por ejemplo: lluvia intensa, aumento de niveles, falla de un cárcamo, cierre de una ruta, apertura de refugios, pérdida de comunicación o solicitudes simultáneas de ayuda. Cada comisión analiza la información, propone acciones, coordina recursos y entrega productos dentro de un tiempo definido.</p>
          <div class="callout"><strong>Importante.</strong> Un simulacro de gabinete no busca demostrar fuerza operativa ni mover vehículos, lanchas o maquinaria. Su propósito principal es probar decisiones, coordinación, comunicación, tiempos de respuesta, formatos, cadenas de mando y capacidad para trabajar con información incompleta.</div>
        </section>
        <section class="section">
          <div class="content-grid">
            <article class="content-card">
              <h2>2. ¿Qué debe medir?</h2>
              <ul>
                <li>Si las dependencias comprenden el escenario y comparten una misma información.</li>
                <li>Si cada comisión conoce sus funciones y entrega productos verificables.</li>
                <li>Si las decisiones se toman antes de perder rutas, servicios o capacidad de respuesta.</li>
                <li>Si los mensajes, reportes, EDAN y solicitudes de apoyo son claros y oportunos.</li>
                <li>Si existen duplicidades, vacíos de coordinación o retrasos entre una comisión y otra.</li>
              </ul>
            </article>
            <aside class="content-card">
              <h3>Qué no debe confundirse</h3>
              <p><strong>Simulacro de gabinete:</strong> se concentra en análisis, coordinación y decisiones.</p>
              <p><strong>Simulacro operativo o de campo:</strong> moviliza personal, vehículos, equipos, población o instalaciones para practicar procedimientos físicos.</p>
              <p>Ambos se complementan, pero cumplen objetivos distintos.</p>
            </aside>
          </div>
        </section>
        <section class="section">
          <div class="section-header"><div><h2>3. Orden correcto de un simulacro de gabinete</h2><p>La secuencia evita improvisación y permite comparar el desempeño de las comisiones.</p></div></div>
          <div class="table-wrap"><table class="data-table"><thead><tr><th>Etapa</th><th>Qué se realiza</th><th>Producto esperado</th></tr></thead><tbody>
            <tr><td>Diseño</td><td>Definir objetivo, escenario, participantes, duración, reglas, puntos críticos e inyectas.</td><td>Guion del ejercicio y matriz de evaluación.</td></tr>
            <tr><td>Inicio</td><td>Presentar la situación inicial, límites del ejercicio, canales de comunicación y hora de corte.</td><td>Escenario común y responsabilidades confirmadas.</td></tr>
            <tr><td>Desarrollo</td><td>Entregar inyectas progresivas y solicitar decisiones, reportes, mensajes, mapas o solicitudes.</td><td>Bitácora de decisiones y productos por comisión.</td></tr>
            <tr><td>Evaluación inmediata</td><td>Comparar decisiones, tiempos, coordinación, recursos, seguridad y comunicación.</td><td>Hallazgos, aciertos y brechas.</td></tr>
            <tr><td>Acciones correctivas</td><td>Asignar responsable, plazo, recurso, indicador y evidencia de cierre.</td><td>Plan de mejora y seguimiento.</td></tr>
          </tbody></table></div>
        </section>
        <section class="section content-card">
          <h2>4. Cierre operativo de una emergencia real</h2>
          <p>El descenso del agua no equivale al cierre de la emergencia. El cierre debe realizarse por sectores y sólo cuando existan condiciones seguras para el retorno, los servicios básicos tengan un nivel funcional mínimo y los riesgos residuales estén identificados y controlados.</p>
          <div class="key-list">
            <div class="key-item"><span class="key-icon">1</span><div><strong>Verificar el territorio.</strong><br>Confirmar descenso sostenido, ausencia de nuevos ingresos de agua y condiciones estables.</div></div>
            <div class="key-item"><span class="key-icon">2</span><div><strong>Inspeccionar accesos y viviendas.</strong><br>Revisar rutas, puentes, electricidad, gas, estructura, contaminación y socavación.</div></div>
            <div class="key-item"><span class="key-icon">3</span><div><strong>Confirmar servicios mínimos.</strong><br>Agua segura, energía, salud, movilidad, comunicaciones y saneamiento.</div></div>
            <div class="key-item"><span class="key-icon">4</span><div><strong>Documentar pendientes.</strong><br>Consolidar EDAN, refugios activos, familias con retorno diferido y riesgos transferidos a recuperación.</div></div>
          </div>
          <div class="callout danger" style="margin-top:16px"><strong>No declarar retorno sólo porque bajó el agua.</strong> Pueden persistir cables energizados, contaminación, daño estructural, socavación, fauna nociva o interrupción de servicios.</div>
        </section>
        <section class="section">
          <div class="content-grid">
            <article class="content-card">
              <h2>5. Evaluación postoperativa</h2>
              <p>Se realiza después de un simulacro o de una emergencia real. Debe partir de bitácoras, reportes, tiempos, mensajes, fotografías y productos, no únicamente de la memoria de quienes participaron.</p>
              <ul>
                <li>Qué decisiones protegieron la vida y cuáles llegaron tarde.</li>
                <li>Dónde hubo retrasos, duplicidad o falta de información.</li>
                <li>Qué recursos fallaron, faltaron o no pudieron movilizarse.</li>
                <li>Qué mensajes fueron claros y qué dudas se repitieron.</li>
                <li>Cómo se atendió a población vulnerable y servicios esenciales.</li>
              </ul>
            </article>
            <aside class="content-card">
              <h3>Ruta de una lección aprendida</h3>
              <ol><li>Hallazgo</li><li>Evidencia</li><li>Causa</li><li>Impacto operativo</li><li>Acción correctiva</li><li>Responsable y plazo</li><li>Verificación</li><li>Cierre</li></ol>
            </aside>
          </div>
        </section>
        <section class="section">
          <div class="section-header"><div><h2>6. Mejora continua</h2><p>El Plan debe actualizarse con evidencia y seguimiento, no sólo con observaciones generales.</p></div></div>
          <div class="table-wrap"><table class="data-table"><thead><tr><th>Instrumento</th><th>Uso</th></tr></thead><tbody>
            <tr><td>Informe de simulacro</td><td>Documentar guion, participantes, inyectas, decisiones, tiempos, hallazgos y ajustes.</td></tr>
            <tr><td>Evaluación postoperativa</td><td>Comparar objetivos, coordinación, recursos, seguridad, comunicación y resultados.</td></tr>
            <tr><td>Plan de acciones correctivas</td><td>Asignar responsable, plazo, recurso requerido, indicador y evidencia de cierre.</td></tr>
            <tr><td>Banco de escenarios</td><td>Diseñar ejercicios sobre remanso, cárcamos, zonas intrabordo, comunidades ribereñas, refugios y rutas afectables.</td></tr>
            <tr><td>Reporte anual de mejora</td><td>Actualizar anexos, directorios, refugios, rutas, inventarios, mapas y prioridades de inversión.</td></tr>
          </tbody></table></div>
        </section>`,
      images: [
        ['image35.webp','Simulacro de gabinete para una creciente mayor.'],
        ['image36.webp','Ciclo de mejora continua del Plan Integral de Emergencia.'],
        ['image37.webp','Ruta de una lección aprendida.']
      ],
      exercise: {
        type:'sequence',
        title:'Ejercicio: ordenar el ciclo de simulacro y mejora',
        prompt:'Ordena el proceso desde la preparación del simulacro de gabinete hasta el cierre de las acciones correctivas.',
        items:[
          ['m1','Definir objetivo, escenario, participantes e inyectas.'],
          ['m2','Presentar la situación inicial y confirmar reglas y responsabilidades.'],
          ['m3','Entregar inyectas y registrar decisiones y productos de las comisiones.'],
          ['m4','Evaluar tiempos, coordinación, comunicación, recursos y seguridad.'],
          ['m5','Convertir hallazgos en acciones correctivas con responsables y plazos.'],
          ['m6','Verificar evidencia de cumplimiento y actualizar el Plan.']
        ],
        correct:['m1','m2','m3','m4','m5','m6'],
        explanation:'El simulacro comienza con un diseño claro, continúa con decisiones frente a inyectas y termina cuando los hallazgos se convierten en mejoras verificadas e incorporadas al Plan.'
      }
    }

  ]
};




const MODULE_PEDAGOGY = {
  1:{
    outcomes:['Distinguir peligro, exposición, vulnerabilidad y capacidades.','Reconocer por qué una colonia urbana, una comunidad ribereña y un corredor de alta movilidad requieren respuestas diferentes.','Priorizar población vulnerable, rutas, refugios y recursos según el tipo de sector.'],
    scenario:'Después de una lluvia intensa se reciben tres reportes simultáneos: una calle anegada en una colonia baja, una comunidad ribereña con el río en ascenso y una terminal con cientos de personas sin transporte. La primera tarea es comprender que no se trata del mismo problema, aunque todos estén relacionados con el agua.',
    closing:['Ubicar el sector y la población expuesta.','Identificar el mecanismo de afectación: lluvia local, creciente, aislamiento o falla de infraestructura.','Asignar una prioridad y una acción inicial verificable.'],
    common:'Tratar todos los reportes de inundación como si tuvieran la misma causa y requirieran el mismo recurso.'
  },
  2:{
    outcomes:['Interpretar acumulado, duración e intensidad de la lluvia.','Reconocer cuándo el contexto —suelo saturado, ríos altos o fallas eléctricas— aumenta el riesgo.','Traducir un pronóstico meteorológico en vigilancia, alistamiento, activación o evacuación.'],
    scenario:'Se pronostican 80 mm de lluvia. Si caen en 24 horas con drenaje operativo, la respuesta puede concentrarse en vigilancia; si caen en dos horas sobre suelo saturado y con ríos altos, la misma cifra puede requerir activación operativa.',
    closing:['Leer el acumulado y la duración.','Agregar las condiciones previas del territorio.','Definir la acción municipal, no sólo repetir el dato meteorológico.'],
    common:'Tomar el acumulado de 24 horas como una cifra aislada y olvidar la intensidad, la saturación y la capacidad de desalojo.'
  },
  3:{
    outcomes:['Diferenciar lluvia local, creciente serrana y remanso.','Usar tendencias y ventanas de anticipación para preparar recursos.','Decidir antes de que una ruta vulnerable se cierre.'],
    scenario:'Una estación aguas arriba muestra ascenso sostenido y se esperan lluvias adicionales. Todavía no hay agua en viviendas de Villahermosa, pero algunas rutas de comunidades bajas pueden cerrarse. La ventaja operativa está en actuar durante esa ventana, no esperar el impacto.',
    closing:['Confirmar tendencia y pronóstico adicional.','Estimar cuántas horas quedan para preparar el sector.','Preposicionar recursos, verificar refugios y trasladar población vulnerable cuando corresponda.'],
    common:'Esperar a que el nivel alcance su máximo o a que el agua entre a viviendas para iniciar la preparación.'
  },
  4:{
    outcomes:['Comprender qué es una zona protegida y por qué conserva riesgo residual.','Reconocer los frentes de protección de Villahermosa y los elementos que deben vigilarse.','Relacionar bordos, muros, compuertas, drenes, cauces de alivio y cárcamos como un solo sistema.'],
    scenario:'Una colonia permanece detrás de un bordo sin rebase, pero comienza a anegarse durante una lluvia intensa. El río está alto y las descargas por gravedad están cerradas. La explicación probable es una inundación interna por pérdida de capacidad de bombeo o drenaje.',
    closing:['Identificar la obra y su zona de influencia.','Revisar continuidad, filtraciones, obstrucciones, energía, combustible y operación.','Escalar de inmediato cualquier falla que cambie la seguridad del sector.'],
    common:'Suponer que una colonia está completamente segura sólo porque existe un bordo, muro o malecón.'
  },
  5:{
    outcomes:['Aplicar el semáforo de forma territorial y no uniforme.','Relacionar cada color con acciones y productos verificables.','Desescalar únicamente cuando existan condiciones estables y comprobadas.'],
    scenario:'Una colonia tiene un cárcamo fuera de servicio y una ruta vulnerable, mientras otros sectores mantienen drenaje operativo. El municipio no necesita un solo color: puede declarar naranja en el sector crítico y amarillo en las zonas bajo vigilancia.',
    closing:['Evaluar la condición real de cada sector.','Asignar el color por la consecuencia más grave probable.','Emitir acciones, responsables y mensajes acordes con el nivel.'],
    common:'Usar el semáforo sólo como mensaje público, sin asociarlo a decisiones operativas concretas.'
  },
  6:{
    outcomes:['Comprender cómo el Consejo Municipal convierte información en decisiones.','Identificar las funciones antes, durante y después de cada comisión operativa.','Formular solicitudes de apoyo con ubicación, cantidad, prioridad y responsable.'],
    scenario:'Durante una sesión permanente llegan datos distintos de evacuados, dos solicitudes generales de apoyo y reportes sin hora de corte. El Consejo debe unificar el escenario, asignar responsables y pedir productos verificables a cada comisión.',
    closing:['Presentar un escenario común.','Asignar productos y tiempos de corte por comisión.','Documentar acuerdos, solicitudes y cambios de prioridad.'],
    common:'Activar comisiones sin explicar el escenario, sin producto esperado y sin hora para el siguiente reporte.'
  },
  7:{
    outcomes:['Organizar la operación por sectores con responsable y canal de comunicación.','Diferenciar zonas roja, amarilla, verde y puntos de control.','Aplicar criterios de evacuación preventiva y seguridad del personal.'],
    scenario:'Una colonia presenta calles con corriente, cables expuestos y familias que desean regresar por pertenencias. La sectorización y los perímetros permiten separar rescate, evaluación, logística y acceso de población.',
    closing:['Delimitar el sector y sus peligros.','Definir perímetros, accesos, ruta y refugio asociado.','Registrar entradas, salidas y evolución del sector.'],
    common:'Permitir ingreso libre a una zona afectada porque el agua parece poco profunda o porque la población conoce el lugar.'
  },
  8:{
    outcomes:['Verificar si un inmueble y su ruta son seguros para operar como refugio.','Organizar registro, áreas funcionales y atención diferenciada.','Cerrar el refugio únicamente cuando el retorno sea seguro y el inventario esté conciliado.'],
    scenario:'Un inmueble tiene gran capacidad, pero su acceso se anega y no cuenta con agua ni responsable de llaves. Aunque parece conveniente, no puede abrirse hasta resolver las condiciones mínimas de seguridad y operación.',
    closing:['Validar inmueble, servicios, responsables y ruta.','Registrar necesidades específicas desde el ingreso.','Mantener control de ocupación, insumos, salud y reunificación.'],
    common:'Elegir un refugio sólo por su tamaño, sin revisar seguridad, accesibilidad, servicios y condiciones de acceso.'
  },
  9:{
    outcomes:['Redactar mensajes que indiquen qué ocurre, dónde y qué debe hacer la población.','Priorizar ayuda humanitaria con EDAN y necesidades validadas.','Mantener trazabilidad de solicitudes, lotes, entregas y cierres de folio.'],
    scenario:'Tres comunidades solicitan alimentos al mismo tiempo: una está aislada y sin agua segura, otra tiene acceso abierto y daños menores, y la tercera aloja población en un refugio saturado. La distribución debe basarse en necesidad y consecuencia, no sólo en orden de llegada.',
    closing:['Confirmar la información y asignar prioridad.','Comunicar instrucciones claras y consistentes.','Registrar cada apoyo y actualizar el EDAN y la continuidad de servicios.'],
    common:'Enviar apoyos por presión o visibilidad sin validar población, aislamiento, ruta, receptor y evidencia de entrega.'
  },
  10:{
    outcomes:['Explicar con lenguaje sencillo qué es un simulacro de gabinete y qué lo diferencia de un simulacro de campo.','Ordenar las etapas de diseño, desarrollo, evaluación y seguimiento de un simulacro.','Diferenciar descenso del agua, retorno seguro y cierre operativo.','Convertir hallazgos en acciones correctivas verificables y actualización del Plan.'],
    scenario:'Antes de la temporada de lluvias, el Consejo Municipal realiza un simulacro de gabinete. Se presenta una creciente con falla de cárcamo, cierre de una ruta y apertura de refugios. Las comisiones deben decidir, coordinar y emitir productos sin movilizar físicamente todos los recursos. Al finalizar, los hallazgos se convierten en acciones correctivas.',
    closing:['Diseñar el simulacro con objetivo, escenario, inyectas y criterios de evaluación.','Registrar decisiones, tiempos y productos de cada comisión.','Aplicar criterios de cierre seguro en eventos reales.','Asignar responsable, plazo e indicador a cada acción correctiva.'],
    common:'Confundir un simulacro de gabinete con una reunión informativa o darlo por terminado sin evaluación, responsables y seguimiento.'
  }
};

const DIDACTIC = {
  1:{
    explain:[
      'Este módulo está pensado para personal no especializado. La idea central es sencilla: una inundación no depende sólo de la lluvia. También depende del lugar donde ocurre, de quién vive ahí, de qué tan rápido puede acumularse el agua y de si existen recursos para responder a tiempo.',
      'En Centro conviven sectores urbanos, periurbanos y rurales. Por eso dos reportes con “agua en la calle” pueden significar cosas muy distintas: en una colonia baja puede tratarse de drenaje insuficiente; en una comunidad ribereña puede anunciar una creciente; y en una zona comercial puede haber además mucha población flotante que necesita orientación.',
      'Si el personal operativo entiende primero el territorio, después le resultará mucho más fácil decidir a quién alertar, qué recurso mover, cuándo evacuar y qué dependencia debe entrar primero.'
    ],
    steps:[
      ['Paso 1. Ubicar el tipo de sector','Antes de decidir, identifica si estás en una colonia urbana baja, una comunidad ribereña, un corredor con alta movilidad o una zona que puede quedar aislada.'],
      ['Paso 2. Reconocer a la población expuesta','No basta contar viviendas; identifica adultos mayores, niñas y niños, personas con discapacidad y hogares sin vehículo o sin medios para recibir información.'],
      ['Paso 3. Revisar la capacidad de respuesta','Pregunta si hay refugio cercano, transporte disponible, drenaje funcional, cárcamo, cuadrillas o apoyo comunitario.'],
      ['Paso 4. Definir prioridad','Con los tres pasos anteriores puedes decidir si corresponde vigilancia, alistamiento, evacuación preventiva o apoyo adicional.']
    ],
    visualPrompts:['La planicie baja favorece que el agua permanezca por horas o días; por ello la respuesta debe sectorizarse y priorizar las zonas más expuestas.','El esquema resume cómo se construye el riesgo al combinar peligro, exposición, vulnerabilidad y capacidades disponibles.'],
    keys:['Primero entender el sector, luego movilizar recursos.','La población vulnerable cambia la prioridad operativa.','El mismo fenómeno genera impactos distintos según el contexto local.'],
    microTitle:'Interacción 1: priorizar un sector',
    microHtml:`<div class="lab"><h3>Priorizador territorial</h3><label for="sectorType">Tipo de sector</label><select id="sectorType" style="width:100%;padding:10px;border-radius:9px"><option value="urbano">Colonia urbana baja</option><option value="ribera">Comunidad ribereña</option><option value="movilidad">Corredor con alta movilidad y población flotante</option><option value="aislable">Comunidad con ruta aislable</option></select><label for="sectorVuln" style="margin-top:10px;display:block">Condición dominante</label><select id="sectorVuln" style="width:100%;padding:10px;border-radius:9px"><option value="vuln">Alta población vulnerable</option><option value="drenaje">Infraestructura de desalojo limitada</option><option value="mixta">Ambas condiciones</option></select><div id="sectorResult" class="lab-result"></div></div>`,
    micro2Title:'Interacción 2: traducir el reporte',
    micro2Html:`<div class="lab"><h3>¿Qué significa este reporte?</h3><label for="sectorReport">Selecciona un reporte de campo</label><select id="sectorReport" style="width:100%;padding:10px;border-radius:9px"><option value="calle">“Hay agua en la calle y el agua no corre”</option><option value="ribera">“El río sigue subiendo y la gente teme quedar incomunicada”</option><option value="terminal">“Se complica la movilidad y hay mucha gente esperando transporte”</option><option value="adultos">“Hay personas mayores que no pueden salir solas”</option></select><div id="sectorReportResult" class="lab-result"></div></div>`
  },
  2:{
    explain:[
      'Aquí el propósito es perderle el miedo a los términos meteorológicos. No necesitas ser especialista para usar la información del tiempo: basta aprender a traducir pronóstico, lluvia observada y duración en acciones simples.',
      'Una pregunta práctica ayuda mucho: ¿esa lluvia caerá poco a poco o en muy poco tiempo? La respuesta cambia por completo la decisión, porque una lluvia intensa en pocas horas puede afectar más que un acumulado mayor repartido durante todo el día.',
      'También debes recordar que ENSO (El Niño, La Niña o neutral) sólo orienta la preparación estacional. Nunca sustituye el seguimiento diario del pronóstico y de los reportes de campo.'
    ],
    steps:[
      ['Paso 1. Mira el acumulado','Sirve como referencia general del potencial de lluvia en 24 horas.'],
      ['Paso 2. Mira la duración','Entre menos tiempo tarda en caer, mayor puede ser el problema operativo.'],
      ['Paso 3. Relaciónalo con el contexto','Si el suelo ya está saturado o los ríos están altos, el riesgo sube aunque el acumulado no parezca extremo.'],
      ['Paso 4. Convierte el dato en acción','Vigilancia, alistamiento, activación, refugios o evacuación.']
    ],
    visualPrompts:['Esta lámina resume los fenómenos más comunes y ayuda a traducir términos técnicos a efectos prácticos. Obsérvala como una hoja de consulta rápida.','Relaciona cada fenómeno con su efecto más probable en la operación diaria del municipio.'],
    keys:['La intensidad importa tanto como el acumulado.','ENSO orienta preparación, no pronostica por sí mismo una inundación.','Siempre traduce el dato del tiempo en una acción concreta.'],
    microTitle:'Interacción 1: laboratorio de lluvia',
    microHtml:`<div class="lab"><h3>Laboratorio de lluvia</h3><label for="rainAmount">Acumulado: <output id="rainAmountOut">80 mm</output></label><input id="rainAmount" type="range" min="0" max="300" value="80" step="5"><label for="rainHours">Duración: <output id="rainHoursOut">24 h</output></label><input id="rainHours" type="range" min="1" max="24" value="24"><div id="rainResult" class="lab-result">Mueve los controles para comparar intensidad y respuesta.</div></div>`,
    micro2Title:'Interacción 2: leer el contexto',
    micro2Html:`<div class="lab"><h3>¿Cómo cambia la decisión?</h3><label for="weatherContext">Condición adicional</label><select id="weatherContext" style="width:100%;padding:10px;border-radius:9px"><option value="normal">Drenaje operando y ríos estables</option><option value="saturado">Suelo saturado por lluvias previas</option><option value="riosaltos">Ríos altos y descargas limitadas</option><option value="energia">Riesgo de falla eléctrica en cárcamos</option></select><div id="weatherContextResult" class="lab-result"></div></div>`
  },

3:{
  explain:[
    'Este módulo explica cómo leer el agua que llega al municipio. Para personal no especializado, lo importante es distinguir si la señal proviene de lluvia local, de crecientes en cuencas altas o de una condición de remanso que limita el desalojo.',
    'El monitoreo sirve para ganar tiempo. Si se observa una tendencia ascendente aguas arriba, se abre una ventana operativa para revisar rutas, alertar a la población y mover recursos antes de que la afectación alcance a Villahermosa.',
    'La decisión no debe esperar al pico. Cuando coinciden pronóstico adicional, tendencia sostenida y riesgo de cierre de accesos, el momento útil para actuar es antes del impacto visible.'
  ],
  steps:[
    ['Paso 1. Identificar de dónde viene la señal','¿Es lluvia en la ciudad, en la sierra o remanso por ríos altos?'],
    ['Paso 2. Estimar el tiempo disponible','Algunas decisiones deben tomarse en horas; otras permiten un margen mayor.'],
    ['Paso 3. Preparar recursos por sector','No todos los sectores necesitan lo mismo ni al mismo tiempo.'],
    ['Paso 4. Decidir antes del cierre de rutas','Ese es el punto crítico para la evacuación preventiva.']
  ],
  visualPrompts:['El sistema hidrológico del municipio se entiende mejor como una red de entradas, salidas y puntos de control que influyen en la respuesta operativa.','Las lagunas urbanas y las estructuras de desalojo forman parte del mismo sistema y por eso deben leerse en conjunto.','El esquema permite ubicar los sistemas que deben monitorearse para anticipar afectaciones en Centro.','La propagación de crecientes ayuda a anticipar tiempos de llegada y sectores con mayor necesidad de vigilancia.','La secuencia temporal permite decidir cuándo vigilar, cuándo alistar y cuándo actuar.','El esquema hidráulico explica por qué los ríos altos pueden impedir el desalojo por gravedad.'],
  keys:['Una tendencia sostenida es una señal valiosa.','La información aguas arriba compra tiempo para actuar.','Las rutas vulnerables obligan a decidir antes de que el agua llegue a viviendas.'],
  microTitle:'Interacción 1: elegir la ventana',
  microHtml:`<div class="lab"><h3>Ventana operativa</h3><label for="windowSignal">Señal dominante</label><select id="windowSignal" style="width:100%;padding:10px;border-radius:9px"><option value="local">Lluvia local intensa en la ciudad</option><option value="serrana">Lluvia fuerte en cuencas serranas</option><option value="rios">Ríos altos con descargas limitadas</option><option value="remanso">Confluencia y remanso con rutas vulnerables</option></select><div id="windowResult" class="lab-result"></div></div>`,
  micro2Title:'Interacción 2: decisión según el momento',
  micro2Html:`<div class="lab"><h3>¿Qué harías primero?</h3><label for="timeStage">Momento del evento</label><select id="timeStage" style="width:100%;padding:10px;border-radius:9px"><option value="h24">24 a 18 horas antes del impacto probable</option><option value="h12">18 a 12 horas antes del impacto probable</option><option value="h6">12 a 6 horas antes del impacto probable</option><option value="h0">Menos de 6 horas antes del impacto probable</option></select><div id="timeStageResult" class="lab-result"></div></div>`
},
4:{
  explain:[
    'Este módulo resume cómo funcionan las zonas protegidas del municipio y por qué no basta con tener una obra construida. La protección depende de la continuidad del sistema y de la vigilancia de sus puntos críticos.',
    'En Villahermosa hay frentes protegidos por malecones, bordos y muros, pero también existen zonas intrabordo que dependen de cárcamos, compuertas y drenes para desalojar la lluvia local cuando el río está alto.',
    'La pregunta práctica es: ¿qué debe cuidarse para que la protección siga funcionando? La respuesta incluye taludes, puntos bajos, filtraciones, compuertas, charnelas, rejillas, energía, combustible y cauces de alivio sin obstrucción.'
  ],
  steps:[
    ['Paso 1. Identificar el sistema protegido','Define si estás frente a un bordo, muro, malecón, cárcamo, compuerta o cauce de alivio.'],
    ['Paso 2. Reconocer su zona de influencia','Cada obra protege colonias o corredores específicos y por eso la inspección debe relacionarse con población expuesta.'],
    ['Paso 3. Revisar puntos críticos','Busca filtraciones, socavación, obstrucciones, retornos, fallas de bombeo o pérdida de continuidad.'],
    ['Paso 4. Convertir la observación en decisión','La inspección debe traducirse en vigilancia, mantenimiento, acordonamiento, operación o escalamiento.']
  ],
  visualPrompts:['La imagen muestra que el riesgo residual aumenta cuando una defensa marginal pierde continuidad o es superada por el evento.','La inspección de obras de protección debe mirar la integridad de la estructura y la operación del sistema asociado.','La erosión marginal debilita taludes y puede comprometer la estabilidad de una zona protegida.','El drenaje urbano pierde eficacia cuando se reduce su capacidad hidráulica por azolve, basura u obstrucciones.','La matriz de riesgo residual permite priorizar sectores donde una falla tendría mayor consecuencia.','La continuidad de un cárcamo depende de varios eslabones y no sólo de que exista una bomba instalada.'],
  keys:['Una zona protegida no es una zona libre de riesgo.','La lluvia atrapada dentro de la zona protegida puede generar inundación interna.','Toda observación de campo debe traducirse en una acción concreta.'],
  microTitle:'Interacción 1: identificar qué debe cuidarse',
  microHtml:`<div class="lab"><h3>¿Qué frente estás revisando?</h3><label for="protectedZone">Selecciona un sistema protegido</label><select id="protectedZone" style="width:100%;padding:10px;border-radius:9px"><option value="grijalva">Frente Grijalva–La Sierra / Gaviotas / malecones</option><option value="carrizal">Río Carrizal y bordos de margen</option><option value="intrabordo">Drenes, compuertas, charnelas y cárcamos</option><option value="alivio">Cauces de alivio y zonas lagunares</option></select><div id="protectedZoneResult" class="lab-result"></div></div>`,
  micro2Title:'Interacción 2: traducir el hallazgo de inspección',
  micro2Html:`<div class="lab"><h3>¿Qué significa esta observación?</h3><label for="protectedFinding">Selecciona un hallazgo</label><select id="protectedFinding" style="width:100%;padding:10px;border-radius:9px"><option value="filtracion">Filtración o grieta en bordo o muro</option><option value="retorno">Retorno por descarga, charnela o compuerta</option><option value="rejilla">Rejilla, dren o canal obstruido</option><option value="energia">Falla de energía o combustible en cárcamo</option></select><div id="protectedFindingResult" class="lab-result"></div></div>`
},
5:{
    explain:[
      'El objetivo aquí es comprender que la infraestructura protege, pero también debe vigilarse. Para personal no especializado conviene pensarla como una cadena: si una pieza falla, el riesgo puede crecer rápidamente.',
      'Un cárcamo no depende sólo de la bomba; necesita energía, combustible, rejillas limpias, acceso y descarga. De igual forma, un bordo no es seguro sólo porque existe: puede presentar grietas, filtraciones o socavación que obligan a escalar la atención.'
    ],
    steps:[
      ['Paso 1. Ver lo visible','Grietas, filtraciones, basura, obstrucción o retorno de agua.'],
      ['Paso 2. Preguntar por la continuidad','¿Hay energía, planta, combustible, operador y acceso?'],
      ['Paso 3. Estimar a quién afecta','Identifica colonias, vialidades o servicios que dependen de esa estructura.'],
      ['Paso 4. Escalar si una falla cambia el riesgo del sector','La infraestructura no se revisa por rutina solamente: se revisa para decidir.']
    ],
    visualPrompts:['Esta imagen permite ver que una obra de protección no elimina por completo la exposición.','Úsala como guía de inspección para saber qué observar en recorridos preventivos.','Aquí se muestra la erosión marginal; sirve para explicar por qué una ribera inestable puede empeorar con rapidez.','Compara mentalmente el dren limpio con el dren obstruido y piensa en el efecto sobre calles y viviendas.','La matriz visual ayuda a ordenar el riesgo residual con un criterio comprensible para no especialistas.','Esta lámina muestra que la continuidad de un cárcamo depende de varios eslabones.'],
    keys:['La infraestructura reduce riesgo, pero no sustituye la vigilancia.','Una falla pequeña puede tener efectos grandes.','Toda observación debe traducirse en una acción concreta o en un escalamiento.'],
    microTitle:'Interacción 1: falla crítica',
    microHtml:`<div class="lab"><h3>¿Qué falla observas?</h3><label for="infraIssue">Selecciona una condición</label><select id="infraIssue" style="width:100%;padding:10px;border-radius:9px"><option value="grieta">Grieta y asentamiento en bordo</option><option value="retorno">Retorno por compuerta o descarga</option><option value="bomba">Bomba fuera de operación</option><option value="rejilla">Rejilla o canal obstruido</option></select><div id="infraResult" class="lab-result"></div></div>`,
    micro2Title:'Interacción 2: cadena del cárcamo',
    micro2Html:`<div class="lab"><h3>¿Qué eslabón falló?</h3><label for="pumpChain">Elige un problema</label><select id="pumpChain" style="width:100%;padding:10px;border-radius:9px"><option value="energia">No hay energía eléctrica</option><option value="combustible">La planta tiene poco combustible</option><option value="rejilla2">La rejilla está saturada</option><option value="acceso">El acceso está inundado</option></select><div id="pumpChainResult" class="lab-result"></div></div>`
  },
  5:{
    explain:[
      'Este módulo busca que cualquier persona del equipo pueda entender qué significa cada color del semáforo y qué decisiones prácticas debe detonar. No es un adorno gráfico: es una herramienta para organizar la respuesta.',
      'Lo más importante es asumir que los colores pueden variar por sector. Una colonia puede estar en naranja por falla de bombeo y otra en amarillo porque sólo mantiene vigilancia. La flexibilidad evita decisiones rígidas y poco útiles.'
    ],
    steps:[
      ['Paso 1. Leer la condición del sector','¿Hay sólo pronóstico o ya existen afectaciones?'],
      ['Paso 2. Relacionarla con población y rutas','Un mismo tirante puede tener implicaciones distintas según el tipo de población y de acceso.'],
      ['Paso 3. Elegir el color operativo','Verde, amarillo, naranja o rojo.'],
      ['Paso 4. Emitir acciones y mensajes acordes al color','Cada color debe producir trabajo, no sólo comunicación.']
    ],
    visualPrompts:['Esta cadena operativa muestra que la emergencia escala por combinación de factores.','Este árbol ayuda a convertir escenarios en decisiones operativas.','Aquí se presentan las variables del semáforo como una lista de verificación práctica.','Este esquema muestra que desescalar también exige criterios.'],
    keys:['El color se asigna según condición real, no por costumbre.','Evacuar puede decidirse desde naranja.','Desescalar requiere evidencia y estabilidad.'],
    microTitle:'Interacción 1: simulador de alerta',
    microHtml:`<div class="lab"><h3>Simulador de alerta sectorial</h3><label for="alertScenario">Selecciona un caso</label><select id="alertScenario" style="width:100%;padding:10px;border-radius:9px"><option value="yellow">Pronóstico fuerte, ríos en ascenso, sin afectación confirmada</option><option value="orange">Cárcamo crítico fuera de operación, lluvia adicional y ruta vulnerable</option><option value="red">Agua en viviendas, evacuación necesaria y vialidad cerrada</option><option value="down">Descenso sostenido, refugios aún activos y servicios estabilizados</option></select><div id="alertResult" class="lab-result"></div></div>`,
    micro2Title:'Interacción 2: color por sector',
    micro2Html:`<div class="lab"><h3>Asignación rápida</h3><label for="sectorAlert">Condición observada</label><select id="sectorAlert" style="width:100%;padding:10px;border-radius:9px"><option value="vig">Hay vigilancia y recorridos sin afectación</option><option value="pre">Hay lluvia fuerte, ruta vulnerable y población expuesta</option><option value="evac">Ya se requiere evacuación y refugio</option><option value="desc">La situación mejora pero sigue la operación</option></select><div id="sectorAlertResult" class="lab-result"></div></div>`
  },

6:{
  explain:[
    'El Consejo Municipal se entiende mejor como una mesa de decisiones con productos verificables. Cada sesión debe producir acuerdos, tareas y una hora de seguimiento.',
    'Las comisiones operativas funcionan cuando cada una sabe qué debe preparar antes del impacto, qué debe sostener durante la emergencia y qué debe cerrar después del evento.',
    'La coordinación institucional mejora cuando la solicitud de apoyo es precisa y cuando la bitácora permite continuidad entre turnos y comisiones.'
  ],
  steps:[
    ['Paso 1. Presentar el escenario','Pronóstico, niveles, lluvias, infraestructura crítica y sectores prioritarios.'],
    ['Paso 2. Activar comisiones','Con responsable, suplente, producto esperado y primer corte.'],
    ['Paso 3. Asignar tiempos y prioridades','Definir qué se hará primero, por quién y en qué sector.'],
    ['Paso 4. Documentar y actualizar','Minuta, bitácora, nuevas tareas y siguiente sesión.']
  ],
  visualPrompts:['El diagrama ayuda a entender la relación entre el Consejo Municipal y las comisiones operativas.','La rutina de reuniones permite sostener continuidad entre cortes de situación.'],
  keys:['Toda comisión necesita una tarea medible.','Sin minuta ni bitácora se pierde continuidad.','Las solicitudes de apoyo deben ser específicas.'],
  microTitle:'Interacción 1: producto de comisión',
  microHtml:`<div class="lab"><h3>Asignación rápida</h3><label for="commissionSelect">Elige una comisión</label><select id="commissionSelect" style="width:100%;padding:10px;border-radius:9px"><option value="seguridad">Seguridad y control de accesos</option><option value="refugios">Refugios temporales</option><option value="salud">Salud y atención médica</option><option value="comsocial">Comunicación social</option><option value="logistica">Logística y ayuda humanitaria</option></select><div id="commissionResult" class="lab-result"></div></div>`,
  micro2Title:'Interacción 2: solicitud de apoyo',
  micro2Html:`<div class="lab"><h3>¿Qué falta en la solicitud?</h3><label for="supportNeed">Tipo de apoyo</label><select id="supportNeed" style="width:100%;padding:10px;border-radius:9px"><option value="lancha">Se necesita lancha</option><option value="bomba">Se necesita bomba</option><option value="alimentos">Se necesitan alimentos</option><option value="seguridad2">Se necesita seguridad</option></select><div id="supportNeedResult" class="lab-result"></div></div>`
},
7:{
    explain:[
      'La sectorización vuelve manejable una emergencia compleja. En vez de tener reportes sueltos, se organiza el territorio en sectores con responsable, canal de comunicación, refugio asociado y punto de control.',
      'Para personal no especializado es útil recordar una regla simple: donde hay más peligro, menos acceso libre; donde el riesgo está controlado, más espacio para logística y apoyo. De ahí nacen los perímetros rojo, amarillo y verde.'
    ],
    steps:[
      ['Paso 1. Definir el sector','Delimita el área y nombra un responsable.'],
      ['Paso 2. Establecer accesos y perímetros','Evita ingreso innecesario a zonas peligrosas.'],
      ['Paso 3. Verificar ruta y refugio','Toda evacuación necesita destino y control.'],
      ['Paso 4. Dar seguimiento por corte','No basta abrir el operativo; hay que sostenerlo.']
    ],
    visualPrompts:['Esta lámina relaciona tarea y equipo de protección personal; úsala como apoyo práctico.','Aquí se muestran los perímetros como una forma de ordenar la operación en campo.','Este flujo permite entender cómo se atiende de manera diferenciada a población vulnerable durante la evacuación.'],
    keys:['Sectorizar es ordenar, no fragmentar.','Los perímetros protegen a la población y al personal.','Evacuar implica ruta, transporte, refugio y control de accesos.'],
    microTitle:'Interacción 1: control de accesos',
    microHtml:`<div class="lab"><h3>Control de accesos</h3><label for="accessScenario">Situación del sector</label><select id="accessScenario" style="width:100%;padding:10px;border-radius:9px"><option value="roja">Corriente, cables expuestos y rescate activo</option><option value="amarilla">Limpieza, evacuación asistida y lodo</option><option value="verde">Área segura para logística y transferencia</option></select><div id="accessResult" class="lab-result"></div></div>`,
    micro2Title:'Interacción 2: decidir evacuación',
    micro2Html:`<div class="lab"><h3>¿Conviene evacuar?</h3><label for="evacDecision">Escenario</label><select id="evacDecision" style="width:100%;padding:10px;border-radius:9px"><option value="ruta">La ruta puede cerrarse en pocas horas</option><option value="vuln2">Hay personas vulnerables sin transporte</option><option value="corriente">Hay corriente fuerte en calles</option><option value="seguimiento">Sólo hay encharcamiento menor y ruta abierta</option></select><div id="evacDecisionResult" class="lab-result"></div></div>`
  },
  8:{
    explain:[
      'El refugio temporal debe entenderse como un espacio de protección integral. No sólo recibe personas: organiza el ingreso, separa áreas, da seguimiento a necesidades prioritarias y mantiene condiciones de seguridad y dignidad.',
      'Para personal no especializado conviene usar una pregunta guía: ¿este refugio realmente protege? Si la ruta es insegura, el inmueble se anega o no puede atender a población vulnerable, entonces no cumple su propósito aunque sea grande.'
    ],
    steps:[
      ['Paso 1. Verificar seguridad del inmueble y del acceso','Antes de abrir.'],
      ['Paso 2. Organizar el registro','Saber quién entra, con quién llega y qué necesita.'],
      ['Paso 3. Aplicar atención diferenciada','No todos requieren lo mismo.'],
      ['Paso 4. Dar seguimiento y salida segura','Mientras permanezcan y cuando regresen.']
    ],
    visualPrompts:['Esta imagen muestra el refugio como un espacio organizado por áreas funcionales.','Este flujo ayuda a no olvidar pasos clave en la atención a población vulnerable.'],
    keys:['La capacidad útil es más importante que la capacidad nominal.','La atención diferenciada comienza en el registro.','La seguridad del acceso es parte de la seguridad del refugio.'],
    microTitle:'Interacción 1: atención diferenciada',
    microHtml:`<div class="lab"><h3>Ingreso a refugio</h3><label for="shelterProfile">Perfil de la persona o familia</label><select id="shelterProfile" style="width:100%;padding:10px;border-radius:9px"><option value="adultomayor">Adulto mayor con movilidad reducida</option><option value="familia">Familia con niñas y niños pequeños</option><option value="embarazo">Mujer embarazada</option><option value="discapacidad">Persona con discapacidad y medicamento de control</option></select><div id="shelterResult" class="lab-result"></div></div>`,
    micro2Title:'Interacción 2: decidir apertura',
    micro2Html:`<div class="lab"><h3>¿Abrirías este refugio?</h3><label for="shelterOpen">Condición del inmueble</label><select id="shelterOpen" style="width:100%;padding:10px;border-radius:9px"><option value="seguro">Ruta segura, sanitarios operativos y espacio suficiente</option><option value="anegado">Acceso con anegamiento recurrente</option><option value="sinagua">Buen espacio, pero sin agua ni responsables</option><option value="escuela">Escuela segura con bodega y accesibilidad</option></select><div id="shelterOpenResult" class="lab-result"></div></div>`
  },
  9:{
    explain:[
      'En este módulo se integran comunicación del riesgo, ayuda humanitaria, evaluación de daños y continuidad de servicios. La razón es sencilla: comunicar, abastecer y evaluar son tareas que se alimentan mutuamente.',
      'Para personal no especializado, la regla más útil es ésta: cada mensaje debe explicar qué pasa y qué hacer; cada apoyo debe poder rastrearse; y cada reporte de daños debe servir para priorizar la siguiente decisión.'
    ],
    steps:[
      ['Paso 1. Confirmar la información','Antes de emitir mensajes o enviar apoyos.'],
      ['Paso 2. Comunicar con instrucciones claras','Decir qué ocurre, dónde y qué debe hacer la población.'],
      ['Paso 3. Priorizar la logística','Con base en necesidad validada.'],
      ['Paso 4. Registrar y dar seguimiento','Ayuda humanitaria, EDAN y servicios interrumpidos.']
    ],
    visualPrompts:['La cadena logística muestra que el apoyo no termina en el centro de acopio; debe llegar con evidencia a la población objetivo.','Este esquema de trazabilidad ayuda a seguir la ruta de cada apoyo y evitar duplicidades.','La ruta EDAN recuerda que la evaluación de daños es una herramienta de decisión, no sólo de registro.'],
    keys:['Todo mensaje debe ser accionable.','La logística se prioriza con información validada.','La trazabilidad protege la operación y la rendición de cuentas.'],
    microTitle:'Interacción 1: prioridad logística',
    microHtml:`<div class="lab"><h3>Priorización de ayuda</h3><label for="logisticsCase">Selecciona un caso</label><select id="logisticsCase" style="width:100%;padding:10px;border-radius:9px"><option value="aislada">Comunidad aislada con 80 personas y sin agua segura</option><option value="refugio">Refugio temporal con ocupación creciente y faltante de colchonetas</option><option value="urbana">Colonia urbana con agua en patios, sin desalojo pero con vialidad abierta</option><option value="hospital">Hospital con acceso limitado y necesidad de insumos críticos</option></select><div id="logisticsResult" class="lab-result"></div></div>`,
    micro2Title:'Interacción 2: redactar un mensaje útil',
    micro2Html:`<div class="lab"><h3>¿Qué debe decir el mensaje?</h3><label for="riskMessage">Nivel de alerta</label><select id="riskMessage" style="width:100%;padding:10px;border-radius:9px"><option value="amarillo">Amarillo</option><option value="naranja">Naranja</option><option value="rojo">Rojo</option><option value="retorno">Retorno seguro</option></select><div id="riskMessageResult" class="lab-result"></div></div>`
  },
  10:{
    explain:[
      'Un simulacro de gabinete es una práctica dirigida de análisis y coordinación. Las personas participantes permanecen en una sala de trabajo, reciben información progresiva y deben tomar decisiones como si la emergencia fuera real.',
      'El ejercicio utiliza escenarios basados en puntos críticos del municipio: remanso, cárcamos, zonas intrabordo, comunidades ribereñas, refugios, rutas afectables, comunicaciones y servicios esenciales. No necesita movilizar todo el equipo para evaluar si las decisiones, mensajes, formatos y cadenas de mando funcionan.',
      'Después del ejercicio se revisan los tiempos, la coordinación y los productos. Los hallazgos se convierten en acciones correctivas. Esa misma disciplina se utiliza después de una emergencia real para verificar el cierre operativo y actualizar el Plan.'
    ],
    steps:[
      ['Paso 1. Diseñar','Definir objetivo, escenario, inyectas, participantes, duración y criterios de evaluación.'],
      ['Paso 2. Desarrollar','Presentar información progresiva y pedir decisiones y productos a las comisiones.'],
      ['Paso 3. Evaluar','Comparar tiempos, coordinación, comunicación, seguridad y uso de recursos.'],
      ['Paso 4. Cerrar la emergencia real','Confirmar retorno seguro, servicios mínimos y riesgos residuales controlados.'],
      ['Paso 5. Mejorar','Asignar acciones correctivas, responsables, plazos, indicadores y evidencia de cierre.']
    ],
    visualPrompts:['El esquema representa un simulacro de gabinete en el que las comisiones analizan una creciente mayor, responden a inyectas y coordinan decisiones.','El ciclo de mejora continua muestra que el Plan se prueba, se evalúa, se corrige y vuelve a utilizarse.','La ruta de una lección aprendida convierte un hallazgo en una acción verificable con responsable y cierre.'],
    keys:['El simulacro de gabinete evalúa decisiones y coordinación, no despliegue físico.','Toda inyecta debe provocar una decisión o producto observable.','El cierre operativo requiere retorno seguro y control de riesgos residuales.','La mejora concluye cuando la acción correctiva está verificada.'],
    microTitle:'Interacción 1: ¿qué evalúa el simulacro?',
    microHtml:`<div class="lab"><h3>Selecciona una inyecta</h3><label for="tabletopInject">Situación presentada al Consejo</label><select id="tabletopInject" style="width:100%;padding:10px;border-radius:9px"><option value="carcamo">Falla de un cárcamo con lluvia intensa</option><option value="ruta">Cierre probable de una ruta de evacuación</option><option value="refugio">Refugio cercano a su capacidad máxima</option><option value="rumor">Rumor de colapso de bordo en redes sociales</option><option value="comunicacion">Pérdida de comunicación con una comunidad</option></select><div id="tabletopInjectResult" class="lab-result"></div></div>`,
    micro2Title:'Interacción 2: ¿ya puede cerrarse la emergencia?',
    micro2Html:`<div class="lab"><h3>Evalúa el cierre operativo</h3><label for="closeEvent">Condición actual</label><select id="closeEvent" style="width:100%;padding:10px;border-radius:9px"><option value="agua">Ya bajó el agua, pero siguen servicios interrumpidos</option><option value="rutas">Rutas inspeccionadas, servicios básicos funcionales y saneamiento en curso</option><option value="riesgo">Persisten cables expuestos y socavación</option><option value="refugios2">Aún hay refugios activos con personas alojadas</option></select><div id="closeEventResult" class="lab-result"></div></div>`
  }
};

const EXAM_BANK = [
  {q:'Se pronostican 80 mm de lluvia. ¿Qué dato cambia más la decisión operativa en una zona urbana baja?',o:['Que el acumulado sea exactamente 80 mm','Si los 80 mm ocurrirán en dos horas o distribuidos en 24 horas','El nombre del fenómeno meteorológico','La hora de publicación del boletín'],a:1,r:'La intensidad horaria puede colapsar el drenaje aun cuando el acumulado de 24 horas sea el mismo.'},
  {q:'El Grijalva está alto, llueve intensamente en Villahermosa y las descargas por gravedad pierden eficiencia. ¿Cuál es la consecuencia operativa principal?',o:['Disminuye la necesidad de cárcamos','Aumenta la dependencia de bombeo y pueden prolongarse los anegamientos','Se elimina el riesgo de remanso','Sólo se afecta la navegación'],a:1,r:'Ríos altos pueden cerrar o dificultar las descargas, por lo que el drenaje depende de bombeo.'},
  {q:'Una colonia tiene cárcamo crítico fuera de operación y lluvia adicional probable, mientras el resto de la ciudad sólo está en vigilancia. ¿Cómo debe aplicarse el semáforo?',o:['Un solo color para todo el municipio','Naranja sectorial en la colonia y amarillo donde corresponda','Verde hasta que entre agua a viviendas','Rojo estatal automático'],a:1,r:'El semáforo del Plan es flexible y territorializado.'},
  {q:'¿Cuándo debe considerarse la evacuación preventiva de población vulnerable en una zona baja con ruta que puede cerrarse?',o:['Sólo después de declarar rojo','Desde naranja, antes de perder la ruta','Hasta que el refugio alcance 50% de ocupación','Después del EDAN consolidado'],a:1,r:'El Plan evita que rojo sea el primer momento para decidir la evacuación.'},
  {q:'¿Cuál es el momento correcto para iniciar el EDAN inicial?',o:['Al concluir totalmente la emergencia','En rojo, cuando exista acceso seguro, y continuar durante el descenso a naranja','Sólo cuando lo solicite una dependencia federal','Antes de confirmar cualquier afectación'],a:1,r:'El EDAN temprano apoya decisiones, solicitudes y recuperación; no debe esperar al cierre.'},
  {q:'En la ventana 12 a 6 horas antes del impacto probable aumenta la probabilidad de afectación y las rutas son vulnerables. ¿Qué producto se espera?',o:['Acta de cierre','Recursos preposicionados y refugios disponibles por sector','EDAN final','Reporte anual de mejora'],a:1,r:'Esa ventana corresponde a preparación avanzada y preposicionamiento.'},
  {q:'Durante la inspección de un bordo se confirma una brecha con flujo concentrado. ¿Qué acción es prioritaria?',o:['Continuar el recorrido sin restricción','Restringir acceso, activar rescate especializado y evacuar la zona interior o aguas abajo','Esperar a medir el nivel al día siguiente','Enviar sólo un mensaje preventivo'],a:1,r:'Una brecha puede cambiar súbitamente la dinámica y generar flujo destructivo.'},
  {q:'Un pronóstico de 180 mm en 24 horas coincide con ríos altos y sectores vulnerables. ¿Cuál es la lectura correcta?',o:['Lluvia fuerte con vigilancia ordinaria','Lluvia torrencial con posible alerta roja focalizada, refugios y apoyo estatal','Lluvia ligera por ser menor a 250 mm','Condición que sólo afecta zonas rurales'],a:1,r:'150.1 a 250 mm se clasifica como torrencial y puede detonar una emergencia.'},
  {q:'¿Qué implica una lluvia extraordinaria mayor a 250 mm en el Plan?',o:['Operación municipal ordinaria','Posible rebase de capacidades, mando unificado y apoyo estatal/federal','Cierre inmediato de refugios','Suspensión del monitoreo hidrológico'],a:1,r:'Es un escenario extremo que puede requerir apoyo extraordinario y operaciones prolongadas.'},
  {q:'¿Cómo debe utilizarse una condición La Niña?',o:['Como certeza de inundación en una fecha específica','Como modulador estacional para elevar preparación, no como pronóstico directo','Como razón para reducir mantenimiento','Como sustituto de los pronósticos diarios'],a:1,r:'ENSO orienta preparación estacional, pero no determina un evento concreto.'},
  {q:'Una familia vive en zona baja y no tiene vehículo. ¿Qué concepto describe principalmente esta condición?',o:['Peligro','Vulnerabilidad y capacidad limitada de autoevacuación','Amenaza meteorológica','Obra de protección'],a:1,r:'La falta de movilidad aumenta la dificultad para evacuar y requiere apoyo adicional.'},
  {q:'¿Quién inicia la atención territorial inmediata y cuándo se escala?',o:['El municipio como primer respondiente; se escala cuando la capacidad puede ser rebasada','Sólo la federación después de una declaratoria','El refugio temporal más cercano','La población sin coordinación institucional'],a:0,r:'El Ayuntamiento y la UMPC actúan primero y articulan apoyo estatal/federal.'},
  {q:'En la primera sesión del Consejo Municipal, ¿qué debe ocurrir antes de activar comisiones?',o:['Cerrar refugios','Presentar el escenario y priorizar territorialmente','Emitir el reporte final','Solicitar apoyo sin cuantificar'],a:1,r:'Las comisiones requieren un escenario común y prioridades claras.'},
  {q:'¿Qué condición invalida un inmueble como refugio, aunque tenga gran capacidad?',o:['Que esté fuera de la cabecera municipal','Que esté dentro de una zona de anegamiento o tenga ruta insegura','Que cuente con sanitarios separados','Que tenga espacio para bodega'],a:1,r:'La seguridad del inmueble y sus accesos prevalece sobre la capacidad nominal.'},
  {q:'¿Quién puede ingresar a una zona roja con corriente, energía expuesta o estructura inestable?',o:['Cualquier brigada con chaleco','Sólo personal especializado y autorizado por el mando','Familiares de personas evacuadas','Prensa sin acompañamiento'],a:1,r:'La zona roja requiere control estricto por el nivel de peligro.'},
  {q:'¿Qué evita principalmente la trazabilidad de ayuda humanitaria?',o:['El uso de refugios','Duplicidad, pérdida de insumos y entregas sin respaldo','La participación de voluntarios','La elaboración de EDAN'],a:1,r:'Folios, lotes, responsables, receptores y evidencia permiten conciliar cada apoyo.'},
  {q:'¿Cómo debe priorizarse la distribución de ayuda?',o:['Por orden de llegada exclusivamente','Con EDAN, población expuesta, aislamiento, refugios y servicios interrumpidos','Por presión en redes sociales','Por cercanía al centro de acopio solamente'],a:1,r:'La prioridad debe responder a necesidad validada y riesgo territorial.'},
  {q:'¿Qué debe contener un mensaje naranja?',o:['Sólo el nombre del fenómeno','Sectores en riesgo, rutas, refugios listos, población vulnerable e instrucciones específicas','Únicamente una fotografía','La promesa de que no habrá afectaciones'],a:1,r:'Naranja prepara protección y posible evacuación con información focalizada.'},
  {q:'¿Cuándo termina operativamente una emergencia?',o:['En cuanto deja de llover','Cuando baja el agua, sin más verificaciones','Después del retorno seguro, saneamiento, EDAN, restablecimiento y cierre documentado','Al cerrar el Consejo sin acta'],a:2,r:'La continuidad se mantiene hasta recuperar condiciones seguras y documentar pendientes.'},
  {q:'¿Por qué la energía es un servicio crítico transversal?',o:['Sólo ilumina oficinas','Sostiene cárcamos, hospitales, telecomunicaciones, agua y refugios','Sustituye la movilidad','Elimina la necesidad de combustible'],a:1,r:'La falla eléctrica puede interrumpir múltiples servicios esenciales simultáneamente.'},
  {q:'Para anticipar una creciente, ¿qué dato suele ser más útil que una lectura aislada?',o:['La tendencia y velocidad de ascenso','El color del río','La hora del amanecer','El número de fotografías disponibles'],a:0,r:'La tendencia permite estimar evolución y ventana de decisión.'},
  {q:'Una tormenta local intensa puede afectar Villahermosa antes de cualquier desbordamiento. ¿En qué plazo puede ocurrir?',o:['Sólo después de 72 horas','En una a tres horas','Nunca antes de un río alto','Únicamente en temporada de frentes fríos'],a:1,r:'La respuesta pluvial urbana puede ser muy rápida.'},
  {q:'¿Qué lección comparten los eventos de referencia 2007 y 2020?',o:['Que un solo factor explica toda la emergencia','Que la combinación de humedad persistente, cuencas saturadas, ríos altos y remanso puede producir afectación regional','Que los refugios no son necesarios','Que las lluvias locales no importan'],a:1,r:'Los eventos compuestos aumentan duración, simultaneidad y presión sobre capacidades.'},
  {q:'¿Por qué deben vigilarse antiguos cauces aunque parezcan secos?',o:['Porque pueden llenarse por remanso, escurrimiento o conexión hidráulica','Porque siempre son carreteras','Porque reducen automáticamente la exposición','Porque no tienen relación con inundaciones'],a:0,r:'Los antiguos cauces pueden reactivarse o almacenar agua en eventos intensos.'},
  {q:'¿Por qué debe considerarse la población flotante en escenarios diurnos?',o:['Porque modifica el pronóstico meteorológico','Porque puede requerir orientación, evacuación, salud, transporte y refugio aunque no figure como residente','Porque sólo usa redes sociales','Porque reemplaza al censo municipal'],a:1,r:'Mercados, hospitales, terminales y escuelas concentran personas no residentes.'},
  {q:'Una compuerta cerrada evita retorno del río, pero comienza a acumularse agua urbana. ¿Qué debe ocurrir?',o:['Abrirla sin verificar el nivel receptor','Activar bombeo y vigilar cárcamos y descarga','Suspender la comunicación','Cerrar todos los refugios'],a:1,r:'Al cerrar la descarga por gravedad, el sistema depende del bombeo.'},
  {q:'¿Cuándo deben probarse compuertas y mecanismos, además del mantenimiento estacional?',o:['Sólo después de una falla','Ante alerta naranja o condición de operación inminente','Una vez cada diez años','Después del retorno de la población'],a:1,r:'El mantenimiento preventivo incluye prueba antes de temporada y ante alertas operativas.'},
  {q:'¿Cuál es el mejor indicador de que una lección aprendida se cerró?',o:['Que fue comentada en una reunión','Que existe acción correctiva con responsable, plazo, evidencia y verificación','Que se guardó una fotografía','Que pasó la temporada de lluvias'],a:1,r:'La mejora exige trazabilidad y comprobación del resultado.'},
  {q:'Tres comisiones reportan cifras distintas de evacuados. ¿Qué corrección es más sólida?',o:['Elegir la cifra mayor','Definir un formato único, fuente responsable, hora de corte y conciliación periódica','Dejar de reportar','Publicar las tres cifras sin explicación'],a:1,r:'La estandarización y conciliación preservan una sola situación operativa.'},
  {q:'Durante el descenso del agua, una vialidad parece transitable pero existe socavación no evaluada. ¿Qué decisión procede?',o:['Reabrirla para reducir tráfico','Mantener cierre hasta inspección y evidencia de seguridad','Permitir sólo vehículos particulares','Eliminar el punto de control'],a:1,r:'La reapertura debe considerar daño estructural y riesgo residual, no sólo ausencia de agua.'}
];

const $ = (sel, root=document) => root.querySelector(sel);
const $$ = (sel, root=document) => [...root.querySelectorAll(sel)];
const STORAGE_KEY = 'centro2026_interactive_state_v1';
let state = loadState();
let currentView = 'home';
let examSession = null;

function defaultState(){return {started:false,completed:{},exercisePassed:{},examPassed:false,bestScore:0,certificate:{name:'',institution:'',folio:''}}}
function loadState(){try{return {...defaultState(),...JSON.parse(localStorage.getItem(STORAGE_KEY)||'{}')}}catch(e){return defaultState()}}
function saveState(){localStorage.setItem(STORAGE_KEY,JSON.stringify(state));updateProgress()}
function toast(msg){const el=$('#toast');el.textContent=msg;el.classList.add('show');setTimeout(()=>el.classList.remove('show'),2600)}
function completedCount(){return COURSE.modules.filter(m=>state.completed[m.id]).length}
function updateProgress(){
  const c=completedCount(), pct=Math.round((c/COURSE.modules.length)*100);
  $('#progressText').textContent=`${pct}%`;$('#progressBar').style.width=`${pct}%`;$('#progressDetail').textContent=`${c} de ${COURSE.modules.length} módulos`;
  renderNav();
}

function renderNav(){
  const nav=$('#navMenu'); if(!nav)return;
  nav.innerHTML=`<button class="nav-item ${currentView==='home'?'active':''}" data-view="home"><span class="nav-index">⌂</span><span class="nav-label">Inicio</span></button>
  <div class="nav-section">Módulos</div>`+COURSE.modules.map(m=>`<button class="nav-item ${currentView===`module-${m.id}`?'active':''} ${state.completed[m.id]?'done':''}" data-module="${m.id}"><span class="nav-index">${state.completed[m.id]?'✓':m.id}</span><span class="nav-label">${m.short}</span></button>`).join('')+
  `<div class="nav-section">Evaluación</div>
   <button class="nav-item ${currentView==='exam'?'active':''} ${completedCount()<10?'locked':''}" data-view="exam"><span class="nav-index">20</span><span class="nav-label">Examen final</span></button>
   <button class="nav-item ${currentView==='certificate'?'active':''} ${!state.examPassed?'locked':''}" data-view="certificate"><span class="nav-index">★</span><span class="nav-label">Diploma</span></button>
   <button class="nav-item ${currentView==='resources'?'active':''}" data-view="resources"><span class="nav-index">i</span><span class="nav-label">Recursos y uso</span></button>`;
  $$('[data-view]',nav).forEach(b=>b.addEventListener('click',()=>navigate(b.dataset.view)));
  $$('[data-module]',nav).forEach(b=>b.addEventListener('click',()=>navigate(`module-${b.dataset.module}`)));
}

function navigate(view){
  currentView=view; if(window.innerWidth<=980){$('#sidebar').classList.remove('open');$('#sidebarBackdrop')?.classList.remove('show');$('#menuBtn')?.setAttribute('aria-expanded','false')} window.scrollTo({top:0,behavior:'smooth'});
  if(view==='home') renderHome();
  else if(view.startsWith('module-')) renderModule(Number(view.split('-')[1]));
  else if(view==='exam') renderExam();
  else if(view==='certificate') renderCertificate();
  else renderResources();
  renderNav(); setTimeout(()=>$('#mainContent').focus(),50);
}

function setHeader(title,subtitle){$('#viewTitle').textContent=title;$('#viewSubtitle').textContent=subtitle}
function renderHome(){
  setHeader('Inicio','Plan Integral de Emergencia Centro 2026');
  const c=completedCount();
  $('#mainContent').innerHTML=`
    <section class="hero">
      <div class="hero-copy"><p class="eyebrow">Guía interactiva explicada paso a paso</p><h1>Preparar, decidir y actuar antes de que el riesgo se convierta en desastre.</h1>
      <p>Producto único de aprendizaje basado en el Plan Integral de Emergencia del Municipio de Centro. Diseñado para personal operativo y de apoyo, incluso sin formación técnica especializada.</p>
      <div class="hero-badges"><span class="badge">10 módulos</span><span class="badge">Ejercicios intermedios</span><span class="badge">Examen aleatorio de 20 preguntas</span><span class="badge">Diploma descargable</span></div>
      <div><button id="homeStartBtn" class="btn btn-primary btn-large">${c?'Continuar capacitación':'Comenzar módulo 1'}</button></div></div><div class="hero-image" aria-label="Portada del Plan"></div>
    </section>
    <section class="stats-grid">
      <div class="stat-card"><strong>${c}/10</strong><span>Módulos completados</span></div>
      <div class="stat-card"><strong>${state.bestScore}%</strong><span>Mejor resultado del examen</span></div>
      <div class="stat-card"><strong>${COURSE.passScore}%</strong><span>Calificación mínima</span></div>
      <div class="stat-card"><strong>${state.examPassed?'Disponible':'Bloqueado'}</strong><span>Diploma</span></div>
    </section>
    <section class="section"><div class="section-header"><div><h2>Ruta de aprendizaje</h2><p>Cada módulo explica el tema con lenguaje claro, apoyos visuales escalonados e interacciones sencillas de práctica.</p></div></div><div class="module-grid">${COURSE.modules.map(moduleCard).join('')}</div></section>
    <section class="section content-grid"><article class="content-card"><h2>Cómo usar la guía</h2><p>La guía está redactada como un solo producto didáctico. Primero lee el desarrollo del tema, después practica con las interacciones, resuelve la actividad principal y continúa con el siguiente módulo. El examen se habilita al terminar los diez módulos. Cada intento selecciona 20 preguntas de un banco mayor y reorganiza las opciones.</p><div class="callout success"><strong>Avance automático.</strong> Puedes cerrar el navegador y continuar después en el mismo dispositivo.</div></article><div class="gallery"><figure class="gallery-item portrait"><button class="zoom-image" data-src="assets/img/image2.webp" data-caption="Cómo usar el Plan de Emergencia"><img src="assets/img/image2.webp" alt="Cómo usar el Plan de Emergencia"></button><figcaption class="gallery-caption">Secuencia general: monitoreo, identificación del riesgo, coordinación, alertamiento, operación y recuperación.</figcaption></figure></div></section>`;
  $('#homeStartBtn').addEventListener('click',()=>navigate(`module-${Math.min(c+1,10)}`));
  $$('.module-card').forEach(c=>c.addEventListener('click',()=>navigate(`module-${c.dataset.module}`)));
  bindImages();
}
function moduleCard(m){return `<article class="module-card" data-module="${m.id}" tabindex="0"><span class="module-num">${m.id}</span><h3>${m.title}</h3><p>${m.objective}</p><div class="module-meta"><span>${m.duration} · ${m.chapters}</span><span class="status-pill ${state.completed[m.id]?'done':''}">${state.completed[m.id]?'Completado':'Pendiente'}</span></div></article>`}

function renderModule(id){
  const m=COURSE.modules.find(x=>x.id===id); if(!m)return;
  setHeader(`Módulo ${m.id}`,m.short);
  $('#mainContent').innerHTML=`
    <header class="module-head"><div><span class="module-kicker">Módulo ${m.id} de 10</span><h1>${m.title}</h1><p>${m.objective}</p></div><span class="chapter-chip">${m.chapters} · ${m.duration}</span></header>
    <div class="callout"><strong>Panorama.</strong> ${m.intro}</div>
    ${renderPedagogicalOpening(m)}
    <section class="section">${m.body}</section>
    ${renderDidacticExpansion(m)}
    ${renderPedagogicalClosing(m)}
    <section id="exerciseContainer" class="exercise"></section>
    <div class="module-footer"><button class="btn btn-outline" id="prevModuleBtn">${id===1?'Volver al inicio':'← Módulo anterior'}</button><div><button class="btn btn-secondary" id="completeModuleBtn" ${state.exercisePassed[id]?'':'disabled'}>${state.completed[id]?'Módulo completado ✓':'Marcar módulo como completado'}</button> <button class="btn btn-primary" id="nextModuleBtn" ${state.completed[id]?'':'disabled'}>${id===10?'Ir al examen':'Siguiente módulo →'}</button></div></div>`;
  renderExercise(m);
  bindImages(); initSpecialInteractions(id);
  $('#prevModuleBtn').addEventListener('click',()=>id===1?navigate('home'):navigate(`module-${id-1}`));
  $('#completeModuleBtn').addEventListener('click',()=>{state.completed[id]=true;saveState();toast('Módulo completado');renderModule(id)});
  $('#nextModuleBtn').addEventListener('click',()=>id===10?navigate('exam'):navigate(`module-${id+1}`));
}
function galleryItem(im,i){const portrait=['image1.webp','image2.webp','image5.webp','image7.webp','image8.webp','image9.webp','image10.webp','image23.webp','image26.webp'].includes(im[0]);return `<figure class="gallery-item ${portrait?'portrait':''}"><button class="zoom-image" data-src="assets/img/${im[0]}" data-caption="${escapeHtml(im[1])}"><img loading="lazy" src="assets/img/${im[0]}" alt="${escapeHtml(im[1])}"></button><figcaption class="gallery-caption">${im[1]}</figcaption></figure>`}
function escapeHtml(s){return String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]))}




function renderPedagogicalOpening(m){
  const p=MODULE_PEDAGOGY[m.id]||{};
  const outcomes=(p.outcomes||[]).map(x=>`<li>${x}</li>`).join('');
  return `<section class="section pedagogy-opening"><article class="content-card"><h2>Al finalizar este módulo podrás</h2><ul class="outcome-list">${outcomes}</ul></article><article class="content-card scenario-card"><h2>Situación de partida</h2><p>${p.scenario||''}</p></article></section>`;
}
function renderPedagogicalClosing(m){
  const p=MODULE_PEDAGOGY[m.id]||{};
  const closing=(p.closing||[]).map((x,i)=>`<div class="closing-item"><span>${i+1}</span><p>${x}</p></div>`).join('');
  return `<section class="section content-grid"><article class="content-card"><h2>Secuencia operativa del módulo</h2><div class="closing-list">${closing}</div></article><aside class="content-card common-error"><h2>Error que debe evitarse</h2><p>${p.common||''}</p></aside></section>`;
}

function renderDidacticExpansion(m){
  const d=DIDACTIC[m.id]||{};
  const intro=(d.explain||[]).map(p=>`<p>${p}</p>`).join('');
  const steps=(d.steps||[]).length?`<section class="section content-card"><h2>Cómo tomar la decisión</h2><div class="learning-steps">${d.steps.map((x,i)=>`<div class="learning-step"><div class="step-badge">${i+1}</div><div><h3>${x[0]}</h3><p>${x[1]}</p></div></div>`).join('')}</div></section>`:'';
  const visuals=(m.images&&m.images.length)?`<section class="section"><div class="section-header"><div><h2>Aplicación visual</h2><p>Los esquemas siguientes explican relaciones y decisiones incluidas en el Plan.</p></div></div><div class="stacked-visuals">${m.images.map((im,i)=>stackedFigure(im,(d.visualPrompts||[])[i]||'Contenido de apoyo vinculado con la decisión operativa del módulo.',i)).join('')}</div></section>`:'';
  const keys=(d.keys||[]).length?`<section class="section content-card"><h2>Principios operativos</h2><ul class="remember-list">${d.keys.map(x=>`<li>${x}</li>`).join('')}</ul></section>`:'';
  const micro=(d.microHtml)?`<section class="section"><div class="section-header"><div><h2>${d.microTitle||'Interacción 1'}</h2><p>Selecciona las condiciones del escenario y revisa la respuesta operativa.</p></div></div>${d.microHtml}</section>`:'';
  const micro2=(d.micro2Html)?`<section class="section"><div class="section-header"><div><h2>${d.micro2Title||'Interacción 2'}</h2><p>Compara una segunda variante y observa cómo cambia la decisión.</p></div></div>${d.micro2Html}</section>`:'';
  return `<section class="section content-card"><h2>Comprender el tema</h2>${intro}</section>${steps}${visuals}${keys}${micro}${micro2}`;
}
function stackedFigure(im,prompt,i){
  const portrait=['image1.webp','image2.webp','image5.webp','image7.webp','image8.webp','image9.webp','image10.webp','image23.webp','image26.webp'].includes(im[0]);
  return `<article class="content-card visual-step ${portrait?'visual-portrait':''}"><figure class="single-figure ${portrait?'portrait':''}"><button class="zoom-image" data-src="assets/img/${im[0]}" data-caption="${escapeHtml(im[1])}"><img loading="lazy" src="assets/img/${im[0]}" alt="${escapeHtml(im[1])}"></button></figure><div class="visual-step-text"><h3>${im[1]}</h3><p>${prompt}</p></div></article>`
}

function renderExercise(m){
  const ex=m.exercise, root=$('#exerciseContainer');
  root.innerHTML=`<span class="module-kicker">Comprobación de aprendizaje</span><h2>${ex.title}</h2><p class="exercise-instructions">${ex.prompt}</p><div id="exerciseBody"></div><div class="exercise-actions"><button id="checkExercise" class="btn btn-primary">Comprobar respuesta</button>${state.exercisePassed[m.id]?'<span class="status-pill done">Actividad acreditada ✓</span>':''}</div><div id="exerciseFeedback" class="exercise-feedback"></div>`;
  const body=$('#exerciseBody');
  if(ex.type==='multiselect') body.innerHTML=`<div class="option-list">${ex.options.map(o=>`<label class="option"><input type="checkbox" value="${o[0]}"><span>${o[1]}</span></label>`).join('')}</div>`;
  if(ex.type==='casegrid') body.innerHTML=`<div class="case-grid">${ex.cases.map(c=>`<div class="case-row"><div>${c[1]}</div><select data-case="${c[0]}"><option value="">Selecciona…</option>${ex.choices.map(ch=>`<option value="${ch[0]}">${ch[1]}</option>`).join('')}</select></div>`).join('')}</div>`;
  if(ex.type==='matching') body.innerHTML=`<div class="match-list">${ex.pairs.map(p=>`<div class="match-row"><div>${p[1]}</div><select data-pair="${p[0]}"><option value="">Selecciona…</option>${ex.choices.map(ch=>`<option value="${ch[0]}">${ch[1]}</option>`).join('')}</select></div>`).join('')}</div>`;
  if(ex.type==='sequence'){
    const shuffled=[...ex.items].sort(()=>Math.random()-.5);
    body.innerHTML=`<div class="sequence-list">${shuffled.map(it=>`<div class="sequence-item" draggable="true" data-id="${it[0]}"><span class="drag-handle">↕</span><span>${it[1]}</span><span class="sequence-controls"><button type="button" data-up aria-label="Subir">↑</button><button type="button" data-down aria-label="Bajar">↓</button></span></div>`).join('')}</div>`;
    bindSequence(body);
  }
  $('#checkExercise').addEventListener('click',()=>checkExercise(m));
}
function bindSequence(root){
  let dragged=null;
  $$('.sequence-item',root).forEach(item=>{
    item.addEventListener('dragstart',()=>{dragged=item;item.style.opacity='.5'});item.addEventListener('dragend',()=>{item.style.opacity='1';dragged=null});
    item.addEventListener('dragover',e=>e.preventDefault());item.addEventListener('drop',e=>{e.preventDefault();if(dragged&&dragged!==item){const list=item.parentNode;const rect=item.getBoundingClientRect();list.insertBefore(dragged,e.clientY<rect.top+rect.height/2?item:item.nextSibling)}});
    $('[data-up]',item).addEventListener('click',()=>{const p=item.previousElementSibling;if(p)item.parentNode.insertBefore(item,p)});
    $('[data-down]',item).addEventListener('click',()=>{const n=item.nextElementSibling;if(n)item.parentNode.insertBefore(n,item)});
  })
}
function checkExercise(m){
  const ex=m.exercise, root=$('#exerciseContainer'); let ok=false;
  if(ex.type==='multiselect'){const got=$$('input:checked',root).map(x=>x.value).sort();ok=JSON.stringify(got)===JSON.stringify([...ex.correct].sort())}
  if(ex.type==='casegrid') ok=ex.cases.every(c=>$(`[data-case="${c[0]}"]`,root).value===c[2]);
  if(ex.type==='matching') ok=ex.pairs.every(p=>$(`[data-pair="${p[0]}"]`,root).value===p[2]);
  if(ex.type==='sequence') ok=JSON.stringify($$('.sequence-item',root).map(x=>x.dataset.id))===JSON.stringify(ex.correct);
  const fb=$('#exerciseFeedback');fb.className=`exercise-feedback show ${ok?'ok':'bad'}`;fb.innerHTML=`<strong>${ok?'Correcto.':'Revisa la decisión.'}</strong> ${ex.explanation}`;
  if(ok){state.exercisePassed[m.id]=true;saveState();$('#completeModuleBtn').disabled=false;toast('Actividad acreditada')}
}



function initSpecialInteractions(id){
  if(id===1){const t=$('#sectorType'),v=$('#sectorVuln'),r=$('#sectorResult'); if(t&&v&&r){const calc=()=>{const sector=t.value,cond=v.value;const texts={urbano:'Prioriza drenaje, cárcamos, pasos deprimidos, mensajes de movilidad y protección de hospitales o mercados cercanos.',ribera:'Prioriza monitoreo de nivel, alertamiento comunitario, transporte de evacuación y vigilancia de erosión o aislamiento.',movilidad:'Prioriza orientación a población flotante, cierres preventivos, rutas alternas y comunicación con terminales, escuelas y centros comerciales.',aislable:'Prioriza evacuación anticipada de población vulnerable, transporte, refugio asociado y control del acceso una vez cerrada la ruta.'};const extra={vuln:'Agrega censo preventivo, apoyo asistido y comunicación directa con cuidadores o delegados.',drenaje:'Agrega inspección de infraestructura, respaldo eléctrico y personal de operación.',mixta:'Combina ambas líneas de acción y considera alistamiento preventivo con mayor anticipación.'};r.innerHTML=`<strong>Prioridad sugerida</strong><br>${texts[sector]} ${extra[cond]}`};t.addEventListener('change',calc);v.addEventListener('change',calc);calc();} const rep=$('#sectorReport'), rr=$('#sectorReportResult'); if(rep&&rr){const calc2=()=>{const map={calle:'Lectura probable: problema de desalojo urbano. Revisa drenaje, coladeras, cárcamos y movilidad segura.',ribera:'Lectura probable: creciente con riesgo de aislamiento. Vigila tendencia, rutas y población vulnerable.',terminal:'Lectura probable: alta exposición por población flotante. Refuerza orientación, cierres y rutas alternas.',adultos:'Lectura probable: vulnerabilidad alta. Considera evacuación asistida y enlace con familiares o vecinos.'};rr.innerHTML=`<strong>Interpretación del reporte</strong><br>${map[rep.value]}`};rep.addEventListener('change',calc2);calc2();}}
  
if(id===2){
  const labs=$$('.lab');
  labs.forEach(lab=>{
    const a=lab.querySelector('#rainAmount'),h=lab.querySelector('#rainHours'),ao=lab.querySelector('#rainAmountOut'),ho=lab.querySelector('#rainHoursOut'),r=lab.querySelector('#rainResult');
    if(a&&h&&ao&&ho&&r){const calc=()=>{const mm=+a.value,hrs=+h.value,intensity=mm/hrs;ao.textContent=`${mm} mm`;ho.textContent=`${hrs} h`;let label='Monitoreo ordinario',action='Revisar puntos recurrentes.';if(mm>250){label='Escenario extraordinario';action='Mando unificado y apoyo estatal/federal.'}else if(mm>150){label='Lluvia torrencial';action='Alerta roja focalizada, refugios y evacuación preventiva.'}else if(mm>75||intensity>35){label='Activación operativa';action='Consejo Municipal, cierres, bombas y valoración de evacuación.'}else if(mm>50||intensity>20){label='Alistamiento preventivo';action='Prealerta de refugios, cuadrillas y verificación de cárcamos.'}else if(mm>25){label='Vigilancia reforzada';action='Monitorear vialidades y drenaje.'}r.innerHTML=`<strong>${label}</strong><br>Intensidad media: ${intensity.toFixed(1)} mm/h. ${action}`};a.addEventListener('input',calc);h.addEventListener('input',calc);calc();}
    const c=lab.querySelector('#weatherContext'),cr=lab.querySelector('#weatherContextResult');
    if(c&&cr){const calc2=()=>{const map={normal:'Con drenaje operando y ríos estables, la decisión puede ser más gradual y concentrada en vigilancia.',saturado:'Con suelo saturado, una lluvia adicional tiene más probabilidad de producir encharcamientos y anegamientos rápidos.',riosaltos:'Con ríos altos, la descarga por gravedad se complica y la dependencia de bombeo aumenta.',energia:'Si hay riesgo de falla eléctrica, la preparación debe incluir verificación de plantas y personal de operación.'};cr.innerHTML=`<strong>Lectura del contexto</strong><br>${map[c.value]}`};c.addEventListener('change',calc2);calc2();}
  });
}
if(id===3){const s=$('#windowSignal'),r=$('#windowResult'); if(s&&r){const map={local:['0–3 horas','Prioriza vialidades, drenaje, cárcamos, pasos deprimidos, mensajes de movilidad y reportes rápidos por sector.'],serrana:['Horas a 1 día','Prioriza tendencia aguas arriba, avisos sectoriales, refugios preidentificados y transporte para evacuación preventiva.'],rios:['Operación prolongada','Prioriza bombeo, compuertas, protección de infraestructura crítica y seguimiento del remanso.'],remanso:['Ventana corta para accesos vulnerables','Prioriza rutas, puntos de control, evacuación vulnerable y coordinación intersectorial.']};const calc=()=>r.innerHTML=`<strong>Ventana principal: ${map[s.value][0]}</strong><br>${map[s.value][1]}`;s.addEventListener('change',calc);calc();} const t=$('#timeStage'),tr=$('#timeStageResult'); if(t&&tr){const calc2=()=>{const map={h24:'Producto esperado: reporte preventivo, verificación de pronóstico y mapa preliminar de sectores.',h12:'Producto esperado: responsables por comisión, prioridades territoriales y alistamiento preventivo.',h6:'Producto esperado: recursos preposicionados, refugios listos y rutas revisadas.',h0:'Producto esperado: operación sectorial, evacuación vulnerable y reportes horarios.'};tr.innerHTML=`<strong>Acción más útil en este momento</strong><br>${map[t.value]}`};t.addEventListener('change',calc2);calc2();}}
  
if(id===4){const s=$('#protectedZone'),r=$('#protectedZoneResult'); if(s&&r){const map={grijalva:'Protege el frente urbano oriental y sectores como malecones, La Manga y Gaviotas. Deben cuidarse ventanas, filtraciones, socavación, taludes y puntos bajos.',carrizal:'Protege flancos norte y poniente. Deben cuidarse bordos, muros, tablaestacas, sobreelevaciones y conexiones que permitan ingreso lateral.',intrabordo:'Protege por bombeo cuando el río está alto. Deben cuidarse compuertas, charnelas, rejillas, energía, combustible, bombas y bitácora de operación.',alivio:'Reduce presión hidráulica al repartir excedentes. Deben cuidarse entradas, salidas, puentes, bordos laterales, azolve, vegetación y rellenos.'};const calc=()=>r.innerHTML=`<strong>Lectura operativa</strong><br>${map[s.value]}`;s.addEventListener('change',calc);calc();} const p=$('#protectedFinding'),pr=$('#protectedFindingResult'); if(p&&pr){const calc2=()=>{const map={filtracion:'Indica posible pérdida de estabilidad. Debe acordonarse, documentarse e inspeccionarse de inmediato.',retorno:'Indica que el agua puede estar ingresando desde el río al sistema urbano. Debe cerrarse la estructura y activarse bombeo y vigilancia.',rejilla:'Reduce la capacidad de desalojo y puede provocar anegamiento interno. Debe despejarse y verificarse aguas arriba y aguas abajo.',energia:'Compromete la operación del cárcamo. Deben verificarse planta, combustible, personal y tiempo de autonomía.'};pr.innerHTML=`<strong>Acción sugerida</strong><br>${map[p.value]}`};p.addEventListener('change',calc2);calc2();}}
if(id===5){
  $$('.lab').forEach(lab=>{
    const s=lab.querySelector('#alertScenario'),r=lab.querySelector('#alertResult');
    if(s&&r){const calc=()=>{const map={yellow:['Amarillo','Vigilancia reforzada y alistamiento preventivo.'],orange:['Naranja sectorial','Preposicionar recursos, alistar refugios y preparar evacuación.'],red:['Rojo sectorial','Ejecutar evacuación, refugios, rescate y EDAN inicial.'],down:['Rojo a Naranja','Mantener operación y saneamiento; aún no corresponde regresar a verde.']};r.innerHTML=`<strong>${map[s.value][0]}</strong><br>${map[s.value][1]}`};s.addEventListener('change',calc);calc();}
    const sa=lab.querySelector('#sectorAlert'),sar=lab.querySelector('#sectorAlertResult');
    if(sa&&sar){const calc2=()=>{const map={vig:'Color sugerido: Amarillo. Todavía no hay afectación confirmada, pero sí vigilancia y recorridos reforzados.',pre:'Color sugerido: Naranja. Hay exposición relevante y debe prepararse la evacuación o el refugio.',evac:'Color sugerido: Rojo. Ya existe necesidad de evacuación, refugio o atención directa.',desc:'Color sugerido: Naranja o Amarillo según verificación. La mejora debe confirmarse antes de desescalar.'};sar.innerHTML=`<strong>Lectura rápida del semáforo</strong><br>${map[sa.value]}`};sa.addEventListener('change',calc2);calc2();}
  });
}
if(id===6){const s=$('#commissionSelect'),r=$('#commissionResult'); if(s&&r){const map={seguridad:'Primer producto: puntos de control, perímetros, rutas restringidas, personal asignado y reporte de incidentes de seguridad.',refugios:'Primer producto: listado de refugios disponibles, capacidad útil, responsables, llaves, servicios y ruta segura de acceso.',salud:'Primer producto: unidades de salud de referencia, brigadas, insumos críticos, población prioritaria y criterios de traslado.',comsocial:'Primer producto: mensaje oficial sectorizado, canales de difusión, vocería, frecuencia de actualización y desmentido de rumores.',logistica:'Primer producto: inventario disponible, necesidades validadas, rutas de abastecimiento, punto de recepción y control de evidencia.'};const calc=()=>r.innerHTML=`<strong>Primer corte esperado</strong><br>${map[s.value]}`;s.addEventListener('change',calc);calc();} const sn=$('#supportNeed'),sr=$('#supportNeedResult'); if(sn&&sr){const calc2=()=>{const map={lancha:'La solicitud debe indicar dónde se requiere, cuántas personas se busca trasladar, quién recibirá el recurso y cuál es la prioridad.',bomba:'Debe indicar ubicación, tipo de afectación, capacidad requerida, tiempo estimado de operación y responsable de recepción.',alimentos:'Debe indicar población objetivo, cantidad, sitio de entrega, responsable, evidencia y si se trata de refugio o comunidad.',seguridad2:'Debe indicar punto de despliegue, motivo, horario, riesgo asociado y enlace local.'};sr.innerHTML=`<strong>Información que no debe faltar</strong><br>${map[sn.value]}`};sn.addEventListener('change',calc2);calc2();}}
  if(id===7){const s=$('#accessScenario'),r=$('#accessResult'); if(s&&r){const map={roja:'Define zona roja: acceso sólo a personal especializado, rescate y control estricto del perímetro.',amarilla:'Define zona amarilla: brigadas con EPP, limpieza, evacuación asistida, EDAN inicial y acceso controlado.',verde:'Define zona verde: logística, punto de transferencia, recepción de apoyo y orientación a población.'};const calc=()=>r.innerHTML=`<strong>Perímetro recomendado</strong><br>${map[s.value]}`;s.addEventListener('change',calc);calc();} const e=$('#evacDecision'),er=$('#evacDecisionResult'); if(e&&er){const calc2=()=>{const map={ruta:'Sí conviene considerar evacuación preventiva. La pérdida de la ruta es un criterio fuerte de anticipación.',vuln2:'Sí conviene valorar evacuación o traslado asistido, porque la capacidad de autoevacuación es limitada.',corriente:'Sí conviene restringir acceso y evacuar si la permanencia incrementa el riesgo.',seguimiento:'Por ahora conviene seguimiento y preparación, siempre que la ruta siga segura y la afectación sea menor.'};er.innerHTML=`<strong>Criterio sugerido</strong><br>${map[e.value]}`};e.addEventListener('change',calc2);calc2();}}
  if(id===8){const s=$('#shelterProfile'),r=$('#shelterResult'); if(s&&r){const map={adultomayor:'Registro prioritario, apoyo de movilidad, área accesible, valoración médica básica y seguimiento de medicamentos.',familia:'Asignar espacio familiar, higiene infantil, control sanitario, orientación y reunificación segura si aplica.',embarazo:'Valoración médica temprana, ubicación prioritaria, acceso a sanitarios, hidratación y referencia obstétrica si se requiere.',discapacidad:'Verificar accesibilidad, ayudas técnicas, medicamento de control, acompañamiento y seguimiento continuo.'};const calc=()=>r.innerHTML=`<strong>Atención diferenciada inmediata</strong><br>${map[s.value]}`;s.addEventListener('change',calc);calc();} const so=$('#shelterOpen'),sor=$('#shelterOpenResult'); if(so&&sor){const calc2=()=>{const map={seguro:'Sí es viable abrirlo, porque reúne condiciones básicas de seguridad y operación.',anegado:'No es recomendable abrirlo así; el acceso inseguro compromete toda la operación.',sinagua:'Aún no conviene abrirlo sin resolver servicios y responsables.',escuela:'Sí puede valorarse si la ruta es segura, hay responsables y se acondiciona correctamente.'};sor.innerHTML=`<strong>Decisión sugerida</strong><br>${map[so.value]}`};so.addEventListener('change',calc2);calc2();}}
  if(id===9){const s=$('#logisticsCase'),r=$('#logisticsResult'); if(s&&r){const map={aislada:'Alta prioridad por aislamiento y falta de agua segura. Validar acceso, transporte y evidencia de entrega.',refugio:'Prioridad alta por concentración de personas. Consolidar faltantes, lotes y responsable de recepción.',urbana:'Prioridad media. Confirmar tirantes, duración y afectación real antes de asignar apoyo extraordinario.',hospital:'Máxima prioridad por continuidad de servicios esenciales e impacto en población dependiente.'};const calc=()=>r.innerHTML=`<strong>Lectura logística</strong><br>${map[s.value]}`;s.addEventListener('change',calc);calc();} const m=$('#riskMessage'),mr=$('#riskMessageResult'); if(m&&mr){const calc2=()=>{const map={amarillo:'El mensaje debe pedir vigilancia, preparación familiar y atención a actualizaciones oficiales.',naranja:'El mensaje debe indicar sectores en riesgo, preparación de traslado, refugios listos y medidas preventivas.',rojo:'El mensaje debe ordenar acciones inmediatas: evacuación, rutas seguras, refugios habilitados y canales de apoyo.',retorno:'El mensaje debe explicar criterios de retorno, limpieza segura, riesgos residuales y canales de seguimiento.'};mr.innerHTML=`<strong>Contenido clave del mensaje</strong><br>${map[m.value]}`};m.addEventListener('change',calc2);calc2();}}
  if(id===10){const ti=$('#tabletopInject'),tir=$('#tabletopInjectResult'); if(ti&&tir){const calc0=()=>{const map={carcamo:'Evalúa coordinación entre operación hidráulica, energía, protección civil, comunicación y sectores afectados. Producto esperado: condición del cárcamo, respaldo disponible, zona de influencia y decisión de alertamiento.',ruta:'Evalúa anticipación, transporte, seguridad, evacuación y refugios. Producto esperado: ruta alterna, población prioritaria, hora de traslado y control de accesos.',refugio:'Evalúa registro, capacidad, logística, salud y apertura de inmuebles alternos. Producto esperado: ocupación validada, faltantes y decisión de expansión.',rumor:'Evalúa verificación, vocería y comunicación del riesgo. Producto esperado: confirmación técnica, mensaje oficial y control del rumor.',comunicacion:'Evalúa redundancia de enlaces y continuidad de mando. Producto esperado: canal alterno, punto de reporte y frecuencia de contacto.'};tir.innerHTML=`<strong>Qué permite evaluar</strong><br>${map[ti.value]}`};ti.addEventListener('change',calc0);calc0();} const ce=$('#closeEvent'),cer=$('#closeEventResult'); if(ce&&cer){const calc2=()=>{const map={agua:'Aún no conviene cerrar el evento. Falta verificar servicios, seguridad y riesgos residuales.',rutas:'Puede iniciarse el cierre gradual si la evaluación confirma retorno seguro y pendientes controlados.',riesgo:'No procede cierre: persisten riesgos residuales que pueden provocar nuevos incidentes.',refugios2:'No procede cierre total mientras haya personas en refugios y la atención continúe.'};cer.innerHTML=`<strong>Lectura del cierre operativo</strong><br>${map[ce.value]}`};ce.addEventListener('change',calc2);calc2();}}
}


function renderExam(
){
  setHeader('Examen final','20 preguntas · mínimo 80%');
  if(completedCount()<10){$('#mainContent').innerHTML=`<div class="exam-intro center"><h1>Examen bloqueado</h1><p>Completa los diez módulos y sus actividades intermedias para habilitar la evaluación.</p><button class="btn btn-primary" id="goPending">Ir al siguiente módulo pendiente</button></div>`;$('#goPending').addEventListener('click',()=>{const p=COURSE.modules.find(m=>!state.completed[m.id]);navigate(`module-${p.id}`)});return}
  if(!examSession) examSession=createExamSession();
  $('#mainContent').innerHTML=`<div class="exam-intro"><span class="module-kicker">Evaluación final</span><h1>Examen de aplicación operativa</h1><p>Responde 20 preguntas seleccionadas aleatoriamente. No se evalúa memorización literal, sino la aplicación de criterios del Plan. Calificación mínima: ${COURSE.passScore}%.</p><div class="callout warning"><strong>Antes de enviar:</strong> revisa que todas las preguntas tengan respuesta.</div></div><form id="examForm">${examSession.map((x,i)=>examQuestion(x,i)).join('')}<div class="center"><button class="btn btn-primary btn-large" type="submit">Calificar examen</button> <button class="btn btn-outline" type="button" id="newExam">Generar otra variante</button></div></form><div id="examResult"></div>`;
  $('#examForm').addEventListener('submit',gradeExam);$('#newExam').addEventListener('click',()=>{examSession=createExamSession();renderExam()});
}
function createExamSession(){
  return [...EXAM_BANK].sort(()=>Math.random()-.5).slice(0,20).map((q,idx)=>{
    const choices=q.o.map((text,i)=>({text,correct:i===q.a})).sort(()=>Math.random()-.5);return {...q,choices,id:`q${Date.now()}_${idx}`}
  })
}
function examQuestion(x,i){return `<section class="exam-question" data-q="${i}"><h3><span class="question-number">${i+1}</span>${x.q}</h3><div class="option-list">${x.choices.map((c,j)=>`<label class="option"><input type="radio" name="q${i}" value="${j}"><span>${c.text}</span></label>`).join('')}</div><div class="rationale hidden"></div></section>`}
function gradeExam(e){
  e.preventDefault();const missing=examSession.some((_,i)=>!$(`input[name="q${i}"]:checked`));if(missing){toast('Responde las 20 preguntas antes de calificar');return}
  let score=0;
  examSession.forEach((q,i)=>{const sec=$(`[data-q="${i}"]`),sel=+$(`input[name="q${i}"]:checked`).value;const correct=q.choices[sel].correct;if(correct)score++;$$('.option',sec).forEach((lab,j)=>{if(q.choices[j].correct)lab.classList.add('answer-correct');else if(j===sel&&!correct)lab.classList.add('answer-wrong')});const r=$('.rationale',sec);r.classList.remove('hidden');r.innerHTML=`<strong>${correct?'Correcto':'Respuesta incorrecta'}.</strong> ${q.r}`});
  const pct=Math.round(score/20*100),pass=pct>=COURSE.passScore;state.bestScore=Math.max(state.bestScore,pct);if(pass)state.examPassed=true;saveState();
  $('#examResult').innerHTML=`<div class="exam-result ${pass?'pass':'fail'}"><h2>${pass?'Examen acreditado':'Aún no acreditado'}</h2><p><strong>${score}/20 respuestas correctas · ${pct}%</strong></p><p>${pass?'Ya puedes generar tu diploma.':'Revisa las explicaciones, vuelve a los módulos y presenta otra variante.'}</p>${pass?'<button id="goCertificate" class="btn btn-primary">Generar diploma</button>':'<button id="retryExam" class="btn btn-secondary">Nueva variante</button>'}</div>`;
  if(pass)$('#goCertificate').addEventListener('click',()=>navigate('certificate'));else $('#retryExam').addEventListener('click',()=>{examSession=createExamSession();renderExam()});
  $('#examResult').scrollIntoView({behavior:'smooth'});
}

function renderCertificate(){
  setHeader('Diploma','Acreditación de la guía interactiva');
  if(!state.examPassed){$('#mainContent').innerHTML=`<div class="certificate-panel center"><h1>Diploma bloqueado</h1><p>Debes acreditar el examen final con al menos ${COURSE.passScore}%.</p><button class="btn btn-primary" id="goExam">Ir al examen</button></div>`;$('#goExam').addEventListener('click',()=>navigate('exam'));return}
  $('#mainContent').innerHTML=`<section class="certificate-panel"><span class="module-kicker">Acreditación</span><h1>Genera tu diploma</h1><p>Verifica el nombre y la institución o área. El diploma incluye calificación, fecha y folio único generado en este dispositivo.</p><div class="form-grid"><div class="field"><label for="certName">Nombre completo</label><input id="certName" value="${escapeHtml(state.certificate.name||'')}" placeholder="Nombre de la persona participante"></div><div class="field"><label for="certInstitution">Institución, cargo o área</label><input id="certInstitution" value="${escapeHtml(state.certificate.institution||'')}" placeholder="Ej. Unidad Municipal de Protección Civil"></div></div><div class="certificate-actions"><button id="generateCert" class="btn btn-primary">Generar diploma</button><button id="downloadCert" class="btn btn-secondary" disabled>Descargar PNG</button><button id="printCert" class="btn btn-outline" disabled>Imprimir / guardar como PDF</button></div><div class="certificate-preview"><canvas id="certCanvas" width="1600" height="1131"></canvas></div></section>`;
  drawCertificate('Nombre de la persona participante','Institución / cargo',state.bestScore||80,'PREVISUALIZACIÓN');
  $('#generateCert').addEventListener('click',generateCertificate);$('#downloadCert').addEventListener('click',downloadCertificate);$('#printCert').addEventListener('click',()=>window.print());
}
function generateCertificate(){const name=$('#certName').value.trim(),institution=$('#certInstitution').value.trim();if(name.length<4){toast('Escribe el nombre completo');return}const folio=`CEN-${new Date().getFullYear()}-${Date.now().toString(36).toUpperCase()}`;state.certificate={name,institution,folio};saveState();drawCertificate(name,institution||'Participante',state.bestScore,folio);$('#downloadCert').disabled=false;$('#printCert').disabled=false;toast('Diploma generado')}
function drawCertificate(name,institution,score,folio){
  const c=$('#certCanvas');if(!c)return;const ctx=c.getContext('2d');const W=c.width,H=c.height;
  ctx.clearRect(0,0,W,H);
  const bg=ctx.createLinearGradient(0,0,W,H);bg.addColorStop(0,'#fbfcfd');bg.addColorStop(.55,'#f5f8fa');bg.addColorStop(1,'#eef3f6');ctx.fillStyle=bg;ctx.fillRect(0,0,W,H);
  ctx.strokeStyle='#0b3d67';ctx.lineWidth=16;ctx.strokeRect(34,34,W-68,H-68);ctx.strokeStyle='#b2292e';ctx.lineWidth=4;ctx.strokeRect(58,58,W-116,H-116);ctx.strokeStyle='#c9a95f';ctx.lineWidth=2;ctx.strokeRect(74,74,W-148,H-148);
  // Franjas institucionales y motivo hidráulico discreto.
  ctx.fillStyle='#0b3d67';ctx.fillRect(75,78,W-150,14);ctx.fillStyle='#b2292e';ctx.fillRect(75,H-93,W-150,14);
  ctx.globalAlpha=.07;ctx.strokeStyle='#176ea6';ctx.lineWidth=5;
  for(let y=730;y<930;y+=34){ctx.beginPath();for(let x=90;x<=W-90;x+=20){const yy=y+Math.sin((x+y)/80)*9;if(x===90)ctx.moveTo(x,yy);else ctx.lineTo(x,yy)}ctx.stroke()}
  ctx.globalAlpha=1;
  const logo=new Image();logo.onload=()=>{ctx.drawImage(logo,W/2-330,108,660,164);drawText()};logo.onerror=drawText;logo.src='assets/img/image38.webp';
  function drawText(){
    ctx.textAlign='center';
    ctx.fillStyle='#0b3d67';ctx.font='800 30px Segoe UI, Arial';ctx.fillText('PLAN INTEGRAL DE EMERGENCIA DEL MUNICIPIO DE CENTRO 2026',W/2,315);
    ctx.fillStyle='#b2292e';ctx.font='800 48px Georgia, serif';ctx.fillText('DIPLOMA DE ACREDITACIÓN',W/2,380);
    ctx.fillStyle='#66788a';ctx.font='24px Segoe UI, Arial';ctx.fillText('Se otorga a',W/2,430);
    ctx.fillStyle='#0b3d67';ctx.font='700 62px Georgia, serif';fitText(ctx,name,W-270,62);ctx.fillText(name,W/2,510);
    ctx.strokeStyle='#c9a95f';ctx.lineWidth=3;ctx.beginPath();ctx.moveTo(255,535);ctx.lineTo(W-255,535);ctx.stroke();
    ctx.fillStyle='#173047';ctx.font='25px Segoe UI, Arial';fitTextSimple(ctx,institution,W-360,25);ctx.fillText(institution,W/2,578);
    ctx.fillStyle='#173047';ctx.font='26px Segoe UI, Arial';wrapText(ctx,'Por haber completado los diez módulos y acreditado el examen final de la Guía Interactiva del Plan Integral de Emergencia del Municipio de Centro 2026.',W/2,650,W-340,38);
    ctx.fillStyle='#0b3d67';ctx.font='700 23px Segoe UI, Arial';ctx.fillText('PREPARACIÓN  •  ALERTAMIENTO  •  COORDINACIÓN  •  RESPUESTA  •  RECUPERACIÓN',W/2,760);
    // Sello de calificación.
    ctx.beginPath();ctx.arc(W/2,840,72,0,Math.PI*2);ctx.fillStyle='#0b3d67';ctx.fill();ctx.beginPath();ctx.arc(W/2,840,59,0,Math.PI*2);ctx.strokeStyle='#c9a95f';ctx.lineWidth=4;ctx.stroke();ctx.fillStyle='#fff';ctx.font='800 35px Segoe UI, Arial';ctx.fillText(`${score}%`,W/2,850);ctx.font='700 14px Segoe UI, Arial';ctx.fillText('CALIFICACIÓN',W/2,878);
    const fecha=new Intl.DateTimeFormat('es-MX',{day:'numeric',month:'long',year:'numeric'}).format(new Date());
    ctx.fillStyle='#173047';ctx.font='22px Segoe UI, Arial';ctx.textAlign='left';ctx.fillText(`Fecha de emisión: ${fecha}`,150,955);ctx.textAlign='right';ctx.fillText(`Folio: ${folio}`,W-150,955);
    ctx.strokeStyle='#173047';ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(180,1015);ctx.lineTo(610,1015);ctx.moveTo(990,1015);ctx.lineTo(1420,1015);ctx.stroke();
    ctx.textAlign='center';ctx.fillStyle='#173047';ctx.font='18px Segoe UI, Arial';ctx.fillText('Nombre y firma de la persona participante',395,1048);ctx.fillText('Espacio para validación institucional',1205,1048);
    ctx.fillStyle='#66788a';ctx.font='15px Segoe UI, Arial';ctx.fillText('Acreditación emitida por la guía interactiva. La institución podrá complementar su validación con controles de asistencia e identidad.',W/2,1085);
  }
}
function fitText(ctx,text,maxWidth,start){let size=start;while(size>32){ctx.font=`700 ${size}px Georgia, serif`;if(ctx.measureText(text).width<=maxWidth)break;size--}}
function fitTextSimple(ctx,text,maxWidth,start){let size=start;while(size>17){ctx.font=`${size}px Segoe UI, Arial`;if(ctx.measureText(text).width<=maxWidth)break;size--}}
function wrapText(ctx,text,x,y,maxWidth,lineHeight){const words=text.split(' ');let line='',yy=y;for(const w of words){const test=line+w+' ';if(ctx.measureText(test).width>maxWidth&&line){ctx.fillText(line.trim(),x,yy);line=w+' ';yy+=lineHeight}else line=test}ctx.fillText(line.trim(),x,yy)}
function downloadCertificate(){const c=$('#certCanvas'),a=document.createElement('a');a.download=`Diploma_Centro_2026_${(state.certificate.name||'participante').replace(/\s+/g,'_')}.png`;a.href=c.toDataURL('image/png');a.click()}

function renderResources(){
  setHeader('Recursos y uso','Guía para despliegue y consulta');
  $('#mainContent').innerHTML=`<section class="module-head"><div><span class="module-kicker">Recursos</span><h1>Consulta y despliegue</h1><p>La guía funciona sin conexión una vez descargada. Puede abrirse directamente o publicarse en un servicio web estático.</p></div></section><div class="resource-grid"><article class="resource-card"><h3>Documento fuente</h3><p>Consulta la versión completa del Plan Integral de Emergencia de Centro 2026 en formato PDF.</p><a class="btn btn-secondary" href="documentos/Plan_Integral_Emergencia_Centro_2026.pdf" target="_blank" rel="noopener">Abrir PDF</a></article><article class="resource-card"><h3>Publicación en GitHub Pages</h3><p>Sube todos los archivos de esta carpeta a la raíz del repositorio. Configura Pages para publicar desde la rama principal.</p></article><article class="resource-card"><h3>Uso local</h3><p>Abre <strong>index.html</strong> en Chrome, Edge, Firefox o Safari. El progreso se guarda en el navegador del dispositivo.</p></article></div><section class="section content-card"><h2>Contenido incorporado</h2><p>La guía utiliza las imágenes del documento fuente como apoyos visuales distribuidos de manera escalonada dentro de cada módulo. Incluye menú colapsable, avance persistente, varias interacciones por módulo, ejercicios de decisión, examen aleatorio y diploma descargable.</p><div class="callout warning"><strong>Nota institucional.</strong> El diploma acredita la finalización de esta guía interactiva. Puede complementarse con lista de asistencia, supervisión presencial o mecanismos institucionales de validación.</div></section>`;
}

function bindImages(){$$('.zoom-image').forEach(b=>b.addEventListener('click',()=>{const d=$('#imageModal');$('#modalImage').src=b.dataset.src;$('#modalImage').alt=b.dataset.caption;$('#modalCaption').textContent=b.dataset.caption;d.showModal()}))}
$('#closeImageModal').addEventListener('click',()=>$('#imageModal').close());$('#imageModal').addEventListener('click',e=>{if(e.target===$('#imageModal'))e.target.close()});
const sidebar=$('#sidebar'),appShell=$('.app-shell'),sidebarBackdrop=$('#sidebarBackdrop'),menuBtn=$('#menuBtn');
const desktopSidebarQuery=window.matchMedia('(min-width:981px)');
function sidebarIsOpen(){return desktopSidebarQuery.matches?!appShell.classList.contains('sidebar-collapsed'):sidebar.classList.contains('open')}
function setSidebar(open){
  if(desktopSidebarQuery.matches){appShell.classList.toggle('sidebar-collapsed',!open);sidebar.classList.remove('open');sidebarBackdrop.classList.remove('show')}
  else{appShell.classList.remove('sidebar-collapsed');sidebar.classList.toggle('open',open);sidebarBackdrop.classList.toggle('show',open)}
  menuBtn.setAttribute('aria-expanded',String(open));sidebar.setAttribute('aria-hidden',String(!open));
}
menuBtn.addEventListener('click',()=>setSidebar(!sidebarIsOpen()));
sidebarBackdrop.addEventListener('click',()=>setSidebar(false));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&sidebarIsOpen())setSidebar(false)});
const syncSidebarViewport=()=>setSidebar(desktopSidebarQuery.matches);
if(desktopSidebarQuery.addEventListener)desktopSidebarQuery.addEventListener('change',syncSidebarViewport);else desktopSidebarQuery.addListener(syncSidebarViewport);
syncSidebarViewport();
$('#fullscreenBtn').addEventListener('click',()=>document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen?.());
$('#resetBtn').addEventListener('click',()=>{if(confirm('¿Deseas borrar todo el avance, resultados y datos del diploma?')){state=defaultState();examSession=null;saveState();navigate('home');toast('Avance reiniciado')}});
$('#startCourseBtn').addEventListener('click',()=>{state.started=true;saveState();$('#startScreen').classList.add('hidden');navigate(completedCount()?`module-${Math.min(completedCount()+1,10)}`:'home')});
if(state.started)$('#startScreen').classList.add('hidden');
if('serviceWorker' in navigator&&location.protocol.startsWith('http'))navigator.serviceWorker.register('sw.js').catch(()=>{});
renderHome();updateProgress();
