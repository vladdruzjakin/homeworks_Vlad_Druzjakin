//  Создать функцию, которая возвращает промис. Функция принимает два аргумента - время, через
// которое промис должен выполниться, и значение, с которым промис будет выполнен. 
function promiseCreator(time, text) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(text)
        }, time)
    })
}
const prom = promiseCreator(500, 'Ok!');
prom.then(console.log);
// Ok!

// 2. Создать класс, которыи? производит экземпляр со следующими свои?ствами:
// - promise - промис, которыи? создается во время запуска конструктора;
// - reject - метод, при выполнении которого promise реджектится;
// - resolve - метод, при выполнении которого promise резолвится.
// class Prom {...}
// const inst = new Prom();
// inst.promise.then(data => console.log(data));
// setTimeout(() => inst.resolve("test"), 5000);
// > test

class Prom {
    constructor() {
        this.promise = new Promise((res, rej) => {
            this.res = res;
            this.rej = rej;
        })
    }
    resolve(value) {
        this.res(value);
    }
    reject(reason) {
        this.rej(reason);
    }
}
const inst = new Prom();
inst.promise.then((data) => console.log(data));
inst.resolve('text');

const inst2 = new Prom();
inst2.promise.then((data) => console.log(data), (reason) => console.log(`rejected with reason: ${reason}`));
inst2.reject('manual');