<template>
  <h1>Me llao {{ nombre }}</h1>
</template>

<script>
import {mapState} from 'vuex';

export default {
 /* computed:{
    nombre(){
      return this.$store.state.nombre
    }
  }*/

  /*computed: mapState({
    nombre: (state) => state.nombre,
    apellidos: (state) => state.apellidos,

  })*/
  computed: mapState(['nombre', 'apellidos', 'profesion']),
  
}
</script>