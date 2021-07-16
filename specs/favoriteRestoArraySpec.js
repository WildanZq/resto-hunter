const { itActsAsFavoriteRestoModel } = require("./contract/favoriteRestoContract");

let favoriteResto = [];

const FavoriteRestoArray = {
  getRestaurant(id) {
    if (!id) {
      return;
    }
    return favoriteResto.find((resto) => resto.id === id);
  },
  getAllRestaurants() {
    return favoriteResto;
  },
  putRestaurant(resto) {
    if (!resto.hasOwnProperty('id')) {
      return;
    }
    if (this.getRestaurant(resto.id)) {
      return;
    }
    favoriteResto.push(resto);
  },
  deleteRestaurant(id) {
    favoriteResto = favoriteResto.filter((resto) => resto.id !== id);
  },
};

describe('Favorite Resto Array Contract Test Implementation', () => {
  afterEach(() => favoriteResto = []);

  itActsAsFavoriteRestoModel(FavoriteRestoArray);
});
