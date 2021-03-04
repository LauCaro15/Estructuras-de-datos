/* Ordenamiento Burbuja */
function algoritmoBurbuja(dirImg, arrayPosicion, typeOrd) {
    let arrayOrdenado = [];
    if (typeOrd){
        arrayOrdenado = burbujaAsc(arrayPosicion);
    } else if (!typeOrd){
        arrayOrdenado = burbujaDsc(arrayPosicion);
    }
    mostrarHtmlOrder(dirImg, arrayOrdenado);
}
/* Ordenamiento Inserción */
function algoritmoInsercion(dirImg, arrayPosicion, typeOrd) {
    let arrayOrdenado = [];
    if (typeOrd){
        arrayOrdenado = insercionAsc(arrayPosicion);
    } else if (!typeOrd){
        arrayOrdenado = insercionDsc(arrayPosicion);
    }
    mostrarHtmlOrder(dirImg, arrayOrdenado);
}
/* Ordenamiento Selección */
function algoritmoSeleccion(dirImg, arrayPosicion, typeOrd) {
    let arrayOrdenado = [];
    if (typeOrd){
        arrayOrdenado = seleccionAsc(arrayPosicion);
    } else if (!typeOrd){
        arrayOrdenado = seleccionDsc(arrayPosicion);
    }
    mostrarHtmlOrder(dirImg, arrayOrdenado);
}
/* Ordenamiento MergeSort */
function algoritmoMergeSort(dirImg, arrayPosicion, typeOrd) {
    let arrayOrdenado = [];
    if (typeOrd){
        arrayOrdenado = mergeSortAsc(arrayPosicion);
    } else if (!typeOrd){
        arrayOrdenado = mergeSortDsc(arrayPosicion);
    }
    mostrarHtmlOrder(dirImg, arrayOrdenado);
}
/* Ordenamiento QuickSort*/
function algoritmoQuickSort(dirImg, arrayPosicion, typeOrd) {
    let arrayOrdenado = [];
    if (typeOrd){
        arrayOrdenado = quickSortAsc(arrayPosicion);
    } else if (!typeOrd){
        arrayOrdenado = quickSortDsc(arrayPosicion);
    }
    mostrarHtmlOrder(dirImg, arrayOrdenado);
}
/* Ordenamiento ShellSort*/
function algoritmoShellSort(dirImg, arrayPosicion, typeOrd) {
    let arrayOrdenado = [];
    if (typeOrd){
        arrayOrdenado = shellSortAsc(arrayPosicion);
    } else if (!typeOrd){
        arrayOrdenado = shellSortDsc(arrayPosicion);
    }
    mostrarHtmlOrder(dirImg, arrayOrdenado);
} 