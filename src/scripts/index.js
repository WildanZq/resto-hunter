import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import data from '../DATA.json';

const restoDiv = document.getElementById('restaurant');

data.restaurants.forEach((resto) => {
  restoDiv.insertAdjacentHTML(
    'beforeend',
    `<a href="#/detail/${resto.id}" class="restaurant__a">
      <article class="restaurant__item">
        <img class="restaurant__img" src="${resto.pictureId}" alt="${resto.name}">
        <div class="restaurant__content">
          <h1 class="restaurant__title">${resto.name}</h1>
          <p class="restaurant__desc">${resto.description}</p>
          <span class="restaurant__location">${resto.city}</span>
          <span class="restaurant__rating">${resto.rating}</span>
        </div>
      </article>
    </a>`,
  );
});
