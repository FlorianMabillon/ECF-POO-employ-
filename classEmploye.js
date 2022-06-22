class Employe {
    constructor(nom, prenom, dateEmbauche, poste, salaire, service){
        this.nom = nom;
        this.prenom = prenom;
        this.dateEmbauche = dateEmbauche;
        this.poste = poste;
        this.salaire = salaire;
        this.service = service;
    }

    anciennete(){
        const dateActuelle = new Date().getFullYear();
        const embauche = new Date(this.dateEmbauche).getFullYear();
        let totalAnnee =  dateActuelle - embauche;
        return totalAnnee;
    }

    prime(){
        let primeAnnuel = (salaire*5)/100;
        let primeAnciennete = (salaire*(2*anciennete()));
        let primeTotal = primeAnnuel + primeAnciennete;

        let envoieDatePrime = new Date('November 30')


        let finPrime = new Date();
        let jourPrime = finPrime.getDate();
        let moisPrime = finPrime.getMonth() + 1;
        let primeAnnee = moisPrime +" "+ jourPrime 


        
        
    }
}

