class JatekterELEM {
  #div;
  constructor(SzuloElem) {
    SzuloElem.append(`<div></div>`)
    this.#div = SzuloElem.children("div:last-child");
  }
  getDiv(){
    return this.#div
  }
  setDiv(value) {
    this.#div.html = value;
  }
}

export default JatekterELEM;
