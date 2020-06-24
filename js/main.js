'use strict';
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
// var QUANTITY_HOTEL = 8;

var map = document.querySelector('.map');
map.classList.remove('map--faded');

var mapPinsElement = map.querySelector('.map__pins');
var mapPinsTemplate = document.querySelector('#pin');

var number = 0;
var getNumber = function () {
  number += 1;
  return number;
};

var getRandomNumber = function () {
  var elementRandom = Math.floor(Math.random() * 1000);
  return elementRandom;
};

var getRandomNumberRange = function (min, max) {
  var elementRandom = Math.floor(Math.random() * (max - min)) + min;
  return elementRandom;
};

var getRandomElement = function (array) {
  var elementRandom = array[Math.floor(Math.random() * array.length)];
  return elementRandom;
};

var getAutorAvatarSrc = function () {
  var autorAvatarSrc = '';
  if (number <= 9) {
    autorAvatarSrc = 'img/avatars/user' + '0' + getNumber() + '.png';
  } else {
    autorAvatarSrc = 'img/avatars/user' + getNumber() + '.png';
  }

  return autorAvatarSrc;
};

var getHouse = function () {
  // var house = {};

  return {
    house: {
      'author': {
        avatar: getAutorAvatarSrc()
      },

      'offer': {
        'title': 'Это дом лучше предыдущего',
        'address': '600, 350',
        'price': getRandomNumber(),
        'type': getRandomElement(TYPE_HOUSE),
        'rooms': getRandomElement(QUANTITY_ROOMS),
        'guests': getRandomElement(QUANTITY_GUESTS),
        'checkin': getRandomElement(CHECKIN),
        'checkout': getRandomElement(CHECKOUT),
        'features': getRandomElement(FEATURES),
        'description': '',
        'photos': getRandomElement(PHOTOS_HOTEL)
      },

      'location': {
        'x': getRandomNumberRange(0, 1200),
        'y': getRandomNumberRange(130, 630)
      }
    }
  };
};

var house = getHouse();

var getHousePin = function () {

  var mapPins = mapPinsTemplate.cloneNode(true);

  mapPins.querySelector('.map__pin').src = house.author.avatar;
  mapPins.querySelector('.map__pin').style.left = house.location.x + 'px';
  mapPins.querySelector('.map__pin').style.top = house.location.y + 'px';


  return mapPins;
};

var houseElement = getHousePin();

mapPinsElement.appendChild(houseElement);
/*
var getHouseElement = function () {
  var house = getHouse();
  return house;
};

var getMapPins = function () {

  var mapPins = mapPinsTemplate.cloneNode(true);

  mapPins.querySelector('.map__pin').src = getHouseElement().avatar;
  mapPins.querySelector('.map__pin').style.left = getHouseElement().location.x + 'px';
  mapPins.querySelector('.map__pin').style.top = getHouseElement().location.y + 'px';


  return mapPins;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < QUANTITY_HOTEL; i++) {
  fragment.appendChild(getMapPins());
}
mapPinsElement.appendChild(fragment);
*/
