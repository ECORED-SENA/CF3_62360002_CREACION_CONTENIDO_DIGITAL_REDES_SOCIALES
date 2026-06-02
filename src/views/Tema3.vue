<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Evaluación del contenido en redes sociales
    .row.mb-5.justify-content-center.align-items-center
      .col-12.col-sm-9.col-lg-5.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-left")
        figure.mb-0.text-center
          img(src='@/assets/curso/tema3/img1.png' style="width: 550px").m-auto
      .col-12.col-lg-7.order-2.order-lg-1(data-aos="fade-right")
        p.bg-color-11.p-4.rounded La evaluación del contenido digital es el proceso mediante el cual se analizan los resultados obtenidos a partir de la publicación de contenido en redes sociales, con el fin de determinar su efectividad, impacto y nivel de cumplimiento de los objetivos de comunicación.
        p Este proceso permite identificar si el contenido logró captar la atención del público, generar interacción y cumplir con la intención para la cual fue creado. En el contexto del marketing digital, la evaluación del contenido constituye una etapa fundamental dentro del ciclo de gestión del contenido, ya que proporciona información objetiva basada en datos reales. A diferencia de la percepción subjetiva, la evaluación permite medir el desempeño mediante indicadores específicos, facilitando la toma de decisiones informadas.
        p.mb-0 La evaluación no solo se enfoca en determinar si un contenido obtuvo buenos o bajos resultados, sino en comprender por qué ocurrió. Para ello, es necesario analizar factores como:
    .row.mb-5.justify-content-center.align-items-center
      .col-12.col-sm-9.col-lg-4.order-1.order-lg-1.mb-4.mb-lg-0(data-aos="fade-left")
        figure.mb-0.text-center
          img(src='@/assets/curso/tema3/img2.png' style="width: 600px").m-auto
      .col-12.col-lg-8.order-2.order-lg-2(data-aos="fade-right")
        p.bg-color-9.p-3.rounded 
          ul.lista-ul.color-vinotinto-custom.mb-0
            li.d-flex.mt-3
              i.fas.fa-check-circle.me-3
              p.mb-0 Tipo de contenido publicado. 
            li.d-flex.mt-2
              i.fas.fa-check-circle.me-3
              p.mb-0 Formato utilizado. 
            li.d-flex.mt-2
              i.fas.fa-check-circle.me-3
              p.mb-0 Mensaje comunicado. 
            li.d-flex.mt-2
              i.fas.fa-check-circle.me-3
              p.mb-0 Momento de publicación. 
            li.d-flex.mt-2
              i.fas.fa-check-circle.me-3
              p.mb-0 Respuesta del público.
            p Además, la evaluación del contenido digital permite detectar patrones de comportamiento en la audiencia, identificar qué tipo de publicaciones generan mayor impacto y reconocer oportunidades de mejora. Este análisis es clave para optimizar futuras publicaciones y fortalecer la estrategia digital.
    Separador
    //- Inicio Tema3.1
    .row.mt-5
        #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.1 Concepto de métricas en redes sociales
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.bg-color-10.d-flex.align-items-center.rounded-4.mb-4.mb-lg-0.px-4(data-aos="fade-right" style="min-height: 198px;")
        p.mb-0 Las <b>métricas en redes sociales</b> son indicadores cuantitativos que permiten medir el desempeño de una publicación o de una estrategia digital. Estas métricas proporcionan datos sobre la forma en que los usuarios interactúan con el contenido y permiten evaluar su alcance e impacto.
      .col-lg-3.px-3.mb-4.mb-lg-0(data-aos="zoom-in")
        figure.mb-0.d-flex.justify-content-center
          img(src='@/assets/curso/tema3/img3.png' style="width: 500px;").m-auto
      .col-lg-5.ps-lg-4(data-aos="fade-left")
        .d-flex.flex-column.align-items-start
          img.mb-3(src="@/assets/curso/tema3/img4.svg", alt="" style="width: 70px; height: auto;")
          p.mb-0 Las plataformas digitales ofrecen diferentes herramientas de análisis que facilitan el seguimiento del comportamiento del contenido en tiempo real. El uso adecuado de estas métricas permite transformar datos en información útil para la toma de decisiones. 
    p Entre sus principales funciones se encuentran las siguientes:
    //- Inicio Tarjetas
    .row.justify-content-center.mt-5.mb-3(data-aos="fade-left")      
      .col-12.col-sm-9.col-md-6.col-lg-3.mb-4
        .p-4.br-15.h-100.text-center.shadow.rounded-4.bg-color-white.d-flex.flex-column.align-items-center
          figure.mb-4
            img.mx-auto(src='@/assets/curso/tema3/tarjeta01_1.svg', alt='', style="width: 100px; height: 100px; object-fit: contain;")
          h4 Medir rendimiento
          p.mb-0 Permiten conocer el desempeño general de publicaciones y campañas.
      .col-12.col-sm-9.col-md-6.col-lg-3.mb-4
        .p-4.br-15.h-100.text-center.shadow.rounded-4.bg-color-white.d-flex.flex-column.align-items-center
          figure.mb-4
            img.mx-auto(src='@/assets/curso/tema3/tarjeta01_2.svg', alt='', style="width: 100px; height: 100px; object-fit: contain;")
          h4 Evaluar resultados
          p.mb-0 Facilitan comparar resultados frente a objetivos establecidos.
      .col-12.col-sm-9.col-md-6.col-lg-3.mb-4
        .p-4.br-15.h-100.text-center.shadow.rounded-4.bg-color-white.d-flex.flex-column.align-items-center
          figure.mb-4
            img.mx-auto(src='@/assets/curso/tema3/tarjeta01_3.svg', alt='', style="width: 100px; height: 100px; object-fit: contain;")
          h4 Apoyar decisiones estratégicas
          p.mb-0 Entregan información para ajustar contenidos, horarios y formatos.
      .col-12.col-sm-9.col-md-6.col-lg-3.mb-4
        .p-4.br-15.h-100.text-center.shadow.rounded-4.bg-color-white.d-flex.flex-column.align-items-center
          figure.mb-4
            img.mx-auto(src='@/assets/curso/tema3/tarjeta01_4.svg', alt='', style="width: 100px; height: 100px; object-fit: contain;")
          h4 Identificar oportunidades de mejora
          p.mb-0 Ayudan a detectar fortalezas, debilidades y tendencias de audiencia.
    //- Fin Tarjetas
    p(data-aos="fade-left") En el proceso de validación del contenido digital, las métricas son fundamentales, ya que permiten comprobar si el contenido cumple con los objetivos establecidos y si genera el impacto esperado en la audiencia.   
    Separador
    //- Inicio Tema3.2
    .row.mt-5
        #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.2 Tipos de métricas en redes sociales 
    p(data-aos="fade-left") Existen diferentes tipos de métricas que permiten evaluar distintos aspectos del contenido digital. Cada una proporciona información específica sobre el comportamiento de la audiencia y sobre el desempeño de las publicaciones dentro de una estrategia digital. A continuación, se presentan las principales métricas utilizadas en redes sociales:
    //- Slideshow
    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/tarjeta02_1.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4 Alcance
              p El alcance indica el número de personas que han visto una publicación. Esta métrica permite medir la visibilidad del contenido y su capacidad para llegar a la audiencia objetivo. Un alto alcance puede evidenciar adecuada difusión del mensaje.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/tarjeta02_2.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4 Interacción
              p La interacción hace referencia a las acciones que realizan los usuarios sobre una publicación, como reacciones, comentarios, compartidos, guardados o clics. Permite medir el nivel de participación del público frente al contenido publicado.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/tarjeta02_3.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4 <i>Engagement</i>
              p El <i>engagement</i> corresponde al nivel de compromiso o conexión que los usuarios tienen con el contenido y con la marca. Generalmente se relaciona con la interacción obtenida en proporción al alcance alcanzado, lo que permite evaluar la efectividad de la publicación.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/tarjeta02_4.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4 Visualizaciones
              p Las visualizaciones indican cuántas veces un contenido ha sido reproducido o consultado, especialmente en videos, historias o piezas audiovisuales. Esta métrica permite identificar el nivel de interés generado en la audiencia.
    //- Fin Slideshow
    p(data-aos="fade-left") El análisis conjunto de estas métricas permite comprender mejor el comportamiento de los usuarios, identificar oportunidades de mejora y optimizar futuras publicaciones en redes sociales.
    Separador
    //- Inicio Tema3.3
    .row.mt-5
        #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.3 Análisis del desempeño del contenido
    p(data-aos="fade-left") El análisis del desempeño del contenido consiste en interpretar las métricas obtenidas para comprender cómo está funcionando una publicación en redes sociales. Este proceso implica comparar los resultados con los objetivos establecidos y determinar si el contenido cumple con las expectativas definidas en la estrategia digital.
    .row.justify-content-center.align-items-stretch.mb-2.g-0.bg-color-4.mb-5
      .col-lg-5.d-flex
        figure.mb-0.w-100
          img.h-100.w-100(src='@/assets/curso/tema3/img4.png', alt='', style="object-fit: cover;")
      .col-lg-7.bg-color-4.d-flex.align-items-center.p-4.p-lg-5
        p.mb-0 Evaluar el desempeño no solo permite conocer resultados numéricos, sino también comprender las razones por las cuales una publicación obtuvo mayor o menor impacto. Para realizar un análisis adecuado, es necesario considerar diferentes factores, entre ellos:
          ul.lista-ul.color-vinotinto-custom.mb-0
            li.d-flex.mt-3
              i.fas.fa-check-circle.me-3
              p.mb-0 <b>Tipo de contenido:</b> informativo, promocional, educativo o interactivo. 
            li.d-flex.mt-2
              i.fas.fa-check-circle.me-3
              p.mb-0 <b>Formato utilizado:</b> imagen, video, carrusel, historia o enlace. 
            li.d-flex.mt-2
              i.fas.fa-check-circle.me-3
              p.mb-0 <b>Momento de publicación:</b> día y hora en que se difundió el contenido. 
            li.d-flex.mt-2
              i.fas.fa-check-circle.me-3
              p.mb-0 <b>Comportamiento de la audiencia:</b> nivel de respuesta, participación e interés generado.
    p(data-aos="fade-left") A continuación, se presentan algunos ejemplos frecuentes de interpretación:
    .row.bg-color-1
      .col-12
        .p-5
          //- Inicio Tarjetas
          .row.justify-content-center.mt-1.mb-5(data-aos="fade-left")      
            .col-12.col-sm-9.col-md-6.col-lg-4.mb-4
              .p-4.br-15.h-100.text-center.shadow.rounded-4.d-flex.flex-column.align-items-center.bg-color-14
                figure.mb-4
                  img.mx-auto(src='@/assets/curso/tema3/tarjeta03_1.svg', alt='', style="width: 100px; height: 100px; object-fit: contain;")
                h4 Alto alcance + baja interacción
                p.mb-0 El contenido tuvo visibilidad, pero no logró despertar suficiente interés en la audiencia.
            .col-12.col-sm-9.col-md-6.col-lg-4.mb-4
              .p-4.br-15.h-100.text-center.shadow.rounded-4.d-flex.flex-column.align-items-center.bg-color-14
                figure.mb-4
                  img.mx-auto(src='@/assets/curso/tema3/tarjeta03_2.svg', alt='', style="width: 100px; height: 100px; object-fit: contain;")
                h4 Bajo alcance + alta interacción
                p.mb-0 El contenido resultó atractivo para quienes lo recibieron, aunque tuvo poca difusión.
            .col-12.col-sm-9.col-md-6.col-lg-4.mb-4
              .p-4.br-15.h-100.text-center.shadow.rounded-4.d-flex.flex-column.align-items-center.bg-color-14
                figure.mb-4
                  img.mx-auto(src='@/assets/curso/tema3/tarjeta03_3.svg', alt='', style="width: 100px; height: 100px; object-fit: contain;")
                h4 Alto <i>engagement</i>
                p.mb-0 La publicación fue relevante, atractiva y generó conexión con los usuarios.
          //- Fin Tarjetas
          p(data-aos="fade-left") Este tipo de análisis permite identificar fortalezas y debilidades en el contenido, facilitando la toma de decisiones para mejorar futuras publicaciones.
    //- Título con imagen
    .bg-full-width
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/fondos/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Métricas de alcance y visibilidad
    //- Título con imagen
    p(data-aos="fade-left") Las métricas de alcance permiten identificar cuántas personas han tenido contacto con una publicación. Estas métricas son fundamentales para evaluar la visibilidad del contenido y determinar si está llegando al público objetivo. Entre las principales métricas de alcance se encuentran:
    //- Inicio Infografia
    .row.mb-5.justify-content-center      
      .col-lg-10
        PasosA.color-acento-contenido(tipo="n")
          .row.align-items-center
            .col-lg.mb-4.mb-lg-0
              h3 Alcance total
              p.mb-0 Número de usuarios únicos que recibieron la publicación.
            .col-auto.mx-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema3/linea01_1.png').img125
          .row.align-items-center
            .col-auto.mx-auto.mb-4.mb-lg-0
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema3/linea01_2.png').img125
            .col-lg.text-start.ps-lg-4
              h3 Impresiones
              p.mb-0 Cantidad total de veces que el contenido fue presentado en pantalla, incluso si una misma persona lo recibió varias veces.
          .row.align-items-center
            .col-lg.mb-4.mb-lg-0
              h3 Visualizaciones
              p.mb-0 Número de reproducciones o consultas, especialmente en contenidos audiovisuales.
            .col-auto.mx-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema3/linea01_3.png').img125
    //- Fin Infografia
    .row.justify-content-center.mb-5
      .col-10
        p.p-3.bg-color-10(data-aos="fade-left") El análisis de estas métricas permite comprender el nivel de exposición del contenido y su impacto inicial en la audiencia.
    //- Título con imagen
    .bg-full-width
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/fondos/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Métricas de interacción
    //- Título con imagen
    p(data-aos="fade-left") Las métricas de interacción permiten medir la participación de los usuarios frente al contenido publicado. Reflejan el grado de interés y respuesta generado por la publicación. Entre las principales acciones de interacción se encuentran:
    //- Inicio Tarjetas
    .row.justify-content-center.mt-5.mb-3(data-aos="fade-left")      
      .col-12.col-sm-9.col-md-6.col-lg-3.mb-4
        .p-4.br-15.h-100.text-center.shadow.rounded-4.bg-color-white.d-flex.flex-column.align-items-center
          figure.mb-4
            img.mx-auto(src='@/assets/curso/tema3/tarjeta04_1.svg', alt='', style="width: 100px; height: 100px; object-fit: contain;")
          h4 Me gusta (<i>likes</i>)
          p.mb-0 Reacción positiva inmediata frente al contenido.
      .col-12.col-sm-9.col-md-6.col-lg-3.mb-4
        .p-4.br-15.h-100.text-center.shadow.rounded-4.bg-color-white.d-flex.flex-column.align-items-center
          figure.mb-4
            img.mx-auto(src='@/assets/curso/tema3/tarjeta04_2.svg', alt='', style="width: 100px; height: 100px; object-fit: contain;")
          h4 Comentarios
          p.mb-0 Participación escrita que expresa opinión, pregunta o retroalimentación.
      .col-12.col-sm-9.col-md-6.col-lg-3.mb-4
        .p-4.br-15.h-100.text-center.shadow.rounded-4.bg-color-white.d-flex.flex-column.align-items-center
          figure.mb-4
            img.mx-auto(src='@/assets/curso/tema3/tarjeta04_3.svg', alt='', style="width: 100px; height: 100px; object-fit: contain;")
          h4 Compartidos
          p.mb-0 Acción mediante la cual el usuario difunde el contenido a otras personas.
      .col-12.col-sm-9.col-md-6.col-lg-3.mb-4
        .p-4.br-15.h-100.text-center.shadow.rounded-4.bg-color-white.d-flex.flex-column.align-items-center
          figure.mb-4
            img.mx-auto(src='@/assets/curso/tema3/tarjeta04_4.svg', alt='', style="width: 100px; height: 100px; object-fit: contain;")
          h4 Guardados
          p.mb-0 Señal de utilidad o interés para consultar posteriormente.
    //- Fin Tarjetas
    p(data-aos="fade-left") Estas métricas son clave para evaluar el interés del público y la efectividad del contenido.
    //- Título con imagen
    .bg-full-width
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/fondos/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Métricas de conversión
    //- Título con imagen
    p(data-aos="fade-left") Las métricas de conversión permiten medir si el contenido logra generar una acción específica por parte del usuario. Son especialmente relevantes cuando la estrategia busca resultados comerciales o cumplimiento de objetivos concretos. Entre las conversiones más frecuentes se encuentran:
    .row.bg-color-1
      .col-12
        .p-5
          //- Inicio Tarjetas
          .row.justify-content-center.mb-3(data-aos="fade-left")      
            .col-12.col-sm-9.col-md-6.col-lg-4.mb-4
              .p-4.br-15.h-100.text-center.shadow.rounded-4.d-flex.flex-column.align-items-center.bg-color-14
                figure.mb-4
                  img.mx-auto(src='@/assets/curso/tema3/tarjeta05_1.svg', alt='', style="width: 100px; height: 100px; object-fit: contain;")
                h4 Clic en enlace
                p.mb-0 El usuario accede a una página externa o sitio web.
            .col-12.col-sm-9.col-md-6.col-lg-4.mb-4
              .p-4.br-15.h-100.text-center.shadow.rounded-4.d-flex.flex-column.align-items-center.bg-color-14
                figure.mb-4
                  img.mx-auto(src='@/assets/curso/tema3/tarjeta05_2.svg', alt='', style="width: 100px; height: 100px; object-fit: contain;")
                h4 Compra realizada
                p.mb-0 El contenido impulsa una transacción comercial.
            .col-12.col-sm-9.col-md-6.col-lg-4.mb-4
              .p-4.br-15.h-100.text-center.shadow.rounded-4.d-flex.flex-column.align-items-center.bg-color-14
                figure.mb-4
                  img.mx-auto(src='@/assets/curso/tema3/tarjeta05_3.svg', alt='', style="width: 100px; height: 100px; object-fit: contain;")
                h4 Registro
                p.mb-0 El usuario diligencia formularios o se suscribe a un servicio.
          //- Fin Tarjetas
          p(data-aos="fade-left") Estas métricas son importantes para evaluar el impacto real del contenido en los objetivos estratégicos de la organización.
    Separador
    //- Inicio Tema3.4
    .row.mt-5
        #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.4 Identificación de errores y aciertos
    p(data-aos="fade-left") Uno de los objetivos principales de la evaluación del contenido digital es identificar qué aspectos están funcionando correctamente y cuáles requieren mejora. Este análisis permite optimizar la estrategia de contenido y aumentar su efectividad en redes sociales. Reconocer errores ayuda a corregir debilidades, mientras que identificar aciertos permite replicar buenas prácticas en futuras publicaciones. A continuación, se presentan algunos casos frecuentes:
    //- Inicio Tabla
    .row.bg-color-1
      .col-12
        .p-5
          .row.justify-content-center.mb-5
            .col-md-auto
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Tabla 1.
                span  Errores comunes y aciertos en publicaciones para redes sociales
              .tabla-a
                table
                  thead
                    tr
                      th.text-center(style="width: 40%") Errores comunes
                      th.text-center(style="width: 60%") Aciertos comunes
                  tbody
                    tr
                      td Publicaciones sin objetivo claro.
                      td Mensaje claro y directo.
                    tr
                      td Contenido poco atractivo.
                      td Contenido visual atractivo.
                    tr
                      td Falta de interacción con la audiencia.
                      td Uso adecuado de llamado a la acción (CTA).
                    tr
                      td Uso inadecuado del lenguaje.
                      td Buena interacción con los usuarios.
                    tr
                      td No analizar métricas ni resultados.
                      td Coherencia con la identidad de marca.
          //- FinTabla
          p(data-aos="fade-left") La identificación constante de errores y aciertos permite mejorar la calidad del contenido y fortalecer la estrategia digital.          
    Separador
    //- Inicio Tema3.5
    .row.mt-5
        #t_3_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.5 Relación entre contenido y resultados
    .bloque-texto-g.bloque-texto-g.bg-color-6.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/img5.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Es fundamental comprender que los resultados obtenidos en redes sociales están directamente relacionados con la calidad y estructura del contenido publicado. Una publicación bien diseñada, con mensaje claro y alineada con el público objetivo, tiene mayores probabilidades de generar interacción y cumplir los objetivos de comunicación.
    p(data-aos="fade-left") Cuando los resultados son bajos, no siempre significa falta de interés del público. En muchos casos, puede deberse a factores como:
    .row.mb-5.justify-content-center.align-items-center
      .col-12.col-sm-9.col-lg-5.order-1.order-lg-1.mb-4.mb-lg-0(data-aos="fade-left")
        figure.mb-0.text-center
          img(src='@/assets/curso/tema3/img6.png' style="width: 600px").m-auto
      .col-12.col-lg-7.order-2.order-lg-2(data-aos="fade-right")
        p.bg-color-11.p-4.rounded 
          ul.lista-ul.color-vinotinto-custom.mb-0
            li.d-flex.mt-3
              i.fas.fa-check-circle.me-3
              p.mb-0 Mensaje poco claro. 
            li.d-flex.mt-2
              i.fas.fa-check-circle.me-3
              p.mb-0 Diseño poco atractivo. 
            li.d-flex.mt-2
              i.fas.fa-check-circle.me-3
              p.mb-0 Segmentación inadecuada. 
            li.d-flex.mt-2
              i.fas.fa-check-circle.me-3
              p.mb-0 Horario de publicación poco favorable. 
            li.d-flex.mt-2
              i.fas.fa-check-circle.me-3
              p.mb-0 Formato no adecuado para la plataforma. 
    p(data-aos="fade-left") Analizar la relación entre contenido y resultados permite evaluar si la estrategia digital está funcionando correctamente o si es necesario realizar ajustes. Este proceso contribuye a la mejora continua.            
    Separador
    //- Inicio Tema3.6
    .row.mt-5
        #t_3_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.6 Interpretación de resultados para la toma de decisiones
    p(data-aos="fade-left") La interpretación de resultados consiste en analizar los datos obtenidos para tomar decisiones orientadas al mejoramiento del contenido digital. Este proceso es clave dentro de la validación del contenido, ya que permite ajustar la estrategia con base en información objetiva. Algunas decisiones frecuentes que pueden tomarse son las siguientes:
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
                        img(src='@/assets/curso/tema3/tarjeta06_1.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Cambiar el tipo de contenido
                        p.card-text.text-center
                        | Adaptar publicaciones según preferencias de la audiencia.
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema3/tarjeta06_2.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Ajustar el mensaje
                        p.card-text.text-center
                        | Mejorar claridad, interés o persuasión.
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema3/tarjeta06_3.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Modificar el formato
                        p.card-text.text-center
                        | Usar video, imagen, carrusel u otros recursos más efectivos.
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema3/tarjeta06_4.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Mejorar el diseño
                        p.card-text.text-center
                        | Incrementar impacto visual y profesionalismo.
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema3/tarjeta06_5.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Cambiar el horario de publicación
                        p.card-text.text-center
                        | Aprovechar momentos de mayor actividad de la audiencia.
                  .col-lg-4.order-lg-1.d-none.d-lg-block
                      figure
                        img(src='@/assets/curso/tema3/img7.png', style="max-width: 300px", data-aos="zoom-in").m-auto
          //- Fin Carrusel
    p(data-aos="fade-left") La capacidad de interpretar resultados es una habilidad fundamental en la gestión de contenido digital, ya que permite optimizar la estrategia y mejorar el desempeño de las publicaciones.
    //- Título con imagen
    .bg-full-width
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/fondos/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Ejemplo aplicado de toma de decisiones
    //- Título con imagen
    p.mb-5(data-aos="fade-left") Para comprender mejor la interpretación de resultados, se presenta el siguiente caso práctico relacionado con la evaluación de contenido en redes sociales.
    .col-5
      h3.p-2.bg-color-15.rounded-2 Caso: publicación de producto en Instagram
    p(data-aos="fade-left") A continuación, se presentan los resultados obtenidos:
    //- Inicio Tabla
    .row.bg-color-1
      .col-12
        .p-5
          .row.justify-content-center.mb-2
            .col-md-auto
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Tabla 2.
                span  Métricas básicas de rendimiento en redes sociales
              .tabla-a
                table
                  thead
                    tr
                      th.text-center(style="width: 40%") Métrica
                      th.text-center(style="width: 60%") Resultado
                  tbody
                    tr
                      td <b>Alcance</b> 
                      td 5.000 personas
                    tr
                      td <b>Interacción</b>
                      td 50 likes y 2 comentarios
                    tr
                      td <b><i>Engagement</i></b>
                      td Bajo
            p.mt-5 Aunque la publicación tuvo buen alcance, la interacción fue baja, lo que indica que el contenido no generó suficiente interés en la audiencia. Esto puede relacionarse con factores como mensaje poco atractivo, ausencia de incentivo para participar o formato poco dinámico.
    .bloque-texto-g.bloque-texto-g--inverso.bg-color-8.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/img8.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        h4 Decisiones a tomar:
        ul.lista-ul.color-vinotinto-custom.mb-0
          li.d-flex.mt-3
            i.fas.fa-check-circle.me-3
            p.mb-0 Ajustar el mensaje para hacerlo más atractivo. 
          li.d-flex.mt-2
            i.fas.fa-check-circle.me-3
            p.mb-0 Incluir un llamado a la acción (CTA). 
          li.d-flex.mt-2
            i.fas.fa-check-circle.me-3
            p.mb-0 Mejorar la calidad visual. 
          li.d-flex.mt-2
            i.fas.fa-check-circle.me-3
            p.mb-3 Cambiar el formato y utilizar video en lugar de imagen. 
        h4 Conclusión <br>
        p.mt-5 La interpretación de resultados permite identificar fallas y aplicar mejoras estratégicas en futuras publicaciones.
    //- Título con imagen
    .bg-full-width
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/fondos/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Importancia de la toma de decisiones basada en datos
    //- Título con imagen
    p.mb-5(data-aos="fade-left") La toma de decisiones en redes sociales debe basarse en datos obtenidos a partir de métricas y no en suposiciones. Esto permite reducir errores, mejorar la efectividad del contenido y optimizar la estrategia digital. Las decisiones basadas en datos permiten:
    .row.mb-5.justify-content-center.align-items-center
      .col-12.col-sm-9.col-lg-4.order-1.order-lg-1.mb-4.mb-lg-0(data-aos="fade-left")
        figure.mb-0.text-center
          img(src='@/assets/curso/tema3/img9.png' style="width: 600px").m-auto
      .col-12.col-lg-8.order-2.order-lg-2(data-aos="fade-right")
        p.bg-color-16.p-4.rounded 
          ul.lista-ul.color-vinotinto-custom.mb-0
            li.d-flex.mt-3
              i.fas.fa-check-circle.me-3
              p.mb-0 Identificar qué tipo de contenido funciona mejor. 
            li.d-flex.mt-2
              i.fas.fa-check-circle.me-3
              p.mb-0 Ajustar estrategias de comunicación. 
            li.d-flex.mt-2
              i.fas.fa-check-circle.me-3
              p.mb-0 Mejorar la segmentación del público. 
            li.d-flex.mt-2
              i.fas.fa-check-circle.me-3
              p.mb-0 Incrementar el <i>engagement.</i> 
            li.d-flex.mt-2
              i.fas.fa-check-circle.me-3
              p.mb-0 Optimizar recursos y esfuerzos de publicación.
    p(data-aos="fade-left") Trabajar con información medible fortalece la capacidad de respuesta y mejora los resultados de manera sostenida.
    Separador
    //- Inicio Tema3.7
    .row.mt-5
        #t_3_7.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.7 Actividad práctica
    p(data-aos="fade-left") La siguiente actividad permite aplicar conceptos de evaluación del contenido digital mediante el análisis de una publicación real en redes sociales.
    .row.mb-5.justify-content-center.align-items-center
      .col-12.col-sm-9.col-lg-5.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-left")
        figure.mb-0.text-center
          img(src='@/assets/curso/tema3/img10.png' style="width: 600px").m-auto
      .col-12.col-lg-7.order-2.order-lg-1.bg-color-17.p-2.rounded(data-aos="fade-right")        
        h4 Evaluación de contenido digital
        p Seleccione una publicación de redes sociales y realice el siguiente análisis:
        ul.lista-ul.color-vinotinto-custom.mb-0
          li.d-flex.mt-3
            i.fas.fa-check-circle.me-3
            p.mb-0 Identifique las métricas principales. 
          li.d-flex.mt-2
            i.fas.fa-check-circle.me-3
            p.mb-0 Analice el alcance y la interacción. 
          li.d-flex.mt-2
            i.fas.fa-check-circle.me-3
            p.mb-0 Determine el nivel de <i>engagement</i>. 
          li.d-flex.mt-2
            i.fas.fa-check-circle.me-3
            p.mb-0 Identifique errores y aciertos. 
          li.d-flex.mt-2
            i.fas.fa-check-circle.me-3
            p.mb-3 Proponga mejoras.
        h4 Resultado esperado
        p El aprendiz debe demostrar capacidad para analizar resultados y tomar decisiones basadas en datos.
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
