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
// interface Obj {
//     id: number;
//     name: string;
//     username: string;
//     email: string;
//     address: {
//         street: string;
//         suite: string;
//         city: string;
//         zipcode: string;
//         geo: {
//             lat: number;
//             lng: number;
//         }
//     };
//     phone: string;
//     website: string;
//     company: {
//         "name": string;
//         "catchPhrase": string;
//         "bs": string;
//     }
// }
//
// function objInfo(obj: Obj){
//     return obj
// }
//
// objInfo({
//     id: 1,
//     name: "Leanne Graham",
//     username: "Bret",
//     email: "Sincere@april.biz",
//     address: {
//         street: "Kulas Light",
//         suite: "Apt. 556",
//         city: "Gwenborough",
//         zipcode: "92998-3874",
//         geo: {
//             lat: -37.3159,
//             lng: 81.1496
//         }
//     },
//     phone: "1-770-736-8031 x56442",
//     website: "hildegard.org",
//     company: {
//         name: "Romaguera-Crona",
//         catchPhrase: "Multi-layered client-server neural-net",
//         bs: "harness real-time e-markets"
//     }
// })
// EXERCISE 2
// типизировать эту функцию:
//
//     function concat(text1, text2) {
//         return text1 + text2
//     }
// ANSWER 2
// function concat(text1: string, text2: string) {
//         return text1 + text2
//     }
//
//     concat('Alex', 'OKTEN')
// EXERCISE 3
// создать класс юзера с полями name, age, city, status
// и методами:
// getName
// setName
// getAge
// setAge
// getCity
// setCity
// changeStatus
// ANSWER 3
// class User {
//     name: string;
//     age: number;
//     city: string;
//     status: boolean;
//
//     constructor(name: string, age: number, city: string, status: boolean) {
//         this.name = name;
//         this.age = age;
//         this.city = city;
//         this.status = status;
//     }
//
//     getName(): string{
//         return this.name
//     }
//     setName(value: string){
//         this.name = value
//     }
//     getAge(): number{
//         return this.age
//     }
//     setAge(value: number){
//         this.age = value
//     }
//     getCity(): string{
//         return  this.city
//     }
//     setCity(value: string){
//         this.city = value
//     }
//     changeStatus(value: boolean){
//         this.status = value
//     }
// }
//
// const user = new User('Alex', 23, 'Rivne', false);
// console.log(user);
// EXERCISE 4
// написать интерфейс Animal который описывает:
// тип движения животного(плавает, ходит, бегает) типа стринг
// что говорит тип стринг
// и функцию которая возвращает информацию о животном
// создать три класса Cat, Bird, Fish и имплементировать для каждого интерфейс Animal
// ANSWER 4
// interface Animal{
//     go: (animal: string) => string;
// }
//
// function kindAnimal(animal: Animal){
//
// }
//
// kindAnimal({
//     go: function (animal){
//         return `${animal}`
//     }})
//
// class Cat implements Animal{
//     go(animal: string): string{
//         return `${animal}`
//     };
//     }
//
// class Bird implements Animal{
//     go(animal: string): string{
//         return `${animal}`
//     };
// }
//
// class Fish implements Animal{
//     go(animal: string): string{
//         return `${animal}`
//     };
// }
//
// const animals: Animal[] = [
//     new Cat(),
//     new Bird(),
//     new Fish()
// ]
//
// const cat = animals[0] as Cat;
// cat.go('I am walk');
//
// const bird = animals[1] as Bird;
// bird.go('I am fly');
//
// const fish = animals[2] as Fish;
// fish.go('I am swim');
