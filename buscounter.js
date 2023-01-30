let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")

//console.log(countEl);

let count=0;

function increment(){
    count+=1
   countEl.textContent = count

   // console.log(count)
    
}


function save() {
    let lastentries=count + " - ";
    saveEl.textContent+=lastentries;
    countEl.textContent = 0;
    count =0;
    console.log(count)
}