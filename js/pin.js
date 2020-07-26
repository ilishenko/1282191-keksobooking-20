'use strict';

(function () {
  var mapPinsTemplate = document.querySelector('#pin').content.querySelector('.map__pin');

  window.pin = {
    getHousePin: function (data) {
      var housePin = mapPinsTemplate.cloneNode(true);

      housePin.querySelector('img').src = data.author.avatar;
      housePin.style.left = data.location.x + 'px';
      housePin.style.top = data.location.y + 'px';

      housePin.addEventListener('click', function () {
        window.insertCard(data);
        window.getCardType(data);
      });

      return housePin;
    }

  };
})();
