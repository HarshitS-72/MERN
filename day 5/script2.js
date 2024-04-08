// console.log('GEC Start');

// function printPretty(){
//     console.log('prettyStart')
//         let ans= 2+3;
//         console.log(ans);
//         console.log('prettyEnd');
//     }


// // setTimeout(printPretty, 30000);
// // console.log('GEC End');


// // add event listener
// const btn = document.getElementById('btn');
// btn.addEventListener("click", printPretty)



// calling external function:

// console.log('Start');
// fetch("a url  is saved here");
// console.log('end');


// console.log('Start');
// // const req = fetch("https://api.github.com");
// // console.log(req);

// // // this line is written as to print fetched after the 
// // req.then(()=>console.log('fetched'));
// console.log('end');


// fetch('https://dummyjson.com/products/1')
// .then(res => res.json())
// .then(res => console.log(res))


// .then(json => console.log(json))


// console.log('start')
// const req = fetch('https://dummyjson.com/products/1')

// const res = req.then(res => res.json());
// res.then((data)=>console.log(data));
// console.log(res);
// console.log('end');

// console.log('start')
// const req = fetch('https://dummyjson.com/products/1').then((res)=>res.json().then((data)=>console.log(data)));

// // const res = req.then(res => res.json());
// // res.then((data)=>console.log(data));
// // console.log(res);
// console.log('end');




// console.log("...APP STARTED...");

// function callAPI(){
//     fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=308b38fb77af4af2a09452c19f2894cf")
//     .then((res) => {
//         console.log(res)
//         return res.json();
//     })
//    .then((data)=>{
//     console.log(data);
//    })

// }

// // callAPI();

// // inserted the word in the main

// function renderUI(){
//     const root = document.getElementById("root");
//     const div= document.createElement("div");
//     div.innerText = 'card';

//     root.appendChild(div);
// }

// renderUI();





console.log("...APP STARTED...");

function callAPI() {
    fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=308b38fb77af4af2a09452c19f2894cf")
        .then((res) => {
            console.log(res)
            return res.json();
        })
        .then((data) => {
            renderUI(data);
        })

}




// function renderUI(data){
//     // to get articles properties
//     const articles = data.articles;
//     console.log(articles);


//     console.log(data);
//     const root = document.getElementById("root");
//     const div= document.createElement("div");
//     div.innerText = 'card';

//     root.appendChild(div);
// }

// function renderUI(data){
//     // to get articles properties
//     const articles = data.articles;




//     const root = document.getElementById("root");

//     // to get the value of 0th index
//     const ar = articles[1];
//     console.log(ar);
//     const div= document.createElement("div");
//     div.innerText = ar.title;

//     root.appendChild(div);
// }





function renderUI(data) {

    const root = document.getElementById("root");

    // to get articles properties
    const articles = data.articles;
    //  to repeat article
    for (let i = 0; i < articles.length; i++) {
        // to get the value of 0th index
        const ar = articles[i];

        if(ar.urlToImage == null) {
            continue;
        }
        // create parent div
        const div = document.createElement("div");
        // set attribute
        div.setAttribute("class", "news-card");
        const h3 = document.createElement("h3");
        h3.innerText = ar.title;

        const p= document.createElement("p");
        
        

        const img = document.createElement("img");
        img.src = ar.urlToImage;

        div.appendChild(h3);
        div.appendChild(img);
        root.appendChild(div);

    }
}

//     // to get the value of 0th index
//     const ar = articles[1];
//     // create parent div
//     const div= document.createElement("div");
//     // set attribute
//     div.setAttribute("class","news-card");
//     const h3= document.createElement("h3");
//     h3.innerText = ar.title;

//     const img= document.createElement("img");
//     img.src= ar.urlToImage;

//     div.appendChild(h3);
//     div.appendChild(img);
//     root.appendChild(div);
// }


callAPI();
