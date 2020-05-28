<template>

<section>
    <h2>¿Donde hallarme?</h2>
    <p>C/. falsa 123</p>

    <!--<h5>{{ $route.params.newsletter }}</h5>-->
    <h5>{{ newsletter }}</h5>
   <!-- <template v-if="$route.params.newsletter === 'true'">-->
    <!-- <template v-if="newsletter === 'true'">-->
        <template v-if="newsletter">

           <form action="">
        <h3>Newsletter</h3>
        <label for="correoe">Correo electronico</label>
        <input type="emal" placeholder="Correo electrónico" id="correo">
    </form>
    <pre>{{ numero }}</pre>
    </template>
 
</section>    
</template>


<script>
export default {
    props:['newsletter'],
    data(){
        return{
            numero:null
        }
    },

    beforeRouteEnter: ((to, from, next) => {
        setTimeout(() =>{
            next((vm) =>{
              vm.numero = Math.floor(Math.random() * 1000);
            })
        },2000);
    }),
}

</script>

