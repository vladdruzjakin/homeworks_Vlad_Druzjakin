//1 задание
function Planet(name) {
    this.name = name;
    this.getName = function () {
        return 'Planet name is ' + this.name;
    }
}

function PlanetWithSatellite(name, satelliteName) {
    Planet.call(this, name);
    this.satelliteName = satelliteName;
    const prevGetName = this.getName;
    this.getName = function () {
        return prevGetName.call(this) + '.' + 'The satellite is ' + satelliteName
    }
}
PlanetWithSatellite.prototype = Object.create(Planet.prototype)
PlanetWithSatellite.prototype.constructor = PlanetWithSatellite;

const earth = new PlanetWithSatellite('Земля', 'Луна')
console.log(earth.getName())

// 2 задание 

class Build {
    constructor(name = 'Home', floors) {
        this.name = name;
        this.floors = floors;
    }
    getFloors() {
        return this.floors;
    }
    setFloors(val) {
        return this.floors = val;
    }
}

class LiveHome extends Build {
    constructor(name = 'Home', floors, flats) {
        super(name, floors);
        this.flats = flats;
    }
    getFlats() {
        return this.flats;
    }
    getFloors() {
        return {
            name: this.name,
            floors: this.floors,
            allFlats: super.getFloors() * this.flats
        }
    }
}
class ShopCenter extends Build {
    constructor(name = 'Shope', floors, shop) {
        super(name, floors);
        this.shop = shop;
    }
    getShop() {
        return this.shop
    }
    getFloors() {
        return {
            name: this.name,
            floors: this.floors,
            allShops: super.getFloors() * this.shop
        }
    }
}
const livehome = new LiveHome('Дом 52', 5, 4),
    shopCenter = new ShopCenter('Караван', 2, 50)

console.log(livehome.getFloors())
console.log(shopCenter.getFloors())

// 3 задание 
function Furniture(name, price) {
    this.name = name;
    this.price = price;
}
Furniture.prototype.getInfo = function () {
    return 'Name: ' + this.name + ' , ' + 'Price: ' + this.price
}

function OfficeFurniture(name, price, computerTisch) {
    Furniture.call(this, name, price)
    this.computerTisch = computerTisch;
}
OfficeFurniture.prototype = Object.create(Furniture.prototype)
OfficeFurniture.prototype.constructor = OfficeFurniture;
OfficeFurniture.prototype.getInfo = function () {
    return Furniture.prototype.getInfo.call(this) + ' , ' + 'Name computerTisch: ' + this.computerTisch
}

function HomeFurniture(name, price, homeFurniture) {
    Furniture.call(this, name, price)
    this.homeFurniture = homeFurniture;
}
HomeFurniture.prototype = Object.create(Furniture.prototype)
HomeFurniture.prototype.constructor = HomeFurniture;
HomeFurniture.prototype.getInfo = function () {
    return Furniture.prototype.getInfo.call(this) + ' , ' + 'homeFuriture: ' + this.homeFurniture;
}
const offFur = new OfficeFurniture('office', 550, 'Компьютерный стол'),
    homeFur = new HomeFurniture('Home', 5000, 'Диван')
console.log(offFur.getInfo())
console.log(homeFur.getInfo())

// 4 задание 

function User(name, date) {
    this.name = name
    this.date = date
}
User.prototype.getInfo = function () {
    return 'Имя: ' + this.name + ' , ' + 'Дата регистрации: ' + this.date
}

function Admin(name, date, bool = false) {
    User.call(this, name, date)
    superAdmin = bool;
    this.getInfoAdmin = function () {
        return superAdmin ? 'admin' : 'user';
    }
}
Admin.prototype = Object.create(User.prototype)
Admin.prototype.constructor = Admin;
Admin.prototype.getInfo = function () {
    return User.prototype.getInfo.call(this) + ' , ' + 'Имеет права: ' + this.getInfoAdmin()
}
admin = new Admin('Vlad', '13.05.19', true)
console.log(admin.getInfo())

function Guest(name, date) {
    User.call(this, name, date)
    this.createDate = function () {
        this.lastDate = new Date(this.date);
        this.lastDate.setDate(this.lastDate.getDate() + 7);
        this.localestr = this.lastDate.toLocaleDateString()
        return this.localestr
    }
    validDate = this.createDate();
    this.getValidDate = function () {
        return validDate ? validDate : 'false';
    }
}
Guest.prototype = Object.create(User.prototype);
Guest.prototype.constructor = Guest;
Guest.prototype.getInfo = function () {
    return User.prototype.getInfo.call(this) + ', Неделя спустя: ' + this.getValidDate()
}
guest = new Guest('Valera', '03.03.2019')
console.log(guest.getInfo())