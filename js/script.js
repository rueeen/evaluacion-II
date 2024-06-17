
let carrito = []
let p1 = {
    codigo:111, 
    nombre:'Lavadora', 
    precio:550000, 
    cantidad:2};
let p2 = {
    codigo:222, 
    nombre:'Tv', 
    precio:450000, 
    cantidad:3};
let p3 = {
    codigo:333, 
    nombre:'Refrigerador', 
    precio:300000, 
    cantidad:5};
let p4 = {
    codigo:444, 
    nombre:'Microondas', 
    precio:10, 
    cantidad:5};

const productos = [p1, p2, p3, p4];

const tablaProductos = document.querySelector('#productos');

const agregarProducto = (codigo) => {
    
}


const quitarProducto = (codigo) => {
    
}

const cargarProductos = () => {
    tablaProductos.innerHTML = '';
    let tr = document.createElement('tr');
    productos.forEach(p => {
        let tr = document.createElement('tr');
        let fila = `<td>
                        ${p.codigo}
                    </td>
                    <td>
                        ${p.nombre}
                    </td>
                    <td>
                        ${p.precio}
                    </td>
                    <td>
                        ${p.cantidad}
                    </td>
                    <td>
                        <div class="field is-grouped">
                            <div class="control">
                                <button id="agregar" class="button" onclick="agregarProducto(${p.codigo})"><i class="bi bi-plus"></i></button>
                            </div>
                            <div class="control">
                                <button id="quitar" class="button" onclick="quitarProducto(${p.codigo})"><i class="bi bi-dash-lg"></i></button>
                            </div>
                        </div>
                    </td>`;
        tr.innerHTML = fila;
        tablaProductos.appendChild(tr);
    })
}

cargarProductos();




