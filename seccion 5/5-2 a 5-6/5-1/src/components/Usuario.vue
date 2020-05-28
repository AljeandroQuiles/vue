<template>
    <h1>{{ id }}</h1>
</template>

<script>
export default {
    data(){
        return{
            id:this.$route.params.id
        }
    },
    watch:{
        '$route'(to){
            this.id = to.params.id;
        }
    }
}
</script>
