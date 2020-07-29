'use strict';
(function () {
  var map = document.querySelector('.map');

  var mapPinsElement = map.querySelector('.map__pins');

  // Модуль 4

  var formNewHouse = document.querySelector('.ad-form');
  var mapPinsElementStart = mapPinsElement.querySelector('.map__pin--main');
  var formNewHouseDelete = formNewHouse.querySelector('.ad-form__reset');

  mapPinsElementStart.addEventListener('mousedown', function (evt) {
    evt.preventDefault();
    if (evt.which === 1) {
      window.maps.getActivePage();

      var onMouseMove = function (moveEvt) {
        moveEvt.preventDefault();

        mapPinsElementStart.style.top = +(moveEvt.clientY + 130) + 'px';
        mapPinsElementStart.style.left = +(moveEvt.clientX - 60) + 'px';
        window.getAddress(moveEvt);
      };

      var onMouseUp = function (upEvt) {
        upEvt.preventDefault();

        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
      };

      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    }
  });

  mapPinsElementStart.addEventListener('keydown', function (evt) {
    if (evt.key === 'Enter') {
      window.maps.getActivePage();
    }
  });

  formNewHouseDelete.addEventListener('click', function () {
    window.maps.getInactivePage();
  });

  formNewHouseDelete.addEventListener('keydown', function (evt) {
    if (evt.key === 'Enter') {
      window.maps.getInactivePage();
    }
  });

  formNewHouse.addEventListener('submit', function (evt) {

    window.upload(new FormData(formNewHouse), function () {
      window.messadgeSuccess();
      window.maps.getInactivePage();
      window.getCardRemove();
    });
    evt.preventDefault();
  });

})();
