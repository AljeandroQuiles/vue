Vue.component('candidato',{
    //props: ['nombre','correos','imagem'],
    props:{
        nombre:{
            type:[String, Array],
            required:true,
        },
        correos:{
            type:String,
            default:'alex@gmail.com'

        },
        imagen:String,
        location:{
            type:Object,
            default(){
                return{
                    ciudad:'Elche',
                }
            }
        },
    },
    template:'#candidato-template',
});

new Vue({
    el:'main',
    mounted(){
        this.obtenerCandidatos();
    },
    data:{
        candidatos:[],
    },
    methods:{
        obtenerCandidatos(){
            axios.get('https://randomuser.me/api/?results=100')
                .then((respuesta) =>{
                    this.candidatos = respuesta.data.results;
                })
        }
    }
})