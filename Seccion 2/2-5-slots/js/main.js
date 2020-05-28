Vue.component('alerta',{
    props: ['tipo','posicion'],
    template:`
        <section class="alerta" :class="[tipo,posicion]">
            <header class="alerta_header">
                
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
});

new Vue({
    el:'main',
   
});