Vue.component('alerta',{
    props: ['tipo','posicion'],
    template:`
        <section class="alerta" :class="[tipo,posicion]">
            <header class="alerta_header">
                <a href='#' @click="ocultarWidget">Cerrar </a>
            <slot name="header">
            Hola
            </slot>
            </header>
        <div class="alerta_contenido">
            <slot>
                dhasldasldhaslkdha dakdhalkd aldhasl dhaskld asdhaslkd adhaslk dasdlkh 
            </slot>
        </div>
        <footer class="alerta_footer">
            <slot name="footer">
            Este es el texto del footer
            </slot>
          
        </footer>
        </section>`,
        methods: {
            ocultarWidget(){
                this.$emit('ocultar');
            }
            
        },
});

new Vue({
    el:'main',
    data:{
        mostrarExito:false,
        mostrarError:false,
    }
   
});