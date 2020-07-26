'use strict';
(function () {
  var cardPopup = document.querySelector('#card').content.querySelector('.map__card.popup');
  var map = document.querySelector('.map');
  var mapFilter = map.querySelector('.map__filters-container');

  window.createCard = function (data) {
    var cardPopupList = cardPopup.cloneNode(true);
    var buttonClose = cardPopupList.querySelector('.popup__close');
    var cardFeatures = cardPopupList.querySelector('.popup__features');
    var cardFeature = cardFeatures.children;

    cardPopupList.querySelector('.popup__avatar').src = data.author.avatar;
    cardPopupList.querySelector('.popup__close').value = 'Закрыть';
    cardPopupList.querySelector('.popup__title').textContent = data.offer.title;
    cardPopupList.querySelector('.popup__text.popup__text--address').textContent = data.offer.address;
    cardPopupList.querySelector('.popup__text.popup__text--price').textContent = data.offer.price;
    //  cardPopupList.querySelector('.popup__type').textContent = data.offer.type;

    cardPopupList.querySelector('.popup__text.popup__text--capacity').textContent = data.offer.rooms + ' комнаты для ' + data.offer.guests + ' гостей';
    cardPopupList.querySelector('.popup__text.popup__text--time').textContent = 'Заезд после ' + data.offer.checkin + ', выезд до ' + data.offer.checkout;
    for (var i = 0; i < data.offer.features.length; i++) {
      if (data.offer.features[i] !== 'wifi') {
        cardFeatures.querySelector('.popup__feature.popup__feature--wifi').classList.add('hidden');
      }
      if (data.offer.features[i] !== 'dishwasher') {
        cardFeatures.querySelector('.popup__feature.popup__feature--dishwasher').classList.add('hidden');
      }
      if (data.offer.features[i] !== 'parking') {
        cardFeatures.querySelector('.popup__feature.popup__feature--dishwasher').classList.add('hidden');
      }
      if (data.offer.features[i] !== 'washer') {
        cardFeatures.querySelector('.popup__feature.popup__feature--dishwasher').classList.add('hidden');
      }
      if (data.offer.features[i] !== 'elevator') {
        cardFeatures.querySelector('.popup__feature.popup__feature--dishwasher').classList.add('hidden');
      }
      if (data.offer.features[i] !== 'conditioner') {
        cardFeatures.querySelector('.popup__feature.popup__feature--dishwasher').classList.add('hidden');
      }
      if (data.offer.features[i] === '') {
        cardFeatures.removeChild(cardFeature);
      }
    }

    cardPopupList.querySelector('.popup__description').textContent = data.offer.description;

    for (var j = 0; j < data.offer.photos.length; j++) {
      cardPopupList.querySelector('.popup__photos').appendChild(cardPopupList.querySelector('.popup__photos').querySelector('.popup__photo')).src = data.offer.photos[j];
    }

    buttonClose.addEventListener('click', function () {
      map.removeChild(cardPopupList);
    });

    return cardPopupList;
  };

  window.insertCard = function (data) {
    return map.insertBefore(window.createCard(data), mapFilter);
  };

  window.getCardType = function (data) {
    var cardPopupList = cardPopup.cloneNode(true);

    for (var k; k < data.offer.features.length; k++) {
      if (data.offer.features[k] === 'bungalo') {
        cardPopupList.querySelector('.popup__type').textContent = 'Бунгало';
      }
      if (data.offer.features[k] === 'house') {
        cardPopupList.querySelector('.popup__type').textContent = 'Дом';
      }
      if (data.offer.features[k] === 'flat') {
        cardPopupList.querySelector('.popup__type').textContent = 'Квартира';
      }
      if (data.offer.features[k] === 'palace') {
        cardPopupList.querySelector('.popup__type').textContent = 'Дворец';
      }
    }
  };

})();
