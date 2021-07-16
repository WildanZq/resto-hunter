const { default: FavoriteRestaurantIdb } = require("../src/scripts/data/favorite-restaurant-idb");
const { createLikeButtonInitiatorWithResto, addLikeButtonContainer } = require("./helpers/testFactories");

describe('Unlike a Resto', () => {
  beforeEach(async () => {
    addLikeButtonContainer();
    await FavoriteRestaurantIdb.putRestaurant({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('show unlike button if resto has been liked', async () => {
    await createLikeButtonInitiatorWithResto({ id: 1 });

    expect(document.querySelector('[aria-label="remove from favorite"]')).toBeTruthy();
  });

  it('not show like button if resto has been liked', async () => {
    await createLikeButtonInitiatorWithResto({ id: 1 });

    expect(document.querySelector('[aria-label="add to favorite"]')).toBeFalsy();
  });

  it('remove liked resto', async () => {
    await createLikeButtonInitiatorWithResto({ id: 1 });

    document.querySelector('[aria-label="remove from favorite"]').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });

  it('not throw error if unliked resto is not exist', async () => {
    await createLikeButtonInitiatorWithResto({ id: 1 });

    await FavoriteRestaurantIdb.deleteRestaurant(1);

    document.querySelector('[aria-label="remove from favorite"]').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });
})
