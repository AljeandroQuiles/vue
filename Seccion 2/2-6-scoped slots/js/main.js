Vue.component('mis-tarea',{
    props:['listado'],
    template:'#mis-tareas-template'
});

new Vue({
    el:'main',
    data:{
        tareas:[
            {titulo:'Salir a correr'},
            {titulo:'Salir a andar'},
            {titulo:'Salir a bailar'},
            {titulo:'Salir a pasear perro'}
        ]
    }
   
});