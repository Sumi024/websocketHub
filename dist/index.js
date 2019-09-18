(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var localStorageObServe_1 = require("./typeScript/localStorageObServe");

window.test = new localStorageObServe_1["default"]({});

window.onbeforeunload = function () {
  var index = 0;

  while (index < 20000000) {
    index++;
  }

  localStorage.setItem('LOCALSTORAGE_OBSERVE_IS_ALIVE', localStorage.getItem('LOCALSTORAGE_OBSERVE_IS_ALIVE') === 'false' ? 'true' : 'false');
};

},{"./typeScript/localStorageObServe":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var localStorageObServe =
/** @class */
function () {
  function localStorageObServe(config) {
    this.PostKeyName = 'LOCALSTORAGE_OBSERVE_POST';
    this.GetKeyName = 'LOCALSTORAGE_OBSERVE_GET';
    this.IsAlive = 'LOCALSTORAGE_OBSERVE_IS_ALIVE';

    if (window.localStorage) {
      console.log('localStorage!');
    } else {
      console.error('该浏览器不支持localStorage');
      return this;
    }

    Object.assign(this, config);
    window.onstorage = this.handleOnstorage;
  }
  /**
   * 处理onstorage事件监听
   * @param storageEvent
   */


  localStorageObServe.prototype.handleOnstorage = function (storageEvent) {
    console.log(storageEvent);

    switch (storageEvent.key) {
      case this.IsAlive:
        return this.handleIsAlive(storageEvent);

      case this.GetKeyName:
        return this.handleGetMessage(storageEvent);

      case this.PostKeyName:
        return this.handlePostMessage(storageEvent);
    }
  };

  localStorageObServe.prototype.handleIsAlive = function (storageEvent) {
    return new Promise(function (resolve, reject) {
      console.log(storageEvent.newValue, storageEvent.oldValue, storageEvent.key);
    });
  };

  localStorageObServe.prototype.handleGetMessage = function (storageEvent) {
    return new Promise(function (resolve, reject) {
      console.log(storageEvent.newValue, storageEvent.oldValue, storageEvent.key);
    });
  };

  localStorageObServe.prototype.handlePostMessage = function (storageEvent) {
    return new Promise(function (resolve, reject) {
      console.log(storageEvent.newValue, storageEvent.oldValue, storageEvent.key);
    });
  };

  localStorageObServe.prototype.checkIsAlive = function () {
    var status = localStorage.getItem(this.IsAlive);

    switch (status) {
      case 'false':
        break;

      case 'true':
        break;

      default:
        break;
    }
  };

  return localStorageObServe;
}();

exports["default"] = localStorageObServe;

},{}]},{},[1]);
