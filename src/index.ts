import localStorageObServe from './typeScript/localStorageObServe';

(<any>window).test = new localStorageObServe ({});

window.onbeforeunload = function () {
    let index = 0;
    while(index < 20000000){
        index ++;
    }
    localStorage.setItem('LOCALSTORAGE_OBSERVE_IS_ALIVE', localStorage.getItem('LOCALSTORAGE_OBSERVE_IS_ALIVE') === 'false' ? 'true' : 'false');
}