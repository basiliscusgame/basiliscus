import Poti from "./Poti.js";
import JatekterELEM from "./JatekterELEM.js";
import Harry from "./Harry.js";
import Voldi from "./Voldi.js";
import Infopanel from "./Infopanel.js";

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
    this.lista_init();
    this.#elkapottPotik = 0;
    this.infoelem = $("header");
    this.info = new Infopanel(this.infoelem);
    this.info.setPontBeallitas(0, " varázserő");
    $(window).on("potimozgas", (event) => {
      if (this.#jatekVegeBool) {
        return;
      }
      this.#lista[this.potihely] = 0;

      if (event.detail.potihely >= 0) {
        if (event.detail.potihely !== this.harryHely) {
          //    console.log(event.detail.potihely)
          this.#divLista[event.detail.potihely].setDiv(
            event.detail.getPotiDiv()
          );
          this.#lista[this.potihely] = 1;
        } else {
          this.#elkapottPotik++;
          this.info.setPontBeallitas(this.#elkapottPotik, " varázserő");
        }
      }

      if (
        event.detail.potihely % 10 == 0 &&
        this.#lista[event.detail.potihely] != 2
      ) {
        this.#lista[event.detail.potihely] = 0;
        this.#divLista[event.detail.potihely].getDiv().empty();
      }

      this.potiElkap(this.harryHely);

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
        if (this.harryHely == 0) {
          this.harryHely = 0;
        } else {
          this.harryHely = this.harryHely - 10;
        }
      } else if (e.keyCode === 40) {
        if (this.harryHely == 90) {
          this.harryHely = 90;
        } else {
          this.harryHely = this.harryHely + 10;
        }

        this.potiElkap(this.harryHely);
      }

      this.harry.elhelyez(this.#divLista[this.harryHely].getDiv());
      this.#lista[this.harryHely] = 2;
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
        const potiii = new Poti(
          this.#divLista[this.potihely].getDiv(),
          this.potihely
        );

        this.#lista[this.potihely] = 1;

        index++;
      }
    }
  }

  potiElkap(harryHely) {
    if (this.#lista[harryHely] == this.#lista[this.potihely]) {
      this.#elkapottPotik++;
      console.log("ELKAOTT POTIK SZÁMA: " + this.#elkapottPotik);
    }
  }

  jatekVege() {
    if (this.#elkapottPotik == 6) {
      const voldi = new Voldi();
      for (let index = 0; index < this.#lista.length; index++) {
        console.log("POTIK ELTÜNTETÉSE", this.#lista);
        if (this.#lista[index] == 1) {
          delete this.#divLista[index];
        }
      }

      this.#jatekVegeBool = true;
      voldi.elhelyez(this.#divLista[69].getDiv());

      this.#divLista[69].getDiv().on("click", () => {
        voldi.elet = false;
        this.info.setVege();
      });

      if (voldi.elet == false) {
        console.log("vegee");
        this.info.setVege();
      }
    }
  }
}
export default JatekTer;
