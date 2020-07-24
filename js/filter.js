'use strict';

(function () {
  var filterForm = document.querySelector('.map__filters');
  var filterFormHousingType = filterForm.querySelector('#housing-type');

  var filter = [];

  window.filter = function () {

    filterType = window.dataServer;

    var typeHouse = filterType.filter(function (it) {
      return it.offer.type === filterFormHousingType.value;
    });

  };

})();
