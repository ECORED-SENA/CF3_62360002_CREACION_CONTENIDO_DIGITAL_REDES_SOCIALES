<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Verificación de la estructura del contenido digital
    p(data-aos="fade-left") A continuación, se presenta un pódcast sobre la verificación de la estructura del contenido digital, resaltando su importancia para garantizar publicaciones coherentes, de calidad y alineadas con los objetivos de la estrategia de comunicación digital.
    //- Inicio Podcast
    .container-fluid.tarjeta.tarjeta--blanca.px-0.mb-2
      .row.g-0.align-items-stretch
        .col-lg-7.mb-3
          .p-4.p-md-5.bg-custom-dark-teal.h-100.rounded-4
            .row.align-items-center
              .col-md-5.text-center.mb-4.mb-md-0
                img(src="@/assets/curso/tema2/podcast.svg" style="max-width: 200px;").img-fluid
              .col-md-7.ps-md-4
                h2.mb-3.fw-bold(style="color:#fff") Pódcast
                .tarjeta.bg-white.p-3.shadow-sm.border-lemon
                  h5.mb-3.fw-bold Verificación de la estructura del contenido digital
                  TarjetaAudio.color-primario(
                    texto="" 
                    :audio="require('@/assets/componentes/audios/podcast.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
                    .indicador--click(v-if="mostrarIndicadorTarjetaAudio")        
        .col-lg-5
          figure.mb-0
            img(src='@/assets/curso/tema2/img1.png' style="width: 600px;").m-auto
    //- Fin Podcast
    Separador
    //- Inicio Tema2.1
    .row.mt-5
        #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.1 Elementos de una publicación
    p(data-aos="fade-left") Toda publicación en redes sociales está compuesta por diferentes elementos que cumplen funciones específicas dentro del proceso de comunicación. La correcta estructuración de estos elementos es fundamental para garantizar la efectividad del contenido y su adecuada interpretación por parte del usuario. A continuación, se presentan los principales elementos de una publicación digital:
    //- Pestanas horizontales
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5(data-aos="fade-right")
        TabsC.color-acento-contenido.mt-1
          .py-3.py-md-4(titulo="Texto o <i>copy</i>")
            .row.align-items-center
              .col-md-5
                figure
                  img(src='@/assets/curso/tema2/tarjeta01_1.png')
              .col-md-7.mb-4.mb-md-0
                h4 Texto o <i>copy</i>
                p Comunica el mensaje principal de la publicación. Debe revisarse claridad, concisión, ortografía, redacción y coherencia con el objetivo del contenido.
          .py-3.py-md-4(titulo="Imagen o video")
            .row.align-items-center
              .col-md-5.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/tema2/tarjeta01_2.png')
              .col-md-7
                h4 Imagen o video
                p Capta la atención del usuario y fortalece la comprensión del mensaje. Se debe validar calidad, diseño, formato y relación con el texto publicado.
          .py-3.py-md-4(titulo="Llamado a la acción (CTA)")
            .row.align-items-center
              .col-md-5.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/tema2/tarjeta01_3.png')
              .col-md-7
                h4 Llamado a la acción (CTA)
                p Indica la acción esperada del usuario, como comentar, compartir, comprar o ingresar a un enlace. Debe ser claro, directo y pertinente..
          .py-3.py-md-4(titulo="<i>Hashtags</i>")
            .row.align-items-center
              .col-md-5.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/tema2/tarjeta01_4.png')
              .col-md-7
                h4 <i>Hashtags</i>
                p Facilitan la categorización del contenido y mejoran su alcance en plataformas digitales. Se verifica relevancia, cantidad y relación con la temática.
    //- Cierres Pestanas horizontales
    p(data-aos="fade-left") La revisión de estos elementos permite garantizar que la publicación esté correctamente estructurada y que cumpla su función dentro de la estrategia digital.
    Separador
    //- Inicio Tema2.2
    .row.mt-5
        #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.2 Validación del mensaje y objetivo del contenido
    .row.mb-5.justify-content-center.align-items-center
      .col-12.col-sm-9.col-lg-4.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-left")
        figure.mb-0.text-center
          img(src='@/assets/curso/tema2/img2.png' style="width: 350px").m-auto
      .col-12.col-lg-8.order-2.order-lg-1(data-aos="fade-right")
        p.bg-color-5.p-4.rounded-4 Uno de los aspectos más importantes en la verificación del contenido digital es asegurar que el mensaje sea <b>claro, coherente y esté alineado con el objetivo de la publicación.</b> Cada contenido debe responder a una intención específica, ya sea <b>informar, promocionar, educar o generar interacción.</b>
        p.mb-0 La validación del mensaje implica analizar si el contenido transmite la idea principal de manera comprensible y si está dirigido correctamente al público objetivo. Un mensaje confuso, ambiguo o mal estructurado puede generar desinterés en el usuario y dificultar la interpretación del contenido.
    .bloque-texto-g.bloque-texto-g.bg-color-8.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img3.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p Para realizar esta validación, se recomienda revisar los siguientes aspectos:
        ul.lista-ul.color-vinotinto-custom.mb-0
          li.d-flex.mt-3
            i.fas.fa-check-circle.me-3
            p.mb-0 <b>Claridad del mensaje:</b> la idea principal debe entenderse con facilidad. 
          li.d-flex.mt-2
            i.fas.fa-check-circle.me-3
            p.mb-0 <b>Coherencia con el objetivo:</b> el contenido debe responder al propósito para el cual fue creado. 
          li.d-flex.mt-2
            i.fas.fa-check-circle.me-3
            p.mb-0 <b>Relación con el público objetivo:</b> el mensaje debe ajustarse a las características e intereses de la audiencia. 
          li.d-flex.mt-2
            i.fas.fa-check-circle.me-3
            p.mb-0 <b>Uso adecuado del lenguaje:</b> el tono, estilo y nivel de formalidad deben corresponder con la marca y la plataforma utilizada.
    .row.mb-5.justify-content-center.align-items-center
      .col-12.col-sm-9.col-lg-5.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-left")
        figure.mb-0.text-center
          img(src='@/assets/curso/tema2/img4.png' style="width: 500px").m-auto
      .col-12.col-lg-7.order-2.order-lg-1(data-aos="fade-right")
        p.mb-0 <b>Por ejemplo,</b> una publicación incorrecta suele presentar textos extensos, sin enfoque claro y sin una acción definida. En cambio, una publicación correcta comunica una idea puntual, utiliza lenguaje directo y responde a un propósito específico.
        p.bg-color-9.p-2 Además, es importante verificar que el contenido esté alineado con la estrategia de comunicación de la marca. Esto implica que el mensaje debe reflejar los valores institucionales, mantener el tono definido y fortalecer la identidad organizacional. La validación adecuada del mensaje incrementa la efectividad de las publicaciones, mejora la comprensión del usuario y favorece el cumplimiento de los objetivos planteados en la estrategia digital.
    Separador
    //- Inicio Tema2.3
    .row.mt-5
        #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.3 Coherencia con el público objetivo
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.bg-color-10.d-flex.align-items-center.rounded-4.mb-4.mb-lg-0.px-4(data-aos="fade-right" style="min-height: 198px;")
        p.mb-0 La coherencia con el público objetivo es un criterio fundamental en la validación del contenido digital. Cada publicación debe diseñarse teniendo en cuenta <b>las características, intereses y necesidades de la audiencia</b> a la que se dirige.
      .col-lg-3.px-3.mb-4.mb-lg-0(data-aos="zoom-in")
        figure.mb-0.d-flex.justify-content-center
          img(src='@/assets/curso/tema2/img5.png' style="width: 500px;").m-auto
      .col-lg-5.ps-lg-4(data-aos="fade-left")
        .d-flex.flex-column.align-items-start
          img.mb-3(src="@/assets/curso/tema2/icon.svg", alt="" style="width: 70px; height: auto;")
          p.mb-0 Un contenido que no está alineado con el público objetivo puede resultar poco relevante, generar baja interacción e incluso afectar la percepción de la marca. Por esta razón, es necesario <b>verificar que el mensaje, el formato y el estilo</b> correspondan al perfil del usuario.
    P Para realizar esta validación, conviene revisar los siguientes aspectos:
    //- Inicio Tarjetas
    .row.justify-content-center.mt-5.mb-5(data-aos="fade-left")      
      .col-12.col-sm-9.col-md-6.col-lg-3.mb-4
        .p-4.br-15.h-100.text-center.shadow.rounded-4.bg-color-white.d-flex.flex-column.align-items-center
          figure.mb-4
            img.mx-auto(src='@/assets/curso/tema2/tarjeta02_1.svg', alt='', style="width: 100px; height: 100px; object-fit: contain;")
          h4 Edad del público
          p.mb-0 Permite ajustar tono, referencias y formato del contenido.
      .col-12.col-sm-9.col-md-6.col-lg-3.mb-4
        .p-4.br-15.h-100.text-center.shadow.rounded-4.bg-color-white.d-flex.flex-column.align-items-center
          figure.mb-4
            img.mx-auto(src='@/assets/curso/tema2/tarjeta02_2.svg', alt='', style="width: 100px; height: 100px; object-fit: contain;")
          h4 Intereses
          p.mb-0 Facilita la creación de publicaciones relacionadas con temas relevantes para la audiencia.
      .col-12.col-sm-9.col-md-6.col-lg-3.mb-4
        .p-4.br-15.h-100.text-center.shadow.rounded-4.bg-color-white.d-flex.flex-column.align-items-center
          figure.mb-4
            img.mx-auto(src='@/assets/curso/tema2/tarjeta02_3.svg', alt='', style="width: 100px; height: 100px; object-fit: contain;")
          h4 Nivel de conocimiento
          p.mb-0 Ayuda a definir si el contenido debe ser básico, intermedio o especializado.
      .col-12.col-sm-9.col-md-6.col-lg-3.mb-4
        .p-4.br-15.h-100.text-center.shadow.rounded-4.bg-color-white.d-flex.flex-column.align-items-center
          figure.mb-4
            img.mx-auto(src='@/assets/curso/tema2/tarjeta02_4.svg', alt='', style="width: 100px; height: 100px; object-fit: contain;")
          h4 Tipo de lenguaje
          p.mb-0 Orienta el uso de lenguaje formal, cercano, técnico o comercial.
    //- Fin Tarjetas
    p(data-aos="fade-left") Además de estos criterios, también es importante considerar:
    //- Inicio Tarjetas
    .row.justify-content-center.mt-5
      .col-11.col-sm-9.col-md-6.col-lg-4.mb-4.d-flex.flex-column
        .tarjeta.rounded-3.h-100.bg-white.border.overflow-hidden.shadow-sm
          figure.mb-0
            img(src='@/assets/curso/tema2/tarjeta03_1.png', alt='Saldo en libros').w-100
          .p-4.d-flex.flex-column.justify-content-between.h-100
            div
              h4.card-title.text-center.mb-4 Hábitos digitales
              p.text-center.mb-0 Identificar en qué plataformas interactúa con mayor frecuencia la audiencia. 
      .col-11.col-sm-9.col-md-6.col-lg-4.mb-4.d-flex.flex-column
        .tarjeta.rounded-3.h-100.bg-white.border.overflow-hidden.shadow-sm
          figure.mb-0
            img(src='@/assets/curso/tema2/tarjeta03_2.png', alt='Saldo en bancos').w-100
          .p-4.d-flex.flex-column.justify-content-between.h-100
            div
              h4.card-title.text-center.mb-4 Necesidades específicas
              p.text-center.mb-0 Reconocer problemas, expectativas o motivaciones del usuario. 
      .col-11.col-sm-9.col-md-6.col-lg-4.mb-4.d-flex.flex-column
        .tarjeta.rounded-3.h-100.bg-white.border.overflow-hidden.shadow-sm
          figure.mb-0
            img(src='@/assets/curso/tema2/tarjeta03_3.png', alt='Diferencia inicial').w-100
          .p-4.d-flex.flex-column.justify-content-between.h-100
            div
              h4.card-title.text-center.mb-4 Formato preferido
              p.text-center.mb-0 Determinar si el público responde mejor a videos, imágenes, textos breves o contenido educativo. 
    //- Fin Tarjetas
    .row.mb-5.justify-content-center.align-items-center
      .col-12.col-sm-9.col-lg-5.order-1.order-lg-1.mb-4.mb-lg-0(data-aos="fade-left")
        figure.mb-0.text-center
          img(src='@/assets/curso/tema2/img6.png' style="width: 500px").m-auto
      .col-12.col-lg-7.order-2.order-lg-2(data-aos="fade-right")
        p.bg-color-11.p-4 Por ejemplo, una audiencia joven suele responder mejor a contenidos dinámicos, breves e interactivos, acompañados de lenguaje cercano. En cambio, un público adulto puede preferir contenidos más informativos, estructurados y con tono formal.
        p.mb-0 Cuando una marca se dirige a diferentes segmentos, debe adaptar sus mensajes sin perder coherencia en su identidad comunicativa. Validar la relación entre el contenido y el público objetivo incrementa la probabilidad de interacción, mejora la experiencia del usuario y fortalece la efectividad de la estrategia digital.
    Separador
    //- Inicio Tema2.4
    .row.mt-5
        #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.4 Revisión de calidad del contenido digital
    .row.mb-5.justify-content-center.align-items-center
      .col-12.col-sm-9.col-lg-5.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-left")
        figure.mb-0.text-center
          img(src='@/assets/curso/tema2/img7.png' style="width: 500px").m-auto
      .col-12.col-lg-7.order-2.order-lg-1(data-aos="fade-right")
        p.bg-color-12.p-4.rounded-4 La calidad del contenido digital es un factor determinante en la percepción que los usuarios tienen sobre una marca. Una publicación con errores, deficiencias visuales o mensajes poco claros puede generar desconfianza, afectar la imagen institucional y disminuir la efectividad de la comunicación.
        p.mb-0 Por esta razón, antes de publicar cualquier contenido, es necesario realizar una revisión integral que garantice estándares adecuados de presentación, coherencia y funcionalidad. 
    p(data-aos="fade-left") Entre los principales aspectos a evaluar se encuentran los siguientes:
    //- Inicio Tarjetas
    .row.justify-content-center.mt-5.mb-5(data-aos="fade-right")      
      .col-12.col-sm-9.col-md-6.col-lg-3.mb-4
        .p-4.br-15.h-100.text-center.shadow.rounded-4.bg-color-white.d-flex.flex-column.align-items-center
          figure.mb-4
            img.mx-auto(src='@/assets/curso/tema2/tarjeta04_1.svg', alt='', style="width: 100px; height: 100px; object-fit: contain;")
          h4 Ortografía y redacción
          p.mb-0 Confirmar que no existan errores gramaticales, ortográficos o problemas de puntuación.
      .col-12.col-sm-9.col-md-6.col-lg-3.mb-4
        .p-4.br-15.h-100.text-center.shadow.rounded-4.bg-color-white.d-flex.flex-column.align-items-center
          figure.mb-4
            img.mx-auto(src='@/assets/curso/tema2/tarjeta04_2.svg', alt='', style="width: 100px; height: 100px; object-fit: contain;")
          h4 Calidad visual
          p.mb-0 Revisar resolución, diseño, proporción y presentación profesional de imágenes o videos.
      .col-12.col-sm-9.col-md-6.col-lg-3.mb-4
        .p-4.br-15.h-100.text-center.shadow.rounded-4.bg-color-white.d-flex.flex-column.align-items-center
          figure.mb-4
            img.mx-auto(src='@/assets/curso/tema2/tarjeta04_3.svg', alt='', style="width: 100px; height: 100px; object-fit: contain;")
          h4 Claridad del mensaje
          p.mb-0 Verificar que la idea principal se comprenda con facilidad.
      .col-12.col-sm-9.col-md-6.col-lg-3.mb-4
        .p-4.br-15.h-100.text-center.shadow.rounded-4.bg-color-white.d-flex.flex-column.align-items-center
          figure.mb-4
            img.mx-auto(src='@/assets/curso/tema2/tarjeta04_4.svg', alt='', style="width: 100px; height: 100px; object-fit: contain;")
          h4 Coherencia de marca
          p.mb-0 Validar relación entre el contenido, identidad visual y tono institucional.
    //- Fin Tarjetas
    .row.justify-content-center.align-items-stretch.mb-2.g-0.bg-color-4.mb-5
      .col-lg-5.d-flex
        figure.mb-0.w-100
          img.h-100.w-100(src='@/assets/curso/tema2/img8.png', alt='', style="object-fit: cover;")
      .col-lg-7.bg-color-4.d-flex.align-items-center.p-4.p-lg-5
        p.mb-0 Además, se recomienda comprobar otros elementos complementarios:
          ul.lista-ul.color-vinotinto-custom.mb-0
            li.d-flex.mt-3
              i.fas.fa-check-circle.me-3
              p.mb-0 <b>Organización del contenido:</b> distribución equilibrada entre texto e imagen. 
            li.d-flex.mt-2
              i.fas.fa-check-circle.me-3
              p.mb-0 <b>Formato adecuado:</b> adaptación correcta a la red social donde será publicado. 
            li.d-flex.mt-2
              i.fas.fa-check-circle.me-3
              p.mb-0 <b>Llamado a la acción:</b> presencia de instrucciones claras para el usuario. 
            li.d-flex.mt-2
              i.fas.fa-check-circle.me-3
              p.mb-0 <b>Accesibilidad:</b> textos legibles, contraste adecuado y lenguaje comprensible.
    .row.justify-content-center.mb-4
      .col-lg-12
        .d-flex.flex-column.flex-lg-row.align-items-center.bg-color-13.p-4.rounded-4                        
          .flex-grow-1.text-center.text-lg-start            
            p.mb-0 Por ejemplo, una imagen de baja resolución acompañada de errores ortográficos puede disminuir la credibilidad de la marca, incluso si el producto o servicio es de calidad. En cambio, una publicación organizada, clara y visualmente cuidada fortalece la confianza del usuario.
          .flex-shrink-0.mb-3.mb-lg-0.pe-lg-4
            img(src='@/assets/curso/tema2/img9.svg', style="width: 80px")
    p(data-aos="fade-left") La revisión de calidad permite asegurar que cada publicación represente adecuadamente a la organización y contribuya al cumplimiento de los objetivos de la estrategia digital.
    Separador
    //- Inicio Tema2.5
    .row.mt-5
        #t_2_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.5 Lista de chequeo para validación de publicaciones
    p(data-aos="fade-left") La <b>lista de chequeo</b> es una herramienta fundamental en el proceso de verificación del contenido digital, ya que permite evaluar de manera sistemática cada uno de los elementos de la publicación antes de su difusión. Su aplicación facilita la detección de errores, mejora la calidad del contenido y contribuye al cumplimiento de los objetivos comunicativos establecidos. A continuación, se presentan algunos criterios básicos de validación:
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
                        img(src='@/assets/curso/tema2/tarjeta05_1.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Mensaje claro y comprensible
                        p.card-text.text-center
                        | La idea principal se entiende con facilidad.
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema2/tarjeta05_2.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Corrección ortográfica
                        p.card-text.text-center
                        | No presenta errores gramaticales ni ortográficos.
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema2/tarjeta05_3.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Calidad visual
                        p.card-text.text-center
                        | La imagen o video tiene buena resolución y presentación adecuada.
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema2/tarjeta05_4.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Relación con el público objetivo
                        p.card-text.text-center
                        | El contenido responde a intereses y características de la audiencia.
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema2/tarjeta05_5.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Llamado a la acción
                        p.card-text.text-center
                        | Incluye una invitación clara para interactuar o realizar una acción.
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema2/tarjeta05_6.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 <i>Hashtags</i> adecuados
                        p.card-text.text-center
                        | Son pertinentes y están relacionados con la publicación.
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema2/tarjeta05_7.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Cumplimiento del objetivo
                        p.card-text.text-center
                        | El contenido responde al propósito definido: informar, promocionar o interactuar.
                  .col-lg-4.order-lg-1.d-none.d-lg-block
                      figure
                        img(src='@/assets/curso/tema2/img11.png', style="max-width: 300px", data-aos="zoom-in").m-auto
          //- Fin Carrusel
          p.mt-3(data-aos="fade-left") El uso de esta lista permite reducir errores, estandarizar procesos y garantizar la calidad del contenido publicado.
    Separador
    //- Inicio Tema2.6
    .row.mt-5
        #t_2_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.6 Actividad práctica.
    p(data-aos="fade-left") La siguiente actividad tiene como propósito aplicar criterios de verificación en una publicación real de redes sociales. Seleccione una publicación de redes sociales y realice el siguiente análisis:
    //- Accordeon Pasos    
    .row.justify-content-center.mb-5
      .col-lg-8
        LineaTiempoD.color-secundario
          p(numero="1" titulo="Paso 1") Identifique los elementos de la publicación: texto, imagen, video, CTA o <i>hashtags.</i>
          p(numero="2" titulo="Paso 2") Evalúe la claridad del mensaje y determine si la idea principal se comprende fácilmente.
          p(numero="3" titulo="Paso 3") Verifique la coherencia con el público objetivo y revise si el contenido está dirigido al segmento adecuado.          
          p(numero="4" titulo="Paso 4") Revise la calidad del contenido: ortografía, diseño, organización y presentación visual.          
          p(numero="5" titulo="Paso 5") Aplique la lista de chequeo y confirme si la publicación cumple los criterios establecidos.          
      .col-8.col-lg-4
        figure
          img.l(src="@/assets/curso/tema2/img12.png").m-auto
    //- Accordeon Pasos 
</template>

<script>
export default {
  name: 'Tema2',
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
