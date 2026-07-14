<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .row.mb-5
      .col-12.ps-3(style="border-left: 10px solid #39A900;") 
        h3.mb-1 Creación de contenido digital para redes sociales
        p.mb-0 
          | Síntesis:          
          | validación y optimización del contenido digital
    p.mt-5 A continuación, se presenta una síntesis de la temática estudiada en el componente formativo.
    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Síntesis sobre validación y optimización del contenido digital que organiza etapas como protocolos de comunicación en redes sociales, verificación del contenido digital, evaluación del contenido en redes sociales, ajuste y optimización del contenido digital, y resultado final, con acciones relacionadas con revisión, métricas, mejoras estratégicas e interacción con la audiencia.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
