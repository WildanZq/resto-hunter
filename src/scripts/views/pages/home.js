import RestaurantsSource from '../../data/restaurants-source';
import { createHeroTemplate, createLoadingTemplate, createRestoItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
      <div class="hero" id="hero"></div>
      <section class="restaurant container" id="restaurant"></section>
    `;
  },

  async afterRender() {
    const heroContainer = document.querySelector('#hero');
    heroContainer.innerHTML = createHeroTemplate();

    const restoContainer = document.querySelector('#restaurant');
    restoContainer.innerHTML = createLoadingTemplate();
    const resto = await RestaurantsSource.getList();

    if (resto) {
      restoContainer.innerHTML = '';

      resto.forEach((restaurant) => {
        restoContainer.innerHTML += createRestoItemTemplate(restaurant);
      });
    }
  },
};

export default Home;
