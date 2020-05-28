const vm = new Vue({
    el:'main',
    data:{
       laborales:['Lunes','Martes','Miercoles', 'Jueves', 'Viernes'],
       tareas:[
           {nombre: 'Hacer la compra', prioridad:'baja'},
           {nombre: 'Aprender Vue y firebase', prioridad:'alta'},
           {nombre: 'Comer macarrones', prioridad:'alta'},

       ],
       persona:{
           nombre:'Alex',
           profesion: 'dev',
           ciudad:'Valencia'
       }
    }
});