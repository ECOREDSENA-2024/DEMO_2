<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 1
      h1 Indicando direcciones. <i>Please, where is the bank?</i>
      
    .tarjeta.position-relative.rounded-0.bg6.p-4.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-2.col-5.mb-lg-0.mb-3
          .imagen-absolute
            img(src='@/assets/curso/temas/img1.svg', alt='')
        .col-lg-10
          p(data-aos="fade-down").mb-0.p-3 Es muy común que alguna vez se haya solicitado una indicación para llegar a algún lugar, por lo que en este caso, en inglés, resulta muy fácil la forma de pedir y dar direcciones; para ello, generalmente, se hace uso del verbo ser o estar, por ejemplo:  

    .row.justify-content-center.align-items-stretch.mb-5      
      .col-lg-6.bg2.p-5(data-aos="fade-left")
        img.img-a.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/img2.png', alt='')
        p(data-aos="fade-down").text-center ¿Dónde está la escuela? / 
          span.r Where is the school?
        p(data-aos="fade-down") #[b Se responde:] la escuela está al lado de la iglesia / The school is next to the church.
               

      .col-lg-6.bg2.p-5(data-aos="fade-right")
        img.img-a.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/img3.png', alt='')
        p(data-aos="fade-down").text-center ¿Dónde está el cine? /  
          span.r Where is the cinema?
        p(data-aos="fade-down") #[b Se responde:] está frente al restaurante Milan / It’s in front of Milan restaurant.
               
    Separador 
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.1  Lugares de la ciudad
    p(data-aos="fade-down").mb-5 En toda ciudad existen diversos lugares, como museos, teatros, cines, restaurantes, hospitales, bancos, parques, centros comerciales, tiendas, entre otros. A continuación, se presenta una lista con algunos de estos lugares. Escuche y repita: 

    SlyderF.slyder-arrows.mb-5(columnas="col-lg-6 col-xl-3")(data-aos="fade-left")
      .tarjeta.p-4.d-flex.align-items-end.tarjeta-bg.bg-card(:style="{'background-image': `url(${require('@/assets/curso/temas/img4.png')})`}" style='height: 394px')
        .tarjeta.bg-white.p-3.w-100.text-small
          Audio.color-acento-contenido.mb-2.m-auto(:audio="require('@/assets/curso/audios/1.1/Avenue.mp3')")
          p.text-center
            span.r-3.fst-italic.fw-bold Avenue
            br
            | (Avenida) 
      .tarjeta.p-4.d-flex.align-items-end.tarjeta-bg.bg-card(:style="{'background-image': `url(${require('@/assets/curso/temas/img5.png')})`}" style='height: 394px')
        .tarjeta.bg-white.p-3.w-100.text-small
          Audio.color-acento-contenido.mb-2.m-auto(:audio="require('@/assets/curso/audios/1.1/Bakery.mp3')")
          p.text-center
            span.r-3.fst-italic.fw-bold Bakery
            br
            | (Panadería)
      .tarjeta.p-4.d-flex.align-items-end.tarjeta-bg.bg-card(:style="{'background-image': `url(${require('@/assets/curso/temas/img6.png')})`}" style='height: 394px')
        .tarjeta.bg-white.p-3.w-100.text-small
          Audio.color-acento-contenido.mb-2.m-auto(:audio="require('@/assets/curso/audios/1.1/Bank.mp3')")
          p.text-center
            span.r-3.fst-italic.fw-bold Bank
            br
            | (Banco)
      .tarjeta.p-4.d-flex.align-items-end.tarjeta-bg.bg-card(:style="{'background-image': `url(${require('@/assets/curso/temas/img7.png')})`}" style='height: 394px')
        .tarjeta.bg-white.p-3.w-100.text-small
          Audio.color-acento-contenido.mb-2.m-auto(:audio="require('@/assets/curso/audios/1.1/Barber_shop.mp3')")
          p.text-center
            span.r-3.fst-italic.fw-bold Barber shop
            br
            | (Barbería)
      .tarjeta.p-4.d-flex.align-items-end.tarjeta-bg.bg-card(:style="{'background-image': `url(${require('@/assets/curso/temas/img8.png')})`}" style='height: 394px')
        .tarjeta.bg-white.p-3.w-100.text-small
          Audio.color-acento-contenido.mb-2.m-auto(:audio="require('@/assets/curso/audios/1.1/Bookstore.mp3')")
          p.text-center
            span.r-3.fst-italic.fw-bold Bookstore
            br
            | (Librería)
      .tarjeta.p-4.d-flex.align-items-end.tarjeta-bg.bg-card(:style="{'background-image': `url(${require('@/assets/curso/temas/img9.png')})`}" style='height: 394px')
        .tarjeta.bg-white.p-3.w-100.text-small
          Audio.color-acento-contenido.mb-2.m-auto(:audio="require('@/assets/curso/audios/1.1/Cake_shop.mp3')")
          p.text-center
            span.r-3.fst-italic.fw-bold Cake shop
            br
            | (Pastelería)
      .tarjeta.p-4.d-flex.align-items-end.tarjeta-bg.bg-card(:style="{'background-image': `url(${require('@/assets/curso/temas/img10.png')})`}" style='height: 394px')
        .tarjeta.bg-white.p-3.w-100.text-small
          Audio.color-acento-contenido.mb-2.m-auto(:audio="require('@/assets/curso/audios/1.1/Cinema_movies.mp3')")
          p.text-center
            span.r-3.fst-italic.fw-bold Cinema, movies
            br
            | (Cine)
      .tarjeta.p-4.d-flex.align-items-end.tarjeta-bg.bg-card(:style="{'background-image': `url(${require('@/assets/curso/temas/img11.png')})`}" style='height: 394px')
        .tarjeta.bg-white.p-3.w-100.text-small
          Audio.color-acento-contenido.mb-2.m-auto(:audio="require('@/assets/curso/audios/1.1/Fire_station.mp3')")
          p.text-center
            span.r-3.fst-italic.fw-bold Fire station
            br
            | (Estación de bomberos)
      .tarjeta.p-4.d-flex.align-items-end.tarjeta-bg.bg-card(:style="{'background-image': `url(${require('@/assets/curso/temas/img12.png')})`}" style='height: 394px')
        .tarjeta.bg-white.p-3.w-100.text-small
          Audio.color-acento-contenido.mb-2.m-auto(:audio="require('@/assets/curso/audios/1.1/Gym.mp3')")
          p.text-center
            span.r-3.fst-italic.fw-bold Gym
            br
            | (Gimnasio)
      .tarjeta.p-4.d-flex.align-items-end.tarjeta-bg.bg-card(:style="{'background-image': `url(${require('@/assets/curso/temas/img13.png')})`}" style='height: 394px')
        .tarjeta.bg-white.p-3.w-100.text-small
          Audio.color-acento-contenido.mb-2.m-auto(:audio="require('@/assets/curso/audios/1.1/Hospital.mp3')")
          p.text-center
            span.r-3.fst-italic.fw-bold Hospital
            br
            | (Hospital)
      .tarjeta.p-4.d-flex.align-items-end.tarjeta-bg.bg-card(:style="{'background-image': `url(${require('@/assets/curso/temas/img14.png')})`}" style='height: 394px')
        .tarjeta.bg-white.p-3.w-100.text-small
          Audio.color-acento-contenido.mb-2.m-auto(:audio="require('@/assets/curso/audios/1.1/Library.mp3')")
          p.text-center
            span.r-3.fst-italic.fw-bold Library
            br
            | (Biblioteca) 
      .tarjeta.p-4.d-flex.align-items-end.tarjeta-bg.bg-card(:style="{'background-image': `url(${require('@/assets/curso/temas/img15.png')})`}" style='height: 394px')
        .tarjeta.bg-white.p-3.w-100.text-small
          Audio.color-acento-contenido.mb-2.m-auto(:audio="require('@/assets/curso/audios/1.1/Mall.mp3')")
          p.text-center
            span.r-3.fst-italic.fw-bold Mall
            br
            | (Centro comercial)
      .tarjeta.p-4.d-flex.align-items-end.tarjeta-bg.bg-card(:style="{'background-image': `url(${require('@/assets/curso/temas/img16.png')})`}" style='height: 394px')
        .tarjeta.bg-white.p-3.w-100.text-small
          Audio.color-acento-contenido.mb-2.m-auto(:audio="require('@/assets/curso/audios/1.1/Police_station.mp3')")
          p.text-center
            span.r-3.fst-italic.fw-bold Police station
            br
            | (Estación de policía)
      .tarjeta.p-4.d-flex.align-items-end.tarjeta-bg.bg-card(:style="{'background-image': `url(${require('@/assets/curso/temas/img17.png')})`}" style='height: 394px')
        .tarjeta.bg-white.p-3.w-100.text-small
          Audio.color-acento-contenido.mb-2.m-auto(:audio="require('@/assets/curso/audios/1.1/Post_office.mp3')")
          p.text-center
            span.r-3.fst-italic.fw-bold Post office
            br
            | (Oficina de correos)
      .tarjeta.p-4.d-flex.align-items-end.tarjeta-bg.bg-card(:style="{'background-image': `url(${require('@/assets/curso/temas/img18.png')})`}" style='height: 394px')
        .tarjeta.bg-white.p-3.w-100.text-small
          Audio.color-acento-contenido.mb-2.m-auto(:audio="require('@/assets/curso/audios/1.1/Restaurant.mp3')")
          p.text-center
            span.r-3.fst-italic.fw-bold Restaurant
            br
            | (Restaurante)
      .tarjeta.p-4.d-flex.align-items-end.tarjeta-bg.bg-card(:style="{'background-image': `url(${require('@/assets/curso/temas/img19.png')})`}" style='height: 394px')
        .tarjeta.bg-white.p-3.w-100.text-small
          Audio.color-acento-contenido.mb-2.m-auto(:audio="require('@/assets/curso/audios/1.1/School.mp3')")
          p.text-center
            span.r-3.fst-italic.fw-bold School
            br
            | (Escuela)
      .tarjeta.p-4.d-flex.align-items-end.tarjeta-bg.bg-card(:style="{'background-image': `url(${require('@/assets/curso/temas/img20.png')})`}" style='height: 394px')
        .tarjeta.bg-white.p-3.w-100.text-small
          Audio.color-acento-contenido.mb-2.m-auto(:audio="require('@/assets/curso/audios/1.1/Shoe_shop.mp3')")
          p.text-center
            span.r-3.fst-italic.fw-bold Shoe shop
            br
            | (Zapatería)
      .tarjeta.p-4.d-flex.align-items-end.tarjeta-bg.bg-card(:style="{'background-image': `url(${require('@/assets/curso/temas/img21.png')})`}" style='height: 394px')
        .tarjeta.bg-white.p-3.w-100.text-small
          Audio.color-acento-contenido.mb-2.m-auto(:audio="require('@/assets/curso/audios/1.1/Shop.mp3')")
          p.text-center
            span.r-3.fst-italic.fw-bold Shop
            br
            | (Tienda)
      .tarjeta.p-4.d-flex.align-items-end.tarjeta-bg.bg-card(:style="{'background-image': `url(${require('@/assets/curso/temas/img22.png')})`}" style='height: 394px')
        .tarjeta.bg-white.p-3.w-100.text-small
          Audio.color-acento-contenido.mb-2.m-auto(:audio="require('@/assets/curso/audios/1.1/Street.mp3')")
          p.text-center
            span.r-3.fst-italic.fw-bold Street
            br
            | (Calle)
      .tarjeta.p-4.d-flex.align-items-end.tarjeta-bg.bg-card(:style="{'background-image': `url(${require('@/assets/curso/temas/img23.png')})`}" style='height: 394px')
        .tarjeta.bg-white.p-2.w-100.text-small
          Audio.color-acento-contenido.mb-2.m-auto(:audio="require('@/assets/curso/audios/1.1/Supermarket.mp3')")
          p.text-center
            span.r-3.fst-italic.fw-bold Supermarket
            br
            | (Supermercado) 
      .tarjeta.p-4.d-flex.align-items-end.tarjeta-bg.bg-card(:style="{'background-image': `url(${require('@/assets/curso/temas/img24.png')})`}" style='height: 394px')
        .tarjeta.bg-white.p-3.w-100.text-small
          Audio.color-acento-contenido.mb-2.m-auto(:audio="require('@/assets/curso/audios/1.1/Theater.mp3')")
          p.text-center
            span.r-3.fst-italic.fw-bold Theater
            br
            | (Teatro)
      .tarjeta.p-4.d-flex.align-items-end.tarjeta-bg.bg-card(:style="{'background-image': `url(${require('@/assets/curso/temas/img25.png')})`}" style='height: 394px')
        .tarjeta.bg-white.p-3.w-100.text-small
          Audio.color-acento-contenido.mb-2.m-auto(:audio="require('@/assets/curso/audios/1.1/University.mp3')")
          p.text-center
            span.r-3.fst-italic.fw-bold University
            br
            | (Universidad)

    Separador 
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.2 Proporcionando indicaciones para llegar a un lugar en la ciudad             
    p(data-aos="fade-down").mb-5 Cuando las personas van a un lugar y no saben dónde queda, generalmente, le preguntan a un amigo u otra persona.
    p(data-aos="fade-down").mb-5 #[b #[i For] example:]
    .bg4.py-4.px-3.mb-5(data-aos="fade-left")
      .row.justify-content-evenly.align-items-center     
        .col-lg-2.d-none.d-lg-block
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img27.svg', alt='') 
        .col-lg-8
          .tarjeta.tarjeta--azul.bg3.p-1
            SlyderA(tipo="b")
              DialogoChat.color-acento-contenido(:dialogo="dialogoChat")  
              DialogoChat.color-acento-contenido(:dialogo="dialogoChat1")  
              DialogoChat.color-acento-contenido(:dialogo="dialogoChat2") 
        .col-lg-2.d-none.d-lg-block
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img28.svg', alt='')

    p(data-aos="fade-down").mb-5 A continuación, se detalla la estructura gramatical para preguntar y responder acerca del lugar donde se encuentra un establecimiento. Observe el mapa, escuche, repita y aprenda:
    .bg5.p-5.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-10    
          .row.justify-content-center.align-items-center
            .col-lg-3.d-none.d-lg-block
              img.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/img29.svg', alt='')            
            .col-lg-9   
              .text-center
                h4(data-aos="fade-down") Question
                p(data-aos="fade-down") Where is the ______? ¿Dónde está el _____ ?
                p(data-aos="fade-down") 
                  span.r.px-3 #[i #[b Answer]]
                  span | 
                  span.r.px-3 #[i #[b Subject]]
                  span | 
                  span.r.px-3 #[i #[b Verb]]
                  span | 
                  span.r.px-3 #[i #[b Preposition of place]]
                  span | 
                  span.r.px-3 #[i #[b Complement]]
                  span | 
                  span.r.px-3 ?

          ImagenInfograficaB.color-acento-botones.mb-5(data-aos="fade-right")
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/temas/img30.svg', alt='Question')

            div(x="30.1%" y="86.5%" tooltip="Open" numero="+")
              h4 Restaurant
              p.mb-5 #[b #[i Where is the restaurant?] / ¿Dónde está el restaurante?]
              .row.justify-content-center.align-items-center
                .col-lg-8             
                  .row.justify-content-center.align-items-center
                    .col-lg-6
                      TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                        texto="<i><span1>The restaurant is</span1> <span>in front of</span> <span1>the theater.</span1></i>"
                        :audio="require('@/assets/curso/audios/1.2/1.mp3')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                    .col-lg-6
                      p El restaurante está en frente del teatro. 
                  .row.justify-content-center.align-items-center
                    .col-lg-6
                      TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                        texto="<i><span1>It's in front of the theater</span1></i>"
                        :audio="require('@/assets/curso/audios/1.2/1_1.mp3')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                    .col-lg-6                  
                      p Está en frente del teatro.              
                .col-lg-4              
                  img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/img31.svg', alt='')  

              .row.justify-content-center.align-items-center.my-5
                .col-lg-8    
                  .row.justify-content-center.align-items-center
                    .col-lg-6
                      TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                        texto="<i><span1>The restaurant is</span1> <span> next to</span> <span1>the candy store.</span1></i>"
                        :audio="require('@/assets/curso/audios/1.2/2.mp3')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                    .col-lg-6
                      p El restaurante está al lado de la tienda de golosinas.
                  .row.justify-content-center.align-items-center
                    .col-lg-6
                      TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                        texto="<i><span1>It's next to the candy store</span1></i>"
                        :audio="require('@/assets/curso/audios/1.2/1_2.mp3')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                    .col-lg-6                  
                      p Está al lado de la tienda de golosinas.             
                .col-lg-4              
                  img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/img32.svg', alt='')  

              .row.justify-content-center.align-items-center
                .col-lg-8  
                  .row.justify-content-center.align-items-center
                    .col-lg-6
                      TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                        texto="<i><span1>The restaurant is</span1> <span>across</span> <span1>the street from the park.</span1></i>"
                        :audio="require('@/assets/curso/audios/1.2/3.mp3')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                    .col-lg-6
                      p El restaurante está al otro lado de la calle del parque.
                  .row.justify-content-center.align-items-center
                    .col-lg-6
                      TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                        texto="<i><span1>It's across the street from the park</span1></i>"
                        :audio="require('@/assets/curso/audios/1.2/1_3.mp3')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                    .col-lg-6                  
                      p Está al otro lado de la calle del parque.            
                .col-lg-4              
                  img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/img33.svg', alt='')  

            div(x="87%" y="55.6%" tooltip="Open" numero="+")
              h4 Library
              p.mb-5 #[b #[i Where is the library?] / ¿Dónde está la biblioteca?]  
              .row.justify-content-center.align-items-center
                .col-lg-8
                  .row.justify-content-center.align-items-center.mb-5
                    .col-lg-6
                      TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                        texto="<i><span1>The library is</span1> <span>across</span> <span1>the street from</span1> <span>the park.</span></i>"
                        :audio="require('@/assets/curso/audios/1.2/4_2.mp3')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                  
                    .col-lg-6
                      p La biblioteca está al otro lado de la calle del parque.                
                  .row.justify-content-center.align-items-center
                    .col-lg-6
                      TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                        texto="<i><span1>It's</span1> <span>across</span> <span1>the street from</span1> <span>the park.</span></i>"
                        :audio="require('@/assets/curso/audios/1.2/4_1.mp3')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                  
                    .col-lg-6
                      p Está al otro lado de la calle del parque.
                      
                .col-lg-4              
                  img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/img34.svg', alt='')

            div(x="6.7%" y="56%" tooltip="Open" numero="+")
              h4 Hospital
              p.mb-5 #[b #[i Where is the hospital?] / ¿Dónde está la hospital?]  
              .row.justify-content-center.align-items-center
                .col-lg-8
                  .row.justify-content-center.align-items-center.mb-5
                    .col-lg-6
                      TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                        texto="<i><span1>The hospital is</span1> <span>across</span> <span1>the street from</span1> <span>the park, between</span> <span1>the</span1> <span>bank</span> <span1>and the</span1> <span>theater.</span></i>"
                        :audio="require('@/assets/curso/audios/1.2/5_1.mp3')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                  
                    .col-lg-6
                      p El hospital está al otro lado de la calle del parque, entre el banco y el teatro.

                  .row.justify-content-center.align-items-center
                    .col-lg-6
                      TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                        texto="<i><span1>It's</span1> <span>across</span> <span1>the street from</span1> <span>the park, between</span> <span1>the</span1> <span>bank</span> <span1>and the</span1> <span>theater.</span></i>"
                        :audio="require('@/assets/curso/audios/1.2/5_2.mp3')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                  
                    .col-lg-6
                      p Está al otro lado de la calle del parque, entre el banco y el teatro.
                .col-lg-4              
                  img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/img35.svg', alt='')

            div(x="59%" y="18.8%" tooltip="Open" numero="+")
              h4 Police Station
              p.mb-5 #[b #[i Where is the Police Station?] / ¿Dónde está la Estación de Policía?]  
              .row.justify-content-center.align-items-center
                .col-lg-8
                  .row.justify-content-center.align-items-center.mb-5
                    .col-lg-6
                      TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                        texto="<i><span1>The Police Station is</span1> <span>across</span> <span1>the street from the park,</span1> <span>next to</span> <span1>the Post office.</span1></i>"
                        :audio="require('@/assets/curso/audios/1.2/6_1.mp3')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                  
                    .col-lg-6
                      p La estación de policía está al otro lado de la calle del parque, al lado de la oficina de correos

                  .row.justify-content-center.align-items-center
                    .col-lg-6
                      TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                        texto="<i><span1>It's</span1> <span>across</span> <span1>the street from the park,</span1> <span>next to</span> <span1>the Post office.</span1></i>"
                        :audio="require('@/assets/curso/audios/1.2/6_2.mp3')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                  
                    .col-lg-6
                      p Está al otro lado de la calle del parque, al lado de la oficina de correos
                .col-lg-4              
                  img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/img36.svg', alt='')  

            div(x="87.8%" y="17.9%" tooltip="Open" numero="+")
              h4 Gym
              p.mb-5 #[b #[i Where is the Gym] / ¿Dónde está el gimnasio?]  
              .row.justify-content-center.align-items-center
                .col-lg-8
                  .row.justify-content-center.align-items-center.mb-5
                    .col-lg-6
                      TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                        texto="<i><span1>The gym is</span1> <span>across</span> <span1>the street from the library, in front of the Police station.</span1></i>"
                        :audio="require('@/assets/curso/audios/1.2/7_1.mp3')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                  
                    .col-lg-6
                      p El gimnasio está al otro lado de la calle de la biblioteca, en frente de la Estación de policía.

                  .row.justify-content-center.align-items-center
                    .col-lg-6
                      TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                        texto="<i><span1>It's</span1> <span>across</span> <span1>the street from the library, in front of the Police station.</span1></i>"
                        :audio="require('@/assets/curso/audios/1.2/7_2.mp3')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                  
                    .col-lg-6
                      p Está al otro lado de la calle de la biblioteca, en frente de la Estación de policía.
                .col-lg-4              
                  img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/img37.svg', alt='')

    titulo-segundo.color-acento-contenido.mt-5(data-aos='fade-right')
      h2 Actividad didáctica 
    .row.mt-5.justify-content-center.align-items-center.align-items-lg-stretch
      .col-6.col-md-4.col-lg-3.mb-4.mb-md-0
        .tarjeta.h-100.d-flex.align-items-center.p-4
          figure
            img(src="@/assets/template/seleccion-multiple.svg", alt="")
      .col-12.col-md-8.col-lg-9
        .titulo-segundo
          h2 Indicando direcciones
        p.mb-4 #[i Please, where is the bank?] / Por favor, ¿dónde está el banco?
        .tarjeta.actividad.p-3
          .row.justify-content-around.align-items-center            
            .col-sm.mb-3.mb-sm-0
              p.fw-bold.mb-0 Opción múltiple
            .col-auto
              a.boton.boton--b(:href="obtenerLink('/actividades/01/index.html')" target="_blank")
                span Realizar
                i.fas.fa-puzzle-piece                  
</template>

<script>
import DialogoChat from '../components/DialogoChat.vue'
export default {
  name: 'Tema1',
  components: {
    DialogoChat,
  },
  data: () => ({
    mostrarIndicadorAudio: true,
    dialogoChat: {
      personajes: [
        {
          nombre: 'Sue',
          img: require('@/assets/curso/temas/Sue.svg'),
        },
        {
          nombre: 'Jim',
          img: require('@/assets/curso/temas/Jim.svg'),
        },
      ],
      dialogo: [
        {
          personaje: 'Sue',
          textoIng: 'Hello Jim. How are you?',
          audio: require('@/assets/curso/audios/1.2/Sue_Jim/1.mp3'),
        },
        {
          personaje: 'Jim',
          textoIng: ' Hi Sue. I’m fine and you?',
          audio: require('@/assets/curso/audios/1.2/Sue_Jim/2.mp3'),
        },
      ],
    },

    dialogoChat1: {
      personajes: [
        {
          nombre: 'Sue',
          img: require('@/assets/curso/temas/Sue.svg'),
        },
        {
          nombre: 'Jim',
          img: require('@/assets/curso/temas/Jim.svg'),
        },
      ],
      dialogo: [
        {
          personaje: 'Sue',
          textoIng: 'Fine, thanks. And, what are you doing here?',
          audio: require('@/assets/curso/audios/1.2/Sue_Jim/3.mp3'),
        },
        {
          personaje: 'Jim',
          textoIng:
            'I want to go to the post office, but I don’t know where it is. Can you tell me where the post office is, please?',
          audio: require('@/assets/curso/audios/1.2/Sue_Jim/4.mp3'),
        },
      ],
    },

    dialogoChat2: {
      personajes: [
        {
          nombre: 'Sue',
          img: require('@/assets/curso/temas/Sue.svg'),
        },
        {
          nombre: 'Jim',
          img: require('@/assets/curso/temas/Jim.svg'),
        },
      ],
      dialogo: [
        {
          personaje: 'Sue',
          textoIng:
            'Sure. Go ahead!  It’s across the street from the park, between the museum and the police station.',
          audio: require('@/assets/curso/audios/1.2/Sue_Jim/5.mp3'),
        },
        {
          personaje: 'Jim',
          textoIng: 'Oh, thank you, Sue.',
          audio: require('@/assets/curso/audios/1.2/Sue_Jim/6.mp3'),
        },
      ],
    },
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
