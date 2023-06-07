class JatekterELEM {
  #div;
 
  constructor(SzuloElem) {
    SzuloElem.append(`<div></div>`)
    this.#div = SzuloElem.children("div:last-child");
    
  }
  getDiv(){
    return this.#div
  }
  setDiv(elem){
    //console.log(elem,this.#div)
    this.#div.html(elem)
  }
  
}

export default JatekterELEM;
