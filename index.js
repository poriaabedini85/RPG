var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var hero = /** @class */ (function () {
    function hero(id) {
        this.name = '';
        this.id = 1;
        this.joon = 100;
        this.hunger = 10;
        this.name = "Hero ".concat(id);
        this.id = id;
        this.attack();
        this.die();
    }
    hero.prototype.attack = function () {
        this.joon -= 10;
        this.hunger -= 1;
    };
    hero.prototype.die = function () {
        return this.joon <= 0 || this.hunger <= 0;
    };
    return hero;
}());
var soldier = /** @class */ (function (_super) {
    __extends(soldier, _super);
    function soldier(id) {
        var _this = _super.call(this, id) || this;
        _this.name = '';
        _this.id = 1;
        _this.power = 5;
        _this.gun = 2;
        _this.name = "Soldier ".concat(id);
        _this.attack();
        _this.die();
        return _this;
    }
    soldier.prototype.attack = function () {
        this.gun -= 1;
        this.power -= 1;
        this.joon -= 10;
        this.hunger - 1;
    };
    soldier.prototype.die = function () {
        return this.joon <= 0 || this.hunger <= 0 || this.power <= 0 || this.gun <= 0;
    };
    return soldier;
}(hero));
var bobsfangi = /** @class */ (function (_super) {
    __extends(bobsfangi, _super);
    function bobsfangi(id) {
        var _this = _super.call(this, id) || this;
        _this.name = "bobsfangi ".concat(id);
        _this.attack();
        _this.die();
        return _this;
    }
    return bobsfangi;
}(hero));
var Tribe = /** @class */ (function () {
    function Tribe(id) {
        this.name = '';
        this.id = 1;
        this.heroes = [];
        this.name = "Tribe ".concat(1);
        this.id = id;
    }
    return Tribe;
}());
var Tribe1 = new Tribe(1);
var Tribe2 = new Tribe(2);
var adad = Math.floor(Math.random() * 10 + 2);
var adad2 = Math.floor(Math.random() * 10 + 2);
for (var i = 0; i < adad; i++) {
    var sold = new soldier(i);
    var bob = new bobsfangi(i);
    Tribe1.heroes.push(sold);
    Tribe1.heroes.push(bob);
}
for (var i = 0; i < adad2; i++) {
    var sold = new soldier(i);
    var bob = new bobsfangi(i);
    Tribe2.heroes.push(sold);
    Tribe2.heroes.push(bob);
}
function attackby(who) {
    Tribe1.heroes.forEach(function (h) {
        while (!h.die()) {
            h.attack();
            console.log("Tribe 1 ".concat(h.name, " is attacking Tribe 2 ").concat(who.name));
        }
        if (h.die()) {
            console.log("Tribe 1 ".concat(h.name, " died by Tribe 2 ").concat(who.name));
        }
    });
}
function war() {
    Tribe2.heroes.forEach(function (h2) {
        attackby(h2);
    });
}
war();
