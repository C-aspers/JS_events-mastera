//Fonctionnalité 1

//lorsqu'on clique sur le footer, on affiche le mot "clique" en console.
//ainsi que, clique numero x qui augmente à chaque clique
var f1 = document.querySelector('footer');
var x = 0;

f1.addEventListener('click', function(){ 
  console.log("clique")
  x = x + 1
  console.log(`clique numéro ${x}`)
});


//Fonctionnalité 2 

//selection des élements nav pour la modification future et togg le clic de l'utilisateur
let nav = document.getElementById("navbarHeader");
let togg = document.querySelector("span.navbar-toggler-icon")

//fonction permettant de rajouter une classe si elle n'est pas déjà présente et l'enlever si elle est déjà présente. elementDuDOM.classList.toggle("nomDeLaClasse")
togg.addEventListener("click", function(){
  nav.classList.toggle("collapse");
});

//Fonctionnalité 3 

//selection des élements direct pour la modification future et clic le clic de l'utilisateur
var clic = document.querySelector('.btn-group');
var direct = document.querySelector('.card-text');
//fonction permettant de mettre le texte de la card en rouge
clic.addEventListener('click', function(){
  direct.style.color = 'red';
  console.log(direct)
});

//Fonctionnalité 4 
//selection des enfants. Ici, (2) pour la deuxième "card". 
var clic1 = document.querySelector('.col-md-4:nth-child(2) > .card > .card-body').getElementsByClassName('btn btn-sm btn-outline-secondary')[0];
var direct1 = document.querySelector('.col-md-4:nth-child(2) > .card > .card-body > .card-text');
//fonction permettant de mettre le texte de la card en rouge
clic1.addEventListener('click', function(){
  if(direct1.style.color === 'green') 
  {
    direct1.style.color = '';
  }
  else
  {
    direct1.style.color = 'green'
  }
});

//Fonctionnalité 5 
//selection des éléments
var nav2 = document.querySelector("div.navbar")
var link = document.querySelector("link")

console.log(nav2)
//fonction doucle clique pour faire apparaître Boostrap
nav2.addEventListener("dblclick", function(){
  if (link.disabled !== true) 
  {
    link.disabled = true;
  } 
  else 
  {
    link.disabled = false;
  }
});

//BONNE FIN DE JOURNEE :-)
