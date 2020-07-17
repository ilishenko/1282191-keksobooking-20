'use strict';

(function () {
  var QUANTITY_HOTEL = 8;
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < QUANTITY_HOTEL; i++) {
    fragment.appendChild(window.pin.getHousePin());
  };

  window.map = {
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
