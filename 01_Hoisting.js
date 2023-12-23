// console.log("name : ", name);
console.log("name1 : ", name1);   // give error
console.log("name2 : ", name2);   // undefined
console.log("function1 : ", function1); // function 1 print
console.log("function1 exe : ", function1()); // function console.log() print
// console.log("function2 : ", function2);    // undefined
// console.log("function2 exe : ", function2()); // give error

let name = "name_let";
const name1 = "name1_const";
var name2 = "name2_var";

function function1() {
  console.log("function create using function1");
}

var function2 = () => {
  console.log("function create using arrow function");
};
