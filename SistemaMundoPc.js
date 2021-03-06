class DispositivoEntrada {
  constructor(tipoEntrada, marca) {
    this._tipoEntrada = tipoEntrada;
    this._marca = marca;
  }

  get tipoEntrada() {
    return this._tipoEntrada;
  }
  set tipoEntrada(tipoEntrada) {
    this._tipoEntrada = tipoEntrada;
  }

  get marca() {
    return this._marca;
  }
  set marca(marca) {
    this._marca = marca;
  }
}

class Raton extends DispositivoEntrada {
  static contadorRatones = 0;

  constructor(tipoEntrada, marca) {
    super(tipoEntrada, marca);
    this._idRaton = ++Raton.contadorRatones;
  }
  get idRaton() {
    return this._idRaton;
  }
  toString() {
    return `Ratón: [iD_Ratón: ${this._idRaton}, Tipo_Entrada: ${this._tipoEntrada}, Marca: ${this._marca}]`;
  }
}

class Teclado extends DispositivoEntrada {
  static contadorTeclados = 0;

  constructor(tipoEntrada, marca) {
    super(tipoEntrada, marca);
    this._idTeclado = ++Teclado.contadorTeclados;
  }
  get idTeclado() {
    return this._idTeclado;
  }

  toString() {
    return `Teclado: [iD_Teclado: ${this._idTeclado}, Tipo_Entrada: ${this._tipoEntrada}, Marca: ${this._marca}]`;
  }
}

class Monitor {
  static contadorMonitores = 0;
  constructor(marca, tamano) {
    this._idMonitor = ++Monitor.contadorMonitores;
    this._marca = marca;
    this._tamano = tamano;
  }
  get idMonitor() {
    return this._idMonitor;
  }
  toString() {
    return `Monitor: [ID_Monitor: ${this._idMonitor}, Tamaño: ${this._tamano}", Marca: ${this._marca}]`;
  }
}

class Computadora {
  static contadorComputadora = 0;

  constructor(nombre, monitor, raton, teclado) {
    this._idComputadora = ++Computadora.contadorComputadora;
    this._nombre = nombre;
    this._monitor = monitor;
    this._raton = raton;
    this._teclado = teclado;
  }

  toString() {
    return `Computadora: ${this._idComputadora}: ${this._nombre} \n ${this._monitor} \n ${this._raton} \n ${this._teclado} \n`;
  }
}

class Orden {
  static contadorOrdenes = 0;

  constructor() {
    this._idOrden = ++Orden.contadorOrdenes;
    this._computadoras = [];
  }
  get idOrder() {
    return this._idOrden;
  }
  agregarComputadora(computadora) {
    this._computadoras.push(computadora);
  }
  mostrarOrden(){
      let computadorasOrden = '';
      for(let computadora of this._computadoras){
          computadorasOrden += `${computadora}`
      }
    return console.log(`Orden: ${this._idOrden} \n ${this._computadoras} \n`);
    
  }
}
let raton1 = new Raton("Usb", "Logitech");
let raton2 = new Raton("Usb", "RedDragon");
console.log(raton1.toString());

let teclado1 = new Teclado("Bluetooth", "Dell");
let teclado2 = new Teclado("Bluetooth", "Logitech");
console.log(teclado1.toString());

let monitor1 = new Monitor("HP", "27");
let monitor2 = new Monitor("Z-edge", "24");
console.log(monitor1.toString());

let computadora1 = new Computadora("Master Raice", monitor1, raton1, teclado1);
let computadora2 = new Computadora("Master kk", monitor2, raton2, teclado2);
console.log(computadora1.toString());

let orden1 = new Orden();
orden1.agregarComputadora(computadora1)
orden1.agregarComputadora(computadora2)

orden1.mostrarOrden()