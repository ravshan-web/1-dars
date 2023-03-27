// let arr = [1, 2, 3];
// let total = 4;

// for(i = 0; i < arr.length; i++){
//     for(j = 0; j < i; j++){
//         if(arr[i] + arr[j] ===total){
//             console.log(arr[i], arr[j]);
//         }
//     }
// }

// let obj = {
//   name: "Ali",
//   age: 19,
//   isMarried: false,
// };

// console.log(obj["name"]);

///////////////////////////////////
// let num = +prompt("Ixtiyoriy musbat son kiriting");
// let myArr = [4, 2, 3, 4, 5, 6];
// myArr.unshift(num);
// console.log(myArr);

// if (myArr[0] % 2 == 0) {
//   myArr.splice(0, 1, 15);
//   console.log(
//     `siz kiritigan son = ${num} va bu
//     juft bo'lgani uchun uni toq songa yani
//     15 ga almashtirdim`
//   );
// } else {
//   myArr.splice(0, 1, 8);
//   console.log(
//     `siz kiritigan son = ${num}
//     va bu toq bo'lgani uchun uni
//     juft songa yani 8 ga almashtirdim`
//   );
// }

// console.log(myArr);

// let index = 0;
// let nums = 5;
// do {
//   console.log(index);
//   index++;
// } while (index < nums);

// let arr = [1,2,3, 'text']
// for(let index in arr){
//     console.log(index);
// }

// let object = { a: 1, b: 2, c: 3 };
// for (let prop in object) {
//   console.log(`${prop}`);
// }

// let arr = [1, 11, "text", null];
// for (let item of arr) {
//   console.log(item);
// }

// let a = +prompt("a");
// let b = +prompt("b");

// let perimeter = 2 * (a + b);
// let square = a * b;

// if (perimeter > square) {
//   console.log(perimeter, "perimeter");
// } else {
//   console.log(square, "yuza");
// } qoldiq = 1, 2 , 1   temp = 12,  1

// let num = +prompt("input:");
// let qoldiq, temp;
// let son = 0;
// temp=num;
// while (num >0) {
//   qoldiq=num%10;
//   temp = num/10;
// }
// son = (son*10)+qoldiq;
// if(son === num){
//   console.log("true");
// }else{
//   console.log("false");
// }

// let arr = [1, 2, 55, 6, 7, 89, 9, 5];

// let result = arr.filter(function (item, index) {
//    item > 7;
//    index > 0
//     return item, index
//   });
// console.log(result);

// let obj = {
//   name: "Aziz",
//   age: 19,
//   info: function (nation, address) {
//     console.log(this.name + " " + this.age); //Ravshan  20
//     console.log(`My nation is ${nation} and my address is ${address}`);
//     //My nation is Uzbek and my address is Tashkent
//   },
// };

// let person = {
//   name: "Ravshan",
//   age: 20,
// };

// obj.info.bind(person, "Uzbek", "Tashkent")();

// function foo() {
//   return function fo2(word) {
//     console.log(word);  // "Помогите мне понять этот Closures"
//   };
// }

// const myFunc = foo();
// myFunc("Помогите мне понять этот Closures");

let obj = { arr: [1, 2, 3, 4] };
obj.name = ["Ravshan", "Aziz", "Kimdir"];
console.log(...obj.name);
