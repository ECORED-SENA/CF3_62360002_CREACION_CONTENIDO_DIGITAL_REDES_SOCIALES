<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Protocolos de comunicación en redes sociales
    p(data-aos="fade-left") Este apartado aborda los protocolos que orientan la interacción digital entre marcas, organizaciones o personas y sus comunidades en redes sociales, de acuerdo con criterios de claridad, coherencia y calidad textual aplicables a contenidos digitales educativos. 
    Separador
    //- Inicio Tema1.1
    .row.mt-5
        #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.1 Concepto de protocolos de comunicación digital
    p(data-aos="fade-left") A continuación, se presenta un video sobre el concepto de protocolos de comunicación digital, destacando su importancia para garantizar interacciones claras, coherentes y efectivas en las redes sociales.
    //- Inicio Video
    figure.mb-5(data-aos="fade-down")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/FchldZV4dbc?si=4SKJww_9SBJ5nrWS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    //- Fin Video
    Separador
    //- Inicio Tema1.2
    .row.mt-5
        #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.2 Normas de interacción en redes sociales: netiqueta
    p(data-aos="fade-left") La <b>netiqueta</b> es el conjunto de normas de comportamiento que regulan la interacción de los usuarios en entornos digitales. En redes sociales, su aplicación favorece una comunicación respetuosa, clara y efectiva entre las marcas y su audiencia. A continuación, se presentan las principales normas de interacción y su aplicación práctica:
    //- Pestanas horizontales
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5(data-aos="fade-right")
        TabsC.color-acento-contenido.mt-1
          .py-3.py-md-4(titulo="Respeto")
            .row.align-items-center
              .col-md-5
                figure
                  img(src='@/assets/curso/tema1/tarjeta01_1.png')
              .col-md-7.mb-4.mb-md-0
                h4 Respeto
                p Mantener un trato cordial y adecuado en todas las interacciones, incluso en situaciones negativas. Implica evitar lenguaje ofensivo, respuestas impulsivas o actitudes defensivas al responder comentarios, mensajes directos o conversaciones públicas.
          .py-3.py-md-4(titulo="Claridad")
            .row.align-items-center
              .col-md-5.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/tema1/tarjeta01_2.png')
              .col-md-7
                h4 Claridad
                p Redactar mensajes fáciles de entender, bien estructurados y directos, para facilitar la comprensión del usuario. Se aplica en publicaciones, respuestas, campañas y atención digital.
          .py-3.py-md-4(titulo="Empatía")
            .row.align-items-center
              .col-md-5.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/tema1/tarjeta01_3.png')
              .col-md-7
                h4 Empatía
                p Comprender las necesidades, emociones o inconformidades del usuario y responder con disposición de ayuda. Es fundamental en el manejo de quejas, reclamos y comentarios negativos.
          .py-3.py-md-4(titulo="Responsabilidad")
            .row.align-items-center
              .col-md-5.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/tema1/tarjeta01_4.png')
              .col-md-7
                h4 Responsabilidad
                p Reconocer errores, asumir compromisos y ofrecer soluciones oportunas. Se relaciona con la atención al cliente, la corrección de información y la gestión de crisis.
          .py-3.py-md-4(titulo="Coherencia")
            .row.align-items-center
              .col-md-5.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/tema1/tarjeta01_5.png')
              .col-md-7
                h4 Coherencia
                p Mantener un estilo comunicativo uniforme y alineado con la identidad de la marca en toda la comunicación institucional en redes sociales.          
    //- Cierres Pestanas horizontales
    p(data-aos="fade-left") La aplicación de la netiqueta contribuye significativamente a la validación del contenido digital, ya que permite evaluar si las publicaciones y respuestas cumplen con estándares adecuados de comunicación, interacción y coherencia institucional.
    Separador
    //- Inicio Tema1.3
    .row.mt-5
        #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.3 Uso adecuado del lenguaje digital
    p(data-aos="fade-left") El <b>lenguaje digital</b> hace referencia a la forma en que se construyen los mensajes en entornos virtuales, especialmente en redes sociales. Se caracteriza por ser dinámico, cercano y adaptado al tipo de audiencia a la que se dirige el contenido.
    .row.justify-content-center.align-items-stretch.mb-2.g-0.bg-color-4.mb-5
      .col-lg-5.d-flex
        figure.mb-0.w-100
          img.h-100.w-100(src='@/assets/curso/tema1/img1.png', alt='', style="object-fit: cover;")
      .col-lg-7.bg-color-4.d-flex.align-items-center.p-4.p-lg-5
        p.mb-0 El uso adecuado del lenguaje digital implica seleccionar el tono, estilo y nivel de formalidad más apropiado según el público objetivo, el tipo de contenido y la plataforma utilizada. No todas las redes sociales emplean el mismo tipo de lenguaje, por lo que es importante adaptar la comunicación a cada contexto. 
    p(data-aos="fade-left") A continuación, se presentan algunos tipos de lenguaje utilizados en redes sociales:
    //- Slideshow
    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/tarjeta02_1.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4 Formal
              p Utilizado en contextos corporativos, institucionales o comunicaciones oficiales. Mantiene estructura cuidadosa y tono profesional.                    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/tarjeta02_2.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4 Informal
              p Cercano, espontáneo y amigable. Es frecuente en plataformas como Instagram o TikTok.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/tarjeta02_3.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4 Comercial
              p Enfocado en la promoción de productos o servicios. Busca persuadir e incentivar acciones de compra.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/tarjeta02_4.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4 Emocional
              p Orientado a generar conexión con el usuario mediante sentimientos, experiencias o identificación con la marca.
    //- Fin Slideshow
    .row.mb-5.justify-content-center.align-items-center
      .col-12.col-sm-9.col-lg-5.order-1.order-lg-1.mb-4.mb-lg-0(data-aos="fade-left")
        figure.mb-0.text-center
          img(src='@/assets/curso/tema1/img3.png' style="width: 500px").m-auto
      .col-12.col-lg-7.order-2.order-lg-2(data-aos="fade-right")
        p.bg-color-5.p-4 El uso adecuado del lenguaje también implica cuidar aspectos como la ortografía, la redacción y la coherencia del mensaje. Los errores ortográficos o gramaticales pueden afectar la credibilidad de la marca y generar una percepción negativa en los usuarios.
        p.mb-0 En la validación del contenido digital, el lenguaje es uno de los elementos más importantes a evaluar, ya que influye directamente en la comprensión del mensaje y en la forma en que la audiencia percibe la comunicación.
    Separador
    //- Inicio Tema1.4
    .row.mt-5
        #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.4 Manejo de comentarios, mensajes y respuestas
    .bloque-texto-g.bloque-texto-g.bg-color-6.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img4.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La interacción con los usuarios es uno de los elementos más importantes en las <b>redes sociales</b>. Las marcas no solo deben publicar contenido, sino también gestionar adecuadamente los comentarios, mensajes y respuestas que reciben por parte de su audiencia.
    p(data-aos="fade-left") El manejo adecuado de estas interacciones permite fortalecer la relación con los usuarios, mejorar la reputación de la marca y generar <b>mayor <i>engagement</i></b>. Para ello, es importante aplicar buenas prácticas como las siguientes:
    //- Pestanas horizontales
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5(data-aos="fade-right")
        TabsC.color-acento-contenido.mt-1
          .py-3.py-md-4(titulo="Respuesta oportuna")
            .row.align-items-center
              .col-md-5
                figure
                  img(src='@/assets/curso/tema1/tarjeta03_1.png')
              .col-md-7.mb-4.mb-md-0
                h4 Respuesta oportuna
                p Atender comentarios y mensajes en tiempos adecuados para demostrar interés y compromiso.
          .py-3.py-md-4(titulo="Tono respetuoso")
            .row.align-items-center
              .col-md-5.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/tema1/tarjeta03_2.png')
              .col-md-7
                h4 Tono respetuoso
                p Mantener cortesía y profesionalismo en toda interacción con los usuarios.
          .py-3.py-md-4(titulo="Soluciones claras")
            .row.align-items-center
              .col-md-5.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/tema1/tarjeta03_3.png')
              .col-md-7
                h4 Soluciones claras
                p Brindar respuestas concretas y orientadas a resolver la situación planteada.
          .py-3.py-md-4(titulo="Evitar discusiones")
            .row.align-items-center
              .col-md-5.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/tema1/tarjeta03_4.png')
              .col-md-7
                h4 Evitar discusiones
                p No responder de forma impulsiva ni entrar en confrontaciones públicas.
          .py-3.py-md-4(titulo="Personalización")
            .row.align-items-center
              .col-md-5.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/tema1/tarjeta03_5.png')
              .col-md-7
                h4 Personalización
                p Adaptar la respuesta al caso específico del usuario para generar cercanía.
    //- Cierres Pestanas horizontales
    .row.justify-content-center.align-items-center
      .col-12.col-sm-9.col-lg-5.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-left")
        figure.mb-0.text-center
          img(src='@/assets/curso/tema1/img5.png' style="width: 500px").m-auto
      .col-12.col-lg-7.order-2.order-lg-1(data-aos="fade-right")
        p.bg-color-5.p-4 Uno de los aspectos más relevantes es el manejo de comentarios negativos. En estos casos, la marca debe actuar con profesionalismo, evitar respuestas impulsivas y enfocarse en brindar soluciones. Ignorar o eliminar comentarios negativos sin justificación puede afectar la confianza del público.
        p.mb-0 A continuación, se presenta un ejemplo aplicado:
    //- Inicio Tarjetas
    .row.bg-color-1
      .col-12
        .p-5
        .row.justify-content-center.mb-5(data-aos="fade-left")
          .col-11.col-sm-9.col-md-6.col-lg-4.mb-4.mb-lg-0
            .bg-white.tarjeta.p-4.h-100.shadow.rounded-4.bordes.d-flex.flex-column.align-items-center
              figure.mb-3
                img(src='@/assets/curso/tema1/tarjeta04_1.svg', alt='Icono Componentes', style="max-width: 90px; width: 100%; height: 90px; object-fit: contain;").mx-auto                 
              .text-center.mb-4
                h4.card-title.mb-3.fw-bold Usuario insatisfecho, respuesta incorrecta 
                p <i>“Ese no es nuestro problema”.</i>
          .col-11.col-sm-9.col-md-6.col-lg-4.mb-4.mb-lg-0
            .bg-white.tarjeta.p-4.h-100.shadow.rounded-4.bordes.d-flex.flex-column.align-items-center
              figure.mb-3
                img(src='@/assets/curso/tema1/tarjeta04_2.svg', alt='Icono Balance técnico', style="max-width: 90px; width: 100%; height: 90px; object-fit: contain;").mx-auto                 
              .text-center.mb-4
                h4.card-title.mb-3.fw-bold Usuario insatisfecho, respuesta correcta
                p <i>“Lamentamos lo ocurrido, por favor, contáctanos para ayudarte”.</i>
    p(data-aos="fade-left") Este tipo de análisis es clave dentro del proceso de validación del contenido digital, ya que permite evaluar la calidad de la interacción con los usuarios.                
    //- Fin Tarjetas
    Separador
    //- Inicio Tema1.5
    .row.mt-5
        #t_1_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.5 Coherencia comunicativa de la marca
    p(data-aos="fade-left") La <b>coherencia comunicativa</b> se refiere a la consistencia en el tono, estilo y mensaje que una marca utiliza en sus diferentes canales de comunicación. Este aspecto es fundamental para construir una identidad sólida y facilitar el reconocimiento por parte de los usuarios.
    .row.justify-content-center.align-items-center
      .col-12.col-sm-9.col-lg-5.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-left")
        figure.mb-0.text-center
          img(src='@/assets/curso/tema1/img6.png' style="width: 500px").m-auto
      .col-12.col-lg-7.order-2.order-lg-1(data-aos="fade-right")
        p.bg-color-7.p-5 Una marca que mantiene coherencia en su comunicación transmite profesionalismo, organización y confianza. Por el contrario, una comunicación inconsistente puede generar confusión en la audiencia y afectar la percepción de la marca. 
        p.mb-0 A continuación, se presentan los principales elementos de la coherencia comunicativa:
    //- Inicio Accordion
    .bg--img_03.mt-5
    .row.justify-content-center
      .col-lg-3 
        figure(data-aos="zoom-in")
          img.mb-5(src="@/assets/curso/tema1/img7.png", alt="").img400.m-auto
      .col-lg-9
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
          .row(titulo="Tono uniforme")
              p.mb-4 Mantener la misma forma de dirigirse al público en todos los canales digitales.              
          .row(titulo="Lenguaje alineado")
              p.mb-4 Utilizar expresiones acordes con los valores, personalidad y propósito de la marca.
          .row(titulo="Identidad visual consistente")
              p.mb-4 Conservar colores, tipografías, logotipo y estilo gráfico institucional.
          .row(titulo="Mensajes claros y consistentes")
              p.mb-4 Comunicar ideas comprensibles y congruentes con la estrategia de comunicación.
    //- Fin Accordion
    p(data-aos="fade-left") En el proceso de validación del contenido digital, la coherencia es un criterio clave, ya que permite verificar si el contenido está alineado con la estrategia de comunicación y con la identidad de la marca.
    Separador
    //- Inicio Tema1.6
    .row.mt-5
        #t_1_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.6 Actividad práctica
    p(data-aos="fade-left") La siguiente actividad permite aplicar los protocolos de comunicación digital en situaciones frecuentes dentro de las redes sociales. Analice las siguientes situaciones y proponga una respuesta adecuada:
    //- Slideshow
    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/tarjeta05_1.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4 Comentario negativo sobre un producto
              p Lamentamos lo ocurrido. Queremos conocer tu caso para brindarte una solución. Escríbenos por mensaje privado.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/tarjeta05_2.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4 Solicitud de información por mensaje privado
              p Gracias por contactarnos. Con gusto te compartimos la información solicitada. ¿Qué producto o servicio deseas consultar?
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/tarjeta05_3.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4 Crítica pública a la marca
              p Agradecemos tu comentario. Valoramos tu opinión y revisaremos la situación para brindarte una respuesta adecuada.
    //- Fin Slideshow
    .row.justify-content-center.align-items-center
      .col-12.col-sm-9.col-lg-5.order-1.order-lg-1.mb-4.mb-lg-0(data-aos="fade-left")
        figure.mb-0.text-center
          img(src='@/assets/curso/tema1/img8.png' style="width: 450px").m-auto
      .col-12.col-lg-7.order-2.order-lg-2(data-aos="fade-right")
        p Para orientar el desarrollo de la actividad, tenga en cuenta los siguientes criterios:
          ul.lista-ul.color-vinotinto-custom.mb-0
            li.d-flex.mt-3
              i.fas.fa-check-circle.me-3
              p.mb-0 <b>Redactar respuestas adecuadas:</b> utilizar mensajes claros, cordiales y orientados a la solución. 
            li.d-flex.mt-2
              i.fas.fa-check-circle.me-3
              p.mb-0 <b>Aplicar normas de netiqueta:</b> mantener respeto, empatía y responsabilidad en cada respuesta. 
            li.d-flex.mt-2
              i.fas.fa-check-circle.me-3
              p.mb-0 <b>Mantener coherencia comunicativa:</b> usar tono, estilo y lenguaje acordes con la identidad de la marca.
        p Esta actividad permite fortalecer la capacidad de respuesta estratégica en escenarios reales de interacción digital.

    
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
