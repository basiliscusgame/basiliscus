class Harry {
  #eletero;
  #varazsero;
  #kep;
  constructor() {
    this.#kep = `<img src="Harry/seprusharry.png" id = "harry">`;
    this.#eletero = 5;
    this.#varazsero = 2;
  }

  elhelyez(hova) {
    hova.append(this.#kep);
  }
 

  potik() {}

  esemenyTrigger() {
    const esemeny = new CustomEvent("keydown", {
      detail: this,
    });
    window.dispatchEvent(esemeny);
  }
}

export default Harry;
