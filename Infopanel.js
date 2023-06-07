class Infopanel{

constructor(szuloelem){

    szuloelem.append(`<h1 class="pontok"></h1>`)
    szuloelem.append(`<h1 id = "vege"></h1>`);
    this.pontok = $(".pontok")
    this.vege = $("#vege");

}

setPontBeallitas(ponti) {
    this.pontok.html(ponti).append(" varázserő");
}

setVege() {
    this.vege.html("vége a játéknak");
  }

}
export default Infopanel