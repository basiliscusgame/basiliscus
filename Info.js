class Info {
  constructor(Infopanel) {
    Infopanel.append(`<p id="potik_szama"></p>`);
    Infopanel.append(`<p id = "vege"></p>`);
    this.potikSzamaIr = $("#potik_szama");

    this.vege = $("#vege");
  }
  setPotiIr(lepes) {
    this.potikSzamaIr.append("Potik száma:").html(lepes);
  }

  setVege(vege) {
    this.vege.html(vege).append("vége a játéknak");
  }
}
export default Info;
