var x = 1;
a();
b();
if (true) {
  let x = 1000;
  console.log("x : ", x);
}
console.log("x : ", x);

function a() {
  var x = 10;
  console.log(x);
}

function b() {
  var x = 100;
  console.log(x);
}
