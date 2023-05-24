import Poti from "./Poti.js";
import JatekterELEM from "./JatekterELEM.js";
class JatekTer {
  #lista = [];
  #divLista = [];
  #SzuloElem;
  constructor() {
    this.#SzuloElem = $("article");
    this.lista_init();
    console.log(this.#lista);
    //is.randompoti()
    console.log(this.randompoti());
    /* const pot = new Poti() */
    console.log(this.#divLista);
    console.log(this.#SzuloElem);
  }

  lista_init() {
    for (let index = 0; index < 100; index++) {
      this.#lista[index] = 0;
      this.#divLista[index] = new JatekterELEM(this.#SzuloElem);

      //console.log(this.#lista[index])
    }
    let hely = Math.floor(Math.random() * 10);
    switch (hely) {
      case 0:
        hely = hely * 10;
        break;
      case 1:
        hely = hely * 10;
        break;
      case 2:
        hely = hely * 10;
        break;
      case 3:
        hely = hely * 10;
        break;
      case 4:
        hely = hely * 10;
        break;
      case 5:
        hely = hely * 10;
        break;
      case 6:
        hely = hely * 10;
        break;
      case 7:
        hely = hely * 10;
        break;
      case 8:
        hely = hely * 10;
        break;
      case 9:
        hely = hely * 10;
        break;

      default:
        break;
    }
  }

  randompoti() {
    for (let index = 0; index < 4; index++) {
      const hely = Math.floor(Math.random() * this.#lista.length);
      this.#divLista[hely] = new Poti(this.#divLista[hely].getDiv());
      this.#lista[hely] = 1;
    }
  }
}
export default JatekTer;
