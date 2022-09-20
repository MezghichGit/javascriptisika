/*var languages = ["HTML", "CSS", "Javascript", "Java", "PHP"];

for (var i = 0; i < languages.length; i++) {
    console.log("J'aime : " + languages[i]);
}*/


function messageEntre() {
    alert("Bonjour tout le monde");
}

function messageSortie() {
    alert("Au revoir...");
}

function formulaire(){
 var nom = prompt("Taper votre nom"); // permet de récupérer des data
 alert("Vous êtes : "+nom);
}

function somme(){
    var v1  =  prompt("Taper première valeur","v1");
    var v2  =  prompt("Taper deuxième valeur","v2");
    var res = parseFloat(v1) + parseFloat(v2);
    alert("Le résultat de " + v1 + " + "+v2 +" = "+res);
}