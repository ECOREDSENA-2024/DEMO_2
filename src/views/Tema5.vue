<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 5
      h1 <i>Wh questions</i> y verbos modales (<i>can/could). What’s that?</i>

    .tarjeta.position-relative.rounded-0.bg6.p-4.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-2.col-5.mb-lg-0.mb-3
          .imagen-absolute
            img(src='@/assets/curso/temas/img1.svg', alt='')
        .col-lg-10
          p(data-aos="fade-down").mb-0.p-3 Las denominadas <i>Wh questions</i> son preguntas que inician con un pronombre interrogativo (<i>what</i>  / qué, <i>how</i> / cómo, <i>when</i> / cuándo, <i>who</i> / quién, entre otros) y se utilizan para indicar el tipo de información que se requiere o necesita.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .row.justify-content-center.align-items-center(data-aos="fade-left")
          .col-sm-6.col-lg-4.mb-3
            .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
              .indicador--hover(v-if="indicadorTarjetaFlip")
              .tarjeta-flip__contenedor
                .tarjeta-flip__img.p-4
                  img.img-a.img-t(src='@/assets/curso/temas/25.png', alt='')       
                  .img-text
                    h5.text-blue.text-center.mt-3 When
                .tarjeta-flip__contenido.p-5.text-center
                  h5 When 
                  p.mb-4 Cuándo (para solicitar información sobre tiempo).

          .col-sm-6.col-lg-4.mb-3
            .tarjeta.tarjeta-flip.color-primario            
              .tarjeta-flip__contenedor
                .tarjeta-flip__img.p-4
                  img.img-a.img-t(src='@/assets/curso/temas/26.png', alt='')       
                  .img-text
                    h5.text-blue.text-center.mt-3 Where 
                .tarjeta-flip__contenido.p-5.text-center
                  h5 Where  
                  p.mb-4 Dónde (para solicitar información sobre lugar).

          .col-sm-6.col-lg-4.mb-3
            .tarjeta.tarjeta-flip.color-primario            
              .tarjeta-flip__contenedor
                .tarjeta-flip__img.p-4
                  img.img-a.img-t(src='@/assets/curso/temas/27.png', alt='')       
                  .img-text
                    h5.text-blue.text-center.mt-3 Why
                .tarjeta-flip__contenido.p-5.text-center
                  h5 Why  
                  p.mb-4 Por qué (para solicitar una razón).

        .row.justify-content-center.align-items-center(data-aos="fade-right")
          .col-sm-6.col-lg-4.mb-3
            .tarjeta.tarjeta-flip.color-primario            
              .tarjeta-flip__contenedor
                .tarjeta-flip__img.p-4
                  img.img-a.img-t(src='@/assets/curso/temas/28.png', alt='')       
                  .img-text
                    h5.text-blue.text-center.mt-3 Which
                .tarjeta-flip__contenido.p-5.text-center
                  h5 Which 
                  p Cuál (para solicitar información sobre una preferencia entre dos o más cosas).

          .col-sm-6.col-lg-4.mb-3
            .tarjeta.tarjeta-flip.color-primario             
              .tarjeta-flip__contenedor
                .tarjeta-flip__img.p-4
                  img.img-a.img-t(src='@/assets/curso/temas/29.png', alt='')       
                  .img-text
                    h5.text-blue.text-center.mt-3 What  
                .tarjeta-flip__contenido.p-5.text-center
                  h5 What   
                  p Qué (para solicitar información sobre algo).

          .col-sm-6.col-lg-4.mb-3
            .tarjeta.tarjeta-flip.color-primario            
              .tarjeta-flip__contenedor
                .tarjeta-flip__img.p-4
                  img.img-a.img-t(src='@/assets/curso/temas/30.png', alt='')       
                  .img-text
                    h5.text-blue.text-center.mt-3 Whose
                .tarjeta-flip__contenido.p-5.text-center
                  h5 Whose  
                  p De quién (para solicitar información sobre a quién pertenece algo).

        .row.justify-content-center.align-items-center(data-aos="fade-left")
          .col-sm-6.col-lg-4.mb-3
            .tarjeta.tarjeta-flip.color-primario            
              .tarjeta-flip__contenedor
                .tarjeta-flip__img.p-4
                  img.img-a.img-t(src='@/assets/curso/temas/31.png', alt='')       
                  .img-text
                    h5.text-blue.text-center.mt-3 Who 
                .tarjeta-flip__contenido.p-5.text-center
                  h5 Who  
                  p Quién (para solicitar información sobre gente, como un sujeto).

          .col-sm-6.col-lg-4.mb-3
            .tarjeta.tarjeta-flip.color-primario             
              .tarjeta-flip__contenedor
                .tarjeta-flip__img.p-4
                  img.img-a.img-t(src='@/assets/curso/temas/32.png', alt='')       
                  .img-text
                    h5.text-blue.text-center.mt-3 Whom  
                .tarjeta-flip__contenido.p-5.text-center
                  h5 Whom   
                  p A quién (para solicitar información sobre gente, como un objeto).

          .col-sm-6.col-lg-4.mb-3
            .tarjeta.tarjeta-flip.color-primario              
              .tarjeta-flip__contenedor
                .tarjeta-flip__img.p-4
                  img.img-a.img-t(src='@/assets/curso/temas/33.png', alt='')       
                  .img-text
                    h5.text-blue.text-center.mt-3 How 
                .tarjeta-flip__contenido.p-5.text-center
                  h5 How   
                  p Cómo (para solicitar información sobre la manera en que se hace).

    p(data-aos="fade-down").mb-5 Finalmente, es importante recalcar que, en el presente (simple y continuo), se usan formas del presente de los verbos auxiliares y modales: be, do, can, could, entre otros. 

    Separador 
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 5.1  Estructura gramatical de la <i>wh question</i>

    p(data-aos="fade-down").mb-4 La estructura de este tipo de pregunta wh se determina con un verbo auxiliar o modal, que puede ubicarse después de una pregunta wh y antes de un sujeto. 
    h5(data-aos="fade-down") <i>For example:</i> 

    .img20
      .row.justify-content-center.align-items-center
        .col-lg-4 
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/34.svg', alt='')       

        .col-lg-8.bg21.p-5.bradius(data-aos="fade-left")    
          SlyderA(tipo="b").pt-5.px-3.bg-white.bradius.pb-2
            .row.justify-content-center.align-items-center
              .col-11
                .row.justify-content-center.align-items-center
                  .col-lg-8            
                    TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                      texto="Who can do the exercise?"
                      :audio="require('@/assets/curso/audios/5.1/1.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )            
                    p.mb-0  ¿Quién puede hacer el ejercicio?
                  .col-lg-4 
                    img.img-a.img-t(src='@/assets/curso/temas/36.svg', alt='') 
            .row.justify-content-center.align-items-center
              .col-11
                .row.justify-content-center.align-items-center
                  .col-lg-8            
                    TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                      texto="How could you go there?"
                      :audio="require('@/assets/curso/audios/5.1/2.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )            
                    p.mb-0 ¿Cómo podrías tú ir allí?
                  .col-lg-4 
                    img.img-a.img-t(src='@/assets/curso/temas/37.svg', alt='') 
            .row.justify-content-center.align-items-center
              .col-11
                .row.justify-content-center.align-items-center
                  .col-lg-8            
                    TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                      texto="When do you leave the city?"
                      :audio="require('@/assets/curso/audios/5.1/3.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )            
                    p.mb-0  ¿Cuándo sales de la ciudad?
                  .col-lg-4 
                    img.img-a.img-t(src='@/assets/curso/temas/38.svg', alt='') 
            .row.justify-content-center.align-items-center
              .col-11
                .row.justify-content-center.align-items-center
                  .col-lg-8            
                    TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                      texto="Whose bag is that?"
                      :audio="require('@/assets/curso/audios/5.1/4.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )            
                    p.mb-0  ¿De quién es esa cartera?
                  .col-lg-4 
                    img.img-a.img-t(src='@/assets/curso/temas/39.svg', alt='') 
            .row.justify-content-center.align-items-center
              .col-11
                .row.justify-content-center.align-items-center
                  .col-lg-8            
                    TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                      texto="Where is the car?"
                      :audio="require('@/assets/curso/audios/5.1/5.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )            
                    p.mb-0  ¿Dónde está el carro?
                  .col-lg-4 
                    img.img-a.img-t(src='@/assets/curso/temas/40.svg', alt='')

      p(data-aos="fade-down").my-5 La estructura de las preguntas wh con el auxiliar “#[b #[i to do]]”, en tiempo presente, se observa a continuación:

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8.up    
        .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade-left")
          h5 Tabla 4
          span Estructura de las preguntas wh con auxiliar     
        .tabla1.color-acento-botones.pb-5.mb-lg-0(data-aos="fade-right")
          table.text-center.w-100
            tbody
              tr.bgt1header
                td.fst-italic.t1br.px-1 Wh-question word
                td.fst-italic.t1br.px-1 Auxiliary verb (present form)
                td.fst-italic.t1br Subject
                td.fst-italic.t1br Verb
                td.fst-italic.t1br …?
                td.fst-italic Traducción
              tr
                td.tb1bg1(rowspan='2') #[i What] (Qué)
                td.fst-italic do
                td.fst-italic they
                td.fst-italic eat
                td.fst-italic for lunch?
                td(rowspan='2') ¿Qué comen ellos en el almuerzo?
              tr
                td(colspan='4').px-5
                  TarjetaAudio.color-acento-contenido.bg-white(
                    texto="What do they eat for lunch?"
                    :audio="require('@/assets/curso/audios/5.1/6.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )                
              tr
                td.tb1bg1(rowspan='2') #[i How] (Cómo)
                td.fst-italic do
                td.fst-italic you
                td.fst-italic open
                td.fst-italic the window?
                td(rowspan='2') ¿Cómo tú abres la ventana?
              tr
                td(colspan='4').px-5
                  TarjetaAudio.color-acento-contenido.bg-white(
                    texto="How do you open the window?"
                    :audio="require('@/assets/curso/audios/5.1/7.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )                
              tr
                td.tb1bg1(rowspan='2') #[i Where] (Dónde)
                td.fst-italic do
                td.fst-italic you
                td.fst-italic park
                td.fst-italic the car?
                td(rowspan='2') ¿Dónde estacionas el carro?
              tr
                td(colspan='4').px-5
                  TarjetaAudio.color-acento-contenido.bg-white(
                    texto="Where do you park the car?"
                    :audio="require('@/assets/curso/audios/5.1/8.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )                
              tr
                td.tb1bg1(rowspan='2') #[i Who] (Quién)
                td.fst-italic do
                td.fst-italic you
                td.fst-italic live
                td.fst-italic with?
                td(rowspan='2') ¿Con quién vives?
              tr
                td(colspan='4').px-5
                  TarjetaAudio.color-acento-contenido.bg-white(
                    texto="Who do you live with?"
                    :audio="require('@/assets/curso/audios/5.1/9.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )                
              tr
                td.tb1bg1(rowspan='2') #[i Whom] (A quién, con quién)
                td.fst-italic do
                td.fst-italic we
                td.fst-italic select
                td.fst-italic as guide?
                td.fst-italic(rowspan='2') ¿A quién seleccionamos como guía?
              tr
                td(colspan='4').px-5
                  TarjetaAudio.color-acento-contenido.bg-white(
                    texto="Whom do we select as guide? "
                    :audio="require('@/assets/curso/audios/5.1/10.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )                
              tr
                td.tb1bg1(rowspan='2') #[i When] (Cuándo)
                td.fst-italic does
                td.fst-italic she
                td.fst-italic arrive
                td.fst-italic from Perú?
                td(rowspan='2') ¿Cuándo llega ella de Perú?
              tr
                td(colspan='4').px-5
                  TarjetaAudio.color-acento-contenido.bg-white(
                    texto="When does she arrive from Perú? "
                    :audio="require('@/assets/curso/audios/5.1/11.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )                
              tr
                td.tb1bg1(rowspan='2') #[i Why] (Por qué)
                td.fst-italic do
                td.fst-italic they
                td.fst-italic play
                td.fst-italic together?
                td(rowspan='2') ¿Por qué ellos juegan juntos?
              tr
                td(colspan='4').px-5
                  TarjetaAudio.color-acento-contenido.bg-white(
                    texto="Why do they play together?"
                    :audio="require('@/assets/curso/audios/5.1/12.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )                
              tr
                td.tb1bg1(rowspan='2') #[i Which] (Cuál)
                td.fst-italic do
                td.fst-italic you
                td.fst-italic want
                td.fst-italic for you?
                td(rowspan='2') ¿Cuál quieres para ti?
              tr
                td(colspan='4').px-5
                  TarjetaAudio.color-acento-contenido.bg-white(
                    texto="Which do you want for you? "
                    :audio="require('@/assets/curso/audios/5.1/13.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )                
              tr
                td.tb1bg1(rowspan='2') #[i Whose shirt] (De quién)
                td.fst-italic do
                td.fst-italic you
                td.fst-italic prefer
                td.fst-italic ?
                td(rowspan='2') ¿La camisa de quién prefieres?
              tr
                td(colspan='4').px-5
                  TarjetaAudio.color-acento-contenido.bg-white(
                    texto="Whose shirt do you prefer? "
                    :audio="require('@/assets/curso/audios/5.1/14.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"  
                  )
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12.up                  
        p(data-aos="fade-down") Ahora, revise las #[i wh questions] cuando el verbo principal de la oración es el verbo “#[i to be]”, dado que no se necesita otro verbo auxiliar:
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-6.up
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/41.png', alt='')
      .col-lg-6.up
        p(data-aos="fade-down").my-4 For example:
        .bg22.p-5.pe-5.position-relative
          .bg-white.bradius.py-5.px-3
            .row.justify-content-start.align-items-center
              .col-lg-9
                SlyderE(indicadores="derecha").p-3
                  .row.justify-content-start.align-items-center
                    .col-lg-10
                        TarjetaAudio.color-acento-contenido.bg-white.my-3(
                          texto="<i><span1>Who is the teacher? </span1></i>"
                          :audio="require('@/assets/curso/audios/5.1/15.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )                    
                        p ¿Quién es el profesor?
                  .row.justify-content-start.align-items-center
                    .col-lg-10
                        TarjetaAudio.color-acento-contenido.bg-white.my-3(
                          texto="<i><span1>How are you? </span1></i>"
                          :audio="require('@/assets/curso/audios/5.1/16.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )                    
                        p ¿Cómo estás?
                  .row.justify-content-start.align-items-center
                    .col-lg-10
                        TarjetaAudio.color-acento-contenido.bg-white.my-3(
                          texto="<i><span1>Where is the car? </span1></i>"
                          :audio="require('@/assets/curso/audios/5.1/17.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )                    
                        p ¿Dónde está el carro?
                  .row.justify-content-start.align-items-center
                    .col-lg-10
                        TarjetaAudio.color-acento-contenido.bg-white.my-3(
                          texto="<i><span1>When is your birthday? </span1></i>"
                          :audio="require('@/assets/curso/audios/5.1/18.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )                    
                        p ¿Cuándo es tu cumpleaños?
                  .row.justify-content-start.align-items-center
                    .col-lg-10
                        TarjetaAudio.color-acento-contenido.bg-white.my-3(
                          texto="<i><span1>Why is the store closed?</span1></i>"
                          :audio="require('@/assets/curso/audios/5.1/19_1.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )                    
                        p ¿Por qué está cerrada la tienda?
                  .row.justify-content-start.align-items-center
                    .col-lg-10
                        TarjetaAudio.color-acento-contenido.bg-white.my-3(
                          texto="<i><span1>Whose book is this? </span1></i>"
                          :audio="require('@/assets/curso/audios/5.1/19.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )                    
                        p  ¿De quién es este libro?
                  .row.justify-content-start.align-items-center
                    .col-lg-10
                        TarjetaAudio.color-acento-contenido.bg-white.my-3(
                          texto="<i><span1>What is this?</span1></i>"
                          :audio="require('@/assets/curso/audios/5.1/20.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )                    
                        p ¿Qué es ésto?
                  .row.justify-content-start.align-items-center
                    .col-lg-10
                        TarjetaAudio.color-acento-contenido.bg-white.my-3(
                          texto="<i><span1>Whose crayons are those? </span1></i>"
                          :audio="require('@/assets/curso/audios/5.1/21.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )                    
                        p  ¿De quién son esos crayones?
              .col-lg-2.col-5.mb-lg-0.mb-3.d-none.d-lg-block
                .imagen-absolute5
                  img.img-t(src='@/assets/curso/temas/42.svg', alt='')                      

    p(data-aos="fade-down").mb-5 Entonces, se tiene la estructura de la #[i wh question] sin verbo auxiliar: 
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8.up    
        .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade-left")
          h5 Tabla 5
          span  Estructura #[i wh question] sin verbo auxiliar
        .tabla1.color-acento-botones.pb-5.mb-lg-0(data-aos="fade-right")
          table.text-center.w-100
            tbody
              tr.bgt1header
                td.fst-italic.t1br.px-1 Wh-question word
                td.fst-italic.t1br.px-1 Auxiliary verb “to be” (present form)
                td.fst-italic.t1br Subject
                td.fst-italic.t1br Verb
                td.fst-italic.t1br …?
                td.fst-italic Traducción
              tr
                td.tb1bg1(rowspan='2') #[i What] (Qué)
                td.fst-italic is
                td.fst-italic a cell phone
                td.fst-italic -
                td.fst-italic for you?
                td(rowspan='2') ¿Qué es un celular para ti?
              tr
                td(colspan='4').px-5
                  TarjetaAudio.color-acento-contenido.bg-white(
                    texto="What is a cell phone for you?"
                    :audio="require('@/assets/curso/audios/5.1/22.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )                
              tr
                td.tb1bg1(rowspan='2') #[i How] (Cómo)
                td.fst-italic are
                td.fst-italic the things
                td.fst-italic -
                td.fst-italic here?
                td(rowspan='2') ¿Cómo son las cosas aquí?
              tr
                td(colspan='4').px-5
                  TarjetaAudio.color-acento-contenido.bg-white(
                    texto="How are the things here? "
                    :audio="require('@/assets/curso/audios/5.1/23.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )                
              tr
                td.tb1bg1(rowspan='2') #[i Where] (Dónde)
                td.fst-italic are
                td.fst-italic the flowers
                td.fst-italic painted
                td.fst-italic pink?
                td(rowspan='2') ¿Dónde están las flores pintadas de rosado?
              tr
                td(colspan='4').px-5
                  TarjetaAudio.color-acento-contenido.bg-white(
                    texto="Where are the flowers painted pink? "
                    :audio="require('@/assets/curso/audios/5.1/24.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )                
              tr
                td.tb1bg1(rowspan='2') #[i Who] (Quién)
                td.fst-italic is
                td.fst-italic the boss
                td.fst-italic -
                td.fst-italic in this office?
                td(rowspan='2') ¿Quién es el jefe en esta oficina?
              tr
                td(colspan='4').px-5
                  TarjetaAudio.color-acento-contenido.bg-white(
                    texto="Who is the boss in this office?"
                    :audio="require('@/assets/curso/audios/5.1/25.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )                
              tr
                td.tb1bg1(rowspan='2') #[i Whom] (A quién, con quién)
                td.fst-italic are
                td.fst-italic we
                td.fst-italic looking for
                td.fst-italic in the hospital?
                td.fst-italic(rowspan='2') ¿A quién buscamos en el hospital?
              tr
                td(colspan='4').px-5
                  TarjetaAudio.color-acento-contenido.bg-white(
                    texto="Whom are we looking for in the hospital? "
                    :audio="require('@/assets/curso/audios/5.1/26.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )                
              tr
                td.tb1bg1(rowspan='2') #[i When] (Cuándo)
                td.fst-italic is
                td.fst-italic the policeman
                td.fst-italic arriving at
                td.fst-italic the bridge?
                td(rowspan='2') ¿Cuándo está llegando el policía al puente?
              tr
                td(colspan='4').px-5
                  TarjetaAudio.color-acento-contenido.bg-white(
                    texto="When is the policeman arriving at the bridge? "
                    :audio="require('@/assets/curso/audios/5.1/27.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )                
              tr
                td.tb1bg1(rowspan='2') #[i Why] (Por qué)
                td.fst-italic is
                td.fst-italic the girl
                td.fst-italic -
                td.fst-italic alone in the garden?
                td(rowspan='2') ¿Por qué está la niña sola en el jardín?
              tr
                td(colspan='4').px-5
                  TarjetaAudio.color-acento-contenido.bg-white(
                    texto="Why is the girl alone in the garden?"
                    :audio="require('@/assets/curso/audios/5.1/28.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )                
              tr
                td.tb1bg1(rowspan='2') #[i Which] (Cuál)
                td.fst-italic is
                td.fst-italic the biggest cat
                td.fst-italic -
                td.fst-italic in the group?
                td(rowspan='2') ¿Cuál es el gato más grande del grupo?
              tr
                td(colspan='4').px-5
                  TarjetaAudio.color-acento-contenido.bg-white(
                    texto="Which is the biggest cat in the group? "
                    :audio="require('@/assets/curso/audios/5.1/29.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )                
              tr
                td.tb1bg1(rowspan='2') #[i Whose black shirt] (De quién)
                td.fst-italic is
                td.fst-italic this
                td.fst-italic -
                td.fst-italic ?
                td(rowspan='2') ¿De quién es esta camisa negra?
              tr
                td(colspan='4').px-5
                  TarjetaAudio.color-acento-contenido.bg-white(
                    texto="Whose black shirt is this? "
                    :audio="require('@/assets/curso/audios/5.1/30.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )

    Separador 
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 5.2   Uso de los verbos modales #[i can y could]

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/43.png', alt='')
      .col-lg-8.my-3
        p(data-aos="fade-down") Cuando se habla de verbos modales, se hace referencia a unos verbos auxiliares que expresan necesidad o posibilidad en una oración: #[i CAN] y #[i COULD], en inglés. Es trascendental aprender a usarlos para expresar posibilidades, aunque también a distinguir sus significados según el tipo de frase que se emplee.
        .bg3.p-4(data-aos="flip-down") 
          p(data-aos="fade-down").mb-0 #[i CAN] y #[i COULD] permiten mejorar la forma de hablar en inglés y, a diferencia del resto de auxiliares, su forma es única. Es decir, no sufren cambios con la tercera persona del singular.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-6
        p(data-aos="fade-down") Por otro lado, el verbo principal va siempre en INFINITIVO sin to, por lo cual NUNCA se debe utilizar can to ni could to, porque se trata de un error muy grave. De hecho, ninguno de los dos utiliza esa preposición. Observe la estructura básica:
        .row.justify-content-center.align-items-center.mx-0.mb-4(data-aos="flip-down") 
          .col-lg-9.bgcol1.py-3
            p(data-aos="fade-down").mb-0 Sujeto + #[i #[b can/could]] + Infinitivo + Objeto                
          .col-lg-3.bgcol2.py-3.col-6.text-center
            p(data-aos="fade-down").mb-0 #[b Afirmativas] 
        .row.justify-content-center.align-items-center.mx-0.mb-4(data-aos="flip-down") 
          .col-lg-9.bgcol1.py-3
            p(data-aos="fade-down").mb-0 Sujeto + #[i #[b can’t / couldn’t]] + Infinitivo + Objeto      
          .col-lg-3.bgcol2.py-3.col-6.text-center
            p(data-aos="fade-down").mb-0 #[b Negativa] 
        .row.justify-content-center.align-items-center.mx-0.mb-4(data-aos="flip-down") 
          .col-lg-9.bgcol1.py-3
            p(data-aos="fade-down").mb-0 #[i #[b Can/Could]] + Sujeto + Infinitivo + Objeto?     
          .col-lg-3.bgcol2.py-3.col-6.text-center
            p(data-aos="fade-down").mb-0 #[b Interrogativa] 
        .row.justify-content-center.align-items-center.mx-0.mb-4(data-aos="flip-down") 
          .col-lg-9.bgcol1.py-3
            p(data-aos="fade-down").mb-0 Wh Question + #[i #[b can/could]] + Sujeto + Infinitivo + Objeto?     
          .col-lg-3.bgcol2.py-3.col-6.text-center
            p(data-aos="fade-down").mb-0 #[b Interrogativa]
      .col-lg-6.bg23.bradius.p-4
          SlyderA.px-5(data-aos="flip-down")
            .crd.crd--100.tarjeta.bg-white.pb-0
              .row.justify-content-center.align-items-center 
                .col-11
                  .text-center
                    h5 For example:
                    img.img-a.img-t.my-4(src='@/assets/curso/temas/45.png', alt='')

                    TarjetaAudio.color-acento-contenido.bg-white.mb-4(
                      texto="He can speak English very well."
                      :audio="require('@/assets/curso/audios/5.2/1.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )     
                    p Él puede hablar inglés muy bien.
            .crd.crd--100.tarjeta.bg-white.pb-0
              .row.justify-content-center.align-items-center 
                .col-11
                  .text-center
                    h5 For example:
                    img.img-a.img-t.my-4(src='@/assets/curso/temas/46.png', alt='')

                    TarjetaAudio.color-acento-contenido.bg-white.mb-4(
                      texto="I could swim, but I couldn’t ride a bike when I was nine years old."
                      :audio="require('@/assets/curso/audios/5.2/2.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )     
                    p Cuando tenía nueve años, podía nadar, pero no podía montar en bici.
            .crd.crd--100.tarjeta.bg-white.pb-0
              .row.justify-content-center.align-items-center 
                .col-11
                  .text-center
                    h5 For example:
                    img.img-a.img-t.my-4(src='@/assets/curso/temas/47.png', alt='')

                    TarjetaAudio.color-acento-contenido.bg-white.mb-4(
                      texto="You can play with Michelle after you do your homework. "
                      :audio="require('@/assets/curso/audios/5.2/3.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )     
                    p Tu puedes jugar con Michelle cuando hagas tu tarea.
            .crd.crd--100.tarjeta.bg-white.pb-0
              .row.justify-content-center.align-items-center 
                .col-11
                  .text-center
                    h5 For example:
                    img.img-a.img-t.my-4(src='@/assets/curso/temas/48.png', alt='')

                    TarjetaAudio.color-acento-contenido.bg-white.mb-4(
                      texto="We could go somewhere tonight."
                      :audio="require('@/assets/curso/audios/5.2/4.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )     
                    p Podríamos ir a algún lado esta noche.

    p(data-aos="fade-down").mb-5 Cabe destacar que en las wh questions también se utilizan verbos modales, como se puede observar a continuación:

    .row.justify-content-center.align-items-start
      .col-lg-3.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/50.png', alt='')
      .col-lg-9
        TabsA.color-acento-botones.mb-5
          .tarjeta.color-acento-botones--borde.p-4(titulo="Can")
            .row.justify-content-center.align-items-center
              .col-11 
                h5 Can
                p Con el verbo modal can (expresar habilidad o posibilidad):
                .row.justify-content-center.align-items-center
                  .col-lg-7 
                    TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                      texto="What can you do for her?"
                      :audio="require('@/assets/curso/audios/5.2/5.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )     
                    p ¿Qué puedes hacer por ella? 
                    TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                      texto="How can I get the money?"
                      :audio="require('@/assets/curso/audios/5.2/6.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )     
                    p ¿Cómo puedo conseguir el dinero?
                    TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                      texto="Where can we go this weekend?"
                      :audio="require('@/assets/curso/audios/5.2/7.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )     
                    p ¿Adónde podemos ir este fin de semana?
                  .col-lg-5
                    img.img-a.img-t(src='@/assets/curso/temas/49.png', alt='')

          .tarjeta.color-acento-botones--borde.p-4(titulo="May")
            .row.justify-content-center.align-items-center
              .col-11 
                h5 May
                p Con el verbo modal may (expresar probabilidad o posibilidad):
                .row.justify-content-center.align-items-center
                  .col-lg-5
                    img.img-a.img-t(src='@/assets/curso/temas/51.png', alt='')                  
                  .col-lg-7 
                    TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                      texto="What may I expect from you? "
                      :audio="require('@/assets/curso/audios/5.2/8.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )     
                    p ¿Qué puedo esperar de ti?
                    TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                      texto="When may Jimmy go to swim there?"
                      :audio="require('@/assets/curso/audios/5.2/9.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                    p ¿Cuándo puede Jimmy ir a nadar allí?
          .tarjeta.color-acento-botones--borde.p-4(titulo="Could")
            .row.justify-content-center.align-items-center
              .col-11 
                h5 Could
                p Con el verbo modal could (expresar posibilidades y preguntar):
                .row.justify-content-center.align-items-center
                  .col-lg-6
                    TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                      texto="How could you be there?"
                      :audio="require('@/assets/curso/audios/5.2/10.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )     
                    p ¿Cómo podrías estar allí?             
                  .col-lg-6 
                    TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                      texto=" Where could I park my car?"
                      :audio="require('@/assets/curso/audios/5.2/11.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )     
                    p ¿Dónde podría estacionar mi carro?
          .tarjeta.color-acento-botones--borde.p-4(titulo="Should")
            .row.justify-content-center.align-items-center
              .col-11 
                h5 Should
                p Con el verbo modal should (expresar recomendación u obligación):
                .row.justify-content-center.align-items-center
                  .col-lg-5
                    img.img-a.img-t(src='@/assets/curso/temas/52.png', alt='')                  
                  .col-lg-7 
                    TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                      texto="What should I do?"
                      :audio="require('@/assets/curso/audios/5.2/12.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )     
                    p ¿Qué debería hacer?
                    TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                      texto="Why should Mary invite her friends to the party?"
                      :audio="require('@/assets/curso/audios/5.2/13.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                    p ¿Por qué debería Mary invitar a sus amigos a la fiesta?
                    TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                      texto="Whom should Betty give the present?"
                      :audio="require('@/assets/curso/audios/5.2/14.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                    p ¿A quién debería Betty darle el regalo?

    titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2.mt-5 Actividad didáctica                     
    .row.mt-5.justify-content-center.align-items-center.align-items-lg-stretch
      .col-6.col-md-4.col-lg-3.mb-4.mb-md-0
        .tarjeta.h-100.d-flex.align-items-center.p-4
          figure
            img(src="@/assets/template/seleccion-multiple.svg", alt="")
      .col-12.col-md-8.col-lg-9
        .titulo-segundo
          h2 #[i Wh questions] y verbos modales
        p.mb-4 #[i What's that?] / ¿Qué es eso?
        .tarjeta.actividad.p-3
          .row.justify-content-around.align-items-center            
            .col-sm.mb-3.mb-sm-0
              p.fw-bold.mb-0 Opción múltiple
            .col-auto
              a.boton.boton--b(:href="obtenerLink('/actividades/05/index.html')" target="_blank")
                span Realizar
                i.fas.fa-puzzle-piece                    
</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    indicadorTarjetaFlip: true,
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
