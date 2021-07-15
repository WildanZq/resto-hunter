const assert = require('assert');

Feature('Liking Resto');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('show empty liked resto', ({ I }) => {
  I.seeElement('#restaurant');
  I.see('Anda belum memiliki restoran favorit', '#restaurant');
});

Scenario('like a resto', async ({ I }) => {
  I.see('Anda belum memiliki restoran favorit', '#restaurant');

  I.amOnPage('/');
  I.seeElement('.restaurant__a');

  const resto = locate('.restaurant__a').first();
  const restoTitle = await I.grabTextFrom(resto.find('.restaurant__title'));
  I.click(resto);

  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.seeElement('#likeButton.liked');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant__item');
  const likedRestoTitle = await I.grabTextFrom('.restaurant__title');

  assert.strictEqual(restoTitle, likedRestoTitle);
});

Scenario('unlike a resto', async ({ I }) => {
  I.seeElement('.restaurant__a');

  I.click(locate('.restaurant__a').first());

  I.seeElement('#likeButton.liked');
  I.click('#likeButton');
  I.dontSeeElement('#likeButton.liked');

  I.amOnPage('/#/favorite');
  I.seeElement('#restaurant');
  I.see('Anda belum memiliki restoran favorit', '#restaurant');
});
