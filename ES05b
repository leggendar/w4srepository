console.log("=== ESERCITAZIONE 1: BIBLIOTECA DI LIBRI ===\n");

const libro1 = {
  titolo: "Il Signore degli Anelli",
  autore: "J.R.R. Tolkien",
  anno: 1954,
  genere: "Fantasy",
  pagine: 1178,
  disponibile: true
};

const libro2 = {
  titolo: "1984",
  autore: "George Orwell",
  anno: 1949,
  genere: "Distopia",
  pagine: 328,
  disponibile: false
};

console.log(`Titolo: ${libro1.titolo} - Autore: ${libro1.autore}`);

libro2.disponibile = true;

libro1.isbn = "978-0544003415";

const libro3 = {
  titolo: "Il Nome della Rosa",
  autore: "Umberto Eco",
  anno: 1980,
  pagine: 503,
  disponibile: true,
  
  getInfo: function() {
    return `${this.titolo} di ${this.autore} (${this.anno})`;
  },
  
  presta: function() {
    if (this.disponibile) {
      this.disponibile = false;
      console.log(`Libro prestato: ${this.titolo}`);
    } else {
      console.log("Libro non disponibile");
    }
  },
  
  restituisci: function() {
    this.disponibile = true;
    console.log(`Libro restituito: ${this.titolo}`);
  }
};

console.log(libro3.getInfo());
libro3.presta();
libro3.presta();
libro3.restituisci();

const biblioteca = [libro1, libro2, libro3];

function cercaPerAutore(libri, autore) {
  return libri.filter(libro => libro.autore === autore);
}

function libriDisponibili(libri) {
  return libri.filter(libro => libro.disponibile);
}

function stampaBiblioteca(libri) {
  libri.forEach(libro => {
    console.log(`Titolo: ${libro.titolo}`);
    console.log(`Autore: ${libro.autore}`);
    console.log(`Anno: ${libro.anno}`);
    console.log(`Disponibile: ${libro.disponibile ? "Sì" : "No"}`);
    console.log("---");
  });
}

console.log("\n=== CATALOGO ===");
stampaBiblioteca(biblioteca);

function statisticheBiblioteca(libri) {
  const totaleLibri = libri.length;

  const libriDisponibiliCount = libri.filter(l => l.disponibile).length;

  const totalePagine = libri.reduce((somma, libro) => somma + libro.pagine, 0);

  const mediaPagine = Math.round(totalePagine / totaleLibri);

  const autori = [...new Set(libri.map(libro => libro.autore))];

  return {
    totaleLibri,
    libriDisponibili: libriDisponibiliCount,
    totalePagine,
    mediaPagine,
    autori
  };
}

const stats = statisticheBiblioteca(biblioteca);

console.log("\n=== STATISTICHE ===");
console.log("Totale libri:", stats.totaleLibri);
console.log("Libri disponibili:", stats.libriDisponibili);
console.log("Totale pagine:", stats.totalePagine);
console.log("Media pagine:", stats.mediaPagine);
console.log("Autori:", stats.autori.join(", "));
