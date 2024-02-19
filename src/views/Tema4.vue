<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 4
      h1 Expresión <i>“There-be”. Is there a parcel for me?</i>

    p(data-aos="fade-down").mb-5 Esta expresión tiene el significado de “haber”. Está formada por la palabra “there” seguida del presente del verbo “to be” en singular o en plural. Ahora, revise las oraciones en las tres formas y de acuerdo con el plural o el singular: 

    .row.justify-content-center.mb-5.g-3(data-aos="zoom-in-up")
      .col-lg-5.d-none.d-lg-block
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img98.png', alt='')         
      .col-lg-7
        LineaTiempoD.color-primario
          .row.justify-content-center.align-items-center(numero="1" titulo="En oraciones afirmativas")
            .col-11      
              .row.justify-content-center.align-items-center
                .col-lg-3.my-3
                  img.img-a.img-t(src='@/assets/curso/temas/1.svg', alt='')       
                .col-lg-9
                  TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                    texto="There is a pencil."
                    :audio="require('@/assets/curso/audios/4/1.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )            
                  p.mb-0 Hay un lápiz. 
              .row.justify-content-center.align-items-center
                .col-lg-3.my-3
                  img.img-a.img-t(src='@/assets/curso/temas/2.svg', alt='')       
                .col-lg-9
                  TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                    texto="There are some pencils."
                    :audio="require('@/assets/curso/audios/4/2.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )            
                  p.mb-0 Hay unos lápices. 
              .row.justify-content-center.align-items-center
                .col-lg-3.my-3
                  img.img-a.img-t(src='@/assets/curso/temas/3.svg', alt='')       
                .col-lg-9
                  TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                    texto="There is a newspaper on the table."
                    :audio="require('@/assets/curso/audios/4/3.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )            
                  p.mb-0 Hay un periódico en la mesa. 
              .row.justify-content-center.align-items-center
                .col-lg-3.my-3
                  img.img-a.img-t(src='@/assets/curso/temas/4.svg', alt='')       
                .col-lg-9
                  TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                    texto="There are some newspapers on the table."
                    :audio="require('@/assets/curso/audios/4/4.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )            
                  p.mb-0 Hay algunos periódicos en la mesa.

          .row.justify-content-center.align-items-center(numero="2" titulo="En oraciones negativas")
            .col-11      
              .row.justify-content-center.align-items-center
                .col-lg-3.my-3
                  img.img-a.img-t(src='@/assets/curso/temas/5.svg', alt='')       
                .col-lg-9
                  TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                    texto="There is not a car in the garage."
                    :audio="require('@/assets/curso/audios/4/5.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )            
                  p.mb-0  No hay un carro en el garaje. 
              .row.justify-content-center.align-items-center
                .col-lg-3.my-3
                  img.img-a.img-t(src='@/assets/curso/temas/6.svg', alt='')       
                .col-lg-9
                  TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                    texto="There are not any cars in the garage."
                    :audio="require('@/assets/curso/audios/4/6.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )            
                  p.mb-0 No hay carros en el garaje
              .row.justify-content-center.align-items-center
                .col-lg-3.my-3
                  img.img-a.img-t(src='@/assets/curso/temas/7.svg', alt='')       
                .col-lg-9
                  TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                    texto="There isn’t a bird in the cage."
                    :audio="require('@/assets/curso/audios/4/7.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )            
                  p.mb-0 No hay un pájaro en la jaula.
              .row.justify-content-center.align-items-center
                .col-lg-3.my-3
                  img.img-a.img-t(src='@/assets/curso/temas/8.svg', alt='')       
                .col-lg-9
                  TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                    texto="There aren’t birds in the cage."
                    :audio="require('@/assets/curso/audios/4/8.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )            
                  p.mb-0 No hay pájaros en la jaula.

          .row.justify-content-center.align-items-center(numero="3" titulo="En oraciones interrogativas")
            .col-11      
              .row.justify-content-center.align-items-center
                .col-lg-3.my-3
                  img.img-a.img-t(src='@/assets/curso/temas/9.svg', alt='')       
                .col-lg-9
                  TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                    texto="Is there a book on the table?"
                    :audio="require('@/assets/curso/audios/4/9.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )            
                  p.mb-0 ¿Hay un libro en la mesa? 
              .row.justify-content-center.align-items-center
                .col-lg-3.my-3
                  img.img-a.img-t(src='@/assets/curso/temas/10.svg', alt='')       
                .col-lg-9
                  TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                    texto="Are there some books on the table?"
                    :audio="require('@/assets/curso/audios/4/10.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )            
                  p.mb-0 ¿Hay algunos libros en la mesa?
              .row.justify-content-center.align-items-center
                .col-lg-3.my-3
                  img.img-a.img-t(src='@/assets/curso/temas/11.svg', alt='')       
                .col-lg-9
                  TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                    texto="Are there thirty students in the classroom?"
                    :audio="require('@/assets/curso/audios/4/11.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )            
                  p.mb-0 ¿Hay treinta estudiantes en el salón de clase?
              .row.justify-content-center.align-items-center
                .col-lg-3.my-3
                  img.img-a.img-t(src='@/assets/curso/temas/12.svg', alt='')       
                .col-lg-9
                  TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                    texto="Is there any milk in the fridge? "
                    :audio="require('@/assets/curso/audios/4/12.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )            
                  p.mb-0 ¿Hay alguna leche en la nevera?

          .row.justify-content-center.align-items-center(numero="4" titulo="En singular")
            .col-11
              p Cuando se trata de una persona, animal u objeto, se emplea #[i There is].       
              .row.justify-content-center.align-items-center
                .col-lg-3.my-3
                  img.img-a.img-t(src='@/assets/curso/temas/13.svg', alt='')       
                .col-lg-9
                  TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                    texto="There is a big tree in the garden."
                    :audio="require('@/assets/curso/audios/4/13.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )            
                  p.mb-0 Hay un gran árbol en el jardín.
              .row.justify-content-center.align-items-center
                .col-lg-3.my-3
                  img.img-a.img-t(src='@/assets/curso/temas/14.svg', alt='')       
                .col-lg-9
                  TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                    texto="There is a boy in the room."
                    :audio="require('@/assets/curso/audios/4/14.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )            
                  p.mb-0 Hay un chico en la habitación.
              .row.justify-content-center.align-items-center
                .col-lg-3.my-3
                  img.img-a.img-t(src='@/assets/curso/temas/15.svg', alt='')       
                .col-lg-9
                  TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                    texto="There is a cat under the chair. "
                    :audio="require('@/assets/curso/audios/4/15.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )            
                  p.mb-0 Hay un gato debajo de la silla.
              .row.justify-content-center.align-items-center
                .col-lg-3.my-3
                  img.img-a.img-t(src='@/assets/curso/temas/16.svg', alt='')       
                .col-lg-9
                  TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                    texto="There is a pig in the backyard."
                    :audio="require('@/assets/curso/audios/4/16.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )            
                  p.mb-0 Hay un cerdo en el patio.
              .row.justify-content-center.align-items-center
                .col-lg-3.my-3
                  img.img-a.img-t(src='@/assets/curso/temas/17.svg', alt='')       
                .col-lg-9
                  TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                    texto="There is a ball in the basket."
                    :audio="require('@/assets/curso/audios/4/17.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )            
                  p.mb-0 Hay una pelota en la cesta.
              .row.justify-content-center.align-items-center
                .col-lg-3.my-3
                  img.img-a.img-t(src='@/assets/curso/temas/18.svg', alt='')       
                .col-lg-9
                  TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                    texto="There is a swimming pool in the backyard. "
                    :audio="require('@/assets/curso/audios/4/18.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )            
                  p.mb-0 Hay una piscina en el patio interior.

          .row.justify-content-center.align-items-center(numero="5" titulo="En plural")
            .col-11
              p Cuando se trata de #[b varias] personas, animales u objetos, se utiliza #[i There are].      
              .row.justify-content-center.align-items-center
                .col-lg-3.my-3
                  img.img-a.img-t(src='@/assets/curso/temas/19.svg', alt='')       
                .col-lg-9
                  TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                    texto="There are some trees in the garden"
                    :audio="require('@/assets/curso/audios/4/19.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )            
                  p.mb-0 Hay algunos árboles en el jardín.
              .row.justify-content-center.align-items-center
                .col-lg-3.my-3
                  img.img-a.img-t(src='@/assets/curso/temas/20.svg', alt='')       
                .col-lg-9
                  TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                    texto="There are some boys in the room."
                    :audio="require('@/assets/curso/audios/4/20.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )            
                  p.mb-0 Hay algunos chicos en la habitación.
              .row.justify-content-center.align-items-center
                .col-lg-3.my-3
                  img.img-a.img-t(src='@/assets/curso/temas/21.svg', alt='')       
                .col-lg-9
                  TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                    texto="There are three cats under the chair. "
                    :audio="require('@/assets/curso/audios/4/21.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )            
                  p.mb-0 Hay tres gatos debajo de la silla. 
              .row.justify-content-center.align-items-center
                .col-lg-3.my-3
                  img.img-a.img-t(src='@/assets/curso/temas/22.svg', alt='')       
                .col-lg-9
                  TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                    texto="There are some chairs in the room. "
                    :audio="require('@/assets/curso/audios/4/22.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )            
                  p.mb-0 Hay algunas sillas en la habitación. 
              .row.justify-content-center.align-items-center
                .col-lg-3.my-3
                  img.img-a.img-t(src='@/assets/curso/temas/23.svg', alt='')       
                .col-lg-9
                  TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                    texto="There are foxes in the forest. "
                    :audio="require('@/assets/curso/audios/4/23.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )            
                  p.mb-0  Hay zorros en el bosque. 
              .row.justify-content-center.align-items-center
                .col-lg-3.my-3
                  img.img-a.img-t(src='@/assets/curso/temas/24.svg', alt='')       
                .col-lg-9
                  TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                    texto="There are a lot of changes."
                    :audio="require('@/assets/curso/audios/4/24.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )            
                  p.mb-0 Hay muchos cambios.

    p(data-aos="fade-down").mb-5 A continuación, se muestra la estructura gramatical que se utiliza para estas expresiones:

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7    
        .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade-left")
          h5 Tabla 3
          span Estructura gramatical
        .tabla2.color-acento-botones.pb-5.mb-lg-0(data-aos="fade-right")
          table
            tbody
              tr
                td.bdlt
                td.t2gb.t2br(colspan="2") There + Verbo “<i>to be</i>” (presente)
                td.t2gb.t2br Objeto
                td.t2gb Traducción
              tr
                td Singular
                td(rowspan='2') <i>There</i>
                td <i>is</i>
                td <i>a rabbit.<br>one pencil.<br>a big parcel.</i>
                td Hay un conejo<br> Hay un lápiz.<br> Hay un gran paquete.
              tr
                td Plural
                td <i>Are</i>
                td <i>some rabbits.<br>a lot of people.<br>many stones.</i>
                td Hay algunos conejos.<br> Hay muchas personas.<br> Hay muchas piedras
      .col-lg-5
        .row.justify-content-center.align-items-center.bg19
          .col-lg-5.p-0           
            img.img-t(src='@/assets/curso/temas/img99.png', alt='')       
          .col-lg-7.my-3
            p(data-aos="fade-down").mb-0 Como puede observarse, el uso de 
              span.r #[i #[b “is”]] 
              span o 
              span.r #[i #[b “are”]] 
              span depende de si el objeto (que aparece detrás del verbo 
              span.r #[i “to be”]) 
              span está en singular o en plural.  

    titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2.mt-5 Actividad didáctica                       
    .row.mt-5.justify-content-center.align-items-center.align-items-lg-stretch
      .col-6.col-md-4.col-lg-3.mb-4.mb-md-0
        .tarjeta.h-100.d-flex.align-items-center.p-4
          figure
            img(src="@/assets/template/completar-espacios.svg", alt="")
      .col-12.col-md-8.col-lg-9
        .titulo-segundo
          h2 Expresión "#[i There-be]"
        p.mb-4 #[i Is there a parcel for me?] / ¿Hay un paquete para mí?
        .tarjeta.actividad.p-3
          .row.justify-content-around.align-items-center            
            .col-sm.mb-3.mb-sm-0
              p.fw-bold.mb-0 Completar frases
            .col-auto
              a.boton.boton--b(:href="obtenerLink('/actividades/04/index.html')" target="_blank")
                span Realizar
                i.fas.fa-puzzle-piece
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
