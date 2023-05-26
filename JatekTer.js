import Poti from "./Poti.js";
import JatekterELEM from "./JatekterELEM.js";
import Harry from "./Harry.js";
class JatekTer {
  #lista = [];
  #divLista = [];
  #SzuloElem;
  constructor() {
    this.#SzuloElem = $("article");
    this.lista_init();
    //console.log(this.#lista);
    //is.randompoti()
    console.log(this.randompoti());
    /* const pot = new Poti() */
    //console.log(this.#divLista);
    //console.log(this.#SzuloElem);
  }

  

  lista_init() {
    for (let index = 0; index < 100; index++) {
      this.#lista[index] = 0;
      this.#divLista[index] = new JatekterELEM(this.#SzuloElem);
    }

    $(window).on("keydown", (e) => {
      this.#divLista[hely].getDiv().empty()
      this.#lista[hely] = 0
      if(e.keyCode === 38){
        console.log(e.code);
        if(hely == 0){
          hely=0
        }else{
          hely = hely-10
        }
        console.log("fel: ",hely)
      }else if(e.keyCode === 40){
        console.log(e.code);
        if(hely == 90){
          hely=90
        }else{
          hely = hely + 10
        }
        console.log("le: ",hely)
      }
      
      this.harry.elhelyez(this.#divLista[hely].getDiv())
      this.#lista[hely] = 2
      console.log(this.#lista)
      
    });

    let hely = Math.floor(Math.random() * 10) *10;
    this.harry = new Harry();
    this.harry.elhelyez(this.#divLista[hely].getDiv());
    this.#lista[hely] = 2
  }
 

  randompoti() {
    let index = 0;
    while (index < 4) {
      const hely = Math.floor(Math.random() * this.#lista.length);
      if (hely % 10 == 0) {
        index--;
      } else {
        
   
        new Poti(this.#divLista[hely].getDiv());
        this.#lista[hely] = 1;
        index++;
      }
    }
  }
}
export default JatekTer;
