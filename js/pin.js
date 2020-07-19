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
      var housePin = mapPinsTemplate.cloneNode(true);

      housePin.querySelector('img').src = house.author.avatar;
      housePin.style.left = house.location.x + 'px';
      housePin.style.top = house.location.y + 'px';


      return housePin;
    }

  };
})();
