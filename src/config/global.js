export default {
  global: {
    componenteFormativo:
      '<i>Help me, please!</i><br><span>¡Ayúdame, por favor!</span>',
    descripcionCurso:
      'El componente formativo inicial para este tercer nivel está destinado al desarrollo de temáticas sobre indicaciones en la ciudad, preposiciones de lugar, verbos modales, entre otras,  que le permiten resaltar los conocimientos de la lengua inglesa de acuerdo con las necesidades sociales y laborales establecidas en el Marco Común Europeo.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/4.svg'),
      },
      {
        clases: ['banner-principal-decorativo-5', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/5.svg'),
      },
      {
        clases: ['banner-principal-decorativo-6'],
        imagen: require('@/assets/curso/portada/6.svg'),
      },
      {
        clases: ['banner-principal-decorativo-7', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/7.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Indicando direcciones. <i>Please, where is the bank?</i>',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Lugares de la ciudad',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo:
              'Proporcionando indicaciones para llegar a un lugar en la ciudad',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Preposiciones de lugar. <i>Where are you?</i>',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Uso de las preposiciones de lugar',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Ubicación de las preposiciones de lugar',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Estructura gramatical. <i>What are you doing?</i>',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Verbo <i>to be</i> (ser o estar)',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'El presente continuo',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Expresión <i>“There-be”. Is there a parcel for me?</i>',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo:
          '<i>Wh questions</i> y verbos modales (<i>can/could). What’s that?</i>',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Estructura gramatical de la <i>wh question</i>',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Uso de los verbos modales <i>can y could</i>',
            hash: 't_5_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Indicando direcciones. <i>Please, where is the bank?</i>',
      referencia:
        'Smith, S. (2019). Cómo dar indicaciones en inglés para llegar a un sitio. British Council España. ',
      tipo: 'Web',
      link: 'https://www.britishcouncil.es/blog/como-dar-direcciones-en-ingles',
    },
    {
      tema: 'Preposiciones de lugar. <i>Where are you?</i>',
      referencia:
        'Prieto, E. (s. f.). Preposiciones de lugar: para ubicar y de movimiento. Tu escuela de español. ',
      tipo: 'Web',
      link:
        'https://www.tuescueladeespanol.es/blogs/preposiciones-de-lugar-ubicacion',
    },
    {
      tema: 'Estructura gramatical. <i>What are you doing?</i>',
      referencia:
        'ABA English. (s. f.). Present simple vs present continuous. ',
      tipo: 'Web',
      link:
        'https://www.abaenglish.com/es/gramatica-ingles/lower-intermediate/simple-present-present-continuous',
    },
    {
      tema: 'Expresión <i>“There-be”. Is there a parcel for me?</i>',
      referencia:
        'EF English Live. (s. f.) Como usar ‘there is’ y ‘there are’. ',
      tipo: 'Web',
      link:
        'https://englishlive.ef.com/es-es/blog/gramatica-ingles/there-is-there-are',
    },
    {
      tema:
        '<i>Wh questions</i> y verbos modales <i>(can/could). What’s that?</i>',
      referencia: 'Ringteacher. (2022). Can y Could en inglés. ',
      tipo: 'Web',
      link:
        'https://www.ringteacher.com/materiales-didacticos/tiempos-verbales-ingles-modales/can-could-ingles',
    },
  ],
  glosario: [
    {
      termino: 'Preposiciones de lugar',
      significado:
        'palabras o expresiones que nos permiten decir con exactitud la posición o lugar donde se encuentra una persona, un animal o una cosa.',
    },
    {
      termino: 'Verbos regulares',
      significado:
        'son aquellos verbos que pueden conjugarse en tiempo presente y futuro sin que se modifique su raíz, aunque al conjugarlo en tiempo pasado deben seguirse algunas reglas.',
    },
    {
      termino: 'Verbos irregulares',
      significado:
        'son aquellos verbos que cambian al ser conjugados en tiempo pasado y al formar el participio pasado, pues no siguen un patrón típico de conjugación.',
    },
    {
      termino: 'Verbo modal (<i>modal verbs</i>)',
      significado:
        'son aquellos verbos que permiten expresar probabilidades, necesidades, consejos, solicitudes, deberes, entre otras ideas que, en algunos casos, pueden transformarse, lo cual va a depender del mismo verbo y del contexto en el cual está inmerso.',
    },
    {
      termino: '<em>Wh questions</em>',
      significado:
        'son preguntas que comienzan con un pronombre interrogativo, cuyas dos primeras letras son “<i>wh</i>”, como <i>where</i>, <i>when</i>, <i>who</i>, entre otros. También se incluye <i>how</i>, aun cuando no comienza con la letra “w”. Sirven para obtener información sobre algo o alguien, la hora del día, un lugar, entre otras.',
    },
  ],
  referencias: [
    {
      referencia:
        'González, A. y Sierra, N. (2008). Retos y posibilidades de la enseñanza del inglés basada en contenidos en la educación superior: Visión de los docentes en una experiencia en Colombia. Núcleo, 20(25), p. 125-148. ',
      link:
        'http://ve.scielo.org/scielo.php?script=sci_arttext&pid=S0798-97842008000100007&lng=es&tlng=es ',
    },
    {
      referencia:
        'Zamora, V. (2020). Bases para aprender a hacer preguntas en inglés. British Council México. ',
      link: 'https://www.britishcouncil.org.mx/blog/preguntas-ingles ',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Miguel Ángel Cárdenas López',
        cargo: 'Experto temático',
        centro:
          'Regional Distrito Capital - Centro para la Industria de la Comunicación Gráfica.',
      },
      {
        nombre: 'Óscar Absalón Guevara',
        cargo: 'Diseñador instruccional',
        centro:
          'Regional Santander - Centro de la Industria, la Empresa y los Servicios.',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Asesora metodológica',
        centro: 'Regional Distrito Capital – Centro de Diseño y Metrología.',
      },
      {
        nombre: 'Darío González',
        cargo: 'Corrector de estilo',
        centro: 'Regional Distrito Capital – Centro de Diseño y Metrología.',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Blanca Flor Tinoco Torres',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Revisión de guión audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Laura Ximena Hurtado Villalba',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Lina Marcela Pérez Manchego',
        cargo: 'Validación audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Edward Leonardo Pico Cabra',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Lina Marcela Perez',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
