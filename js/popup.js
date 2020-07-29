'use strict';

(function () {
  var map = document.querySelector('.map__pins');
  var success = document.querySelector('#success');
  //  var error = document.querySelector('#error');

  window.messadgeSuccess = function () {
    var good = success.cloneNode(true);
    map.appendChild(good);
  };

  window.messadgeError = function () {

  };
})();
