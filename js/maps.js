'use strict';

(function () {
  var QUANTITY_HOTEL = 5;

  var map = document.querySelector('.map');
  var formFilters = document.querySelector('.map__filters');
  var formFiltersSelects = formFilters.querySelectorAll('.map__filter');
  var formFiltersFildsetInputs = formFilters.querySelectorAll('input[type="checkbox"]');
  var formNewHouse = document.querySelector('.ad-form');
  var formNewHouseAvatarMap = formNewHouse.querySelector('.ad-form-header');
  var formNewHouseAvatarMapInput = formNewHouseAvatarMap.querySelector('input');
  var formNewHouseElements = formNewHouse.querySelectorAll('.ad-form__element');
  var mapPinsElement = map.querySelector('.map__pins');
  var formNewHouseInputTextes = formNewHouse.querySelectorAll('input[type="text"]');
  var formNewHouseTextarea = formNewHouse.querySelector('textarea');
  var mapPinsElementStart = mapPinsElement.querySelector('.map__pin--main');
  var mapPinElement = mapPinsElement.children;
  var filterFormHousingType = formFilters.querySelector('#housing-type');

  window.maps = {
    getActivePage: function () {
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

      if (mapPinElement.length <= 5) {

        window.load(function (data) {
          var fragment = document.createDocumentFragment();
          for (var i = 0; i < QUANTITY_HOTEL; i++) {
            fragment.appendChild(window.pin.getHousePin(data[i]));
          }
          mapPinsElement.appendChild(fragment);

        });

      }

      filterFormHousingType.addEventListener('change', function () {
        var deletePin = mapPinsElement.querySelectorAll('.map__pin:not(.map__pin--main)');

        for (var i = 0; i < deletePin.length; i++) {
          deletePin[i].remove();
        }

        var filteredData = window.dataServer.filter(window.filterData);
        var result = (filteredData.length < QUANTITY_HOTEL) ? filteredData.length : QUANTITY_HOTEL;

        var fragment = document.createDocumentFragment();
        for (var j = 0; j < result; j++) {
          fragment.appendChild(window.pin.getHousePin(filteredData[j]));
        }
        mapPinsElement.appendChild(fragment);
      });
    },

    getInactivePage: function () {
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
    }
  };

  window.maps.getInactivePage();

})();
