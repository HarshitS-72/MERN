// const figlet = require("figlet");


// figlet("Harshit", (err, data) => {
//     console.log(data)
// })

console.log('start');
async function callAPI(){
    const pr1 = new Promise((res, rej)=>
{
    console.log('promise 1...');
    setTimeout(()=>{
        console.log('timeout 1..');
},10000);
})
    console.log('promise 1 completed')
}

callAPI();