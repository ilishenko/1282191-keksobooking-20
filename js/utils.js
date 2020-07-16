'use strict';
(function () {
  var numberAvatar = 0;
  window.numberAvatar = numberAvatar;

  window.utils = {
    getRandomNumber: function () {
      var elementRandom = Math.floor(Math.random() * 1000);
      return elementRandom;
    },

    getRandomNumberRange: function (min, max) {
      var elementRandom = Math.floor(Math.random() * (max - min)) + min;
      return elementRandom;
    },

    getRandomElement: function (array) {
      var elementRandom = array[Math.floor(Math.random() * array.length)];
      return elementRandom;
    },

    getNumber: function () {
      numberAvatar += 1;
      return numberAvatar;
    },

    getAutorAvatarSrc: function () {
      var autorAvatarSrc = '';
      if (window.numberAvatar < 9) {
        autorAvatarSrc = 'img/avatars/user' + '0' + window.utils.getNumber() + '.png';
      } else {
        autorAvatarSrc = 'img/avatars/user' + window.utils.getNumber() + '.png';
      }

      return autorAvatarSrc;
    }
  };

})();
