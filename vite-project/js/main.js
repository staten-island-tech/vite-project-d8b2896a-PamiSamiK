import "../css/style.css";
import { peoples } from "./array.js";
const DOMSelectors = {
gallery: document.querySelector('#gallery'),
filterItalian: document.querySelector('#filterItalian'),
filterSinhalese: document.querySelector('#filterSinhalese'),
filterSingle: document.querySelector(`#filterSingle`),
themeButton: document.querySelector('#themeButton'),
};
console.log(peoples);

function injectCards(peopleList) {
DOMSelectors.gallery.innerHTML = '';
peopleList.forEach((people) => {
  DOMSelectors.gallery.insertAdjacentHTML("beforeend", `
    <div class="card">
      <img src="${people.image}" alt="${people.firstname} ${people.lastname}" class="card-img">
      <h2>${people.firstname} ${people.lastname}</h2>
      <p>Nationality: ${people.nationality}</p>
      <p>Single: ${people.single}</p>
    </div>
  `);
});
}
function clearFields() {
  DOMSelectors.gallery.innerHTML = '';
}

DOMSelectors.themeButton.addEventListener("click", function() {
  if (document.body.classList.contains("light")) {
    document.body.classList.remove("light");
    document.body.classList.add("dark");
  } else if (document.body.classList.contains("dark")) {
    document.body.classList.remove("dark");
    document.body.classList.add("light");
  } else {
   
    document.body.classList.add("light");
  }
});

function filterByNationality(nationality) {
  clearFields(peoples)
const filteredPeople = peoples.filter(person => String(person.nationality).toLowerCase() === nationality.toLowerCase());
injectCards(filteredPeople);
}

function filterBySingle(single) {
  clearFields(peoples)
const filteredPeople = peoples.filter((person) => person.single === true);
injectCards(filteredPeople);
}

window.addEventListener('DOMContentLoaded', () => {
injectCards(peoples);
});

DOMSelectors.filterItalian.addEventListener("click", function() {
filterByNationality('Italian');
});

DOMSelectors.filterSinhalese.addEventListener("click", function() {
filterByNationality('Sinhalese');
});

DOMSelectors.filterSingle.addEventListener("click", function() {
  filterBySingle(true);
  });