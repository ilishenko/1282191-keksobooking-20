'use strict';
(function () {
  var cardPopup = document.querySelector('#card').content.querySelector('.map__card.popup');
  var map = document.querySelector('.map');
  var mapFilter = map.querySelector('.map__filters-container');

  var TYPE_HOUSE = {
    'bungalo': 'Бунгало',
    'house': 'Дом',
    'flat': 'Квартира',
    'palace': 'Дворец'
  };

  window.createCard = function (data) {
    var cardPopupList = cardPopup.cloneNode(true);
    var buttonClose = cardPopupList.querySelector('.popup__close');
    var cardFeature = cardPopupList.querySelector('.popup__features');
    var cardFeatures = cardFeature.children;

    cardPopupList.querySelector('.popup__avatar').src = data.author.avatar;
    cardPopupList.querySelector('.popup__close').value = 'Закрыть';
    cardPopupList.querySelector('.popup__title').textContent = data.offer.title;
    cardPopupList.querySelector('.popup__text.popup__text--address').textContent = data.offer.address;
    cardPopupList.querySelector('.popup__text.popup__text--price').textContent = data.offer.price;
    cardPopupList.querySelector('.popup__type').textContent = TYPE_HOUSE[data.offer.type];

    cardPopupList.querySelector('.popup__text.popup__text--capacity').textContent = data.offer.rooms + ' комнаты для ' + data.offer.guests + ' гостей';
    cardPopupList.querySelector('.popup__text.popup__text--time').textContent = 'Заезд после ' + data.offer.checkin + ', выезд до ' + data.offer.checkout;
    for (var i = 0; i < data.offer.features.length; i++) {
      if (data.offer.features[i] !== 'wifi') {
        cardFeature.querySelector('.popup__feature.popup__feature--wifi').classList.add('hidden');
      }
      if (data.offer.features[i] !== 'dishwasher') {
        cardFeature.querySelector('.popup__feature.popup__feature--dishwasher').classList.add('hidden');
      }
      if (data.offer.features[i] !== 'parking') {
        cardFeature.querySelector('.popup__feature.popup__feature--dishwasher').classList.add('hidden');
      }
      if (data.offer.features[i] !== 'washer') {
        cardFeature.querySelector('.popup__feature.popup__feature--dishwasher').classList.add('hidden');
      }
      if (data.offer.features[i] !== 'elevator') {
        cardFeature.querySelector('.popup__feature.popup__feature--dishwasher').classList.add('hidden');
      }
      if (data.offer.features[i] !== 'conditioner') {
        cardFeature.querySelector('.popup__feature.popup__feature--dishwasher').classList.add('hidden');
      }
      if (data.offer.features[i] === '') {
        cardFeature.removeChild(cardFeatures);
      }
    }

    cardPopupList.querySelector('.popup__description').textContent = data.offer.description;

    var fragment = document.createDocumentFragment();
    for (var j = 0; j < data.offer.photos.length; j++) {
      var newElement = document.createElement('img');
      newElement.className = 'popup__photo';
      newElement.alt = 'Фотография жилья';
      newElement.width = 45;
      newElement.height = 40;
      newElement.src = data.offer.photos[j];
      fragment.appendChild(newElement);
    }

    cardPopupList.querySelector('.popup__photos').appendChild(fragment);

    buttonClose.addEventListener('click', function () {
      map.removeChild(cardPopupList);
    });

    return cardPopupList;
  };

  window.insertCard = function (data) {
    map.insertBefore(window.createCard(data), mapFilter);
  };

  window.getCardRemove = function () {
    var cardPopupList = document.querySelector('.map__card.popup');
    if (cardPopupList) {
      map.removeChild(cardPopupList);
    }
  };

})();
