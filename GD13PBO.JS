class Media {
    constructor(nama) {
        this.nama = nama;
    }

    info() {
        console.log("Media: " + this.nama);
    }
}

class MediaAudio extends Media {
    putar(menit) {
        throw new Error("Method putar() harus diimplementasikan.");
    }
}

class MediaBaca extends Media {
    baca(halaman) {
        throw new Error("Method baca() harus diimplementasikan.");
    }
}

class Podcast extends MediaAudio {
    putar(menit) {
        console.log(this.nama + " diputar selama " + menit + " menit.");
    }
}

class Ebook extends MediaBaca {
    baca(halaman) {
        console.log(this.nama + " dibaca sampai halaman " + halaman + ".");
    }
}

class LaguMP3 extends MediaAudio {
    putar(menit) {
        console.log(this.nama + " diputar selama " + menit + " menit.");
    }
}

function putarSemua(daftar) {
    daftar.forEach(media => media.putar(10));
}

function bacaSemua(daftar) {
    daftar.forEach(media => media.baca(25));
}

const podcast = new Podcast("Podcast_2608");
const ebook = new Ebook("Ebook_2608");
const lagu = new LaguMP3("Lagu_2608");

podcast.info();
ebook.info();
lagu.info();

putarSemua([podcast, lagu]);
bacaSemua([ebook]);