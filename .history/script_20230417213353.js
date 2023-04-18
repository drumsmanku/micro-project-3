

var total=Number(document.getElementById("total-bill").value);
var final_total;

document.getElementById("5").addEventListener("click", ()=>{
  final_total=total+(total*0.05);
  console.log(final_total);
})