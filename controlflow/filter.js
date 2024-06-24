// const mynum = [1, 2, 3, 4, 5, 6];
// const newnum = mynum.filter((mynum) => mynum > 4);
// console.log(newnum);
// =====================

const book = [
  { tittle: "b1", genre: "friction", publish: 1991, edition: 2007 },

  { tittle: "b2", genre: "non friction", publish: 1998, edition: 2005 },
  { tittle: "b3", genre: "english", publish: 1996, edition: 2009 },
  { tittle: "b4", genre: "science", publish: 2001, edition: 2020 },
  { tittle: "b5", genre: "social", publish: 2014, edition: 2044 },
  { tittle: "b6", genre: "social", publish: 2017, edition: 2076 },
  { tittle: "b7", genre: "social", publish: 2006, edition: 2055 },
  { tittle: "b8", genre: "friction", publish: 1992, edition: 2034 },
];

let mybook = book.filter(
  (book) => book.publish >= 2001 && book.genre != "social"
);
console.log(mybook);
