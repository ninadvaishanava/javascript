// const mynum = [1, 2, 3];
// const newnum = mynum.reduce(function (accumilator, currentvalue) {
//   return accumilator + currentvalue;
// }, 0);
// console.log(newnum);

// const mynum = [1, 2, 3];
// const newnum = mynum.reduce((accumilator, currentvalue) => {
//   console.log(`acc: ${accumilator} && cur :${currentvalue}`);
//   return accumilator + currentvalue;
// }, 0);
// console.log(newnum);

// const mynum = [1, 2, 3];
// const newnum = mynum.reduce(
//   (accumilator, currentvalue) => accumilator + currentvalue,
//   0
// );
// console.log(newnum);

const shop = [
  {
    itemname: "gg",
    price: 1,
  },
  {
    itemname: "gbay",
    price: 2,
  },
  {
    itemname: "jsxjs",
    price: 3,
  },
  {
    itemname: "hai",
    price: 4,
  },
];
const myshop = shop.reduce((accumilator, shop) => accumilator + shop.price, 0);
console.log(myshop);
