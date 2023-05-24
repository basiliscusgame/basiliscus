import { PICTURES } from "./poti_pictures.js"
class Poti{
    #ero
    #DivElem
    constructor(DivElem, kep){
        this.#DivElem = $("article")
        this.#ero = this.eroGeneral();
        DivElem.append(`<img src ="${PICTURES[0]}" alt = "#" >`)
    }

    eroGeneral(){
        this.#ero = Math.floor(Math.random()*5)+2
    }



}
export default Poti;
