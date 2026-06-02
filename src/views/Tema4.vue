<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Ajuste y optimización del contenido digital
    .row.mb-5.justify-content-center.align-items-center
      .col-12.col-sm-9.col-lg-4.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-left")
        figure.mb-0.text-center
          img(src='@/assets/curso/tema4/img1.png' style="width: 550px").m-auto
      .col-12.col-lg-8.order-2.order-lg-1(data-aos="fade-right")
        p.bg-color-12.p-4.rounded El ajuste y la optimización del contenido digital corresponden a la etapa en la que se aplican mejoras a las publicaciones en redes sociales, con base en los resultados obtenidos previamente. Su propósito es aumentar la efectividad del contenido y fortalecer el cumplimiento de los objetivos de comunicación.
        p.mb-0 Este proceso permite corregir errores, aprovechar aciertos y adaptar las publicaciones a las necesidades del público y a las dinámicas de cada plataforma digital.
    Separador
    //- Inicio Tema4.1
    .row.mt-5
        #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 4.1 Concepto de optimización de contenido
    p(data-aos="fade-left") La <b>optimización del contenido digital</b> es un proceso estratégico y sistemático que consiste en analizar, ajustar y mejorar las publicaciones en redes sociales para aumentar su rendimiento y lograr mejores resultados. Este proceso se basa en la interpretación de métricas y en el análisis del comportamiento de los usuarios frente al contenido publicado. Para optimizar una publicación, se revisan diferentes variables:
    .row.bg-color-2
      .col-12
        .p-5
          //- Carrusel
          .bg-full-width
            .px-4.px-md-5.pb-md-3             
              .carousel-bg
                .row.justify-content-center.align-items-center
                  .col-lg-8.mb-3.mb-lg-0.order-lg-2
                    SlyderF(columnas="col-xl-6 col-lg-6")
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema4/tarjeta01_1.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Mensaje
                        p.card-text.text-center
                        | Claridad, intención y coherencia.
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema4/tarjeta01_2.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Formato
                        p.card-text.text-center
                        | Imagen, video, carrusel o historia.
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema4/tarjeta01_3.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Diseño visual
                        p.card-text.text-center
                        | Colores, tipografía y composición.
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema4/tarjeta01_4.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Momento de publicación
                        p.card-text.text-center
                        | Día y hora de difusión.
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema4/tarjeta01_5.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Interacción generada
                        p.card-text.text-center
                        | Reacciones, comentarios o clics.
                  .col-lg-4.order-lg-1.d-none.d-lg-block
                      figure
                        img(src='@/assets/curso/tema4/img2.png', style="max-width: 300px", data-aos="zoom-in").m-auto
          //- Fin Carrusel
          .row.justify-content-center.mt-5
            .col-10.bg-color-10.p-3
              p A partir de este análisis, se identifican oportunidades de mejora para ajustar el contenido y obtener mejores resultados. La optimización es un proceso continuo, ya que las tendencias digitales, el comportamiento del usuario y los algoritmos cambian constantemente.
    Separador
    //- Inicio Tema4.2
    .row.mt-5
        #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 4.2 Mejora de publicaciones según resultados
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.bg-color-10.d-flex.align-items-center.rounded-4.mb-4.mb-lg-0.px-4(data-aos="fade-right" style="min-height: 215px;")
        p.mb-0 La mejora de publicaciones es una etapa fundamental dentro del proceso de optimización del contenido digital, ya que permite ajustar las publicaciones existentes a partir del análisis de los resultados obtenidos.
      .col-lg-3.px-3.mb-4.mb-lg-0(data-aos="zoom-in")
        figure.mb-0.d-flex.justify-content-center
          img(src='@/assets/curso/tema4/img3.png' style="width: 550px;").m-auto
      .col-lg-5.ps-lg-4(data-aos="fade-left")
        .d-flex.flex-column.align-items-start
          img.mb-3(src="@/assets/curso/tema4/img4.svg", alt="" style="width: 40px;")
          p.mb-0 Este proceso se basa en la interpretación de métricas que indican el desempeño del contenido en términos de alcance, interacción y engagement. Cuando una publicación no cumple con los objetivos esperados, es necesario identificar las causas del bajo rendimiento. Entre los factores que pueden influir en los resultados se encuentran el mensaje, el diseño, el formato y el momento de publicación.          
    //- Inicio Tabla
    .row.bg-color-1
      .col-12
        .p-5
          .row.justify-content-center.mb-5
            .col-md-auto
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Tabla 3.
                span  Factores que afectan el rendimiento del contenido digital
              .tabla-a
                table
                  thead
                    tr
                      th.text-center(style="width: 20%") Factor
                      th.text-center(style="width: 40%") Posible problema
                      th.text-center(style="width: 40%") Impacto
                  tbody
                    tr
                      td <b>Mensaje</b>
                      td Confuso o demasiado extenso.
                      td Baja comprensión del contenido.
                    tr
                      td <b>Imagen</b>
                      td Baja calidad o poco atractiva.
                      td Menor interés del público.
                    tr
                      td <b>CTA</b>
                      td Ausente o poco claro.
                      td Baja conversión o escasa respuesta.
                    tr
                      td <b>Público</b>
                      td Segmentación inadecuada.
                      td Baja interacción.
    //- Título con imagen
    .bg-full-width
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/fondos/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Caso
    //- Título con imagen
    p Una publicación promocional presenta los siguientes resultados: <b>alcance alto e interacción baja.</b> El contenido fue recibido por muchas personas, pero no logró despertar suficiente interés en la audiencia. Esto indica que, aunque tuvo buena visibilidad, no generó una respuesta significativa por parte de los usuarios.
    //- Inicio Tarjetas
    .row.justify-content-center.mt-5
      .col-11.col-sm-9.col-md-6.col-lg-4.mb-4.d-flex.flex-column
        .tarjeta.rounded-3.h-100.bg-white.border.overflow-hidden.shadow
          figure.mb-0
            img(src='@/assets/curso/tema4/img5.png', alt='Saldo en libros').w-100
          .p-4.d-flex.flex-column.justify-content-between.h-100
            div
              h4.card-title.text-center.mb-4 Problemas detectados
              ul.lista-ul.color-vinotinto-custom.mb-0
                li.d-flex.mt-3
                  i.fas.fa-check-circle.me-3
                  p.mb-0 Mensaje poco atractivo.
                li.d-flex.mt-3
                  i.fas.fa-check-circle.me-3
                  p.mb-0 Falta de llamado a la acción.
                li.d-flex.mt-3
                  i.fas.fa-check-circle.me-3
                  p.mb-0 Diseño poco llamativo.
      .col-11.col-sm-9.col-md-6.col-lg-4.mb-4.d-flex.flex-column
        .tarjeta.rounded-3.h-100.bg-white.border.overflow-hidden.shadow
          figure.mb-0
            img(src='@/assets/curso/tema4/img6.png', alt='Saldo en bancos').w-100
          .p-4.d-flex.flex-column.justify-content-between.h-100
            div
              h4.card-title.text-center.mb-4 Acciones de mejora
              ul.lista-ul.color-vinotinto-custom.mb-0
                li.d-flex.mt-3
                  i.fas.fa-check-circle.me-3
                  p.mb-0 Simplificar el mensaje.
                li.d-flex.mt-3
                  i.fas.fa-check-circle.me-3
                  p.mb-0 Incluir un CTA claro.
                li.d-flex.mt-3
                  i.fas.fa-check-circle.me-3
                  p.mb-0 Mejorar el diseño visual.
      .col-11.col-sm-9.col-md-6.col-lg-4.mb-4.d-flex.flex-column
        .tarjeta.rounded-3.h-100.bg-white.border.overflow-hidden.shadow
          figure.mb-0
            img(src='@/assets/curso/tema4/img7.png', alt='Diferencia inicial').w-100
          .p-4.d-flex.flex-column.justify-content-between.h-100
            div
              h4.card-title.text-center.mb-4 Resultado esperado
              ul.lista-ul.color-vinotinto-custom.mb-0
                li.d-flex.mt-3
                  i.fas.fa-check-circle.me-3
                  p.mb-0 Incremento en la interacción.
                li.d-flex.mt-3
                  i.fas.fa-check-circle.me-3
                  p.mb-0 Mayor <i>engagement.</i>
    //- Fin Tarjetas
    p.mt-5(data-aos="fade-left") Este tipo de análisis permite tomar decisiones basadas en datos, lo cual es fundamental en la validación del contenido digital.
    Separador
    //- Inicio Tema4.3
    .row.mt-5
        #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 4.3 Ajuste del mensaje, formato y estrategia
    p(data-aos="fade-left") La optimización del contenido digital requiere la capacidad de realizar ajustes específicos en diferentes elementos de la publicación. Estos ajustes permiten mejorar la calidad del contenido y adaptarlo a las necesidades del público objetivo.
    //- Inicio Accordion
    .bg--img_03.mt-5
    .row.justify-content-center
      .col-lg-3 
        figure(data-aos="zoom-in")
          img.mb-5(src="@/assets/curso/tema4/img8.png", alt="").img400.m-auto
      .col-lg-9
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
          .row(titulo="Ajuste del mensaje")
              p.mb-4 El mensaje es el núcleo del contenido digital. Un mensaje mal estructurado puede afectar la comprensión del contenido y reducir su impacto en la audiencia. Para fortalecerlo, se recomienda revisar la <b>claridad</b>, la <b>brevedad</b>, la <b>coherencia</b> y el <b>enfoque en el usuario</b>. Ejemplo: antes, “Tenemos productos de excelente calidad para mejorar tu experiencia”; después, “Mejora tu día con productos diseñados para ti”.
          .row(titulo="Ajuste del formato")
              p.mb-4 El formato influye directamente en la forma en que el usuario recibe la información. Elegir el formato adecuado puede aumentar el alcance y la interacción. La <b>imagen</b> es útil para mensajes simples o promocionales; el video genera mayor impacto y dinamismo; el <b>carrusel</b> favorece contenidos educativos o explicativos.
          .row(titulo="Ajuste de la estrategia")
              p.mb-4 Implica modificar la forma en que se comunica el contenido, considerando variables como el <b>tipo de contenido publicado</b>, la <b>frecuencia de publicación</b>, el <b>público objetivo</b> y el <b>canal digital utilizado</b>. Este ajuste permite mejorar la alineación entre el contenido y los objetivos de la marca.
    //- Fin Accordion
    //- Título con imagen
    .bg-full-width
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/fondos/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Comparación antes y después de la optimización
    //- Título con imagen
    p(data-aos="fade-left") La siguiente comparación permite identificar el impacto de los ajustes realizados:
    //- Inicio Tabla
    .row.bg-color-1
      .col-12
        .p-5
          .row.justify-content-center.mb-2
            .col-md-auto
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Tabla 4.
                span  Comparación de mejoras en una publicación digital
              .tabla-a
                table
                  thead
                    tr
                      th.text-center(style="width: 20%") Elemento
                      th.text-center(style="width: 40%") Antes
                      th.text-center(style="width: 40%") Después
                  tbody
                    tr
                      td <b>Mensaje</b>
                      td Largo y confuso.
                      td Claro y directo.
                    tr
                      td <b>Imagen</b>
                      td Baja calidad.
                      td Alta resolución.
                    tr
                      td <b>CTA</b>
                      td No tiene.
                      td Compra ahora.
                    tr
                      td <b>Resultado</b>
                      td Baja interacción.
                      td Alta interacción.
            p.mt-5(data-aos="fade-left") Este tipo de análisis permite evidenciar el valor de la optimización del contenido digital.
    //- Título con imagen
    .bg-full-width
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/fondos/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Criterios para optimizar contenido digital    
    //- Título con imagen
    p(data-aos="fade-left") Para optimizar correctamente el contenido digital, se deben tener en cuenta los siguientes criterios:
    .row.bg-color-2
      .col-12
        .p-5
          //- Carrusel
          .bg-full-width
            .px-4.px-md-5.pb-md-3             
              .carousel-bg
                .row.justify-content-center.align-items-center
                  .col-lg-8.mb-3.mb-lg-0.order-lg-2
                    SlyderF(columnas="col-xl-6 col-lg-6")
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema4/tarjeta02_1.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Claridad del mensaje
                        p.card-text.text-center
                        | Facilita comprensión inmediata.
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema4/tarjeta02_2.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Calidad visual
                        p.card-text.text-center
                        | Mejora impacto y percepción profesional.
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema4/tarjeta02_3.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Coherencia con la marca
                        p.card-text.text-center
                        | Refuerza identidad institucional.
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema4/tarjeta02_4.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Adecuación al público objetivo
                        p.card-text.text-center
                        | Incrementa relevancia del contenido.
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema4/tarjeta02_5.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Uso de CTA
                        p.card-text.text-center
                        | Motiva acciones del usuario.
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema4/tarjeta02_6.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Adaptación al canal digital
                        p.card-text.text-center
                        | Ajusta formato y lenguaje según plataforma.
                  .col-lg-4.order-lg-1.d-none.d-lg-block
                      figure
                        img(src='@/assets/curso/tema4/img9.png', style="width: 300px", data-aos="zoom-in").m-auto          
    .row.justify-content-center
      .col-10.bg-color-18
        p.p-2 Estos criterios permiten realizar ajustes de manera estructurada y mejorar la efectividad del contenido.
    Separador
    //- Inicio Tema4.4
    .row.mt-5
        #t_4_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 4.4 Retroalimentación del contenido
    .bloque-texto-g.bloque-texto-g.bg-color-6.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema4/img10.png')})`}"
      )
      .bloque-texto-g__texto.p-5
        p.mb-0 La retroalimentación es un proceso clave dentro de la optimización del contenido digital, ya que permite obtener <b>información sobre el desempeño de las publicaciones</b> a partir de diferentes fuentes. Esta información resulta fundamental para identificar oportunidades de mejora y realizar ajustes adecuados.
    p(data-aos="fade-left") La retroalimentación no solo proviene de datos numéricos, sino también de la respuesta directa de los <b>usuarios y del análisis interno</b> realizado por el equipo responsable de la estrategia digital. A continuación, se presentan algunas fuentes frecuentes de retroalimentación:
    //- Inicio Tabla
    .row.bg-color-1
      .col-12
        .p-5
          .row.justify-content-center.mb-5
            .col-md-auto
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Tabla 5.
                span  Fuentes de información para evaluar contenido digital
              .tabla-a
                table
                  thead
                    tr
                      th.text-center(style="width: 20%") Fuente
                      th.text-center(style="width: 40%") Tipo de información
                      th.text-center(style="width: 40%") Utilidad
                  tbody
                    tr
                      td <b>Métricas</b>
                      td Datos cuantitativos.
                      td Evaluar rendimiento del contenido.
                    tr
                      td <b>Comentarios</b>
                      td Opiniones y reacciones del usuario.
                      td Detectar fortalezas o aspectos por mejorar.
                    tr
                      td <b>Mensajes</b>
                      td Experiencia directa del cliente.
                      td Ajustar atención y comunicación.
                    tr
                      td <b>Análisis interno</b>
                      td Evaluación profesional del equipo.
                      td Optimizar estrategia y procesos.
    p(data-aos="fade-left") La retroalimentación permite identificar patrones de comportamiento en la audiencia, lo cual facilita la toma de decisiones estratégicas. Por ejemplo, si un tipo de contenido genera mayor interacción, puede replicarse esa estrategia en futuras publicaciones.
    Separador
    //- Inicio Tema4.5
    .row.mt-5
        #t_4_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 4.5 Mejora continua en redes sociales
    p(data-aos="fade-left") La mejora continua es un enfoque metodológico que consiste en <b>evaluar y optimizar el contenido digital</b> de manera constante. Este proceso permite que la estrategia digital evolucione y se adapte a los cambios del entorno. Aplicar mejora continua implica revisar resultados, implementar ajustes y volver a evaluar el desempeño del contenido. El ciclo general puede desarrollarse de la siguiente manera:
    .row.mb-5.justify-content-center.align-items-center
      .col-12.col-sm-9.col-lg-6.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-left")
        figure.mb-0.text-center
          img(src='@/assets/curso/tema4/img11.png' style="width: 600px").m-auto
      .col-12.col-lg-6.order-2.order-lg-1(data-aos="fade-right")
        p.bg-color-9.p-3.rounded 
          ul.lista-ul.color-vinotinto-custom.mb-0
            li.d-flex.mt-3
              i.fas.fa-check-circle.me-3
              p.mb-0 Publicar contenido. 
            li.d-flex.mt-2
              i.fas.fa-check-circle.me-3
              p.mb-0 Analizar métricas. 
            li.d-flex.mt-2
              i.fas.fa-check-circle.me-3
              p.mb-0 Identificar errores. 
            li.d-flex.mt-2
              i.fas.fa-check-circle.me-3
              p.mb-0 Detectar oportunidades de mejora. 
            li.d-flex.mt-2
              i.fas.fa-check-circle.me-3
              p.mb-0 Aplicar ajustes. 
            li.d-flex.mt-2
              i.fas.fa-check-circle.me-3
              p.mb-0 Evaluar nuevamente.
    p(data-aos="fade-left") Este ciclo permite que el contenido digital mejore progresivamente, aumentando su efectividad y su impacto en la audiencia. 
    .row.mb-5.justify-content-center.align-items-center
      .col-12.col-sm-9.col-lg-5.order-1.order-lg-1.mb-4.mb-lg-0(data-aos="fade-left")
        figure.mb-0.text-center
          img(src='@/assets/curso/tema4/img12.png' style="width: 600px").m-auto
      .col-12.col-lg-7.order-2.order-lg-2(data-aos="fade-right")
        p.bg-color-17.p-5.rounded Entre sus principales beneficios se encuentran:
          ul.lista-ul.color-vinotinto-custom.mb-0
            li.d-flex.mt-3
              i.fas.fa-check-circle.me-3
              p.mb-0 Mayor calidad del contenido. 
            li.d-flex.mt-2
              i.fas.fa-check-circle.me-3
              p.mb-0 Incremento del <i>engagement.</i> 
            li.d-flex.mt-2
              i.fas.fa-check-circle.me-3
              p.mb-0 Mejor posicionamiento digital. 
            li.d-flex.mt-2
              i.fas.fa-check-circle.me-3
              p.mb-0 Adaptación a tendencias y cambios del entorno.
    //- Título con imagen
    .bg-full-width
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/fondos/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Importancia de la mejora continua en redes sociales 
    //- Título con imagen
    .row.mb-5.justify-content-center.align-items-center
      .col-12.col-sm-9.col-lg-4.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-left")
        figure.mb-0.text-center
          img(src='@/assets/curso/tema4/img13.png' style="width: 600px").m-auto
      .col-12.col-lg-8.order-2.order-lg-1(data-aos="fade-right")
        p La mejora continua permite que las estrategias digitales evolucionen de acuerdo con los cambios del entorno y con las necesidades del público.
        p.bg-color-9.p-4.rounded En redes sociales, donde las tendencias cambian constantemente, es fundamental realizar ajustes permanentes en el contenido, los formatos y la comunicación. Una estrategia que no se optimiza pierde relevancia y disminuye su impacto en la audiencia.
        p Por esta razón, la mejora continua fortalece la competitividad digital y favorece resultados sostenibles en el tiempo.
    //- Título con imagen
    .bg-full-width
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/fondos/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Ejemplo de mejora continua aplicada
    //- Título con imagen
    p(data-aos="fade-left") Para comprender su aplicación práctica, se presenta el siguiente caso:
    //- Inicio Tarjetas
    .row.justify-content-center.mt-5
      .col-11.col-sm-9.col-md-6.col-lg-4.mb-4.d-flex.flex-column
        .tarjeta.rounded-3.h-100.bg-white.border.overflow-hidden.shadow
          figure.mb-0
            img(src='@/assets/curso/tema4/tarjeta03_1.png', alt='Saldo en libros').w-100
          .p-4.d-flex.flex-column.justify-content-between.h-100
            div
              h4.card-title.text-center.mb-4 Semana 1
              p Publicaciones sin estrategia y baja interacción.
      .col-11.col-sm-9.col-md-6.col-lg-4.mb-4.d-flex.flex-column
        .tarjeta.rounded-3.h-100.bg-white.border.overflow-hidden.shadow
          figure.mb-0
            img(src='@/assets/curso/tema4/tarjeta03_2.png', alt='Saldo en bancos').w-100
          .p-4.d-flex.flex-column.justify-content-between.h-100
            div
              h4.card-title.text-center.mb-4 Semana 2
              p Se aplican mejoras en diseño y mensaje. Aumenta la interacción.
      .col-11.col-sm-9.col-md-6.col-lg-4.mb-4.d-flex.flex-column
        .tarjeta.rounded-3.h-100.bg-white.border.overflow-hidden.shadow
          figure.mb-0
            img(src='@/assets/curso/tema4/tarjeta03_3.png', alt='Diferencia inicial').w-100
          .p-4.d-flex.flex-column.justify-content-between.h-100
            div
              h4.card-title.text-center.mb-4 Semana 3
              p El contenido se optimiza según métricas. Incrementa el <i>engagement.</i>
    //- Fin Tarjetas
    p.mt-5(data-aos="fade-left") Este proceso demuestra cómo la mejora continua permite fortalecer la estrategia digital y mejorar progresivamente los resultados obtenidos.
    Separador
    //- Inicio Tema4.6
    .row.mt-6
        #t_4_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 4.5 Actividad práctica
    p.mb-5(data-aos="fade-left") La siguiente actividad integra los conceptos trabajados sobre evaluación, ajuste y optimización del contenido digital. Su propósito es fortalecer la capacidad de análisis estratégico frente al desempeño de publicaciones en redes sociales.
    //- Título con imagen
    .bg-full-width
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/fondos/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Optimización avanzada de contenido digital
    //- Título con imagen
    p.mb-5(data-aos="fade-left") Seleccione una publicación real o una creada anteriormente y desarrolle el siguiente proceso:
    //- Inicio Infografia
    .row.mb-5.justify-content-center      
      .col-lg-9
        PasosA.color-acento-contenido(tipo="n")
          .row.align-items-center
            .col-lg.mb-4.mb-lg-0
              h3 Fase 1. Diagnóstico
              p.mb-0 Identifique el objetivo del contenido. 
              p.mb-0 Analice métricas de <b>alcance, interacción y <i>engagement.</i></b>
            .col-auto.mx-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema4/linea01_1.png').img125
          .row.align-items-center
            .col-auto.mx-auto.mb-4.mb-lg-0
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema4/linea01_2.png').img125
            .col-lg.text-start.ps-lg-4
              h3 Fase 2. Evaluación
              p.mb-0 Identifique errores en <b>mensaje, diseño, formato y estructura.</b>
          .row.align-items-center
            .col-lg.mb-4.mb-lg-0
              h3 Fase 3. Optimización
              p.mb-0 Proponga mejoras en <b>mensaje, formato y estrategia.</b>
            .col-auto.mx-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema4/linea01_3.png').img125
          .row.align-items-center
            .col-auto.mx-auto.mb-4.mb-lg-0
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema4/linea01_4.png').img125
            .col-lg.text-start.ps-lg-4
              h3 Fase 4. Propuesta final
              p.mb-0 Rediseñe la publicación mediante una descripción completa del cambio. 
              p.mb-0 Justifique los cambios realizados.
    //- Fin Infografia
    .row.mb-5.justify-content-center.align-items-center
      .col-12.col-sm-9.col-lg-4.order-1.order-lg-1.mb-4.mb-lg-0(data-aos="fade-left")
        figure.mb-0.text-center
          img(src='@/assets/curso/tema4/img14.png' style="width: 550px").m-auto
      .col-12.col-lg-8.order-2.order-lg-2(data-aos="fade-right")
        p Para desarrollar la actividad, se recomienda sustentar cada decisión con base en métricas, comportamiento de la audiencia y objetivos de comunicación.
        p.mb-0.bg-color-19.p-5.rounded <b>Resultado esperado:</b> el aprendiz debe demostrar la capacidad de analizar, evaluar y optimizar contenido digital de manera estructurada, aplicando criterios técnicos y estratégicos.
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
