<template>
    <h1>{{tareasCompletadas}} tareas completadas.</h1>
</template>
<script>
    import {mapGetters} from 'vuex';
    export default {
        computed: mapGetters(['tareasCompletadas'])
    }
</script>