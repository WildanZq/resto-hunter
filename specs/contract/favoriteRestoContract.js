const itActsAsFavoriteRestoModel = (favoriteResto) => {
  it('return added resto', async () => {
    favoriteResto.putRestaurant({ id: 1 });
    favoriteResto.putRestaurant({ id: 2 });

    expect(await favoriteResto.getRestaurant(1))
      .toEqual({ id: 1 });
    expect(await favoriteResto.getRestaurant(2))
      .toEqual({ id: 2 });
    expect(await favoriteResto.getRestaurant(3))
      .toEqual(undefined);
  });

  it('not add resto if it does not have the correct property', async () => {
    favoriteResto.putRestaurant({ random: 'property' });

    expect(await favoriteResto.getAllRestaurants())
      .toEqual([]);
  });

  it('return all of resto that have been added', async () => {
    favoriteResto.putRestaurant({ id: 1 });
    favoriteResto.putRestaurant({ id: 2 });

    expect(await favoriteResto.getAllRestaurants())
      .toEqual([
        { id: 1 },
        { id: 2 },
      ]);
  });

  it('remove favorite resto', async () => {
    favoriteResto.putRestaurant({ id: 1 });
    favoriteResto.putRestaurant({ id: 2 });
    favoriteResto.putRestaurant({ id: 3 });

    await favoriteResto.deleteRestaurant(1);

    expect(await favoriteResto.getAllRestaurants())
      .toEqual([
        { id: 2 },
        { id: 3 },
      ]);
  });

  it('handle request to remove resto even if resto has not been added', async () => {
    favoriteResto.putRestaurant({ id: 1 });
    favoriteResto.putRestaurant({ id: 2 });
    favoriteResto.putRestaurant({ id: 3 });

    await favoriteResto.deleteRestaurant(4);

    expect(await favoriteResto.getAllRestaurants())
      .toEqual([
        { id: 1 },
        { id: 2 },
        { id: 3 },
      ]);
  });
};

export { itActsAsFavoriteRestoModel };
