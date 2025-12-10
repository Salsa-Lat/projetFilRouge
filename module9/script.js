/*************************************************
 * EXERCICE 8 - Panier & conditions (sans clic)
 * Notions : variables globales, if / else if / else,
 *           DOM, réutilisation des fonctions
 *************************************************/

/* --- Correction Exercice 1 - Variables & infos de base --- */

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

// Tagline dans le header (si présente)
const taglineElement = document.querySelector(".site-tagline");
if (taglineElement) {
  taglineElement.textContent = `Bienvenue dans ${shopName} à ${city} 👋`;
}

// Année dans le footer (si présente)
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

/* --- Correction Exercice 2 - Chaînes de caractères & messages --- */

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

const cartMessageElementEx2 = document.getElementById("cart-message");
if (cartMessageElementEx2) {
  cartMessageElementEx2.textContent =
    sloganModified + ` (${sloganLength} caractères dans le slogan original)`;
}

/* --- Correction Exercice 3 - Nombres & calculs --- */

let priceHTExample = 20;
const TVA = 0.2;

let priceTTCExample = priceHTExample + priceHTExample * TVA;

console.log("Prix HT d'exemple :", priceHTExample);
console.log("Prix TTC d'exemple :", priceTTCExample);

let salesCount = 0;
salesCount++;
console.log("Nombre de ventes après incrémentation :", salesCount);

/* --- Correction Exercice 4 - Fonctions de prix --- */

function calculatePriceTTC(priceHT) {
  return priceHT + priceHT * TVA;
}

function formatPrice(price) {
  return price.toFixed(2) + " €";
}

const testPrice1 = calculatePriceTTC(10);
const testPrice2 = calculatePriceTTC(19.99);

console.log("Test 1 TTC formaté :", formatPrice(testPrice1));
console.log("Test 2 TTC formaté :", formatPrice(testPrice2));

/* --- Correction Exercice 5 - Produit vedette (DOM, sans objets) --- */

let featuredProductName = "T-shirt Code & Chill";
let featuredProductPriceHT = 19.99;
let featuredProductDescription = "Parfait pour coder confortablement.";
let featuredProductImage = "images/tshirt-code-chill.jpg"; // à adapter

const productList = document.getElementById("product-list");

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

if (productList) {
  productList.innerHTML = "";
  const card = createFeaturedProductCard();
  productList.appendChild(card);
}

/* --- Correction Exercice 6 - Tableaux simples & boucle for --- */

const productNames = ["T-shirt JS", "Mug Debug", "Sticker Bug Free"];
const productPricesHT = [19.99, 9.99, 2.5];

console.log("Nombre de produits (tableaux simples) :", productNames.length);

function displayProductsInConsole() {
  for (let i = 0; i < productNames.length; i++) {
    const name = productNames[i];
    const priceHT = productPricesHT[i];
    const priceTTC = calculatePriceTTC(priceHT);
    const formattedPrice = formatPrice(priceTTC);

    console.log(`${i + 1} - ${name} — ${formattedPrice} TTC`);
  }
}

displayProductsInConsole();

/* --- Correction Exercice 7 - Tableau d'objets & affichage DOM --- */

let products = [
  {
    id: "kn2",
    name: "Kawasaki Ninja 200",
    priceHT: 2600.75,
    desc: "A cool bike nice for beginer riders.",
    image: "https://img.indianautosblog.com/crop/1200x675/2018/07/Kawasaki-Ninja-300-2018-blue-left-quarter.jpg"
  }, {
    id: "kn4",
    name: "Kawasaki Ninja 400",
    priceHT: 5500.49,
    desc: "A fire bike amazing for intermediate riders.",
    image: "https://storage.kawasaki.eu/public/kawasaki.eu/en-EU/model/23MY_Ninja_400_GY1_STU__1_.png"
  }, {
    id: "kn6",
    name: "Kawasaki Ninja 600",
    priceHT: 6800.29,
    desc: "A masterclass of a bike for pro riders.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkzA3kPjC3h3TQbT7Sutk253aJPa6M_zCvfA&s"
  }
];

const productListSection = document.getElementById("product-list");

function createProductCard(product) {
  const article = document.createElement("article");
  article.classList.add("product-card");

  const img = document.createElement("img");
  img.src = product.image;
  img.alt = product.name;
  img.classList.add("product-image");

  const title = document.createElement("h3");
  title.textContent = product.name;
  title.classList.add("product-title");

  const priceElt = document.createElement("p");
  const priceTTC = calculatePriceTTC(product.priceHT);
  priceElt.textContent = formatPrice(priceTTC);
  priceElt.classList.add("product-price");

  const desc = document.createElement("p");
  desc.textContent = product.description;
  desc.classList.add("product-description");

  article.appendChild(img);
  article.appendChild(title);
  article.appendChild(priceElt);
  article.appendChild(desc);

  return article;
}

function displayProductsInPage() {
  if (!productListSection) return;

  productListSection.innerHTML = "";

  for (const product of products) {
    const card = createProductCard(product);
    productListSection.appendChild(card);
  }
}

displayProductsInPage();

/*************************************************
 * Nouveautés EXERCICE 8 - Panier & conditions
 * Objectif : afficher un message différent selon
 *            le total du panier (sans clic)
 *************************************************/

// 1) État du panier
let cartItemCount = 0;
let cartTotal = 0;

// 2) Éléments du DOM liés au panier
const cartCountHeader = document.getElementById("cart-count");
const cartTotalHeader = document.getElementById("cart-total");
const cartCountAside = document.getElementById("cart-count-aside");
const cartTotalAside = document.getElementById("cart-total-aside");
const cartMessage = document.getElementById("cart-message");

// 3) Fonction qui renvoie un message selon le total
function getCartMessage(total) {
  if (total === 0) {
    return "Votre panier est vide.";
  } else if (total < 50) {
    return "Ajoutez encore des produits pour profiter de la livraison offerte à partir de 50 €.";
  } else {
    return "Livraison offerte 🎉 Merci pour votre commande !";
  }
}

// 4) Fonction qui met à jour l’affichage du panier (header + aside + message)
function updateCartDisplay() {
  // Header
  if (cartCountHeader) {
    cartCountHeader.textContent = cartItemCount.toString();
  }
  if (cartTotalHeader) {
    cartTotalHeader.textContent = formatPrice(cartTotal);
  }

  // Aside
  if (cartCountAside) {
    cartCountAside.textContent = cartItemCount.toString();
  }
  if (cartTotalAside) {
    cartTotalAside.textContent = formatPrice(cartTotal);
  }

  // Message
  if (cartMessage) {
    cartMessage.textContent = getCartMessage(cartTotal);
  }
}

/* 5) Tests simples à faire à la main
   Tu peux demander aux élèves de modifier ces valeurs
   pour tester les 3 cas : 0 / < 50 / >= 50
*/

// Cas 1 : panier vide
cartItemCount = 0;
cartTotal = 0;
updateCartDisplay();

// Cas 2 : panier avec total < 50
cartItemCount = 2;
cartTotal = 30;
updateCartDisplay();

// Cas 3 : panier avec total >= 50
cartItemCount = 4;
cartTotal = 60;
// updateCartDisplay(); // à décommenter pour tester

console.log("Exercice 8 simplifié chargé ✅");






//EXO 9

// - Remettre `cartItemCount = 0`
// - Remettre `cartTotal = 0`
// - Appeler `updateCartDisplay()`

cartItemCount = 0;
cartTotal = 0;
updateCartDisplay();



// - Définir `addToCart(product)` :
//   - calculer `priceTTC` à partir de `product.priceHT`
//   - ajouter `priceTTC` à `cartTotal`
//   - augmenter `cartItemCount`
//   - appeler `updateCartDisplay()`

function addToCart(product) {
  
  const priceTtc = product;
  
  cartTotal += priceTtc;
  
  cartItemCount++;
  updateCartDisplay();
}

// - Mettre à jour `createProductCard(product)` :
//   - créer un conteneur (article)
//   - créer et remplir les éléments (image, titre, prix TTC, description)
//   - créer un bouton
//     - texte : “Ajouter au panier”
//     - classe CSS : `btn-add`
//     - au clic → appeler `addToCart(product)`
//   - retourner le conteneur

function createProductCard(product) {
  const article = document.createElement("article");
  article.classList.add("product-card");

  const img = document.createElement("img");
  img.src = product.image;
  img.alt = product.name;
  img.classList.add("product-image");

  const title = document.createElement("h3");
  title.textContent = product.name;
  title.classList.add("product-title");

  const priceElt = document.createElement("p");
  const priceTTC = calculatePriceTTC(product.priceHT);
  priceElt.textContent = formatPrice(priceTTC);
  priceElt.classList.add("product-price");

  const desc = document.createElement("p");
  desc.textContent = product.description;
  desc.classList.add("product-description");

  const button = document.createElement("button");
  button.textContent = ("Ajouter au panier");
  button.classList.add("btn-add");
  button.addEventListener("click", function() {
    addToCart(priceTTC);
  });

  article.appendChild(img);
  article.appendChild(title);
  article.appendChild(priceElt);
  article.appendChild(desc);
  article.appendChild(button);

  return article;
}



function displayProductsInPage() {
  if (!productListSection) return;

  productListSection.innerHTML = "";

  for (const product of products) {
    const card = createProductCard(product);
    productListSection.appendChild(card);
  }
}

displayProductsInPage();
updateCartDisplay();

// - Définir `displayProductsInPage()` :
//   - vider le contenu de `productListSection`
//   - pour chaque `product` dans `products` :
//     - créer une carte avec `createProductCard(product)`
//     - l’ajouter à `productListSection`

// - À la fin du script :
//   - appeler `displayProductsInPage()`
//   - appeler `updateCartDisplay()`

