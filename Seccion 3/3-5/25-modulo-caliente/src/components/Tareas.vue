<template>
    <div>
        <h2>Las Tareas por hacer</h2>
        <ul>
            <li v-for="tarea in tareasPendientes">
                <a href="#" @click="actualizarTarea(tarea)" v-text="tarea.nombre"></a>
            </li>
        </ul>
        <h2>Tareas finalizadas</h2>
        <li v-for="tarea in tareasFinalizadas">
            <a href="#" @click="actualizarTarea(tarea)" v-text="tarea.nombre"></a>
        </li>
    </div>
</template>
<script>
    export default {
    data(){
     return {
            tareas: [
            {nombre: 'Aprender Vue.js', completado: false},
            {nombre: 'Morirme', completado: false},
            {nombre: 'Asegurarme de que estoy muerto', completado: false},
            {nombre: 'Revivir para morirme', completado: false},       ],
        finalizadas: []
            }},
        
        methods: {
            actualizarTarea(tarea) {
                tarea.completado = !tarea.completado;}
},
    computed: {tareasPendientes() {
        return this.tareas.filter((tarea) => !tarea.completado);
            },
        tareasFinalizadas() {
                return this.tareas.filter((tarea) => tarea.completado);
            }
    }
}
</script>
<style scoped>
    li a {
        color: darkgoldenrod;
        font-weight: bold;
        text-decoration: none;}
        
</style>