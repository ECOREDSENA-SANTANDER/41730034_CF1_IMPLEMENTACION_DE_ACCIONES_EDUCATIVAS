<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img_intro.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La formación en entornos saludables en Colombia es clave para fortalecer competencias pedagógicas que promuevan el bienestar y la calidad de vida a nivel local, enmarcada en el plan decenal de salud pública (PDSP) 2012-2021 y la estrategia de entornos saludables (EES), esta iniciativa impulsa acciones educativas enfocadas en sostenibilidad ambiental, salud pública y equidad en el acceso a servicios sanitarios, basada en la carta de Ottawa de 1986, fomenta la creación de espacios saludables, abordando los desafíos de implementación a través de estrategias metodológicas innovadoras y modelos pedagógicos efectivos.

    .row.justify-content-center.align-items-center.mt-5         
      .col-lg-10.col-sm-12.col-md-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)




</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
