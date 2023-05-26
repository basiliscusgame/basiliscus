import { PICTURES } from "./poti_pictures.js"
class Poti{
    #ero
    #DivElem
    constructor(DivElem, kep){
        this.#DivElem = DivElem
        this.#ero = this.eroGeneral();
        this.#DivElem.append(this.poti())
    }

    eroGeneral(){
        this.#ero = Math.floor(Math.random()*5)+2
    }
    poti() {
        let kep
        for (let index = 0; index < 4; index++) {
          kep = `<img src=" ${
            PICTURES[Math.floor(Math.random() * PICTURES.length)]
          }"  >`;
          
        }
        return kep
      }


}
export default Poti;
