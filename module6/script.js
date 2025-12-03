/*************************************************
 * EXERCICE 5 - Afficher un produit vedette
 * Notions : DOM, createElement, appendChild,
 *           réutilisation des fonctions de prix
 *************************************************/

/* --- Correction Exercices 1 à 4 --- */

/* Exercice 1 - Variables & infos de base */

const shopName = "Ma Boutique JS";
const city = "Lyon";
let isOpen = true;
let productCount = 3;
let slogan = "Des goodies pour développeurs passionnés !";

console.log("Bienvenue dans " + shopName + " située à " + city);
console.log("Slogan :", slogan);

if (isOpen) {
  console.log("La boutique est ouverte.");
} else {
  console.log("La boutique est fermée.");
}

// Mise à jour d'un élément de tagline (si présent dans la page)
const taglineElement = document.querySelector(".site-tagline");
if (taglineElement) {
  taglineElement.textContent = `Bienvenue dans ${shopName} à ${city} 👋`;
}

// Année dans le footer (si span#year présent)
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

/* Exercice 2 - Chaînes de caractères & messages */

let welcomeMessage =
  "Bienvenue dans " + shopName + " située à " + city + " !";

let welcomeMessage2 = `Bienvenue dans ${shopName} à ${city} !`;

let sloganLength = slogan.length;
let sloganUppercase = slogan.toUpperCase();
let sloganModified = slogan.replace("goodies", "trésors");

console.log("welcomeMessage :", welcomeMessage);
console.log("welcomeMessage2 :", welcomeMessage2);
console.log("Longueur du slogan :", sloganLength);
console.log("Slogan en majuscules :", sloganUppercase);
console.log("Slogan modifié :", sloganModified);

// Utilisation du slogan modifié dans un éventuel message de panier
const cartMessageElementEx2 = document.getElementById("cart-message");
if (cartMessageElementEx2) {
  cartMessageElementEx2.textContent =
    sloganModified + ` (${sloganLength} caractères dans le slogan original)`;
}

/* Exercice 3 - Nombres & calculs */

let priceHTExample = 20;
const TVA = 0.2;

let priceTTCExample = priceHTExample + priceHTExample * TVA;

console.log("Prix HT d'exemple :", priceHTExample);
console.log("Prix TTC d'exemple :", priceTTCExample);

let salesCount = 0;
salesCount++;
console.log("Nombre de ventes après incrémentation :", salesCount);

/* Exercice 4 - Fonctions de prix */

function calculatePriceTTC(priceHT) {
  return priceHT + priceHT * TVA;
}

function formatPrice(price) {
  return price.toFixed(2) + " €";
}

// Tests simples
const testPrice1 = calculatePriceTTC(10);
const testPrice2 = calculatePriceTTC(19.99);

console.log("Test 1 TTC formaté :", formatPrice(testPrice1));
console.log("Test 2 TTC formaté :", formatPrice(testPrice2));

/* --- Nouveautés Exercice 5 --- */
/* Afficher un produit vedette dans la page (sans objets) */

// 1) Variables du produit vedette
let featuredProductName = "Kawasaki Ninja 400";
let featuredProductPriceHT = 5500.42;
let featuredProductDescription = "The best bike you can dream of!";
let featuredProductImage = "https://storage.kawasaki.eu/public/kawasaki.eu/en-EU/model/23MY_Ninja_400_GY1_STU__1_.png";

// 2) Récupération de la section qui accueillera le produit
const productList = document.getElementById("product-list");

// 3) Fonction de création de la carte produit
function createFeaturedProductCard() {
  const article = document.createElement("article");
  article.classList.add("product-card");

  const img = document.createElement("img");
  img.src = featuredProductImage;
  img.alt = featuredProductName;
  img.classList.add("product-image");

  const title = document.createElement("h3");
  title.textContent = featuredProductName;
  title.classList.add("product-title");

  const priceElt = document.createElement("p");
  const priceTTC = calculatePriceTTC(featuredProductPriceHT);
  priceElt.textContent = formatPrice(priceTTC);
  priceElt.classList.add("product-price");

  const desc = document.createElement("p");
  desc.textContent = featuredProductDescription;
  desc.classList.add("product-description");

  article.appendChild(img);
  article.appendChild(title);
  article.appendChild(priceElt);
  article.appendChild(desc);

  return article;
}

// 4) Affichage du produit vedette dans la page
  productList.innerHTML = "";
  const card = createFeaturedProductCard();
  productList.appendChild(card);

console.log("Exercice 5 chargé ✅");






// - créer tableau (productNames)
let productNames = ["Kawasaki Ninja 400", "Kawasaki Ninja 200", "Kawasaki Ninja 600"];

// - créer tableau (productPricesHT)
let productPricesHT = [5500.49, 2600.75, 6800.29];

// - afficher dans la console la longueur du tableau (le nombre d'éléments à l'intérieur)
console.log(productNames.length);

// - définir fonction (afficherProduitsConsole()):
function afficherProduitsConsole() {
  productNames.forEach(element => {
    console.log(element);
  });

  productPricesHT.forEach(element => {
    let priceTTC = calculatePriceTTC(element);
    formatPrice(priceTTC);
    console.log(formatPrice(priceTTC));
  });




  console.log(`Produit : ${productNames}, Prix : ${productPricesHT}`);

}
//   - `Pour chaque nom dans mon tableau productNames:`
//     (indice : il faudra récupérer l'index de chaque nom en plus. Donc on doit récupérer 2 informations.)
//       - récupérer prix HT via `prixHT[index]`
//       - calculer le prix TTC (avec une fonction créée plus tôt dans nos exercices)
//       - formatter prix (avec une fonction créée plus tôt dans nos exercices)
//       - afficher dans la console la phrase : "Produit : Nom — Prix : XX,XX €"
// - appeler la fonction

afficherProduitsConsole();