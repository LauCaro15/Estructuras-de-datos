class NodeClass {
    constructor(valor, next, previous) {
        this.valor = valor;
        this.next = next;
        this.previous = previous;
    }
}
class listasDobles {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addInicio(valor) {
        const newNode = new NodeClass(valor, this.head, null);
        if (this.head) {
            newNode.next = this.head;
            this.head.previous = newNode;
            this.head = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        };
        this.length++;
    }
    /* Obtener valor de nodo por posición  */
    get(index) {
        if (index < 0 || index >= this.length) return null;
        let contador = 0;
        let newNode = this.head;
        while (contador !== index) {
            newNode = newNode.next;
            contador++;
        }
        return newNode;
    }
    /* Modificar el valor de un nodo determinado */
    set(index, valor) {
        let newNode = this.get(index);
        if (newNode) {
            newNode.valor = valor;
            return this
        }
        return false;
    }
    /* Invertir nodos */
    reverse() {
        if(!this.head){
            return null;
        }
        let previous= null; //Se intercambia la cabeza y la cola
        let newNode = this.head;
        let next = null;
        while(newNode){
            //Se van intercambiando los demás nodos 
            next = newNode.next;
            newNode.next = previous;
            previous = newNode;
            newNode = next;
        };
        this.head = previous; 
        return this;
    }
    /* Imprimir */
    imprimirArrayList() {
        let arregloNodos = [];
        let nodoVisitado = this.head;
        while (nodoVisitado) {
            arregloNodos.push(nodoVisitado.valor);
            nodoVisitado = nodoVisitado.next;
        }
        document.getElementById("listaPorDefault").innerHTML = arregloNodos;
    }
}

let instClass = new listasDobles();
instClass.addInicio(1);
instClass.addInicio(2);
instClass.addInicio(3);
instClass.addInicio(4);
instClass.addInicio(5);
instClass.addInicio(6);
instClass.addInicio(7);
instClass.addInicio(8);

/* console.log(instClass.reverse()); */
/* console.log(instClass.get(3)); */ 
/* console.log(instClass.set(7,0)); */
/* instClass.imprimirArrayList();  */

