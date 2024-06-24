// const mynum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let newnum = mynum.map((mynum) => mynum + 10);
// console.log(newnum);

// ==================

const mynum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newnum = mynum
  .map((mynum) => mynum + 10)
  .map((mynum) => mynum - 2)
  .filter((mynum) => mynum > 11);
console.log(newnum);
