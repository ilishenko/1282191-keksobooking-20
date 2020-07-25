'use strict';

(function () {
  var filterForm = document.querySelector('.map__filters');
  var filterFormHousingType = filterForm.querySelector('#housing-type');

  window.filterData = function (item) {
    return item.offer.type === filterFormHousingType.value;
  };

})();
