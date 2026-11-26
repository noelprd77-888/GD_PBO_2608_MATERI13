    const penyerang = {
    serang() {
        console.log(this.nama + " menyerang musuh.");
    }
};

const penyembuh = {
    sembuhkan() {
        console.log(this.nama + " menyembuhkan rekan.");
    }
};

const pelindung = {
    bertahan() {
        console.log(this.nama + " mengangkat perisai.");
    }
};

function applyCapabilities(Kelas, ...kemampuan) {
    Object.assign(Kelas.prototype, ...kemampuan);
}

class Ksatria {
    constructor(nama) {
        this.nama = nama;
    }
}

class Penyihir {
    constructor(nama) {
        this.nama = nama;
    }
}


applyCapabilities(Ksatria, penyerang, pelindung);
applyCapabilities(Penyihir, penyembuh);

const ksatria = new Ksatria("Ksatria_2608");
const penyihir1 = new Penyihir("Penyihir_2608");

ksatria.serang();
ksatria.bertahan();
penyihir1.sembuhkan();

console.log("Penyihir_2608 bisa menyerang? " +
    (typeof penyihir1.serang === "function"));

console.log("Ksatria_2608 bisa menyembuhkan? " +
    (typeof ksatria.sembuhkan === "function"));