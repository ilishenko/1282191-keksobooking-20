'use strict';
(function () {
  var cardPopup = document.querySelector('#card').content.querySelector('.map__card.popup');
  var map = document.querySelector('.map');
  var mapFilter = map.querySelector('.map__filters-container');

  window.createCard = function (data) {
    var cardPopupList = cardPopup.cloneNode(true);

    cardPopupList.querySelector('.popup__avatar').src = data.author.avatar;
    cardPopupList.querySelector('.popup__close').value = 'Закрыть';
    cardPopupList.querySelector('.popup__title').textContent = data.offer.title;
    cardPopupList.querySelector('.popup__text.popup__text--address').textContent = data.offer.address;
    cardPopupList.querySelector('.popup__text.popup__text--price').textContent = data.offer.price;
    cardPopupList.querySelector('.popup__type').textContent = data.offer.type;
    cardPopupList.querySelector('.popup__text.popup__text--capacity').textContent = data.offer.rooms + ' комнаты для ' + data.offer.guests + ' гостей';
    cardPopupList.querySelector('.popup__text.popup__text--time').textContent = 'Заезд после ' + data.offer.checkin + ', выезд до ' + data.offer.checkout;
    for (var i = 0; i < data.offer.features.length; i++) {
      if (data.offer.features[i] === 'wifi') {
        cardPopupList.querySelector('.popup__features').appendChild(cardPopupList.querySelector('.popup__features').querySelector('.popup__feature.popup__feature--wifi'));
      }
      if (data.offer.features[i] === 'dishwasher') {
        cardPopupList.querySelector('.popup__features').appendChild(cardPopupList.querySelector('.popup__features').querySelector('.popup__feature.popup__feature--dishwasher'));
      }
    }

    cardPopupList.querySelector('.popup__description').textContent = data.offer.description;
    // cardPopupList.querySelector('.popup__photos').querySelector('.popup__photo').src = data.offer.photos;
    for (var j = 0; j < data.offer.photos.length; j++) {
      cardPopupList.querySelector('.popup__photos').appendChild(cardPopupList.querySelector('.popup__photos').querySelector('.popup__photo')).src = data.offer.photos[j];
    }

    return cardPopupList;
  };

  window.insertCard = function (data) {
    return map.insertBefore(window.createCard(data), mapFilter);
  };

})();
