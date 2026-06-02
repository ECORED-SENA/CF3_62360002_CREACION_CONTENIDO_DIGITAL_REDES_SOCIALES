export default {
  global: {
    Name: 'Validación y optimización del contenido digital',
    Description:
      'Este componente formativo orienta al aprendiz en la verificación, evaluación y mejora del contenido digital en redes sociales, mediante la aplicación de protocolos de comunicación, análisis de la estructura de publicaciones y revisión de resultados, con el fin de optimizar la efectividad del contenido y su coherencia con la estrategia digital.',
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
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
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
        titulo: 'Protocolos de comunicación en redes sociales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto de protocolos de comunicación digital',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Normas de interacción en redes sociales: netiqueta',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Uso adecuado del lenguaje digital',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Manejo de comentarios, mensajes y respuestas',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Coherencia comunicativa de la marca',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Actividad práctica',
            hash: 't_1_6',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Verificación de la estructura del contenido digital',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Elementos de una publicación ',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Validación del mensaje y objetivo del contenido',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Coherencia con el público objetivo',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Revisión de calidad del contenido digital',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Lista de chequeo para validación de publicaciones',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo: 'Actividad práctica.',
            hash: 't_2_6',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Evaluación del contenido en redes sociales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Concepto de métricas en redes sociales',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Tipos de métricas en redes sociales',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Análisis del desempeño del contenido',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Identificación de errores y aciertos',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Relación entre contenido y resultados',
            hash: 't_3_5',
          },
          {
            numero: '3.6',
            titulo: 'Interpretación de resultados para la toma de decisiones',
            hash: 't_3_6',
          },
          {
            numero: '3.7',
            titulo: 'Actividad práctica',
            hash: 't_3_7',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Ajuste y optimización del contenido digital',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Concepto de optimización de contenido',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Mejora de publicaciones según resultados',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Ajuste del mensaje, formato y estrategia',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Retroalimentación del contenido',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Mejora continua en redes sociales',
            hash: 't_4_5',
          },
          {
            numero: '4.6',
            titulo: 'Actividad práctica',
            hash: 't_4_6',
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
      tema: '',
      referencia: '',
      tipo: 'Sitio web',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'CTA',
      significado:
        'elemento visual o textual que forma parte de un anuncio, mensaje, sitio <i>web</i> u otro entorno digital, cuya función es motivar o guiar a usuarios y clientes a realizar una acción específica, como hacer clic, suscribirse, comprar un producto o descargar un recurso.',
    },
    {
      termino: 'Coherencia comunicativa',
      significado:
        'capacidad de transmitir un mensaje de manera organizada, comprensible y precisa, tanto al hablar como al escribir, para que el receptor pueda entenderlo adecuadamente.',
    },
    {
      termino: '<i>Engagement</i>',
      significado:
        'nivel de compromiso emocional e interacción activa que una persona tiene con una marca, producto o contenido, orientado a construir conexiones reales y duraderas con la audiencia.',
    },
    {
      termino: 'Estrategia digital',
      significado:
        'plan estructurado que utiliza herramientas y canales digitales para alcanzar objetivos comerciales, como aumentar la visibilidad de una marca, generar clientes potenciales, mejorar la conversión y fidelizar clientes.',
    },
    {
      termino: 'Netiqueta',
      significado:
        'conjunto de normas de comportamiento en entornos digitales que facilita la comunicación, la convivencia y el respeto entre usuarios en internet.',
    },
  ],
  referencias: [
    {
      referencia:
        'Lenis, A. (2015, 27 de marzo). Qué es un <i>call to action</i> o CTA y cómo crearlo con éxito. HubSpot. ',
      link: 'https://blog.hubspot.es/website/que-es-call-to-action',
    },
    {
      referencia:
        'Santos, D. (2025, 21 de noviembre). <i>Engagement</i> en <i>marketing</i>: qué es, cómo medirlo y mejorarlo. HubSpot. ',
      link: 'https://blog.hubspot.es/marketing/guia-engagement',
    },
    {
      referencia:
        'Santos, D. (2026, 19 de febrero). Estrategias de <i>marketing</i> digital: guía completa con ejemplos. HubSpot. ',
      link:
        'https://blog.hubspot.es/marketing/guia-completa-estrategia-marketing-digital',
    },
    {
      referencia:
        'Santander Open Academy. (2023, 31 de agosto). ¿Qué son las netiquetas? Ejemplos de cómo emplearlas. ',
      link:
        'https://www.santanderopenacademy.com/es/blog/netiqueta-ejemplos.html',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional 06. <br> Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción Huila',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Joinner Enrique Osorio Martínez',
          cargo: 'Experto temático',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Paola Alexandra Moya',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro XYZ - Regional XYZ',
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
