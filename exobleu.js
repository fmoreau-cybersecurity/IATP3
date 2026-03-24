let n = parseInt(prompt("Entrez un nombre N : "));
let somme = 0;

for (let i = 1; i <= n; i++) {
somme += i;
}

console.log("La somme de 1 à " + n + " est " + somme);