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

// Les features de ECScript 6
function doSomething()
{
   
    for(var i = 0; i<10; i++)
    //for(let i = 0; i<10; i++)
    {
        console.log("i = "+i);
    }
    console.log("Final i = "+i);
}

// appel de la méthode
// doSomething();


var res = (a,b)=>{
    console.log("Somme de deux nombres via Arrow Function");
    console.log("Res = " +(a+b));
}

//res(10,20);

// Les classes en Javascript

class Etudiant{
    // Les attributs d'instance
    nom;
    age;
    // Un constructeur
    constructor(nom, age){
        this.nom = nom;
        this.age = age;
    }
     // Une méthode d'instance
    info(){
        console.log("Vous êtes : " + this.nom +" vous avez : "+ this.age);
    }
}
//var e = new Etudiant("Amine",20);
//e.info();
//var x = "12 b";
//console.log(parseInt(x));
//console.log(Number(x));

var phrase = "J'apprend js et je vais utiliser js dans mes futures projets";
var index = phrase.indexOf("js",34);
var lastIndex = phrase.lastIndexOf("js");
console.log(index);
console.log(lastIndex);