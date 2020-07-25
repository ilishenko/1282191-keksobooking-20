'use strict';

(function () {
  var filterForm = document.querySelector('.map__filters');
  var filterFormHousingType = filterForm.querySelector('#housing-type');

  window.filterData = function (item) {
    if (filterFormHousingType.value !== 'any') {
      return item.offer.type === filterFormHousingType.value;
    } else {
      return item;
    }
  };
})();
