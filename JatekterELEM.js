class JatekterELEM {
  #div;
  #divLista
  constructor(SzuloElem,divLista) {
    SzuloElem.append(`<div></div>`)
    this.#div = SzuloElem.children("div:last-child");
    this.#divLista = divLista;
  }
  getDiv(){
    return this.#div
  }
  
}

export default JatekterELEM;
