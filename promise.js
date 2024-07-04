// new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("async task 1");
//     resolve();
//   }, 1000);
// }).then(function () {
//   console.log("async 1 resolved");
 // });


// const promisetwo = new Promise(function(resolve,reject){
// setTimeout(function(){
//     resolve({username:"ninad" , emailid: "najwj@gmail.com"})

// },1000)
// })
// promisetwo.then(function(user){
// console.log(user);
// })

// new Promise(function(resolve,reject){
//   setTimeout(function(){
//     let error = true
//     if (!error) {
//         resolve({username:"ninad",password:"1234"})
//     }else{
//         reject("errer:something wrong")
//     }
//   },1000)
// }).then(function(user){
//   console.log(user);
//   return user.username
// }).then(function(username){
// console.log(username);
// }).catch(function(error){
// console.log(error);
// }).finally(function(){
//     console.log("promise");
// })



   
    fetch("https://api.github.com/users/hiteshchoudhary")
    .then(function(response){
        return response.json()
    }).then(function(data){
        console.log(data);
    }).catch(function(error){
        console.log(error);
    })