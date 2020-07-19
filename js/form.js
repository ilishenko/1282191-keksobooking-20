'use strict';

(function () {
  var PIN_START_X = 570;
  var PIN_START_Y = 375;
  var PIN_WIDTH = 156;
  var PIN_HEIGTH = 156;

  var map = document.querySelector('.map');
  var mapPinsElement = map.querySelector('.map__pins');
  var formNewHouse = document.querySelector('.ad-form');
  var titleAd = formNewHouse.querySelector('#title');
  var mapPinsElementStart = mapPinsElement.querySelector('.map__pin--main');
  // var formNewHouseDelete = formNewHouse.querySelector('.ad-form__reset');

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

  window.getAddress = function (evt) {
    var x;
    var y;
    if (mapPinsElementStart.style.left === '570px' && mapPinsElementStart.style.top === '375px') {
      x = PIN_START_X + PIN_WIDTH / 2;
      y = PIN_START_Y + PIN_HEIGTH;
      address.value = x + ', ' + y;
    } else {
      x = +(evt.clientX) + PIN_WIDTH / 2;
      y = +(evt.clientY) + PIN_HEIGTH;
      address.value = x + ', ' + y;
    }

  };
  window.getAddress();

  var typeHouse = formNewHouse.querySelector('#type');
  var price = formNewHouse.querySelector('#price');

  var housePrise = {
    bungalo: 0,
    flat: 1000,
    house: 5000,
    palace: 10000
  };

  var filterPrice = function () {
    price.min = housePrise[typeHouse.value];
    price.setAttribute('placeholder', housePrise[typeHouse.value]);
  };

  typeHouse.addEventListener('change', filterPrice);

  var timeIn = formNewHouse.querySelector('#timein');
  var timeOut = formNewHouse.querySelector('#timeout');

  var timeInChange = function () {
    var index = timeIn.selectedIndex;
    timeOut.selectedIndex = index;
  };

  var timeOutChange = function () {
    var index = timeOut.selectedIndex;
    timeIn.selectedIndex = index;
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
})();
