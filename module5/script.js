/*************************************************
 * EXERCICE 3 - Nombres, calculs & TVA
 * Notions : opérations mathématiques, incrémentation
 *************************************************/

/* --- Correction Exercice 1 & 2 --- */

const shopName = "Ma Boutique JS";
const city = "Lyon";
let isOpen = true;
let productCount = 3;
let slogan = "Des goodies pour développeurs passionnés !";

const taglineElement = document.querySelector(".site-tagline");
if (taglineElement) {
  taglineElement.textContent =
    "Bienvenue dans " + shopName + " à " + city + " 👋";
}

const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

let welcomeMessage =
  "Bienvenue dans " + shopName + " située à " + city + " !";
let welcomeMessage2 = `Bienvenue dans ${shopName} à ${city} !`;
let sloganLength = slogan.length;
let sloganUppercase = slogan.toUpperCase();
let sloganModified = slogan.replace("goodies", "trésors");

/* --- Nouveautés Exercice 3 --- */

// Prix d'exemple et TVA


let examplePriceHT = 20;
const TVA = 0.2;

let examplePriceTTC = examplePriceHT + (examplePriceHT * TVA);

console.log("Prix HT exemple :", examplePriceHT);
console.log("Prix TTC exemple :", examplePriceTTC);

// Compteur de ventes
let salesCount = 0;
salesCount++;
salesCount++;

console.log("Nombre de ventes :", salesCount);







/* --- Rendu visuel Exo 3 --- */

const cartTotalHeader = document.getElementById("cart-total");
const cartTotalAside = document.getElementById("cart-total-aside");

if (cartTotalHeader) {
  cartTotalHeader.textContent = examplePriceTTC.toFixed(2) + " €";
}
if (cartTotalAside) {
  cartTotalAside.textContent = examplePriceTTC.toFixed(2) + " €";
}

const cartMessageElement = document.getElementById("cart-message");
if (cartMessageElement) {
  cartMessageElement.textContent =
    "Exemple de prix TTC affiché dans le panier (exercice 3).";
}

console.log("Exercice 3 chargé ✅");



// - Définir une fonction (calculatePriceTTC(priceHT)) qui :
//     • reçoit un prix HT en paramètre
//     • calcule le prix TTC (en réutilisant la formule de l’exercice 3)
//     • renvoie le prix TTC
function calculatePriceTTC(priceHT) {
  let priceTTC = priceHT + (priceHT * TVA);
  return priceTTC;
}

// - Définir une autre fonction (formatPrice(price)) qui :
//     • reçoit un prix ( type :nombre)
//     • arrondit ce prix à 2 décimales
//     • ajoute le symbole de la monnaie
//     • renvoie le résultat sous forme de texte
//       (indice : il existe une méthode pour formater un nombre avec un certain nombre de décimales)
function formatPrice(price) {
  let priceRound = price.toFixed(2);
  return priceRound + " €";
}

// - Tester ces fonctions :
//     • appeler la fonction de calcul du TTC avec différents prix HT
//     • passer le résultat dans la fonction de formatage
//     • afficher le résultat final dans la console
console.log(calculatePriceTTC(20.99));
// console.log(formatPrice(calculatePriceTTC(20.99)));
console.log(`Le prix de ce produit est de ${formatPrice(calculatePriceTTC(20.99))}`);







// - Créer des variables pour :
//   nom du produit (featuredProductName), prix HT (featuredProductPriceHT), description (featuredProductDescription), image (featuredProductImage)
let featuredProductName = "Kawasaki Ninja 400";
let featuredProductPriceHT = 5500.42;
let featuredProductDescription = "The best bike you can dream of!";
let featuredProductImage = "https://storage.kawasaki.eu/public/kawasaki.eu/en-EU/model/23MY_Ninja_400_GY1_STU__1_.png";

// - Récupérer la section HTML où afficher le produit
//   (indice : utilisez une méthode du DOM qui sélectionne un élément par son id)
const productList = document.getElementById('product-list');

// - Définir une fonction (createFeaturedProductCard()) qui :
//     • crée un conteneur pour la carte  
//       (indice : il existe une méthode du DOM pour créer un élément HTML)
//     • crée une image :
//         - lui donner la source de l'image
//       (indice : pensez aux propriétés des balises <img>)
//     • crée un titre et lui mettre le nom du produit  
//       (indice : une propriété permet d’écrire du texte dans un élément)
//     • calcule le prix TTC en utilisant la fonction vue dans l’exercice précédent
//       (indice : vous avez déjà une fonction qui fait un calcul à partir du prix HT)
//     • formate ce prix TTC avec la fonction prévue pour ça
//     • crée un paragraphe pour afficher le prix TTC
//     • crée un autre paragraphe pour la description
//     • assemble tous les éléments dans le conteneur
//       (indice : pensez à une méthode qui ajoute un enfant dans un élément)
//     • retourne ce conteneur
function createFeaturedProductCard() {
  let card = document.createElement('article');
  productList.appendChild(card);
  card.classList.add('product-card');

  let img = document.createElement('img');
  card.appendChild(img);
  img.src = featuredProductImage;
  img.alt = "Kawasaki Ninja 400";
  img.innerHTML= featuredProductImage;
  img.classList.add('product-image');


  let h3 = document.createElement('h3');
  card.appendChild(h3);
  h3.innerHTML= featuredProductName;
  h3.classList.add('product-name');

  let price = document.createElement('p');
  card.appendChild(price);
  price.innerHTML = formatPrice(calculatePriceTTC(featuredProductPriceHT));
  price.classList.add('product-price');

  let desc = document.createElement('p');
  card.appendChild(desc);
  desc.innerHTML = featuredProductDescription;
  desc.classList.add('product-desc');

  return card;
}

// - Avant d’afficher la carte, vider ce qu’il y a déjà dans la section
//   (indice : il existe une propriété qui permet de supprimer tout le contenu HTML d’un élément)
productList.innerHTML = " ";

// - Appeler la fonction pour créer la carte
createFeaturedProductCard();

// - Ajouter le résultat dans la section prévue
//   (indice : même méthode que pour assembler les éléments dans la carte)
