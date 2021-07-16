import FavoriteRestaurantIdb from "../../src/scripts/data/favorite-restaurant-idb";

const { default: LikeButtonInitiator } = require("../../src/scripts/utils/like-button-initiator");

const createLikeButtonInitiatorWithResto = async (restaurant) => {
  await LikeButtonInitiator.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteResto: FavoriteRestaurantIdb,
    restaurant,
  });
};

const addLikeButtonContainer = () => {
  document.body.innerHTML = '<div id="likeButtonContainer"></div>';
};

export { createLikeButtonInitiatorWithResto, addLikeButtonContainer };
