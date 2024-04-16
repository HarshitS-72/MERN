// pehle bhi mai tumse mila hu
// pehli dafa kyu milke laga
// tune chuaaa aaaaaaa zakhmo ko mere
// marham marham dil pe lga



// console.log('start')
// setTimeout(()=>{
//     console.log("CHECKING");
// }, 5000);
// console.log("END")




// setTimeout(()=>{
//     console.log('timeout 1...')
// }, 50000);
// console.log('start')
// setTimeout(()=>{
//     console.log("timeout 2");
// }, 10000);
// console.log("intermediate");
// console.log("END");

// in microtask queue, promise, fetch API queue callbacks jate hai.
// in callback queue, set callbacks jata hai.




// we can create our own promises in js.

// function createOrder(x,fn){
//     console.log(x);
//     setTimeout(()=>{fn('lik123')}, 10000)
// }
// function makePayement(orderID){
//     console.log(orderID);
// }
// createOrder('soap', makePayement);


// how promises are formed.
// promise is a function.



// const pr = new Promise((resolve,reject)=>{
//     // logic
// if(true){
//     resolve();
// }
// else{
//     reject();
// }


// });
// console.log(pr)

// const pr = new Promise((reolve,reject)=>{
//     // setTimeout(()=>{resolve("done-123");}, 10000);
//     setTimeout(()=>{reject("some are not resolved"), 0}, 10000);
// });

// pr.then((rej)=>{
//     console.log(rej);

// }).catch((er)=>{
//     console.log(er);
// })



// console.log('hello');
// const arr = [10, 22, 34];
// //  const ans = arr.map((a) =>{
// //     console.log(a);
// //     return(arr);
// //  })


// const arr2 = [10, 22,11, 13, 14];

// const ans3 = arr.map(a=>parseInt(a));
// console.log(ans3);



// compariosn:

//  const arr = [10, 84, 14];
//  const ans= arr.filter((a)=>{
//     if(a>20) return true;
//     else return false;
//   })
//   console.log(arr);
//   console.log(ans);



// const arr = {
//     'Delhi','Mumbai','Chennai',
//     'pune',
//     'kolkata',
// }
// const ans = arr.filter((a)=>{
//     for( let a=0; a<arr.length; a++)
//     {
//         if(a==i) return true;
//     }
//     else return false;
// })
// console.log(ans);



// to print out states whose name has i:
// const arr = [
//     'Delhi','Mumbai','Chennai',
//     'pune',
//     'kolkata',
// ]
// const ans = arr.filter((a)=>{
// if(a.includes('i') || a.includes('I')){
//     return true;
// }
// else false;
// })
// console.log(ans);




// const arr = [
//     'Delhi, India', 'Mumbai, India',
//     'Chennai, India', 'shangai, China',
//     'Texas, China'
// ]
// const ans = arr.filter((a)=>{
//     const ns = a.toLowerCase();
//     if(ns.includes('india')){
//         return true;
//     }
//     else {return false;}
// });

// console.log(ans);




// reduce:

// const arr = [10,22,34,50];
//  const ans =  arr.reduce((total,current,c,d)=>{
//     console.log(total,current,c,d);
//     return total+current;

//  })

// CSSMediaRule



