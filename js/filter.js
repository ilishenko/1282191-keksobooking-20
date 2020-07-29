'use strict';

(function () {
  var filterForm = document.querySelector('.map__filters');
  var filterFormHousingType = filterForm.querySelector('#housing-type');
  var filterFormHousingPrice = filterForm.querySelector('#housing-price');
  var filterFormHousingRooms = filterForm.querySelector('#housing-rooms');

  window.filterData = function (item) {
    var type = true;
    var price = true;
    var rooms = true;

    if (filterFormHousingType.value !== 'any') {
      type = item.offer.type === filterFormHousingType.value;
    } if (filterFormHousingPrice.value !== 'any') {
      var getPrice = function () {
        if (filterFormHousingPrice.value === 'low') {
          if (item.offer.price <= 10000) {
            price = item.offer.price;
          }
        }
        if (filterFormHousingPrice.value === 'middle') {
          if (item.offer.price >= 10000 && item.offer.price <= 50000) {
            price = item.offer.price;
          }

        }
        if (filterFormHousingPrice.value === 'high') {
          if (item.offer.price > 50000) {
            price = item.offer.price;
          }
        }
      };
      getPrice(item);
    } if (filterFormHousingRooms.value !== 'any') {
      rooms = item.offer.rooms === filterFormHousingRooms.value;
    }

    return type && price && rooms;
  };
})();
