class NodeClass {
    constructor(valor) {
        this.valor = valor;
        this.next = null;
        this.previous = null;
    }
}
class listasDobles {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    add(data) {
        const newNode = new NodeClass(data, this.head, null);
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
        let counter = 0;
        let current = this.head;
        while (counter !== index) {
            current = current.next;
            counter++;
        }
        return current;
    }
    /* Modificar el valor de un nodo determinado */
    set(index, val) {
        let node = this.get(index);
        if (node) {
            node.valor= val;
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
        let current = this.head;
        let next = null;
        while(current){
            //Se van intercambiando los demás nodos 
            next = current.next;
            current.next = previous;
            previous = current;
            current = next;
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
instClass.add(1);
instClass.add(2);
instClass.add(3);
instClass.add(4);
instClass.add(5);
instClass.add(6);
instClass.add(7);
instClass.add(8);

console.log(instClass.reverse());
/* console.log(instClass.get(8)); */
/* console.log(instClass.set(7,0)); */


