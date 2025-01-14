//                 nom de la carte

const paragraph = document.querySelector(".card-holder");
const inputField = document.querySelector(".card-holder-name");

inputField.addEventListener("input", (e) => {
	const value = e.target.value;
	paragraph.textContent = value || "Jane Appleseed";
});

// //                 code de la carte

// const paragraph2 = document.querySelector(".card-number");
// const inputField2 = document.querySelector(".cardNumber2");

// inputField2.addEventListener("input", (e) => {
// 	const value = e.target.value;
// 	paragraph2.textContent = value || "0000 0000 0000 0000";
// });










const paragraph2 = document.querySelector(".card-number");
const inputField2 = document.querySelector(".cardNumber2");

inputField2.addEventListener("input", (e) => {
  let value = e.target.value;

  // Supprimer tout caractère qui n'est pas un chiffre
  value = value.replace(/\D/g, "");

  // Ajouter un espace tous les 4 chiffres
  value = value.replace(/(\d{4})(?=\d)/g, "$1 ");

  // Limiter la saisie à 16 chiffres
  if (value.length > 19) {
    value = value.slice(0, 19);
  }

  // Mettre à jour le contenu du paragraphe
  paragraph2.textContent = value || "0000 0000 0000 0000";

  // Mettre à jour la valeur de l'input
  inputField2.value = value;
});























//              les 4 chiffres code de la carte

const paragraph3 = document.querySelector(".exp-months");
const inputField3 = document.querySelector(".get-months");

inputField3.addEventListener("input", (e) => {
	const value = e.target.value;
	paragraph3.textContent = value || "00";
});


const paragraph35 = document.querySelector(".exp-years");
const inputField35 = document.querySelector(".get-years");

inputField35.addEventListener("input", (e) => {
	const value = e.target.value;
	paragraph35.textContent = value || "00";
});


//              derriere. code de la carte

const paragraph4 = document.querySelector(".cvc-number");
const inputField4 = document.querySelector(".enter-cvc");

inputField4.addEventListener("input", (e) => {
	const value = e.target.value;
	paragraph4.textContent = value || "000";
});
