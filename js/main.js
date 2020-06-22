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
var QUANTITY_HOTEL = 8;

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

var getHouse = function () {
  var house = {};
  if (number <= 9) {
    house.avatar = 'img/avatars/user' + '0' + getNumber() + '.png';
  } else {
    house.avatar = 'img/avatars/user' + getNumber() + '.png';
  };

  house.title = 'Это дом лучше предыдущего';
  house.address = '600, 350';
  house.price = getRandomNumber();
  house.type = getRandomElement(TYPE_HOUSE);
  house.rooms = getRandomElement(QUANTITY_ROOMS);
  house.guests = getRandomElement(QUANTITY_GUESTS);
  house.checkin = getRandomElement(CHECKIN);
  house.checkout = getRandomElement(CHECKOUT);
  house.features = getRandomElement(FEATURES);
  house.description = '';
  house.photos = getRandomElement(PHOTOS_HOTEL);
  house.location.x = getRandomNumberRange(0, 1200);
  house.location.y = getRandomNumberRange(130, 630);

  return house;
};

var house = getHouse();

var getMapPins = function () {

  var mapPins = mapPinsTemplate.cloneNode(true);

  mapPins.querySelector('.map__pin').src = house.avatar;
  mapPins.querySelector('.map__pin').style.left = house.location.x + 'px';
  mapPins.querySelector('.map__pin').style.top = house.location.y + 'px';


  return mapPins;
};

var houseElement = getMapPins();

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
