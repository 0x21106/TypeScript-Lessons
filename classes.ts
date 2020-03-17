class Kisi {
    private _isim:string
    
    get isim():string {
        return `Sayın ${this._isim}`
    }
    
    set isim(ad:string) {
        this._isim = ad
    }
}

class Musteri extends Kisi {
    satisYap() {
        console.log("Satış Yapıldı")
    }
}

class Personel extends Kisi {
    maasOde() {
        console.log("Maaş Ödendi")
    }
}

let musteri = new Musteri()
musteri.isim = "Ayxan"
console.log(musteri.isim)