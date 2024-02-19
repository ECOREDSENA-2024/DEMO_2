<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 2
      h1 Preposiciones de lugar. <i>Where are you?</i>

    .row.justify-content-center.align-items-center.mb-5      
      .col-lg-8
        p(data-aos="fade-down").mb-5 Las preposiciones de lugar son palabras que tienen muchos usos, se pueden utilizar para decir dónde se encuentra ubicado un objeto o lugar: 
        .tarjeta.position-relative.rounded-0.bg6.p-4
          .row.justify-content-center.align-items-center
            .col-lg-2.col-5.mb-lg-0.mb-3
              .imagen-absolute1
                img.img-t(src='@/assets/curso/temas/img38.svg', alt='')
            .col-lg-9
              p(data-aos="fade-down").mb-0.ps-3 #[i The desk is in front of the blackboard] / El escritorio está frente a la pizarra; o para indicar la ubicación de lugares, por ejemplo: #[i The bank is next to the hospital] / El banco está al lado del hospital.       
      .col-lg-4.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img39.svg', alt='')

    Separador 
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 2.1  Uso de las preposiciones de lugar 
    p(data-aos="fade-down").mb-5 A continuación, se presentan las preposiciones de lugar, con sus respectivos ejemplos:

    .bg7.p-5.position-relative
      .tarjeta.bg8.p-4
        .row.justify-content-end.align-items-center
          .col-lg-2.col-5.mb-lg-0.mb-3.d-none.d-lg-block
            .imagen-absolute2
              img(src='@/assets/curso/temas/img41.svg', alt='')
          .col-lg-9
            SlyderE(indicadores="derecha")
              .row.justify-content-end.align-items-center
                .col-lg-6
                  .text-center
                    h5.r Preposición de lugar
                    p In
                    h5.r Significado
                    p Dentro de, en el interior

                    TarjetaAudio.color-acento-contenido.bg-white.my-3(
                      texto="<i><span1>Kris is in the Police station.</span1></i>"
                      :audio="require('@/assets/curso/audios/2.1/1.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )                    
                    p Kris está en la estación de policía.

                .col-lg-5
                  img.img-a.img-t(src='@/assets/curso/temas/img42.png', alt='')

              .row.justify-content-end.align-items-center
                .col-lg-6
                  .text-center
                    h5.r Preposición de lugar
                    p At
                    h5.r Significado
                    p En, al lado de, junto a

                    TarjetaAudio.color-acento-contenido.bg-white.my-3(
                      texto="<i><span1>Marly is at home.</span1></i>"
                      :audio="require('@/assets/curso/audios/2.1/2.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )                    
                    p Marly está en casa.

                .col-lg-5
                  img.img-a.img-t(src='@/assets/curso/temas/img43.png', alt='')

              .row.justify-content-end.align-items-center
                .col-lg-6
                  .text-center
                    h5.r Preposición de lugar
                    p Next to
                    h5.r Significado
                    p Al lado de

                    TarjetaAudio.color-acento-contenido.bg-white.my-3(
                      texto="<i><span1>The baby is next to the chair.</span1></i>"
                      :audio="require('@/assets/curso/audios/2.1/3.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )                    
                    p El bebé está al lado de la silla.

                .col-lg-5
                  img.img-a.img-t(src='@/assets/curso/temas/img44.png', alt='')

              .row.justify-content-end.align-items-center
                .col-lg-6
                  .text-center
                    h5.r Preposición de lugar
                    p On
                    h5.r Significado
                    p Encima de, sobre

                    TarjetaAudio.color-acento-contenido.bg-white.my-3(
                      texto="<i><span1>The plate is on the table.</span1></i>"
                      :audio="require('@/assets/curso/audios/2.1/4.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )                    
                    p El plato está en la mesa.

                .col-lg-5
                  img.img-a.img-t(src='@/assets/curso/temas/img45.png', alt='')

              .row.justify-content-end.align-items-center
                .col-lg-6
                  .text-center
                    h5.r Preposición de lugar
                    p  Behind
                    h5.r Significado
                    p Detrás

                    TarjetaAudio.color-acento-contenido.bg-white.my-3(
                      texto="<i><span1>The girl is behind the desk.</span1></i>"
                      :audio="require('@/assets/curso/audios/2.1/5.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )                    
                    p  La chica está detrás del escritorio.

                .col-lg-5
                  img.img-a.img-t(src='@/assets/curso/temas/img46.png', alt='')

              .row.justify-content-end.align-items-center
                .col-lg-6
                  .text-center
                    h5.r Preposición de lugar
                    p Between
                    h5.r Significado
                    p Entre

                    TarjetaAudio.color-acento-contenido.bg-white.my-3(
                      texto="<i><span1>The theater is between the bakery and the post office.</span1></i>"
                      :audio="require('@/assets/curso/audios/2.1/6.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )                    
                    p El teatro está entre la panadería y la oficina de correos.

                .col-lg-5
                  img.img-a.img-t(src='@/assets/curso/temas/img47.png', alt='')

              .row.justify-content-end.align-items-center
                .col-lg-6
                  .text-center
                    h5.r Preposición de lugar
                    p In front of
                    h5.r Significado
                    p En frente de

                    TarjetaAudio.color-acento-contenido.bg-white.my-3(
                      texto="<i><span1>Gerard is in front of the house.</span1></i>"
                      :audio="require('@/assets/curso/audios/2.1/7.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )                    
                    p Gerard está en frente de la casa.

                .col-lg-5
                  img.img-a.img-t(src='@/assets/curso/temas/img48.png', alt='')

              .row.justify-content-end.align-items-center
                .col-lg-6
                  .text-center
                    h5.r Preposición de lugar
                    p Across
                    h5.r Significado
                    p Al otro lado de, al cruzar

                    TarjetaAudio.color-acento-contenido.bg-white.my-3(
                      texto="<i><span1>The park is across the Main street from the Post office.</span1></i>"
                      :audio="require('@/assets/curso/audios/2.1/8.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )                    
                    p El parque está al cruzar la calle Principal desde la Oficina de correos.

                .col-lg-5
                  img.img-a.img-t(src='@/assets/curso/temas/img49.png', alt='')

              .row.justify-content-end.align-items-center
                .col-lg-6
                  .text-center
                    h5.r Preposición de lugar
                    p Under
                    h5.r Significado
                    p Debajo de

                    TarjetaAudio.color-acento-contenido.bg-white.my-3(
                      texto="<i><span1>The girl is under the table.</span1></i>"
                      :audio="require('@/assets/curso/audios/2.1/9.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )                    
                    p La niña está debajo de la mesa.

                .col-lg-5
                  img.img-a.img-t(src='@/assets/curso/temas/img50.png', alt='')

              .row.justify-content-end.align-items-center
                .col-lg-6
                  .text-center
                    h5.r Preposición de lugar
                    p Opposite
                    h5.r Significado
                    p Opuesto a , del otro lado

                    TarjetaAudio.color-acento-contenido.bg-white.my-3(
                      texto="<i><span1>The bakery is opposite the barbershop.</span1></i>"
                      :audio="require('@/assets/curso/audios/2.1/10.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )                    
                    p La panadería está del otro lado de la barbería.

                .col-lg-5
                  img.img-a.img-t(src='@/assets/curso/temas/img51.png', alt='')

              .row.justify-content-end.align-items-center
                .col-lg-6
                  .text-center
                    h5.r Preposición de lugar
                    p Above
                    h5.r Significado
                    p Sobre

                    TarjetaAudio.color-acento-contenido.bg-white.my-3(
                      texto="<i><span1>The plane flies above the clouds.</span1></i>"
                      :audio="require('@/assets/curso/audios/2.1/11.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )                    
                    p El avión vuela sobre las nubes.

                .col-lg-5
                  img.img-a.img-t(src='@/assets/curso/temas/img52.png', alt='')

              .row.justify-content-end.align-items-center
                .col-lg-6
                  .text-center
                    h5.r Preposición de lugar
                    p Below
                    h5.r Significado
                    p Por debajo de

                    TarjetaAudio.color-acento-contenido.bg-white.my-3(
                      texto="<i><span1>The river runs below the bridge.</span1></i>"
                      :audio="require('@/assets/curso/audios/2.1/12.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )                    
                    p El río corre debajo del puente.

                .col-lg-5
                  img.img-a.img-t(src='@/assets/curso/temas/img53.png', alt='')    
    
    Separador 
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 2.2   Ubicación de las preposiciones de lugar

    p(data-aos="fade-down").mb-5 Generalmente, las preposiciones de lugar se ubican justo después del verbo principal o acción de la oración. Revise algunos ejemplos: 

    SlyderF.mb-5.px-5(columnas="col-lg-4")(data-aos="fade-right")
      .crd.crd--100.tarjeta.bgw.p-4.b-sw
        .row.justify-content-center.mb-3
          .col-12
            img.img-a.img-t(src='@/assets/curso/temas/img54.svg' alt='AvatarTop')
        TarjetaAudio.color-acento-contenido.bg-white.my-3(
          texto="<i><span1>Paul is in the bank.</span1></i>"
          :audio="require('@/assets/curso/audios/2.2/1.mp3')"
          @audio-hover="mostrarIndicadorTarjetaAudio = false"
        )                    
        p Paul está en el banco. 

      .crd.crd--100.tarjeta.bgw.p-4.b-sw
        .row.justify-content-center.mb-3
          .col-12
            img.img-a.img-t(src='@/assets/curso/temas/img55.svg' alt='AvatarTop')
        TarjetaAudio.color-acento-contenido.bg-white.my-3(
          texto="<i><span1>The chair is next to the table.</span1></i>"
          :audio="require('@/assets/curso/audios/2.2/2.mp3')"
          @audio-hover="mostrarIndicadorTarjetaAudio = false"
        )                    
        p La silla está al lado de la mesa.

      .crd.crd--100.tarjeta.bgw.p-4.b-sw
        .row.justify-content-center.mb-3
          .col-12
            img.img-a.img-t(src='@/assets/curso/temas/img56.svg' alt='AvatarTop')
        TarjetaAudio.color-acento-contenido.bg-white.my-3(
          texto="<i><span1>The computer is on the desk.</span1></i>"
          :audio="require('@/assets/curso/audios/2.2/3.mp3')"
          @audio-hover="mostrarIndicadorTarjetaAudio = false"
        )                    
        p La computadora está sobre el escritorio.

      .crd.crd--100.tarjeta.bgw.p-4.b-sw
        .row.justify-content-center.mb-3
          .col-12
            img.img-a.img-t(src='@/assets/curso/temas/img57.svg' alt='AvatarTop')
        TarjetaAudio.color-acento-contenido.bg-white.my-3(
          texto="<i><span1>The meat is in the fridge.</span1></i>"
          :audio="require('@/assets/curso/audios/2.2/4.mp3')"
          @audio-hover="mostrarIndicadorTarjetaAudio = false"
        )                    
        p La carne está en la nevera.

      .crd.crd--100.tarjeta.bgw.p-4.b-sw
        .row.justify-content-center.mb-3
          .col-12
            img.img-a.img-t(src='@/assets/curso/temas/img58.svg' alt='AvatarTop')
        TarjetaAudio.color-acento-contenido.bg-white.my-3(
          texto="<i><span1>The skates are under the bed.</span1></i>"
          :audio="require('@/assets/curso/audios/2.2/5.mp3')"
          @audio-hover="mostrarIndicadorTarjetaAudio = false"
        )                    
        p Los patines están debajo de la cama.

      .crd.crd--100.tarjeta.bgw.p-4.b-sw
        .row.justify-content-center.mb-3
          .col-12
            img.img-a.img-t(src='@/assets/curso/temas/img59.svg' alt='AvatarTop')
        TarjetaAudio.color-acento-contenido.bg-white.my-3(
          texto="<i><span1>The doll is behind the schoolbag.</span1></i>"
          :audio="require('@/assets/curso/audios/2.2/6.mp3')"
          @audio-hover="mostrarIndicadorTarjetaAudio = false"
        )                    
        p La muñeca está detrás del morral.
    .row.justify-content-center.align-items-center
      .col-10
        .tarjeta.position-relative.rounded-0.bg9.p-5.mb-5
          .row.justify-content-center.align-items-center
            .col-lg-2.col-5.mb-lg-0.mb-3
              .imagen-absolute3
                img(src='@/assets/curso/temas/img60.png', alt='')
            .col-lg-9.ps-4
              p(data-aos="fade-down").mb-0.p-5 Para comunicar o informar la ubicación de un objeto o de un lugar, se hace uso de las preposiciones de lugar, para indicar en cuál sitio se encuentran, de manera que puede indicarse su posición respecto a otros objetos, personas o lugares, como también en qué sitio se ubican de acuerdo con una imagen o mapa del cual se disponga para revelar la posición o ubicación.
    p(data-aos="fade-down").mb-5.text-center Ahora, observe cómo se pueden ubicar algunos objetos que se encuentran en una habitación:
    .row.justify-content-center.align-items-center
      .col-10     
        ImagenInfografica.color-acento-botones.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/img62.svg', alt='')

          .tarjeta.color-acento-contenido.p-3(x="16%" y="54%" numero="+")
            TarjetaAudio.color-acento-contenido.bg-white.my-3(
              texto="<i><span1>The schoolbag is on the table.</span1></i>"
              :audio="require('@/assets/curso/audios/2.2/7.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )                    
            p.mb-0 El morral está sobre la mesa. 

          .tarjeta.color-acento-contenido.p-3(x="21%" y="57%" numero="+")
            TarjetaAudio.color-acento-contenido.bg-white.my-3(
              texto="<i><span1>There is an apple in the schoolbag.</span1></i>"
              :audio="require('@/assets/curso/audios/2.2/8.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )                    
            p.mb-0  Hay una manzana en el morral.

          .tarjeta.color-acento-contenido.p-3(x="15%" y="70%" numero="+")
            TarjetaAudio.color-acento-contenido.bg-white.my-3(
              texto="<i><span1>The ball is beside the table.</span1></i>"
              :audio="require('@/assets/curso/audios/2.2/9.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )                    
            p.mb-0 La pelota está al lado de la mesa.

          .tarjeta.color-acento-contenido.p-3(x="49%" y="26%" numero="+")
            TarjetaAudio.color-acento-contenido.bg-white.my-3(
              texto="<i><span1>The poster is behind the bed.</span1></i>"
              :audio="require('@/assets/curso/audios/2.2/10.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )                    
            p.mb-0 El afiche está detrás de la cama.

          .tarjeta.color-acento-contenido.p-3(x="56%" y="70%" numero="+")
            TarjetaAudio.color-acento-contenido.bg-white.my-3(
              texto="<i><span1>There is a bed in the bedroom.</span1></i>"
              :audio="require('@/assets/curso/audios/2.2/11.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )                    
            p.mb-0 Hay una cama en la habitación.

          .tarjeta.color-acento-contenido.p-3(x="66%" y="64%" numero="+")
            TarjetaAudio.color-acento-contenido.bg-white.my-3(
              texto="<i><span1>A doll is on the bed.</span1></i>"
              :audio="require('@/assets/curso/audios/2.2/12.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )                    
            p.mb-0 Una muñeca está sobre la cama.

          .tarjeta.color-acento-contenido.p-3(x="66%" y="83%" numero="+")
            TarjetaAudio.color-acento-contenido.bg-white.my-3(
              texto="<i><span1>The skates are under the bed.</span1></i>"
              :audio="require('@/assets/curso/audios/2.2/13.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )                    
            p.mb-0 Los patines están debajo de la cama.                                                               
          .tarjeta.color-acento-contenido.p-3(x="80%" y="68%" numero="+")
            TarjetaAudio.color-acento-contenido.bg-white.my-3(
              texto="<i><span1>The table is next to the bed.</span1></i>"
              :audio="require('@/assets/curso/audios/2.2/14.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )                    
            p.mb-0 La mesa está al lado de la cama.

    p(data-aos="fade-down").text-center.mb-5 Ahora, practique lo aprendido a través de la siguiente actividad:

    Dialogo.color-primario(:dialogo="dialogo")
      template(#nombre-actividad) Arrastrar y Soltar
      template(#titulo-actividad) Titulo de actividad - Completa la conversación.
      template(#descripcion-actividad) Arrastra y suelta el cada una de las palabras en el orden correcto.

    titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2.mt-5 Actividad didáctica       
    .row.mt-5.justify-content-center.align-items-center.align-items-lg-stretch
      .col-6.col-md-4.col-lg-3.mb-4.mb-md-0
        .tarjeta.h-100.d-flex.align-items-center.p-4
          figure
            img(src="@/assets/template/arrastrar.svg", alt="")
      .col-12.col-md-8.col-lg-9
        .titulo-segundo
          h2 Preposiciones de lugar
        p.mb-4 #[i Where are you?] / ¿Dónde estás?
        .tarjeta.actividad.p-3
          .row.justify-content-around.align-items-center            
            .col-sm.mb-3.mb-sm-0
              p.fw-bold.mb-0 Arrastrar y soltar
            .col-auto
              a.boton.boton--b(:href="obtenerLink('/actividades/02/index.html')" target="_blank")
                span Realizar
                i.fas.fa-puzzle-piece
</template>

<script>
import Dialogo from '../components/Dialogo.vue'
export default {
  name: 'Tema2',
  components: {
    Dialogo,
  },
  data: () => ({
    mostrarIndicadorAudio: true,
    dialogo: {
      personajes: [
        {
          nombre: 'Paula',
          img: require('@/assets/curso/temas/Sue.svg'),
        },
        {
          nombre: 'Matthew',
          img: require('@/assets/curso/temas/Jim.svg'),
        },
      ],
      dialogo: [
        {
          personaje: 'Paula',
          textoIng: 'Matthew, do you know where my laptop is? I can’t find it.',
          textoEsp:
            'Matthew, ¿sabes dónde está mi laptop? No puedo encontrarlo.',
          audio: require('@/assets/curso/audios/actividad/1.mp3'),
        },
        {
          personaje: 'Matthew',
          textoIng: 'Did you check *** the bed?',
          textoEsp: '¿Revisaste *** de la cama?.',
          audio: require('@/assets/curso/audios/actividad/6.mp3'),
          palabra: 'under',
        },
        {
          personaje: 'Paula',
          textoIng:
            'Yes, I did. I checked *** the bed, next to the sofa and on the desk.',
          textoEsp:
            'Sí, lo hice. Revisé *** de la cama, al lado del sofá y en el escritorio.',
          audio: require('@/assets/curso/audios/actividad/3.mp3'),
          palabra: 'behind',
        },
        {
          personaje: 'Matthew',
          textoIng: 'Hmm, look! It is *** that book and the suitcase.',
          textoEsp: '¡Mmm, mira! Está *** ese libro y la maleta.',
          audio: require('@/assets/curso/audios/actividad/4.mp3'),
          palabra: 'between',
        },
        {
          personaje: 'Paula',
          textoIng:
            'No, that’s your laptop. I need my laptop to finish a report.',
          textoEsp:
            'No, ese es tu laptop. Necesito mi laptop para terminar un informe.',
          audio: require('@/assets/curso/audios/actividad/5.mp3'),
        },
        {
          personaje: 'Matthew',
          textoIng: 'Did you check *** the bathroom?',
          textoEsp: '¿Revisaste *** el baño?.',
          audio: require('@/assets/curso/audios/actividad/2.mp3'),
          palabra: 'in',
        },
        {
          personaje: 'Paula',
          textoIng:
            'Yeah. Ah, I just remembered where it is. It’s in my handbag.',
          textoEsp: 'Sí. Ah, acabo de recordar dónde está. Está en mi bolso.',
          audio: require('@/assets/curso/audios/actividad/7.mp3'),
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
