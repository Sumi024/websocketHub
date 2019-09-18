"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var localStorageObServe = /** @class */ (function () {
    function localStorageObServe(config) {
        this.PostKeyName = 'LOCALSTORAGE_OBSERVE_POST';
        this.GetKeyName = 'LOCALSTORAGE_OBSERVE_GET';
        this.IsAlive = 'LOCALSTORAGE_OBSERVE_IS_ALIVE';
        if (window.localStorage) {
            console.log('localStorage!');
        }
        else {
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
}());
exports.default = localStorageObServe;
