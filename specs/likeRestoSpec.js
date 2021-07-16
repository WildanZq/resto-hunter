const { default: FavoriteRestaurantIdb } = require("../src/scripts/data/favorite-restaurant-idb");
const { createLikeButtonInitiatorWithResto, addLikeButtonContainer } = require("./helpers/testFactories");

describe('Like a Resto', () => {
  beforeEach(() => {
    addLikeButtonContainer();
  });

  it('show like button when resto is not liked', async () => {
    await createLikeButtonInitiatorWithResto({ id: 1 });

    expect(document.querySelector('[aria-label="add to favorite"]'))
      .toBeTruthy();
  });

  it('not show unlike button when resto is not liked', async () => {
    await createLikeButtonInitiatorWithResto({ id: 1 });

    expect(document.querySelector('[aria-label="remove from favorite"]')).toBeFalsy();
  });

  it('can like resto', async () => {
    await createLikeButtonInitiatorWithResto({ id: 1 });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    const resto = await FavoriteRestaurantIdb.getRestaurant(1);

    expect(resto).toEqual({ id: 1 });

    FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('not add resto again when its already liked', async () => {
    await createLikeButtonInitiatorWithResto({ id: 1 });

    await FavoriteRestaurantIdb.putRestaurant({ id: 1 });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([{ id: 1 }]);

    FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('not add resto if it has no id', async () => {
    await createLikeButtonInitiatorWithResto({});

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });
})
