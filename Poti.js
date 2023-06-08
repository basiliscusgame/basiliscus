import { PICTURES } from "./poti_pictures.js";
class Poti {
  #ero;
  #DivElem;
  potihely;
  #kep;
  constructor(DivElem, potihely) {
    this.#DivElem = DivElem;
    this.#ero = this.eroGeneral();
    this.#DivElem.append(
      `<div><img src=" ${
        PICTURES[Math.floor(Math.random() * PICTURES.length)]
      }"  ></div>`
    );
    this.potiElem = this.#DivElem.children("div").children("img");
    this.potihely = potihely;

    console.log(potihely);
    this.potimozog();
  }

  eroGeneral() {
    this.#ero = Math.floor(Math.random() * 5) + 2;
    return this.#ero;
  }

  setDivElem(value) {
    this.#DivElem = value;
  }

  getPotiDiv() {
    return this.potiElem;
  }
  setHely(value) {
    this.potihely = value;
  }

  potimozog() {
    let my = setInterval(() => {
      this.potihely--;
      if (this.potihely < 0) {
        this.potihely = 0;
        clearInterval(my);
      }

      console.log(this.potihely);
      this.esemenytrigger();
    }, 500);
  }
  esemenytrigger() {
    const esemeny = new CustomEvent("potimozgas", {
      detail: this,
    });
    window.dispatchEvent(esemeny);
  }
}
export default Poti;
