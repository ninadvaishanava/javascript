const user = {
  myname: "ninad",
  myid: 333,

  welcome: function () {
    console.log(`${this.myname},welcome`);
  },
};

//user.welcome();

//==========================

const addkar = (num1, num2) => {
  return num1 + num2;
};
//console.log(add(2, 3));

//tecnique2

const addkaro = (num1, num2) => num1 + num2;
//console.log(addkaro(2, 3));

//imidiatly invoked function expression (iife)

(function () {
  console.log("heloo");
})();

(() => {
  console.log("heloo");
})();
