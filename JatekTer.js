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
      /*   
     this.#divLista[this.potihely].getDiv().empty()
      this.potihely = event.detail.potihely;
      this.#lista[this.potihely] = 1; */
      // this.#divLista[this.potihely].setDiv(event.target.getPotiDiv())
      this.#lista[this.potihely] = 0;
      console.log("poti lép");
      //console.log(event.detail.getPotiDiv(), event.detail.potihely);
     // console.log(this.#divLista[event.detail.potihely]);
      this.#divLista[event.detail.potihely].setDiv(event.detail.getPotiDiv());
      this.#lista[this.potihely] = 1;
    });
  }

  lista_init() {
    for (let index = 0; index < 100; index++) {
      this.#lista[index] = 0;
      this.#divLista[index] = new JatekterELEM(this.#SzuloElem); //itt vannak a játéktér elemek
    }
    this.randompoti();

    $(window).on("keydown", (e) => {
      this.#divLista[harryHely].getDiv().empty();
      this.#lista[harryHely] = 0;
      if (e.keyCode === 38) {
        //console.log(e.code);
        if (harryHely == 0) {
          harryHely = 0;
        } else {
          harryHely = harryHely - 10;
        }
       // console.log("fel: ", hely);
      } else if (e.keyCode === 40) {
        //console.log(e.code);
        if (harryHely == 90) {
          harryHely = 90;
        } else {
          harryHely = harryHely + 10;
        }
       // console.log("le: ", hely);
      }

      this.harry.elhelyez(this.#divLista[harryHely].getDiv());
      this.#lista[harryHely] = 2;
      console.log(this.#lista)
      //console.log(this.#lista);
    });

    let harryHely = Math.floor(Math.random() * 10) * 10;
    this.harry = new Harry();
    this.harry.elhelyez(this.#divLista[harryHely].getDiv());
    this.#lista[harryHely] = 2;
    
    this.potiElkap(harryHely);
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

  potiElkap(harryHely) {
    if (
     // this.#divLista[hely].getDiv() == this.#divLista[this.potihely].getDiv()
      this.#lista[harryHely] == this.#lista[this.potihely]

    ) {
      this.#elkapottPotik++;
      console.log("ELKAOTT POTIK SZÁMA: "+this.#elkapottPotik)
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
