
let productosHTML = '';
let botonTodos = document.querySelector("#todos");
let id = "";
let titulo = document.getElementById("titulo-principal");
ShowAllProducts();
botonTodos.addEventListener('click', () => {
    ShowAllProducts();
})
let botonMoviles = document.querySelector("#moviles");
botonMoviles.addEventListener('click', () => {
    id = "moviles"
    ShowProducts(id);
})
let botonPortatiles = document.querySelector("#portatiles");
botonPortatiles.addEventListener('click', () => {
    id = "portatiles"
    ShowProducts(id);
})
let botonTelevisiones = document.querySelector("#televisiones");
botonTelevisiones.addEventListener('click', () => {
    id = "televisiones";
    ShowProducts(id);
})

function ShowProducts (id){
    productosHTML = ''
    for(let i = 0; i < 3; i++){
        productos.forEach((producto) => {
            if(producto.categoria.id == id){
                productosHTML +=`
                        <div class="producto">
                            <img class="producto-imagen" src="${producto.imagen}" alt="Imagen producto">
                            <div class="producto-detalles">
                                <h3 class="producto-titulo">${producto.titulo} 01</h3>
                                <p class="producto-precio">$${producto.precio}</p>
                                <button class="producto-agregar" id="agregar">Agregar</button>
                            </div>
                        </div>
            `
            }
            titulo.innerText = id;
            document.querySelector('.contenedor-productos').innerHTML = productosHTML;
        })
        productosHTML = '';
    }
    
    
}
function ShowAllProducts(){
    productosHTML = ''
    productos.forEach((producto) => {
            productosHTML +=`
                    <div class="producto">
                        <img class="producto-imagen" src="${producto.imagen}" alt="Imagen producto">
                        <div class="producto-detalles">
                            <h3 class="producto-titulo">${producto.titulo} 01</h3>
                            <p class="producto-precio">$${producto.precio}</p>
                            <button class="producto-agregar" id="agregar">Agregar</button>
                        </div>
                    </div>
        `
    })
    titulo.innerText = "Todos los productos";
    document.querySelector('.contenedor-productos').innerHTML = productosHTML;
    productosHTML = '';
}



const openMenuBtn = document.getElementById('open-menu');
const closeMenuBtn = document.getElementById('close-menu'); 
const sidebar = document.querySelector('.aside-visible'); 


openMenuBtn.addEventListener('click', () => {
  sidebar.classList.add('active');
});


closeMenuBtn.addEventListener('click', () => {
  sidebar.classList.remove('active');
});

