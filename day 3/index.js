// console.log('hello');

// var message='hello world';
// age='done';
// console.log(message);
// loosely typed
// strictly typed
// dynamically typed
// statically typed
// console.log(message);

// var message ="hello";
// console.log(message);

// message= "else";
// console.log(message);
// function env(){
//     for(var i=0; i<5; i++){
//         console.log('--',i);
//     }
//     console.log(i);
// }
// var is not global scope
// {
// let message="hello";
// let message="else";
// console.log(message);
// }
// const message="else ";
// console.log(message);

// neither re assignment nor re declaration

// let age= '20';
// age='abcd';
// console.log(typeof(age))
// bby using typeof we can find the data type of the given data.
// primitive datatypes are immutable
// string, number all are immutables.
// undefined vs null.
// data types under obejct are non primitive
// let userAge= 'abcd';
// userAge='abcd';
// console.log(_)
// camel case is not used in javascript.
// let arr= ['a', 'b', 'c', 'd'];
// arr[0]= 'abcd';
// console.log(arr);

// let str= '12';
// let age= 20;
// str=12*1

// // let ans = str+age
// let ans= age-(-str)
// console.log(ans)
// in minus it gets minus but in addition it gets concatenate.
// without string it is added normally.
// let str='12,12';
// let p= parseInt(str);
// let n= Number(str);
// console.log(p,n)
// read this . partsetIn and number.
// *typecheckng*
// let a='12';
// let b=12;

// if(a==b){
//     console.log('yes');
// }
// else{
//     console.log('no');
// }

// if(a===b){
//     console.log('yes again');
// }
// else{
//     console.log('no again');
// }

// let a=['a','b,','c','d'];
//  let cpy= [...a];
//  console.log(a, cpy)
// if(a==cpy){
//     console.log("1.yes");
// }
// else{
//     console.log("1.no");
// }
// if(a===cpy){
//         console.log('yes again');
//     }
//     else{
//         console.log('no again');
//     }
// *template 
// const str= 'harshit';
// const name= 'my name is: ';
// const ans= name+str;
// const usrName= 'my name is:';
// const ans = `${usrName} ${str}`;

// console.log(ans)

// function print(str='nothing is here'){
//     console.log(str);
// }
// const s ="hello"
// print();
// let a =1 ;
// if(a){
//     console.log("yes");
// }
// else
// {
//     console.log(no);
// }
// false values are 0 false null undefined, empty string
// function sum(a,b){
//     if(a && b){
//     console.log(a+b);
//     }
//     else if(a){
//         console.log(a);
//     }
//     else{
//         console.log(0);
//     }
// }
// sum();
// sum(2);
// sum(2,3)
// nan=not a number
// undefined is considered as false


// funciton declaration
// print();
// a();
// print can be called above the program but a or b can not.
// as let and  const cant be accessed.

// function print(){
//     console.log('--');
// }

// // functon assignment(named)

// const a =  function print(){
//     console.log('--');
// }

// // // functon assignment(anonympus)
// const b =  function (){
//     console.log('--');
// }

// // print();
// // a();
// // b();


//  //arrow functon assignment(anonympus)
// const c= () =>{
//     console.log('--');
// }
// c();

// return arrow function types




// switch case
// let a='2';
// switch(a){
//     case 1:{

//         console.log('one');
//     }
//     case 2:{
//         console.log("two");

//     }
//     case 3:{
//         console.log("three");

//     }
//     default: {
//         console.log('not');
//     }
// }

// const obj= new Object();
// obj[09]= 'twelve';
// obj[12]= 'eleven';
// obj[11]= 'eight';
// obj[10]= 'ten';
// console.log(obj)


// const obj= {

// 1: 'one',
// 'name':'harshit',
// };
// console.log(obj);




// we use keys by adding "." before the 1st name.
// const obj= {

   
//     'firstName':'harshit',
//     'lastName': 'shekhar'
//     };
//     const fullName= obj.firstName + ' ' +obj.lastName;
//     console.log(fullName);
    


    // const obj= {

   
    //     'firstName':'harshit',
    //     'lastName': 'shekhar'
    //     };
    //    const x= prompt('please tell the property to know:');
    //    console.log(x);



// how to get the value from the object:

    //    const obj= {

   
    //     'firstName':'harshit',
    //     'lastName': 'shekhar'
    //     };
    //    const x= prompt('please tell the property to know:');
    //    console.log(obj[x]);
    
