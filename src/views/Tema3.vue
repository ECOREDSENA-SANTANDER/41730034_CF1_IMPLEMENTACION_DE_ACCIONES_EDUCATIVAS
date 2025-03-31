<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Estrategia de vivienda saludable

    p.mb-4 La vivienda es un pilar esencial para la salud y el bienestar de las personas, más allá de ser un simple refugio, una vivienda saludable garantiza condiciones óptimas de habitabilidad, reduciendo los riesgos ambientales y promoviendo el desarrollo integral de sus habitantes; la estrategia de vivienda saludable, impulsada por la OPS/OMS y respaldada por entidades como el SENA, busca mejorar las condiciones de vivienda a través de políticas públicas, normativas y programas que fomenten entornos seguros y sostenibles.

    row.justify-content-center.align-items-center.mt-5
      .col-lg-12
        TabsB.color-acento-botones.escala-grises
          .py-4.py-md-5(titulo="Vivienda saludable" :icono="require('@/assets/curso/temas/t3/ico1.png')")
            .row.align-items-center.justify-content-center
              .col-sm-12.col-md-12.col-lg-8.mb-4.mb-md-0
                p Una vivienda saludable es aquella que favorece la salud de sus ocupantes y minimiza la exposición a factores de riesgo, para ello, debe cumplir con criterios fundamentales que garanticen el bienestar de sus residentes:
                ul.lista-ul--color.fa-al
                  li 
                    i.fas.fa-check-circle
                    span.mb-0 #[b Seguridad y habitabilidad:] debe estar construida con materiales adecuados, contar con estabilidad estructural y cumplir con normas de seguridad.        
                  li 
                    i.fas.fa-check-circle
                    span.mb-0 #[b Espacio y privacidad:] proporcionar suficiente espacio para sus ocupantes y permitir una adecuada distribución de áreas para el descanso, la convivencia y las actividades diarias.        
                  li 
                    i.fas.fa-check-circle
                    span.mb-0 #[b Ambiente saludable:] disponer de iluminación y ventilación adecuadas para evitar problemas de humedad, contaminación del aire interior y enfermedades respiratorias.        
                  li 
                    i.fas.fa-check-circle
                    span.mb-0 #[b Acceso a servicios básicos:] garantizar el abastecimiento de agua potable, un sistema de saneamiento eficiente y una gestión adecuada de los residuos.        
                  li 
                    i.fas.fa-check-circle
                    span.mb-0 #[b Prevención de riesgos ambientales:] incorporar medidas de protección contra desastres naturales, contaminación y otros factores que puedan comprometer la salud de sus habitantes.        
              .col-sm-12.col-md-6.col-lg-3
                figure
                  img(src='@/assets/curso/temas/t3/tab1-1.png', alt='Texto que describa la imagen')
          .py-4.py-md-5(titulo="Hábitat saludable" :icono="require('@/assets/curso/temas/t3/ico2.png')")
            .row.align-items-center.justify-content-center
              .col-sm-12.col-md-12.col-lg-8.mb-4.mb-md-0
                p El hábitat es el entorno físico, social y ambiental en el que se desarrolla la vida de las personas, para que una vivienda forme parte de un hábitat saludable, debe cumplir con los siguientes requisitos:
                ul.lista-ul--color.fa-al
                  li 
                    i.fas.fa-check-circle
                    span.mb-0 #[b Tenencia segura:] garantizar derechos de propiedad o arrendamiento que brinden estabilidad legal a sus ocupantes, evitando el riesgo de desalojos forzosos.      
                  li 
                    i.fas.fa-check-circle
                    span.mb-0 #[b Ubicación adecuada:] estar situada en una zona segura, alejada de fuentes de contaminación y riesgos naturales como inundaciones o deslizamientos.       
                  li 
                    i.fas.fa-check-circle
                    span.mb-0 #[b Infraestructura y servicios comunitarios:] contar con acceso a transporte público, centros de salud, educación, áreas verdes y espacios de recreación.        
                  li 
                    i.fas.fa-check-circle
                    span.mb-0 #[b Diseño urbano sostenible:] fomentar la construcción de viviendas con materiales ecológicos, eficiencia energética y planificación urbana que promueva la integración social y la calidad de vida.     
              .col-sm-12.col-md-6.col-lg-3
                figure
                  img(src='@/assets/curso/temas/t3/tab1-2.png', alt='Texto que describa la imagen')

    p.mb-4.mt-0 La Estrategia de vivienda saludable no solo busca mejorar las condiciones de las viviendas individuales, sino también transformar los entornos urbanos y rurales en espacios seguros, resilientes y sostenibles, fortaleciendo la salud y el bienestar de la población.

    .row.align-items-center.justify-content-center.mb-4(data-aos="fade-down")
      .col-sm-12.col-md-12.col-lg-5
        .row.bgmorado.borde-redondo
          p.p-4.mt-2 La estrategia de vivienda saludable tiene como objetivo principal mejorar las condiciones de vivienda mediante la cooperación entre los sectores nacionales y locales, tanto públicas como privadas, esta colaboración es clave para garantizar el acceso a viviendas dignas, seguras y saludables, fomentando la planificación urbana sostenible y el bienestar de la población, la articulación de esfuerzos permite la creación de entornos habitacionales que minimicen riesgos sanitarios y promuevan el acceso a servicios básicos esenciales.
      .col-6.col-md-6.col-lg-3
        img(src='@/assets/curso/temas/t3/img1.png', alt='')
      .col-sm-12.col-md-12.col-lg-4
        .row.align-items-center
          .col-auto
            img.mt-1(src='@/assets/curso/temas/t3/ico3.png', alt='').d-none.d-lg-block
        .row.mb-0
          p.mt-2 Para lograr este propósito, es fundamental la implementación de políticas y programas de vivienda de interés social, orientados a garantizar el acceso a infraestructuras adecuadas y sostenibles, la estrategia prioriza la protección de poblaciones en situación de vulnerabilidad, asegurando que sus viviendas cumplan con condiciones óptimas de habitabilidad, saneamiento y acceso a recursos esenciales como agua potable y energía limpia.

    p.mb-5 La estrategia busca fortalecer las capacidades humanas y comunitarias, promoviendo la educación y el empoderamiento de los ciudadanos a través de la capacitación y la sensibilización, se incentiva la toma de decisiones informadas para la mejora de su entorno habitacional, de esta manera, se fomenta una participación activa en la construcción y mantenimiento de viviendas saludables, permitiendo que las comunidades sean protagonistas en la transformación de su calidad de vida.

    .tarjeta.fondoespecial.p-3
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/t3/bt1.png")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-1.text-white Estrategia de la Vivienda Saludable y el Módulo Escuela Saludable - 1a parte
              p.mb-0.text-white Para fortalecer el tema anteriormente plasmado, se recomienda visitar el siguiente video.
            .col-sm-auto
              a.boton.color-acento-botones(:href="obtenerLink('https://www.youtube.com/watch?v=9IE-7BszTM8')" target="_blank")
                span Ver
                i.fas.fa-file-download

    Separador  
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 3.1. Componentes de la estrategia de vivienda saludable

    p Para garantizar el desarrollo de viviendas que promuevan el bienestar y la salud de sus habitantes, la estrategia de vivienda saludable se articula en cuatro aspectos fundamentales: institucionales, metodológicos, educativos y tecnológicos, estos componentes permiten una implementación efectiva de políticas y acciones enfocadas en mejorar la calidad de vida de las personas.




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
