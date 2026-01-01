// 1. BASE DE DATOS DE UNIDADES (Limpia y Ampliada - Sin etiquetas HTML)
const data = { 
    longitud: [ 
        { name: "Palmo menor", factor: 0.075, unit: "m", desc: "Exodo 25:25: 7.5 cm. El ancho de 4 dedos. Usado para el reborde de la Mesa de la Proposicion." }, 
        { name: "Palmo", factor: 0.225, unit: "m", desc: "Exodo 28:16: 22.5 cm. Del pulgar al menique. Medida exacta del Pectoral del Juicio." }, 
        { name: "Palmo (Ezequiel)", factor: 0.26, unit: "m", desc: "Ezequiel 43:13: 26 cm. Un palmo mas un borde, medida sagrada del altar profetico." }, 
        { name: "Codo", factor: 0.45, unit: "m", desc: "Genesis 6:15: 45 cm. Del codo a la punta del dedo. El Arca de Noe media 300 de estos codos." }, 
        { name: "Codo (Ezequiel)", factor: 0.52, unit: "m", desc: "Ezequiel 40:5: 52 cm. Codo real (un codo y un palmo menor). Usado para las medidas del Templo milenial." }, 
        { name: "Braza", factor: 1.8, unit: "m", desc: "Hechos 27:28: 1.8 metros. Unidad nautica usada por Pablo durante su naufragio hacia Roma." }, 
        { name: "Caña", factor: 3.0, unit: "m", desc: "Ezequiel 42:16: 3 metros. Hecha de 6 codos largos. Usada por el angel para medir los muros del santuario." }, 
        { name: "Estadio", factor: 180, unit: "m", desc: "Lucas 24:13: 180 metros (400 codos). Emaus estaba a 60 estadios de Jerusalen (11 km)." }, 
        { name: "Milla", factor: 1480, unit: "m", desc: "Mateo 5:41: 1,480 metros. Distancia romana. Jesus enseno a caminar la 'segunda milla' por amor." } 
    ],
    capacidad_solidos: [ 
        { name: "Gomer", factor: 3.7, unit: "L", desc: "Exodo 16:16: 3.7 litros (1/10 de efa). La racion diaria de Mana por persona en el desierto." }, 
        { name: "Almud", factor: 8.75, unit: "L", desc: "Mateo 5:15: 8.75 litros. Nadie enciende una luz para ponerla debajo de este cajon de medida." }, 
        { name: "Seah", factor: 12.3, unit: "L", desc: "Mateo 13:33: 12.3 litros (1/3 de efa). Medida usada en la parabola de la levadura." }, 
        { name: "Medida", factor: 13, unit: "L", desc: "Apocalipsis 6:6: 13 litros. Una 'medida de trigo por un denario' indica hambruna extrema." }, 
        { name: "Efa", factor: 37, unit: "L", desc: "Levitico 19:36: 37 litros. Unidad basica. Dios exige un 'efa justo' en el comercio." }, 
        { name: "Homer", factor: 370, unit: "L", desc: "Ezequiel 45:11: 370 litros (10 efas). Carga de un asno. Equivale a la siembra de un campo grande." } 
    ],
    capacidad_liquidos: [ 
        { name: "Log", factor: 0.5, unit: "L", desc: "Levitico 14:10: 0.5 litros (1/12 de hin). Medida de aceite para la purificacion de los leprosos." }, 
        { name: "Hin", factor: 6.2, unit: "L", desc: "Exodo 30:24: 6.2 litros. Cantidad de aceite de oliva virgen para preparar el Aceite de la Uncion." }, 
        { name: "Bato", factor: 37, unit: "L", desc: "1 Reyes 7:26: 37 litros. El 'Mar de Bronce' de Salomon contenia 2,000 batos de agua." }, 
        { name: "Cantaro", factor: 40, unit: "L", desc: "Marcos 14:13: 40 litros. Capacidad promedio de las vasijas de barro llevadas al hombro." }, 
        { name: "Coro (Lc 16:7)", factor: 370, unit: "L", desc: "Lucas 16:7: 370 litros (10 batos). Usado en la parabola del mayordomo infiel." } 
    ],
    monedas_y_pesos: [ 
        { name: "Blanca", factor: 0.03125, unit: "g_plata", desc: "Marcos 12:42: 1/128 denario. La moneda mas pequena (lepton). Ofrenda de la viuda." }, 
        { name: "Gera", factor: 0.57, unit: "g_plata", desc: "Exodo 30:13: 0.57 gr de plata (1/20 de siclo). El peso mas pequeno del santuario." }, 
        { name: "Dracma", factor: 3.6, unit: "g_plata", desc: "Lucas 15:8: 3.6 gr de plata. Una mujer perdio una de estas y barrio toda la casa hasta hallarla." }, 
        { name: "Denario", factor: 4, unit: "g_plata", desc: "Mateo 20:2: 4 gr de plata. El salario de un dia de trabajo duro en una vina." }, 
        { name: "Siclo (11.4g)", factor: 11.4, unit: "g_plata", desc: "Genesis 23:16: 11.4 gr. Unidad basica de peso desde el tiempo de los patriarcas." }, 
        { name: "Siclo (14.4g)", factor: 14.4, unit: "g_plata", desc: "Mateo 17:27: 14.4 gr. El 'Estatero' hallado en el pez, pagaba el impuesto de 2 personas." }, 
        { name: "Libra de Plata (NT)", factor: 360, unit: "g_plata", desc: "Juan 12:3: 360 gr de plata (100 dracmas). Peso del perfume de nardo puro de Maria." }, 
        { name: "Libra de Plata (OT)", factor: 570, unit: "g_plata", desc: "Esdras 2:69: 570 gr de plata (50 siclos). Usada para las donaciones del Templo." }, 
        { name: "Talento (Moneda)", factor: 21600, unit: "g_plata", desc: "Mateo 18:24: 21.6 kg de plata. ¡Una deuda de 10,000 talentos era imposible de pagar!" }, 
        { name: "Talento (Peso)", factor: 34000, unit: "g", desc: "Exodo 37:24: Aprox. 34 kg. Peso del candelero de oro puro del Tabernaculo. Carga maxima humana." } 
    ],
    tiempos_y_vigilias: [
        { name: "Hora Tercera", factor: 9, unit: "am", desc: "Hechos 2:15: Las 9:00 AM. Hora del descenso del Espiritu Santo en Pentecostes." },
        { name: "Hora Sexta", factor: 12, unit: "pm", desc: "Juan 4:6: Las 12:00 PM (Mediodia). Jesus habla con la samaritana junto al pozo." },
        { name: "Hora Novena", factor: 15, unit: "pm", desc: "Mateo 27:46: Las 3:00 PM. Hora en la que Jesus entrego su espiritu en la cruz." },
        { name: "Vigilia Primera", factor: 21, unit: "hrs", desc: "Lamentaciones 2:19: 6:00 PM a 9:00 PM. Al comenzar las vigilias de la noche." },
        { name: "Vigilia Cuarta", factor: 6, unit: "am", desc: "Mateo 14:25: 3:00 AM a 6:00 AM. Jesus camino sobre el mar hacia sus discipulos." }
    ],
    viajes_y_distancias: [
        { name: "Camino de un Sabado", factor: 1.1, unit: "km", desc: "Hechos 1:12: Aprox. 1.1 km. Limite permitido de viaje en dia de reposo segun la tradicion." },
        { name: "Camino de un dia", factor: 35, unit: "km", desc: "1 Reyes 19:4: Aprox. 35 km. Distancia promedio que recorria una persona a pie en un dia." }
    ]
};


// 2. BASE DE DATOS DE REYES (Mantenida intacta)
const reyesDB = {
    unido: [
        { n: "Saúl", a: "1050-1010", p: "Samuel", j: "Bueno / Malo", s: "1 Samuel 8-31; 1 Crónicas 9-10", e: ["Primer rey de Israel", "Victoria en Jabes de Galaad", "Caída ante los filisteos en Gilboa"] },
        { n: "David", a: "1010-970", p: "Samuel, Natán", j: "Bueno / Bueno", s: "2 Samuel 1-24; 1 Crónicas 11-29", e: ["Conquista de Jerusalén", "Pacto Davídico", "Preparativos para el Templo"] },
        { n: "Salomón", a: "970-930", p: "Natán", j: "Bueno / Malo", s: "1 Reyes 1-11; 2 Crónicas 1-9", e: ["Construcción del Templo", "Visita de la Reina de Sabá", "Gran sabiduría y posterior idolatría"] }
    ],
    juda: [
        { n: "Roboam", a: "931-913", p: "Semaías", j: "Malo / Malo", s: "1 Reyes 12, 14; 2 Crónicas 10-12", e: ["División del Reino (931 a.C.)", "Invasión del Faraón Sisac", "Abandono de la ley"] },
        { n: "Abías", a: "913-911", p: "Semaías", j: "Malo / Malo", s: "1 Reyes 15; 2 Crónicas 13", e: ["Guerra contra Jeroboam I", "Victoria en el Monte Zemaraim"] },
        { n: "Asa", a: "911-870", p: "Hananí", j: "Bueno / Bueno", s: "1 Reyes 15; 2 Crónicas 14-16", e: ["Reforma religiosa", "Victoria sobre Zera el Etíope", "Alianza fallida con Ben-adad"] },
        { n: "Josafat", a: "870-848", p: "Micaías", j: "Bueno / Bueno", s: "1 Reyes 22; 2 Crónicas 17-20", e: ["Gran avivamiento espiritual", "Victoria milagrosa en el valle de Beraca"] },
        { n: "Joram", a: "848-841", p: "Abdías(?)", j: "Malo / Malo", s: "2 Reyes 8; 2 Crónicas 21", e: ["Matanza de sus hermanos", "Rebelión de Edom y Libna"] },
        { n: "Ocozías", a: "841", p: "Eliseo", j: "Malo / Malo", s: "2 Reyes 8-9; 2 Crónicas 22", e: ["Alianza con el Reino del Norte", "Muerto por Jehú"] },
        { n: "Atalía", a: "841-835", p: "Eliseo", j: "Malo / Malo", s: "2 Reyes 11; 2 Crónicas 22-23", e: ["Usurpación del trono", "Intento de exterminio del linaje real"] },
        { n: "Joás", a: "835-796", p: "Joel", j: "Bueno / Malo", s: "2 Reyes 11-12; 2 Crónicas 23-24", e: ["Reparación del Templo", "Apostasía tras morir Joiada"] },
        { n: "Amasías", a: "796-767", p: "Amós", j: "Bueno / Malo", s: "2 Reyes 14; 2 Crónicas 25", e: ["Derrota a los edomitas", "Capturado por el Reino de Israel"] },
        { n: "Uzías", a: "767-740", p: "Isaías, Oseas", j: "Bueno / Malo", s: "2 Reyes 15; 2 Crónicas 26", e: ["Fortalecimiento militar", "Herido con lepra por orgullo"] },
        { n: "Jotam", a: "748-732", p: "Isaías, Miqueas", j: "Bueno / Bueno", s: "2 Reyes 15; 2 Crónicas 27", e: ["Reconstrucción de puertas del Templo", "Sumisión de los amonitas"] },
        { n: "Acaz", a: "732-716", p: "Isaías, Miqueas", j: "Malo / Malo", s: "2 Reyes 16; 2 Crónicas 28", e: ["Sacrificio de sus hijos", "Altar asirio en Jerusalén"] },
        { n: "Ezequías", a: "716-687", p: "Isaías, Miqueas", j: "Bueno / Bueno", s: "2 Reyes 18-20; 2 Crónicas 29-32", e: ["Reforma de Pascua", "Liberación del sitio de Senaquerib", "Sanación milagrosa"] },
        { n: "Manasés", a: "687-642", p: "Nahum", j: "Malo / Bueno", s: "2 Reyes 21; 2 Crónicas 33", e: ["Extrema idolatría", "Cautiverio en Babilonia y arrepentimiento"] },
        { n: "Amón", a: "642-640", p: "Nahum", j: "Malo / Malo", s: "2 Reyes 21; 2 Crónicas 33", e: ["Vuelta a la idolatría de su padre", "Asesinado por sus siervos"] },
        { n: "Josías", a: "640-608", p: "Habacuc, Sofonías, Jeremías", j: "Bueno / Bueno", s: "2 Reyes 22-23; 2 Crónicas 34-35", e: ["Hallazgo de la Ley", "Gran purificación nacional", "Pascua solemne"] },
        { n: "Joacaz", a: "608", p: "Jeremías", j: "Malo / Malo", s: "2 Reyes 23; 2 Crónicas 36", e: ["Depuesto por el Faraón Necao", "Llevado cautivo a Egipto"] },
        { n: "Joacim", a: "608-597", p: "Habacuc, Jeremías, Daniel", j: "Malo / Malo", s: "2 Reyes 23-24; 2 Crónicas 36", e: ["Quema del rollo de Jeremías", "Primeras deportaciones (Daniel)"] },
        { n: "Joaquín", a: "597", p: "Jeremías, Ezequiel", j: "Malo / Malo", s: "2 Reyes 24-25", e: ["Deportado a Babilonia", "Tratado con honor años después por Evil-merodac"] },
        { n: "Sedequías", a: "597-586", p: "Jeremías, Ezequiel", j: "Malo / Malo", s: "2 Reyes 24-25", e: ["Rebelión final contra Babilonia", "Destrucción del Templo", "Cautiverio final"] }
    ],
    israel: [
        { n: "Jeroboam I", a: "931-910", p: "Ahías", j: "Malo", s: "1 Reyes 12-14", e: ["Becerros en Dan y Bet-el", "Sacerdocio no levítico"] },
        { n: "Nadab", a: "910-909", p: "Ahías", j: "Malo", s: "1 Reyes 15", e: ["Asesinado durante el sitio de Gibetón"] },
        { n: "Baasa", a: "909-886", p: "Jehú", j: "Malo", s: "1 Reyes 16", e: ["Exterminio de la casa de Jeroboam", "Guerra contra Asa"] },
        { n: "Ela", a: "886-885", p: "Jehú", j: "Malo", s: "1 Reyes 16", e: ["Asesinado mientras estaba borracho"] },
        { n: "Zimri", a: "885", p: "Micaías", j: "Malo", s: "1 Reyes 16", e: ["Reinado de 7 días", "Incendió el palacio con él dentro"] },
        { n: "Omri", a: "885-874", p: "Elías", j: "Malo", s: "1 Reyes 16", e: ["Fundación de Samaria como capital"] },
        { n: "Acab", a: "874-853", p: "Elías", j: "Malo", s: "1 Reyes 17-21", e: ["Introducción de Baal por Jezabel", "Enfrentamiento en el Carmelo"] },
        { n: "Ocozías", a: "853-852", p: "Elías", j: "Malo", s: "2 Reyes 1", e: ["Muerte por caída de una celosía"] },
        { n: "Joram", a: "852-841", p: "Eliseo", j: "Malo", s: "2 Reyes 3", e: ["Guerra contra Moab", "Mesa el moabita"] },
        { n: "Jehú", a: "841-814", p: "Eliseo", j: "Bueno / Malo", s: "2 Reyes 9-10", e: ["Exterminio de la casa de Acab", "Destrucción de Baal", "Mantuvo becerros de oro"] },
        { n: "Joacaz", a: "814-798", p: "Eliseo", j: "Malo", s: "2 Reyes 13", e: ["Opresión de Hazael de Siria"] },
        { n: "Joás", a: "798-782", p: "Eliseo", j: "Malo", s: "2 Reyes 13-14", e: ["Saqueo de Jerusalén", "Victoria triple sobre Siria"] },
        { n: "Jeroboam II", a: "782-753", p: "Amós, Oseas, Jonás", j: "Malo", s: "2 Reyes 14", e: ["Gran expansión territorial", "Era de oro económica y declive moral"] },
        { n: "Zacarías", a: "753-752", p: "Oseas", j: "Malo", s: "2 Reyes 15", e: ["Último de la dinastía de Jehú"] },
        { n: "Salum", a: "752", p: "Oseas", j: "Malo", s: "2 Reyes 15", e: ["Reinó un mes"] },
        { n: "Manahem", a: "752-742", p: "Oseas", j: "Malo", s: "2 Reyes 15", e: ["Tributo brutal a Pul de Asiria"] },
        { n: "Pekaía", a: "742-740", p: "Oseas", j: "Malo", s: "2 Reyes 15", e: ["Asesinado por su capitán Peka"] },
        { n: "Peka", a: "752-732", p: "Miqueas", j: "Malo", s: "2 Reyes 15", e: ["Guerra siro-efraimita contra Judá"] },
        { n: "Oseas", a: "732-722", p: "Miqueas", j: "Malo", s: "2 Reyes 17", e: ["Caída final de Samaria", "Cautiverio asirio"] }
    ]
};

// 3. CALENDARIO Y CURIOSIDADES
const mesesJudios = [
    { n: "Nisán", d: 30, i: "19 Mar", f: "17 Abr", h: "Pascua. Primavera." },
    { n: "Iyar", d: 29, i: "18 Abr", f: "16 May", h: "Cosecha de Cebada." },
    { n: "Siván", d: 30, i: "17 May", f: "15 Jun", h: "Pentecostés." },
    { n: "Tamuz", d: 29, i: "16 Jun", f: "14 Jul", h: "Calor intenso." },
    { n: "Ab", d: 30, i: "15 Jul", f: "13 Ago", h: "Maduración de uvas." },
    { n: "Elul", d: 29, i: "14 Ago", f: "11 Sep", h: "Cosecha de dátiles." },
    { n: "Tisri", d: 30, i: "12 Sep", f: "11 Oct", h: "Expiación / Tabernáculos." },
    { n: "Hesván", d: 29, i: "12 Oct", f: "9 Nov", h: "Lluvias tempranas." },
    { n: "Quisleu", d: 30, i: "10 Nov", f: "9 Dic", h: "Hanukkah." },
    { n: "Tebet", d: 29, i: "10 Dic", f: "7 Ene", h: "Invierno frío." },
    { n: "Sebat", d: 30, i: "8 Ene", f: "6 Feb", h: "Flor de almendro." },
    { n: "Adar", d: 29, i: "7 Feb", f: "7 Mar", h: "Fiesta de Purim." }
];


// 1. BASE DE DATOS Y PUENTE GLOBAL
var sabiduriaPorMes = {
    "Nisán": [
        "🌸 Es el mes de la primavera; la cebada ya está lista para la cosecha.",
        "⛓️ Se celebra la libertad: el pueblo salió de la esclavitud de Egipto.",
        "🧱 Los muros de Jericó cayeron en este mes tras rodearlos 7 días.",
        "👑 Es el 'Rey de los meses', el primero del año religioso.",
        "🌱 Todo comienza de nuevo, representando esperanza y vida.",
        "📜 Según la tradición, los patriarcas nacieron en este mes.",
        "💧 Se dice que el rocío de bendición empieza a caer con más fuerza.",
        "🍷 Es el mes donde se sirven las 4 copas de la redención.",
        "🐏 El signo de este mes es Aries (el cordero), recordando el sacrificio.",
        "✨ Se dice que en este mes ocurrirá la redención futura."
    ],
    "Iyar": [
        "🏥 Su nombre significa 'Yo soy el Señor que te sana'.",
        "🏗️ Salomón inició la construcción del primer Templo en este mes.",
        "🍞 Es el mes donde cayó el Maná del cielo por primera vez.",
        "🕯️ Es un tiempo de luz y brillo espiritual intenso.",
        "🌾 Se cosecha la cebada y se empieza a contar el 'Omer'.",
        "🧠 Representa la conexión entre la libertad y la disciplina mental.",
        "🔍 Es el mes ideal para el auto-examen y la mejora personal.",
        "🌳 Es conocido como el mes del resplandor de la naturaleza.",
        "🐂 Su signo es Tauro, representando la fuerza del trabajo interno.",
        "⛰️ Es el mes de preparación para recibir la revelación en el Sinaí."
    ],
    "Siván": [
        "📜 Es el mes de la entrega de la Torá (la Ley) en el Sinaí.",
        "🕊️ Se celebra Pentecostés (Shavuot), agradeciendo por los frutos.",
        "🔥 El clima se vuelve muy caluroso y termina la cosecha de trigo.",
        "🍇 Es el tiempo de las primeras primicias de la tierra.",
        "🤝 Representa la unión eterna entre Dios y su pueblo.",
        "🏡 Se acostumbra decorar las casas con flores y ramas verdes.",
        "📚 Es el mes dedicado al estudio profundo y el entendimiento.",
        "🍯 Se dice que la Ley es dulce como la miel y la leche en este mes.",
        "👥 Su signo es Géminis, representando las dos tablas de la Ley.",
        "🏔️ Todo el monte Sinaí se llenó de flores milagrosamente en Siván."
    ],
    "Tamuz": [
        "☀️ Es el inicio del verano más fuerte en las tierras bíblicas.",
        "👁️ Se dice que es el mes para 'rectificar la visión' espiritual.",
        "🛡️ Es un tiempo de vigilancia y fortaleza ante las pruebas.",
        "🧱 Se recuerda cuando los muros de Jerusalén fueron traspasados.",
        "🍇 Las uvas comienzan su proceso de maduración bajo el sol.",
        "⚡ Representa la luz en su máximo esplendor físico.",
        "🙏 Es un mes para transformar momentos difíciles en oración.",
        "🦀 Su signo es Cáncer, que vive en el agua, buscando refugio espiritual.",
        "📖 Se dice que en este mes Moisés bajó con las primeras tablas.",
        "🌄 Es un tiempo para aprender a ver lo bueno dentro de lo oculto."
    ],
    "Ab": [
        "🧔 Su nombre significa 'Padre'.",
        "🍷 Las uvas y los higos terminan de madurar y están muy dulces.",
        "❤️ El día 15 de Ab es el día más alegre para el amor y la unión.",
        "🌅 Se dice que el consuelo divino llega al final de este mes.",
        "🧱 Es un tiempo para reconstruir lo que ha sido dañado.",
        "🦁 Representa la fuerza del 'León de Judá'.",
        "🕊️ Es un mes de transformación: de la tristeza a la esperanza.",
        "🔥 El sol está en su punto más fuerte, probando la resistencia.",
        "👑 Se dice que el Mesías nacerá o se revelará en este mes.",
        "💎 Es un mes para encontrar diamantes espirituales en el desierto."
    ],
    "Elul": [
        "🌾 'El Rey está en el campo': Dios se muestra más accesible a todos.",
        "🎺 Se toca el Shofar cada mañana para despertar el corazón.",
        "🤝 'Yo soy de mi amado y mi amado es mío' es el lema de Elul.",
        "🧼 Es el mes de la limpieza espiritual y el perdón.",
        "🕊️ Es un tiempo de mucha paz y preparación para el año nuevo.",
        "📝 Es el momento ideal para revisar nuestras metas del año.",
        "🐚 Representa la ternura y la cercanía con el Creador.",
        "⛰️ Moisés subió al monte por segunda vez durante estos 40 días.",
        "✍️ Es el mes de escribir cartas de gratitud y buenos deseos.",
        "♍ Su signo es Virgo, representando el retorno a la pureza inicial."
    ],
    "Tisri": [
        "🍎 Es el mes del Año Nuevo (Rosh Hashaná) y la creación del mundo.",
        "🛖 Se vive en cabañas (Sucot) para recordar la protección de Dios.",
        "⚖️ Es el mes del juicio y el perdón total (Día de la Expiación).",
        "🎊 Se celebra el final de todas las cosechas del año con alegría.",
        "🍯 Se acostumbra comer manzana con miel para un año dulce.",
        "🎺 Es el mes con más toques de trompeta y celebraciones.",
        "🌊 Representa el agua que limpia y da vida para el ciclo nuevo.",
        "🍋 Se usa el Etrog (cidra), el fruto más hermoso, en las fiestas.",
        "♎ Su signo es Libra, representando la balanza de la justicia.",
        "🌌 Es el mes donde se decide la provisión para todo el año."
    ],
    "Hesván": [
        "🌧️ 'El mes de las lluvias': llega el agua esperada para sembrar.",
        "🤐 Es el único mes sin festividades, ideal para el descanso.",
        "🚢 En este mes se terminó el Arca de Noé tras el diluvio.",
        "🌱 Los agricultores aran la tierra que se ha ablandado por el agua.",
        "🤫 Se dice que es el mes de los milagros que no se ven a simple vista.",
        "🧘 Es un tiempo de silencio, paciencia y crecimiento interno.",
        "🔑 Representa la llave que abre la provisión para el invierno.",
        "🦂 Su signo es Escorpio, que busca la profundidad bajo la tierra.",
        "🧪 Es un mes para destilar las experiencias del mes anterior.",
        "🛖 Se dice que en el futuro este mes tendrá una gran fiesta propia."
    ],
    "Quisleu": [
        "😴 Es el mes de los sueños: gran parte de la Biblia ocurre aquí.",
        "🕎 Se celebra Hanukkah, el milagro de la luz en el Templo.",
        "🌈 Aparece el arcoíris como señal de la promesa de Dios.",
        "🔥 Es un tiempo para encender fe cuando todo parece oscuro.",
        "🏹 Representa el arco y la flecha: puntería y metas claras.",
        "❄️ El clima se vuelve frío y comienzan los vientos invernales.",
        "🏠 Es el mes de la calidez familiar dentro del hogar.",
        "🏹 Su signo es Sagitario, el arquero que apunta hacia lo alto.",
        "🛢️ Se recuerda el milagro de la vasija de aceite que duró 8 días.",
        "🧀 Se acostumbra comer alimentos lácéos en honor a las heroínas."
    ],
    "Tebet": [
        "❄️ Es el mes más frío de Israel; a veces nieva en Jerusalén.",
        "📖 Se recuerda la primera traducción de la Biblia al griego.",
        "🧱 Representa la estructura y los fundamentos sólidos de la vida.",
        "🧤 Es tiempo de trabajar en la paciencia y el buen carácter.",
        "🌳 La naturaleza duerme, preparándose para renovar sus fuerzas.",
        "🏔️ Es un mes de mucha disciplina y orden personal.",
        "🍵 Representa el calor espiritual que nos cuida del frío exterior.",
        "🐐 Su signo es Capricornio, que escala montañas en pleno invierno.",
        "🏰 Es un tiempo para fortalecer los muros de nuestra identidad.",
        "🌑 Es el mes donde la noche es más larga y buscamos la chispa interna."
    ],
    "Sebat": [
        "🌳 Se celebra el Año Nuevo de los Árboles (Tu Bishvat).",
        "🥤 La savia empieza a subir por los troncos para dar vida.",
        "🫒 Es el mes de la abundancia del aceite de oliva y frutos.",
        "📢 Moisés comenzó a explicar toda la Ley al pueblo en este mes.",
        "🍯 Se celebra la dulzura de la tierra y sus beneficios.",
        "🚿 Representa la purificación a través de la lluvia invernal.",
        "✨ Es el despertar de la naturaleza antes de la primavera.",
        "🏺 Su signo es Acuario, el aguador que distribuye vida.",
        "🥜 Se acostumbra comer 15 tipos de frutos diferentes en su fiesta.",
        "🎤 Es el mes de la comunicación y de expresar palabras hermosas."
    ],
    "Adar": [
        "🎭 'Cuando entra Adar, la alegría aumenta'. Es el mes más feliz.",
        "👑 La reina Ester salvó al pueblo de un plan malvado en Purim.",
        "😄 Representa la risa, el buen humor y los milagros inesperados.",
        "🔄 Cada pocos años este mes se duplica para ajustar el calendario.",
        "🎁 Se acostumbra dar regalos a los pobres y comida a amigos.",
        "🌟 Se dice que en este mes la oscuridad se transforma en luz.",
        "🎂 Moisés nació y partió de este mundo en este mismo mes.",
        "🐟 Su signo es Piscis, los peces que se multiplican bajo el agua.",
        "🎭 Es tiempo de usar disfraces para mostrar que Dios está oculto.",
        "🎊 Es el último mes del año, cerrando el ciclo con celebración."
    ]
};

var curiosidadesMensuales = sabiduriaPorMes;

// 2. GENERADOR DE ACORDEÓN PREMIUM
function generarAcordeonSabiduria(containerId) {
    const contenedor = document.getElementById(containerId);
    if (!contenedor) return;

    contenedor.innerHTML = ""; 

    // Colores por estación
    const colores = {
        "Primavera": "#4CAF50", // Verde
        "Verano": "#FF9800",    // Naranja
        "Otoño": "#795548",     // Marrón
        "Invierno": "#2196F3"   // Azul
    };

    const estaciones = {
        "Nisán": "Primavera", "Iyar": "Primavera", "Siván": "Primavera",
        "Tamuz": "Verano", "Ab": "Verano", "Elul": "Verano",
        "Tisri": "Otoño", "Hesván": "Otoño", "Quisleu": "Otoño",
        "Tebet": "Invierno", "Sebat": "Invierno", "Adar": "Invierno"
    };

    Object.keys(sabiduriaPorMes).forEach(mes => {
        const est = estaciones[mes];
        const colorBase = colores[est];

        const detalles = document.createElement('details');
        detalles.className = "acordeon-mes";
        detalles.style.cssText = `
            margin-bottom: 10px;
            border: 2px solid ${colorBase};
            border-radius: 15px;
            overflow: hidden;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            font-family: 'Segoe UI', sans-serif;
            transition: transform 0.2s;
        `;

        // Auto-cierre
        detalles.addEventListener('toggle', function() {
            if (this.open) {
                this.style.transform = "scale(1.02)";
                document.querySelectorAll('.acordeon-mes').forEach(otro => {
                    if (otro !== this) {
                        otro.removeAttribute('open');
                        otro.style.transform = "scale(1)";
                    }
                });
            } else {
                this.style.transform = "scale(1)";
            }
        });

        const titulo = document.createElement('summary');
        titulo.innerHTML = `<strong>📅 Mes de ${mes}</strong> <small style="opacity:0.8">(${est})</small>`;
        titulo.style.cssText = `
            padding: 15px;
            background: ${colorBase};
            color: white;
            cursor: pointer;
            list-style: none;
            font-size: 1.1rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
        `;

        const lista = document.createElement('ul');
        lista.style.cssText = `
            padding: 20px 20px 20px 45px;
            margin: 0;
            background: #fff;
            list-style-type: '✨ '; /* EL BULLET DE ESTRELLA */
        `;

        sabiduriaPorMes[mes].forEach(dato => {
            const item = document.createElement('li');
            item.style.cssText = `
                margin-bottom: 12px;
                line-height: 1.5;
                color: #333;
                font-weight: 500;
                padding-left: 10px;
            `;
            item.innerText = dato;
            lista.appendChild(item);
        });

        detalles.appendChild(titulo);
        detalles.appendChild(lista);
        contenedor.appendChild(detalles);
    });
}
const sincroniaGlobal = [
    { p: "931 a.C.", j: "Roboam / Jeroboam I", imp: "Israel", ext: "Cisma", n: "División del Reino Unido" },
    { p: "925 a.C.", j: "Roboam", imp: "Egipto", ext: "Faraón Sisac", n: "Saqueó el Templo" },
    { p: "853 a.C.", j: "Acab", imp: "Asiria", ext: "Salmanasar III", n: "Batalla de Qarqar" },
    { p: "722 a.C.", j: "Ezequías", imp: "Asiria", ext: "Sargón II", n: "Caída de Samaria" },
    { p: "701 a.C.", j: "Ezequías", imp: "Asiria", ext: "Senaquerib", n: "Sitio de Jerusalén" },
    { p: "605 a.C.", j: "Joacim", imp: "Babilonia", ext: "Nabucodonosor II", n: "Daniel llevado cautivo" },
    { p: "586 a.C.", j: "Sedequías", imp: "Babilonia", ext: "Nabucodonosor II", n: "Destrucción total de Jerusalén" },
    { p: "539 a.C.", j: "Exilio", imp: "Persia", ext: "Ciro el Grande", n: "Decreto de retorno" }
];

let segundos = 0;
let reySeleccionadoActual = null;
let modoComparacion = false;
let fichaActiva = 'A';

// 4. FUNCIONES CORE
function updateUnits() {
    const categorySelector = document.getElementById('categorySelector');
    const unitSelector = document.getElementById('unitSelector');
    const category = categorySelector.value;
    const units = data[category];

    unitSelector.innerHTML = ''; 
    units.forEach((item, index) => {
        let option = document.createElement('option');
        option.value = index;
        option.textContent = item.name;
        unitSelector.appendChild(option);
    });
    calculate();
}

function calculate() {
    const category = document.getElementById('categorySelector').value;
    const index = document.getElementById('unitSelector').value;
    const amountInput = document.getElementById('inputValue');
    const amount = parseFloat(amountInput.value) || 0;
    const resultDisplay = document.getElementById('finalResult');
    const contextText = document.getElementById('contextText');

    if (index === "" || !data[category][index]) return;

    const item = data[category][index];
    let total = amount * item.factor;

    resultDisplay.style.opacity = '0.5';
    setTimeout(() => {
        resultDisplay.innerText = total.toLocaleString() + " " + (item.unit === "g_plata" ? "gr de Plata" : item.unit);
        contextText.innerText = item.desc;
        resultDisplay.style.opacity = '1';
    }, 50);
}

function obtenerEtiquetaJuicio(juicio) {
    const j = juicio.toLowerCase();
    if (j.includes("bueno / bueno") || j === "bueno") return `<span class="tag-bueno">✅ Fiel</span>`;
    if (j.includes("malo / malo") || j === "malo") return `<span class="tag-malo">❌ Infiel</span>`;
    return `<span class="tag-mixto">⚠️ Mixto</span>`;
}

function categorizarProfeta(nombre) {
    const n = nombre.toLowerCase();
    if (n.includes("isaías") || n.includes("jeremías") || n.includes("ezequiel") || n.includes("daniel")) return `<span class="profeta-tag mayor">${nombre}</span>`;
    if (n.includes("elías") || n.includes("eliseo") || n.includes("samuel") || n.includes("natán")) return `<span class="profeta-tag fuego">${nombre}</span>`;
    if (n.includes("oseas") || n.includes("amós") || n.includes("miqueas") || n.includes("habacuc")) return `<span class="profeta-tag menor">${nombre}</span>`;
    return `<span class="profeta-tag">${nombre}</span>`;
}

function mostrarFichaDetallada(reino, index) {
    const box = document.getElementById('kingDetails');
    const btnExp = document.getElementById('btnExportarFicha');

    if (index === "") { 
        box.style.display = 'none'; 
        if(btnExp) btnExp.style.display = 'none'; 
        return; 
    }

    const rey = reyesDB[reino][index];
    reySeleccionadoActual = {...rey, reinoNombre: reino};

    document.querySelectorAll('.king-select').forEach(s => {
        if (!s.id.toLowerCase().includes(reino)) s.value = "";
    });

    const juicioHTML = obtenerEtiquetaJuicio(rey.j);
    const profetasHTML = rey.p.split(',').map(p => categorizarProfeta(p.trim())).join(' ');
    const eventosHTML = rey.e ? `<ul class="event-list">${rey.e.map(ev => `<li>${ev}</li>`).join('')}</ul>` : '';

    const contenido = `
        <div class="ficha-premium animate-pop">
            <div style="display:flex; justify-content:space-between; align-items:center;">
                <small style="text-transform:uppercase; letter-spacing:1px; color:var(--accent)">Reino de ${reino}</small>
                ${juicioHTML}
            </div>
            <h4 style="margin:10px 0 5px 0; font-size:1.4rem;">👑 ${rey.n}</h4>
            <p style="margin:0;"><small>Periodo: <b>${rey.a} a.C.</b></small></p>
            <div style="margin:10px 0;">${profetasHTML}</div>
            <div class="eventos-box">
                <strong style="font-size:0.75rem;">EVENTOS CLAVE:</strong>
                ${eventosHTML}
            </div>
            <p class="ref-box">📖 ${rey.s}</p>
        </div>
    `;

    if (modoComparacion) {
        const targetFicha = document.getElementById('ficha' + fichaActiva);
        targetFicha.innerHTML = contenido;
        targetFicha.classList.add('active-sync');
        document.getElementById('compareContainer').style.display = 'flex';
        box.style.display = 'none';
        fichaActiva = (fichaActiva === 'A') ? 'B' : 'A';
    } else {
        box.innerHTML = contenido;
        box.style.display = 'block';
        if(btnExp) btnExp.style.display = 'block';
    }
}

function renderCalendario() {
    const grid = document.getElementById('calendarGrid');
    if(!grid) return;
    grid.innerHTML = mesesJudios.map((m, idx) => `
        <div class="month-item" onclick="mostrarGuiaMes(${idx})">
            <strong>${idx + 1}. ${m.n} (${m.d} d)</strong>
            <span style="display:block; font-size:0.8rem; color:var(--accent);">${m.i} - ${m.f}</span>
            <p style="font-size:0.75rem;">${m.h}</p>
        </div>
    `).join('');
}

// --- CRONOMETRO ---
function iniciarCronometro() {
    setInterval(() => {
        segundos++;
        const mins = Math.floor(segundos / 60);
        const secs = (segundos % 60).toString().padStart(2, '0');
        const clock = document.getElementById('timerClock');
        if(clock) clock.innerText = `${mins.toString().padStart(2, '0')}:${secs}`;
        
        if (segundos % 900 === 0 && segundos !== 0) { 
            lanzarAlertaSabiduria(); 
        }
    }, 1000);
}

let ultimoDatoMostrado = "";
// Sistema de control de historial para evitar repeticiones (Premium)
let historialDatos = {}; 

// Función auxiliar para copiar el texto (Mejorada con feedback visual)
function copiarDato(texto) {
    navigator.clipboard.writeText(texto).then(() => {
        const avisoCopiado = document.createElement('div');
        avisoCopiado.className = 'alerta-copiado';
        avisoCopiado.innerHTML = '¡Sabiduría copiada! 📋 ✨'; // Texto más elegante
        document.body.appendChild(avisoCopiado);
        
        // Haptic feedback simple si está en móvil
        if (window.navigator.vibrate) window.navigator.vibrate(50);
        
        setTimeout(() => {
            avisoCopiado.style.opacity = '0';
            setTimeout(() => avisoCopiado.remove(), 500);
        }, 2000);
    });
}


// --- SISTEMA DE MEMORIA GLOBAL (Blindado contra errores de duplicado) ---
if (typeof window.historialSabiduria === 'undefined') {
    window.historialSabiduria = {}; 
}

function lanzarAlertaSabiduria(mesEspecifico = null) {
    const coloresMeses = {
        "Nisán": "#e8f5e9", "Iyar": "#f3e5f5", "Siván": "#fff9c4",
        "Tamuz": "#fff3e0", "Ab": "#ffebee", "Elul": "#f1f8e9",
        "Tisri": "#e3f2fd", "Hesván": "#e0f2f1", "Quisleu": "#ede7f6",
        "Tebet": "#eceff1", "Sebat": "#f9fbe7", "Adar": "#fce4ec"
    };

    let nombreMes;
    let poolDeOpciones;

    // 1. DETERMINAR EL MES (Si es clic en mes o en la bombilla)
    if (mesEspecifico && sabiduriaPorMes[mesEspecifico]) {
        nombreMes = mesEspecifico;
    } else {
        const todosLosMeses = Object.keys(sabiduriaPorMes);
        nombreMes = todosLosMeses[Math.floor(Math.random() * todosLosMeses.length)];
    }

    // 2. GESTIÓN DE LA BARAJA (Aquí se evita la repetición)
    // Si no existe la baraja de este mes o se vació, la creamos/recargamos
    if (!window.historialSabiduria[nombreMes] || window.historialSabiduria[nombreMes].length === 0) {
        window.historialSabiduria[nombreMes] = [...sabiduriaPorMes[nombreMes]];
    }

    // EXTRAEMOS un dato al azar y lo QUITAMOS de la lista (splice)
    // Esto garantiza que el siguiente clic NO TENGA este dato disponible
    const index = Math.floor(Math.random() * window.historialSabiduria[nombreMes].length);
    const nuevoDato = window.historialSabiduria[nombreMes].splice(index, 1)[0];

    // 3. DATOS PARA EL CONTADOR PREMIUM
    const totalDatos = sabiduriaPorMes[nombreMes].length;
    const actualesMostrados = totalDatos - window.historialSabiduria[nombreMes].length;
    const esElUltimo = window.historialSabiduria[nombreMes].length === 0;

    // Guardar para uso de otras funciones
    ultimoDatoMostrado = nuevoDato;

    // Procesar Emoji
    const datoConEmojiAnimado = nuevoDato.replace(/^([\u{1F300}-\u{1F6FF}\u{2600}-\u{26FF}][\u{1F3FB}-\u{1F3FF}]?)\s*/u, '<span class="emoji-animado">$1</span> ');

    // Limpiar alertas previas con efecto de salida
    const vieja = document.querySelector('.alerta-sabiduria');
    if(vieja) {
        vieja.style.opacity = '0';
        vieja.style.transform = 'translateY(20px) scale(0.9)';
        setTimeout(() => vieja.remove(), 300);
    }

    const colorFondo = coloresMeses[nombreMes] || "#ffffff";
    const aviso = document.createElement('div');
    aviso.className = 'alerta-sabiduria animate-pop';
    
    // 4. DISEÑO REFINADO CON CONTADOR Y CELEBRACIÓN
    aviso.innerHTML = `
        <div style="background: ${colorFondo}; border-radius: 22px; padding: 22px; box-shadow: 0 20px 45px rgba(0,0,0,0.15); border-left: 6px solid #FFD700; max-width: 320px; position: relative; backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.4);">
            
            <div style="position: absolute; top: -12px; right: 20px; background: #5d4037; color: #fcf6ba; padding: 4px 12px; border-radius: 12px; font-size: 0.65rem; font-weight: 900; box-shadow: 0 4px 12px rgba(0,0,0,0.25); border: 1px solid #bf953f; z-index: 10;">
                ${actualesMostrados} / ${totalDatos} ${esElUltimo ? '✨' : ''}
            </div>

            <div style="margin-bottom: 15px; display: flex; justify-content: space-between; align-items: center;">
                <div style="display: flex; align-items: center; gap: 8px;">
                    <span style="font-size: 1.3rem;">💡</span>
                    <strong style="color: #5d4037; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 1.5px;">Sabiduría de ${nombreMes}</strong>
                </div>
                <span onclick="this.closest('.alerta-sabiduria').remove()" style="cursor: pointer; color: #5d4037; font-size: 1.6rem; line-height: 1; opacity: 0.4; font-weight: bold;">&times;</span>
            </div>

            <p id="texto-dato" style="margin: 0; color: #2c3e50; line-height: 1.7; font-size: 1rem; font-family: 'Segoe UI', system-ui, sans-serif; font-weight: 500;">
                ${datoConEmojiAnimado}
            </p>

            ${esElUltimo ? `<div style="margin-top: 12px; font-size: 0.75rem; color: #856404; font-weight: 800; text-align: center; border-top: 1px dashed #d4a373; padding-top: 8px;">🎉 ¡Has completado todos los secretos de este mes!</div>` : ''}

            <button class="boton-copiar" style="width: 100%; justify-content: center; margin-top: 18px; background: rgba(255,255,255,0.6); border: 1px solid rgba(0,0,0,0.08); padding: 12px; border-radius: 14px; font-weight: 800; color: #5d4037; letter-spacing: 1px; cursor: pointer; transition: all 0.3s;" 
                onclick="copiarDato('${nuevoDato.replace(/'/g, "\\'")}')">
                <span>📋</span> COPIAR SABIDURÍA
            </button>
        </div>
    `;

    Object.assign(aviso.style, {
        position: 'fixed',
        bottom: '25px',
        right: '25px',
        zIndex: '10000',
        transition: 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        filter: 'drop-shadow(0 15px 15px rgba(0,0,0,0.1))'
    });

    document.body.appendChild(aviso);

    // Auto-cierre
    setTimeout(() => { 
        if(aviso && aviso.parentElement) { 
            aviso.style.opacity = '0'; 
            aviso.style.transform = 'translateY(30px) scale(0.9)';
            setTimeout(() => aviso.remove(), 600); 
        } 
    }, 18000);
}

// --- SINCRONIA ---
function abrirSincronia() {
    const modal = document.getElementById('modalSincronia');
    if(modal) modal.style.display = 'flex';
    renderizarTablaSync(sincroniaGlobal);
}

function cerrarSincronia() { 
    const modal = document.getElementById('modalSincronia');
    if(modal) modal.style.display = 'none'; 
}

function filtrarSincronia() {
    const term = document.getElementById('searchSync').value.toLowerCase();
    const filtrados = sincroniaGlobal.filter(i => 
        i.imp.toLowerCase().includes(term) || 
        i.ext.toLowerCase().includes(term) || 
        i.n.toLowerCase().includes(term) ||
        i.p.toLowerCase().includes(term)
    );
    renderizarTablaSync(filtrados);
}

function renderizarTablaSync(datos) {
    const body = document.getElementById('bodySincronia');
    if(!body) return;
    
    body.innerHTML = datos.map(d => {
        const esCisma = d.p.includes("931");
        return `
            <tr class="sync-row ${esCisma ? 'cisma-highlight' : ''}">
                <td><b style="color:var(--accent)">${d.p}</b></td>
                <td><small>${d.j}</small></td>
                <td><span class="imp-tag">${d.imp}</span></td>
                <td><strong>${d.ext}</strong><br><small style="color:gray">${d.n}</small></td>
            </tr>
        `;
    }).join('');
}

// --- UTILIDADES ---
function toggleEstudio() {
    const conv = document.getElementById('seccionConversor');
    const header = document.getElementById('mainHeader');
    const btn = document.getElementById('estudioBtn');
    if(!conv) return;

    const isHidden = conv.style.display === "none";
    conv.style.display = isHidden ? "block" : "none";
    if(header) header.style.display = isHidden ? "block" : "none";
    if(btn) btn.innerText = isHidden ? "📖 Modo Estudio" : "🛠️ Herramientas";
    
    document.body.classList.toggle('reading-mode');
    localStorage.setItem('studyMode', !isHidden);
}

function toggleComparacion() {
    modoComparacion = !modoComparacion;
    const btn = document.getElementById('btnComparar');
    const compCont = document.getElementById('compareContainer');
    const detailsCont = document.getElementById('kingDetails');

    if (modoComparacion) {
        btn.innerText = "🚀 Volver a Modo Individual"; 
        compCont.style.display = "flex"; 
        detailsCont.style.display = "none";
    } else {
        btn.innerText = "⚖️ Activar Comparación Dual"; 
        compCont.style.display = "none"; 
        document.getElementById('fichaA').innerHTML = ""; 
        document.getElementById('fichaB').innerHTML = "";
        fichaActiva = 'A';
    }
}

function exportarFichaEstudio() {
    if (!reySeleccionadoActual) return;
    const r = reySeleccionadoActual;
    const eventos = r.e ? r.e.join(' - ') : '';
    const texto = `📝 FICHA DE ESTUDIO: ${r.n.toUpperCase()}\nREINO: ${r.reinoNombre.toUpperCase()}\nPERIODO: ${r.a} a.C.\nJUICIO: ${r.j}\nPROFETAS: ${r.p}\nREFERENCIA: ${r.s}\nEVENTOS: ${eventos}\n\nGenerado por BibliaMetrics 2026`;

    navigator.clipboard.writeText(texto).then(() => {
        const btn = document.getElementById('btnExportarFicha');
        if(btn) {
            const originalText = btn.innerText;
            btn.innerText = "✅ ¡Copiado!";
            setTimeout(() => btn.innerText = originalText, 2000);
        }
    });
}

function mostrarGuiaMes(idx) {
    const mesInfo = mesesJudios[idx];
    const curiosidad = curiosidadesMensuales[mesInfo.n] ? curiosidadesMensuales[mesInfo.n][0] : "";
    alert(`📅 GUÍA DE ${mesInfo.n.toUpperCase()}\n------------------------\nFoco: ${mesInfo.h}\nClima/Dato: ${curiosidad}`);
}

function actualizarPlanLectura() {
    const mesActual = mesesJudios[new Date().getMonth() % 12].n;
    const sugBox = document.getElementById('sugerenciaEstudio');
    if(sugBox) sugBox.innerHTML = `Plan de <b>${mesActual}</b>: Analiza la relación entre el Trono y el Altar.`;
}

// --- INICIALIZACIÓN ---
window.onload = () => {
    if(localStorage.getItem('theme') === 'dark') document.body.classList.add('dark-mode');
    
    updateUnits();
    renderCalendario();
    actualizarPlanLectura();
    iniciarCronometro();
    
    const mainCard = document.querySelector('.card');
    if(mainCard) mainCard.classList.add('animate-pop');
};

document.getElementById('categorySelector').addEventListener('change', updateUnits);
document.getElementById('unitSelector').addEventListener('change', calculate);
document.getElementById('inputValue').addEventListener('input', calculate);

