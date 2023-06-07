class Infopanel{

constructor(szuloelem){

    szuloelem.append(`<h1 class="pontok"></h1>`)
    this.pontok = (".pontok")

}

setPontBeallitas(ponti) {
    this.pontok.html(ponti).append(" pont");
}

}
export default Infopanel