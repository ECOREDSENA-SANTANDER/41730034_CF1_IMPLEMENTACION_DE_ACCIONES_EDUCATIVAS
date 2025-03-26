<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Desarrollo de la estrategia de entornos saludables (EES)

      .row.align-items-end.justify-content-center.mb-5
        .col-sm-12.col-md-12.col-lg-5
          .row.bgmorado.borde-redondo
            p.p-4.pb-2 La implementación de la estrategia de entornos saludables (EES) requiere la articulación de diversos sectores, incluyendo el político, económico, cultural, ambiental y social, para garantizar el bienestar integral de la población, esto implica asegurar el acceso a empleo, educación, recreación y servicios de salud, considerando estos aspectos como factores esenciales para la construcción de entornos saludables y sostenibles, su desarrollo se enmarca en un enfoque intersectorial que promueve la equidad, la inclusión y la mejora de la calidad de vida en todas las etapas del ciclo vital.
        .col-6.col-md-6.col-lg-3
          img.mt-2(src='@/assets/curso/temas/t1/img1.png', alt='')
        .col-sm-12.col-md-12.col-lg-4
          .row.align-items-center
            .col-auto
              img(src='@/assets/curso/temas/t1/ico1.png', alt='').d-none.d-lg-block
          .row.mt-3
            p La organización mundial de la salud (OMS) y la organización panamericana de la salud (OPS) definen los elementos conceptuales esenciales para la promoción de entornos saludables, los cuales abarcan diversos ámbitos de interacción social y territorial.

  </template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
}
</script>

<style lang="sass"></style>
