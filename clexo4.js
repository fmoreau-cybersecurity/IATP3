function maxDeTrois(a, b, c) {
let maximum = a;
if (b > maximum) {
maximum = b;
}
if (c > maximum) {
maximum = c;
}
return maximum;
}

let num1 = parseFloat(prompt("Entrez le 1er nombre : "));
let num2 = parseFloat(prompt("Entrez le 2ème nombre : "));
let num3 = parseFloat(prompt("Entrez le 3ème nombre : "));

let resultat = maxDeTrois(num1, num2, num3);
console.log("Le maximum est " + resultat);