/* Algoritmo de ordenaminto Burbuja Ascendente */
function burbujaAsc(arrayPositions) {
    alert("Burbuja Ascendente");
    const lengthArray = arrayPositions.length;
    for (let i = 0; i < lengthArray; i++) {
        for (let j = 0; j < lengthArray - 1 - i; j++) {
            if (arrayPositions[j] > arrayPositions[j + 1]) {
                [arrayPositions[j], arrayPositions[j + 1]] = [arrayPositions[j + 1], arrayPositions[j]];
            }
        }
    }
    return arrayPositions;
}
/* Algoritmo de ordenaminto Burbuja Descendente */
function burbujaDsc(arrayPositions) {
    alert("Burbuja Descendente");
    const lengthArray = arrayPositions.length;
    for (let i = 0; i < lengthArray; i++) {
        for (let j = 0; j < lengthArray - 1 - i; j++) {
            if (arrayPositions[j] < arrayPositions[j + 1]) {
                [arrayPositions[j], arrayPositions[j + 1]] = [arrayPositions[j + 1], arrayPositions[j]];
            }
        }
    }
    return arrayPositions;
}
/* Algoritmo de ordenaminto Selección Ascendente */
function seleccionAsc(arrayPositions) {
    alert("Selección Ascendente");
    for (let j = 0; j < arrayPositions.length; ++j) {
        let i = iMin = j;
        for (++i; i < arrayPositions.length; ++i) {
            (arrayPositions[i] > arrayPositions[iMin]) && (iMin = i);
        }
        [arrayPositions[j], arrayPositions[iMin]] = [arrayPositions[iMin], arrayPositions[j]];
    }
    return arrayPositions;
}
/* Algoritmo de ordenaminto Selección Descendente */
function seleccionDsc(arrayPositions) {
    alert("Selección Descendente");
    for (let j = 0; j < arrayPositions.length; ++j) {
        let i = iMin = j;
        for (++i; i < arrayPositions.length; ++i) {
            (arrayPositions[i] < arrayPositions[iMin]) && (iMin = i);
        }
        [arrayPositions[j], arrayPositions[iMin]] = [arrayPositions[iMin], arrayPositions[j]];
    }
    return arrayPositions;
}
/* Algoritmo de ordenaminto Inserción Ascendente */

function insercionAsc(arrayPositions) {
    alert("Inserción Ascendente");
    const lengthArray = arrayPositions.length;
    let j;
    let aux;
    for (let i = 1; i < lengthArray; i++) {
        j = i;
        aux = arrayPositions[i];
        while (j > 0 && arrayPositions[j - 1] > aux) {
            arrayPositions[j] = arrayPositions[j - 1];
            j--;
        }
        arrayPositions[j] = aux;
    }
    return arrayPositions;
}
/* Algoritmo de ordenaminto Inserción Descendente*/
function insercionDsc(arrayPositions) {
    alert("Inserción Descendente");
    const lengthArray = arrayPositions.length;
    let j;
    let aux;
    for (let i = 1; i < lengthArray; i++) {
        j = i;
        aux = arrayPositions[i];
        while (j > 0 && arrayPositions[j - 1] < aux) {
            arrayPositions[j] = arrayPositions[j - 1];
            j--;
        }
        arrayPositions[j] = aux;
    }
    return arrayPositions;
}