import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector(".gallery");
/* --------------------------------- Галерея -------------------------------- */
const galleryHTML = galleryItems
  .map(({ original, description, preview }) => {
    return `
    <a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>
  `;
  })
  .join("");
galleryRef.insertAdjacentHTML("beforeend", galleryHTML);

/* -------------------------------------------------------------------------- */
const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: "250",
});
