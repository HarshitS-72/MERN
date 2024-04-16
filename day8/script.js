// // console.log("hello")
// const fs = require("fs");
// const http = require("http");

// const data = fs.readFileSync("./data.json", "utf-8")
// const dataObj = JSON.parse(data).products;
// // console.log("dataObj");

// const cardTemplate = `
// <div class = 'product-card'>
//     <h3> $TITLE</h3>
//     <img src ="$img_src$" alt= "product-image" />
//     <a href="$product_link$"> More Info </a>
// </div>`;
// let result =[];
// for(let i =0; i<dataObj.length; i++){
//     let temp = cardTemplate;
//     temp= temp.replace('$TITLE',dataObj[i].title);
//     temp = temp.replace('$img_src$', dataObj[i].images[0]);
//     temp = temp.replace('$product_link$', `?id= ${i}`);
//     result.push(temp);
// }
// // console.log(result);
// result = result.join('');
// const url = require('url');

// const server = http.createServer((req, res)=>{
//     const route= req.url;


//     const myUrl = url.parse(route);
//     console.log(myUrl.pathname);
//     if(myUrl.pathname == '/home') {
//         res.end(result);
//     } else if (myUrl.pathname == '/product') {

//         res.end("PRODUCTS PAGE")
//     } else if (myUrl.pathname == '/') {
//         res.end(result);
//     }else {
//         res.end("PAGE NOT FOUND!")
//     }

// });
// server.listen(1400);
// // order destructuring


const fs = require('fs');

const data = fs.readFileSync('./data.json', "utf-8");

const dataObj = JSON.parse(data);
const inputElement= `
<form action='/product'>
<input type = "text"
name= "productName">
<button type = "summit"> Search</button>
</form>`

// console.log(dataObj);


const cardTemplate = `
<div style="background-color:black" class="product_cart">
<a href="LINK"><h2 style="background-color:yellow">TITLE</h2></a>
<p style="background-color:beige" >DESC</p>
<img src="XXCS" alt="DECS">
<hr>
</div>`;

let result = [];

for (i = 0; i < dataObj.products.length; i++) {
    let singleCard = cardTemplate;

    singleCard = singleCard.replace("TITLE", dataObj.products[i].title)
        .replace("DESC", dataObj.products[i].description)
        .replace("XXCS", dataObj.products[i].thumbnail)
        .replace("LINK", `/product?productId=${i}`);


    result.push(singleCard);
}

result = result.join(' ')

// console.log(result)

const http = require('http');

const url = require('url');

const server = http.createServer((_req, res) => {
    res.writeHead(200, {
        'content-type' : 'text/html',

    });

    // const urls = url.parse(_req.url);
    // const myUrl = new URL("http://localhost:1400/" + route);
    // console.log(urls)
    const path = url.parse(_req.url, true);
    // console.log(query);
    const pathname = path.pathname;
    const query = path.query;
    if(pathname === '/home'){
        res.end(inputElement+result);
    }
    else if(pathname === '/about'){

    }
    else if( pathname === '/product'){
        // const id = q.id;
        const pName = q.productName;

        if(pName){
            console.log(pName);
            const searchNameResults = dataObj.filter((element)=>{
                if(elem.title.includes(pName)){
                    return true;
                }
                else{
                    false;
                }
            })
            res.end(JSON.stringify(searchNameResults));
        
        }
        else{
            res.end('<h3>error</h3>')
        }
    }
    
})
  

//     switch (pathname) {
//         case '/home':
//             res.end(result);
//             break;
//         case '/product':
//             // res.end('PRODUCTS PAGE');
//             res.end(
//                 `<div style= "background-color: black">
//                     <h2 style="background-color: beige">${dataObj.products[query.productId].title}</h2>
//                     <img src="${dataObj.products[query.productId].thumbnail}" style="shape:circle">
//                     <p style=" background-color:white ;">${dataObj.products[query.productId].description}</p>
//                     </div>`
//             )
//             break;
//         case '/':
//             res.end(result);
//             break;
//         default:
//             res.end("PAGE NOT FOUND");
//             // res.writeHead(404);
//             break;
//     }
// })

server.listen(1400);


// navbar, footer, search bar, atleast 30 items, styling
// const input element
// form ke under input type.
// form me action deke usko uss oage par bhej sakte hai.


