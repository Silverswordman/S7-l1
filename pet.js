const petNameInput = document.getElementById("petName-field");
const petOwnerInput = document.getElementById("ownerName-field");
const speciesInput = document.getElementById("species-field");
const breedInput = document.getElementById("breed-field");

const Pets = [];

class Pet {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName;
    this.ownerName = _ownerName;
    this.species = _species;
    this.breed = _breed;
  }
}

const renderPet = function () {
  // prima di tutto prendo un riferimento alla lista <ul>
  const petsList = document.querySelector("ul");
  // per sicurezza, la svuoto prima di riempirla
  petsList.innerHTML = "";
  // ora, per ogni contatto, creo un <li> e lo appendo alla <ul>
  Pets.forEach((pet) => {
    // cosa faccio per ogni contatto?
    // 1) creo un <li> vuoto
    const newLi = document.createElement("li");
    // 2) riempio <li> con i dati
    newLi.innerText = `The pet name is ${pet.petName} its owner is ${pet.ownerName} it's a  ${pet.species} and its breed is ${pet.breed}`;
    // 3) appendo <li> alla <ul>
    petsList.appendChild(newLi);
  });
};

const formPet = document.querySelector("form");
formPet.addEventListener("submit", function (e) {
  e.preventDefault(); // blocco il comportamento di default del form
  // creo un oggetto di tipo Contact con i valori recuperati dal form
  const newPet = new Pet(
    petNameInput.value,
    petOwnerInput.value,
    speciesInput.value,
    breedInput.value
  );

  console.log("New Pet Added", newPet);
  // pusho il contatto dentro la lista contatti
  Pets.push(newPet);
  // svuoto i campi del form
  petNameInput.value = " ";
  petOwnerInput.value = " ";
  speciesInput.value = " ";
  breedInput.value = " ";

  // renderizzo nuovamente la <ul> in modo da rispecchiare il contenuto dell'array "contacts"
  renderPet();
});

function compareOwner(ownerName1, ownerName2) {
  if (ownerName1.ownerName === ownerName2.ownerName) {
    true;
  } else {
    false;
  }
}

compareOwner(petOwnerInput.value, petOwnerInput.value);
