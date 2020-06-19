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

// var randomNumber = function () {
//  var elementRandom = Math.floor(Math.random() * 1000);
//  return elementRandom;
// };

var randomNumberRange = function (min, max) {
  var elementRandom = Math.floor(Math.random() * (max - min)) + min;
  return elementRandom;
};

var randomElement = function (array) {
  var elementRandom = array[Math.floor(Math.random() * array.length)];
  return elementRandom;
};

var getHouse = function (typeHouse, quantityRooms, quantityGuests, checkin, checkout, features, photosHotel) {
  var house = {};
  house.avatar = 'img/avatars/user' + '0' + getNumber() + '.png';
  house.title = 'Это дом лучше предыдущего';
  house.address = '600, 350';
  house.price = randomElement();
  house.type = randomElement(typeHouse);
  house.rooms = randomElement(quantityRooms);
  house.guests = randomElement(quantityGuests);
  house.checkin = randomElement(checkin);
  house.checkout = randomElement(checkout);
  house.features = randomElement(features);
  house.description = '';
  house.photos = randomElement(photosHotel);
  house.location.x = randomNumberRange(130, (window).width());
  house.location.y = randomNumberRange(130, 630);

  return house;
};
var getHouseElement = function () {
  var house = getHouse(TYPE_HOUSE, QUANTITY_ROOMS, QUANTITY_GUESTS, CHECKIN, CHECKOUT, FEATURES, PHOTOS_HOTEL);
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
