// const { json } = require('body-parser');
const express = require('express');
// const fs = require("fs");
const fsPromises = require("fs/promises");


const app = express();
app.use(express.json());

// app.get('/api/products', async(req, res)=>
// {
//     // const data = fs.readFileSync('./data.json', "utf=-8");
//     const data = await fsPromises.readFile("./data.json", "utf-8");
//     const arr = JSON.parse(data).products;
//   res.json({
//     status: "success",
//     results: arr.length,
//     data:{
//         products:arr
//     }

//   })
// });



app.post('/api/products', async (req, res) => {
    const data = req.body;
    data.id = 121;

    console.log(data);
    const db = await fsPromises.readFile("./data.json", "utf-8");
    const arr = JSON.parse(db);
    const length = arr.length;
    if (length == 0) {
        const newProduct = data;
        newProduct.id = 1;
        console.log(arr);
        arr.push(newProduct);
        fsPromises.writeFile("./data.json", JSON.stringify(arr));
        console.log(arr);
    }
    else {
        const newProduct = data;
        newProduct.id = (arr[length - 1].id) + 1;
        console.log(newProduct);
        arr.push(newProduct);
        fsPromises.writeFile("./data.json", JSON.stringify(arr));

    }
    res.send('work in progress');


});
app.put('/api/products/:id', async (req, res) => {
    const arr = JSON.parse(await fsPromises.readFile("./data.json", "utf-8"));
    const data = req.body;
    const reqId = req.params.id;
    data.id = reqId;
    // console.log(data);
    const newArr = arr.map((elem) => {
        if (elem.id == reqId) return data;
        else return elem;
    });
    fsPromises.writeFile('./data.json', JSON.stringify(newArr));
    res.json({
        status: 'success',
        data:{
            product: newArr

        }

    })

    res.send("completed");

})

app.listen(1400);
// flat map
// and it all went by this, somedays were too fucked up and some were not.

