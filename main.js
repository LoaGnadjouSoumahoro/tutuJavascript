// Selecteur

/**-querySelector: permet de sélectionner des éléments de notre page web
style.background="yellow": permet d'ajouter du style à la partir sélectionné

 */
/** 
document.querySelector('h4').style.background="yellow";
*/

/**les éléments sélectionné doivent être missent dans une constance
il faut passer la balise dans une variable
 */
/** 
const elementBody = document.querySelector("h4");
console.log(elementBody);
 */


const btn1 = document.querySelector('#btn-1');
const btn2 = document.getElementById('btn-2');
const answer = document.querySelector('p');

console.log("answer");
/**
 *Les événement sur le click
 dans un selector: il faut mettre . ou # pour préciser si l'élément est une classe ou un id
 */
const questionContainer = document.querySelector('.click-event')
/*Il faut toujours mettre un varriable créer dans la console pour vérifier si elle est sélectionné;

Car quand on crée une varraible qui pointe sur un élément et quand on la console.log elle doit apparaitre dans al console */
// console.log(questionContainer);

// questionContainer.computedStyleMap.borderRadius = "150px";

/*
addEventListener: ajoute un évenment 
event: peut etre un click, un crolle
function: q'est ce qu'il fait quand l'event est activé

 */
// questionContainer.addEventListener('event', function )

questionContainer.addEventListener('click', ()=>{

/*Pour injecter du style dans la balise
"3px solid teal": mettre le CSS entre guillemé pour faire la différance avec la variable.
 */    
// questionContainer.style.background = "red";
// questionContainer.style.border = "3px solid teal";

/*
Quand on a plus d'un style à injecter, il faut créer une classe dans le CSS
*/
/*classList.add: ajoute le style de la classe question_click à notre élément.
pas besoin d'ajouter . car c'est précisé que c'est une classe
 */
// questionContainer.classList.add("question-clicked");

/*toggle:si la class y est tu l'enlève, mais si elle n'est y pas tu l'ajoute
 */
questionContainer.classList.toggle("question-clicked");
} );

btn1.addEventListener('click',()=>{
// answer.style.visibility = "visible";
answer.classList.add("show-response");
answer.style.background = "green";
})

btn2.addEventListener('click',()=>{
// answer.style.visibility = "visible";
answer.classList.add("show-response");
answer.style.background = "red";
})

/*Les priorité en JS
<écrire directement dans la balise> >#id > .class > baliseHTML

si on veux injecte  une class par classList et que le style qui à été donne à en CSS par son id cela ne fonctionnera pas

#btn1{
    ...
    ...
}
on ne pourra donner cette classe CSS #btn1 à un élément par classList
 */
//------------------------------------------------------------
/*on déclare toutes les variable au dessus du code
 */