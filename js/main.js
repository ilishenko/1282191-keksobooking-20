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

var mapPinsElement = map.querySelector('.map__pins');
var mapPinsTemplate = document.querySelector('#pin').content.querySelector('.map__pin');

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
  if (number < 9) {
    autorAvatarSrc = 'img/avatars/user' + '0' + getNumber() + '.png';
  } else {
    autorAvatarSrc = 'img/avatars/user' + getNumber() + '.png';
  }

  return autorAvatarSrc;
};

var getHouse = function () {

  return {
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
  };
};

var getHouseElement = function () {
  var house = getHouse();

  return house;
};

var getHousePin = function () {
  var house = getHouseElement();
  var mapPins = mapPinsTemplate.cloneNode(true);

  mapPins.querySelector('img').src = house.author.avatar;
  mapPins.style.left = house.location.x + 'px';
  mapPins.style.top = house.location.y + 'px';


  return mapPins;
};


var fragment = document.createDocumentFragment();
for (var i = 0; i < QUANTITY_HOTEL; i++) {
  fragment.appendChild(getHousePin());
}
mapPinsElement.appendChild(fragment);

// Модуль 4
var formFilters = document.querySelector('.map__filters');
var formFiltersSelects = formFilters.querySelectorAll('.map__filter');
var formFiltersFildsetInputs = formFilters.querySelectorAll('input[type="checkbox"]');

var formNewHouse = document.querySelector('.ad-form');
var formNewHouseAvatarMap = formNewHouse.querySelector('.ad-form-header');
var formNewHouseAvatarMapInput = formNewHouseAvatarMap.querySelector('input');
var formNewHouseElements = formNewHouse.querySelectorAll('.ad-form__element');
var mapPinsElementStart = mapPinsElement.querySelector('.map__pin--main');
var formNewHouseDelete = formNewHouse.querySelector('.ad-form__reset');
var formNewHouseInputTextes = formNewHouse.querySelectorAll('input[type="text"]');
var formNewHouseTextarea = formNewHouse.querySelector('textarea');

var getInactivePage = function () {
  map.classList.add('map--faded');
  formFiltersSelects.forEach(function (formFiltersSelect) {
    formFiltersSelect.disabled = true;
  });

  formFiltersFildsetInputs.forEach(function (formFiltersFildsetInput) {
    formFiltersFildsetInput.disabled = true;
  });

  formNewHouse.classList.add('ad-form--disabled');
  formNewHouseAvatarMapInput.disabled = true;

  formNewHouseElements.forEach(function (formNewHouseElement) {
    formNewHouseElement.disabled = true;
  });
  formNewHouseInputTextes.forEach(function (formNewHouseInputText) {
    formNewHouseInputText.value = '';
  });
  formNewHouseTextarea.value = '';

  mapPinsElementStart.style.left = 570 + 'px';
  mapPinsElementStart.style.top = 375 + 'px';
};

getInactivePage();

var getActivePage = function () {
  map.classList.remove('map--faded');
  formFiltersSelects.forEach(function (formFiltersSelect) {
    formFiltersSelect.disabled = false;
  });
  formFiltersFildsetInputs.forEach(function (formFiltersFildsetInput) {
    formFiltersFildsetInput.disabled = false;
  });

  formNewHouse.classList.remove('ad-form--disabled');
  formNewHouseAvatarMapInput.disabled = false;
  formNewHouseElements.forEach(function (formNewHouseElement) {
    formNewHouseElement.disabled = false;
  });
};

mapPinsElementStart.addEventListener('mousedown', function (evt) {
  if (evt.which === 1) {
    getActivePage();
  }
});

mapPinsElementStart.addEventListener('mousemove', function (evt) {
  var mouseX = evt.pageX;
  var mouseY = evt.pageY;
  mapPinsElementStart.style.left = mouseX - 78 + 'px';
  mapPinsElementStart.style.top = mouseY - 78 + 'px';
});

mapPinsElementStart.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    getActivePage();
  }
});

formNewHouseDelete.addEventListener('click', function () {
  getInactivePage();
});

formNewHouseDelete.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    getInactivePage();
  }
});
