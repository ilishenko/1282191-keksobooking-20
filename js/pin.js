'use strict';

(function () {
  var mapPinsTemplate = document.querySelector('#pin').content.querySelector('.map__pin');

  window.pin = {
    getHouseElement: function () {
      var house = window.data.getHouse();

      return house;
    },

    getHousePin: function () {
      var house = window.pin.getHouseElement();
      var mapPins = mapPinsTemplate.cloneNode(true);

      mapPins.querySelector('img').src = house.author.avatar;
      mapPins.style.left = house.location.x + 'px';
      mapPins.style.top = house.location.y + 'px';


      return mapPins;
    }

  };
})();
