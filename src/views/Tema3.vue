<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Estrategia de vivienda saludable

    p.mb-4 La vivienda es un pilar esencial para la salud y el bienestar de las personas, más allá de ser un simple refugio, una vivienda saludable garantiza condiciones óptimas de habitabilidad, reduciendo los riesgos ambientales y promoviendo el desarrollo integral de sus habitantes; la estrategia de vivienda saludable, impulsada por la OPS/OMS y respaldada por entidades como el SENA, busca mejorar las condiciones de vivienda a través de políticas públicas, normativas y programas que fomenten entornos seguros y sostenibles.

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
