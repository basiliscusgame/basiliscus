class JatekterELEM {
  #div;
  constructor(SzuloElem) {
    SzuloElem.append("<div></div>")
    this.#div = SzuloElem.children("div:last-child");
  }
}

export default JatekterELEM;
