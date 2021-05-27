let arbol = new Arbol_Binario();
let arrayNodos = [];
function añadirCirculo() {
    const valorIngresado = parseInt(document.getElementById("num").value);
    if (verificar(valorIngresado)) {
        error();
        return;
    }
    arrayNodos.push(valorIngresado);

    if (arbol.añadirElemento(valorIngresado) === 0 ) {
        nodoRaiz(valorIngresado);
    } else {
        let padre = arbol.añadirElemento(valorIngresado);
        if (valorIngresado < padre.valor) {
            nodoIzquirda(valorIngresado);
        } else if (valorIngresado > padre.valor) {
            nodoDerecha(valorIngresado);
        }
    }
}
const verificar = ( valorIngresado ) => {
    let result = arrayNodos.filter( i => i === valorIngresado );
    return (result.length > 0) ? true:false;
}
function nodoRaiz(valorIngresado) {
    const out = document.getElementById("arbol");
    const div = `
    <div class="mydiv1 general">
        <p> ${ valorIngresado }  </p>
    </div>
    `;  
    out.innerHTML += div;
}
function nodoIzquirda(valorIngresado) {
    const out = document.getElementById("arbol");
    const div = `
    <div class="mydiv2 general">
        <p> ${ valorIngresado } </p>
    </div>
    `;  
    out.innerHTML += div;
}
function nodoDerecha(valorIngresado) {
    const out = document.getElementById("arbol");
    const div = `
    <div class="mydiv3 general">
        <p> ${ valorIngresado } </p>
    </div>
    `;  
    out.innerHTML += div;
}
function error() {
    alert("El numero se repite")
}