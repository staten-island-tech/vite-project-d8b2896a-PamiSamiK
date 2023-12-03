import "../css/style.css";
import { peoples } from "./array.js";
const DOMSelectors = {
gallery: document.querySelector('#gallery'),
filterFirstName: document.querySelector('#filterFirstName'),
filterLastName: document.querySelector('#filterLastName'),
filterNationality: document.querySelector('#filterNationality'),
filterSingle: document.querySelector('#filterSingle'),
};
console.log(peoples); 

function injectCards() {
peoples.forEach((people) => {
DOMSelectors.gallery.insertAdjacentHTML("beforebegin",`
<h2>${people.firstname} ${people.lastname}</h2>
<p>Nationality: ${people.nationality}</p>
<p>Single: ${people.single}</p>
<!--yasss--`)
 ;
});
}
injectCards()
window.addEventListener('DOMContentLoaded', injectCards);


injectCards(peoples);




document.querySelector(".themeBTN").addEventListener("click",function(){
 if(document.body.classList.contains("light")){
   document.body.classList.remove("light");
 }else{
document.body.classList.remove("dark");
document.body.classList.add("light");


 }
});



