import { PICTURES } from "./poti_pictures.js"
class Poti{
    #ero
    #x
    #y
    #DivElem
    constructor(DivElem,kep){
<<<<<<< HEAD
       
        this.#ero = ero
=======
        this.#DivElem = $("article")
        this.#ero = this.eroGeneral();
>>>>>>> a0288b006d90cb8038bc218fa57acbc80fc0e2ac
        this.#x= x
        this.#y = y
        DivElem.append(`<img src ="${PICTURES[0]}" alt = "#" >`)
    }

    eroGeneral(){
        this.#ero = Math.floor(Math.random()*5)+2
    }

}
export default Poti
