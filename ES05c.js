class BibliotecaPersistente {
  constructor(chiaveStorage = "biblioteca") {
    this.chiaveStorage = chiaveStorage;
    this.libri = [];
    this.carica();
  }

  aggiungiLibro(libro) {
    this.libri.push(libro);
    this.salva();
  }

  rimuoviLibro(titolo) {
    this.libri = this.libri.filter(
      l => l.titolo.toLowerCase() !== titolo.toLowerCase()
    );
    this.salva();
  }

  cercaLibro(titolo) {
    return this.libri.find(
      l => l.titolo.toLowerCase() === titolo.toLowerCase()
    );
  }

  salva() {
    storage.setItem(this.chiaveStorage, JSON.stringify(this.libri));
  }

  carica() {
    try {
      const dati = storage.getItem(this.chiaveStorage);
      if (dati) this.libri = JSON.parse(dati);
    } catch {
      this.libri = [];
    }
  }

  esportaJSON() {
    return JSON.stringify(this.libri, null, 2);
  }

  importaJSON(jsonString) {
    try {
      this.libri = JSON.parse(jsonString);
      this.salva();
    } catch (e) {
      console.error("Errore import:", e.message);
    }
  }

  getStatistiche() {
    const autori = new Set(this.libri.map(l => l.autore));
    const generi = new Set(this.libri.map(l => l.genere));
    const totalePagine = this.libri.reduce(
      (tot, l) => tot + (l.pagine || 0),
      0
    );

    return {
      totaleLibri: this.libri.length,
      autoriUnici: autori.size,
      totalePagine,
      generiUnici: generi.size
    };
  }
}
