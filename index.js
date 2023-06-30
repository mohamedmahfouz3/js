const sayHello = (fname, lname) => {
  let message = "hello";

  const concatmsg = () => {
    function getFullname() {
      return ` ${fname} ${lname}`;
    }
    return `${message} ${getFullname()}`;
  };

  let result = concatmsg();

  return result;
};

console.log(sayHello("mohamed", "ahmed"));

////////////////////////////////////////////////////////////////////////@ts-check

var a = 1;

var x = 2;

if (true) {
  let x = 50;
}
console.log(x);

function showtext() {
  var a = 10;

  let b = 20;
  console.log(`function- from global ${a}`);
  console.log(`from global ${b}`);
}
showtext(); // function- from global 3

console.log(`from global ${a}`);
console.log(`from global ${b}`);

let names = (...name) => `hi [${name.join("],[")}] =>done`;

console.log(names("mohamed", "ahmed", "ebrhim", "mahfouz"));

let myNumbers = [20, 50, 10, 60];
let calc = (one, two, ...nums) => one + two + nums[0] + nums[1];

console.log(calc(10, myNumbers[0], myNumbers[1], myNumbers[3]));

let myNums = [1, 2, 3, 4, 5, 6];

let newArray = [];

for (i = 0; i < myNums.length; i++) {
  newArray.push(myNums[i] + myNums[i]);
}

console.log(newArray);

/// same idea

let array = myNums.map(function (ele, index, arr) {
  // console.log(`current element => ${ele}`);
  // console.log(`current index => ${index}`);
  // console.log(`current arr => ${arr}`);
  // console.log(`this=> ${this}`);

  return ele + ele;
});
console.log(array);
