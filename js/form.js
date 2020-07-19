'use strict';

(function () {
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
    if (mapPinsElementStart.style.left === '570px' && mapPinsElementStart.style.top === '375px') {
      address.value = '648, 531';
    } else {
      var x = +(evt.clientX) + 78;
      var y = +(evt.clientY) + 156;
      address.value = x + ', ' + y;
    }

  };
  window.getAddress();

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
})();
