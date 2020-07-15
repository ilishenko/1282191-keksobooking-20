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

  mapPinsElement.appendChild(fragment);
};

mapPinsElementStart.addEventListener('mousedown', function (evt) {
  evt.preventDefault();
  if (evt.which === 1) {
    getActivePage();
    /*
    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };
*/
    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();
      /*
      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };
console.log('two: ' + startCoords.x);
console.log(startCoords.y);

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };
console.log('thre: ' + shift.x);
console.log(shift.y);
*/
      mapPinsElementStart.style.top = +(moveEvt.clientY + 130) + 'px';
      mapPinsElementStart.style.left = +(moveEvt.clientX - 60) + 'px';
      getAddress(moveEvt);
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  }
});
/*
mapPinsElementStart.addEventListener('mousemove', function (evt) {
  var mouseX = evt.pageX;
  var mouseY = evt.pageY;
  mapPinsElementStart.style.left = mouseX - 78 + 'px';
  mapPinsElementStart.style.top = mouseY - 78 + 'px';
});
*/
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

// Валидация

var titleAd = formNewHouse.querySelector('#title');

titleAd.addEventListener('invalid', function () {
  if (titleAd.validity.valueMissing) {
    titleAd.setCustomValidity('Обязательное поле');
  } else {
    titleAd.setCustomValidity('');
  }
});

titleAd.addEventListener('input', function () {
  var valueLength = titleAd.value.length;

  if (valueLength < 30) {
    titleAd.setCustomValidity('Ещё ' + (30 - valueLength) + ' симв.');
    titleAd.style.borderColor = 'red';
    titleAd.style.outlineColor = 'red';
  } else if (valueLength > 100) {
    titleAd.setCustomValidity('Удалите лишние ' + (valueLength - 100) + ' симв.');
    titleAd.style.borderColor = 'red';
  } else {
    titleAd.setCustomValidity('');
    titleAd.style.borderColor = 'green';
    titleAd.style.outlineColor = 'green';
  }
});

var address = formNewHouse.querySelector('#address');

var getAddress = function (evt) {
  if (mapPinsElementStart.style.left === '570px' && mapPinsElementStart.style.top === '375px') {
    address.value = '648, 531';
  } else {
    var x = +(evt.clientX) + 78;
    var y = +(evt.clientY) + 156;
    address.value = x + ', ' + y;
  }

};
getAddress();

var typeHouse = formNewHouse.querySelector('#type');
var price = formNewHouse.querySelector('#price');

var filterPrice = function () {
  if (typeHouse.value === 'bungalo') {
    price.setAttribute('min', '0');
    price.setAttribute('placeholder', '0');
  } else if (typeHouse.value === 'flat') {
    price.setAttribute('min', '1000');
    price.setAttribute('placeholder', '1000');
  } else if (typeHouse.value === 'house') {
    price.setAttribute('min', '5000');
    price.setAttribute('placeholder', '5000');
  } else if (typeHouse.value === 'palace') {
    price.setAttribute('min', '10000');
    price.setAttribute('placeholder', '10000');
  }
};

typeHouse.addEventListener('change', filterPrice);

var timeIn = formNewHouse.querySelector('#timein');
var timeOut = formNewHouse.querySelector('#timeout');

var controlTime = {
  TWELVE: '12:00',
  THIRTEEN: '13:00',
  FOURTEEN: '14:00'
};

var timeInChange = function () {
  if (timeIn.value === controlTime.TWELVE) {
    timeOut.selectedIndex = 0;
  } else if (timeIn.value === controlTime.THIRTEEN) {
    timeOut.selectedIndex = 1;

  } else if (timeIn.value === controlTime.FOURTEEN) {
    timeOut.selectedIndex = 2;
  }
};

var timeOutChange = function () {
  if (timeOut.value === controlTime.TWELVE) {
    timeIn.selectedIndex = 0;
  } else if (timeOut.value === controlTime.THIRTEEN) {
    timeIn.selectedIndex = 1;

  } else if (timeOut.value === controlTime.FOURTEEN) {
    timeIn.selectedIndex = 2;
  }
};

timeIn.addEventListener('change', timeInChange);
timeOut.addEventListener('change', timeOutChange);

var roomNumber = formNewHouse.querySelector('#room_number');
var capacity = formNewHouse.querySelector('#capacity');

var filterRooms = function () {
  if (roomNumber.value === '1') {
    capacity.options[0].disabled = true;
    capacity.options[1].disabled = true;
    capacity.options[2].disabled = false;
    capacity.options[3].disabled = true;
    capacity.options[2].selected = true;
    capacity.options[0].selected = false;
  } else if (roomNumber.value === '2') {
    capacity.options[0].disabled = true;
    capacity.options[1].disabled = false;
    capacity.options[2].disabled = false;
    capacity.options[3].disabled = true;
    capacity.options[2].selected = true;
  } else if (roomNumber.value === '3') {
    capacity.options[0].disabled = false;
    capacity.options[1].disabled = false;
    capacity.options[2].disabled = false;
    capacity.options[3].disabled = true;
    capacity.options[1].selected = true;
  } else if (roomNumber.value === '100') {
    capacity.options[0].disabled = true;
    capacity.options[1].disabled = true;
    capacity.options[2].disabled = true;
    capacity.options[3].disabled = false;
    capacity.options[3].selected = true;
  }
};

roomNumber.addEventListener('change', filterRooms);
