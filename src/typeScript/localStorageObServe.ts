import {LOCAL_STORAGE_OBSERVE_CONFIG} from '../type/localStorageObserveType';

class localStorageObServe {
    private PostKeyName: string = 'LOCALSTORAGE_OBSERVE_POST';
    private GetKeyName : string = 'LOCALSTORAGE_OBSERVE_GET';
    private IsAlive : string = 'LOCALSTORAGE_OBSERVE_IS_ALIVE';
    constructor(config: LOCAL_STORAGE_OBSERVE_CONFIG) {
        if (window.localStorage) {
            console.log('localStorage!');
        } else {
            console.error('该浏览器不支持localStorage');
            return this;
        }
        Object.assign(this,config);
        window.onstorage = this.handleOnstorage;
    }

    /**
     * 处理onstorage事件监听
     * @param storageEvent
     */
    handleOnstorage (storageEvent:any){
        console.log(storageEvent);
        switch (storageEvent.key){
            case this.IsAlive:
                return this.handleIsAlive(storageEvent);
            case this.GetKeyName:
                return this.handleGetMessage(storageEvent);
            case this.PostKeyName:
                return this.handlePostMessage(storageEvent);
        }
    }

    handleIsAlive (storageEvent:any) {
        return new Promise((resolve, reject) => {
            console.log(storageEvent.newValue, storageEvent.oldValue, storageEvent.key);
        });
    }

    handleGetMessage (storageEvent:any) {
        return new Promise((resolve, reject) => {
            console.log(storageEvent.newValue, storageEvent.oldValue, storageEvent.key);
        });
    }

    handlePostMessage (storageEvent:any) {
        return new Promise((resolve, reject) => {
            console.log(storageEvent.newValue, storageEvent.oldValue, storageEvent.key);
        });
    }
}