import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createHeroTemplate, createLoadingTemplate, createRestoItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
      <div class="hero" id="hero"></div>
      <div class="container">
        <h1 class="favorite-title">Restoran Favoritmu</h1>
      </div>
      <section class="restaurant container" id="restaurant"></section>
    `;
  },

  async afterRender() {
    const heroContainer = document.querySelector('#hero');
    heroContainer.innerHTML = createHeroTemplate();

    const restoContainer = document.querySelector('#restaurant');
    restoContainer.innerHTML = createLoadingTemplate();
    const resto = await FavoriteRestaurantIdb.getAllRestaurants();

    if (resto && resto.length > 0) {
      restoContainer.innerHTML = '';

      resto.forEach((restaurant) => {
        restoContainer.innerHTML += createRestoItemTemplate(restaurant);
      });
    } else {
      restoContainer.innerHTML = '<h3>Anda belum memiliki restoran favorit</h3>';
    }
  },
};

export default Favorite;
