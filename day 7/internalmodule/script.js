// const { isUtf8 } = require('node:buffer');
// const fs =require('node:fs');

// const data = fs.readFileSync('./harshit.txt', {encoding: 'utf8'});
// console.log(data.toString());



// const o = new Buffer.from('abc');
// console.log(o);



// const fsPromimses = require('fs/promises');
// console.log('start');
// const pr = fsPromimses.readFile('./harshit.txt',{ encoding: 'utf8'});
// pr.then((res)=>{
//     console.log(res);
// })
// console.log('end');







// call back in file system
// const fs = require('fs');

// fs.readFile('./harshit.txt',{encoding: 'utf-8'}, (err, data)=>{
//     console.log(data);
// });


// const http = require('http');

// const htmlTemplate = 

// const card1 = cardTemplate
//            .replace('__TITLE__','Xiamoi Note 11 pro')
//            .replace('__TWO__','This is a chineese mobile');
// const card2 = cardTemplate
//            .replace('__TITLE__','Iphone 15')
//            .replace('__TWO__','This is a chineese mobile'); 

//         //    object to json string
//         // json strinig to object
//         const data = fs.readFilesync('./data.json', 'utf8');
//         const htmlTemplate = fs.readFilesync('./templates/page.html', {encoding, 'utf8'}); 

    

const http = require('http');
const fs = require('fs')
const data = fs.readFileSync('./data.json','utf8')
// const htmlTemplate = fs.readFileSync('./templates/page.html',{encoding:'utf8'})
// const cardTemplate = fs.readFileSync('./templates/card.html',{encoding:'utf8'})
const dataObj=JSON.parse(data)
const products= dataObj.products;
console.log(dataObj)
const htmlTemplate =`
<!DOCTYPE HTML>
<html>
    <head>
    <style>
    .product-card{
        max-width:500px;
        margin:20px auto;
        border: 3px double brown;
        border-radius: 8px;
        padding:16px;
    }
  
    </style>
    </head><body>_PRODUCTS_CARDS_</body>
</html>`
const cardTemplate=`<div class='product-card'>
<h4>_TITLE_</h4>
<img src="IMAGE_URL" alt="TITLE Image">
<p>INFO_</p>
</div>`
// const card1 = cardTemplate
//                     .replace('_TITLE_',products[0].title)
//                     .replace('_INFO_',products[0].description)
// const card2 = cardTemplate
//                     .replace('_TITLE_',products[1].title)
//                     .replace('_INFO_',products[1].description)
// const card3 = cardTemplate
//                     .replace('_TITLE_',products[2].title)
//                     .replace('_INFO_',products[2].description)
// const allCards = card1 + card2 + card3
const allCards= products.map((elem)=>{
    let newCard = cardTemplate
    newCard = newCard.replace('_TITLE_',elem.title)
    newCard = newCard.replace('IMAGE_URL', elem.thumbnail);
   
    newCard = newCard.replace('_INFO_',elem.description)
    return newCard
}) 
// const allCardsString = allCards.join(' ')                   
const page =htmlTemplate.replace('_PRODUCTS_CARDS_',allCards)
// const server = http.createServer((req,res)=>{
//         console.log(req.url);
//         res.writeHead(200,{
//             'content-type': 'text/html',
//         })
//         res.end(page)
//     });
//     server.listen(1400,()=>{
//         console.log('...server started...');
//     })
// // //cd .. is used to comeback one directory.

// // //readfilesync
// // // we can write this line as=
// //  const fs = require('fs');
// // // const fs = require('node:fs');


// //  const data =fs.readFileSync('./myreadme.txt',{encoding:'utf-8'});
//  to change buffer into particular styring -----
//  one way is through encodinmg and second way is by using .toString()

//  convert buffer to sting= data.toString();
 console.log(data.toString());

console.log(data);


// /* Buffer(global) */

// //will give in hexadecimal.
const b= new Buffer.from('abc');
console.log(b);
console.log(b.toString());
b.write('other');
console.log(b.toString());


// write something in file
// const fs= require('fs');
fs.writeFileSync('./myreadme.txt',"10th April 2024:Day 7");






//  const fs = require('fs');
//  console.log("start");
// const data =fs.readFileSync('./myreadme.txt',{encoding:'utf-8'});
//  console.log(data);
//  console.log("end");


 //blocking and non blocking behaviour

//  const fsPromises = require('fs/promises');
//  console.log('start');
//   const pr=fsPromises.readFile('./myreadme.txt',{encoding:'utf-8'});
//   console.log(pr);
//   pr.then((res)=>{
    
//     console.log(res);
//   })
//   console.log('end');
//   console.log(pr);

//callback in filesystem

// const fs= require('fs');
// const data =fs.readFileSync('./myreadme.txt',{encoding:"utf-8"},(err,data)=>{
//     console.log(data);

// });

// http://localhost:1400/
// const http = require('http');
const app= http.createServer((req,res)=>{
    // console.log('Request Recieved');
    console.log(req.url);
    res.writeHead(200,{
        'content-type':'text/html',
    })
    res.end(page);
})
app.listen(1600,()=>{
    console.log('.....................server started.........');
})







           


