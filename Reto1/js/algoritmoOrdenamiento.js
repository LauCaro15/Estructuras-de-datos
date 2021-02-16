/* Ordenamiento Burbuja */
function algoritmoBurbuja(dirImg, arrayPositions, typeOrd) {
    alert("Ordenamiento Burbuja");
    let arrayOrdenado = [];
    if (typeOrd){
        arrayOrdenado = burbujaAsc(arrayPositions);
    } else if (!typeOrd){
        arrayOrdenado = burbujaDsc(arrayPositions);
    }
    mostrarHtml(dirImg, arrayOrdenado);
}
/* Ordenamiento Selección */
function algoritmoSeleccion(dirImg, arrayPositions, typeOrd) {
    alert("Ordenamiento Selección");
    let arrayOrdenado = [];
    if (typeOrd){
        arrayOrdenado = seleccionAsc(arrayPositions);
    } else if (!typeOrd){
        arrayOrdenado = seleccionDsc(arrayPositions);
    }
    mostrarHtml(dirImg, arrayOrdenado);
}
/* Ordenamiento Inserción */
function algoritmoInsercion(dirImg, arrayPositions, typeOrd) {
    alert("Ordenamiento Inserción");
    let arrayOrdenado = [];
    if (typeOrd){
        arrayOrdenado = insercionAsc(arrayPositions);
    } else if (!typeOrd){
        arrayOrdenado = insercionDsc(arrayPositions);
    }
    mostrarHtml(dirImg, arrayOrdenado);
}