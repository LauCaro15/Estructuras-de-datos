class NodeClass {
    constructor(valor) {
        this.valor = valor;
        this.next = null;
    }
}
class listasSimples {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    /* Añadir Final */
    anadirFinal(valor) {
        let newNode = new NodeClass(valor);

        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    /* Añadir Inicio */
    anadirInicio(valor) {
        let newNode = new NodeClass(valor);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    /* Eliminar Final */
    eliminarFinal() {
        if (!this.head) return undefined;
        let nodoVisitado = this.head;
        let nuevaColaLista = nodoVisitado;
        while (nodoVisitado.next) {
            nuevaColaLista = nodoVisitado;
            nodoVisitado = nodoVisitado.next;
        }
        this.tail = nuevaColaLista;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return nodoVisitado;
    }
    /* Elimar Inicio */
    eliminarInicio() {
        if (!this.head) return undefined;
        let cabezaActual = this.head;
        this.head = cabezaActual.next;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return cabezaActual;
    }
    /* Posición puntero */
    getPosicionPuntero(index) {
        if (index < 0 || index >= this.length) return null;
        let contadorPuntero = 0;
        let nodoVisitado = this.head;
        while (contadorPuntero !== index) {
            nodoVisitado = nodoVisitado.next;
            contadorPuntero++;
        }
        return nodoVisitado;
    }
    /* Modificar Valor */
    modificarValorNodo(index, valor) {
        let encontrarNodo = this.getPosicionPuntero(index);
        if (encontrarNodo) {
            encontrarNodo.valor = valor;
            return true;
        }
        return false;
    }
    /* Remover Nodo Por Posición */
    removerNodoPorPosicion(index) {
        let nodoVisitado = this.head;
        let nodoAnteriorAlVisitado = null;
        if (index < 0 || index >= this.length) return null;
        if (index === 0){
            this.head = nodoVisitado.next;
        }else {
            for (let i = 0; i < index; i++) {
                nodoAnteriorAlVisitado = nodoVisitado;
                nodoVisitado = nodoVisitado.next;
            }
            nodoAnteriorAlVisitado.next = nodoVisitado.next;
        }
        this.length--;
        return nodoVisitado.valor;
    }
    /* Insertar Nodo por Posición */
    insertarNodoPorPosicion(index, valor) {
        let newNodo = new NodeClass(valor);
        let nodoVisitado = this.head;
        let nodoAnteriorAlVisitado = null;
        if (index < 0 || index >= this.length) return null;
        if (index === 0){
            this.anadirInicio(valor);
        }else {
            for (let i = 0; i < index; i++) {
                nodoAnteriorAlVisitado = nodoVisitado;
                nodoVisitado = nodoVisitado.next;
            }
            newNodo.next = nodoVisitado;
            nodoAnteriorAlVisitado.next = newNodo;
        }
        this.length++;
    }
    /* Remover Nodo Por Valor */
    removerNodoPorValor(valor) {
        let nodoVisitado = this.head;
        let nodoAnteriorAlVisitado = null;
        while (nodoVisitado !== null) {
            if (nodoVisitado.valor === valor) {
                if (!nodoAnteriorAlVisitado){
                    this.head = nodoVisitado.next;
                }else{
                    nodoAnteriorAlVisitado.next = nodoVisitado.next;
                }
                this.length--;
                return nodoVisitado.valor;
            }
            nodoAnteriorAlVisitado = nodoVisitado;
            nodoVisitado = nodoVisitado.next;
        }
        return null;
    }
    /* Invertir Lista */
    invertirOrden() {
        if (this.tail === this.head) return this;
        let nodoVisitado = this.head;
        let nodoAnteriorAlVisitado = null;
        let nodoSiguiente = null;
        while (nodoVisitado !== null) {
            nodoSiguiente = nodoVisitado.next;
            nodoVisitado.next = nodoAnteriorAlVisitado;
            nodoAnteriorAlVisitado = nodoVisitado;
            nodoVisitado = nodoSiguiente;
        }
        this.tail = this.head;
        this.head = nodoAnteriorAlVisitado;
        return nodoAnteriorAlVisitado;
    }
    /* Imprimir Lista */
    imprimirArray() {
        let arregloNodos = [];
        let nodoVisitado = this.head;
        while (nodoVisitado) {
            arregloNodos.push(nodoVisitado.valor);
            nodoVisitado = nodoVisitado.next;
        }
        return arregloNodos;
    }
}