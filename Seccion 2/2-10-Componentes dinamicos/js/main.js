Vue.component('lista-tareas',{
    props:['tareas'],
    template:` 
        <div>
            <h1>
                <slot></slot>
            </h1>

            <ul>
                <tarea v-for="tarea in tareas" :tarea="tarea"></tarea>
            </ul>
        </div>
    `
});

Vue.component('tarea', {
    props:['tarea'],
    template:` <li> {{ tarea}} </li>`
});

Vue.component('contacto', {
    template:` <div><a href="mailto:alex@gmail.com"> alex@gmail.com </a><hr></div>`,
});


Vue.component('bio', {
    template:` <div><p>Lorem ipsum blablablablabla balbol bal bal bal ballbalb alba bla </p></div>`
});

new Vue({
    el:'main',
    data:{
        seleccionado: 'lista-tareas',
    }
   
});