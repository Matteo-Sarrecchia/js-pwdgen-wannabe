// Chiedi all’utente il suo nome, poi chiedi il suo cognome, 
// poi chiedi il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito21

// definizione nome
let nome = prompt ("Come ti chiami?");
console.log(nome);

document.getElementById("nome-id").innerHTML = "Il tuo nome è " + nome;

// definizione cognome
let cognome = prompt ("Qual'è il tuo cognome?")
console.log(cognome)

document.getElementById("cognome-id").innerHTML = "Il tuo cognome è " + cognome;

// definizione colore preferito
let colorePreferito = prompt ("Qual'è il tuo colore preferito?")
console.log(colorePreferito)

document.getElementById("colore-id").innerHTML = "Il tuo colore preferito è " + colorePreferito;

// stampa rislultato
document.getElementById("psw-id").innerHTML = ("La tua password è ") + nome + cognome + colorePreferito + 23;

