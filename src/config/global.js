export default {
  global: {
    Name:
      'Transformando la educación: estrategias para entornos saludables y modelos pedagógicos ',
    Description:
      'Para incursionar en la promoción de la educación en entornos saludables, Colombia fortalece competencias pedagógicas dentro del Plan Decenal de Salud Pública (PDSP) 2012-2021 y la Estrategia de Entornos Saludables (EES). Esta iniciativa busca mejorar la calidad de vida mediante acciones educativas centradas en la sostenibilidad ambiental, la salud pública y la equidad, alineadas con la carta de Ottawa de 1986.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Desarrollo de la Estrategia de Entornos Saludables (EES)',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Fases de implementación de entornos saludables',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Estrategia de escuela saludable',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Metodología e instrumentos',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Estrategia de vivienda saludable',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Componentes de la estrategia de vivienda saludable',
            hash: 't_3_1',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Componente educativo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Dimensionamiento de los requerimientos humanos y físicos',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Articulación con la estrategia AIEPI',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Ejecución operativa en terreno del componente educativo',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Componente tecnológico',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo:
              'Elementos de análisis para la implementación de la Estrategia de vivienda saludable (EVS)',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Intervenciones en la vivienda',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Taller de capacitación',
            hash: 't_5_3',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Metodología SARAR',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Aplicaciones de la metodología SARAR',
            hash: 't_6_1',
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
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
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
      tema:
        'Estrategia de la vivienda saludable y el módulo escuela saludable.',
      referencia:
        'Barracudacyp. (2011, 10 febrero). Estrategia de la Vivienda Saludable y el Módulo Escuela Saludable - 1a parte.',
      tipo: 'Video',
      link: 'https://youtu.be/9IE-7BszTM8',
    },
    {
      tema: 'Desarrollo de la Estrategia de Entornos Saludables (EES).',
      referencia:
        'Ministerio de la Protección Social, Ministerio de Educación Nacional & Ministerio de Ambiente, Vivienda y Desarrollo Territorial. (2006). Lineamientos Nacionales para la aplicación y el desarrollo de las Estrategias de Entornos Saludables: escuela saludable y vivienda saludable. Bogotá, Colombia. Isbn 978-958-97582-5-0.',
      tipo: 'PDF',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PP/SA/lineamientos-nacionales-para-la-aplicacion-y-el-desarrollo-de-las-ees.pdf',
    },
    {
      tema: 'Desarrollo de la Estrategia de Entornos Saludables (EES).',
      referencia:
        'Ministerio de Salud y Protección Social. (2017). Políticas favorecedoras para los entornos saludables. Mesa Técnica Nacional de Entornos Saludables - CONASA. Bogotá, Colombia.',
      tipo: 'PDF',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PP/SA/18poliiticas-favorecedoras-mtes.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Estrategia',
      significado:
        'plan estructurado para promover entornos saludables en comunidades.',
    },
    {
      termino: 'Implementación',
      significado:
        'proceso de aplicación de Estrategias para Entornos Saludables.',
    },
    {
      termino: 'Escuela',
      significado:
        'espacio educativo clave en la promoción de salud y bienestar.',
    },
    {
      termino: 'Metodología',
      significado: 'conjunto de técnicas para aplicar estrategias de salud.',
    },
    {
      termino: 'Instrumentos',
      significado:
        'herramientas utilizadas para evaluar y desarrollar entornos saludables.',
    },
    {
      termino: 'Vivienda',
      significado:
        'espacio físico que influye en la salud y calidad de vida de sus habitantes.',
    },
    {
      termino: 'Componentes',
      significado:
        'elementos esenciales de una Estrategia de Vivienda Saludable.',
    },
    {
      termino: 'Educación',
      significado:
        'proceso de formación para fomentar hábitos y entornos saludables.',
    },
    {
      termino: 'Requerimientos',
      significado:
        'recursos humanos y físicos necesarios para la implementación.',
    },
    {
      termino: 'Articulación',
      significado:
        'integración de la estrategia AIEPI con entornos saludables.',
    },
    {
      termino: 'Operación',
      significado:
        'ejecución de actividades en terreno para la educación en salud.',
    },
    {
      termino: 'Tecnología',
      significado:
        'aplicación de innovaciones para mejorar la vivienda y el entorno.',
    },
    {
      termino: 'Capacitación',
      significado:
        'formación de actores clave en la implementación de estrategias.',
    },
    {
      termino: 'SARAR',
      significado:
        'metodología participativa para el desarrollo comunitario en salud.',
    },
    {
      termino: 'Aplicaciones',
      significado:
        'ámbitos de uso de la metodología SARAR en distintos contextos.',
    },
  ],
  referencias: [
    {
      referencia:
        'Ministerio de la Protección Social, Ministerio de Educación Nacional & Ministerio de Ambiente, Vivienda y Desarrollo Territorial. (2006). Lineamientos nacionales para la aplicación y el desarrollo de las Estrategias de Entornos Saludables: escuela saludable y vivienda saludable. Bogotá, Colombia. ISBN 978-958-97582-5-0.',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PP/SA/lineamientos-nacionales-para-la-aplicacion-y-el-desarrollo-de-las-ees.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2017). Políticas favorecedoras para los entornos saludables. Mesa Técnica Nacional de Entornos Saludables - CONASA. Bogotá, Colombia.',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PP/SA/18poliiticas-favorecedoras-mtes.pdf',
    },
    {
      referencia:
        'Ministerio de la Protección Social, Ministerio de Educación Nacional, Ministerio de Ambiente, Vivienda y Desarrollo Territorial, Ministerio de Agricultura. (s.f.). Guía metodológica para la aplicación de la estrategia de vivienda saludable. Servicio Nacional de Aprendizaje (SENA), Organización Panamericana de la Salud (OPS/OMS). Bogotá, Colombia.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (s.f.). Actores que intervienen en la ejecución de la estrategia de entornos saludables. Organización Panamericana de la Salud (OPS/OMS). Bogotá, Colombia.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Catalina Ropero Acero',
          cargo: 'Equipo de diseño curricular',
          centro: 'Regional Distrito Capital',
        },
        {
          nombre: 'Eliana Milena Buitrago Umaña',
          cargo: 'Experta temática ',
          centro: 'Centro de Comercio y Servicios – Regional Tolima',
        },
        {
          nombre: 'Laura Paola Gelvez Manosalva',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico – Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yazmin Rocio Figueroa Pacheco',
          cargo: 'Diseñadora de contenidos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Lucenith Pinilla Moreno',
          cargo: 'Desarrolladora <i>full-stack</i> junior',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Erika Daniela Manrique Rueda',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Andrea Ardila Chaparro',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
