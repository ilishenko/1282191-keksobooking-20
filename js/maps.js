'use strict';

(function () {
  var QUANTITY_HOTEL = 8;
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < QUANTITY_HOTEL; i++) {
    fragment.appendChild(window.pin.getHousePin());
  }

  var map = document.querySelector('.map');
  var formFiltersSelects = formFilters.querySelectorAll('.map__filter');
  var formFiltersFildsetInputs = formFilters.querySelectorAll('input[type="checkbox"]');
  var formNewHouse = document.querySelector('.ad-form');
  var formFilters = document.querySelector('.map__filters');
  var formNewHouseAvatarMap = formNewHouse.querySelector('.ad-form-header');
  var formNewHouseAvatarMapInput = formNewHouseAvatarMap.querySelector('input');
  var formNewHouseElements = formNewHouse.querySelectorAll('.ad-form__element');
  var mapPinsElement = map.querySelector('.map__pins');

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

      mapPinsElement.appendChild(fragment);
    }
  };

})();
