const DOMSelectors = {
  form: document.querySelector('#myForm'),
  artist: document.querySelector('#artist'),
  genre: document.querySelector('#genre'),
  album: document.querySelector('#album'),
  image: document.querySelector('#image'),
  gallery: document.querySelector('#gallery'),
};

function injectCard(wholeAlbum) {
  const cardDiv = document.createElement("div");
  cardDiv.className = "card";

  cardDiv.innerHTML = `
    <h2>${wholeAlbum.artist}</h2>
    <h3>${wholeAlbum.genre}</h3>
    <h3>${wholeAlbum.album}</h3>
    <img src="${wholeAlbum.image}" alt="${wholeAlbum.album}" class="album-image">
    <button class="remove-button">Remove</button>
  `;

  DOMSelectors.gallery.appendChild(cardDiv);

  const removeButton = cardDiv.querySelector(".remove-button");
  removeButton.addEventListener("click", function() {
    cardDiv.remove(); 
  });
}

DOMSelectors.form.addEventListener("submit", function(event){
  event.preventDefault();

  const wholeAlbum = {
    artist: DOMSelectors.artist.value,
    genre: DOMSelectors.genre.value,
    album: DOMSelectors.album.value,
    image: DOMSelectors.image.value,
  };

  injectCard(wholeAlbum);
});
