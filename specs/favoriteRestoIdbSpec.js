const { default: FavoriteRestaurantIdb } = require("../src/scripts/data/favorite-restaurant-idb");
const { itActsAsFavoriteRestoModel } = require("./contract/favoriteRestoContract");

describe('Favorite Resto Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteRestaurantIdb.getAllRestaurants()).forEach(async (resto) => {
      await FavoriteRestaurantIdb.deleteRestaurant(resto.id);
    });
  });

  itActsAsFavoriteRestoModel(FavoriteRestaurantIdb);
});
