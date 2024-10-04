var Mezzo = /** @class */ (function () {
    function Mezzo(tipo, IDUnico, stato) {
        if (stato === void 0) { stato = "disponibile"; }
        this.stato = "disponibile";
        this.tipo = tipo;
        this.IDUnico = IDUnico;
        this.stato = stato;
    }
    Mezzo.prototype.assegnaUtente = function (utente) {
        utente.prenotaMezzo(this);
        this.stato = "in uso";
        console.log("il mezzo ".concat(this.tipo, " con ID ").concat(this.IDUnico, " e\u0300 ").concat(this.stato, "  dall'utente ").concat(utente.nome));
    };
    return Mezzo;
}());
var Utente = /** @class */ (function () {
    function Utente(nome, cognome, email, metodoDiPagamento) {
        this.nome = nome;
        this.cognome = cognome;
        this.email = email;
        this.metodoDiPagamento = metodoDiPagamento;
    }
    Utente.prototype.prenotaMezzo = function (mezzo) {
        if (mezzo.stato === "disponibile") {
            mezzo.stato = "in uso";
            console.log("il mezzo ".concat(mezzo.tipo, " con ID ").concat(mezzo.IDUnico, " e\u0300 ").concat(mezzo.stato, "  dall'utente ").concat(this.nome));
        }
        else {
            console.log("il mezzo ".concat(mezzo.tipo, " con ID ").concat(mezzo.IDUnico, " non e\u0300 disponibile, gi\u00E0 in uso da un'altro utente"));
        }
    };
    return Utente;
}());
var Citta = /** @class */ (function () {
    function Citta(nomeCitta) {
        this.nomeCitta = nomeCitta;
        this.elencoMezziDisponibili = [];
    }
    Citta.prototype.aggiungiMezzo = function (mezzo) {
        this.elencoMezziDisponibili.push(mezzo);
        console.log("il mezzo ".concat(mezzo.tipo, " con ID ").concat(mezzo.IDUnico, " e\u0300 stato aggiunto alla citta ").concat(this.nomeCitta));
    };
    return Citta;
}());
var bici = new Mezzo("bici", 1);
var monopattino = new Mezzo("monopattino", 2);
var bici2 = new Mezzo("bici", 3);
var fabio = new Utente("fabio", "bianchi", "IqOxG@example.com", "carta di credito");
var lorenzo = new Utente("lorenzo", "bianchi", "IqOx2@example.com", "contanti");
var Napoli = new Citta("Napoli");
Napoli.aggiungiMezzo(bici);
Napoli.aggiungiMezzo(monopattino);
Napoli.aggiungiMezzo(bici2);
fabio.prenotaMezzo(bici);
fabio.prenotaMezzo(monopattino);
lorenzo.prenotaMezzo(bici2);
lorenzo.prenotaMezzo(bici);
