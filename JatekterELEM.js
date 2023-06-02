class JatekterELEM {
  #div;
  #divLista
  constructor(SzuloElem) {
    SzuloElem.append(`<div></div>`)
    this.#div = SzuloElem.children("div:last-child");
    
  }
  getDiv(){
    return this.#div
  }
  
}

export default JatekterELEM;
