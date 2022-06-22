let employe1 = new Employe("Jack", "Jack", "1996-05-15", 38000, "Cadre")
let employe2 = new Employe("Darty", "Denis", "1998-04-02", 25000, "Ouvrier")
let employe3 = new Employe("Jacob", "Franck", "2005-06-12", 140000, "Patron")
let employe4 = new Employe("Bean", "James", "2001-01-18", 10000, "Stagiaire")
let employe5 = new Employe("Jenkins", "Harold", "2003-06-12", 27000, "Ouvrier")

let test = new Date(employe1.dateEmbauche).getFullYear();

employe1.anciennete();
console.log(employe1.anciennete());

let finPrime = new Date();
let jourPrime = finPrime.getDate();
let moisPrime = finPrime.getMonth() + 1;
let primeAnnee = moisPrime +" "+ jourPrime


console.log(primeAnnee);

