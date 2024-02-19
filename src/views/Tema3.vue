<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 3
      h1 Estructura gramatical. <i>What are you doing?</i>

    .bg10
      .row.justify-content-center.align-items-center
        .col-lg-4
          p.my-4(data-aos="fade-down") Recuerde que, como el tiempo presente simple en inglés es muy sencillo de usar, se utiliza cuando se enuncian situaciones que ocurren en el presente o son permanentes, también aquellas que se repiten en el tiempo. 
            | <i>For example:</i>       
        .col-lg-8
          SlyderF(columnas="col-lg-6")(data-aos="fade-right")
            .crd.crd--100.tarjeta.color-primario.p-4.bgs
              .row.justify-content-center.mb-3
                .col-8
                  img.img-a.img-t(src='@/assets/curso/temas/img63.svg' alt='AvatarTop')

              TarjetaAudio.color-acento-contenido.bg-white.my-3(
                texto="<i><span1>The sun shines in the sky.</span1></i>"
                :audio="require('@/assets/curso/audios/3/1.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )                    
              p.mb-0 El sol brilla en el cielo.

            .crd.crd--100.tarjeta.color-primario.p-4.bgs
              .row.justify-content-center.mb-3
                .col-8
                  img.img-a.img-t(src='@/assets/curso/temas/img64.svg' alt='AvatarTop')

              TarjetaAudio.color-acento-contenido.bg-white.my-3(
                texto="<i><span1>The baby eats every four hours.</span1></i>"
                :audio="require('@/assets/curso/audios/3/2.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )                    
              p.mb-0 El bebé come cada cuatro horas.

            .crd.crd--100.tarjeta.color-primario.p-4.bgs
              .row.justify-content-center.mb-3
                .col-8
                  img.img-a.img-t(src='@/assets/curso/temas/img65.svg' alt='AvatarTop')

              TarjetaAudio.color-acento-contenido.bg-white.my-3(
                texto="<i><span1>Charles walks in the park.</span1></i>"
                :audio="require('@/assets/curso/audios/3/3.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )                    
              p.mb-0 Charles camina en el parque.

            .crd.crd--100.tarjeta.color-primario.p-4.bgs
              .row.justify-content-center.mb-3
                .col-8
                  img.img-a.img-t(src='@/assets/curso/temas/img66.svg' alt='AvatarTop')

              TarjetaAudio.color-acento-contenido.bg-white.my-3(
                texto="<i><span1>Luis drinks a soda.</span1></i>"
                :audio="require('@/assets/curso/audios/3/4.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )                    
              p.mb-0 Luis bebe un refresco.

            .crd.crd--100.tarjeta.color-primario.p-4.bgs
              .row.justify-content-center.mb-3
                .col-8
                  img.img-a.img-t(src='@/assets/curso/temas/img67.svg' alt='AvatarTop')

              TarjetaAudio.color-acento-contenido.bg-white.my-3(
                texto="<i><span1>Mary and Leo play tennis.</span1></i>"
                :audio="require('@/assets/curso/audios/3/5.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )                    
              p.mb-0 Mary y Leo juegan tenis.

            .crd.crd--100.tarjeta.color-primario.p-4.bgs
              .row.justify-content-center.mb-3
                .col-8
                  img.img-a.img-t(src='@/assets/curso/temas/img68.svg' alt='AvatarTop')

              TarjetaAudio.color-acento-contenido.bg-white.my-3(
                texto="<i><span1>We swim in the river.</span1></i>"
                :audio="require('@/assets/curso/audios/3/6.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )                    
              p.mb-0 Nosotros nadamos en el río.

            .crd.crd--100.tarjeta.color-primario.p-4.bgs
              .row.justify-content-center.mb-3
                .col-8
                  img.img-a.img-t(src='@/assets/curso/temas/img69.svg' alt='AvatarTop')

              TarjetaAudio.color-acento-contenido.bg-white.my-3(
                texto="<i><span1>Erika works in a shopping mall.</span1></i>"
                :audio="require('@/assets/curso/audios/3/7.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )                    
              p.mb-0 Erika trabaja en un centro comercial.

            .crd.crd--100.tarjeta.color-primario.p-4.bgs
              .row.justify-content-center.mb-3
                .col-8
                  img.img-a.img-t(src='@/assets/curso/temas/img70.svg' alt='AvatarTop')

              TarjetaAudio.color-acento-contenido.bg-white.my-3(
                texto="<i><span1>Cleo buys a dessert at the store.</span1></i>"
                :audio="require('@/assets/curso/audios/3/8.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )                    
              p.mb-0 Cleo compra un postre en la tienda.

            .crd.crd--100.tarjeta.color-primario.p-4.bgs
              .row.justify-content-center.mb-3
                .col-8
                  img.img-a.img-t(src='@/assets/curso/temas/img71.svg' alt='AvatarTop')

              TarjetaAudio.color-acento-contenido.bg-white.my-3(
                texto="<i><span1>Susy washes the dishes.</span1></i>"
                :audio="require('@/assets/curso/audios/3/9.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )                    
              p.mb-0 Susy lava la vajilla.

            .crd.crd--100.tarjeta.color-primario.p-4.bgs
              .row.justify-content-center.mb-3
                .col-8
                  img.img-a.img-t(src='@/assets/curso/temas/img72.svg' alt='AvatarTop')

              TarjetaAudio.color-acento-contenido.bg-white.my-3(
                texto="<i><span1>Helen paints a landscape.</span1></i>"
                :audio="require('@/assets/curso/audios/3/10.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )                    
              p.mb-0 Helen pinta un paisaje.

            .crd.crd--100.tarjeta.color-primario.p-4.bgs
              .row.justify-content-center.mb-3
                .col-8
                  img.img-a.img-t(src='@/assets/curso/temas/img73.svg' alt='AvatarTop')

              TarjetaAudio.color-acento-contenido.bg-white.my-3(
                texto="<i><span1>The little dog licks her injured paw.</span1></i>"
                :audio="require('@/assets/curso/audios/3/11.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )                    
              p.mb-0 El perrito lame su pata herida.

    p(data-aos="fade-down").my-5.text-center.pt-5 De acuerdo con el modo afirmativo, negativo o interrogativo, una oración en presente simple presenta una estructura básica, como se puede observar a continuación:

    .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade-left")
      h5 Tabla 1
      span Estructura oración en presente simple

    .row.justify-content-center.align-items-stretch.mx-0
      .col-lg-4.bgt.p-4
        img.img-a.img-t.mb-4(src='@/assets/curso/temas/img74.svg', alt='')
        .text-center
          h5.r Tipo de oración
          p Afirmativa (+)
          h5.r Estructura
          p Sujeto + verbo + complemento
          Traduccion.color-primario(:dialogo="traduccion")

      .col-lg-4.bgt1.p-4
        img.img-a.img-t.mb-4(src='@/assets/curso/temas/img75.svg', alt='')
        .text-center
          h5.r Tipo de oración
          p Negativa (-)
          h5.r Estructura
          p Sujeto + auxiliar #[i do/does] + #[i not] + complemento
          Traduccion.color-primario(:dialogo="traduccion1")

      .col-lg-4.bgt.p-4
        img.img-a.img-t.mb-4(src='@/assets/curso/temas/img76.svg', alt='')
        .text-center
          h5.r Tipo de oración
          p Interrogativa (?)
          h5.r Estructura
          p Auxiliar #[i do/does] + sujeto + verbo + complemento + ?
          Traduccion.color-primario(:dialogo="traduccion2")
    .bg12.p-5
      p(data-aos="fade-down").mb-5.text-center Ahora, escuche algunos ejemplos y repase la estructura básica: 
      SlyderF.mb-5(columnas="col-lg-3")(data-aos="fade-right")
        .crd.crd--100.tarjeta.p-4.bg11.p-3
          .tarjeta.tarjeta-bg.card11.p-3.w-100.crd.crd--100
            Audio.color-acento-contenido.mb-2.m-auto(:audio="require('@/assets/curso/audios/3/12.mp3')")
            p.text-center.r
              span.fst-italic.fw-bold Joel paints the house.

        .crd.crd--100.tarjeta.p-4.bg11.p-3
          .tarjeta.tarjeta-bg.card11.p-3.w-100.crd.crd--100
            Audio.color-acento-contenido.mb-2.m-auto(:audio="require('@/assets/curso/audios/3/13.mp3')")
            p.text-center.r
              span.fst-italic.fw-bold We play soccer in the morning.

        .crd.crd--100.tarjeta.p-4.bg11.p-3
          .tarjeta.tarjeta-bg.card11.p-3.w-100.crd.crd--100
            Audio.color-acento-contenido.mb-2.m-auto(:audio="require('@/assets/curso/audios/3/14.mp3')")
            p.text-center.r
              span.fst-italic.fw-bold Do you speak English?

        .crd.crd--100.tarjeta.p-4.bg11.p-3
          .tarjeta.tarjeta-bg.card11.p-3.w-100.crd.crd--100
            Audio.color-acento-contenido.mb-2.m-auto(:audio="require('@/assets/curso/audios/3/15.mp3')")
            p.text-center.r
              span.fst-italic.fw-bold Leo doesn’t study Biology.  

        .crd.crd--100.tarjeta.p-4.bg11.p-3
          .tarjeta.tarjeta-bg.card11.p-3.w-100.crd.crd--100
            Audio.color-acento-contenido.mb-2.m-auto(:audio="require('@/assets/curso/audios/3/16.mp3')")
            p.text-center.r
              span.fst-italic.fw-bold The girl dances  in the party                                            
        .crd.crd--100.tarjeta.p-4.bg11.p-3
          .tarjeta.tarjeta-bg.card11.p-3.w-100.crd.crd--100
            Audio.color-acento-contenido.mb-2.m-auto(:audio="require('@/assets/curso/audios/3/17.mp3')")
            p.text-center.r
              span.fst-italic.fw-bold Felix and Molly sing together.

        .crd.crd--100.tarjeta.p-4.bg11.p-3
          .tarjeta.tarjeta-bg.card11.p-3.w-100.crd.crd--100
            Audio.color-acento-contenido.mb-2.m-auto(:audio="require('@/assets/curso/audios/3/18.mp3')")
            p.text-center.r
              span.fst-italic.fw-bold You don’t wash the dishes.

        .crd.crd--100.tarjeta.p-4.bg11.p-3
          .tarjeta.tarjeta-bg.card11.p-3.w-100.crd.crd--100
            Audio.color-acento-contenido.mb-2.m-auto(:audio="require('@/assets/curso/audios/3/19.mp3')")
            p.text-center.r
              span.fst-italic.fw-bold Do I eat breakfast?

        .crd.crd--100.tarjeta.p-4.bg11.p-3
          .tarjeta.tarjeta-bg.card11.p-3.w-100.crd.crd--100
            Audio.color-acento-contenido.mb-2.m-auto(:audio="require('@/assets/curso/audios/3/20.mp3')")
            p.text-center.r
              span.fst-italic.fw-bold My brother is an engineer.

        .crd.crd--100.tarjeta.p-4.bg11.p-3
          .tarjeta.tarjeta-bg.card11.p-3.w-100.crd.crd--100
            Audio.color-acento-contenido.mb-2.m-auto(:audio="require('@/assets/curso/audios/3/21.mp3')")
            p.text-center.r
              span.fst-italic.fw-bold Do they tell good stories?

      .row.justify-content-center.align-items-end
        .col-lg-4
          img.img-a.img-t(src='@/assets/curso/temas/img77.png', alt='')
          .bgp.text-center.py-4
            h4.g(data-aos="fade-down").mb-0 Diccionario / Dictionary
        .col-lg-6.my-3
          p(data-aos="fade-down") Para verificar el significado y la pronunciación, puede hacer uso de herramientas en línea como
          .row.justify-content-center.align-items-center.mb-4
            .col-lg-6
              a.anexo.mb-4.mb-lg-0(href="https://www.linguee.es/" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p #[b Enlace web.] Linguee                     
            .col-lg-6
              a.anexo.mb-4.mb-lg-0(href="https://www.wordreference.com/" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p #[b Enlace web.] Wordreference                     
          p(data-aos="fade-down") que le permiten escuchar, definir y apropiar vocabulario en inglés.

    p(data-aos="fade-down").my-5 Si bien es importante tener clara la estructura gramatical del presente simple, es importante resaltar que, en tercera persona (she, he, it), se debe agregar una “s” con algunas condiciones: 

    TabsC.color-primario
      .pb-3.pb-md-4(titulo="Tercera persona “S”")
        .row.justify-content-center.align-items-center.bg13.py-4.mx-0
          .col-lg-4.d-none.d-lg-block
            img.img-a.img-t(src='@/assets/curso/temas/img78.png', alt='')
          .col-lg-7
            h4.r Tercera persona “S”
            p Cuando se emplea el tiempo presente, los verbos en la tercera persona del singular añaden una “s”:
            h5.r For example:
            p Con el verbo “#[i to eat]”, la tercera persona del singular añade la “s”:
            .row.justify-content-center.align-items-center
              .col-lg-6
                TraduccionAudio.color-primario(:dialogo="dialogo1")
              .col-lg-6
                TraduccionAudio.color-primario(:dialogo="dialogo2")
            p Con los verbos regulares: 
            .row.justify-content-center.align-items-center
              .col-lg-6
                TraduccionAudio.color-primario(:dialogo="dialogo3")
              .col-lg-6
                TraduccionAudio.color-primario(:dialogo="dialogo4")
            .row.justify-content-start.align-items-center
              .col-lg-6
                TraduccionAudio.color-primario(:dialogo="dialogo5") 

      .pb-3.pb-md-4(titulo="Según terminación “ES”")
        .row.justify-content-center.align-items-center.bg13.py-4.mx-0
          .col-11
            h4.r Según terminación “ES”
            p Es ideal tener claro que, cuando los verbos terminan en -o, -sh, -ch, -ss, -x, -y, -z, se les debe añadir “es” al final. Por ejemplo: con el verbo que termina en #[b o], como “#[i to go]”, la tercera persona del singular añade “es”.        
          .col-lg-4.d-none.d-lg-block
            img.img-a.img-t(src='@/assets/curso/temas/img80.png', alt='')
          .col-lg-6
            .row.justify-content-center.align-items-center
              .col-lg-6
                TraduccionAudio.color-primario(:dialogo="dialogo6")
              .col-lg-6
                TraduccionAudio.color-primario(:dialogo="dialogo7")
            .row.justify-content-start.align-items-center
              .col-lg-12
                TraduccionAudio.color-primario(:dialogo="dialogo8")
                TraduccionAudio.color-primario(:dialogo="dialogo9") 
                TraduccionAudio.color-primario(:dialogo="dialogo10")
      .pb-3.pb-md-4(titulo="Terminación en Y")
        .row.justify-content-center.align-items-center.bg13.py-4.mx-0
          .col-11
            h5.r Terminación en Y
            p Cuando el verbo termina en “#[b y]”, esta se debe cambiar por una “#[b i]” y al final agregar “#[b es]”.                   
          .col-lg-4.d-none.d-lg-block
            img.img-a.img-t(src='@/assets/curso/temas/img81.png', alt='')
          .col-lg-6    
            .row.justify-content-center.align-items-center
              .col-lg-6
                TraduccionAudio.color-primario(:dialogo="dialogo11")
              .col-lg-6
                TraduccionAudio.color-primario(:dialogo="dialogo12")
            .row.justify-content-start.align-items-center
              .col-lg-12
                TraduccionAudio.color-primario(:dialogo="dialogo13")
          .col-11                
            p No obstante, si antes de la “y“ se encuentra una vocal, solo debe agregarse la s, sin modificar el verbo. Por ejemplo:           
            .row.justify-content-center.align-items-center
              .col-lg-6
                TraduccionAudio.color-primario(:dialogo="dialogo14")
              .col-lg-6
                TraduccionAudio.color-primario(:dialogo="dialogo15")

    Separador 
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 3.1 Verbo <i>to be</i> (ser o estar) 

    .row.justify-content-center.bg14
      .col-lg-4.p-0
        img.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img82.png', alt='')
      .col-lg-8.my-3
        p(data-aos="fade-down").mb-4 El verbo “#[i to be]” es básico y permite expresar dos significados: ser y estar, dependiendo del resto de la oración de la cual forma parte, así como del pronombre al cual acompaña en la misma. Puede expresarse en forma afirmativa, negativa o interrogativa. Por ser un verbo irregular, debe atenderse en cada caso a su estructura, por lo que puede validar la conjugación, forma y ejemplo a través del siguiente documento: 
        .row.justify-content-start
          .col-lg-6
            a.anexo.mb-4(:href="obtenerLink('downloads/Verbo_To_be_ser_o_estar.pdf')" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p #[b Anexo.] Verbo "To be" (ser o estar)

    Separador 
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 3.2   El presente continuo

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8
        p(data-aos="fade-down") Cabe recordar que debe indicarse que el verbo to be funciona también como verbo auxiliar para ayudar a formar el tiempo presente continuo. En este caso, se conjuga el verbo to be y se coloca el gerundio del verbo principal.
        .bgs.ps-1
          p(data-aos="fade-down") El gerundio se forma añadiendo la terminación ing al infinitivo del verbo principal de la oración.

        h5(data-aos="fade-down") For example: 
        .tarjeta.position-relative.rounded-0.p-4
          .row.justify-content-center.align-items-center
            .col-lg-2.col-5.mb-lg-0.mb-3
              .imagen-absolute4
                img(src='@/assets/curso/temas/img84.svg', alt='')
            .col-lg-10
              .bg15.ps-5.me-5
                p(data-aos="fade-down").p-5.my-1 
                  span.r #[i Mary #[b is eating] her lunch]. 
                  span En este caso el verbo principal es #[i #[b  to eat]] y se le añade #[i #[b  ing = eating]]. / Mary está comiendo su almuerzo.
      .col-lg-4.d-none.d-lg-block
        img.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img83.png', alt='')

    p(data-aos="fade-down").mb-5 Revisemos la estructura gramatical:
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10.up    
        .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade-left")
          h5 Tabla 2
          span Estructura presente continuo     
        .tabla1.color-acento-botones.pb-5.mb-lg-0(data-aos="fade-right")
          table.text-center.w-100
            tbody
              tr.bgt1header
                td.t1br Número
                td.t1br Persona
                td.t1br Pronombre
                td.t1br Auxiliar to be
                td.t1br Verbo principal + ing
                td Complemento
              tr
                td.tb1bg1(rowspan='3') Singular
                td.tb1bg1.tb1bd 1<sup>a</sup>
                td.tb1bd I
                td.tb1bd am
                td(rowspan='6') <i>drink+ing= drinking</i>
                td(rowspan='6') <i>orange juice.</i>
              tr
                td.tb1bg1.tb1bd 2<sup>a</sup>
                td.tb1bd You
                td.tb1bd are
              tr
                td.tb1bg1 3<sup>a</sup>
                td He, She, It
                td is
              tr
                td.tb1bg1(rowspan='3') Plural
                td.tb1bg1.tb1bd 1<sup>a</sup>
                td.tb1bd we
                td(rowspan='3') are
              tr
                td.tb1bg1.tb1bd 2<sup>a</sup>
                td.tb1bd you            
              tr
                td.tb1bg1 3<sup>a</sup>
                td they

    .bg16.p-5.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-6.my-3
          p(data-aos="fade-down").mb-0 En este caso, las oraciones formadas corresponden a las siguientes, estructurándose en tiempo presente continuo:      
        .col-lg-6
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img86.png', alt='')
          SlyderA.px-5(data-aos="flip-down")
            .row.justify-content-center.align-items-center
              .col-10.crd.crd--100
                .bg17.p-3.pb-0
                  TraduccionAudio.color-primario(:dialogo="dialogo16")
            .row.justify-content-center.align-items-center
              .col-10.crd.crd--100
                .bg17.p-3.pb-0
                  TraduccionAudio.color-primario(:dialogo="dialogo17")
            .row.justify-content-center.align-items-center
              .col-10.crd.crd--100
                .bg17.p-3.pb-0
                  TraduccionAudio.color-primario(:dialogo="dialogo18")
            .row.justify-content-center.align-items-center
              .col-10.crd.crd--100
                .bg17.p-3.pb-0
                  TraduccionAudio.color-primario(:dialogo="dialogo19")
            .row.justify-content-center.align-items-center
              .col-10.crd.crd--100
                .bg17.p-3.pb-0
                  TraduccionAudio.color-primario(:dialogo="dialogo20")
            .row.justify-content-center.align-items-center
              .col-10.crd.crd--100
                .bg17.p-3.pb-0
                  TraduccionAudio.color-primario(:dialogo="dialogo21")

    p(data-aos="fade-down").mb-5 Los verbos principales de las oraciones pueden ser regulares o irregulares. Cuando se trata de verbos irregulares, la terminación de estos cambia cuando se va a formar el gerundio. Por ejemplo:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.my-3.d-none.d-lg-block
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img87.png', alt='')       
      .col-lg-9
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
          .row.justify-content-center.align-items-center(titulo="Terminación vocal E")
            .col-11.bgwhite.p-4
              p Cuando el verbo principal termina en la vocal e, esta se elimina al añadir la terminación ing en el verbo principal: 
              h5 #[i to serve + ing = serving] (pierde la e final)
              .row.justify-content-center.align-items-center
                .col-lg-3.my-3
                  img.img-a.img-t(src='@/assets/curso/temas/img88.svg', alt='')       
                .col-lg-9                   
                  TraduccionAudio.color-primario.crd.crd--100(:dialogo="dialogo22")
              .row.justify-content-center.align-items-center
                .col-lg-3.my-3
                  img.img-a.img-t(src='@/assets/curso/temas/img89.svg', alt='')       
                .col-lg-9                   
                  TraduccionAudio.color-primario.crd.crd--100(:dialogo="dialogo23")
              .row.justify-content-center.align-items-center
                .col-lg-3.my-3
                  img.img-a.img-t(src='@/assets/curso/temas/img90.svg', alt='')       
                .col-lg-9                   
                  TraduccionAudio.color-primario.crd.crd--100(:dialogo="dialogo24")  

          .row.justify-content-center.align-items-center(titulo="Verbo con una sola sílaba")
            .col-11.bgwhite.p-4
              p Cuando el verbo tiene una sola sílaba y termina en consonante después de una vocal, se repite la consonante final y se añade ing. Igual debe hacerse si el verbo es de dos sílabas y tiene su acento en la última sílaba.
              .row.justify-content-center.align-items-center
                .col-lg-3.my-3
                  img.img-a.img-t(src='@/assets/curso/temas/img91.svg', alt='')       
                .col-lg-9                   
                  TraduccionAudio.color-primario.crd.crd--100(:dialogo="dialogo25")
              .row.justify-content-center.align-items-center
                .col-lg-3.my-3
                  img.img-a.img-t(src='@/assets/curso/temas/img92.svg', alt='')       
                .col-lg-9                   
                  TraduccionAudio.color-primario.crd.crd--100(:dialogo="dialogo26")
              .row.justify-content-center.align-items-center
                .col-lg-3.my-3
                  img.img-a.img-t(src='@/assets/curso/temas/img93.svg', alt='')       
                .col-lg-9                   
                  TraduccionAudio.color-primario.crd.crd--100(:dialogo="dialogo27")   
              .row.justify-content-center.align-items-center
                .col-lg-3.my-3
                  img.img-a.img-t(src='@/assets/curso/temas/img94.svg', alt='')       
                .col-lg-9                   
                  TraduccionAudio.color-primario.crd.crd--100(:dialogo="dialogo28")

    p(data-aos="fade-down").mb-5 En el siguiente cuadro, puede apreciarse la estructura del presente continuo en modo afirmativo, negativo e    interrogativo: 
    .row.justify-content-center.mb-5.g-3(data-aos="zoom-in-up")
      .col-lg-4.mb-lg-0.mb-3
        .tarjeta.tarjeta-ribbon.bgcard1.p-3.h-100
          .tarjeta-ribbon_texto.p-2
            h4.mb-0.text-white Forma afirmativa
          .p-3
            img.img-a.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/img95.svg', alt='')
            p(data-aos="fade-down").mb-4 Sujeto + Verbo #[i to be] + Verbo en gerundio + Complemento
            TarjetaAudio.color-acento-contenido.bg-white.mb-3(
              texto="Nelly is waiting for the bus"
              :audio="require('@/assets/curso/audios/3/22_1.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )            
            p(data-aos="fade-down") Nelly está esperando el bus.

      .col-lg-4.mb-lg-0.mb-3
        .tarjeta.tarjeta-ribbon.bgcard1.p-3.h-100
          .tarjeta-ribbon_texto.p-2
            h4.mb-0.text-white Forma negativa
          .p-3
            img.img-a.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/img96.svg', alt='')
            p(data-aos="fade-down").mb-4 Sujeto + Verbo #[i to be] + #[i not] + Verbo en gerundio + Complemento
            TarjetaAudio.color-acento-contenido.bg-white.mb-3(
              texto="Nelly is not waiting for the bus."
              :audio="require('@/assets/curso/audios/3/22_2.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )            
            p(data-aos="fade-down") Nelly no está esperando el bus.

      .col-lg-4.mb-lg-0.mb-3
        .tarjeta.tarjeta-ribbon.bgcard1.p-3.h-100
          .tarjeta-ribbon_texto.p-2
            h4.mb-0.text-white Forma interrogativa
          .p-3
            img.img-a.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/img97.svg', alt='')
            p(data-aos="fade-down").mb-4 Verbo #[i to be] + Sujeto + Verbo en gerundio + Complemento + ? 
            TarjetaAudio.color-acento-contenido.bg-white.mb-3(
              texto="Is Nelly waiting for the bus?"
              :audio="require('@/assets/curso/audios/3/22_3.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )            
            p(data-aos="fade-down") ¿Está Nelly esperando el bus? 

    .bg18.p-4(data-aos="flip-down")
      .row.justify-content-center
        .col-lg-6.my-3
          h5(data-aos="fade-down").mb-0 En cuanto a los verbos irregulares, es esencial poder dar un primer paso, por lo que puede iniciarlo a través del siguiente documento, que le presentará las bases iniciales:             
        .col-lg-4.my-3
          a.anexo(:href="obtenerLink('downloads/verbos_irregulares.pdf')" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-pdf.svg")
            .anexo__texto
              p #[b Anexo.] verbos irregulares  
              
    titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2.mt-5 Actividad didáctica                       
    .row.mt-5.justify-content-center.align-items-center.align-items-lg-stretch
      .col-6.col-md-4.col-lg-3.mb-4.mb-md-0
        .tarjeta.h-100.d-flex.align-items-center.p-4
          figure
            img(src="@/assets/template/seleccion-multiple.svg", alt="")
      .col-12.col-md-8.col-lg-9
        .titulo-segundo
          h2 Estructura gramatical
        p.mb-4 #[i What are you doing?] / ¿Qué estás haciendo?
        .tarjeta.actividad.p-3
          .row.justify-content-around.align-items-center            
            .col-sm.mb-3.mb-sm-0
              p.fw-bold.mb-0 Opción múltiple
            .col-auto
              a.boton.boton--b(:href="obtenerLink('/actividades/03/index.html')" target="_blank")
                span Realizar
                i.fas.fa-puzzle-piece
</template>

<script>
import Traduccion from '../components/Traduccion.vue'
import TraduccionAudio from '../components/TraduccionAudio.vue'
export default {
  name: 'Tema3',
  components: {
    Traduccion,
    TraduccionAudio,
  },
  data: () => ({
    traduccion: {
      dialogo: [
        {
          textoIng: 'Charles drinks a soda.',
          textoEsp: 'Charles bebe un refresco.',
        },
      ],
    },
    traduccion1: {
      dialogo: [
        {
          textoIng: 'Charles does not drink a soda. ',
          textoEsp: 'Charles no bebe un refresco.',
        },
      ],
    },
    traduccion2: {
      dialogo: [
        {
          textoIng: 'Does Charles drink a soda?. ',
          textoEsp: '¿Charles bebe un refresco?',
        },
      ],
    },
    dialogo1: [
      {
        textoIng: 'Melany eats the fried chicken.',
        textoEsp: 'Melany come el pollo frito.',
        audio: require('@/assets/curso/audios/3/22.mp3'),
      },
    ],

    dialogo2: [
      {
        textoIng: 'She eats the fried chicken.',
        textoEsp: 'Ella come el pollo frito.',
        audio: require('@/assets/curso/audios/3/23.mp3'),
      },
    ],

    dialogo3: [
      {
        textoIng: 'He closes the window.',
        textoEsp: 'El cierra la ventana.',
        audio: require('@/assets/curso/audios/3/24.mp3'),
      },
    ],

    dialogo4: [
      {
        textoIng: 'The waiter opens the door.',
        textoEsp: 'El camarero abre la puerta.',
        audio: require('@/assets/curso/audios/3/25.mp3'),
      },
    ],

    dialogo5: [
      {
        textoIng: 'Helen plants a tree.',
        textoEsp: 'Helen planta un árbol.',
        audio: require('@/assets/curso/audios/3/26.mp3'),
      },
    ],

    dialogo6: [
      {
        textoIng: '<i>(To go)</i> - Jimmy go<i>es</i> to school.',
        textoEsp: 'Jimmy va a la escuela.',
        audio: require('@/assets/curso/audios/3/27.mp3'),
      },
    ],

    dialogo7: [
      {
        textoIng: '<i>(To go)</i> - He go<i>es</i> to school. ',
        textoEsp: 'Él va a la escuela.',
        audio: require('@/assets/curso/audios/3/28.mp3'),
      },
    ],

    dialogo8: [
      {
        textoIng: '<i>(To reach)</i> - He reach<i>es</i> the mark rapidly.',
        textoEsp: 'Él alcanza la marca rápidamente.',
        audio: require('@/assets/curso/audios/3/29.mp3'),
      },
    ],

    dialogo9: [
      {
        textoIng:
          '<i>(To pass)</i> - Cleo pass</i>es the exam with a good grade. ',
        textoEsp: 'Cleo pasa el examen con buena nota.',
        audio: require('@/assets/curso/audios/3/30.mp3'),
      },
    ],

    dialogo10: [
      {
        textoIng:
          '<i>(To fix)</i> - Joe fix<i>es</i> the sticker on the notebook.',
        textoEsp: 'Joe fija la calcomanía en el cuaderno.',
        audio: require('@/assets/curso/audios/3/31.mp3'),
      },
    ],

    dialogo11: [
      {
        textoIng: '(To carry) - Mike carries a heavy package.',
        textoEsp: 'Mike carga un paquete muy pesado.',
        audio: require('@/assets/curso/audios/3/32.mp3'),
      },
    ],

    dialogo12: [
      {
        textoIng: '(To fly) - That little plane flies very high.',
        textoEsp: 'Ese avioncito vuela muy alto.',
        audio: require('@/assets/curso/audios/3/33.mp3'),
      },
    ],

    dialogo13: [
      {
        textoIng: '(To try) - The teacher tries to explain an experiment.',
        textoEsp: 'El maestro trata de explicar un experimento.',
        audio: require('@/assets/curso/audios/3/34.mp3'),
      },
    ],

    dialogo14: [
      {
        textoIng: '(To play) - Oriana plays the piano in the theater.',
        textoEsp: 'Oriana toca el piano en el teatro.',
        audio: require('@/assets/curso/audios/3/35.mp3'),
      },
    ],

    dialogo15: [
      {
        textoIng: '(To say) - Henry says his prayers.',
        textoEsp: 'Henry dice sus oraciones.',
        audio: require('@/assets/curso/audios/3/36.mp3'),
      },
    ],

    dialogo16: [
      {
        textoIng: 'I am drinking orange juice. ',
        textoEsp: 'Yo estoy tomando jugo de naranja.',
        audio: require('@/assets/curso/audios/3.2/1.mp3'),
      },
    ],

    dialogo17: [
      {
        textoIng: 'You are drinking orange juice.',
        textoEsp: 'Tú estás tomando jugo de naranja.',
        audio: require('@/assets/curso/audios/3.2/2.mp3'),
      },
    ],

    dialogo18: [
      {
        textoIng: 'He/She is drinking orange juice.',
        textoEsp: 'Él/Ella está tomando jugo de naranja.',
        audio: require('@/assets/curso/audios/3.2/3.mp3'),
      },
    ],

    dialogo19: [
      {
        textoIng: 'We are drinking orange juice.',
        textoEsp: 'Nosotros estamos tomando jugo de naranja.',
        audio: require('@/assets/curso/audios/3.2/4.mp3'),
      },
    ],

    dialogo20: [
      {
        textoIng: 'You are drinking orange juice',
        textoEsp: 'Ustedes están tomando jugo de naranja.',
        audio: require('@/assets/curso/audios/3.2/5.mp3'),
      },
    ],

    dialogo21: [
      {
        textoIng: 'They are drinking orange juice.',
        textoEsp: 'Ellos/Ellas están tomando jugo de naranja.',
        audio: require('@/assets/curso/audios/3.2/6.mp3'),
      },
    ],

    dialogo22: [
      {
        textoIng: 'The waiter is serving the dessert.',
        textoEsp: 'El mesero está sirviendo el postre.',
        audio: require('@/assets/curso/audios/3.2/7.mp3'),
      },
    ],

    dialogo23: [
      {
        textoIng: '(To come) - Jhon is coming to the party.',
        textoEsp: 'Jhon está viniendo a la fiesta.',
        audio: require('@/assets/curso/audios/3.2/8.mp3'),
      },
    ],

    dialogo24: [
      {
        textoIng: '(To dance) - She is dancing in the theater.',
        textoEsp: 'Ella está bailando en el teatro.',
        audio: require('@/assets/curso/audios/3.2/9.mp3'),
      },
    ],

    dialogo25: [
      {
        textoIng: '(To swim / nadar) - Carol is swimming very fast.',
        textoEsp: 'Carol está nadando muy rápido.',
        audio: require('@/assets/curso/audios/3.2/10.mp3'),
      },
    ],

    dialogo26: [
      {
        textoIng: '(To run / correr) - Leo is running in the park.',
        textoEsp: 'Leo está corriendo en el parque.',
        audio: require('@/assets/curso/audios/3.2/11.mp3'),
      },
    ],

    dialogo27: [
      {
        textoIng: '(To begin / empezar) - The baby is beginning to cry.',
        textoEsp: 'El bebé está empezando a llorar.',
        audio: require('@/assets/curso/audios/3.2/12.mp3'),
      },
    ],

    dialogo28: [
      {
        textoIng: '(To forget / olvidar) - She is forgetting the keys.',
        textoEsp: 'Ella está olvidando las llaves.',
        audio: require('@/assets/curso/audios/3.2/13.mp3'),
      },
    ],
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
