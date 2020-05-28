const productos = [
    {nombre: 'play 3', precio: 200},
    {nombre: 'Steam', precio: 66},
    {nombre: 'ds', precio: 30},
];

const  mutations = {
    anadirProducto: (state, producto) => state.productos.unshift(producto),
}


export default {
    state: productos, 
    mutations,
};