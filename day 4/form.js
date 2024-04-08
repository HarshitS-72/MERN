// const firstNameChange= (e) =>{
//     // console.log(e);

//     // this shows the value in console
//     // console.log(e.target.value);
//     const val= e.target.value;
//     if(val.length>3){
//         console.log('correct')
//     }


// }

function submitForm(e) {
    // beacuse we want to display elements and not summit it, hence used predefault.
    e.preventDefault();
    // console.log(e);
    const t = e.target;
    // console.dir(e.target);
    const res = {
        hobbies: [],
    };


    //     for(let i=0; i<t.length;i++ ){
    //         // gives value and type of value


    //         // will give false if no checkbox is typed.a
    //         const ty= t[i].type;
    //         const vl= t[i].value;
    //         const nm =t[i].name;
    //         console.log(nm,ty,vl);
    //         // console.log(ty, vl);

    //         // to remove summit type
    //         if(ty!='submit'){
    //         res[nm]=vl;
    //         }
    //         if(ty=='checkbox'){
    //             console.log(t[i].checked)
    //         }


    //     }
    //     console.log(res)
    // 

    for (let i = 0; i < t.length; i++) {
        const ty = t[i].type;
        if (ty != 'submit') {
            const vl = t[i].value;
            const nm = t[i].name;

            if (ty == 'checkbox' && t[i].checked) {
                res.hobbies.push(vl);
            }
            if (ty != 'checkbox') {
                res[nm] = vl;
            }
        }
    }
    console.log(res)
}