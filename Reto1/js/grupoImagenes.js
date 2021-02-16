/* Imagenes grupo 1 */
function imagenes1() {
    alert("Grupo de imagénes 1");
    const dirImg = 'img/img1'
    const arrayPositions = randomImg(25,1,6);
    mostrarHtml(dirImg, arrayPositions);
    return {
        dirImg: dirImg,
        arrayPositions: arrayPositions
    };
}
/* Imagenes grupo 2 */
function imagenes2() {
    alert("Grupo de imagénes 2");
    const dirImg = 'img/img2'
    const arrayPositions = randomImg(19,1,6);
    mostrarHtml(dirImg, arrayPositions);
    return {
        dirImg: dirImg,
        arrayPositions: arrayPositions
    };
}
/* Imagenes grupo 3 */
function imagenes3() {
    alert("Grupo de imagénes 3"); 
    const dirImg = 'img/img3'
    const arrayPositions = randomImg(15,1,6);
    mostrarHtml(dirImg, arrayPositions);
    return {
        dirImg: dirImg,
        arrayPositions: arrayPositions
    };
}