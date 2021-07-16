import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import RestaurantsSource from '../../data/restaurants-source';
import UrlParser from '../../routes/url-parser';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import { createHeroTemplate, createLoadingTemplate, createRestoDetailTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
      <div class="hero" id="hero"></div>
      <div id="likeButtonContainer" class="like-btn__container"></div>
      <section class="container" id="restaurant"></section>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restoContainer = document.querySelector('#restaurant');

    restoContainer.innerHTML = createLoadingTemplate();
    const resto = await RestaurantsSource.getDetail(url.id);

    if (resto) {
      restoContainer.innerHTML = '';

      const heroContainer = document.querySelector('#hero');
      heroContainer.innerHTML = createHeroTemplate(resto);

      restoContainer.innerHTML += createRestoDetailTemplate(resto);

      LikeButtonInitiator.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        favoriteResto: FavoriteRestaurantIdb,
        restaurant: resto,
      });
    }
  },
};

export default Detail;
