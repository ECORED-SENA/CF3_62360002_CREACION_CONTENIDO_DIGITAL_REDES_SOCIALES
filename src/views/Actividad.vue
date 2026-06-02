<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Validación y optimización del contenido digital',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> Evaluar los conocimientos adquiridos por el aprendiz sobre los protocolos de comunicación, la verificación de la estructura del contenido, la evaluación mediante métricas y el proceso de ajuste y optimización del contenido digital en redes sociales.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el objetivo principal de validar el contenido digital?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Publicar contenido constantemente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Mejorar la calidad del contenido.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Crear nuevas estrategias.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Aumentar el número de seguidores.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto: '¿Qué son los protocolos de comunicación en redes sociales?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aplicaciones de diseño.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Tipos de contenido.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Normas de interacción.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Estrategias comerciales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: '¿Qué busca la netiqueta en redes sociales?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Regular la interacción.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Incrementar seguidores.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Diseñar contenido.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Promocionar productos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: '¿Cuál es un elemento esencial en una publicación digital?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Música de fondo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ubicación geográfica.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Texto claro.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Tiempo de publicación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: '¿Qué se debe definir antes de validar una publicación?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El tamaño del diseño.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'El público objetivo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El tipo de letra.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El horario de publicación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto: '¿Qué mide el alcance en redes sociales?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cantidad de seguidores.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Numero de ventas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Tiempos de conexión.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Personas que ven el contenido.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto: '¿Qué indica la interacción en una publicación?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Nivel de participación.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Cantidad de usuarios.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Tiempo de publicación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Tipo de contenido.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: '¿Qué representa el <i>engagement</i> en redes sociales?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Costo de publicación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Nivel de conexión con usuarios.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Número de publicaciones.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Uso de herramientas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto: '¿Qué permiten analizar las métricas?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Resultados del contenido.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Herramientas digitales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Nuevas plataformas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Tipos de diseño.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto: '¿Qué significa tener alto alcance y baja interacción?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Contenido viral.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Bajo interés del usuario.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Buen diseño.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Alta calidad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto: '¿Qué es la optimización del contenido digital?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Crear contenido nuevo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Organizar archivos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Mejorar contenido.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Eliminar publicaciones.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto: '¿Cuál es un ejemplo de ajuste del contenido?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Subir un archivo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Crear una cuenta.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Cambiar la red social.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Modificar el mensaje.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto: '¿Qué permite la retroalimentación del contenido?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Diseñar contenido nuevo.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Aumentar seguidores.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Identificar mejoras.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Reducir publicaciones.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto: '¿Qué se busca con la mejora continua?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ajustar el contenido.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Publicar más contenido.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Usar más redes sociales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cambiar herramientas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto: '¿Qué es una lista de chequeo?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aplicación digital.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Tipo de diseño.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Estrategia de verificación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Herramienta de verificación.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto: '¿Qué práctica se debe evitar en redes sociales?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Responder comentarios.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Usar lenguaje claro.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Emplear lenguaje ofensivo.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Interactuar con usuarios.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto: '¿Qué elemento incentiva la acción del usuario?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Imagen.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'CTA.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Color.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Formato.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto: '¿Qué permite la coherencia comunicativa?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cambiar el mensaje.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Crear contenido nuevo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Mantener la identidad de marca.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Usar más plataformas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto: '¿Qué se analiza para mejorar el contenido digital?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Tipografía.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Tamaño del archivo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Métricas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Colores.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto: '¿Cuál es una acción final en la validación del contenido?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Optimizar contenido.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Diseñar publicaciones.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Crear contenido.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Publicar contenido.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
