const home = Vue.component('Home', {
    template: `<h2>Portada</h2>`,
});

const contacto  = Vue.component('Contacto', {
    template: `<h2>Contacto</h2>`,
});

const routes = [
    {path: '/', component: home},
    {path: '/contacto', component: contacto},
];

// Instaciar el componente enrutador
const router = new VueRouter({
    routes:routes,
})

new Vue({
    router: router,
    el: 'main',
});

