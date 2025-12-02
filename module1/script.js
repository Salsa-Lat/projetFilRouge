// - Créer une variable pour le nom de la boutique (shopName)
let shopName = "JeSuis";
// - Créer une variable pour la ville (city)
let city = "Lyon";
// - Créer une variable booléenne pour savoir si la boutique est ouverte (isOpen)
let isOpen = false;
// - Créer une variable pour le nombre de produits (productCount)
let productCount = 0;
// - Créer une variable pour le slogan (slogan)
let slogan = "We like to buy !";

// - Afficher un message de bienvenue dans la console
//   (indice : concaténer texte + variables)
console.log("Welcome to our shop " + shopName + " at " + city + " !");

// - Afficher le slogan dans la console
console.log(slogan);

// - Selon la variable qui indique si la boutique est ouverte :
//   - afficher dans la console un message “ouverte”
//   - ou un message “fermée”
//   (indice : utiliser une condition simple avec if / else)

  if (isOpen === true) {
    console.log("Ouvert");
  } else {
    console.log("Fermée");
  }
