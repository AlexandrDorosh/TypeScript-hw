// EXERCISE 1
// Создать интерфейс по такой объект:
// {
//     "id": 1,
//     "name": "Leanne Graham",
//     "username": "Bret",
//     "email": "Sincere@april.biz",
//     "address": {
//     "street": "Kulas Light",
//         "suite": "Apt. 556",
//         "city": "Gwenborough",
//         "zipcode": "92998-3874",
//         "geo": {
//         "lat": "-37.3159",
//             "lng": "81.1496"
//     }
// },
//     "phone": "1-770-736-8031 x56442",
//     "website": "hildegard.org",
//     "company": {
//     "name": "Romaguera-Crona",
//         "catchPhrase": "Multi-layered client-server neural-net",
//         "bs": "harness real-time e-markets"
// }
//
// ANSWER 1
function kindAnimal(animal) {
}
kindAnimal({
    go: function (animal) {
        return "" + animal;
    },
    speak: function (animal) {
        return "" + animal;
    },
    info: function (type, paws, colorSkins, wool) {
        return ("type: " + type + ",\n             paws: " + paws + ",\n             colorSkins: " + colorSkins + ",\n             wool: " + wool);
    }
});
var Cat = /** @class */ (function () {
    function Cat() {
    }
    Cat.prototype.go = function (animal) {
        return "" + animal;
    };
    ;
    Cat.prototype.speak = function (animal) {
        return "" + animal;
    };
    ;
    Cat.prototype.info = function (type, paws, colorSkins, wool) {
        return ("type: " + type + ",\n             paws: " + paws + ",\n             colorSkins: " + colorSkins + ",\n             wool: " + wool);
    };
    return Cat;
}());
var Bird = /** @class */ (function () {
    function Bird() {
    }
    Bird.prototype.go = function (animal) {
        return "" + animal;
    };
    ;
    Bird.prototype.speak = function (animal) {
        return "" + animal;
    };
    ;
    Bird.prototype.info = function (type, paws, colorSkins, wool) {
        return ("type: " + type + ",\n             paws: " + paws + ",\n             colorSkins: " + colorSkins + ",\n             wool: " + wool);
    };
    return Bird;
}());
var Fish = /** @class */ (function () {
    function Fish() {
    }
    Fish.prototype.go = function (animal) {
        return "" + animal;
    };
    ;
    Fish.prototype.speak = function (animal) {
        return "" + animal;
    };
    ;
    Fish.prototype.info = function (type, paws, colorSkins, wool) {
        return ("type: " + type + ",\n             paws: " + paws + ",\n             colorSkins: " + colorSkins + ",\n             wool: " + wool);
    };
    return Fish;
}());
var animals = [
    new Cat(),
    new Bird(),
    new Fish()
];
var cat = animals[0];
cat.go('I am walk');
cat.speak('I to speak mayy');
cat.info('cat', 4, 'gray', true);
console.log(cat.go('I am walk'));
console.log(cat.speak('I to speak mayy'));
console.log(cat.info('cat', 4, 'gray', true));
var bird = animals[1];
bird.go('I am fly');
bird.speak('I to speak song');
bird.info('bird', 2, 'white', false);
var fish = animals[2];
fish.go('I am swim');
fish.speak('I to speak bool bool');
fish.info('fish', 0, 'silver', false);
