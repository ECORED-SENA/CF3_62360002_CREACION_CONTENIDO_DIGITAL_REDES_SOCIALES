<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p(data-aos="fade-right") Las redes sociales se han convertido en canales esenciales de comunicación entre marcas y usuarios, lo que exige no solo publicar contenido, sino asegurar su calidad, coherencia y pertinencia. En este contexto, la validación del contenido digital permite comprobar que cada publicación responda a los objetivos de la organización, al perfil del público y a los lineamientos estratégicos definidos. Este proceso incluye la revisión de aspectos técnicos, comunicativos y visuales para garantizar mensajes claros y alineados con la identidad de la marca.
    .row.justify-content-center.align-items-stretch.mb-4
      .col-11.col-md-12.col-lg-9.order-2.order-lg-1(data-aos="fade-right")
        .bg-color-3.rounded-3.overflow-hidden
          .row.g-0.align-items-stretch
            .col-12.col-md-5.d-flex
              figure.mb-0.w-100
                img(src="@/assets/curso/intro/img1.png", alt="", style="width: 100%; height: 100%; object-fit: cover; min-height: 250px;")                            
            .col-12.col-md-7.d-flex.align-items-center
              .p-4.p-md-5
                p.mb-0 La validación también implica analizar el desempeño de las publicaciones mediante métricas como alcance, interacciones, visualizaciones y nivel de <i>engagement</i>. Estos indicadores facilitan comprender cómo responde la audiencia al contenido y permiten identificar fortalezas, debilidades y oportunidades de mejora. Con base en esta información, las organizaciones pueden ajustar mensajes, formatos, horarios de publicación y estrategias de comunicación para obtener mejores resultados.
        p.mt-3 De esta manera, la optimización del contenido digital se convierte en una actividad continua orientada a fortalecer la presencia de la marca en entornos digitales. Este componente formativo busca que el aprendiz desarrolle competencias para evaluar publicaciones, aplicar protocolos de comunicación, interpretar resultados y tomar decisiones informadas. Así, se promueve una visión estratégica donde la gestión del contenido no termina con la publicación, sino con su seguimiento permanente y mejora constante.                 
      .col-8.col-sm-6.col-md-4.col-lg-3.order-1.order-lg-2.mb-4.mb-lg-0.d-flex.align-items-center.justify-content-center(data-aos="zoom-in")
        figure.mb-0.w-100.text-center
          img.img-fluid(src="@/assets/curso/intro/img2.png", alt="", style="width: 500px;")
</template>

<script>
export default {
  name: 'Introduccion',
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
