import Vue from 'vue';
import Vuex from 'vuex'
Vue.use(Vuex);


export const store = new Vuex.store({
    state:{
        nombre:'Alejandro',
        apellidos:'Quiles',
        profesion:'estudiante',
        ciudad:'elche'
    }
})