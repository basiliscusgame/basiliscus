import Poti from "./Poti.js";
import JatekterELEM from "./JatekterELEM.js"
class JatekTer {
  #lista = [];
  constructor() {
    this.#lista = this.lista_init();
    console.log(this.#lista);
    //is.randompoti()
    console.log(this.randompoti())
    const pot = new Poti()
  }

  
  lista_init() {
    for (let index = 0; index < 100; index++) {
      this.#lista[index]= 0;
      //console.log(this.#lista[index])
    }
    return this.#lista
    
  }

  randompoti(){
    for (let index = 0; index < 4; index++) {
        const hely = Math.floor(Math.random()*this.#lista.length)
        this.#lista[hely] = 1
    }
    return this.#lista
  }
  poti(){
    for (let index = 0; index < 4; index++) {
        const kep = `<img src=" ${PICTURES[Math.floor(Math.random()*PICTURES.length)]}"  >`
    }
  }



}
export default JatekTer;
