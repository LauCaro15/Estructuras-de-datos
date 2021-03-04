/* Algoritmo de ordenaminto Burbuja Ascendente */
function burbujaAsc(arrayPosicion) {
    const lengthArray = arrayPosicion.length;
    for (let i = 0; i < lengthArray; i++) {
        for (let j = 0; j < lengthArray - 1 - i; j++) {
            (arrayPosicion[j] > arrayPosicion[j + 1]) ? [arrayPosicion[j], arrayPosicion[j + 1]] = [arrayPosicion[j + 1], arrayPosicion[j]] : '';
            
        }
    }
    return arrayPosicion;
}
/* Algoritmo de ordenaminto Burbuja Descendente */
function burbujaDsc(arrayPosicion) {
    const lengthArray = arrayPosicion.length;
    for (let i = 0; i < lengthArray; i++) {
        for (let j = 0; j < lengthArray - 1 - i; j++) {
            (arrayPosicion[j] < arrayPosicion[j + 1]) ? [arrayPosicion[j], arrayPosicion[j + 1]] = [arrayPosicion[j + 1], arrayPosicion[j]] : '';
            
        }
    }
    return arrayPosicion;
}
/* Algoritmo de ordenaminto Inserción Ascendente */
function insercionAsc(arrayPosicion) {
    let j;
    let temporal;
    for (let i = 1; i < arrayPosicion.length; i++) {
        j = i;
        temporal = arrayPosicion[i];
        while ((j > 0) && (arrayPosicion[j - 1] > temporal)) {
            arrayPosicion[j] = arrayPosicion[j - 1];
            j--;
        }
        arrayPosicion[j] = temporal;
    }
    return arrayPosicion;
}
/* Algoritmo de ordenaminto Inserción Descendente*/
function insercionDsc(arrayPosicion) {
    let j;
    let temporal;
    for (let i = 1; i < arrayPosicion.length; i++) {
        j = i;
        temporal = arrayPosicion[i];
        while ((j > 0) && (arrayPosicion[j - 1] < temporal)) {
            arrayPosicion[j] = arrayPosicion[j - 1];
            j--;
        }
        arrayPosicion[j] = temporal;
    }
    return arrayPosicion;
}
/* Algoritmo de ordenaminto Selección Ascendente */
function seleccionAsc(arrayPosicion) {
    for (let i = 0; i < arrayPosicion.length; i++) {
        let j = elementoMenorvalor = i;
        for (j++; j < arrayPosicion.length; j++) {
            (arrayPosicion[j] < arrayPosicion[elementoMenorvalor]) && (elementoMenorvalor = j);
        }
        [arrayPosicion[i], arrayPosicion[elementoMenorvalor]] = [arrayPosicion[elementoMenorvalor], arrayPosicion[i]];
    }
    return arrayPosicion;
}
/* Algoritmo de ordenaminto Selección Descendente */
function seleccionDsc(arrayPosicion) {
    for (let i = 0; i < arrayPosicion.length; i++) {
        let j = elementoMenorvalor = i;
        for (j++; j < arrayPosicion.length; j++) {
            (arrayPosicion[j] > arrayPosicion[elementoMenorvalor]) && (elementoMenorvalor = j);
        }
        [arrayPosicion[i], arrayPosicion[elementoMenorvalor]] = [arrayPosicion[elementoMenorvalor], arrayPosicion[i]];
    }
    return arrayPosicion;
}
/* Algoritmo de ordenaminto MergeSort Ascendente */
function mergeSortAsc(arrayPosicion) {
    if (arrayPosicion.length < 2) {
        return arrayPosicion;
    }
    const mitadArray = Math.floor(arrayPosicion.length / 2);
    const izquierda = arrayPosicion.slice(0, mitadArray);
    const derecha = arrayPosicion.slice(mitadArray);
    const merge = (izquierda, derecha) => {
        const result = [];
        let izq = der = 0;
        while (izq < izquierda.length && der < derecha.length) {
            result.push((izquierda[izq] < derecha[der]) ? izquierda[izq++] : derecha[der++]);
        }
        return [...result, ...izquierda.slice(izq), ...derecha.slice(der)];
    }
    return merge(mergeSortAsc(izquierda), mergeSortAsc(derecha));
}
/* Algoritmo de ordenaminto MergeSort Descendente */
function mergeSortDsc(arrayPosicion) {
    if (arrayPosicion.length < 2) {
        return arrayPosicion;
    }
    const mitadArray = Math.floor(arrayPosicion.length / 2);
    const izquierda = arrayPosicion.slice(0, mitadArray);
    const derecha = arrayPosicion.slice(mitadArray);
    const merge = (izquierda, derecha) => {
        const result = [];
        let izq = der = 0;
        while (izq < izquierda.length && der < derecha.length) {
            result.push((izquierda[izq] > derecha[der]) ? izquierda[izq++] : derecha[der++]);
        }
        return [...result, ...izquierda.slice(izq), ...derecha.slice(der)];
    }
    return merge(mergeSortDsc(izquierda), mergeSortDsc(derecha));
}
/* Algoritmo de ordenaminto QuickSort Ascendente */
function quickSortAsc(arrayPosicion) {
    if (arrayPosicion.length < 1) {
        return [];
    }
    var left = [];
    var right = [];
    var pivot = arrayPosicion[0];
    for (var i = 1; i < arrayPosicion.length; i++) {
        arrayPosicion[i] < pivot ? left.push(arrayPosicion[i]) : right.push(arrayPosicion[i]);
    }
    return [].concat(quickSortAsc(left), pivot, quickSortAsc(right));
}
/* Algoritmo de ordenaminto QuickSort Descendente */
function quickSortDsc(arrayPosicion) {
    if (arrayPosicion.length < 1) {
        return [];
    }
    var left = [];
    var right = [];
    var pivot = arrayPosicion[0];
    for (var i = 1; i < arrayPosicion.length; i++) {
        arrayPosicion[i] > pivot ? left.push(arrayPosicion[i]) : right.push(arrayPosicion[i]);
    }
    return [].concat(quickSortDsc(left), pivot, quickSortDsc(right));
}
/* Algoritmo de ordenaminto ShellSort Ascendente */
function shellSortAsc(arrayPosicion) {
    const gap = 1;
    if(arrayPosicion.length < 2){
        return arrayPosicion;
    }
    for(let i=gap ; i<arrayPosicion.length;i++){
        const targetValue = arrayPosicion[i];
        for(var j=i; j>=gap && arrayPosicion[j-gap]>targetValue; j-=gap){
            arrayPosicion[j] = arrayPosicion[j-gap];
        }
        arrayPosicion[j] = targetValue;
    }
    return arrayPosicion;
}
/* Algoritmo de ordenaminto ShellSort Descendente */
function shellSortDsc(arrayPosicion) {
    const gap = 1;
    if(arrayPosicion.length < 2){
        return arrayPosicion;
    }
    for(let i=gap ; i<arrayPosicion.length;i++){
        const targetValue = arrayPosicion[i];
        for(var j=i; j>=gap && arrayPosicion[j-gap]<targetValue; j-=gap){
            arrayPosicion[j] = arrayPosicion[j-gap];
        }
        arrayPosicion[j] = targetValue;
    }
    return arrayPosicion;
}