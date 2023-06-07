import Poti from "./Poti.js";
import JatekterELEM from "./JatekterELEM.js";
import Harry from "./Harry.js";
import Voldi from "./Voldi.js";
import Info from "./info.js";
class JatekTer {
  #lista = [];
  #divLista = [];
  #SzuloElem;
  #elkapottPotik;
  potihely;
  harryHely;
  #jatekVegeBool;
  constructor() {
    this.#jatekVegeBool = false;
    this.#SzuloElem = $("article");
    const Infopanel = $("header");
    const info = new Info(Infopanel);
    this.lista_init();
    this.#elkapottPotik = 0;
    $(window).on("potimozgas", (event) => {
      if (this.#jatekVegeBool) {
        return;
      }
      /*   
     this.#divLista[this.potihely].getDiv().empty()
      this.potihely = event.detail.potihely;
      this.#lista[this.potihely] = 1; */
      // this.#divLista[this.potihely].setDiv(event.target.getPotiDiv())
      this.#lista[this.potihely] = 0;
      //  console.log("poti lép");
      //console.log(event.detail.getPotiDiv(), event.detail.potihely);
      // console.log(this.#divLista[event.detail.potihely]);
      /*  if (this.potihely %10 ==0) {
        this.potihely = -1;
       
      } */
      if (event.detail.potihely >= 0) {
        if (event.detail.potihely !== this.harryHely) {
          //    console.log(event.detail.potihely)
          this.#divLista[event.detail.potihely].setDiv(
            event.detail.getPotiDiv()
          );
          this.#lista[this.potihely] = 1;
        } else {
          this.#elkapottPotik++;
        }
        //info.potikSzamaIr(this.#elkapottPotik);

      }

      if (
        event.detail.potihely % 10 == 0 &&
        this.#lista[event.detail.potihely] != 2
      ) {
        this.#lista[event.detail.potihely] = 0;
        this.#divLista[event.detail.potihely].getDiv().empty();
      }
      // delete this.#divLista[event.detail.potihely]
      this.potiElkap(this.harryHely);
      // console.log(this.#elkapottPotik);
      this.jatekVege();
    });
  }

  lista_init() {
    for (let index = 0; index < 100; index++) {
      this.#lista[index] = 0;
      this.#divLista[index] = new JatekterELEM(this.#SzuloElem); //itt vannak a játéktér elemek
    }
    this.randompoti();

    $(window).on("keydown", (e) => {
      if (this.#jatekVegeBool) {
        return;
      }
      this.#divLista[this.harryHely].getDiv().empty();
      this.#lista[this.harryHely] = 0;
      if (e.keyCode === 38) {
        //console.log(e.code);
        if (this.harryHely == 0) {
          this.harryHely = 0;
        } else {
          this.harryHely = this.harryHely - 10;
        }
        // console.log("fel: ", hely);
      } else if (e.keyCode === 40) {
        //console.log(e.code);
        if (this.harryHely == 90) {
          this.harryHely = 90;
        } else {
          this.harryHely = this.harryHely + 10;
        }
        // console.log("le: ", hely);
        this.potiElkap(this.harryHely);
        // this.jatekVege();
      }

      this.harry.elhelyez(this.#divLista[this.harryHely].getDiv());
      this.#lista[this.harryHely] = 2;
      // console.log(this.#lista);
      //console.log(this.#lista);
    });

    this.harryHely = Math.floor(Math.random() * 10) * 10;
    this.harry = new Harry();
    this.harry.elhelyez(this.#divLista[this.harryHely].getDiv());
    this.#lista[this.harryHely] = 2;
  }

  randompoti() {
    if (this.#jatekVegeBool) {
      return;
    }
    let index = 0;
    while (index < 4 && !this.#jatekVegeBool) {
      this.potihely = Math.floor(Math.random() * this.#lista.length);

      if (this.potihely % 10 == 0) {
        index--;
      } else {
        // console.log(this.potihely);
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
      console.log("ELKAOTT POTIK SZÁMA: " + this.#elkapottPotik);
      info.potikSzamaIr(this.#elkapottPotik);
    }
  }

  jatekVege() {
    if (this.#elkapottPotik == 2) {
      const voldi = new Voldi();
      for (let index = 0; index < this.#lista.length; index++) {
        console.log("POTIK ELTÜNTETÉSE", this.#lista);
        if (this.#lista[index] == 1) {
          delete this.#divLista[index];
        }
      }
      voldi.elhelyez(this.#divLista[69].getDiv());
      this.#jatekVegeBool = true;

      $(voldi).on("click", () => {
        this.voldi.elet = false;
        info.setVege();
        //this.#jatekVegeBool = true
      });
      //this.elethalal(voldi);
      if (voldi.elet == false) {
        console.log("vegee");
        info.setVege();
      }
    }
  }
}
export default JatekTer;
