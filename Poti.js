import { PICTURES } from "./poti_pictures.js";
class Poti {
  #ero;
  #DivElem;
  potihely
  #kep
  constructor(DivElem, potihely) {
    this.#DivElem = DivElem;
    this.#ero = this.eroGeneral();
    this.#DivElem.append(this.poti());
    this.potihely = potihely;
    this.#kep = this.poti()
    console.log(potihely)
    this.potimozog()
  }

  eroGeneral() {
    this.#ero = Math.floor(Math.random() * 5) + 2;
    return this.#ero
  }
  poti() {
    let kep;
    for (let index = 0; index < 4; index++) {
      kep = `<img src=" ${
        PICTURES[Math.floor(Math.random() * PICTURES.length)]
      }"  >`;
    }
    return kep;
  }

  potimozog() {
    setInterval(() => {
      //this.#divLista[this.#potihely] = this.#divLista[this.#potihely-1];
      this.potihely--;
      if (this.potihely < 0) {
        this.potihely = 0;
      }
      if (this.potihely % 10 == 0) {
        /* this.potiElkap(); */
        console.log(this.potihely);
      }
      this.esemenytrigger()
    }, 1000);
  }
  esemenytrigger() {
    const esemeny = new CustomEvent("potimozgas", {
      detail: this,
    });
    window.dispatchEvent(esemeny);
  }
}
export default Poti;
