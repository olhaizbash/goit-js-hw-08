// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
const galleryItemRefs = document.querySelector('.gallery');

function createGalleryItemElements(elements) {
    return elements.map((element) => `<li class="gallery__item">
   <a class="gallery__link" href="${element.original}">
      <img class="gallery__image" src="${element.preview}" alt="${element.description}" />
   </a>
</li>`).join('');
}

galleryItemRefs.innerHTML = createGalleryItemElements(galleryItems);

let lightbox = new SimpleLightbox('.gallery a', {
    captions: 'true',
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: '250',
});