import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryRef = document.querySelector(".gallery");
/* --------------------------------- Галерея -------------------------------- */
const galleryHTML = galleryItems
  .map(({ original, description, preview }) => {
    return `
    <div class="gallery__item">
    <a class="gallery__link" href="${original} ">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>
  `;
  })
  .join("");
galleryRef.insertAdjacentHTML("beforeend", galleryHTML);

galleryRef.addEventListener("click", onClickGallery);
/* -------------------------------------------------------------------------- */
function onClickGallery(e) {
  if (e.target.nodeName !== "IMG") {
    return;
  }
  e.preventDefault();
  const BigImageLink = e.target.dataset.source;
  const instance = basicLightbox.create(` <img src="${BigImageLink}">`);
  instance.show();
  /* ----------------------------- close when esc ----------------------------- */
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      instance.close();

      document.removeEventListener("keydown", event);
    }
  });
}
