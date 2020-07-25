'use strict';
(function () {
  var cardPopup = document.querySelector('#card').content.querySelector('.map__card.popup');
  var map = document.querySelector('.map');
  var mapFilter = map.querySelector('.map__filters-container');

  window.card = function () {
    var cardPopupList = cardPopup.cloneNode(true);

    cardPopupList.querySelector('.popup__avatar').src = window.data.getHouse().author.avatar;
    cardPopupList.querySelector('.popup__close').value = 'Закрыть';
    cardPopupList.querySelector('.popup__title').textContent = window.data.getHouse().offer.title;
    cardPopupList.querySelector('.popup__text.popup__text--address').textContent = window.data.getHouse().offer.address;
    cardPopupList.querySelector('.popup__text.popup__text--price').textContent = window.data.getHouse().offer.price;
    cardPopupList.querySelector('.popup__type').textContent = window.data.getHouse().offer.type;
    cardPopupList.querySelector('.popup__text.popup__text--capacity').textContent = window.data.getHouse().offer.rooms + ' комнаты для ' + window.data.getHouse().offer.guests + ' гостей';
    cardPopupList.querySelector('.popup__text.popup__text--time').textContent = 'Заезд после ' + window.data.getHouse().offer.checkin + ', выезд до ' + window.data.getHouse().offer.checkout;
    cardPopupList.querySelector('.popup__features').textContent = window.data.getHouse().offer.features;
    cardPopupList.querySelector('.popup__description').textContent = window.data.getHouse().offer.description;
    cardPopupList.querySelector('.popup__photos').querySelector('.popup__photo').src = window.data.getHouse().offer.photos;
    cardPopupList.querySelector('.popup__photos').appendChild(cardPopup.querySelector('.popup__photos').querySelector('.popup__photo')).src = window.data.getHouse().offer.photos;

    return cardPopupList;
  };

  map.insertBefore(window.card(), mapFilter);

})();
