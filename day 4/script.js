// const obj= {
//     name:'harshit',
//     lastName: 'shekhar',
    
// }
// console.log(obj);
// document.write(obj);
// document.write(JSON.stringify(obj));

// const str= JSON.stringify(obj);
// document.write(obj);



// let arr = [];
// arr=[3,2,5];
// console.log(arr);

// const arr = [2,3,4];
// arr[10]=20;
// console.log(arr);
// // we do not have length issues so we ca assign the 10th index value.


// const arr = [2,3,4];
// arr.push[10] = 20;
// // not urnning.
// console.log(arr);


// const arr= [1,2,34];
// arr[2] = 4;
// console.log(arr);
// we can change the value of the index by using this.
// run this program.






// const obj={
//     'name' : 'harshit',
// }
// console.log(typeof(obj));


// const arr= [1,2,34];
// arr[2] = 4;
// console.log(arr);
// console.log(typeof(arr));
// both of them are giving object but they are different.
// console.log(Array.isArray(obj));
// console.log(Array.isArray(arr));
// array.isarray is used tocheck if it is array or not.
// as it give all the properties of Array.




// checkIfObject([1,2,3,4])
// checkIfObject({name: "ajay"})

//  function checkIfobject(x){
//     if(Array.isArray(x)=="object"){
//     console.log("not object");

//  }
//  else if(typeof(x)=="object"{
//     console.log("object");
//  }
//  else{
//     console.log("not object");
//  }
//  }
//  checkIfobject([x]);



// const arr = ['name', 2];
// const obj={ 
//     'name':"ajay", age:20, 1: 'else'
// };
// for(let i=0; i<2; i++){
//     console.log(i);
// }
// yha ka puchna hai.
// for loop wala

// for of lop

// for(let i of arr){
//     console.log(i);
// }

// for(let i of obj){
//     console.log(i)
// }
// in this loop obj will get array
// it will only wowrk on array



// for in loop

// for( let i in obj){
//     console.log(i);..
// }


// window is global.
// console.log(window);
// console.log(innerHeight);
// console.log(innerWidth);
// console.log(window.innerHeight);

// window ke ander sab aata hai. main saar ye hai.

// console.log(window.document);
// console.log(window);

// console.log(console);
// console.dir(window.document);
// console.log(window.document)
// dir properties bta raha hai.



// *SELECTORS*
// const res=

// document.getElementsByTagName('h3')
// console.log(res)
// it is not array. ot is itterable.
// array is proper class in which there are propera functions .
// array is specialized class.
// itterable is generalized class. it is inside array.


// const res=

// document.getElementById('t1')
// console.log(res)
// error aarha tha.
// script end me lagaan hai.


// query selector

// const res=
// document.querySelectorAll('h2')
// console.log(res)

// const res=
// document.querySelectorAll('h3.ppp')
// console.log(res)

// const res=
// document.querySelectorAll('div>ht2')
// console.log(res)


// const res=
// document.getElementById("ht1");
// console.log(res);


// const res=
// document.getElementById("ht1");
// res.innerText="hello world";
// console.log(res);
// this is  used to change the elements of inside material.


// const res=
// document.getElementById("ht1");
// res['innerText']="hello world";
// console.log(res);
// another way of changing inner content


// const res=
// document.getElementsByTagName("div");
// res[0].innerText="hello world";
// console.log(res);
// inner text and inner html is used to change the inner content.


// const res=
// document.getElementsByTagName("p");
// console.log(res);

// res[0].setAttribute('tagname', 'h1')
// you can not chnage the tag name of the document.


// const res=
// document.getElementsByTagName("p");
// console.log(res);

// res[0].setAttribute('class', 'ppp');
// class wale me kya ho raha hai?



// to add structure in document 

const ne= document.createElement("h3");
ne.innerText="dynamic text";
// console.log(ne);
// dynanmic text will be created.


// to add this is dom we use
document.body.appendChild(ne);
const firstDiv= document.getElementsByTagName('div')
firstDiv[0].appendChild(ne);
// in this the worod dynamic text that we had given comes to 1st div .
// earlier it was coming at the end of the body.
// firstDiv[0] suggests the div number in the body.
// you cannot put same element in both the div.
// you have to copy it or clone it and then add it into both the div seprately.
// div copy and shallow copy me kya fark hai?

// remove kya karna hai?







