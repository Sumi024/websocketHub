"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var localStorageObServe_1 = require("./typeScript/localStorageObServe");
window.test = new localStorageObServe_1.default({});
window.onbeforeunload = function () {
    var index = 0;
    while (index < 20000000) {
        index++;
    }
    localStorage.setItem('LOCALSTORAGE_OBSERVE_IS_ALIVE', localStorage.getItem('LOCALSTORAGE_OBSERVE_IS_ALIVE') === 'false' ? 'true' : 'false');
};
