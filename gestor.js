// Definición del nodo
class Nodo {
    constructor(valor) {
        this.valor = valor;
        this.siguiente = null;
    }
}

// Definición de la cola
class Cola {
    constructor() {
        this.primero = null;
        this.ultimo = null;
        this.tamano = 0;
    }

    // Método para encolar un elemento
    encolar(valor) {
        const nuevoNodo = new Nodo(valor);
        if (this.ultimo === null) {
            this.primero = nuevoNodo;
        } else {
            this.ultimo.siguiente = nuevoNodo;
        }
        this.ultimo = nuevoNodo;
        this.tamano++;
    }

    // Método para desencolar un elemento
    descolar() {
        if (this.primero === null) return null;
        const valor = this.primero.valor;
        this.primero = this.primero.siguiente;
        if (this.primero === null) {
            this.ultimo = null;
        }
        this.tamano--;
        return valor;
    }

    // Método para obtener el primer elemento sin sacarlo de la cola
    obtenerPrimero() {
        return this.primero !== null ? this.primero.valor : null;
    }

    // Método para quitar el primer elemento de la cola
    quitarPrimero() {
        if (this.primero === null) return null;
        const valor = this.primero.valor;
        this.primero = this.primero.siguiente;
        this.tamano--;
        return valor;
    }

    // Método para imprimir todos los elementos de la cola
    imprimir() {
        let actual = this.primero;
        const elementos = [];
        while (actual !== null) {
            elementos.push(actual.valor);
            actual = actual.siguiente;
        }
        console.log(elementos.join(', '));
        return elementos.join(', ');
    }

    // Método para vaciar la cola
    vaciar() {
        this.primero = null;
        this.ultimo = null;
        this.tamano = 0;
    }

    // Método para obtener el último elemento sin sacarlo de la cola
    obternerUltimo() {
        return this.ultimo !== null ? this.ultimo.valor : null;
    }

    generarAleatorio(valor) {
        for (let i = 0; i < valor; i++){
            const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
            this.encolar(numeroAleatorio);
        }

    }

    mayor() {
        let actual = this.primero;
        let mayor = Number.NEGATIVE_INFINITY;
        while (actual !== null) {
            if (actual.valor > mayor) {
                mayor = actual.valor;
            }
            actual = actual.siguiente;
        }
        return mayor;
    }

    menor() {
        let actual = this.primero;
        let menor = Number.POSITIVE_INFINITY;
        while (actual !== null) {
            if (actual.valor < menor) {
                menor = actual.valor;
            }
            actual = actual.siguiente;
        }
        return menor;
    }

    segundoMayor() {
        let actual = this.primero;
        let mayor = Number.NEGATIVE_INFINITY;
        let segundoMayor = Number.NEGATIVE_INFINITY;
        while (actual !== null) {
            if (actual.valor > mayor) {
                segundoMayor = mayor;
                mayor = actual.valor;
            } else if (actual.valor > segundoMayor && actual.valor !== mayor) {
                segundoMayor = actual.valor;
            }
            actual = actual.siguiente;
        }
        return segundoMayor;
    }

    segundoMenor() {
        let actual = this.primero;
        let menor = Number.POSITIVE_INFINITY;
        let segundoMenor = Number.POSITIVE_INFINITY;
        while (actual !== null) {
            if (actual.valor < menor) {
                segundoMenor = menor;
                menor = actual.valor;
            } else if (actual.valor < segundoMenor && actual.valor !== menor) {
                segundoMenor = actual.valor;
            }
            actual = actual.siguiente;
        }
        return segundoMenor;
    }

    sumarElementos() {
        let actual = this.primero;
        let suma = 0;
        while (actual !== null) {
            suma += Number(actual.valor);
            actual = actual.siguiente;
        }
        return suma;
    }

    cantidadElementos() {
        return this.tamano;
    }

    verificarElemento(valor) {
        let actual = this.primero;
        while (actual !== null) {
            if (actual.valor == valor) {
                return true;
            }
            actual = actual.siguiente;
        }
        return false;
    }

    promedio() {
        let actual = this.primero;
        let suma = 0;
        let contador = 0;
        while (actual !== null) {
            suma += Number(actual.valor);
            contador++;
            actual = actual.siguiente;
        }
        return contador === 0 ? 0 : Math.round(suma / contador);
    }

    mayoresPromedio() {
        const promedio = this.promedio();
        let actual = this.primero;
        const mayores = [];
        while (actual !== null) {
            if (actual.valor > promedio) {
                mayores.push(actual.valor);
            }
            actual = actual.siguiente;
        }
        return mayores;
    }

    colaUnica() {
        let cu = new Cola();
        let valoresVistos = new Set();

        for (let actual = this.primero; actual !== null; actual = actual.siguiente) {
            if (!valoresVistos.has(actual.valor)) {
                valoresVistos.add(actual.valor);
                cu.encolar(actual.valor);
            }
        }

        return cu;
    }

    eliminarElemento(valor) {
        let actual = this.primero;
        let anterior = null;
        while (actual !== null) {
            if (actual.valor == valor) {
                if (anterior === null) {
                    this.primero = actual.siguiente;
                } else {
                    anterior.siguiente = actual.siguiente;
                }
                if (actual === this.ultimo) {
                    this.ultimo = anterior;
                }
                this.tamano--;
                return true;
            }
            anterior = actual;
            actual = actual.siguiente;
        }
        return false;
    }

    buscarPosicion(valorBuscado) {
        let actual = this.primero;
        let posicion = 1;

        while (actual !== null) {
            if (actual.valor == valorBuscado) {
                return posicion;
            }
            actual = actual.siguiente;
            posicion++;
        }

        return -1;
    }

    invertirCola() {
        let pilaAuxiliar = [];
        let actual = this.primero;
        while (actual !== null) {
            pilaAuxiliar.push(actual.valor);
            actual = actual.siguiente;
        }
        this.vaciar();
        while (pilaAuxiliar.length > 0) {
            this.encolar(pilaAuxiliar.pop());
        }
    }

    ordenarAscendente() {
    let actual = this.primero;
    const valores = [];
    while (actual !== null) {
        valores.push(actual.valor);
        actual = actual.siguiente;
    }
    valores.sort((a, b) => a - b);
    this.vaciar();
    for (let valor of valores) {
        this.encolar(valor);
    }
}


}
const c = new Cola();

function cencolar() {
    var nn=numero.value;
    if (nn === "") {
        alert("Por favor ingrese un valor para encolar.");
        return;
    }
    c.encolar(nn);
    imprimir();
    //nuevo.val("0");
}
function descolar() {
    c.descolar();
    imprimir();
}
function primero() {
    if (c.obtenerPrimero() === null) {
        alert("La cola está vacía.");
        return;
    }
    document.getElementById("imprimir").innerText = c.obtenerPrimero();
}
function quitarPrimero() {
    if (c.obtenerPrimero() === null) {
        alert("La cola está vacía.");
        return;
    }
    c.quitarPrimero();
    imprimir();
}
function imprimir() {
    document.getElementById("imprimir").innerText = c.imprimir();
}
function vaciar() {
    c.vaciar();
    imprimir();
}
function ultimo() {
    if (c.ultimo === null) {
        alert("La cola está vacía.");
        return;
    }
    document.getElementById("imprimir").innerText = c.obternerUltimo();
}
function generarAleatorio() {
    var nn=prompt("Cantidad de números aleatorios a generar:");
    if (nn === "") {
        alert("Por favor ingrese un valor para generar números aleatorios.");
        return;
    } 
    c.generarAleatorio(nn);
    imprimir();
}
function mayor() {
    if (c.tamano === 0) {
        alert("La cola está vacía.");
        return;
    }
    document.getElementById("imprimir").innerText = "El número mayor es " + c.mayor();;
}
function menor() {
    if (c.tamano === 0) {
        alert("La cola está vacía.");
        return;
    }
    document.getElementById("imprimir").innerText = "El número menor es " + c.menor();;
}
function segundoMayor() {
    if (c.tamano === 0) {
        alert("La cola está vacía.");
        return;
    }
    document.getElementById("imprimir").innerText = "El segundo número mayor es " + c.segundoMayor();;
}
function segundoMenor() {
    if (c.tamano === 0) {
        alert("La cola está vacía.");
        return;
    }
    document.getElementById("imprimir").innerText = "El segundo número menor es " + c.segundoMenor();;
}
function sumarElementos() {
    if (c.tamano === 0) {
        alert("La cola está vacía.");
        return;
    }
    document.getElementById("imprimir").innerText = "La suma de los elementos es " + c.sumarElementos();;
}
function cantidadElementos() {
    document.getElementById("imprimir").innerText = "La cantidad de elementos es " + c.cantidadElementos();;
}
function verificarElemento() {
    var nn=prompt("Ingrese el valor a verificar:");
    if (nn === "") {
        alert("Por favor ingrese un valor para verificar.");
        return;
    }
    var existe = c.verificarElemento(nn);
    if (existe) {
        document.getElementById("imprimir").innerText = "El elemento " + nn + " existe en la cola.";
    } else {
        document.getElementById("imprimir").innerText = "El elemento " + nn + " no existe en la cola.";
    }
}
function promedio() {
    if (c.tamano === 0) {
        alert("La cola está vacía.");
        return;
    }
    document.getElementById("imprimir").innerText = "El promedio es " + c.promedio();;
}
function mayoresPromedio() {
    if (c.tamano === 0) {
        alert("La cola está vacía.");
        return;
    }
    var mayores = c.mayoresPromedio();
    document.getElementById("imprimir").innerText = "Números mayores al promedio: " + mayores.join(', ');;
}
function colaUnica() {
    var cu = c.colaUnica();
    document.getElementById("imprimir").innerText = "Cola con elementos únicos: " + cu.imprimir();;
}
function eliminarElemento() {
    var nn=prompt("Ingrese el valor a eliminar:");
    if (nn === "") {
        alert("Por favor ingrese un valor para eliminar.");
        return;
    }
    var eliminado = c.eliminarElemento(nn);
    if (eliminado) {
        document.getElementById("imprimir").innerText = "El elemento " + nn + " ha sido eliminado.";
    } else {
        document.getElementById("imprimir").innerText = "El elemento " + nn + " no se encontró en la cola.";
    }
    imprimir();
}
function buscarPosicion() {
    var nn=prompt("Ingrese el valor a buscar su posición:");
    if (nn === "") {
        alert("Por favor ingrese un valor para buscar su posición.");
        return;
    }
    var posicion = c.buscarPosicion(nn);
    if (posicion !== -1) {
        document.getElementById("imprimir").innerText = "El elemento " + nn + " se encuentra en la posición " + posicion + ".";
    } else {
        document.getElementById("imprimir").innerText = "El elemento " + nn + " no se encontró en la cola.";
    }
}
function invertirCola() {
    c.invertirCola();
    imprimir();
}
function ordenarAscendente() {
    c.ordenarAscendente();
    imprimir();
}