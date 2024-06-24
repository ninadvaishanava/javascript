// for loop

// ============================

// for (let index = 0; index <= 10; index++) {
//   console.log(`outer:${index}`);
//   for (let i = 0; i <= 10; i++) {
//     console.log(`inner:${i}`);
//   }
// }

// table

// for (let index = 0; index <= 10; index++) {
//   //   console.log(`outer:${index}`);
//   for (let i = 0; i <= 10; i++) {
//     console.log(index + "*" + i + "=" + index * i);
//   }
// }

// array loop

// let array = ["raj", "jay", "vinay"];
// for (let index = 0; index < array.length; index++) {
//   const element = array[index];
//   console.log(element);
// }

// break &continue

// for (let index = 1; index <= 10; index++) {
//   if (index == 5) {
//     console.log(`5 is detected`);
//     break;
//   }
//   console.log(`value of index: ${index}`);
// }

for (let index = 1; index <= 10; index++) {
  if (index == 5) {
    console.log(`5 is detected`);
    continue;
  }
  console.log(`value of index: ${index}`);
}
