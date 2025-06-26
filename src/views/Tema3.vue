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

    p.mb-4.mt-0 La estrategia de vivienda saludable no solo busca mejorar las condiciones de las viviendas individuales, sino también transformar los entornos urbanos y rurales en espacios seguros, resilientes y sostenibles, fortaleciendo la salud y el bienestar de la población.

    .row.align-items-center.justify-content-center.mb-4(data-aos="fade-down")
      .col-sm-12.col-md-12.col-lg-5
        .row.bgmorado.borde-redondo
          p.p-4.mt-2 La estrategia de vivienda saludable tiene como objetivo principal mejorar las condiciones de vivienda mediante la cooperación entre los sectores nacionales y locales, tanto públicos como privados, esta colaboración es clave para garantizar el acceso a viviendas dignas, seguras y saludables, fomentando la planificación urbana sostenible y el bienestar de la población, la articulación de esfuerzos permite la creación de entornos habitacionales que minimicen riesgos sanitarios y promuevan el acceso a servicios básicos esenciales.
      .col-12.col-md-6.col-lg-3
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
        .col-auto
          img(src="@/assets/curso/temas/t3/bt1.png")
        .col
          .row.justify-content-between.align-items-center
            .col
              h4.mb-1.text-white Estrategia de la Vivienda Saludable y el Módulo Escuela Saludable - 1a parte
              p.mb-0.text-white Para fortalecer el tema anteriormente plasmado, se recomienda visitar el siguiente video
            .col-auto
              a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=9IE-7BszTM8" target="_blank")
                span Ver
                i.fas.fa-video

    Separador  
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 3.1. Componentes de la estrategia de vivienda saludable

    p Para garantizar el desarrollo de viviendas que promuevan el bienestar y la salud de sus habitantes, la estrategia de vivienda saludable se articula en cuatro aspectos fundamentales: institucionales, metodológicos, educativos y tecnológicos, estos componentes permiten una implementación efectiva de políticas y acciones enfocadas en mejorar la calidad de vida de las personas.

    .row.justify-content-center.align-items-center.mb-3
      .col-6.col-md-6.col-lg-3
        img.mb-2(src='@/assets/curso/temas/t3/img2.png', alt='')
      .col-sm-12.col-md-12.col-lg-9
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row.col-xl-11.m-auto(titulo="Aspectos institucionales")
            .row.justify-content-center.align-items-center(data-aos="fade-right")
              .col-lg-12
                p.mb-2 El respaldo y la sostenibilidad de la estrategia dependen de la regulación y el compromiso de las entidades gubernamentales y privadas. Este componente incluye:
                ul.lista-ul--color.fa-al
                  li 
                    i.fas.fa-check-circle
                    span.mb-0 Aval y garantía de sostenibilidad por parte de autoridades competentes.
                  li 
                    i.fas.fa-check-circle
                    span.mb-0 Aplicación de normativas y guías de construcción de viviendas a nivel nacional y local.
                  li 
                    i.fas.fa-check-circle
                    span.mb-0 Implementación de Reglamentos de Agua y Saneamiento (RAS), asegurando la calidad y accesibilidad de los servicios básicos.
                  li 
                    i.fas.fa-check-circle
                    span.mb-0 Fomento de políticas públicas para el acceso a viviendas dignas, con especial énfasis en poblaciones vulnerables.
                  li 
                    i.fas.fa-check-circle
                    span.mb-0 Incorporación de criterios de sostenibilidad y resiliencia ante el cambio climático en las regulaciones de vivienda.
          .row.col-xl-11.m-auto(titulo="Aspectos metodológicos")
            .row.justify-content-center.align-items-center(data-aos="fade-right")
              .col-lg-12  
                p.mb-2 El desarrollo de una vivienda saludable requiere una metodología de construcción progresiva, adaptada a las necesidades sociales y económicas de cada comunidad. Para ello, se propone:  
                ul.lista-ul--color.fa-al  
                  li   
                    i.fas.fa-check-circle  
                    span.mb-0 Implementación de la estrategia en fases, priorizando la viabilidad económica y social.  
                  li   
                    i.fas.fa-check-circle  
                    span.mb-0 Promoción de metodologías de autoconstrucción dirigida y solidaria, con participación activa de las comunidades.  
                  li   
                    i.fas.fa-check-circle  
                    span.mb-0 Aplicación de enfoques participativos que permitan la inclusión de la comunidad en el diseño y mejoramiento de sus viviendas.  
                  li   
                    i.fas.fa-check-circle  
                    span.mb-0 Integración de modelos de planificación urbana que reduzcan riesgos ambientales y favorezcan el acceso a servicios básicos. 
          .row.col-xl-11.m-auto(titulo="Aspectos educativos")
            .row.justify-content-center.align-items-center(data-aos="fade-right")
              .col-lg-12  
                p.mb-2 La educación es clave para garantizar que las personas adopten hábitos saludables y usen adecuadamente los recursos disponibles. Este componente contempla:  
                ul.lista-ul--color.fa-al  
                  li   
                    i.fas.fa-check-circle  
                    span.mb-0 Promoción de conocimientos en salud, higiene y vivienda saludable.  
                  li   
                    i.fas.fa-check-circle  
                    span.mb-0 Capacitación sobre el uso y mantenimiento adecuado de las instalaciones de la vivienda y su entorno.  
                  li   
                    i.fas.fa-check-circle  
                    span.mb-0 Desarrollo de hábitos de higiene y saneamiento tanto a nivel personal como comunitario.  
                  li   
                    i.fas.fa-check-circle  
                    span.mb-0 Programas de concienciación sobre el impacto de la contaminación del aire interior, la eficiencia energética y el ahorro de agua.  
                  li   
                    i.fas.fa-check-circle  
                    span.mb-0 Sensibilización sobre la importancia de la seguridad en el hogar, incluyendo prevención de accidentes domésticos y riesgos ambientales.  
          .row.col-xl-11.m-auto(titulo="Aspectos tecnológicos")
            .row.justify-content-center.align-items-center(data-aos="fade-right")
            .col-lg-12  
              p.mb-2 La tecnología juega un papel crucial en la mejora de las condiciones de vivienda y la sostenibilidad ambiental. Algunas de las soluciones tecnológicas más relevantes incluyen:  
              ul.lista-ul--color.fa-al  
                li   
                  i.fas.fa-check-circle  
                  span.mb-0 Uso de tecnologías alternativas para el acceso a agua potable, como captación de agua lluvia, filtros domésticos y sanitarios ecológicos secos.  
                li   
                  i.fas.fa-check-circle  
                  span.mb-0 Implementación de fuentes de energía renovable, como paneles solares y sistemas de eficiencia energética en el hogar.  
                li   
                  i.fas.fa-check-circle  
                  span.mb-0 Aplicación de materiales de construcción sostenible, resistente y de bajo impacto ambiental.  
                li   
                  i.fas.fa-check-circle  
                  span.mb-0 Desarrollo de infraestructuras inteligentes que optimicen el consumo de agua, energía y promuevan la reducción de residuos.  
                li   
                  i.fas.fa-check-circle  
                  span.mb-0 Adaptación de tecnologías para mejorar la ventilación y reducir la contaminación del aire interior, un factor clave en la prevención de enfermedades respiratorias.  

    .row.align-items-center.mb-5.mt-5.subt(data-aos="fade-right")
      .col-auto.ico
        img(src='@/assets/curso/temas/subt.svg', alt='')
      .col
        h3.mb-0.mx-3 Acciones generales de la gestión local

    p.mb-2 Para la implementación efectiva de la Estrategia de Vivienda Saludable (EVS) a nivel local, es fundamental realizar una serie de acciones preliminares que permitan diagnosticar la situación actual de la vivienda y su entorno, estas acciones son clave para diseñar intervenciones adecuadas que garanticen un impacto positivo y sostenible.
    p #[b Las principales acciones a desarrollar incluyen:]

    .row.bgespecial.align-items-center.p-2.mb-0(data-aos="fade-down")

      .col-lg-12.col-md-12.col-12.px-lg-5.px-4
    
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-8.col-md-10
            SlyderF.custom(columnas="col-lg-6 col-md-6 col-xl-6").mt-4
              .tarjeta.tarjeta--slyder.b1.p-2.p-lg-4.p-md-3
                .row.justify-content-center.mb-3
                  .col-8.my-2
                    img.img-a.img-t(data-aos="zoom-in-left")(src='@/assets/curso/temas/t3/ico_sly1-1.png' alt='AvatarTop')
                .bgacentocontenido
                  h4.text-center.p-1 Identificación de actores clave
                p.mb-0.text-center.mt-2(data-aos="fade-right") Reconocer y establecer alianzas con instituciones gubernamentales, organizaciones civiles, comunitarias y del sector privado que puedan contribuir a la implementación de la estrategia.   
              .tarjeta.tarjeta--slyder.b1.p-2.p-lg-4.p-md-3
                .row.justify-content-center.mb-3
                  .col-8.my-2
                    img.img-a.img-t(data-aos="zoom-in-left")(src='@/assets/curso/temas/t3/ico_sly1-2.png' alt='AvatarTop')
                .bgacentocontenido
                  h4.text-center.p-1 Fortalecimiento de redes de apoyo social
                p.mb-0.text-center.mt-2(data-aos="fade-right") Mapear y articular grupos comunitarios, Organizaciones No Gubernamentales (ONG) y líderes locales que faciliten el proceso de implementación.  
              .tarjeta.tarjeta--slyder.b1.p-2.p-lg-4.p-md-3
                .row.justify-content-center.mb-3
                  .col-8.my-2
                    img.img-a.img-t(data-aos="zoom-in-left")(src='@/assets/curso/temas/t3/ico_sly1-3.png' alt='AvatarTop')
                .bgacentocontenido
                  h4.text-center.p-1 Caracterización de los servicios esenciales
                p.mb-0.text-center.mt-2(data-aos="fade-right") Evaluar la disponibilidad y calidad de servicios básicos como agua potable, saneamiento, salud, educación, energía y transporte dentro de la comunidad.  
              .tarjeta.tarjeta--slyder.b1.p-2.p-lg-4.p-md-3
                .row.justify-content-center.mb-3
                  .col-8.my-2
                    img.img-a.img-t(data-aos="zoom-in-left")(src='@/assets/curso/temas/t3/ico_sly1-4.png' alt='AvatarTop')
                .bgacentocontenido
                  h4.text-center.p-1 Análisis de riesgos y vulnerabilidades
                p.mb-0.text-center.mt-2(data-aos="fade-right") Identificar amenazas físicas, ambientales y sociales que puedan afectar la salud y seguridad de los habitantes, considerando factores como desastres naturales, contaminación ambiental y condiciones de vivienda precarias.  
              .tarjeta.tarjeta--slyder.b1.p-2.p-lg-4.p-md-3
                .row.justify-content-center.mb-3
                  .col-8.my-2
                    img.img-a.img-t(data-aos="zoom-in-left")(src='@/assets/curso/temas/t3/ico_sly1-5.png' alt='AvatarTop')
                .bgacentocontenido
                  h4.text-center.p-1 Perfil epidemiológico
                p.mb-0.text-center.mt-2(data-aos="fade-right") Recopilar información sobre el estado de salud de la población para identificar enfermedades prevalentes relacionadas con las condiciones de vivienda y el entorno, facilitando la formulación de intervenciones preventivas. 

          .col-lg-4.col-md-7.col-9
            img(src='@/assets/curso/temas/t3/img3.png', alt='')

    p.mt-4 Una vez identificadas las condiciones locales y establecidas las bases para la intervención, es necesario estructurar la implementación de la estrategia de manera organizada, para ello, se emplea un modelo metodológico que guía el proceso de planificación, ejecución y seguimiento de las acciones de vivienda saludable, en la siguiente información se presentan las fases clave de la implementación de la EVS, las cuales integran enfoques educativos y tecnológicos para garantizar soluciones sostenibles y adaptadas a las necesidades de la comunidad.

    .row.align-items-center.mb-5.mt-5.subt(data-aos="fade-right")
      .col-auto.ico
        img(src='@/assets/curso/temas/subt.svg', alt='')
      .col
        h3.mb-0.mx-3 Diagrama de implementación de la EVS

    .tarjeta--container.row.mb-4
      .col-md.tarjeta.fondo1.p-4.p-md-4.p-lg-5(data-aos="fade-right")
        .row.justify-content-center.mb-1
          .col-12
            .row.align-items-end.justify-content-center
              .col-lg-3.mb-4
                img.img-a.img-t(src='@/assets/curso/temas/t3/ico_tar1-1.png', alt='Imagen decorativa.')
              .col-lg-8
                h2.mb-4.bgnegro.bgacentocontenido.text-center Fase educativa preparatoria
            ul.lista-ul--color.fa-al.text-white  
              li   
                i.fas.fa-bell
                span.mb-0  Establecimiento de compromisos con instituciones y organizaciones interesadas.
              li   
                i.fas.fa-bell
                span.mb-0 Evaluación cualitativa y cuantitativa de la comunidad y sus necesidades.
              li   
                i.fas.fa-bell 
                span.mb-0 Capacitación de facilitadores y agentes comunitarios encargados de la implementación.
              li   
                i.fas.fa-bell
                span.mb-0 Evaluación de recursos físicos y logísticos necesarios para la ejecución del programa.
              li   
                i.fas.fa-bell
                span.mb-0 Planificación operativa para la ejecución de las acciones de vivienda saludable.
      .col-md.tarjeta.fondo2.p-4.p-md-4.p-lg-5(data-aos="fade-left")
        .row.justify-content-center.mb-1
          .col-12
            .row.align-items-end.justify-content-center
              .col-lg-3.mb-4
                img.img-a.img-t(src='@/assets/curso/temas/t3/ico_tar1-2.png', alt='Imagen decorativa.')
              .col-lg-8
                h2.mb-4.bgnegro.bgacentocontenido.text-center Fase tecnológica preparatoria
            ul.lista-ul--color.fa-al  
              li   
                i.fas.fa-check-circle
                span.mb-0 Establecimiento de acuerdos con instituciones y organizaciones que aporten conocimientos y recursos tecnológicos.
              li   
                i.fas.fa-check-circle  
                span.mb-0 Análisis de la situación actual de las viviendas y priorización de mejoras.
              li   
                i.fas.fa-check-circle  
                span.mb-0 Selección de beneficiarios y conformación de microempresas locales para la ejecución de las obras.
              li   
                i.fas.fa-check-circle  
                span.mb-0 Evaluación y selección de tecnologías alternativas para mejorar la infraestructura de vivienda y saneamiento.
              li   
                i.fas.fa-check-circle  
                span.mb-0 Elaboración de estudios de prospección y diseño de mejoras constructivas alineadas con normativas vigentes.
              li   
                i.fas.fa-check-circle  
                span.mb-0 Planificación operativa con un enfoque sostenible y adaptable a las condiciones locales.

    p.mb-5 Una vez establecidas las bases metodológicas y tecnológicas de la estrategia, se procede a la fase de capacitación y ejecución, donde la comunidad juega un papel activo en la implementación de las mejoras habitacionales, a través de procesos de formación y participación, se busca fortalecer las capacidades locales, garantizando que las intervenciones sean sostenibles a largo plazo y adaptadas a las necesidades específicas de cada población.

    .row.align-items-center.mb-5.mt-5.subt(data-aos="fade-right")
      .col-auto.ico
        img(src='@/assets/curso/temas/subt.svg', alt='')
      .col
        h3.mb-0.mx-3 Capacitación y ejecución de la estrategia

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
      .col-lg-5.col-md-8.col-sm-12
        img.borde-redondo(src='@/assets/curso/temas/t3/img4.png', alt='')
      .col-lg-7.col-md-12.col-sm-12
        p.mb-4 La capacitación es un pilar fundamental en la implementación de la Estrategia de Vivienda Saludable (EVS), ya que permite que las comunidades adquieran los conocimientos y habilidades necesarias para mantener entornos habitacionales adecuados, para ello, se desarrollan talleres de formación dirigidos a facilitadores institucionales, Organizaciones No Gubernamentales (ONG) y agentes comunitarios, además, se llevan a cabo capacitaciones técnicas enfocadas en la ejecución de proyectos de vivienda saludable, promoviendo modelos de autoconstrucción supervisada, donde los beneficiarios participan activamente en la mejora de sus propias viviendas con el apoyo de especialistas.
        .row.bgmoradoclaro.borde-redondo.p-2
          .col-auto
            img(src='@/assets/curso/temas/t3/ico4.png', alt='')
          .col
            p En la fase de ejecución, se implementa un modelo de seguimiento y supervisión en el que ONG o instituciones especializadas garantizan el cumplimiento de los estándares de calidad y sostenibilidad en las intervenciones realizadas, también se fomenta la participación activa de la comunidad en todo el proceso, asegurando que las soluciones aplicadas sean apropiadas y adaptadas a sus necesidades, a través de estas acciones, la EVS no solo mejora las condiciones de vivienda, sino que también fortalece la autonomía de las comunidades, promoviendo la sostenibilidad y la gestión responsable de su entorno habitacional.

    .row.align-items-center.mb-5.mt-5.subt(data-aos="fade-right")
      .col-auto.ico
        img(src='@/assets/curso/temas/subt.svg', alt='')
      .col
        h3.mb-0.mx-3 Proceso de implementación de la estrategia de vivienda saludable

    p.mb-4 La implementación de la Estrategia de Vivienda Saludable (EVS) requiere la articulación de múltiples actores y un proceso estructurado que garantice el éxito en la intervención comunitaria, este proceso incluye reuniones comunitarias, visitas domiciliarias, cooperación técnica y participación de diferentes entidades en el mejoramiento y construcción de viviendas.

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-down")
      .col-lg-9.col-sm-12.col-md-12
        .row.justify-content-center
          .col-lg-5.col-sm-8.col-md-8.p-0
            img(src='@/assets/curso/temas/t3/img5.png', alt='')
          .col-lg-7.col-sm-12.col-md-12.bgmorado.p-4
            p.p-2.mt-3 El primer paso en la estrategia es la movilización comunitaria, que inicia con una primera reunión comunitaria enfocada en el análisis de problemas relacionados con la vivienda y el entorno, en esta fase, la comunidad identifica sus principales necesidades y riesgos, posteriormente, se realiza una segunda reunión comunitaria, donde se lleva a cabo la planificación de las intervenciones necesarias para mejorar las condiciones de habitabilidad, priorizando acciones y recursos.
        .row
          p.mt-4 En paralelo, se inicia el proceso de visitas domiciliarias, donde se realiza un diagnóstico personalizado de cada familia. La primera visita familiar se centra en evaluar las condiciones actuales de la vivienda y detectar factores de riesgo para la salud y el bienestar, las siguientes visitas (segunda, tercera y cuarta) tienen un enfoque temático, abordando aspectos específicos como saneamiento, ventilación, acceso a servicios básicos y seguridad estructural, durante la quinta visita, se consolidan los hallazgos y se preparan las acciones de intervención. Finalmente, en la sexta visita domiciliaria, se lleva a cabo una evaluación individual para verificar el impacto de las mejoras implementadas.
      .col-lg-3.col-6.col-md-6
        img(src='@/assets/curso/temas/t3/img6.png', alt='').d-none.d-lg-block
          
    .row.justify-content-center.align-items-start.mb-4(data-aos="fade-down")
      .col-lg-5.col-md-8.col-sm-12
        img.borde-redondo(src='@/assets/curso/temas/t3/img7.png', alt='')
      .col-lg-7.col-md-12.col-sm-12
        .row.bgmoradoclaro.borde-redondo
          .col-auto
            img.mt-3(src='@/assets/curso/temas/t3/ico5.png', alt='')
          .col
            p.mt-3 Para garantizar el éxito del programa, es fundamental el apoyo de diversas instituciones y entidades, las entidades de cooperación técnica brindan asistencia especializada en transferencia de tecnología, asesoramiento técnico, normativas, reglamentos, políticas y estrategias de financiamiento, también las autoridades nacionales y departamentales, junto con las entidades financieras, desempeñan un papel clave en la asignación de fondos, elaboración de proyectos y financiamiento de las iniciativas de vivienda saludable.
        p.mt-4 El proceso de mejoramiento y construcción de vivienda se lleva a cabo mediante la colaboración de diferentes actores, microempresas locales son las encargadas de la construcción, bajo la supervisión de ONG y otras instituciones que garantizan el cumplimiento de estándares de calidad. Los beneficiarios también participan activamente en el proceso, contribuyendo con mano de obra y materiales locales, lo que fortalece el sentido de apropiación y sostenibilidad de las mejoras realizadas.

    .row.justify-content-center.align-items-start.mb-4(data-aos="fade-down")
      .col-lg-5.col-md-12.col-sm-12
        .row.bgmoradoclaro.borde-redondo.p-2
          p.p-3.mb-0 Las universidades y centros de investigación cumplen un rol fundamental en el desarrollo de nuevas tecnologías para la vivienda saludable, la investigación en materiales sostenibles y el seguimiento de los impactos generados por la estrategia. Finalmente, los gobiernos municipales aportan terrenos y/o ejercen funciones de fiscalización para asegurar el cumplimiento de normativas y la adecuada ejecución de los proyectos de vivienda.
      .col-lg-3.col-md-6.col-12
        img.borde-redondo(src='@/assets/curso/temas/t3/img8.png', alt='')
      .col-lg-4.col-md-12.col-sm-12
        .row.align-items-center
          .col-auto
            img(src='@/assets/curso/temas/t3/ico6.png', alt='').d-none.d-lg-block
        .row
          p.mt-2 La implementación de la EVS concluye con una tercera reunión comunitaria, donde se realiza una evaluación colectiva de los avances, aprendizajes y desafíos del proceso, este espacio permite ajustar estrategias futuras y fortalecer la resiliencia comunitaria para garantizar la sostenibilidad de las viviendas saludables en el tiempo.

    p Este modelo de intervención estructurado y participativo permite transformar las condiciones de vivienda, promoviendo comunidades más saludables, seguras y sostenibles a través del trabajo colaborativo entre los distintos sectores involucrados.


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
