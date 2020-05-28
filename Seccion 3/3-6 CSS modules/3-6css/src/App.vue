<template>
  <h1 :class="{[$style.subrayado]:subrayado}">Hola Modulos Css</h1>
</template>

<script>
    export default {
      data() {
        return {
          subrayado: true}
  }}
</script>

<style module>
    .subrayado {
        text-decoration: underline;}
    .rojo {
        color: red;}
</style>