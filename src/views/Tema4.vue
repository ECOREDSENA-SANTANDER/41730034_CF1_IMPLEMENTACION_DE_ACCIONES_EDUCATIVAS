<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Componente educativo

    .row.justify-content-center.align-items-end.mb-4(data-aos="fade-down")
      .col-lg-7.col-md-12.col-sm-12
        p.mb-4 El componente educativo es un eje fundamental dentro de la estrategia de vivienda saludable (EVS), ya que busca generar conciencia y fortalecer las capacidades de la comunidad en la implementación, mantenimiento y sostenibilidad de viviendas saludables, a través de este enfoque, se fomenta la adopción de hábitos protectores para la salud, la participación social y la apropiación del entorno habitacional.
        .cajon.color-primario.p-4
          p #[b El objetivo principal del componente educativo:] es orientar a los ejecutores de proyectos de vivienda saludable en el diseño, planificación e implementación de estrategias educativas que permitan la apropiación de la EVS a nivel local. Esto garantiza que las comunidades puedan gestionar de manera autónoma el mantenimiento y mejora de sus viviendas, asegurando condiciones óptimas de habitabilidad y bienestar.
      .col-lg-5.col-md-8.col-8
        img.mt-2(src='@/assets/curso/temas/t4/img1.png', alt='')
    
    p.mb-4 Para lograr la implementación efectiva del componente educativo, se establecen los siguientes objetivos específicos:

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
      .col-lg-4.col-md-6.col-6
        img(src='@/assets/curso/temas/t4/img2.png', alt='')
      .col-lg-8.col-md-12.col-sm-12
        ul.lista-ul--color.lista-ul--separador.pequeno2.mb-0
          li.mb-0 
            i.fas.fa-check-circle
            | Proporcionar herramientas operativas a los entes territoriales para la ejecución de la estrategia de vivienda saludable en sus comunidades.
          li.mb-0 
            i.fas.fa-check-circle
            | Sensibilizar y educar a la población sobre la importancia de la relación entre salud y vivienda, promoviendo entornos habitacionales seguros y sostenibles.
          li.mb-0 
            i.fas.fa-check-circle
            | Fomentar hábitos y prácticas saludables que reduzcan riesgos sanitarios y ambientales en los hogares, evitando conductas que puedan comprometer la salud.        
          li.mb-0 
            i.fas.fa-check-circle
            | Incentivar la convivencia armónica y fortalecer la integración comunitaria mediante procesos de participación social en la implementación de la EVS.
          li.mb-0 
            i.fas.fa-check-circle
            | Facilitar la organización comunitaria y promover la participación activa en la ejecución del componente educativo, garantizando su sostenibilidad a largo plazo.
          li.mb-0
            i.fas.fa-check-circle
            | Capacitar a los beneficiarios en el uso adecuado de instalaciones y equipamientos de la vivienda, asegurando su correcta operación y mantenimiento.
          li.mb-0 
            i.fas.fa-check-circle
            | Impulsar acciones educativas que fomenten la protección y cuidado del entorno, promoviendo el uso responsable de los recursos naturales y la gestión adecuada de residuos.
          li.mb-0 
            i.fas.fa-check-circle
            | Construir y fortalecer redes de apoyo social para mejorar la seguridad y calidad del entorno domiciliario, consolidando lazos de convivencia en la comunidad.

    .row.align-items-center.mb-4.subt(data-aos="fade-right")
      .col-auto.ico
        img(src='@/assets/curso/temas/subt.svg', alt='')
      .col
        h3.mb-0.mx-3 Metodología de implementación

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-down")
      .col-lg-9.col-sm-12.col-md-12
        .row 
          p El componente educativo de la EVS se basa en dos tipos principales de intervención: las reuniones comunitarias y las visitas familiares domiciliarias, estos espacios permiten el intercambio de conocimientos, la identificación de problemáticas locales y la aplicación de soluciones adaptadas a las necesidades específicas de cada comunidad.
        .row
          .col-lg-5.col-sm-8.col-md-8.p-0
            img(src='@/assets/curso/temas/t4/img3.png', alt='')
          .col-lg-7.col-sm-12.col-md-12.bgmorado.p-4
            p.p-2.mt-3 Las reuniones comunitarias constituyen un mecanismo de participación colectiva donde se analizan los desafíos que enfrentan los habitantes en relación con su entorno habitacional, a través de la reflexión y el diálogo, se definen estrategias para mejorar la calidad de vida en las viviendas y en la comunidad en general, estas reuniones se desarrollan en tres momentos clave que incluyen la identificación de problemas, la planificación de acciones y la evaluación de los resultados obtenidos.
      .col-lg-3.col-6.col-md-6
        img(src='@/assets/curso/temas/t4/img4.png', alt='')

    p.mb-4 Las visitas domiciliarias permiten una evaluación personalizada de las condiciones de cada vivienda. Se realizan seis visitas a cada hogar, en las cuales se abordan temas como el acceso a servicios básicos, la higiene en el hogar, la ventilación, la disposición de residuos y la seguridad estructural, estas visitas tienen un enfoque pedagógico y buscan que cada familia pueda implementar mejoras efectivas en su vivienda, con el acompañamiento de agentes comunitarios y técnicos especializados.

    .row.align-items-center.justify-content-center.bgmorado.mb-5(data-aos="fade-left")
      .col-auto
        img(src='@/assets/curso/temas/t4/ico1.png', alt='')
      .col
        p.py-4 La metodologías buscan empoderar a la comunidad en la gestión de su entorno habitacional, promoviendo un modelo sostenible de vivienda saludable basado en la educación, la participación activa y la corresponsabilidad social.

    .row.justify-content-center.mb-3
      .col-lg-4.col-md-6.mb-4
        .overflow-hidden.h-100.cambiartarjeta.p-4(data-aos="fade-left")
          img.img-a.img-t.mb-3(src='@/assets/curso/temas/t4/tar1ico1.png', alt='tema1')
          .p-2.mb-4
            h3.cambiartexto.text-center.mb-0.p-1 Primera reunión comunitaria
          ul.lista-ul--color.fa-al.text-white.px-4.mb-0  
            li   
              i.fas.fa-bell
              span.mb-0  Análisis Problemas.
            li   
              i.fas.fa-bell
              span.mb-0  Inicia el proceso de participación social.
            li   
              i.fas.fa-bell
              span.mb-0  Identificar la problemática de la vivienda y su entorno.
            li   
              i.fas.fa-bell
              span.mb-0  Identificar riesgos a la salud.
      .col-lg-4.col-md-6.mb-4
        .overflow-hidden.h-100.cambiartarjeta.p-4(data-aos="fade-left")
          img.img-a.img-t.mb-3(src='@/assets/curso/temas/t4/tar1ico2.png', alt='tema1')
          .p-2.mb-4
            h3.cambiartexto.text-center.mb-0.p-1 Segunda reunión comunitaria
          ul.lista-ul--color.fa-al.text-white.px-4  
            li   
              i.fas.fa-bell
              span.mb-0  Planificación.
            li   
              i.fas.fa-bell
              span.mb-0  Programar las intervenciones para la mejora de la vivienda.
            li   
              i.fas.fa-bell
              span.mb-4  Planear la organización para la participación comunitaria.
      .col-lg-4.col-md-6.mb-4
        .overflow-hidden.h-100.cambiartarjeta.p-4(data-aos="fade-left")
          img.img-a.img-t.mb-3(src='@/assets/curso/temas/t4/tar1ico2.png', alt='tema1')
          .p-2.mb-4
            h3.cambiartexto.text-center.mb-0.p-1 Tercera reunión comunitaria
          ul.lista-ul--color.fa-al.text-white.px-4.mb-5  
            li   
              i.fas.fa-bell
              span.mb-0  Evaluación.
            li   
              i.fas.fa-bell
              span.mb-5  Evaluar todo el proceso del componente educativo y constructivo.

    Separador  
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 4.1. Dimensionamiento de los requerimientos humanos y físicos

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5.col-md-8.col-8
        img(src='@/assets/curso/temas/t4/img5.png', alt='')
      .col-lg-7.col-md-12.col-sm-12
        p Para dimensionar adecuadamente los requerimientos humanos y físicos del componente educativo en salud, el ministerio de salud y protección social (2010) establece la necesidad de calcular y organizar diversos recursos, incluyendo facilitadores, agentes comunitarios, materiales educativos y logística operativa, estos elementos son fundamentales para garantizar la atención efectiva de la población beneficiaria y el cumplimiento de los objetivos del programa. A continuación, se detallan los criterios a considerar para la planificación y ejecución de estas actividades.
        p En primer lugar, se asignará un agente comunitario encargado de desarrollar acciones de promoción y educación en salud, su labor se enfocará en la realización de visitas domiciliarias, abordando al menos 10 familias, aunque este número podrá ajustarse según las condiciones específicas de cada zona, la intervención de estos agentes busca fomentar la adopción de hábitos saludables y mejorar la calidad de vida en las comunidades.
        p.mb-0 Asimismo, cada facilitador tendrá la responsabilidad de planificar, supervisar y organizar el trabajo de al menos 10 agentes comunitarios, su función es esencial para garantizar la correcta implementación de las estrategias educativas, adaptándolas a las condiciones y necesidades particulares de cada territorio, para ello, se requerirá la adecuación y validación del manual educativo nacional, asegurando que los contenidos sean pertinentes a la problemática de salud identificada y a los aspectos socioculturales de la región.

    .row.justify-content-center.align-items-center.mb-4.bgmoradoclaro
      p.p-4 Cada facilitador y agente comunitario contará con un manual educativo titulado “hacia una vivienda saludable: que viva mi hogar”, el cual servirá como herramienta de referencia en la capacitación y orientación de las familias beneficiarias, de igual manera en cada hogar que forme parte del programa se instalará un afiche informativo, diseñado para promover la autoevaluación y estimular el desarrollo de hábitos saludables en la vivienda.

    .row.justify-content-center.align-items-start.mb-4(data-aos="fade-down")
      .col-lg-4.col-md-12.col-sm-12
        .row.d-flex.justify-content-end
          .col-auto
              img(src='@/assets/curso/temas/t4/ico2.png', alt='')
        .row
          p.mt-2 Para la formación de facilitadores y agentes comunitarios, se llevarán a cabo cursos estructurados bajo la metodología de taller, donde se brindará capacitación teórica y práctica en promoción de la salud, estrategias de comunicación y técnicas de intervención comunitaria, estas sesiones permitirán fortalecer sus competencias y garantizar un impacto positivo en la implementación del programa.
      .col-lg-3.col-md-6.col-3
        img.borde-redondo(src='@/assets/curso/temas/t4/img6.png', alt='')
      .col-lg-5.col-md-12.col-sm-12
        .row.bgmoradoclaro.borde-redondo.p-2
          p.p-3.mb-0 En términos de logística, se deberá disponer de un espacio adecuado para la realización de los eventos de formación, el cual cuente con las condiciones necesarias para el desarrollo de las actividades, además, será imprescindible contar con refrigerios, materiales pedagógicos, transporte para los participantes y, en caso necesario, apoyo para el traslado de los facilitadores en las diferentes zonas de intervención, también se debe considerar la provisión de equipos audiovisuales, papelería y documentos de apoyo, elementos clave para optimizar la enseñanza y el aprendizaje durante los talleres.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
      .col-lg-5.col-md-8.col-8.p-0
        img.p-0(src='@/assets/curso/temas/t4/img7.png', alt='')
      .col-lg-7.col-md-12.col-sm-12.bgmoradomedio
        .row.mt-1
          .col-auto
            h3.bgacentocontenido.mx-4.p-2.mt-5 Taller de formación
        p.p-4.mb-5  El taller de formación tiene como propósito capacitar a los facilitadores y agentes comunitarios en la metodología de implementación del componente educativo dentro de la estrategia de vivienda saludable (EVS), durante el proceso formativo, se proporciona a los participantes el conocimiento y las herramientas necesarias para ejecutar adecuadamente las actividades de promoción y educación en salud en el ámbito comunitario.

    p.mb-4 Las herramientas de formación son los recursos utilizados para estructurar y desarrollar el proceso educativo dentro del programa, estas permiten garantizar la correcta aplicación de la estrategia y facilitan la transferencia de conocimientos, entre las herramientas clave se incluyen:

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-down")
      .col-lg-4.col-md-6.col-6
        img(src='@/assets/curso/temas/t4/img8.png', alt='')
      .col-lg-8.col-md-12.col-sm-12.mb-0
        ul.lista-ul--color.lista-ul--separador.pequeno.mt-3
          li.mb-0 
            i.fas.fa-check-circle
            | Instrumentos de caracterización para el diagnóstico de condiciones de salud y vivienda de las familias beneficiarias.
          li.mb-0 
            i.fas.fa-check-circle
            | Guías para reuniones comunitarias, diseñadas para orientar y estructurar encuentros participativos con la comunidad.
          li.mb-0 
            i.fas.fa-check-circle
            | Guías para visitas familiares domiciliarias, enfocadas en la evaluación y promoción de hábitos saludables dentro del hogar.   
          li.mb-0 
            i.fas.fa-check-circle
            | Manual educativo titulado “hacia una vivienda saludable: que viva mi hogar”, que proporciona información detallada sobre prácticas para mejorar la salud en el entorno familiar.
          li.mb-0 
            i.fas.fa-check-circle
            | Fichas educativas con material gráfico y textual para reforzar los conceptos clave en la comunidad.
          li.mb-0
            i.fas.fa-check-circle
            | Plantillas de intervención, utilizadas para planificar y registrar las acciones ejecutadas durante el proceso de formación.
          li.mb-0 
            i.fas.fa-check-circle
            | Manual del usuario, que contiene instrucciones y recomendaciones para la implementación efectiva de la estrategia en diferentes contextos.
          li.mb-0 
            i.fas.fa-check-circle
            | Afiche de la EVS, diseñado para motivar la autoevaluación y la adopción de prácticas saludables en los hogares.
          li.mb-0 
            i.fas.fa-check-circle
            | Guía de seguimiento, que permite evaluar el impacto de la estrategia y realizar ajustes según los resultados obtenidos.


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
