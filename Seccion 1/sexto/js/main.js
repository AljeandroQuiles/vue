Vue.filter('alReves', (valor) => valor.split('').reverse().join(''));

new Vue({
    el:'main',
    data:{
        busqueda:'',
        minimo:7,
        juego:[{

           titulo: 'Persona 5 Royal',
           genero:'RPG',
           puntuacion:10
        },{
            titulo: 'The last of us',
            genero:'Accion',
            puntuacion:9
            
        },{

            titulo: 'Nier Automata',
            genero:'RPG',
            puntuacion:9
            
        }
        ]

    },

    computed: {
        mejoresJuegos(){
           return this.juego.filter((juego) => juego.puntuacion >= this.minimo);
        },
        buscarJuego(){
            return this.mejoresJuegos.filter((juego) => juego.titulo.includes(this.busqueda));
        }
 
    },
});

