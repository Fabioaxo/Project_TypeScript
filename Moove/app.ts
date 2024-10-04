interface IMezzo {
    tipo : string;
    IDUnico : number;
    stato : string;
    assegnaUtente(utente:IUtente):void;
}

interface IUtente {
    nome : string;
    cognome : string;
    email : string;
    metodoDiPagamento : string;
    prenotaMezzo(mezzo:IMezzo):void;
}

interface ICitta {
    nomeCitta : string;
    elencoMezziDisponibili : IMezzo[];
    aggiungiMezzo(mezzo:IMezzo):void;
}

class Mezzo implements IMezzo {
    tipo : string;
    IDUnico : number;
    stato : string = "disponibile";

    constructor(tipo : string, IDUnico : number, stato : string = "disponibile") {
        this.tipo = tipo;
        this.IDUnico = IDUnico;
        this.stato = stato;
    }    
    assegnaUtente(utente:IUtente):void {
            utente.prenotaMezzo(this);
            this.stato = "in uso";
            console.log(`il mezzo ${this.tipo} con ID ${this.IDUnico} è ${this.stato}  dall'utente ${utente.nome}`);
    }
}

class Utente implements IUtente {
    nome : string;
    cognome : string;
    email : string;
    metodoDiPagamento : string;
    constructor(nome : string, cognome : string, email : string, metodoDiPagamento : string) {
        this.nome = nome;
        this.cognome = cognome;
        this.email = email;
        this.metodoDiPagamento = metodoDiPagamento;
    }

    prenotaMezzo(mezzo:IMezzo):void {
        if (mezzo.stato === "disponibile") {
            mezzo.stato = "in uso";
            console.log(`il mezzo ${mezzo.tipo} con ID ${mezzo.IDUnico} è ${mezzo.stato}  dall'utente ${this.nome}`);
        } else {
            console.log(`il mezzo ${mezzo.tipo} con ID ${mezzo.IDUnico} non è disponibile, già in uso da un'altro utente`);
            }
    }
}

class Citta implements ICitta {
    nomeCitta : string;
    elencoMezziDisponibili : IMezzo[];
    constructor(nomeCitta : string) {
        this.nomeCitta = nomeCitta;
        this.elencoMezziDisponibili = [];
    }

    aggiungiMezzo(mezzo:IMezzo):void {
        this.elencoMezziDisponibili.push(mezzo);
        console.log(`il mezzo ${mezzo.tipo} con ID ${mezzo.IDUnico} è stato aggiunto alla citta ${this.nomeCitta}`);
    }
}

let bici = new Mezzo("bici", 1);
let monopattino = new Mezzo ("monopattino", 2);
let bici2 = new Mezzo("bici", 3);

let fabio = new Utente("fabio", "bianchi", "IqOxG@example.com", "carta di credito");
let lorenzo = new Utente("lorenzo", "bianchi", "IqOx2@example.com", "contanti");

let Napoli = new Citta("Napoli");
Napoli.aggiungiMezzo(bici);
Napoli.aggiungiMezzo(monopattino);
Napoli.aggiungiMezzo(bici2);

fabio.prenotaMezzo(bici);
fabio.prenotaMezzo(monopattino);
lorenzo.prenotaMezzo(bici2);
lorenzo.prenotaMezzo(bici);