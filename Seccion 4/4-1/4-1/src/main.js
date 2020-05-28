import Vue from 'vue'
import App from './App.vue'
const compartido = {
  usuario:{
    nombre:'Alex quiles',
  }
}

new Vue({
  el: '#app1',
  data: compartido,
});

new Vue({
  el: '#app2',
  data: compartido,
});
