import {LOCAL_STORAGE_OBSERVE_CONFIG} from '../type/localStorageObserveType';
import webSocketService from '../type/webScoketServiceType';

export default class localStorageObServe {
    private PostKeyName: string = 'LOCALSTORAGE_OBSERVE_POST';
    private GetKeyName: string = 'LOCALSTORAGE_OBSERVE_GET';
    private IsAlive: string = 'LOCALSTORAGE_OBSERVE_IS_ALIVE';
    private readonly socketService: webSocketService;
    /**
     * ObserveModel 类型表示
     * {
     *     0: beforeunload
     *     1: polling
     * }
     */
    private readonly ObServeModel: Number = 0;
    constructor(config: LOCAL_STORAGE_OBSERVE_CONFIG) {
        if (window.localStorage) {
            console.log('localStorage!');
        } else {
            console.error('该浏览器不支持localStorage');
            return this;
        }
        if(window.onbeforeunload){
            console.log('onbeforeunload');
            this.ObServeModel = 0;
            window.onbeforeunload = this.handleOnbeforeunload;
        } else {
            this.ObServeModel = 1;
        }
        Object.assign(this, config);
        window.onstorage = this.handleOnstorage;
    }

    /**
     * 处理onstorage事件监听
     * @param storageEvent
     */
    handleOnstorage(storageEvent: any) {
        console.log(storageEvent);
        switch (storageEvent.key) {
            case this.IsAlive:
                return this.handleIsAlive(storageEvent);
            case this.GetKeyName:
                return this.handleGetMessage(storageEvent);
            case this.PostKeyName:
                return this.handlePostMessage(storageEvent);
        }
    }

    handleIsAlive(storageEvent: any) {
        /* 当IsAlive由 true 转为 false 判断为socket连接已断开 */
        if(storageEvent.newValue === 'false' && storageEvent.oldValue === 'true'){
            this.socketService.createSocketLink();
        } else {
            console.log('主连接存活！');
        }
        return this;
    }

    handleGetMessage(storageEvent: any) {
        return this.socketService.handleGetMessage(storageEvent.newValue);
    }

    handlePostMessage(storageEvent: any) {
        return this.socketService.handlePostMessage(storageEvent.newValue);
    }

    handleOnbeforeunload (){
        return localStorage.setItem(this.IsAlive, String(false));
    }

    checkIsAlive() {
        const status = localStorage.getItem(this.IsAlive);
        switch (status) {
            case 'false':
                return false;
            case 'true':
                return true;
            default:
                return undefined;
        }
    }
}