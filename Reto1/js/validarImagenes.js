/* Funciones para que las imagenes salgan aleatorias */
function randomImg(max, min, total) {
  const numbers = [];
  let i = 0;
  while (i < total) {
    const numberNew = Math.floor(Math.random() * (max - min)) + min;
    const exist = utilizado(numberNew, numbers);
    if (!exist) {
      numbers.push(numberNew);
      i++;
    }
  }
  return numbers;
}
function utilizado(numberNew, array) {
  let exist = false;
  array.forEach(element => {
    if (element === numberNew){
      exist = true;
    }
  });
  return exist
}
/* Donde van las imágenes */
function domElement() {
  const divs = ['.A', '.B', '.C', '.D', '.E', '.F'];
  const arrayDivs = [];
  divs.forEach(element => {
    arrayDivs.push(document.querySelector(`${element}`));
  });
  return arrayDivs;
}
const selectorImage = document.querySelector(".packImg");
const selectorTypeOrd = document.querySelector(".selectOrd");
const selectorRadio = document.querySelector(".selectRadio");
selectorImage.addEventListener("change",function () {showSelected(false)});
selectorTypeOrd.addEventListener("change", function () {showSelected(true)});
selectorRadio.addEventListener("change", function () {showSelected(true)});
/* Variables  */
let direccionSrc;
let positionsNumbers;

function showSelected(ejecutado) {
  let typeOrdenamiento = document.getElementById("algoritmoSeleccionado").value;
  document.getElementById("algSelected").innerHTML = typeOrdenamiento;
  let tipyImg = document.getElementById("imgSelect").value;
  let typeOrdAsc = document.getElementById("Asc").checked;
  let typeOrdDsc = document.getElementById("Dsc").checked;
  /* Carga de imágenes e impide que se vuelvan a llamar */
  if (!ejecutado) {
    if (tipyImg === "1" ) {
      const {dirImg, arrayPositions} =  imagenes1();
      direccionSrc = dirImg;
      positionsNumbers = arrayPositions;
    } else if (tipyImg === "2") {
      const {dirImg, arrayPositions} =  imagenes2();
      direccionSrc = dirImg;
      positionsNumbers = arrayPositions;
    } else if (tipyImg === "3") {
      const {dirImg, arrayPositions} =  imagenes3();
      direccionSrc = dirImg;
      positionsNumbers = arrayPositions;
    }
  }
  /* Métodos para ordenar */
  if (typeOrdenamiento === "1" && ejecutado) {
    if (typeOrdAsc) {
      algoritmoBurbuja(direccionSrc, positionsNumbers, true);
    } else if (typeOrdDsc){
      algoritmoBurbuja(direccionSrc, positionsNumbers, false);
    }
  } else if (typeOrdenamiento === "2" && ejecutado) {
    if (typeOrdAsc) {
      algoritmoSeleccion(direccionSrc, positionsNumbers, true);
    } else if (typeOrdDsc){
      algoritmoSeleccion(direccionSrc, positionsNumbers, false);
    }
  } else if (typeOrdenamiento === "3" && ejecutado) {
    if (typeOrdAsc) {
      algoritmoInsercion(direccionSrc, positionsNumbers, true);
    }else if (typeOrdDsc){
      algoritmoInsercion(direccionSrc, positionsNumbers, false);
    }
  }
}
/* Mostrar */
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