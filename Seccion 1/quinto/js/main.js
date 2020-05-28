new Vue({
    el:'main',
    data:{
        mensaje: 'Hola mundo',

        nuevaTarea:null,
        tareas:[{

           titulo: 'Aprende vue',
           prioridad:true,
           antiguedad:23
        },{
            titulo: 'Aprende Chrome',
            prioridad:true,
            antiguedad:135
            
        },{

            titulo: 'publicar cosas',
            prioridad:true,
            antiguedad:370
            
        }
        ]

    },
    methods:{
        agregarTarea(){
            //this. hace refererencia a esta instaciia de Vue
            this.tareas.unshift({
                titulo: this.nuevaTarea,
                prioridad:false,
                antiguedad:0,
            });
            this.nuevaTarea = null;
            
        }
    },
    computed: {
        mensajeAlReves(){
           return this.mensaje.split("").reverse().join("")
        },
        tareasConPrioridad(){
            return this.tareas.filter((tarea) => tarea.prioridad);
        },
        tareasPorAntiguedad(){
            return this.tareas.sort((a,b) => b.antiguedad - a.antiguedad)
        }
    },
});

