function fetchAPI(){
    const url ='
    https://weather.visualcrossing.com/
    VisualCrossingWebServices/
    rest/services /timeline/delhi?key=YOUR_API_KEY';
 fetch(url)
 .then((res)=>res.json())
 .then(console.log);
}
fetchAPI()

function renderUI(data){
    // const days = data.days;
    // console.log(days);
    const row= document.createElement("tr")
    // making heading row
    let cell = document.createElement("th")
    cell.innerText= 'Date';
    row.appendChild(cell1);

    const cell2= document.createElement("th")
    
    
    cell2.innerText= 'maximum temperature';
    row.appendChild(cell2);

   root.appende(row);

   const childRow = document.createElement("row");
   const c1 =document.createElement("th");
   cell1.innerText='date';
   child1Row.appendchild(c1);

   const childRow2 = document.createElement("tr");
   const c2 =document.createElement("th");
   cell2.innerText'90f';
   child1Row.appendchild(c2);

   root.appendChild(childRow);
   


}
renderUI();
