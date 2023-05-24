import Poti from "./Poti.js";
import JatekterELEM from "./JatekterELEM.js";
class JatekTer {
  #lista = [];
  #divLista = [];
  #SzuloElem;
  constructor() {
    this.#SzuloElem = $("article");
    this.#lista = this.lista_init();
    console.log(this.#lista);
    //is.randompoti()
    console.log(this.randompoti());
    /* const pot = new Poti() */
    console.log(this.#divLista)
    
   console.log(this.#SzuloElem)
  }

  lista_init() {
    for (let index = 0; index < 100; index++) {
      this.#lista[index] = 0;
      this.#divLista[index] = new JatekterELEM(this.#SzuloElem);
      //console.log(this.#lista[index])
    }
    return this.#lista, this.#divLista;
  }
  poti() {
    for (let index = 0; index < 4; index++) {
      const kep = `<img src=" ${
        PICTURES[Math.floor(Math.random() * PICTURES.length)]
      }"  >`;
    }
  }

  randompoti() {
    for (let index = 0; index < 4; index++) {
      const hely = Math.floor(Math.random() * this.#lista.length);
      this.#lista[hely] = new Poti(this.#SzuloElem, this.poti());
    }
    return this.#lista;
  }
}
export default JatekTer;
