import Poti from "./Poti.js";
import JatekterELEM from "./JatekterELEM.js";
import { PICTURES} from "./poti_pictures.js";
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
  

  randompoti() {
    for (let index = 0; index < 4; index++) {
      const hely = Math.floor(Math.random() * this.#lista.length);
      this.#lista[hely] = new Poti(this.#divLista[hely].getDiv());
    }
    return this.#lista;
  }
}
export default JatekTer;
