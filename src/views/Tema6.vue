<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Metodología SARAR

    .row.justify-content-center.align-items-start.mb-4(data-aos="fade-down")
      .col-lg-4.col-md-12.col-sm-12
        .row
          .col-auto
              img(src='@/assets/curso/temas/t6/ico1.png', alt='')
        .row
          p.mt-3 La metodología SARAR es un enfoque participativo de educación y capacitación no formal, desarrollado en la década de 1970 por la doctora Lyra Srinivasan, junto con Ron Sawyer y otros colaboradores. Esta metodología se centra en fortalecer las capacidades individuales y colectivas, promoviendo la autonomía en la toma de decisiones y la resolución de problemas dentro de las comunidades.
      .col-lg-3.col-md-6.col-3
        img.borde-redondo(src='@/assets/curso/temas/t6/img1.png', alt='')
      .col-lg-5.col-md-12.col-sm-12
        .row.bgmorado.borde-redondo.p-2
          p.p-4.mb-0 Su objetivo principal es facilitar el desarrollo humano a través de la reflexión crítica y la acción participativa. SARAR permite que personas de diferentes edades y contextos sociales analicen su entorno, identifiquen desafíos, desarrollen soluciones innovadoras y aprovechen oportunidades de manera creativa. De esta manera, fomenta la autogestión, el empoderamiento y la resiliencia, ayudando a las comunidades a enfrentar los retos del desarrollo social y económico con una perspectiva sostenible.

    .row.justify-content-center.align-items-center.mb-4.bgmoradoclaro.borde-redondo(data-aos="fade-left")
      p.p-4.mb-0 Este enfoque es ampliamente utilizado en proyectos de desarrollo comunitario, educación, saneamiento ambiental y gestión de recursos, ya que promueve la colaboración y el aprendizaje a partir de la experiencia directa de los participantes, al priorizar la participación activa, SARAR facilita la construcción de soluciones adaptadas a la realidad local, asegurando que las comunidades sean protagonistas en su propio proceso de transformación.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
      .col-lg-5.col-md-8.col-8
       img(src='@/assets/curso/temas/t6/img2.png', alt='')
      .col-lg-7.col-md-12.col-sm-12
        p.mb-3 La metodología SARAR tiene como propósito principal estimular un proceso de transformación dinámica y participativa basado en el desarrollo de cinco cualidades personales esenciales, estas cualidades, inspiradas en la filosofía del aprendizaje experiencial y en principios de la educación comunitaria, permiten que los individuos y grupos fortalezcan sus capacidades para identificar, analizar y resolver problemas dentro de su contexto social.
        p.mb-0 A través de SARAR, se busca que las comunidades desarrollen autoconfianza, fomenten el trabajo en equipo, estimulen la creatividad, planifiquen acciones concretas y asuman responsabilidades colectivas en la búsqueda de soluciones sostenibles, esta metodología facilita procesos de cambio basados en el empoderamiento, asegurando que los participantes se conviertan en agentes activos dentro de su propio desarrollo, en contextos de desarrollo comunitario, saneamiento, educación y planificación participativa, SARAR ha demostrado ser una herramienta poderosa para la construcción de capacidades locales y la toma de decisiones colaborativas.

    .row.align-items-center.mb-5.subt(data-aos="fade-right")
      .col-auto.ico
        img(src='@/assets/curso/temas/subt.svg', alt='')
      .col
        h3.mb-0.mx-3 Elementos claves de la metodología SARAR

    p.mb-4  Cada una de las letras de SARAR representa una cualidad que contribuye a la transformación personal y comunitaria:


</template>

<script>
export default {
  name: 'Tema4',
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
