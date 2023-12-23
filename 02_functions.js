var x = 1;
let y = "Y";

if (true) {
  let x = 1000;
  y = "YYY";
  console.log("x : ", x);
  console.log("y : ", y);
}
console.log("x : ", x);
console.log("y : ", y);
a();
b();
function a() {
  var x = 10;
  console.log(x);
}

function b() {
  var x = 100;
  console.log(x);
}
