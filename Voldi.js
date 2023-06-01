class Voldi {
  #kep;
  #elet;
  constructor() {
    this.#kep = "Harry/voldemort.png";
    this.#elet = true;
  }

  elethalal() {
    if (
      this.#elet.on("click", () => {
        this.#elet = false;
      })
    )
      return this.#elet;
  }
}

export default Voldi;
