let nbNotes = parseInt(prompt("Combien de notes voulez-vous saisir ? "));
let notes = [];
let sommeNotes = 0;

for (let i = 0; i < nbNotes; i++) {
let note = parseFloat(prompt("Entrez la note " + (i + 1) + " : "));
notes.push(note);
sommeNotes += note;
}

if (notes.length > 0) {
let moyenne = sommeNotes / notes.length;
console.log("La moyenne est de " + moyenne);
} else {
console.log("Aucune note saisie.");
}