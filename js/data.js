'use strict';

(function () {
  var TYPE_HOUSE = ['palace', 'flat', 'house', 'bungalo'];
  var QUANTITY_ROOMS = ['1', '2', '3', '100'];
  var QUANTITY_GUESTS = ['1', '2', '3'];
  var CHECKIN = ['12:00', '13:00', '14:00'];
  var CHECKOUT = ['12:00', '13:00', '14:00'];
  var FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
  var PHOTOS_HOTEL = [
    'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
    'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
    'http://o0.github.io/assets/images/tokyo/hotel3.jpg'
  ];

  window.data = {
    getHouse: function () {

      return {
        'author': {
          avatar: window.utils.getAutorAvatarSrc()
        },

        'offer': {
          'title': 'Это дом лучше предыдущего',
          'address': '600, 350',
          'price': window.utils.getRandomNumber(),
          'type': window.utils.getRandomElement(TYPE_HOUSE),
          'rooms': window.utils.getRandomElement(QUANTITY_ROOMS),
          'guests': window.utils.getRandomElement(QUANTITY_GUESTS),
          'checkin': window.utils.getRandomElement(CHECKIN),
          'checkout': window.utils.getRandomElement(CHECKOUT),
          'features': window.utils.getRandomElement(FEATURES),
          'description': '',
          'photos': window.utils.getRandomElement(PHOTOS_HOTEL)
        },

        'location': {
          'x': window.utils.getRandomNumberRange(0, 1200),
          'y': window.utils.getRandomNumberRange(130, 630)
        }
      };
    }

  };
})();
