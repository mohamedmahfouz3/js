// const sayHello = (fname, lname) => {
//   let message = "hello";

//   const concatmsg = () => {
//     function getFullname() {
//       return ` ${fname} ${lname}`;
//     }
//     return `${message} ${getFullname()}`;
//   };

//   let result = concatmsg();

//   return result;
// };

// console.log(sayHello("mohamed", "ahmed"));

// ////////////////////////////////////////////////////////////////////////@ts-check

// var a = 1;

// var x = 2;

// if (true) {
//   let x = 50;
// }
// console.log(x);

// function showtext() {
//   var a = 10;

//   let b = 20;
//   console.log(`function- from global ${a}`);
//   console.log(`from global ${b}`);
// }
// showtext(); // function- from global 3

// console.log(`from global ${a}`);
// console.log(`from global ${b}`);

// let names = (...name) => `hi [${name.join("],[")}] =>done`;

// console.log(names("mohamed", "ahmed", "ebrhim", "mahfouz"));

// let myNumbers = [20, 50, 10, 60];
// let calc = (one, two, ...nums) => one + two + nums[0] + nums[1];

// console.log(calc(10, myNumbers[0], myNumbers[1], myNumbers[3]));

// let myNums = [1, 2, 3, 4, 5, 6];

// let newArray = [];

// for (i = 0; i < myNums.length; i++) {
//   newArray.push(myNums[i] + myNums[i]);
// }

// console.log(newArray);

// /// same idea

// let array = myNums.map(function (ele, index, arr) {
//   // console.log(`current element => ${ele}`);
//   // console.log(`current index => ${index}`);
//   // console.log(`current arr => ${arr}`);
//   // console.log(`this=> ${this}`);

//   return ele + ele;
// });
// console.log(array);

let swappingCases = "elZERo";
let invertedNums = [1, -10, -20, 15, 100, -30];
let ignoreNumbers = "Elz123er4o";

let sw = swappingCases
  .split("")
  .map(function (ele) {
    return ele === ele.toUpperCase() ? ele.toLowerCase : ele.toUpperCase();
  })
  .join("");

console.log(sw);

let inv = invertedNums.map(function (ele) {
  return -ele;
});

console.log(inv);

let ig = ignoreNumbers
  .split("")
  .map(function (ele) {
    return isNaN(parseInt(ele)) ? ele : "";
  })
  .join("");

console.log(ig);

/////////////////filter////////////////////

let friends = ["mohamed", "ahmed", "ebrahim", "mahfouz"];
let filterFriend = friends.filter(function (ele) {
  return ele.startsWith("a");
});

console.log(filterFriend);

let myNums = [11, 2, 20, 17, 5, 10];
function filterNumber(ele) {
  return ele % 2 === 0;
}
let numbersFIlt = myNums.filter(filterNumber);
//do something with the filtered elements her
console.log(numbersFIlt);
