/* Variables */
let nodosValues = [];
let namesArray = [];
let fileTxt;
/* Valores por default */
anadirFinalLista("5");
anadirFinalLista("4");
anadirFinalLista("3");
anadirFinalLista("2");
anadirFinalLista("1");
anadirFinalLista("7");
anadirFinalLista("8");
anadirFinalLista("10");
/* Imprimir lista default */
imprimirArrayLista("listaPorDefault");
/* Captura de eventos */
const valuesInserted = document.getElementById("addNodos");
const imgFiles = document.getElementById('files');
const inputTxt = document.getElementById('myInput');
const createdList = document.getElementById('createList');
const finalLinkedList = document.getElementById('finalList');
valuesInserted.addEventListener("click", () => {
    let valoresNodos = document.getElementById("nodos").value;
    valoresNodos = valoresNodos.split(",");
    nodosValues = valoresNodos;
    document.getElementById("nodosIngresados").innerHTML = valoresNodos.join(" ");
});
imgFiles.addEventListener('change', (eventoSeleccionar) => {
    let files = eventoSeleccionar.target.files;
    for (let i = 0, file; file = files[i]; i++) {
        /* Cargue de sólo imagenes */
        if (!file.type.match('image.*')) {
            continue;
        }
        let imgLoad = new FileReader;
        /* Capturar información de la imagen: tipo, nombre, tamaño */
        imgLoad.onload = (function(imagenSeleccionada) {
            namesArray.push(escape(imagenSeleccionada.name));

            return function(imagen) {
                /* Crear etiqueta HTML en el DOM */
                let span = document.createElement('span');

                /* Escribimos en la etiqueta span: cargamos la imagen */
                span.innerHTML = ['<img class ="thumb" width ="100px" heigth="100px" src= " ',
                    imagen.target.result, ' "title=" ', escape(imagenSeleccionada.name),
                    ' "/> '
                ].join('');

                document.getElementById("list").insertBefore(span, null);
            };
        })(file);
        imgLoad.readAsDataURL(file);
    }
}, false);
inputTxt.addEventListener('change', (event) => {
    let fileLoad = new FileReader;
    /* files[0] sólo permite el cargue de un archivo */
    let archivo = event.target.files[0];
    /* readAsText se utiliza para leer el contenido de ls archivos */
    fileLoad.readAsText(archivo);
    /* Permite ejecutar la función onload despues de cargar el archivo */
    fileLoad.onload = () => {
        let contenidoTxt = fileLoad.result;
        let lecturaLineaPorLina = contenidoTxt.split('\n');
        fileTxt = lecturaLineaPorLina.join(" "); // guarda el contenido en una variable
        let contenido = "";
        contenido += lecturaLineaPorLina;
        document.getElementById("ver").innerHTML = contenido;
    };
});
createdList.addEventListener("click", () => {
    if (nodosValues)
        nodosValues.forEach( value => { anadirFinalLista(value); });
    if (namesArray)
        namesArray.forEach(value => { anadirFinalLista(value); });
    if (fileTxt)
        anadirFinalLista(fileTxt);
    imprimirArrayLista("linkedList");
});
finalLinkedList.addEventListener("click", () => {
    let optionSelected = document.getElementById('functionSelected').value;
    let radioInit = document.getElementById('init').checked;
    let radiofinal = document.getElementById('final').checked;
    let value = document.getElementById('valorN').value;
    let index = document.getElementById('posicionN').value;
    if (optionSelected === "1") {
        if (radioInit) {
            anadirInicioLista(value);
        } else if (radiofinal) {
            anadirFinalLista(value);
        }
        imprimirArrayLista('linkedListFinal');
    } else if (optionSelected === "2") {
        if (radioInit) {
            eliminarInicioLista();
        } else if (radiofinal) {
            eliminarFinalLista();
        }
        imprimirArrayLista('linkedListFinal');
    } else if (optionSelected === "3") {
        getPosicionPunteroLista(parseInt(index));
    } else if (optionSelected === "4") {
        removerNodoPorPosicionLista(parseInt(index));
        imprimirArrayLista('linkedListFinal');
    } else if (optionSelected === "5") {
        modificarValorNodoLista(parseInt(index), value);
        imprimirArrayLista('linkedListFinal');
    } else if (optionSelected === "6") {
        insertarNodoPorPosicionLista(parseInt(index), value);
        imprimirArrayLista('linkedListFinal');
    } else if (optionSelected === "7") {
        removerNodoPorValorLista(value);
        imprimirArrayLista('linkedListFinal');
    } else if (optionSelected === "8") {
        invertirOrdenLista();
        imprimirArrayLista('linkedListFinal');
    }
});