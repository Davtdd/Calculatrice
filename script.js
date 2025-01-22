// Sélection des éléments
const ecran = document.querySelector(".ecran");
const touches = document.querySelectorAll(".bouton");

// Variables pour stocker les valeurs
let premierNombre = "";
let operateur = "";
let deuxiemeNombre = "";

// Fonction de calcul
const calculer = () => {
  let resultat = 0;
  const a = parseFloat(premierNombre);
  const b = parseFloat(deuxiemeNombre);

  switch (operateur) {
    case "+":
      resultat = a + b;
      break;
    case "-":
      resultat = a - b;
      break;
    case "×":
      resultat = a * b;
      break;
    case "÷":
      resultat = b !== 0 ? a / b : "Erreur";
      break;
  }

  return resultat;
};

// Gestion des clics sur les touches
touches.forEach((touche) => {
  touche.addEventListener("click", () => {
    const valeur = touche.textContent;

    // Si c'est un chiffre ou un point
    if (!isNaN(valeur) || valeur === ".") {
      if (operateur === "") {
        premierNombre += valeur;
        ecran.value = premierNombre;
      } else {
        deuxiemeNombre += valeur;
        ecran.value = deuxiemeNombre;
      }
    }

    // Si c'est un opérateur
    if (["+", "-", "×", "÷"].includes(valeur)) {
      operateur = valeur;
    }

    // Si c'est égal
    if (valeur === "=") {
      const resultat = calculer();
      ecran.value = resultat;
      premierNombre = resultat.toString();
      deuxiemeNombre = "";
      operateur = "";
    }

    // Si c'est effacer
    if (valeur === "C") {
      premierNombre = "";
      operateur = "";
      deuxiemeNombre = "";
      ecran.value = "";
    }
  });
});
