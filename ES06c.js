function triangoloTartaglia(righe) {
    let triangolo = [];
    for (let i = 0; i < righe; i++) {
        triangolo[i] = [];
        triangolo[i][0] = 1;
        triangolo[i][i] = 1;

        for (let j = 1; j < i; j++) {
            triangolo[i][j] = triangolo[i - 1][j - 1] + triangolo[i - 1][j];
        }
    }

    const larghezza = 4;

    for (let i = 0; i < righe; i++) {
        let riga = "";

        let spazi = " ".repeat((righe - i - 1) * (larghezza / 2));
        riga += spazi;

        for (let j = 0; j <= i; j++) {
            riga += String(triangolo[i][j]).padStart(larghezza, " ");
        }

        console.log(riga);
    }
}
