

var total=Number(document.getElementById("total-bill").value);
var final_total;

document.getElementById("five").addEventListener("click", ()=>{
  final_total=total+(total*0.05);
  console.log("lol");
})