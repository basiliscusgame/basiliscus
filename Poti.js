import { PICTURES } from "./poti_pictures.js";
class Poti {
  #ero;
  #DivElem;
  potihely
  #kep
  constructor(DivElem, potihely) {
    this.#DivElem = DivElem;
    this.#ero = this.eroGeneral();
    this.#DivElem.append( `<div><img src=" ${
      PICTURES[Math.floor(Math.random() * PICTURES.length)]
    }"  ></div>`);
    this.potiElem = this.#DivElem.children("div").children("img")
    this.potihely = potihely;
    //this.#kep = this.poti()
    console.log(potihely)
    this.potimozog()
  }
  megjelent(){
    console.log("valami")
  }
  eroGeneral() {
    this.#ero = Math.floor(Math.random() * 5) + 2;
    return this.#ero
  }
 /*  poti() {
    let kep;
  
      kep = `<img src=" ${
        PICTURES[Math.floor(Math.random() * PICTURES.length)]
      }"  >`;
   
    return kep;
  } */

  setDivElem(value){
    this.#DivElem = value
  }

  getPotiDiv(){
    return this.potiElem
  }
  setHely(value){
    this.potihely = value
  }

  potimozog() {
    setInterval(() => {
      //this.#divLista[this.#potihely] = this.#divLista[this.#potihely-1];
      this.potihely--;
      if (this.potihely < 0) {
        this.potihely = 0;
      }
     
      console.log(this.potihely);
      this.esemenytrigger()
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
