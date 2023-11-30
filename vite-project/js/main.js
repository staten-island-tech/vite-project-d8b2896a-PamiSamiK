
import "../css/style.css"
import { people } from "./array.js";

const DOMSelectors = {
  gallery: document.querySelector('#gallery'),
  filterFirstName: document.querySelector('#filterFirstName'),
  filterLastName: document.querySelector('#filterLastName'),
  filterNationality: document.querySelector('#filterNationality'),
  filterSingle: document.querySelector('#filterSingle'),
};

function injectCards() {
  console.log(DOMSelectors.gallery)
  DOMSelectors.gallery.insertAdjacentHTML
    "beforebegin",`
      <h2>${people.firstname} ${people.lastname}</h2>
      <p>Nationality: ${people.nationality}</p>
      <p>Single: ${people.single ? 'Yes' : 'No'}</p>
      <!--yasss-->
 
    `;
   };
 
 injectCards()
 
 
 window.addEventListener('DOMContentLoaded', injectCards);

/*
function filterByFirstName(firstName) {
  const filteredPeople = people.filter(person => person.firstname.toLowerCase() === firstName.toLowerCase());
  injectCards(filteredPeople);
}

function filterByLastName(lastName) {
  const filteredPeople = people.filter(person => person.lastname.toLowerCase() === lastName.toLowerCase());
  injectCards(filteredPeople);
}

function filterByNationality(nationality) {
  const filteredPeople = people.filter(person => person.nationality.toLowerCase() === nationality.toLowerCase());
  injectCards(filteredPeople);
}

function filterBySingleStatus(isSingle) {
  const filteredPeople = people.filter(person => person.single === isSingle);
  injectCards(filteredPeople);
}

DOMSelectors.filterFirstName.addEventListener('click', () => {
  const firstName = prompt("Enter First Name to Filter:");
  if (firstName) {
    filterByFirstName(firstName);
  }
});

DOMSelectors.filterLastName.addEventListener('click', () => {
  const lastName = prompt("Enter Last Name to Filter:");
  if (lastName) {
    filterByLastName(lastName);
  }
});

DOMSelectors.filterNationality.addEventListener('click', () => {
  const nationality = prompt("Enter Nationality to Filter:");
  if (nationality) {
    filterByNationality(nationality);
  }
});

DOMSelectors.filterSingle.addEventListener('click', () => {
  const isSingle = confirm("Filter for single people?");
  if (isSingle !== null) {
    filterBySingleStatus(isSingle);
  }
});
*/
// Initially display all cards
injectCards(people);
