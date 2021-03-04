/* Funciones para que las imagenes sean aleatorias */
function randomImg(maximo, minimo, total) {
    const numeros = [];
    let i = 0;
    while (i < total) {
        const numerosNuevos = Math.floor(Math.random() * (maximo - minimo)) + minimo;
        const ejecutado = utilizado(numerosNuevos, numeros);
        if (!ejecutado) {
            numeros.push(numerosNuevos);
            i++;
        }
    }
    return numeros;
}
function utilizado(numerosNuevos, array) {
    let ejecutado = false;
    array.forEach(elemento => {
        if (elemento === numerosNuevos){
            ejecutado = true;
        }   
    });
    return ejecutado
}
/* Donde van las imágenes */
function domElement() {
    const divs = ['.a', '.b', '.c', '.d', '.e', '.f'];
    const arrayDivs = [];
    divs.forEach(elemento => {
        arrayDivs.push(document.querySelector(`${elemento}`));
    });
    return arrayDivs;
}
function domElementOrder() {
    const divs = ['.a1', '.b2', '.c3', '.d4', '.e5', '.f6'];
    const arrayDivs = [];
    divs.forEach(elemento => {
        arrayDivs.push(document.querySelector(`${elemento}`));
    });
    return arrayDivs;
}
/* Varaibles */
let direccionSrc;
let arrayimagenesSeleccionadas;
let nombreUsuario;
const selectorImage = document.querySelector(".packImg");
const selectorTypeOrd = document.querySelector(".selectOrd");
const selectorRadio = document.querySelector(".selectRadio");
const imageSelect = document.getElementById("ordenar");
selectorImage.addEventListener("change", function () { showSelected(false) });
function guardarArr(arr) {
    arrayimagenesSeleccionadas = arr;
    nombreUsuario = document.getElementById("last_name").value;
    mostrarImgSelected(true);
}
imageSelect.addEventListener("click", function selectedImages() {
    if (arrayimagenesSeleccionadas.lenght != 0) {
        showSelected(true);
    } else {
        alert('No ha seleccionado imagenes');
    }

})
/* Mirar que función seleccionó el usurio */
function showSelected(ejecutado) {
    let tipoImagen = document.getElementById("imgSelect").value;
    let tipoDeOrdenamiento = document.getElementById("algoritmoSeleccionado").value;
    let ordenamientoAsc = document.getElementById("Asc").checked;
    let ordenamientoDsc = document.getElementById("Dsc").checked;
    console.log(tipoImagen);
    /* Imagenes */
    if (!ejecutado) {
        if (tipoImagen === "1") {
            arrayimagenesSeleccionadas = [];
            direccionSrc = imagenes1();
        } else if (tipoImagen === "2") {
            arrayimagenesSeleccionadas = [];
            direccionSrc = imagenes2();
        } else if (tipoImagen === "3") {
            arrayimagenesSeleccionadas = [];
            direccionSrc = imagenes3();
        }
    } else if (ejecutado && arrayimagenesSeleccionadas.lenght != 0) {
        /* Métodos de ordenamiento */
        if (tipoDeOrdenamiento === "1") {
            if (ordenamientoAsc) {
                algoritmoBurbuja(direccionSrc, arrayimagenesSeleccionadas, true);
            } else if (ordenamientoDsc) {
                algoritmoBurbuja(direccionSrc, arrayimagenesSeleccionadas, false);
            }
        } else if (tipoDeOrdenamiento === "2") {
            if (ordenamientoAsc) {
                algoritmoInsercion(direccionSrc, arrayimagenesSeleccionadas, true);
            } else if (ordenamientoDsc) {
                algoritmoInsercion(direccionSrc, arrayimagenesSeleccionadas, false);
            }
        } else if (tipoDeOrdenamiento === "3") {
            if (ordenamientoAsc) {
                algoritmoSeleccion(direccionSrc, arrayimagenesSeleccionadas, true);
            } else if (ordenamientoDsc) {
                algoritmoSeleccion(direccionSrc, arrayimagenesSeleccionadas, false);
            }
        } else if (tipoDeOrdenamiento === "4") {
            if (ordenamientoAsc) {
                algoritmoMergeSort(direccionSrc, arrayimagenesSeleccionadas, true);
            } else if (ordenamientoDsc) {
                algoritmoMergeSort(direccionSrc, arrayimagenesSeleccionadas, false);
            }
        } else if (tipoDeOrdenamiento === "5") {
            if (ordenamientoAsc) {
                algoritmoQuickSort(direccionSrc, arrayimagenesSeleccionadas, true);
            } else if (ordenamientoDsc) {
                algoritmoQuickSort(direccionSrc, arrayimagenesSeleccionadas, false);
            }
        } else if (tipoDeOrdenamiento === "6") {
            if (ordenamientoAsc) {
                algoritmoShellSort(direccionSrc, arrayimagenesSeleccionadas, true);
            } else if (ordenamientoDsc) {
                algoritmoShellSort(direccionSrc, arrayimagenesSeleccionadas, false);
            }
        }
    }
}
/* Mostrar imágenes */
function mostrarImgSelected(entrada, arr) {
    if (entrada){
        document.getElementById("salidaImgSelected").innerHTML = arrayimagenesSeleccionadas;
    }else{
        document.getElementById("salidaImgOrder").innerHTML = arr;
    }
}
function mostrarHtml(dirImg, arrayPositions) {
    const arraySrcImag = [];
    const arrayInput = [];
    const arrayDivs = domElement();
    arrayPositions.forEach((element) => {
        arrayInput.push(`<input type="checkbox" name="imagenesSeleccionadas[]" value="${element}" id="${element}">`)
        arraySrcImag.push(`<img class="responsive-img circle" src="${dirImg}/${element}.png" alt="">`);
    });
    arrayDivs.forEach((element, i) => {
        element.innerHTML = arrayInput[i] + arraySrcImag[i];
    });
}
function mostrarHtmlOrder(dirImg, arrayPositions) {
    const arraySrcImag = [];
    let mostrar = "";
    const divSelector = document.querySelector(".allselect");
    arrayPositions.forEach((element) => {
        arraySrcImag.push(`<img class="responsive-img circle myM" src="${dirImg}/${element}.png" alt="">`);
    });
    arrayPositions.forEach((element, i) => {
        mostrar +=
            `
                ${arraySrcImag[i]}
            `;
    });
    mostrarImgSelected(false, arrayPositions);
    divSelector.innerHTML = mostrar;
}