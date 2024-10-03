let btn = document.querySelector("#id2");
let ul = document.querySelector("#id3");
let input = document.querySelector("#id1");

btn.addEventListener("click", function() {
    let item = document.createElement("li");
    let btn1 = document.createElement("button");
    btn1.innerText = "Delete";
    item.innerText = input.value;
    item.appendChild(btn1);
   
    ul.appendChild(item);
    // console.log(input.value);
    input.value = "";
});

ul.addEventListener("click", function(event) {
   if (event.target.nodeName =="BUTTON") {
    let listItem = event.target.parentElement;
    listItem.remove();
}
});

// let dltBtn = document.querySelectorAll(".delete");
// for ( btnd of dltBtn){
//     btnd.addEventListener("click", function(){
//         let par = this.parentElement;
//         par.remove()
//     })
// }