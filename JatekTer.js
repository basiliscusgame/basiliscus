import Poti from "./Poti.js";
import JatekterELEM from "./JatekterELEM.js";
import Harry from "./Harry.js";
import Voldi from "./Voldi.js";
class JatekTer {
  #lista = [];
  #divLista = [];
  #SzuloElem;
  #elkapottPotik;
  voldi;
  potihely;
  constructor() {
    this.#SzuloElem = $("article");
    this.lista_init();
    $(window).on("potimozgas", (event) => {
      this.#lista[this.potihely] = 0;
     this.#divLista[this.potihely].getDiv().empty()
      this.potihely = event.detail.potihely;
      this.#lista[this.potihely] = 1;
      let szuloelem=this.#divLista[this.potihely].getDiv()
      delete event.target
     /* new Poti() */
      
      
    });
  }

  lista_init() {
    for (let index = 0; index < 100; index++) {
      this.#lista[index] = 0;
      this.#divLista[index] = new JatekterELEM(this.#SzuloElem);
    }
    this.randompoti();

    $(window).on("keydown", (e) => {
      this.#divLista[hely].getDiv().empty();
      this.#lista[hely] = 0;
      if (e.keyCode === 38) {
        console.log(e.code);
        if (hely == 0) {
          hely = 0;
        } else {
          hely = hely - 10;
        }
        console.log("fel: ", hely);
      } else if (e.keyCode === 40) {
        console.log(e.code);
        if (hely == 90) {
          hely = 90;
        } else {
          hely = hely + 10;
        }
        console.log("le: ", hely);
      }

      this.harry.elhelyez(this.#divLista[hely].getDiv());
      this.#lista[hely] = 2;
      //console.log(this.#lista);
    });

    let hely = Math.floor(Math.random() * 10) * 10;
    this.harry = new Harry();
    this.harry.elhelyez(this.#divLista[hely].getDiv());
    this.#lista[hely] = 2;

    // this.voldi = new Voldi()
  }

  randompoti() {
    let index = 0;
    while (index < 4 /*&& !jatekVege()*/) {
      this.potihely = Math.floor(Math.random() * this.#lista.length);

      if (this.potihely % 10 == 0) {
        index--;
      } else {
        console.log(this.potihely);
         const potiii = new Poti(
          this.#divLista[this.potihely].getDiv(),
          this.potihely
        );
       // potiii.potimozog();
        this.#lista[this.potihely] = 1;

        index++;
      }
    }
  }

  potiElkap() {
    if (
      this.#divLista[hely].getDiv() == this.#divLista[this.potihely].getDiv()
    ) {
      this.#elkapottPotik++;
    }
  }
  jatekVege() {
    if (this.#elkapottPotik == 6) {
      const voldi = new Voldi();
      if (voldi.elethalal() == false) {
        console.log("vegee");
      }
    }
  }
}
export default JatekTer;
