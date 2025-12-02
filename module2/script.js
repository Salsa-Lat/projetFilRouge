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



// Exercice 2
// - Partir du slogan déjà créé à l’exercice 1

// - Créer un premier message de bienvenue en collant du texte et des variables
//   (indice : utiliser l’opérateur pour concaténer des chaînes)
let welcomeMessage = "Welcome to our shop " + shopName + " at " + city + " !";

// - Créer un deuxième message de bienvenue en utilisant une autre syntaxe
//   qui permet d’injecter des variables dans une chaîne
//   (indice : pensez au gabarit de chaîne avec ${...})
let welcomeMessage2 = `Welcome to our shop ${shopName} at ${city} !`;

// - Calculer la longueur du slogan
slogan.length;

// - Créer une version en majuscules du slogan
slogan.toUpperCase();

// - Créer une version du slogan où un mot est remplacé par un autre
//   (indice : il existe une méthode pour remplacer une partie d’un texte)
slogan.replace("like", "love");

// - Afficher les deux messages, la longueur, la version majuscule
//   et la version modifiée dans la console
console.log(welcomeMessage);
console.log(welcomeMessage2);
console.log(slogan.length);
console.log(slogan.toUpperCase());
console.log(slogan.replace("like", "love"));