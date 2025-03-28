<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El programa de formación “transformando la educación: estrategias para entornos saludables y modelos pedagógicos” busca mejorar la calidad de vida a través de la educación y la salud pública; la estrategia de entornos saludables (EES), aplicada en escuelas y viviendas, promueve la sostenibilidad y el aprendizaje comunitario. El componente educativo optimiza recursos y estrategias como AIEPI, mientras que el componente tecnológico impulsa mejoras habitacionales y capacitación. La metodología SARAR fortalece la participación social, garantizando comunidades más resilientes y sostenibles. 
    

    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.png", alt="Diagrama de estrategias para entornos saludables y modelos pedagógicos, que incluye componentes como desarrollo de la estrategia, fases de implementación, vivienda saludable, componente educativo y tecnológico, y metodología SARAR, con sus respectivos subtemas.")
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
