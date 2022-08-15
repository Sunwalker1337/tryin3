// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';

// Change code below this line

let gallery = document.querySelector('.gallery')

let imageGallery = galleryItems
.map((element)=>

`<div class="gallery__item">
  <a class="gallery__link" href="${element.original}">
    <img
      class="gallery__image"
      src="${element.preview}"
      alt="${element.description}"
    />
  </a>
</div>`)

gallery.insertAdjacentHTML("afterbegin", imageGallery.join(' '));

var lightbox = new SimpleLightbox('.gallery a', { 

  captionsData: 'alt',
  captionDelay: 250,
 });

