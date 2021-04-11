/* Se instancia la clase de las lista (listasSimples) */
let list = new listasSimples();
/* Comunicacion con singleLinkedList */
const anadirFinalLista = (value) => {
    list.anadirFinal(value);
};
const anadirInicioLista = (value) => {
    list.anadirInicio(value);
};
const eliminarFinalLista = () => {
    list.eliminarFinal();
};
const eliminarInicioLista = () => {
    list.eliminarInicio();
};
const getPosicionPunteroLista = (index) => {
    let node = list.getPosicionPuntero(index);
    document.getElementById('linkedListFinal').innerHTML = node.value;
};
const modificarValorNodoLista = (index, value) => {
    list.modificarValorNodo(index, value);
};
const removerNodoPorPosicionLista = (index) => {
    list.removerNodoPorPosicion(index);
};
const insertarNodoPorPosicionLista = (index, value) => {
    list.insertarNodoPorPosicion(index, value);
};
const removerNodoPorValorLista = (value) => {
    list.removerNodoPorValor(value);
};
const invertirOrdenLista = () => {
    list.invertirOrden();
};
const imprimirArrayLista = (id) => {
    let nodeArray = list.imprimirArray();
    document.getElementById(`${id}`).innerHTML = nodeArray.join(', ');
};