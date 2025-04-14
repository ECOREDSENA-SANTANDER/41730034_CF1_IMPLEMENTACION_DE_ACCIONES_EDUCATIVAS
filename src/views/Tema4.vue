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
      .col-lg-5.col-md-8.col-12
        img.mt-2(src='@/assets/curso/temas/t4/img1.png', alt='')
    
    p.mb-4 Para lograr la implementación efectiva del componente educativo, se establecen los siguientes objetivos específicos:

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
      .col-lg-4.col-md-6.col-12
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
        p.py-4 Las metodologías buscan empoderar a la comunidad en la gestión de su entorno habitacional, promoviendo un modelo sostenible de vivienda saludable basado en la educación, la participación activa y la corresponsabilidad social.

    .row.justify-content-center
      .col-lg-4.col-md-6.mb-4
        .overflow-hidden.h-100.cambiartarjeta.p-4(data-aos="fade-left")
          img.img-a.img-t.mb-3(src='@/assets/curso/temas/t4/tar1ico1.png', alt='tema1')
          .p-2.mb-4
            h3.cambiartexto.text-center.mb-0.p-1 Primera reunión comunitaria
          ul.lista-ul--color.fa-al.px-4.mb-0  
            li   
              i.fas.fa-bell
              span.mb-0  Análisis problemas.
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
          ul.lista-ul--color.fa-al.px-4  
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
          img.img-a.img-t.mb-3(src='@/assets/curso/temas/t4/tar1ico3.png', alt='tema1')
          .p-2.mb-4
            h3.cambiartexto.text-center.mb-0.p-1 Tercera reunión comunitaria
          ul.lista-ul--color.fa-al.px-4.mb-5  
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
      .col-lg-3.col-md-6.col-12
        img.borde-redondo(src='@/assets/curso/temas/t4/img6.png', alt='')
      .col-lg-5.col-md-12.col-sm-12
        .row.bgmoradoclaro.borde-redondo.p-2
          p.p-3.mb-0 En términos de logística, se deberá disponer de un espacio adecuado para la realización de los eventos de formación, el cual cuente con las condiciones necesarias para el desarrollo de las actividades, además, será imprescindible contar con refrigerios, materiales pedagógicos, transporte para los participantes y, en caso necesario, apoyo para el traslado de los facilitadores en las diferentes zonas de intervención, también se debe considerar la provisión de equipos audiovisuales, papelería y documentos de apoyo, elementos clave para optimizar la enseñanza y el aprendizaje durante los talleres.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
      .col-lg-5.col-md-8.col-12.p-0
        img.p-0(src='@/assets/curso/temas/t4/img7.png', alt='')
      .col-lg-7.col-md-12.col-sm-12.bgmoradomedio
        .row.mt-1
          .col-auto
            h3.bgacentocontenido.mx-4.p-2.mt-5 Taller de formación
        p.p-4.mb-5  El taller de formación tiene como propósito capacitar a los facilitadores y agentes comunitarios en la metodología de implementación del componente educativo dentro de la estrategia de vivienda saludable (EVS), durante el proceso formativo, se proporciona a los participantes el conocimiento y las herramientas necesarias para ejecutar adecuadamente las actividades de promoción y educación en salud en el ámbito comunitario.

    p.mb-4 Las herramientas de formación son los recursos utilizados para estructurar y desarrollar el proceso educativo dentro del programa, estas permiten garantizar la correcta aplicación de la estrategia y facilitan la transferencia de conocimientos, entre las herramientas clave se incluyen:

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-down")
      .col-lg-4.col-md-6.col-12
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

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-down")
      .col-lg-7.col-md-12.col-sm-12.bgmoradomedio.mb-0
        h3.bgamarillo.mx-4.p-2.mt-4.mb-2 El desarrollo del taller de formación está orientado a cumplir con los siguientes objetivos:
        ul.lista-ul--color.fa-al.p-4.py-0.mb-4.mt-1  
          li.mb-0.mt-3  
            i.fas.fa-check-circle
            span.mb-0 Capacitar a los facilitadores y agentes comunitarios en la metodología de la EVS, asegurando la correcta aplicación del componente educativo en sus comunidades.
          li.mb-0   
            i.fas.fa-check-circle
            span.mb-0 Dotar a los participantes de herramientas pedagógicas y metodológicas que les permitan desarrollar procesos de enseñanza-aprendizaje efectivos con las familias beneficiarias.
          li.mb-0   
            i.fas.fa-check-circle
            span.mb-0 Fomentar el uso adecuado de los materiales educativos para garantizar la comprensión y apropiación de los conceptos por parte de la comunidad.
          li.mb-0   
            i.fas.fa-check-circle
            span.mb-0 Promover la participación activa y el empoderamiento comunitario, incentivando a las familias a adoptar hábitos saludables en sus hogares.
          li.mb-0   
            i.fas.fa-check-circle
            span.mb-1 Establecer mecanismos de seguimiento y evaluación, con el fin de medir la efectividad de las intervenciones y realizar ajustes en la implementación de la estrategia.
      .col-lg-5.col-md-8.col-12.p-0
        img(src='@/assets/curso/temas/t4/img9.png', alt='')

    .row.justify-content-center.mt-5.mb-0(data-aos="fade-down") 
      .col-lg-6.col-sm-12.col-md-12.mb-0
        .titulo-sexto.color-acento-contenido.mb-0
          h5.mb-0 Figura 5. 
          |  Elementos taller EVS
    .row.justify-content-center.bgverdeespecial.mt-0.p-0(data-aos="fade-down")
      .col-lg-6.col-sm-12.col-md-12.p-0.mt-0
        figure
          img.p-0.mt-0(src='@/assets/curso/temas/t4/fig5.png', alt='Diagrama con herramientas y objetivos de la estrategia de vivienda saludable (EVS), destaca la formación de facilitadores, el uso de guías, manuales y materiales educativos para promover entornos saludables.')

    Separador  
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 4.2. Articulación con la estrategia AIEPI

    .row.align-items-center.justify-content-center.bgmoradoclaro.mb-4(data-aos="fade-left")
      .col-auto
        img(src='@/assets/curso/temas/t4/ico3.png', alt='')
      .col
        p.py-4 La estrategia de atención integrada de enfermedades prevalentes de la infancia (AIEPI) es una iniciativa fundamental en la promoción de la salud infantil, que busca reducir la mortalidad y morbilidad en niños y niñas mediante intervenciones integradas en el hogar, la comunidad y los servicios de salud, su implementación en el marco del programa de vivienda saludable se centrará en la promoción de prácticas esenciales de salud a nivel familiar, seleccionadas de las 16 prácticas clave del AIEPI.

    p.mb-4 En este contexto, la intervención se enfocará en tres prácticas fundamentales, que pueden ajustarse según el perfil epidemiológico de cada zona:

    .row.mb-4.mb-md-5(data-aos="fade-down")
      .col-lg-4.mb-3.mb-md-0
        .tarjeta.tarjeta-foto-hover
          .tarjeta-foto-hover__img: img(src='@/assets/curso/temas/t4/tar1-1.png')
          .tarjeta-foto-hover__titulo.d-flex.justify-content-center.align-items-center.p-2
          .tarjeta-foto-hover__tarjeta.bg-degrade.d-flex.align-items-center.justify-content-center
            .p-4.text-center
              h5 Saneamiento ambiental
              p.mb-0  Promoción de hábitos de higiene y acceso a condiciones sanitarias adecuadas, incluyendo el correcto manejo de residuos, disposición segura de excretas y acceso a agua potable para prevenir enfermedades diarreicas y otras infecciones.
      .col-lg-4.mb-3.mb-md-0
        .tarjeta.tarjeta-foto-hover(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          .tarjeta-foto-hover__img: img(src='@/assets/curso/temas/t4/tar1-2.png')
          .tarjeta-foto-hover__titulo.d-flex.justify-content-center.align-items-center.p-2
          .tarjeta-foto-hover__tarjeta.bg-degrade.d-flex.align-items-center.justify-content-center
            .p-4.text-center
              h5 Prevención y control de la malaria
              p.mb-0 Estrategias dirigidas a la reducción de la proliferación de vectores mediante el uso de mosquiteros impregnados, eliminación de criaderos y educación comunitaria sobre la identificación temprana de síntomas y acceso oportuno a tratamiento.
      .col-lg-4.mb-3.mb-md-0
        .tarjeta.tarjeta-foto-hover
          .tarjeta-foto-hover__img: img(src='@/assets/curso/temas/t4/tar1-3.png')
          .tarjeta-foto-hover__titulo.d-flex.justify-content-center.align-items-center.p-2
          .tarjeta-foto-hover__tarjeta.bg-degrade.d-flex.align-items-center.justify-content-center
            .p-4.text-center
              h5 Prevención de accidentes en el hogar
              p.mb-0 Educación a las familias sobre medidas de seguridad doméstica, con énfasis en la protección de niños y niñas frente a riesgos comunes como caídas, intoxicaciones, quemaduras y electrocuciones, adaptando las acciones a las realidades socioculturales de cada comunidad.

    .row.align-items-center.mb-5.mt-5.subt(data-aos="fade-right")
      .col-auto.ico
        img(src='@/assets/curso/temas/subt.svg', alt='')
      .col
        h3.mb-0.mx-3 Importancia de la participación comunitaria en la estrategia AIEPI

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-down")
      .col-lg-5.col-md-8.col-12
        img(src='@/assets/curso/temas/t4/img10.png', alt='')
      .col-lg-7.col-md-12.col-sm-12
        p La participación activa de la comunidad es un pilar fundamental en la implementación efectiva de la estrategia de atención integrada de enfermedades prevalentes de la infancia (AIEPI), esta estrategia busca fortalecer la promoción de la salud y la prevención de enfermedades en la infancia, pero su éxito depende en gran medida de la apropiación y compromiso de la población beneficiaria.
        p Uno de los principios esenciales de la AIEPI es la adaptación de los mensajes educativos y estrategias de intervención a las realidades socioculturales de cada comunidad, para lograr esto, es crucial que los propios miembros de la comunidad participen en la construcción y difusión de estos mensajes, asegurando que sean comprensibles, culturalmente aceptables y aplicables en su contexto diario.
        p.mb-0 Se recomienda que las acciones de promoción en salud no solo sean diseñadas por profesionales, sino que se construyan colectivamente con la comunidad, promoviendo el diálogo y el intercambio de conocimientos entre los distintos actores sociales, esto fomenta un mayor nivel de apropiación de la estrategia, ya que las comunidades reconocen la pertinencia de las prácticas promovidas y están más dispuestas a implementarlas en sus hogares.

    .row.align-items-center.justify-content-center.bgmoradoclaro.mb-5(data-aos="fade-left")
        p.p-4 Para fortalecer esta participación, se sugiere la realización de talleres de formación para actores comunitarios, donde se promueva la sensibilización, el empoderamiento y la corresponsabilidad en la promoción de la salud infantil, estos talleres deben estar dirigidos a líderes comunitarios, agentes de salud, docentes, cuidadores y cualquier otro actor clave que pueda desempeñar un rol en la diseminación de conocimientos y prácticas saludables.

    .row.align-items-center.mb-5.subt(data-aos="fade-right")
      .col-auto.ico
        img(src='@/assets/curso/temas/subt.svg', alt='')
      .col
        h3.mb-0.mx-3 Beneficios de la participación comunitaria en la estrategia AIEPI

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade")
      .col-lg-12
        TabsA.color-acento-botones
          .tarjeta.color-primario.p-4(titulo="Mayor sostenibilidad de la estrategia")
            p.mb-3 Cuando la comunidad se involucra activamente en la promoción de la salud, las prácticas saludables tienden a mantenerse en el tiempo, incluso cuando los proyectos gubernamentales o institucionales concluyen.
          .tarjeta.color-primario.p-4(titulo="Empoderamiento de la comunidad")
            p.mb-3 La capacitación y el intercambio de saberes generan un sentimiento de autonomía y capacidad de autogestión en las comunidades, permitiéndoles enfrentar los desafíos de salud de manera más efectiva.
          .tarjeta.color-primario.p-4(titulo="Mayor impacto en la salud infantil")
            p.mb-3 La promoción de hábitos saludables a nivel familiar y comunitario se traduce en la reducción de enfermedades prevenibles y en una mejor calidad de vida para los niños y niñas.
          .tarjeta.color-primario.p-4(titulo="Fortalecimiento de la cohesión social")
            p.mb-3 La participación comunitaria en salud favorece la creación de redes de apoyo entre las familias, facilitando la cooperación y el trabajo conjunto para el bienestar común.
          .tarjeta.color-primario.p-4(titulo="Adaptabilidad y pertinencia cultural")
            p.mb-3 Los mensajes y estrategias diseñados con la comunidad tienen una mayor aceptación y eficacia, ya que respetan las costumbres, valores y dinámicas locales.

    .row.align-items-center.mb-5.subt(data-aos="fade-right")
      .col-auto.ico
        img(src='@/assets/curso/temas/subt.svg', alt='')
      .col
        h3.mb-0.mx-3 Estrategias de implementación de la AIEPI en el programa de vivienda saludable

    p.mb-4 Para asegurar una implementación efectiva del AIEPI dentro del programa de vivienda saludable, es necesario articular diferentes estrategias que permitan la apropiación y aplicación de las prácticas clave de salud en el entorno comunitario. Entre las principales estrategias de implementación se incluyen:

    TabsC.color-acento-botones.bgamarilloclaro
      .py-3.py-md-4.bgamarilloclaro(titulo="Capacitación")
        .row.justify-content-center.mt-0
          .col-md-5
            img(src='@/assets/curso/temas/t4/tab1-1.png')
          .col-md-6.mb-4.mb-md-0
            h4 Capacitación de facilitadores y agentes comunitarios
            p Es fundamental formar a los actores comunitarios que desempeñarán un rol activo en la promoción de las prácticas clave de la AIEPI. Para ello, se deben desarrollar programas de capacitación que les proporcionen las herramientas, conocimientos y metodologías necesarias para trabajar con las familias, algunos de los temas clave a abordar en estas capacitaciones incluyen:        
            ul.lista-ul--color.fa-al  
              li.mb-0   
                i.fas.fa-check-circle
                span.mb-0 Métodos efectivos de comunicación en salud.
              li.mb-0  
                i.fas.fa-check-circle
                span.mb-0 Identificación de problemas de salud infantil y estrategias de prevención.
              li.mb-0   
                i.fas.fa-check-circle
                span.mb-0 Uso y aplicación de materiales educativos en el trabajo comunitario.
              li.mb-0   
                i.fas.fa-check-circle
                span.mb-0 Técnicas de sensibilización y motivación para el cambio de comportamiento en salud.
      .py-3.py-md-4.bgamarilloclaro(titulo="Desarollo")
        .row.justify-content-center.mt-0
          .col-md-5
            img(src='@/assets/curso/temas/t4/tab1-2.png')
          .col-md-6.mb-4.mb-md-0
            h4 Desarrollo de materiales educativos adaptados a la comunidad
            p El diseño de materiales didácticos debe considerar el nivel educativo, el idioma, las costumbres y la idiosincrasia de la población beneficiaria. Se recomienda la elaboración de:      
            ul.lista-ul--color.fa-al  
              li.mb-0   
                i.fas.fa-check-circle
                span.mb-0 Afiches y carteles con mensajes visuales sencillos y atractivos que refuercen los mensajes clave.
              li.mb-0  
                i.fas.fa-check-circle
                span.mb-0 Folletos y guías ilustradas que expliquen de manera clara las prácticas de prevención de enfermedades infantiles.
              li.mb-0   
                i.fas.fa-check-circle
                span.mb-0 Material audiovisual y dramatizaciones que permitan transmitir la información de manera interactiva y entretenida.
              li.mb-0   
                i.fas.fa-check-circle
                span.mb-0 Cuentos y juegos didácticos dirigidos a niños y niñas, para fomentar su participación en la promoción de la salud en el hogar.
      .py-3.py-md-4.bgamarilloclaro(titulo="Monitoreo")
        .row.justify-content-center.mt-0
          .col-md-5
            img(src='@/assets/curso/temas/t4/tab1-3.png')
          .col-md-6.mb-4.mb-md-0
            h4 Monitoreo y evaluación del impacto de las intervenciones
            p Es imprescindible contar con mecanismos de seguimiento que permitan evaluar la efectividad de las acciones implementadas, para ello, se pueden utilizar herramientas como:     
            ul.lista-ul--color.fa-al  
              li.mb-0   
                i.fas.fa-check-circle
                span.mb-0 Visitas domiciliarias periódicas para evaluar la adopción de prácticas saludables.
              li.mb-0  
                i.fas.fa-check-circle
                span.mb-0 Encuestas y entrevistas a las familias beneficiarias para identificar cambios en conocimientos y comportamientos.
              li.mb-0   
                i.fas.fa-check-circle
                span.mb-0 Registros y reportes comunitarios sobre las problemáticas de salud más frecuentes y los avances en su prevención.
              li.mb-0   
                i.fas.fa-check-circle
                span.mb-0 Grupos focales con actores comunitarios para obtener retroalimentación sobre la estrategia y realizar ajustes según las necesidades detectadas.
      .py-3.py-md-4.bgamarilloclaro(titulo="Trabajo")
        .row.justify-content-center.mt-0
          .col-md-5
            img(src='@/assets/curso/temas/t4/tab1-4.png')
          .col-md-6.mb-4.mb-md-0
            h4 Trabajo articulado con instituciones de salud locales
            p Para fortalecer la implementación de la AIEPI, es necesario establecer alianzas con los servicios de salud locales, garantizando el acceso a atención médica oportuna y la continuidad de las acciones de promoción, algunas estrategias clave incluyen:
            ul.lista-ul--color.fa-al  
              li.mb-0   
                i.fas.fa-check-circle
                span.mb-0 Coordinación con centros de salud y hospitales locales para facilitar la referencia y contrarreferencia de casos de niños con enfermedades prevalentes.
              li.mb-0  
                i.fas.fa-check-circle
                span.mb-0 Realización de jornadas de salud comunitarias en las que se brinde atención médica, vacunación y asesoría a las familias.
              li.mb-0   
                i.fas.fa-check-circle
                span.mb-0 Capacitación conjunta entre el personal de salud y los agentes comunitarios, favoreciendo el trabajo en equipo y la complementariedad de conocimientos.

    Separador  
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 4.3 Ejecución operativa en terreno del componente educativo

    .row.align-items-center.justify-content-center.bgmoradoclaro.mb-4(data-aos="fade-left")
      .col-auto
        img(src='@/assets/curso/temas/t4/ico4.png', alt='')
      .col
        p.py-4 La correcta ejecución en terreno del componente educativo es clave para garantizar el éxito de la intervención, según las directrices del ministerio de salud y protección social (2010), una vez definida la cantidad de facilitadores y agentes comunitarios requeridos para cubrir las viviendas beneficiarias, se debe llevar a cabo una planificación operativa eficiente.

    p.mb-4 Cada facilitador, con 10 agentes comunitarios a su cargo, será responsable de organizar la planificación de campo, asegurando la distribución equitativa de las actividades, la asignación de recursos y el seguimiento de las acciones implementadas, la ejecución de este proceso debe considerar los siguientes aspectos fundamentales:

    .row.fondosly.align-items-center.p-4.py-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center
          .tarjeta.tarjeta--blanca.p-4.py-3(data-aos="fade-down")
              SlyderA(tipo="b")
                .row.justify-content-center.align-items-center
                  .col-sm-12.col-md-12.col-lg-6
                    h3.mt-4 Asignación de familias beneficiarias y definición de rutas de visitas domiciliarias
                    p.mb-4 Se debe estructurar un plan de visitas que garantice la cobertura de todas las familias beneficiarias, priorizando aquellas en condiciones de mayor vulnerabilidad.
                  .col-1
                  .col-6.col-md-6.col-lg-4
                    img.mt-5(src='@/assets/curso/temas/t4/sly1-1.png' alt='')
                .row.justify-content-center.align-items-center
                  .col-sm-12.col-md-12.col-lg-6
                    h3.mt-4 Determinación de los requerimientos logísticos
                    p.mb-4 Se deben prever los materiales educativos, papelería, elementos de identificación y demás insumos necesarios para el desarrollo de las visitas domiciliarias y reuniones comunitarias.
                  .col-1
                  .col-6.col-md-6.col-lg-4
                    img.mt-5(src='@/assets/curso/temas/t4/sly1-2.png' alt='')
                .row.justify-content-center.align-items-center
                  .col-sm-12.col-md-12.col-lg-6
                    h3.mt-4 Subsidio parcial de gastos esenciales
                    p.mb-4 Es recomendable gestionar recursos para cubrir parcialmente gastos de refrigerios y transporte, considerando que la participación de los agentes comunitarios es voluntaria y su compromiso es clave para el éxito del programa.
                  .col-1
                  .col-6.col-md-6.col-lg-4
                    img.mt-5(src='@/assets/curso/temas/t4/sly1-3.png' alt='')
                .row.justify-content-center.align-items-center
                  .col-sm-12.col-md-12.col-lg-6
                    h3.mt-4 Reforzamiento de roles y responsabilidades
                    p.mb-4 Se debe capacitar a los agentes comunitarios en sus funciones, asegurando que comprendan su rol en la promoción de la salud y en la ejecución de las visitas domiciliarias de manera efectiva y ética.
                  .col-1
                  .col-6.col-md-6.col-lg-4
                    img.mt-5(src='@/assets/curso/temas/t4/sly1-4.png' alt='')
                .row.justify-content-center.align-items-center
                  .col-sm-12.col-md-12.col-lg-6
                    h3.mt-4 Planificación del tiempo requerido para reuniones y visitas
                    p.mb-4 Es necesario dimensionar el tiempo destinado a las reuniones comunitarias y visitas domiciliarias para optimizar la agenda de trabajo de los agentes y garantizar la cobertura adecuada de las familias beneficiarias.
                  .col-1
                  .col-6.col-md-6.col-lg-4
                    img.mt-5(src='@/assets/curso/temas/t4/sly1-5.png' alt='')
                .row.justify-content-center.align-items-center
                  .col-sm-12.col-md-12.col-lg-6
                    h3.mt-4 Planificación operativa del facilitador
                    p.mb-4 Cada facilitador deberá organizar, ejecutar y evaluar tres reuniones comunitarias, además de supervisar 10 visitas domiciliarias (una con cada agente comunitario), completando un total de 13 acciones dentro del proceso de intervención.
                  .col-1
                  .col-6.col-md-6.col-lg-4
                    img.mt-5(src='@/assets/curso/temas/t4/sly1-6.png' alt='')
                .row.justify-content-center.align-items-center
                  .col-sm-12.col-md-12.col-lg-6
                    h3.mt-4 Responsabilidades de los agentes comunitarios
                    p.mb-4 Cada agente comunitario deberá participar en tres reuniones comunitarias y realizar seis visitas domiciliarias a cada una de las 10 familias bajo su responsabilidad, alcanzando un total de 63 acciones.
                  .col-1
                  .col-6.col-md-6.col-lg-4
                    img.mt-5(src='@/assets/curso/temas/t4/sly1-7.png' alt='')
                .row.justify-content-center.align-items-center
                  .col-sm-12.col-md-12.col-lg-6
                    h3.mt-4 Acompañamiento y seguimiento
                    p.mb-4 Se recomienda que las acciones de monitoreo y evaluación sean ejecutadas en colaboración con ONG, fundaciones u otras instituciones, asegurando la continuidad del programa y el cumplimiento de los objetivos de promoción de la salud.
                  .col-1
                  .col-6.col-md-6.col-lg-4
                    img.mt-5(src='@/assets/curso/temas/t4/sly1-8.png' alt='')

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
