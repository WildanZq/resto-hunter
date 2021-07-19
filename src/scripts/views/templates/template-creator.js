import CONFIG from '../../globals/config';

const createLoadingTemplate = () => `
  <div class="loading"></div>
`;

const createHeroTemplate = (resto) => `
  <picture>
    <source
      media="(max-width: 600px)"
      data-srcset="${resto ? CONFIG.BASE_IMAGE_URL_SMALL + resto.pictureId : './images/heros/hero-image_2-small.jpg'}"
    >
    <img
      class="hero__img lazyload"
      data-src="${resto ? CONFIG.BASE_IMAGE_URL + resto.pictureId : './images/heros/hero-image_2-large.jpg'}"
      alt="${resto ? resto.name : 'Hero'}"
    />
  </picture>
  <div class="hero__content">
    <h1 class="hero__title">${resto ? resto.name : 'Temukan Restoran Favoritmu'}</h1>
  </div>
`;

const createRestoItemTemplate = (resto) => `
  <a href="#/detail/${resto.id}" class="restaurant__a">
    <article class="restaurant__item">
      <picture>
        <source
          media="(max-width: 600px)"
          data-srcset="${CONFIG.BASE_IMAGE_URL_SMALL + resto.pictureId}"
        >
        <img
          class="restaurant__img lazyload"
          data-src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}"
          alt="${resto.name}"
        />
      </picture>
      <div class="restaurant__content">
        <h1 class="restaurant__title">${resto.name}</h1>
        <p class="restaurant__desc">${resto.description}</p>
        <span class="restaurant__rating">${resto.rating}</span>
        <div class="restaurant__footer">
          <span class="restaurant__location">${resto.city}</span>
          <span class="restaurant__cta">Lihat detail</span>
        </div>
      </div>
    </article>
  </a>
`;

const createCategoryTemplate = (categories = []) => {
  let r = '<div class="tag__container">';
  categories.forEach((category) => {
    r += `<span class="tag__item">${category.name}</span>`;
  });
  r += '</div>';
  return r;
};

const createMenuItemTemplate = (menus = []) => {
  let r = '<ul class="menu__container">';
  menus.forEach((menu) => {
    r += `<li class="menu__item">${menu.name}</li>`;
  });
  r += '</ul>';
  return r;
};

const createMenuListTemplate = (menus) => `
  <div class="menu">
    <div>
      <h2 class="menu__title">Makanan</h2>
      ${createMenuItemTemplate(menus.foods)}
    </div>
    <div>
      <h2 class="menu__title">Minuman</h2>
      ${createMenuItemTemplate(menus.drinks)}
    </div>
  </div>
`;

const createReviewListTemplate = (reviews = []) => {
  let r = '<div class="review">';
  r += '<h2 class="review__title">Ulasan Pembeli</h2>';
  reviews.forEach((review) => {
    r += `
      <div class="review__item">
        <h3 class="review__customer">${review.name}</h3>
        <span class="review__date">${review.date}</span>
        <p class="review__content">"${review.review}"</p>
      </div>
    `;
  });
  r += '</div>';
  return r;
};

const createRestoDetailTemplate = (resto) => `
  ${createCategoryTemplate(resto.categories)}
  <p class="address">${resto.address}, ${resto.city}</p>
  <span class="rating">${resto.rating}</span>
  <p>${resto.description}</p>
  ${createMenuListTemplate(resto.menus)}
  ${createReviewListTemplate(resto.customerReviews)}
`;

const createLikeButtonTemplate = () => `
  <button aria-label="add to favorite" id="likeButton" class="like-btn"></button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="remove from favorite" id="likeButton" class="like-btn liked"></button>
`;

export {
  createLoadingTemplate,
  createHeroTemplate,
  createRestoItemTemplate,
  createRestoDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
