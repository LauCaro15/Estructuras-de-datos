class Node {
    constructor(valor){
        this.valor=valor;
        this.punteroDerecha=null;
        this.punteroIzquierda=null;
    }
}

class Arbol_Binario {
    constructor(){
        this.raiz=null;
    }
    /* Método para añadir elemento */
    añadirElemento(añadido){
        if(!this.raiz){
            /* Creamos el nodo raiz */
            this.raiz = new Node(añadido);
            return 0;
        }
        let nodoActual = this.raiz; 
        let nodoPadre = this.raiz; 
        while(nodoActual) {
            /* Añadir nodo al lado izquierdo */
            if(añadido < nodoActual.valor){
                if(nodoActual.punteroIzquierda){
                    nodoPadre = nodoActual;
                    nodoActual = nodoActual.punteroIzquierda;
                }else{
                    nodoActual.punteroIzquierda = new Node(añadido);
                    return nodoPadre;
                }
            }else{
                /* Añadir nodo al lado derecho */
                if(nodoActual.punteroDerecha){
                    nodoPadre = nodoActual;
                    nodoActual = nodoActual.punteroDerecha;
                }else{
                    nodoActual.punteroDerecha = new Node(añadido);
                    return nodoPadre;
                }
            }
        }
    }
}