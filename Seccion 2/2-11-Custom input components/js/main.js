Vue.component('contrasena',{
    props:['contrasena'],
    template: `<input :value="contrasena" @input="comprobarContrasena($event.target.value)" ref="pass" >`,
    method:{
        comprobarContrasena(contrasena){
            if(this.noValidas.includes(contrasena)){
                this.$refs.pass.value = contrasena = '';
            }

            this.$emit('input', contrasena);
        }
    },

    data(){
        return{
            noValidas:['abc','admin','123456','root'],
        }
    }
});
new Vue({
    el:'main',
    data:{
        contrasena: 'fgasdufgasdy',
    }
});