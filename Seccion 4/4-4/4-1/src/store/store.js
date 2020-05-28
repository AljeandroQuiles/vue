import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        tareas: [
            {nombre: 'Aprender Vue', completado: false},
            {nombre: 'Olvidar Vue', completado: false},
            {nombre: 'Dormir', completado: false},
            {nombre: 'Pasear', completado: false},
            {nombre: 'Estudiar', completado: true},
        ]
    },
    getters: {
        tareasCompletadas: (state) => {
            return state.tareas.filter((tarea) => tarea.completado).length;
        }
    }
});